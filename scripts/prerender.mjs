// Pré-rendu SEO, exécuté après `vite build`.
//
// Le site est une SPA React : sans ce script, chaque URL renvoie le même index.html
// (titre de l'accueil, <div id="root"> vide). Ici, on génère un fichier HTML par page
// avec son propre titre, sa description, son URL canonique et un contenu texte
// lisible par les moteurs de recherche. React remplace ce contenu dès son chargement.
//
// Fichiers produits : dist/projets.html, dist/projets/<id>.html, etc.
// Côté Nginx : try_files $uri $uri.html $uri/ /index.html;
// Le sitemap (dist/sitemap.xml) est régénéré à chaque build à partir des projets.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const SITE = 'https://mohamed-takadjio.site';
const NAME = 'Mohamed TAKADJIO';

const fr = JSON.parse(readFileSync(join(root, 'src/i18n/locales/fr.json'), 'utf8'));
const projects = JSON.parse(readFileSync(join(root, 'src/infrastructure/data/projects.json'), 'utf8'));
const template = readFileSync(join(dist, 'index.html'), 'utf8');
const today = new Date().toISOString().slice(0, 10);

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const clip = (s, n = 160) => {
  const t = String(s).replace(/\s+/g, ' ').trim();
  return t.length <= n ? t : t.slice(0, n - 1).replace(/\s+\S*$/, '') + '…';
};

// Navigation commune : liens internes en clair pour l'exploration des robots.
const nav = `<nav aria-label="Navigation principale"><ul>
<li><a href="/">Accueil</a></li>
<li><a href="/projets">Projets</a></li>
<li><a href="/competences">Compétences</a></li>
<li><a href="/experiences">Expériences</a></li>
<li><a href="/contact">Contact</a></li>
</ul></nav>`;

const footer = `<footer><p>${esc(NAME)}, développeur fullstack web &amp; mobile et DevOps au Cameroun (Yaoundé). ${esc(fr.footer.about)}</p>
<p>Email : <a href="mailto:legrandmohamed67@gmail.com">legrandmohamed67@gmail.com</a> · WhatsApp : <a href="https://wa.me/237677246900">+237 677 24 69 00</a></p></footer>`;

const projectList = (list) =>
  `<ul>${list
    .map(
      (p) =>
        `<li><a href="/projets/${esc(p.id)}">${esc(p.title)}</a> : ${esc(p.description.fr)}</li>`,
    )
    .join('\n')}</ul>`;

const codeProjects = projects.filter((p) => p.category === 'code');
const analysisProjects = projects.filter((p) => p.category === 'analyse');

const pages = [
  {
    path: '/',
    title: fr.meta.title,
    description: fr.meta.description,
    body: `<h1>${esc(NAME)} — Développeur Fullstack Web &amp; Mobile et DevOps au Cameroun</h1>
<p><strong>${esc(fr.hero.role)}</strong></p>
<p>${esc(fr.hero.intro)}</p>
<p>${esc(fr.hero.tagline)}</p>
<h2>Domaines d'expertise</h2>
<ul>
<li>Développement fullstack web &amp; mobile (React, TypeScript, FastAPI, Go, Django, Flutter)</li>
<li>DevOps : Docker, Nginx, Linux, CI/CD avec GitHub Actions, déploiement sur VPS</li>
<li>Analyse et architecture logicielle : UML, MERISE, conception d'API REST</li>
<li>Sécurité des systèmes d'information : TLS, authentification à deux facteurs, chiffrement, gestion sécurisée des clés d'API</li>
<li>Administration de bases de données : PostgreSQL, MySQL</li>
<li>Tests et assurance qualité (QA / UAT)</li>
</ul>
<h2>Projets en production</h2>${projectList(codeProjects)}
<h2>Analyse et conception</h2>${projectList(analysisProjects)}`,
  },
  {
    path: '/projets',
    title: `${fr.seo.projectsTitle} | ${NAME}`,
    description: fr.seo.projectsDescription,
    body: `<h1>Projets de ${esc(NAME)}, développeur au Cameroun</h1>
<p>${esc(fr.seo.projectsDescription)}</p>
<h2>Développement et mise en production</h2>${projectList(codeProjects)}
<h2>Analyse et conception (UML / MERISE)</h2>${projectList(analysisProjects)}`,
  },
  {
    path: '/competences',
    title: `${fr.seo.skillsTitle} | ${NAME}`,
    description: fr.seo.skillsDescription,
    body: `<h1>Compétences de ${esc(NAME)}, développeur fullstack et DevOps au Cameroun</h1>
<p>${esc(fr.seo.skillsDescription)}</p>`,
  },
  {
    path: '/experiences',
    title: `${fr.seo.experiencesTitle} | ${NAME}`,
    description: fr.seo.experiencesDescription,
    body: `<h1>Expériences professionnelles de ${esc(NAME)}</h1>
<p>${esc(fr.seo.experiencesDescription)}</p>`,
  },
  {
    path: '/contact',
    title: `${fr.seo.contactTitle} | ${NAME}`,
    description: fr.seo.contactDescription,
    body: `<h1>Contacter ${esc(NAME)}, développeur web et mobile au Cameroun</h1>
<p>${esc(fr.seo.contactDescription)}</p>`,
  },
  ...projects.map((p) => ({
    path: `/projets/${p.id}`,
    title: `${p.title} | ${NAME}`,
    description: p.description.fr,
    image: p.imageUrl,
    body: `<h1>${esc(p.title)}</h1>
<p>${esc(p.description.fr)}</p>
<p>${esc(p.details.fr)}</p>
<p>Technologies : ${esc([...(p.stack ?? []), ...(p.devStack ?? []).flatMap((d) => d.items)].join(', '))}</p>
${p.liveUrl ? `<p>Site en ligne : <a href="${esc(p.liveUrl)}" rel="noopener">${esc(p.liveUrl.replace(/^https?:\/\//, ''))}</a></p>` : ''}
<p>Projet réalisé par <a href="/">${esc(NAME)}</a>, développeur fullstack au Cameroun.</p>`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: p.title,
      description: p.description.fr,
      url: `${SITE}/projets/${p.id}`,
      ...(p.imageUrl ? { image: SITE + p.imageUrl } : {}),
      ...(p.liveUrl ? { sameAs: p.liveUrl } : {}),
      keywords: (p.stack ?? []).join(', '),
      inLanguage: 'fr',
      creator: { '@id': `${SITE}/#person` },
    },
  })),
];

function render(page) {
  const url = SITE + page.path;
  const desc = clip(page.description, 300);
  let html = template;
  const set = (re, value) => {
    if (!re.test(html)) throw new Error(`Balise introuvable dans index.html : ${re}`);
    html = html.replace(re, value);
  };
  set(/<title>[^<]*<\/title>/, `<title>${esc(page.title)}</title>`);
  set(/(<meta name="description" content=")[^"]*(")/, `$1${esc(desc)}$2`);
  set(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  set(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(page.title)}$2`);
  set(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(desc)}$2`);
  set(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  set(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${esc(page.title)}$2`);
  set(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${esc(desc)}$2`);
  if (page.path !== '/') set(/(<meta property="og:type" content=")[^"]*(")/, '$1website$2');
  if (page.jsonLd) {
    html = html.replace(
      '</head>',
      `<script type="application/ld+json">${JSON.stringify(page.jsonLd)}</script>\n</head>`,
    );
  }
  // Contenu statique : remplacé par l'application React au chargement.
  set(
    /<div id="root"><\/div>/,
    `<div id="root"><div class="mx-auto max-w-3xl px-6 py-16 text-zinc-300">${nav}<main>${page.body}</main>${footer}</div></div>`,
  );
  return html;
}

for (const page of pages) {
  const file = page.path === '/' ? join(dist, 'index.html') : join(dist, `${page.path.slice(1)}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, render(page));
}

// Sitemap généré automatiquement : tout nouveau projet y apparaît sans y penser.
const priority = (p) => (p === '/' ? '1.0' : p === '/projets' ? '0.9' : p.startsWith('/projets/') ? '0.7' : '0.8');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages
  .map((p) => {
    const img = p.path === '/' ? '/images/photo.jpg' : p.image;
    return `  <url>
    <loc>${SITE}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priority(p.path)}</priority>${img ? `\n    <image:image><image:loc>${SITE}${esc(img)}</image:loc></image:image>` : ''}
  </url>`;
  })
  .join('\n')}
</urlset>
`;
writeFileSync(join(dist, 'sitemap.xml'), sitemap);

console.log(`Pré-rendu SEO : ${pages.length} pages + sitemap.xml générés.`);

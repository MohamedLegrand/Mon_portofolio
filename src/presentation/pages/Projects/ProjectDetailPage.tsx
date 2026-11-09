import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Layers, CheckCircle2, ChevronRight, Code } from 'lucide-react';
import { useProject } from '@/presentation/hooks/useProject';
import { getProjectDetail } from '@/presentation/data/getProjectDetail';
import { useLanguage } from '@/presentation/hooks/useLanguage';
import { useTranslation } from 'react-i18next';
import { usePageMeta } from '@/presentation/hooks/usePageMeta';

// Nœud UML de déploiement (boîte en 3D)
function DeployNode({ x, y, w, h, d = 8 }: { x: number; y: number; w: number; h: number; d?: number }) {
  return (
    <g stroke="#dc2626" strokeWidth="1.3" fill="#18181b">
      <polygon points={`${x},${y} ${x + d},${y - d} ${x + w + d},${y - d} ${x + w},${y}`} fill="#27272a" />
      <polygon points={`${x + w},${y} ${x + w + d},${y - d} ${x + w + d},${y + h - d} ${x + w},${y + h}`} fill="#27272a" />
      <rect x={x} y={y} width={w} height={h} />
    </g>
  );
}

// Boîte interne (artefact, environnement d'exécution, composant)
function DeployBox({ x, y, w, h, stereo, name, sub, dashed = false }: {
  x: number; y: number; w: number; h: number; stereo: string; name: string; sub?: string; dashed?: boolean;
}) {
  const cx = x + w / 2;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="4" fill="#09090b" stroke={dashed ? '#71717a' : '#a1a1aa'} strokeWidth="1" strokeDasharray={dashed ? '4 3' : undefined} />
      <text x={cx} y={y + 13} fill="#a1a1aa" fontSize="8" textAnchor="middle">«{stereo}»</text>
      <text x={cx} y={y + 26} fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">{name}</text>
      {sub && <text x={cx} y={y + 38} fill="#f87171" fontSize="8" textAnchor="middle">{sub}</text>}
    </g>
  );
}

// Diagramme de déploiement UML de MyNkap
function DeploymentDiagram() {
  const { t } = useTranslation();
  const u = (k: string) => t(`projectDetail.uml.${k}`);
  return (
    <svg viewBox="0 0 450 420" className="w-full h-auto select-none" role="img" aria-label={u('deployTitle')}>
      <defs>
        <marker id="deployArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#a1a1aa" />
        </marker>
      </defs>

      {/* Postes clients */}
      <DeployNode x={10} y={16} w={190} h={80} />
      <text x={105} y={31} fill="#a1a1aa" fontSize="8" textAnchor="middle">«device»</text>
      <text x={105} y={44} fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">{u('deployBrowser')}</text>
      <DeployBox x={30} y={52} w={150} h={36} stereo="artifact" name={u('deployReactApp')} />

      <DeployNode x={242} y={16} w={190} h={80} />
      <text x={337} y={31} fill="#a1a1aa" fontSize="8" textAnchor="middle">«device»</text>
      <text x={337} y={44} fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">{u('deploySmartphone')}</text>
      <DeployBox x={262} y={52} w={150} h={36} stereo="artifact" name={u('deployFlutterApp')} />

      {/* Chemins de communication clients -> serveur */}
      <g stroke="#a1a1aa" strokeWidth="1.2">
        <line x1={105} y1={96} x2={105} y2={172} />
        <line x1={337} y1={96} x2={337} y2={172} />
      </g>
      <text x={112} y={122} fill="#d4d4d8" fontSize="8" fontWeight="bold">HTTPS</text>
      <text x={344} y={122} fill="#d4d4d8" fontSize="8" fontWeight="bold">HTTPS · REST</text>

      {/* Serveur */}
      <DeployNode x={10} y={136} w={422} h={206} />
      <text x={221} y={151} fill="#a1a1aa" fontSize="8" textAnchor="middle">«device»</text>
      <text x={221} y={164} fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">{u('deployServer')}</text>

      <DeployBox x={28} y={172} w={386} h={34} stereo="executionEnvironment" name={u('deployProxy')} />

      {/* Environnement Docker */}
      <rect x={28} y={218} width={386} height={114} rx="6" fill="none" stroke="#3f3f46" strokeWidth="1" strokeDasharray="5 4" />
      <text x={40} y={232} fill="#a1a1aa" fontSize="8">«executionEnvironment» Docker</text>

      <DeployBox x={40} y={246} w={104} h={74} stereo="component" name={u('deployAi')} sub={u('deployAiSub')} />
      <DeployBox x={169} y={246} w={104} h={74} stereo="component" name="API FastAPI" sub="API REST" />
      <DeployBox x={298} y={246} w={104} h={74} stereo="database" name="PostgreSQL" sub={u('deployDbSub')} />

      {/* Dépendances internes */}
      <g stroke="#a1a1aa" strokeWidth="1.2" fill="none">
        <line x1={221} y1={206} x2={221} y2={244} markerEnd="url(#deployArrow)" />
        <line x1={169} y1={283} x2={146} y2={283} markerEnd="url(#deployArrow)" />
        <line x1={273} y1={283} x2={296} y2={283} markerEnd="url(#deployArrow)" />
      </g>
      <text x={228} y={229} fill="#d4d4d8" fontSize="8">{u('deployForward')}</text>
      <text x={284} y={276} fill="#d4d4d8" fontSize="8" textAnchor="middle">SQL</text>

      {/* CI/CD */}
      <DeployBox x={125} y={366} w={192} h={46} stereo="device" name="GitHub Actions" sub="CI/CD" dashed />
      <line x1={221} y1={366} x2={221} y2={344} stroke="#dc2626" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#deployArrow)" />
      <text x={228} y={359} fill="#f87171" fontSize="8">{u('deployPipeline')}</text>
    </svg>
  );
}

// Liste de technologies sous forme de pastilles
function TechList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded-full bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-300 dark:border-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

// Fonction de coloration syntaxique à la volée basée sur regex
function tokenizeLine(line: string) {
  const regex = /(\/\/.*|#.*)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`)|(\b(?:import|from|export|default|const|let|var|function|class|def|return|async|await|try|except|raise|if|else|elif|for|in|self|from|as|while|break|continue|print|func|package|nil|type|struct|defer|go)\b)|(\b\d+\b)|(\b[a-zA-Z_]\w*(?=[(\s{]))|([{}()[\].,:;=+\-*/&|!<>])/g;
  
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  
  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      elements.push(line.substring(lastIndex, match.index));
    }
    
    const [
      ,
      comment,
      stringVal,
      keyword,
      numberVal,
      func,
      symbol
    ] = match;
    
    if (comment) {
      elements.push(<span key={match.index} className="text-zinc-500 italic">{comment}</span>);
    } else if (stringVal) {
      elements.push(<span key={match.index} className="text-amber-300/90">{stringVal}</span>);
    } else if (keyword) {
      elements.push(<span key={match.index} className="text-red-500 font-semibold">{keyword}</span>);
    } else if (numberVal) {
      elements.push(<span key={match.index} className="text-orange-400">{numberVal}</span>);
    } else if (func) {
      elements.push(<span key={match.index} className="text-blue-400">{func}</span>);
    } else if (symbol) {
      elements.push(<span key={match.index} className="text-zinc-400">{symbol}</span>);
    }
    
    lastIndex = regex.lastIndex;
  }
  
  if (lastIndex < line.length) {
    elements.push(line.substring(lastIndex));
  }
  
  return elements;
}

// Composant pour dessiner le diagramme UML correspondant pour la catégorie 'analyse'
function UmlDiagram({ type }: { type: 'usecase' | 'sequence' | 'class' | 'deployment' }) {
  const { t } = useTranslation();
  if (type === 'deployment') return <DeploymentDiagram />;
  if (type === 'usecase') {
    return (
      <svg viewBox="0 0 450 320" className="w-full h-auto text-zinc-400 select-none">
        {/* Cadre du Système */}
        <rect x="140" y="20" width="280" height="280" rx="12" fill="#000" stroke="#dc2626" strokeWidth="1.5" opacity="0.3" />
        <text x="150" y="40" fill="#dc2626" fontSize="10" fontWeight="bold" letterSpacing="0.05em">{t('projectDetail.uml.mobileMoneySystem')}</text>

        {/* Acteur Stick Figure */}
        <g transform="translate(50, 130)" stroke="#fff" strokeWidth="2.5" fill="none">
          <circle cx="20" cy="20" r="12" />
          <line x1="20" y1="32" x2="20" y2="75" />
          <line x1="2" y1="48" x2="38" y2="48" />
          <line x1="20" y1="75" x2="5" y2="110" />
          <line x1="20" y1="75" x2="35" y2="110" />
          <text x="20" y="130" fill="#fff" fontSize="10" fontWeight="bold" stroke="none" textAnchor="middle">{t('projectDetail.uml.fintechClient')}</text>
        </g>

        {/* Cas d'utilisation (ellipses) */}
        <g transform="translate(160, 60)">
          <ellipse cx="120" cy="25" rx="90" ry="20" fill="#18181b" stroke="#dc2626" strokeWidth="1.5" />
          <text x="120" y="28" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">{t('projectDetail.uml.authenticate')}</text>

          <ellipse cx="120" cy="85" rx="90" ry="20" fill="#18181b" stroke="#dc2626" strokeWidth="1.5" />
          <text x="120" y="88" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">{t('projectDetail.uml.transferFunds')}</text>

          <ellipse cx="120" cy="145" rx="90" ry="20" fill="#18181b" stroke="#dc2626" strokeWidth="1.5" />
          <text x="120" y="148" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">{t('projectDetail.uml.manageCards')}</text>

          <ellipse cx="120" cy="205" rx="90" ry="20" fill="#18181b" stroke="#dc2626" strokeWidth="1.5" />
          <text x="120" y="208" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">{t('projectDetail.uml.buyAirtime')}</text>
        </g>

        {/* Relations de liaison */}
        <g stroke="#9ca3af" strokeWidth="1.5" opacity="0.6">
          <line x1="88" y1="150" x2="185" y2="85" />
          <line x1="88" y1="170" x2="185" y2="145" />
          <line x1="88" y1="190" x2="185" y2="205" />
          <line x1="88" y1="205" x2="185" y2="265" />
        </g>
      </svg>
    );
  }

  if (type === 'sequence') {
    return (
      <svg viewBox="0 0 450 320" className="w-full h-auto text-zinc-400 select-none">
        {/* Lignes de vie */}
        <g stroke="#374151" strokeWidth="1" strokeDasharray="4 4">
          <line x1="60" y1="50" x2="60" y2="280" />
          <line x1="180" y1="50" x2="180" y2="280" />
          <line x1="300" y1="50" x2="300" y2="280" />
          <line x1="400" y1="50" x2="400" y2="280" />
        </g>

        {/* En-tête des participants */}
        <g fill="#18181b" stroke="#dc2626" strokeWidth="1.5" textAnchor="middle" fontSize="9" fontWeight="bold">
          <rect x="20" y="20" width="80" height="30" rx="4" />
          <text x="60" y="38" fill="#fff" stroke="none">{t('projectDetail.uml.client')}</text>

          <rect x="140" y="20" width="80" height="30" rx="4" />
          <text x="180" y="38" fill="#fff" stroke="none">{t('projectDetail.uml.merchantSite')}</text>

          <rect x="260" y="20" width="80" height="30" rx="4" />
          <text x="300" y="38" fill="#fff" stroke="none">HR-Skills Pay API</text>

          <rect x="360" y="20" width="80" height="30" rx="4" />
          <text x="400" y="38" fill="#fff" stroke="none">{t('projectDetail.uml.bank')}</text>
        </g>

        {/* Blocs d'activation */}
        <g fill="#dc2626" opacity="0.3">
          <rect x="57" y="70" width="6" height="190" />
          <rect x="177" y="85" width="6" height="150" />
          <rect x="297" y="105" width="6" height="110" />
        </g>

        {/* Messages / Flèches */}
        <g strokeWidth="1.2" fontSize="8" fontWeight="bold">
          <path d="M 63 90 L 171 90" fill="none" stroke="#fff" markerEnd="url(#arrow)" />
          <text x="117" y="85" fill="#fff" textAnchor="middle">{t('projectDetail.uml.step1')}</text>

          <path d="M 183 110 L 291 110" fill="none" stroke="#dc2626" markerEnd="url(#arrow)" />
          <text x="237" y="105" fill="#dc2626" textAnchor="middle">{t('projectDetail.uml.step2')}</text>

          <path d="M 303 130 L 391 130" fill="none" stroke="#fff" markerEnd="url(#arrow)" />
          <text x="347" y="125" fill="#fff" textAnchor="middle">{t('projectDetail.uml.step3')}</text>

          <path d="M 391 160 L 303 160" fill="none" stroke="#9ca3af" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <text x="347" y="155" fill="#9ca3af" textAnchor="middle">{t('projectDetail.uml.step4')}</text>

          <path d="M 297 190 L 183 190" fill="none" stroke="#dc2626" markerEnd="url(#arrow)" />
          <text x="237" y="185" fill="#dc2626" textAnchor="middle">{t('projectDetail.uml.step5')}</text>

          <path d="M 177 220 L 63 220" fill="none" stroke="#9ca3af" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <text x="117" y="215" fill="#9ca3af" textAnchor="middle">{t('projectDetail.uml.step6')}</text>
        </g>

        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
          </marker>
        </defs>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 450 320" className="w-full h-auto text-zinc-400 select-none">
      {/* Box Utilisateur */}
      <g transform="translate(30, 40)" fill="#18181b" stroke="#dc2626" strokeWidth="1.5">
        <rect width="120" height="90" rx="4" />
        <line x1="0" y1="25" x2="120" y2="25" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="0" y1="60" x2="120" y2="60" stroke="#dc2626" strokeWidth="1.5" />
        <text x="60" y="17" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle" stroke="none">Utilisateur</text>
        <text x="10" y="38" fill="#9ca3af" fontSize="8" stroke="none">- id : UUID</text>
        <text x="10" y="50" fill="#9ca3af" fontSize="8" stroke="none">- email : String</text>
        <text x="10" y="73" fill="#fff" fontSize="8" stroke="none">+ seConnecter()</text>
        <text x="10" y="83" fill="#fff" fontSize="8" stroke="none">+ sAuthentifier()</text>
      </g>

      {/* Box Livre */}
      <g transform="translate(290, 40)" fill="#18181b" stroke="#dc2626" strokeWidth="1.5">
        <rect width="120" height="90" rx="4" />
        <line x1="0" y1="25" x2="120" y2="25" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="0" y1="60" x2="120" y2="60" stroke="#dc2626" strokeWidth="1.5" />
        <text x="60" y="17" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle" stroke="none">LivreNumérique</text>
        <text x="10" y="38" fill="#9ca3af" fontSize="8" stroke="none">- codeISBN : String</text>
        <text x="10" y="50" fill="#9ca3af" fontSize="8" stroke="none">- titre : String</text>
        <text x="10" y="73" fill="#fff" fontSize="8" stroke="none">+ chargerContenu()</text>
        <text x="10" y="83" fill="#fff" fontSize="8" stroke="none">+ telecharger()</text>
      </g>

      {/* Box Achat */}
      <g transform="translate(160, 190)" fill="#18181b" stroke="#dc2626" strokeWidth="1.5">
        <rect width="120" height="95" rx="4" />
        <line x1="0" y1="25" x2="120" y2="25" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="0" y1="65" x2="120" y2="65" stroke="#dc2626" strokeWidth="1.5" />
        <text x="60" y="17" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle" stroke="none">Commande / Achat</text>
        <text x="10" y="38" fill="#9ca3af" fontSize="8" stroke="none">- idTransaction : String</text>
        <text x="10" y="48" fill="#9ca3af" fontSize="8" stroke="none">- dateCommande : Date</text>
        <text x="10" y="58" fill="#9ca3af" fontSize="8" stroke="none">- montant : Decimal</text>
        <text x="10" y="78" fill="#fff" fontSize="8" stroke="none">+ validerAchat()</text>
        <text x="10" y="88" fill="#fff" fontSize="8" stroke="none">+ genererFacture()</text>
      </g>

      <g stroke="#9ca3af" strokeWidth="1.5" fill="none">
        <line x1="90" y1="130" x2="160" y2="210" />
        <text x="80" y="145" fill="#9ca3af" fontSize="8" fontWeight="bold">1</text>
        <text x="125" y="195" fill="#9ca3af" fontSize="8" fontWeight="bold">0..*</text>

        <line x1="350" y1="130" x2="280" y2="210" />
        <text x="355" y="145" fill="#9ca3af" fontSize="8" fontWeight="bold">1..*</text>
        <text x="300" y="195" fill="#9ca3af" fontSize="8" fontWeight="bold">0..*</text>
      </g>
    </svg>
  );
}

export function ProjectDetailPage() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { project, loading, error } = useProject(id);
  const lang = useLanguage();
  const detail = id ? getProjectDetail(id, lang) : null;
  const found = !loading && !error && !!project && !!detail;
  usePageMeta({
    title: project?.title ?? t('projectDetail.notFound'),
    description: project?.description,
    noindex: !loading && !found,
  });

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-white dark:bg-black text-zinc-900 dark:text-white">
        <span className="flex h-5 w-5 rounded-full border-2 border-red-600 border-t-transparent animate-spin mr-3" />
        {t('projectDetail.loading')}
      </div>
    );
  }

  if (error || !project || !detail) {
    return (
      <section className="mx-auto max-w-xl px-6 py-32 text-center text-zinc-900 dark:text-white">
        <h2 className="text-2xl font-bold text-red-700 dark:text-red-500">{t('projectDetail.notFound')}</h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm">{t('projectDetail.notFoundText')}</p>
        <Link to="/projets" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-500 hover:text-zinc-900 dark:hover:text-white border border-red-500/20 hover:border-red-600 px-4 py-2 rounded transition-all">
          <ArrowLeft className="h-4 w-4" />
          {t('projectDetail.back')}
        </Link>
      </section>
    );
  }

  const isAnalyse = detail.category === 'analyse';

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 text-left text-zinc-900 dark:text-white bg-white dark:bg-black">
      {/* Bouton de retour */}
      <Link
        to="/projets"
        className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors mb-12"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        {t('projectDetail.back')}
      </Link>

      {/* En-tête */}
      <div className="border-b border-zinc-200 dark:border-zinc-900 pb-8 mb-12">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-red-100 dark:bg-red-950/40 border border-red-300 dark:border-red-900/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-700 dark:text-red-500 font-mono">
            {isAnalyse ? t('projectDetail.categoryAnalysis') : t('projectDetail.categoryCode')}
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-mono">
            {isAnalyse ? 'UML & MERISE' : project.stack.filter((tech) => tech !== 'SEO').slice(0, 3).join(' / ')}
          </span>
        </div>
        <h1 className="mt-4 text-4xl sm:text-6xl font-bold text-zinc-900 dark:text-white uppercase font-bebas tracking-wide leading-none">
          {detail.title}
        </h1>
        <p className="mt-2 text-md sm:text-lg font-medium text-red-700 dark:text-red-500 font-mono">
          {detail.subtitle}
        </p>
      </div>

      {/* Contenu principal en grille */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Colonne Gauche : Explications détaillées */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white font-mono">
              <BookOpen className="h-4 w-4 text-red-700 dark:text-red-500" />
              {t('projectDetail.overview')}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              {detail.mainDescription}
            </p>
          </div>

          <div className="space-y-8">
            {detail.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h4 className="text-md font-bold text-zinc-900 dark:text-white uppercase tracking-wide flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-red-600" />
                  {section.title}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed pl-6">
                  {section.content}
                </p>
                {section.list && (
                  <ul className="space-y-2 pl-10">
                    {section.list.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        <CheckCircle2 className="h-3.5 w-3.5 text-red-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Colonne Droite : Diagramme UML ou Code Source */}
        <div className="lg:col-span-5 space-y-8">
          {isAnalyse && detail.umlSvgType && (
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/20 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 border-b border-zinc-900 pb-3 mb-6">
                <Layers className="h-4 w-4 text-red-500" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  {t('projectDetail.umlHeading')}
                </h3>
              </div>
              
              <p className="text-sm text-zinc-400 mb-6 italic leading-relaxed">
                {t('projectDetail.umlText')}
              </p>

              {/* Rendu SVG */}
              <div className="w-full rounded-xl border border-zinc-900 bg-black/60 p-4 flex items-center justify-center shadow-inner">
                <UmlDiagram type={detail.umlSvgType} />
              </div>

              <p className="text-center text-xs text-zinc-400 font-mono mt-3 uppercase tracking-wider">
                {detail.umlDiagramName}
              </p>

              {detail.modelingSummary && (
                <div className="mt-6 border-t border-zinc-900 pt-5">
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono mb-3">
                    {t('projectDetail.modelingDeliverables')}
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {detail.modelingSummary}
                  </p>
                </div>
              )}
            </div>
          )}

          {!isAnalyse && detail.codeContent && detail.codeFilename && (
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/20 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 border-b border-zinc-900 pb-3 mb-6">
                <Code className="h-4 w-4 text-red-500" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  {t('projectDetail.codeHeading')}
                </h3>
              </div>

              <p className="text-sm text-zinc-400 mb-6 italic leading-relaxed">
                {t('projectDetail.codeText', { stack: detail.codeLanguage === 'javascript' ? t('projectDetail.codeFrontend') : detail.codeLanguage === 'go' ? t('projectDetail.codeBackendGo') : t('projectDetail.codeBackend') })}
              </p>

              {/* Rendu Code avec coloration syntaxique */}
              <div className="w-full rounded-xl border border-zinc-900 bg-zinc-950 overflow-hidden">
                {/* Barre macOS */}
                <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/60 border-b border-zinc-900/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block" />
                  </div>
                  <span className="text-xs text-zinc-400 font-mono">
                    {detail.codeFilename}
                  </span>
                  <div className="w-8" />
                </div>
                
                {/* Corps de l'éditeur */}
                <div className="p-4 font-mono text-xs leading-relaxed overflow-x-auto max-h-[350px] bg-black text-left whitespace-pre">
                  <code>
                    {detail.codeContent.split('\n').map((line, idx) => (
                      <div key={idx} className="table-row">
                        <span className="table-cell select-none text-zinc-600 pr-4 text-right w-8">{idx + 1}</span>
                        <span className="table-cell">{tokenizeLine(line)}</span>
                      </div>
                    ))}
                  </code>
                </div>
              </div>
            </div>
          )}

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-900 bg-zinc-100/40 dark:bg-zinc-950/10 p-6 text-left">
            <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest font-mono border-b border-zinc-200 dark:border-zinc-900 pb-2 mb-3">
              {isAnalyse ? t('projectDetail.modelingTech') : t('projectDetail.technologies')}
            </h4>
            <TechList items={project.stack} />

            {project.devStack && project.devStack.length > 0 && (
              <>
                <h4 className="mt-6 text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest font-mono border-b border-zinc-200 dark:border-zinc-900 pb-2 mb-3">
                  {t('projectDetail.devTech')}
                </h4>
                <div className="flex flex-col gap-3">
                  {project.devStack.map((group) => (
                    <div key={group.platform ?? 'all'} className="flex flex-col gap-2">
                      {group.platform && (
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                          {t(`projectDetail.platform.${group.platform}`)}
                        </span>
                      )}
                      <TechList items={group.items} />
                    </div>
                  ))}
                </div>
              </>
            )}

            {project.liveUrl && (
              <div className="mt-6 pt-5 border-t border-zinc-200 dark:border-zinc-900 flex flex-col gap-2">
                <span className="text-xs uppercase font-bold text-zinc-600 dark:text-zinc-400 tracking-wider">{t('projectDetail.liveLink')}</span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-red-700 dark:text-red-500 hover:underline flex items-center gap-1.5"
                >
                  {t('projectDetail.visitLive')}
                  <ArrowLeft className="h-3 w-3 rotate-180" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

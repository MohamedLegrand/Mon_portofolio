/**
 * Classes d'affichage d'une image de projet selon sa nature :
 * - logo avec son propre fond foncé/coloré (carré) → entier, sur fond noir ;
 * - autre logo (fond blanc ou transparent)        → entier, sur fond blanc ;
 * - sinon : photo d'illustration                  → recadrée pour remplir la carte.
 */
const DARK_BACKGROUND_LOGOS = ['hr-pay-logo', 'perenkap-logo'];

export function projectImageClass(url?: string): string {
  if (url && DARK_BACKGROUND_LOGOS.some((name) => url.includes(name))) {
    return 'object-contain p-4 bg-black rounded-xl border border-zinc-300 dark:border-zinc-800 group-hover:scale-[1.02]';
  }
  if (url && /logo/i.test(url)) return 'object-contain p-6 bg-white group-hover:scale-[1.02]';
  return 'object-cover group-hover:scale-105';
}

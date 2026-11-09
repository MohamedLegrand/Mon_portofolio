/**
 * Classes d'affichage d'une image de projet selon sa nature :
 * - « logo-xxx » : logo sur fond transparent/blanc → entier, sur fond blanc ;
 * - « xxx-logo » : logo avec son propre fond (carré coloré) → entier, sur fond noir ;
 * - sinon : photo d'illustration → recadrée pour remplir la carte.
 */
export function projectImageClass(url?: string): string {
  if (url?.includes('/logo-')) return 'object-contain p-6 bg-white group-hover:scale-[1.02]';
  if (url && /-logo\.\w+$/.test(url)) return 'object-contain p-4 bg-black rounded-xl border border-zinc-300 dark:border-zinc-800 group-hover:scale-[1.02]';
  return 'object-cover group-hover:scale-105';
}

export function QuoteCard() {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-red-950/20 border border-red-900/30 p-8 text-white min-h-[300px] h-full">
      <div className="absolute right-4 top-4 text-9xl font-serif text-red-800/10 select-none pointer-events-none">
        “
      </div>
      
      <div className="flex flex-col gap-4">
        {/* Icône de citation */}
        <span className="text-red-500 text-5xl font-serif leading-none select-none">“</span>
        <p className="text-lg font-medium leading-relaxed tracking-wide text-red-100/90">
          Le code en lui-même n'est pas l'essence d'un projet ; sa véritable valeur réside dans l'analyse et la modélisation de sa solution.
        </p>
      </div>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-wider text-red-600 font-bold">
          Méthodologie & Modélisation
        </p>
      </div>
    </div>
  );
}

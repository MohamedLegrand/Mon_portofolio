export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-300 dark:border-zinc-800 border-t-violet-500" />
      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-500 font-medium">Chargement en cours...</p>
    </div>
  );
}

import { AnalysisDiagram } from './AnalysisDiagram';
import { CodeTypewriter } from './CodeTypewriter';

export function AnalysisVsCode() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 flex flex-col gap-20 bg-black">
      <AnalysisDiagram />
      <CodeTypewriter />
    </section>
  );
}

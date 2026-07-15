import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

// Types de tokens
interface CodeToken {
  text: string;
  type: 'comment' | 'keyword' | 'string' | 'function' | 'class' | 'type' | 'variable' | 'plain';
}

interface Snippet {
  filename: string;
  tokens: CodeToken[];
}

// Extraits de code de démonstration
const codeSnippets: Snippet[] = [
  {
    filename: 'analyse.py',
    tokens: [
      { text: "# Modèle métier issu de l'analyse UML\n", type: 'comment' },
      { text: "class ", type: 'keyword' },
      { text: "Projet", type: 'class' },
      { text: ":\n    ", type: 'plain' },
      { text: "def ", type: 'keyword' },
      { text: "__init__", type: 'function' },
      { text: "(self, titre: ", type: 'plain' },
      { text: "str", type: 'type' },
      { text: ", complexite: ", type: 'plain' },
      { text: "int", type: 'type' },
      { text: "):\n        self.", type: 'plain' },
      { text: "titre", type: 'variable' },
      { text: " = titre\n        self.", type: 'plain' },
      { text: "complexite", type: 'variable' },
      { text: " = complexite\n        self.", type: 'plain' },
      { text: "valide", type: 'variable' },
      { text: " = ", type: 'plain' },
      { text: "False", type: 'keyword' },
      { text: "\n\n    ", type: 'plain' },
      { text: "def ", type: 'keyword' },
      { text: "valider_specs", type: 'function' },
      { text: "(self):\n        ", type: 'plain' },
      { text: "# Valide si l'architecture technique est posée\n        ", type: 'comment' },
      { text: "self.", type: 'plain' },
      { text: "valide", type: 'variable' },
      { text: " = ", type: 'plain' },
      { text: "True", type: 'keyword' },
      { text: "\n        print(", type: 'plain' },
      { text: "f\"Projet {self.titre} validé !\"", type: 'string' },
      { text: ")", type: 'plain' }
    ]
  },
  {
    filename: 'Architecture.tsx',
    tokens: [
      { text: "// Composant représentant le Use Case d'architecture\n", type: 'comment' },
      { text: "import ", type: 'keyword' },
      { text: "React", type: 'variable' },
      { text: " from ", type: 'keyword' },
      { text: "'react'", type: 'string' },
      { text: ";\n\n", type: 'plain' },
      { text: "export const ", type: 'keyword' },
      { text: "ConcoisArchitecture", type: 'function' },
      { text: ": React.FC = () => {\n  ", type: 'plain' },
      { text: "const ", type: 'keyword' },
      { text: "initArchitecture", type: 'function' },
      { text: " = () => {\n    console.log(", type: 'plain' },
      { text: "\"Architecture technique initialisée.\"", type: 'string' },
      { text: ");\n  };\n\n  ", type: 'plain' },
      { text: "return ", type: 'keyword' },
      { text: "(\n    <", type: 'plain' },
      { text: "button ", type: 'keyword' },
      { text: "onClick={", type: 'plain' },
      { text: "initArchitecture", type: 'variable' },
      { text: "}>\n      Lancer le Projet\n    </", type: 'plain' },
      { text: "button", type: 'keyword' },
      { text: ">\n  );\n};", type: 'plain' }
    ]
  }
];

// Hook personnalisé pour l'effet machine à écrire
function useTypewriter(snippets: Snippet[], inView: boolean) {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'waiting' | 'deleting'>('typing');

  const currentSnippet = snippets[snippetIndex];
  const totalLength = currentSnippet.tokens.reduce((acc, t) => acc + t.text.length, 0);

  useEffect(() => {
    if (!inView) return;

    let timer: any;

    const tick = () => {
      if (phase === 'typing') {
        if (charIndex < totalLength) {
          setCharIndex((prev) => prev + 1);
          timer = setTimeout(tick, 30);
        } else {
          setPhase('waiting');
          timer = setTimeout(tick, 2000);
        }
      } else if (phase === 'waiting') {
        setPhase('deleting');
        timer = setTimeout(tick, 15);
      } else if (phase === 'deleting') {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
          timer = setTimeout(tick, 15);
        } else {
          // Passer à l'extrait suivant
          setSnippetIndex((prev) => (prev + 1) % snippets.length);
          setPhase('typing');
          timer = setTimeout(tick, 500);
        }
      }
    };

    timer = setTimeout(tick, 30);

    return () => clearTimeout(timer);
  }, [inView, charIndex, phase, totalLength, snippets.length, snippetIndex]);

  return {
    snippetIndex,
    charIndex,
    currentSnippet
  };
}

export function CodeTypewriter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const { charIndex, currentSnippet } = useTypewriter(codeSnippets, isInView);

  // Déterminer la classe CSS selon le type de token
  const getTokenClass = (type: string): string => {
    switch (type) {
      case 'comment':
        return 'text-zinc-600 italic';
      case 'keyword':
        return 'text-red-500 font-bold';
      case 'string':
        return 'text-emerald-400';
      case 'function':
        return 'text-amber-400';
      case 'class':
        return 'text-cyan-400';
      case 'type':
        return 'text-teal-400 font-semibold';
      case 'variable':
        return 'text-violet-400';
      default:
        return 'text-zinc-300';
    }
  };

  // Reconstitution progressive du code coloré
  const renderedElements = [];
  let displayedCharCount = 0;

  for (let i = 0; i < currentSnippet.tokens.length; i++) {
    const token = currentSnippet.tokens[i];
    const tokenText = token.text;
    const tokenLength = tokenText.length;

    if (displayedCharCount + tokenLength <= charIndex) {
      renderedElements.push(
        <span key={i} className={getTokenClass(token.type)}>
          {tokenText}
        </span>
      );
      displayedCharCount += tokenLength;
    } else if (displayedCharCount < charIndex) {
      const sliceCount = charIndex - displayedCharCount;
      renderedElements.push(
        <span key={i} className={getTokenClass(token.type)}>
          {tokenText.slice(0, sliceCount)}
        </span>
      );
      displayedCharCount += sliceCount;
      break;
    } else {
      break;
    }
  }

  return (
    <div ref={containerRef} className="w-full text-left">
      <style>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-cursor {
          animation: cursor-blink 0.9s step-end infinite;
        }
      `}</style>

      {/* Titre au-dessus */}
      <h2 className="font-bebas text-3xl md:text-5xl text-white border-b border-zinc-900 pb-3 mb-8 tracking-wider">
        ...au <span className="text-red-600">Code</span>.
      </h2>

      {/* Fenêtre Code macOS */}
      <div className="w-full rounded-2xl border border-zinc-900 bg-zinc-950/20 backdrop-blur-sm overflow-hidden">
        {/* Barre de titre macOS */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/60 border-b border-zinc-900/80">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
          </div>
          <span className="text-xs text-zinc-400 font-mono select-none">
            {currentSnippet.filename}
          </span>
          <div className="w-12" /> {/* Équilibreur d'espace */}
        </div>

        {/* Corps de l'éditeur */}
        <div className="p-6 font-mono text-[11px] sm:text-xs md:text-sm text-left overflow-x-auto min-h-[260px] md:min-h-[280px] max-h-[350px] leading-relaxed select-text whitespace-pre bg-black">
          {renderedElements}
          {/* Curseur vertical de frappe clignotant rouge */}
          <span className="inline-block w-[7px] h-[14px] sm:h-[16px] bg-red-600 ml-[2px] align-middle animate-cursor" />
        </div>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function AnalysisDiagram() {
  const { t } = useTranslation();
  // Animation variants
  const fadeInVariants = (delay: number) => ({
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' as const, delay }
    }
  });

  const pathVariants = (delay: number) => ({
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 0.4, ease: 'easeOut' as const, delay }
    }
  });

  return (
    <div className="w-full text-left">
      {/* Titre de la section */}
      <h2 className="font-bebas text-3xl md:text-5xl text-zinc-900 dark:text-white border-b border-zinc-200 dark:border-zinc-900 pb-3 mb-8 tracking-wider">
        {t('analysis.titleFrom')} <span className="text-red-600">{t('analysis.titleAnalysis')}</span>...
      </h2>

      {/* SVG Canvas Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative w-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-900 bg-zinc-100/60 dark:bg-zinc-950/40 backdrop-blur-sm p-4 md:p-8"
      >
        <svg
          viewBox="0 0 800 450"
          className="w-full h-auto text-zinc-600 dark:text-zinc-400 select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Définitions et Motifs (Dotted Grid Background & Arrowhead marker) */}
          <defs>
            <pattern id="dotted-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.2" className="fill-zinc-300 dark:fill-zinc-800" />
            </pattern>
            <marker
              id="uml-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              {/* Flèche ouverte standard UML */}
              <path d="M 2 2 L 8 5 L 2 8" fill="none" stroke="#dc2626" strokeWidth="1.5" />
            </marker>
          </defs>

          {/* Grille de fond */}
          <rect width="100%" height="100%" fill="url(#dotted-grid)" />

          {/* Sujet UML / Frontière du système (System Boundary) */}
          <motion.rect
            x="200"
            y="25"
            width="570"
            height="400"
            rx="12"
            ry="12"
            className="fill-zinc-100 dark:fill-zinc-950 stroke-zinc-300 dark:stroke-zinc-800"
            fillOpacity="0.5"
            strokeWidth="2"
            variants={fadeInVariants(0.4)}
          />
          <motion.text
            x="220"
            y="48"
            className="text-xs font-bold fill-zinc-600 dark:fill-zinc-400 uppercase tracking-widest font-mono"
            variants={fadeInVariants(0.4)}
          >
            {t('analysis.subject')}
          </motion.text>

          {/* ACTEUR UML (Client / Porteur de projet) */}
          <g className="actor">
            {/* Tête */}
            <motion.circle
              cx="100"
              cy="185"
              r="15"
              fill="none"
              className="stroke-zinc-900 dark:stroke-white"
              strokeWidth="2.5"
              variants={fadeInVariants(0)}
            />
            {/* Corps */}
            <motion.line
              x1="100"
              y1="200"
              x2="100"
              y2="250"
              className="stroke-zinc-900 dark:stroke-white"
              strokeWidth="2.5"
              variants={pathVariants(0.1)}
            />
            {/* Bras gauche */}
            <motion.line
              x1="100"
              y1="215"
              x2="80"
              y2="235"
              className="stroke-zinc-900 dark:stroke-white"
              strokeWidth="2.5"
              variants={pathVariants(0.2)}
            />
            {/* Bras droit */}
            <motion.line
              x1="100"
              y1="215"
              x2="120"
              y2="235"
              className="stroke-zinc-900 dark:stroke-white"
              strokeWidth="2.5"
              variants={pathVariants(0.2)}
            />
            {/* Jambe gauche */}
            <motion.line
              x1="100"
              y1="250"
              x2="80"
              y2="295"
              className="stroke-zinc-900 dark:stroke-white"
              strokeWidth="2.5"
              variants={pathVariants(0.3)}
            />
            {/* Jambe droite */}
            <motion.line
              x1="100"
              y1="250"
              x2="120"
              y2="295"
              className="stroke-zinc-900 dark:stroke-white"
              strokeWidth="2.5"
              variants={pathVariants(0.3)}
            />
            {/* Libellé Acteur */}
            <motion.text
              x="100"
              y="320"
              className="text-xs font-bold fill-zinc-600 dark:fill-zinc-400 text-center"
              textAnchor="middle"
              variants={fadeInVariants(0.4)}
            >
              {t('analysis.actor')}
            </motion.text>
          </g>

          {/* ================= RELATIONS ACTEUR -> CAS D'USAGE ================= */}
          {/* Ligne 1 */}
          <motion.line
            x1="120"
            y1="215"
            x2="280"
            y2="90"
            className="stroke-zinc-400 dark:stroke-zinc-600"
            strokeWidth="1.5"
            variants={pathVariants(0.5)}
          />
          {/* Ligne 2 */}
          <motion.line
            x1="120"
            y1="225"
            x2="280"
            y2="175"
            className="stroke-zinc-400 dark:stroke-zinc-600"
            strokeWidth="1.5"
            variants={pathVariants(0.9)}
          />
          {/* Ligne 3 */}
          <motion.line
            x1="120"
            y1="235"
            x2="260"
            y2="260"
            className="stroke-zinc-400 dark:stroke-zinc-600"
            strokeWidth="1.5"
            variants={pathVariants(1.3)}
          />
          {/* Ligne 4 */}
          <motion.line
            x1="120"
            y1="245"
            x2="250"
            y2="345"
            className="stroke-zinc-400 dark:stroke-zinc-600"
            strokeWidth="1.5"
            variants={pathVariants(1.7)}
          />

          {/* ================= CAS D'UTILISATION PRINCIPAUX ================= */}
          {/* 1. Exprimer un besoin */}
          <g className="usecase-1">
            <motion.ellipse
              cx="380"
              cy="80"
              rx="95"
              ry="28"
              className="fill-zinc-100 dark:fill-zinc-950"
              stroke="#dc2626"
              strokeWidth="2"
              variants={fadeInVariants(0.8)}
            />
            <motion.text
              x="380"
              y="84"
              className="text-xs font-bold fill-zinc-900 dark:fill-white tracking-wide"
              textAnchor="middle"
              variants={fadeInVariants(0.8)}
            >
              {t('analysis.useCaseNeed')}
            </motion.text>
          </g>

          {/* 2. Modéliser */}
          <g className="usecase-2">
            <motion.ellipse
              cx="380"
              cy="170"
              rx="95"
              ry="28"
              className="fill-zinc-100 dark:fill-zinc-950"
              stroke="#dc2626"
              strokeWidth="2"
              variants={fadeInVariants(1.2)}
            />
            <motion.text
              x="380"
              y="174"
              className="text-xs font-bold fill-zinc-900 dark:fill-white tracking-wide"
              textAnchor="middle"
              variants={fadeInVariants(1.2)}
            >
              {t('analysis.useCaseModel')}
            </motion.text>
          </g>

          {/* 3. Rédiger les specs */}
          <g className="usecase-3">
            <motion.ellipse
              cx="380"
              cy="260"
              rx="115"
              ry="28"
              className="fill-zinc-100 dark:fill-zinc-950"
              stroke="#dc2626"
              strokeWidth="2"
              variants={fadeInVariants(1.6)}
            />
            <motion.text
              x="380"
              y="264"
              className="text-xs font-bold fill-zinc-900 dark:fill-white tracking-wide"
              textAnchor="middle"
              variants={fadeInVariants(1.6)}
            >
              {t('analysis.useCaseSpecs')}
            </motion.text>
          </g>

          {/* 4. Concevoir l'architecture */}
          <g className="usecase-4">
            <motion.ellipse
              cx="380"
              cy="350"
              rx="125"
              ry="28"
              className="fill-zinc-100 dark:fill-zinc-950"
              stroke="#dc2626"
              strokeWidth="2"
              variants={fadeInVariants(2.0)}
            />
            <motion.text
              x="380"
              y="354"
              className="text-xs font-bold fill-zinc-900 dark:fill-white tracking-wide"
              textAnchor="middle"
              variants={fadeInVariants(2.0)}
            >
              {t('analysis.useCaseArchitecture')}
            </motion.text>
          </g>

          {/* ================= FLÈCHES EXTEND (Modéliser <- UML / Merise) ================= */}
          {/* Flèche extend UML */}
          <motion.line
            x1="610"
            y1="125"
            x2="480"
            y2="155"
            stroke="#dc2626"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            markerEnd="url(#uml-arrow)"
            variants={pathVariants(2.1)}
          />
          <motion.text
            x="545"
            y="132"
            className="text-xs font-bold fill-red-600 dark:fill-red-500 italic"
            textAnchor="middle"
            variants={fadeInVariants(2.1)}
          >
            &lt;&lt;extend&gt;&gt;
          </motion.text>

          {/* Flèche extend Merise */}
          <motion.line
            x1="610"
            y1="215"
            x2="480"
            y2="185"
            stroke="#dc2626"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            markerEnd="url(#uml-arrow)"
            variants={pathVariants(2.1)}
          />
          <motion.text
            x="545"
            y="208"
            className="text-xs font-bold fill-red-600 dark:fill-red-500 italic"
            textAnchor="middle"
            variants={fadeInVariants(2.1)}
          >
            &lt;&lt;extend&gt;&gt;
          </motion.text>

          {/* ================= SOUS-CAS D'UTILISATION ================= */}
          {/* UML */}
          <g className="sub-usecase-uml">
            <motion.ellipse
              cx="650"
              cy="120"
              rx="40"
              ry="18"
              className="fill-zinc-100 dark:fill-zinc-950 stroke-zinc-400 dark:stroke-zinc-600"
              strokeWidth="1.5"
              variants={fadeInVariants(2.4)}
            />
            <motion.text
              x="650"
              y="123"
              className="text-xs font-bold fill-zinc-700 dark:fill-zinc-300"
              textAnchor="middle"
              variants={fadeInVariants(2.4)}
            >
              UML
            </motion.text>
          </g>

          {/* Merise */}
          <g className="sub-usecase-merise">
            <motion.ellipse
              cx="650"
              cy="220"
              rx="40"
              ry="18"
              className="fill-zinc-100 dark:fill-zinc-950 stroke-zinc-400 dark:stroke-zinc-600"
              strokeWidth="1.5"
              variants={fadeInVariants(2.4)}
            />
            <motion.text
              x="650"
              y="223"
              className="text-xs font-bold fill-zinc-700 dark:fill-zinc-300"
              textAnchor="middle"
              variants={fadeInVariants(2.4)}
            >
              Merise
            </motion.text>
          </g>
        </svg>
      </motion.div>

      {/* Phrase de transition */}
      <p className="text-base sm:text-lg font-semibold text-red-700 dark:text-red-500 mt-6 text-left">
        {t('analysis.transition')}
      </p>
    </div>
  );
}

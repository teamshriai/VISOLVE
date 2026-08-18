import { FiArrowUpRight } from "react-icons/fi";

/**
 * Home-page CTA for ViSolve's AI healthcare offering.
 *
 * Uses the same navy panel idiom as the dark blocks on the service pages —
 * orange eyebrow, plain white heading, one solid orange button — so it reads
 * as part of the site rather than as a separate widget.
 */

/* Hexagonal frame, care cross, four network nodes: healthcare inside a
   connected system. Single currentColor and thin strokes so it stays quiet
   next to the heading, and legible down to ~40px. */
function AIHealthcareMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M24 3.75 41.4 13.9v20.2L24 44.25 6.6 34.1V13.9L24 3.75Z"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M24 17.5v13M17.5 24h13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 17.5v-4M17.5 24h-4M30.5 24h4M24 30.5v4"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <g fill="currentColor">
        <circle cx="24" cy="12" r="1.7" />
        <circle cx="12" cy="24" r="1.7" />
        <circle cx="36" cy="24" r="1.7" />
        <circle cx="24" cy="36" r="1.7" />
      </g>
    </svg>
  );
}

function AIHealthcareBadge() {
  return (
    <div className="flex w-full justify-center lg:h-full">
      <a
        href="https://www.shri-ai.org"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Explore Our AI Healthcare Solutions at shri-ai.org"
        className="group flex w-full max-w-[420px] flex-col rounded-lg bg-[#08243F]
                   p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7 lg:h-full lg:max-w-none"
      >
        {/* Eyebrow + mark, mark pinned top-right */}
        <div className="flex items-start justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FDBA74]">
            AI Healthcare
          </span>
          <AIHealthcareMark className="h-11 w-11 shrink-0 text-[#FDBA74] transition-colors group-hover:text-[#F97316] sm:h-12 sm:w-12" />
        </div>

        <h3 className="mt-3 text-xl font-bold leading-snug text-white sm:text-2xl">
          Explore Our AI
          <span className="block">Healthcare Solutions</span>
        </h3>

        <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#EAF3F8]/80">
          Clinical AI engineering, decision support and the healthcare data
          pipelines underneath them.
        </p>

        <span
          className="mt-6 inline-flex items-center gap-2 self-start rounded-lg bg-[#F97316]
                     px-5 py-2.5 text-sm font-semibold text-white transition-colors
                     group-hover:bg-[#EA580C] lg:mt-auto lg:pt-2.5"
        >
          Explore Solutions
          <FiArrowUpRight className="shrink-0" strokeWidth={1.5} />
        </span>
      </a>
    </div>
  );
}

export default AIHealthcareBadge;

import { FiArrowUpRight } from "react-icons/fi";
import shriAiLogo from "../../assets/shriai/logo.webp";

/**
 * Home-page CTA for ViSolve's AI healthcare offering.
 *
 * Uses the same navy panel idiom as the dark blocks on the service pages —
 * orange eyebrow, plain white heading, one solid orange button — so it reads
 * as part of the site rather than as a separate widget.
 */
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
        {/* Eyebrow + Shri AI mark, mark pinned top-right */}
        <div className="flex items-start justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FDBA74]">
            AI Healthcare
          </span>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-sm ring-1 ring-white/40 sm:h-11 sm:w-11">
            <img
              src={shriAiLogo}
              alt="Shri AI"
              width={128}
              height={128}
              className="h-full w-full rounded-full object-contain"
            />
          </span>
        </div>

        <h3 className="mt-3 text-2xl font-bold leading-snug text-white sm:text-[1.75rem]">
          Explore Our AI
          <span className="block">Healthcare Solutions</span>
        </h3>

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

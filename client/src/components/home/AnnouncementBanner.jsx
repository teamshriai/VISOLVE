import { FiBell, FiExternalLink } from "react-icons/fi";

function AnnouncementBanner() {
  return (
    <section className="w-full bg-white border-b border-gray-100 py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {/* ANNOUNCEMENT BANNER: Left aligned on white background */}
        <a
          href="https://www.shri-ai.org"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-start sm:items-center space-x-3.5 bg-[#C65D00] hover:bg-[#A84E00] text-white font-medium text-base sm:text-xl py-2 px-6 sm:px-7 rounded-full shadow-sm hover:shadow-md transition-all duration-200 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C65D00]"
        >
          {/* Small Icon in Circular Background — top-aligned on narrow screens where
              the copy wraps to several lines, so it stays anchored to "We have
              moved!" instead of drifting to the vertical middle of the block */}
          <span className="mt-0.5 sm:mt-0 w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 text-[15px] transition-transform duration-200 group-hover:scale-105">
            <FiBell className="text-[15px]" />
          </span>

          {/* Always flex-wrap (never forced nowrap): at the bigger size the full
              phrase doesn't reliably fit on one line until quite wide, and a fixed
              breakpoint would just move the cutoff rather than remove it. Wrapping
              lets each phrase move to its own line as a whole, never mid-word. */}
          <span className="inline-flex flex-wrap items-center gap-2">
            <strong className="font-bold text-white">We have moved!</strong>
            <span className="text-white/90 font-medium">Redefining Healthcare with AI —</span>
            <span className="text-white font-semibold underline underline-offset-2 decoration-white/60 group-hover:decoration-white transition-colors inline-flex items-center gap-1.5">
              Visit Shri-AI.org
              <FiExternalLink className="text-[15px] text-white/80 group-hover:text-white transition-colors shrink-0" />
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}

export default AnnouncementBanner;

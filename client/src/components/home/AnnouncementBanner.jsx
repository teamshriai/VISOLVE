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
          className="group inline-flex items-center space-x-2.5 bg-[#C65D00] hover:bg-[#A84E00] text-white font-medium text-xs sm:text-sm py-1.5 px-4 sm:px-5 rounded-full shadow-xs hover:shadow-sm transition-all duration-200 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C65D00]"
        >
          {/* Small Icon in Circular Background */}
          <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 text-xs transition-transform duration-200 group-hover:scale-105">
            <FiBell className="text-[11px]" />
          </span>

          <span className="inline-flex flex-wrap sm:flex-nowrap items-center gap-1.5">
            <strong className="font-bold text-white">We have moved!</strong>
            <span className="text-white/90 font-medium">Redefining Healthcare with AI —</span>
            <span className="text-white font-semibold underline underline-offset-2 decoration-white/60 group-hover:decoration-white transition-colors inline-flex items-center gap-1">
              Visit Shri-AI.org
              <FiExternalLink className="text-[11px] text-white/80 group-hover:text-white transition-colors shrink-0" />
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}

export default AnnouncementBanner;

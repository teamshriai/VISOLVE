import { FiBell, FiExternalLink } from "react-icons/fi";

function AnnouncementBanner() {
  return (
    <section className="w-full bg-white border-b border-gray-100 py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-start">
        {/* ANNOUNCEMENT BANNER: Left aligned on white background */}
        <a
          href="https://www.oncotraceai.org"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center space-x-2.5 bg-[#FFFDF9] hover:bg-[#FFF9F2] text-[#08243F] font-medium text-xs sm:text-sm py-1.5 px-4 sm:px-5 rounded-full border border-amber-200/80 hover:border-amber-300 shadow-xs hover:shadow-sm transition-all duration-200 text-left"
        >
          {/* Small Icon in Circular Light Background */}
          <span className="w-5 h-5 rounded-full bg-amber-100/80 border border-amber-200/60 flex items-center justify-center text-[#D9621E] shrink-0 text-xs">
            <FiBell className="text-[11px]" />
          </span>

          <span className="inline-flex flex-wrap sm:flex-nowrap items-center gap-1.5">
            <strong className="font-bold text-[#D9621E]">We have moved!</strong>
            <span className="text-[#08243F] font-medium">Redefining Healthcare with AI —</span>
            <span className="text-[#155A8A] font-semibold group-hover:text-[#D9621E] underline underline-offset-2 decoration-amber-300/80 transition-colors inline-flex items-center gap-1">
              Visit OncoTraceAI.org
              <FiExternalLink className="text-[11px] text-gray-400 group-hover:text-[#D9621E] transition-colors shrink-0" />
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}

export default AnnouncementBanner;

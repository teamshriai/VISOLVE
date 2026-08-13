import React from "react";
import { FiArrowUpRight, FiCpu } from "react-icons/fi";

function AIPortfolioBadge() {
  return (
    <div className="w-full flex flex-col justify-center items-center lg:items-start">
      <a
        href="https://visolve.com/portfolio/"
        target="_blank"
        rel="noopener noreferrer"
        title="Explore Our Healthcare AI Portfolio"
        aria-label="Explore Our Healthcare AI Portfolio"
        className="group w-full max-w-sm lg:max-w-none bg-gradient-to-br from-[#FFFDF9] via-white to-[#FFF7ED] border border-amber-200/80 hover:border-amber-300 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
      >
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100/80 border border-amber-200/60 flex items-center justify-center text-[#D9621E] shrink-0">
            <FiCpu className="text-xl" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D9621E] block">
              ViSolve Innovation
            </span>
            <h3 className="text-base font-bold text-[#08243F] leading-snug group-hover:text-[#D9621E] transition-colors">
              Healthcare AI Portfolio
            </h3>
          </div>
        </div>

        <p className="text-xs text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          Explore cutting-edge clinical AI integration, EHR automation, and interoperability solutions.
        </p>

        {/* Primary CTA Button Pill */}
        <div className="inline-flex items-center justify-between w-full bg-[#D9531E] group-hover:bg-[#C2410C] text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-xs group-hover:shadow transition-all duration-200">
          <span>Explore AI Portfolio</span>
          <FiArrowUpRight className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0" />
        </div>
      </a>
    </div>
  );
}

export default AIPortfolioBadge;

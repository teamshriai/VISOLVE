import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function AIPortfolioBadge() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <a
        href="https://visolve.com/portfolio/"
        target="_blank"
        rel="noopener noreferrer"
        title="Explore Our Healthcare AI Portfolio"
        aria-label="Explore Our Healthcare AI Portfolio"
        className="group relative w-full max-w-[350px] sm:max-w-[390px] lg:max-w-[410px] px-6 sm:px-8 py-7 sm:py-8 transition-all duration-300 ease-out hover:scale-[1.03] cloud-heartbeat-anim focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2878A8] block"
      >
        {/* SVG Vector Cloud Background Silhouette */}
        <svg
          className="absolute inset-0 w-full h-full text-[#08243F] group-hover:text-[#0D3557] transition-colors duration-300 pointer-events-none overflow-visible"
          viewBox="0 0 380 210"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#08243F" />
              <stop offset="50%" stopColor="#0D3557" />
              <stop offset="100%" stopColor="#155A8A" />
            </linearGradient>
            <linearGradient id="cloudGradHover" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0D3557" />
              <stop offset="50%" stopColor="#155A8A" />
              <stop offset="100%" stopColor="#2878A8" />
            </linearGradient>
          </defs>

          {/* Sophisticated Multi-puff Cloud Silhouette Path */}
          <path
            d="M 60 180 
               H 320 
               A 40 40 0 0 0 355 110 
               A 50 50 0 0 0 280 40 
               A 68 68 0 0 0 162 28 
               A 56 56 0 0 0 72 68 
               A 42 42 0 0 0 28 138 
               A 40 40 0 0 0 60 180 Z"
            className="fill-[url(#cloudGrad)] group-hover:fill-[url(#cloudGradHover)] stroke-[#2878A8]/45 group-hover:stroke-[#2878A8]/85 transition-all duration-300"
            strokeWidth="1.75"
          />
        </svg>

        {/* Content Container positioned inside the Cloud Silhouette */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 sm:px-8 pt-7 sm:pt-9 pb-6 sm:pb-8">
          {/* Centered Main Title */}
          <h3 className="text-base sm:text-lg lg:text-[1.2rem] font-extrabold text-white leading-snug sm:leading-tight tracking-tight group-hover:text-blue-50 transition-colors max-w-[240px] sm:max-w-[290px] mx-auto">
            Explore Our AI <span className="block sm:inline">Healthcare Portfolio</span>
          </h3>

          {/* Elegant Blue CTA Pill */}
          <div className="mt-3.5 sm:mt-4 inline-flex items-center justify-center gap-2 bg-[#2878A8] group-hover:bg-[#155A8A] text-white font-bold text-xs sm:text-sm py-2 px-4 sm:px-5 rounded-full border border-white/20 shadow-md group-hover:shadow-lg transition-all duration-200 uppercase tracking-wider">
            <span>VIEW PORTFOLIO</span>
            <FiArrowUpRight className="text-sm sm:text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0 text-blue-100 group-hover:text-white" />
          </div>
        </div>
      </a>
    </div>
  );
}

export default AIPortfolioBadge;

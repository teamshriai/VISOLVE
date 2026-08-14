import React from "react";

function Blogs() {
  return (
    <div className="w-full bg-white font-sans text-gray-700 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center text-center space-y-6">
        <div
          className="w-full max-w-4xl h-80 md:h-[450px] rounded-xl shadow-inner border border-gray-200 flex flex-col items-center justify-center p-8 text-white relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/openemr/comingsoon6.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
          <div className="relative z-10 space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-wide uppercase drop-shadow-md">
              Coming Soon
            </h1>
            <p className="text-sm md:text-lg font-light text-gray-200 max-w-xl mx-auto drop-shadow">
              Our ViSolve Healthcare Blog is under preparation. Stay tuned for insights, updates, and industry articles!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;

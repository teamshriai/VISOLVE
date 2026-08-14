import React from "react";

function Webinars() {
  return (
    <div className="w-full bg-white font-sans text-gray-700 py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-8 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          Webinars
        </h1>
        <div className="w-full max-w-4xl h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 relative bg-slate-900 flex items-center justify-center">
          <img
            src="/assets/openemr/comingsoon6.jpg"
            alt="Webinars Coming Soon"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center space-y-3 p-6 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-md">
              Coming Soon
            </h2>
            <p className="text-sm md:text-lg text-gray-200 max-w-lg">
              We are preparing insightful webinars on OpenEMR customization, FHIR interoperability, and healthcare IT solutions. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Webinars;

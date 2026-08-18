import React from "react";
import { FiExternalLink } from "react-icons/fi";
import OpenEMRSubNav from "../../../components/ui/OpenEMRSubNav";

function Telehealth() {
  return (
    <div className="w-full bg-white font-sans text-gray-700">
      {/* OpenEMR Section Sub-Navigation */}
      <OpenEMRSubNav activeLabel="Telehealth" />
      {/* Floating See in Action button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://www.visolve.com/patientportal/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-2 bg-[#f16d05] text-white font-bold py-2.5 px-4 rounded shadow-lg hover:bg-orange-600 transition-colors text-sm"
        >
          <span>See in Action</span>
          <FiExternalLink className="text-base" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-gray-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center text-center space-y-6">
          <div
            className="w-full max-w-4xl h-80 md:h-96 rounded-xl shadow-inner border border-gray-200 flex flex-col items-center justify-center p-8 text-white relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/openemr/comingsoon6.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
            <div className="relative z-10 space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-wide uppercase drop-shadow-md">
                Under Construction
              </h1>
              <p className="text-sm md:text-lg font-light text-gray-200 max-w-xl mx-auto drop-shadow">
                Our Telehealth module integration for OpenEMR Pro is currently under development. Stay tuned!
              </p>
              <div className="pt-4">
                <a
                  href="https://www.visolve.com/patientportal/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#f16d05] text-white font-semibold py-2.5 px-5 rounded shadow hover:bg-orange-600 transition-colors text-sm"
                >
                  <span>See Patient Portal Demo</span>
                  <FiExternalLink className="text-base" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Telehealth;

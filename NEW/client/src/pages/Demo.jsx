import React from "react";
import { FiArrowRight } from "react-icons/fi";

const demoLinks = [
  {
    title: "ViSolve Patient Portal",
    url: "https://www.visolve.com/patientportal/",
  },
  {
    title: "HealthCare Billing Module (Integrated with OpenEMR)",
    url: "https://www.visolve.com/openemrpro/",
  },
  {
    title: "OpenEMR 5.0 - ONC Certified 2014 Edition Complete EHR",
    url: "https://www.visolve.com/openemrpro/",
  },
  {
    title: "OpenEMR with 2FA",
    url: "https://www.visolve.com/openemrpro/user-registration/",
  },
  {
    title: "OpenEMR with Google calendar",
    url: "https://www.visolve.com/openemrpro/user-registration/",
  },
];

function Demo() {
  return (
    <div className="w-full bg-white font-sans text-gray-700 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Live Demos & Interactive Portals
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Experience ViSolve's OpenEMR Pro solutions in action. Explore our live demos for patient portals, billing modules, 2FA, and calendar integrations.
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 p-8 md:p-12 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/openemr/billing_new_1.png')" }}
        >
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>

          <div className="relative z-10 space-y-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white drop-shadow-md">
              Available Product Demos
            </h2>

            <div className="flex flex-col space-y-4 max-w-xl mx-auto">
              {demoLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/95 hover:bg-white text-gray-800 hover:text-[#f16d05] font-semibold py-3 px-6 rounded-lg shadow-md transition-all flex items-center justify-between text-base group"
                >
                  <span>{item.title}</span>
                  <FiArrowRight className="text-[#f16d05] group-hover:translate-x-1 transition-transform text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;

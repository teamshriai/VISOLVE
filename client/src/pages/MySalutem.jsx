import React from "react";
import { FiExternalLink } from "react-icons/fi";

function MySalutem() {
  return (
    <div className="w-full bg-white font-sans text-gray-700">
      {/* Fixed Live Demo Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://www.visolve.com/patientportal/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-2 bg-[#f08e00] hover:bg-orange-600 text-white font-bold py-2.5 px-5 rounded shadow-lg transition-colors text-sm"
        >
          <span>Live Demo</span>
          <FiExternalLink className="text-base" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            ViSolve Patient Portal
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
            {/* Features List */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center space-x-3 text-base text-gray-700 font-medium">
                <img
                  src="/assets/openemr/check-orange.png"
                  alt="bullet icon"
                  className="w-4 h-4 object-contain"
                />
                <span>Video Visit</span>
                <span className="bg-[#ff8000] text-white text-xs font-bold px-2 py-0.5 rounded">
                  New
                </span>
              </div>

              <div className="flex items-center space-x-3 text-base text-gray-700 font-medium">
                <img
                  src="/assets/openemr/check-orange.png"
                  alt="bullet icon"
                  className="w-4 h-4 object-contain"
                />
                <span>Provide a better service for your patients</span>
              </div>

              {/* Sub-bullets */}
              <div className="pl-6 space-y-2">
                {[
                  "Automated Reminders",
                  "Access to health Records 7x24",
                  "Ability to order refills online",
                  "Self Schedule Appointments",
                ].map((subItem, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600 font-normal">
                    <img
                      src="/assets/openemr/tick1-orange.png"
                      alt="bullet icon"
                      className="w-3.5 h-3.5 object-contain"
                    />
                    <span>{subItem}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-3 text-base text-gray-700 font-medium">
                <img
                  src="/assets/openemr/check-orange.png"
                  alt="bullet icon"
                  className="w-4 h-4 object-contain"
                />
                <span>Provide secured communication</span>
              </div>

              <div className="flex items-center space-x-3 text-base text-gray-700 font-medium">
                <img
                  src="/assets/openemr/check-orange.png"
                  alt="bullet icon"
                  className="w-4 h-4 object-contain"
                />
                <span>Pay bills Online</span>
              </div>

              <div className="pt-4">
                <a
                  href="https://www.visolve.com/patientportal/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-[#ff8000] hover:bg-orange-600 text-white font-bold py-2 px-5 rounded shadow transition-colors text-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* Feature Banner Image */}
            <div className="md:col-span-7 flex justify-center">
              <img
                src="/assets/openemr/mysalutem-fea.png"
                alt="MySalutem Patient Portal Showcase"
                className="max-h-[380px] w-auto object-contain drop-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Patient Portal Description Section */}
      <section className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3a3f4b]">
            Patient Portal
          </h2>
          <p className="text-base text-gray-600 leading-relaxed text-justify md:text-center">
            Access your health records anytime with ViSolve's Smart Patient Portal. Facilitates better communication with your physician's office by providing convenient 24x7 access from the comfort and privacy of your own home.
            <br />
            ViSolve's Patient Portal is the most convenient and secure way to stay in touch with your Healthcare team.
          </p>
        </div>
      </section>

      {/* Datasheet Section */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#3a3f4b]">
            Datasheet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="md:col-span-4 flex justify-center">
              <a href="/docs/MySalutem-Patient-Portal.pdf" target="_blank" rel="noreferrer">
                <img
                  src="/assets/openemr/datasheet.jpg"
                  alt="MySalutem Datasheet"
                  className="max-h-56 object-contain rounded shadow hover:opacity-90 transition-opacity"
                />
              </a>
            </div>
            <div className="md:col-span-8 space-y-3">
              <a
                href="/docs/MySalutem-Patient-Portal.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-2xl font-bold text-gray-800 hover:text-[#ff8000] transition-colors"
              >
                MySalutem
              </a>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                ViSolve offers an integrated, user-friendly State-of-art MySalutem, online Patient Portal. MySalutem provides rich features such as Video visit, Appointment Scheduling, Prescription refill request, Online Payments and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MySalutem;

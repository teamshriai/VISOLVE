import React from "react";

const caseStudies = [
  {
    id: 1,
    title: "24x7x365 Business Continuity of OpenEMR in Cloud",
    image: "/assets/openemr/casestud-1-min.png",
    link: "/mail/Business-Continuity-of-OpenEMR.php",
    alignRight: false,
  },
  {
    id: 2,
    title: "Interoperability Solutions & Specialty EMR Customization",
    image: "/assets/openemr/casestud-4.jpeg",
    link: "/mail/Academic-Medical-university.php",
    alignRight: true,
  },
  {
    id: 3,
    title: "Pohnpei Community Health Center",
    image: "/assets/openemr/doctor-help-patient.jpg",
    link: "/mail/multiple-instance.php",
    alignRight: false,
  },
  {
    id: 4,
    title: "PMS and EHR Integration",
    image: "/assets/openemr/casestud-2-min.jpg",
    link: "/mail/PMS-EHR.php",
    alignRight: true,
  },
  {
    id: 5,
    title: "Lab and EHR Integration",
    image: "/assets/openemr/casestud-3-min.jpg",
    link: "/mail/lab.php",
    alignRight: false,
  },
];

function CaseStudy() {
  return (
    <div className="w-full bg-white font-sans text-gray-700 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Healthcare Case Studies
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Discover how ViSolve delivers enterprise healthcare solutions, cloud continuity, and interoperability integrations for medical organizations worldwide.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className={`flex flex-col md:flex-row items-center gap-8 bg-slate-50 rounded-xl overflow-hidden border border-gray-200 shadow-sm p-6 md:p-8 ${
                study.alignRight ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-64 md:h-72 object-cover rounded-lg shadow-sm"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug">
                  {study.title}
                </h2>
                <div>
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-6 rounded-md shadow transition-colors text-sm md:text-base"
                  >
                    Download Case Study
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;

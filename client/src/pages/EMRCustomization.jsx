import React from "react";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "ViSolve (PatientPortal)",
    image: "/assets/openemr/mobile-home.png",
    link: "/services/patientportal",
    description:
      "Engage your patients using HIPAA-enabled ViSolve Patient Portal, a solution to assist patients with features such as Video consult, Secure messaging and automated reminder system, Appointment Scheduling, personal health records, Prescription refill request, Online payments.",
  },
  {
    title: "Billing",
    image: "/assets/openemr/Sol-medical-billing-min.jpg",
    link: "/services/medicalbilling",
    description:
      "ViSolve's cloud-based medical billing (Smart Billing) helps healthcare organizations of all sizes increase revenue, reduce costs associated with managing insurance claims and accelerate cash flow including patient eligibility verification that completely integrates your financial, reporting and scheduling needs.",
  },
  {
    title: "OpenEMR-Professional Edition",
    image: "/assets/openemr/openemr_box.JPG",
    link: "/customization-contents",
    description:
      "No need to change the way you work, rather we change the system to work the way you want. We provide Customized OpenEMR with value added Component with highly secured hosting in AWS, to best fits a practice so you can focus on patient care.",
  },
  {
    title: "AWS Hosting",
    image: "/assets/openemr/awst.png",
    link: "/services/openemr",
    description:
      "ViSolve offers cloud web hosting solution that provides businesses & organizations with a flexible, scalable, low-cost way to deliver applications.",
    paddingTop: true,
  },
];

function EMRCustomization() {
  return (
    <div className="w-full bg-white font-sans text-gray-700 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Solutions
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Discover ViSolve's suite of specialized healthcare solutions designed to streamline workflows, enhance patient engagement, and secure your cloud EMR infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="bg-slate-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
            >
              <div className="h-48 bg-white flex items-center justify-center p-4 overflow-hidden border-b border-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`max-h-40 w-auto object-contain group-hover:scale-105 transition-transform ${
                    item.paddingTop ? "pt-6" : ""
                  }`}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col space-y-3 text-center">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#f16d05] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-justify">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EMRCustomization;

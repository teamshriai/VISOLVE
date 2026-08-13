import React from "react";
import { FiExternalLink, FiChevronRight } from "react-icons/fi";

function CustomizationContents() {
  const deployments = [
    "/assets/openemr/cust_work_4.png",
    "/assets/openemr/cust_work_5.png",
    "/assets/openemr/cust_work_7.png",
    "/assets/openemr/cust_work_17.png",
  ];

  return (
    <div className="w-full bg-white font-sans text-gray-700">
      {/* Fixed Live Demo Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <a
          href="https://www.visolve.com/openemr-pro/interface/login/login.php?site=default"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-2 bg-[#f08e00] hover:bg-orange-600 text-white font-bold py-2 px-3.5 sm:py-2.5 sm:px-5 rounded shadow-lg transition-colors text-xs sm:text-sm"
        >
          <span>Live Demo</span>
          <FiExternalLink className="text-sm sm:text-base" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-gray-200 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800">
            Customized OpenEMR - Professional Edition
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2 sm:pt-4">
            {/* Features Checklist */}
            <div className="md:col-span-5 space-y-3">
              {[
                "ViSolve (Patient Portal)",
                "Smart Billing",
                "Lab Integration",
                "Scheduler",
                "Hosting and Deployment",
                "FHIR Enabled",
                "7x24 Support",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-sm sm:text-base text-gray-700 font-medium">
                  <img
                    src="/assets/openemr/check-orange.png"
                    alt="bullet icon"
                    className="w-4 h-4 object-contain shrink-0"
                  />
                  <span>{item}</span>
                </div>
              ))}

              <div className="pt-4">
                <a
                  href="https://www.visolve.com/openemr-pro/interface/login/login.php?site=default"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-[#f08e00] hover:bg-orange-600 text-white font-bold py-2 px-5 rounded shadow transition-colors text-xs sm:text-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* Feature Illustration Image */}
            <div className="md:col-span-7 flex justify-center w-full">
              <img
                src="/assets/openemr/customize-fea.png"
                alt="Customized OpenEMR Feature Showcase"
                className="w-full max-w-md md:max-w-full max-h-[260px] sm:max-h-[320px] md:max-h-[380px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customized OpenEMR Deployments Gallery Section */}
      <section className="py-10 sm:py-12 md:py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#3a3f4b]">
            Customized OpenEMR Deployments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {deployments.map((imgSrc, idx) => (
              <div key={idx} className="bg-slate-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm p-2 flex items-center justify-center">
                <img
                  src={imgSrc}
                  alt={`Customized Deployment ${idx + 1}`}
                  className="max-h-36 sm:max-h-48 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-10 sm:py-12 md:py-14 bg-slate-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#3a3f4b]">
            Case Studies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm flex flex-col">
              <img src="/assets/openemr/c1.png" alt="Interoperability Solutions" className="w-full h-40 sm:h-48 object-cover" />
              <div className="p-3.5 sm:p-4 text-center flex-1 flex items-center justify-center">
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Interoperability Solutions &amp; Specialty EMR Customization
                </h4>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm flex flex-col">
              <img src="/assets/openemr/c2.jpg" alt="HealthCare Interoperability" className="w-full h-40 sm:h-48 object-cover" />
              <div className="p-3.5 sm:p-4 text-center flex-1 flex items-center justify-center">
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  HealthCare Interoperability Module (EMR+Diagnostic)
                </h4>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm flex flex-col sm:col-span-2 md:col-span-1">
              <img src="/assets/openemr/case01.jpg" alt="HealthCare Billing Module" className="w-full h-40 sm:h-48 object-cover" />
              <div className="p-3.5 sm:p-4 text-center flex-1 flex items-center justify-center">
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  HealthCare Billing Module (Integrated with OpenEMR)
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Datasheets Section */}
      <section className="py-10 sm:py-12 md:py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#3a3f4b]">
            Datasheets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="md:col-span-4 flex justify-center w-full">
              <img src="/assets/openemr/datasheet.jpg" alt="Datasheets" className="max-h-48 sm:max-h-64 w-auto object-contain rounded shadow" />
            </div>
            <div className="md:col-span-8 space-y-4 sm:space-y-6">
              <div className="space-y-1">
                <a
                  href="/docs/OpenEMR_Datasheet_Updated_20022017.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg sm:text-xl font-bold text-gray-800 hover:text-[#f08e00] block break-words"
                >
                  OpenEMR Professional Edition Datasheet
                </a>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 text-left sm:text-justify">
                  OpenEMR (OEMR) is an ONC Complete Ambulatory EHR certified application (2014 Edition) used for electronic health record and medical practice management.
                </p>
              </div>

              <div className="space-y-1">
                <a
                  href="/docs/MU-Consulting-Methodology-Datasheet-June2016.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg sm:text-xl font-bold text-gray-800 hover:text-[#f08e00] block break-words"
                >
                  MU Methodology Consulting
                </a>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 text-left sm:text-justify">
                  ViSolve MU consulting services includes verifying the product against the NIST Test procedures and creation of the Gap Analysis Report providing guidelines for the incomplete MU features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Papers Section */}
      <section className="py-10 sm:py-12 md:py-14 bg-slate-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#3a3f4b]">
            White Papers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="md:col-span-8 space-y-4 sm:space-y-6">
              <div className="space-y-1">
                <a
                  href="https://www.visolve.com/solutions-services/healthcare_services/OpenEMR-Support/openemr-guide-download.php?doc_no=1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg sm:text-xl font-bold text-gray-800 hover:text-[#f08e00] block break-words"
                >
                  Hardening of OpenEMR
                </a>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 text-left sm:text-justify">
                  This Technical Guide is intended to provide a detailed overview on deploying and hardening OpenEMR in Cloud (AWS).
                </p>
              </div>

              <div className="space-y-1">
                <a
                  href="https://www.visolve.com/solutions-services/healthcare_services/OpenEMR-Support/openemr-guide-download.php?doc_no=2"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg sm:text-xl font-bold text-gray-800 hover:text-[#f08e00] block break-words"
                >
                  High Availability of OpenEMR in Cloud
                </a>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 text-left sm:text-justify">
                  We also help healthcare providers and healthcare technology vendors migrate from legacy systems or commercial systems.
                </p>
              </div>

              <div className="space-y-1">
                <a
                  href="/docs/securedataatrest.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg sm:text-xl font-bold text-gray-800 hover:text-[#f08e00] block break-words"
                >
                  Securing OpenEMR with disk encryption
                </a>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 text-left sm:text-justify">
                  This document focuses on achieving High Availability for OpenEMR in Cloud (AWS). It focuses on how a stable environment for an EMR (OpenEMR) could be offered in a cloud environment (AWS).
                </p>
              </div>
            </div>
            <div className="md:col-span-4 flex justify-center w-full">
              <img src="/assets/openemr/ty.png" alt="Billing Service" className="max-h-48 sm:max-h-64 w-auto object-contain rounded shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Sample Customer Projects Section */}
      <section className="py-10 sm:py-12 md:py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#3a3f4b]">
            Sample Customer Projects
          </h2>
          <ul className="space-y-2.5 sm:space-y-3 max-w-4xl mx-auto">
            {[
              "Customized deployment and 7x24 support",
              "Customization of Forms, Modules, Specialty Workflow etc.",
              "Integration with other systems such as e-prescription, practice management etc",
              "Single sign-on implementation",
              "User interface enhancements",
              "Meaningful Use certification",
              "Business Continuity solutions for OpenEMR in Cloud (High Availability & Disaster Recovery)",
              "Migration & Hosting in Amazon Cloud (HIPAA Compliant)",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm md:text-base text-gray-700">
                <FiChevronRight className="text-[#f08e00] text-base sm:text-lg mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OpenEMR Professional Services Include Section */}
      <section className="py-10 sm:py-12 md:py-14 bg-slate-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3a3f4b]">
            OpenEMR Professional Services include
          </h2>
          <div className="flex justify-center w-full">
            <img
              src="/assets/openemr/OpenEMR-Professional-Services.png"
              alt="OpenEMR Professional Services"
              className="w-full max-w-full h-auto max-h-72 sm:max-h-96 object-contain rounded border border-gray-200 shadow-sm"
            />
          </div>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-4xl mx-auto text-left sm:text-justify">
            We also help healthcare providers and healthcare technology vendors migrate from legacy system or a commercial system to OpenEMR and also migrate OpenEMR to the cloud. In addition to hosting OpenEMR in the cloud, we assure the benefits such as High Availability, Security, Performance, Scalability and Disaster Recovery.
          </p>
        </div>
      </section>

      {/* ViSolve's Contribution to OpenEMR Section */}
      <section className="py-10 sm:py-12 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3a3f4b]">
            ViSolve's Contribution to OpenEMR
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto text-xs sm:text-sm md:text-base text-gray-600 text-left sm:text-justify">
            <p>
              As a prominent member of the OEMR board, ViSolve has contributed significantly in donating software development including developing security modules like HIPAA de-identification, audit logging and client certifications, recording disclosures, emergency access, consent management, performance improvement and defect fixing. ViSolve played a vital role in getting OpenEMR ONC-ATCB certified from the ICSA labs and continuing to contribute to various technical enhancements.
            </p>
            <p className="break-words">
              ViSolve is listed as a premium professional support vendor and certified contributor of OpenEMR on the{" "}
              <a
                href="https://www.open-emr.org/wiki/index.php/OpenEMR_Professional_Support#ViSolve.2C_Inc._2"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#f08e00] hover:underline"
              >
                OpenEMR Wiki and Professional Support Vendors website.
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomizationContents;

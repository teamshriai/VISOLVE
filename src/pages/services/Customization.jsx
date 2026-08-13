import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiCheck, FiCpu, FiActivity, FiCreditCard, FiExternalLink } from "react-icons/fi";
import OpenEMRSubNav from "../../components/ui/OpenEMRSubNav";

function Customization() {
  const carouselImages = [
    "/assets/openemr/cust_work_4.png",
    "/assets/openemr/cust_work_5.png",
    "/assets/openemr/cust_work_7.png",
    "/assets/openemr/cust_work_17.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <div className="w-full bg-white font-sans text-gray-700">
      {/* OpenEMR Section Sub-Navigation */}
      <OpenEMRSubNav activeLabel="Customization" />

      {/* Floating See in Action button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <a
          href="https://openemrpro.visolve.com/user-registration/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-2 bg-[#f16d05] text-white font-bold py-2 px-3.5 sm:py-2.5 sm:px-4 rounded shadow-lg hover:bg-orange-600 transition-colors text-xs sm:text-sm"
        >
          <span>See in Action</span>
          <FiExternalLink className="text-sm sm:text-base" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 text-center md:text-left space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-800 leading-tight">
              Serve your patients better with Visolve OpenEMR Pro customization
            </h1>
            <h5 className="text-base sm:text-lg text-gray-600 font-light">
              Need your OpenEMR Pro customized in your own way!..Here is one stop solution
            </h5>
          </div>
          <div className="md:col-span-6 flex justify-center w-full">
            <img
              src="/assets/openemr/customization.png"
              alt="OpenEMR Customization"
              className="w-full max-w-md md:max-w-full max-h-[260px] sm:max-h-[320px] md:max-h-[350px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Feel the Advantage Section */}
      <section className="py-10 sm:py-12 md:py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-[#3a3f4b]">
            Feel the advantage of OpenEMR with Visolve customization
          </h3>
          <div className="max-w-4xl mx-auto bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg border border-gray-100 shadow-sm">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-left sm:text-justify">
              No one size fits all. OpenEMR Pro doesn't make you adjust your practice to fit our software, instead OpenEMR Pro can be configured to fit your practice. OpenEMR Pro is customizable as much as your practice requires. Also, the templates and forms can be customized to fit your specialty and preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Customization Services */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3a3f4b] text-center md:text-left">
            Our Customization Services
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl">
            {[
              "Customization of Forms, Modules, Specialty Workflow etc.",
              "Customized deployment and 7x24 support",
              "Integration with other systems such as e-prescription , practice management etc",
              "Single sign-on implementation",
              "User interface enhancements",
              "Meaningful Use certification",
              "Customization of User Interface",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3 bg-white p-3.5 sm:p-4 rounded border border-gray-200 shadow-sm">
                <FiCheck className="text-[#f16d05] text-base sm:text-lg mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Customized OpenEMR Deployments Carousel */}
      <section id="ppscreens" className="py-10 sm:py-12 md:py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3a3f4b] text-center">
            Customized OpenEMR Deployments
          </h3>
          <div className="relative max-w-4xl mx-auto overflow-hidden rounded-lg border border-gray-200 shadow-md bg-black min-h-[220px] sm:min-h-[320px] md:min-h-[480px] flex items-center justify-center p-2 sm:p-4">
            <img
              src={carouselImages[currentSlide]}
              alt={`Customized OpenEMR Deployment ${currentSlide + 1}`}
              className="max-h-[200px] sm:max-h-[300px] md:max-h-[460px] w-full max-w-full object-contain transition-opacity duration-500"
            />
            {/* Nav dots */}
            <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 flex justify-center space-x-2">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    currentSlide === idx ? "bg-[#f16d05]" : "bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="casestudies" className="py-10 sm:py-12 md:py-14 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3a3f4b] text-center md:text-left">
            Case Studies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-36 sm:h-44 md:h-48 bg-gray-100 flex items-center justify-center p-4">
                <FiCpu className="text-3xl sm:text-4xl text-[#0B2A4A]" />
              </div>
              <div className="p-3.5 sm:p-4 text-center">
                <h4 className="text-sm sm:text-base font-bold text-gray-800">
                  Interoperability Solutions &amp; Specialty EMR Customization
                </h4>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-36 sm:h-44 md:h-48 bg-gray-100 flex items-center justify-center p-4">
                <FiActivity className="text-3xl sm:text-4xl text-[#0B2A4A]" />
              </div>
              <div className="p-3.5 sm:p-4 text-center">
                <h4 className="text-sm sm:text-base font-bold text-gray-800">
                  HealthCare Interoperability Module (EMR+Diagnostic)
                </h4>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-36 sm:h-44 md:h-48 bg-gray-100 flex items-center justify-center p-4">
                <FiCreditCard className="text-3xl sm:text-4xl text-[#0B2A4A]" />
              </div>
              <div className="p-3.5 sm:p-4 text-center">
                <h4 className="text-sm sm:text-base font-bold text-gray-800">
                  HealthCare Billing Module (Integrated with OpenEMR)
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Datasheets Section */}
      <section id="resources" className="py-10 sm:py-12 md:py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3a3f4b] text-center md:text-left">
            Datasheets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
            <div className="p-4 sm:p-6 bg-gray-50 border border-gray-200 rounded-lg space-y-3 sm:space-y-4">
              <a
                href="/assets/docs/OpenEMR_Datasheet_Updated_20022017.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-lg sm:text-xl font-bold text-[#f16d05] hover:underline block break-words"
              >
                OpenEMR Professional Edition Datasheet
              </a>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-left sm:text-justify">
                OpenEMR (OEMR) is an ONC Complete Ambulatory EHR certified application (2014 Edition) used for electronic health record and medical practice management.
              </p>
            </div>

            <div className="p-4 sm:p-6 bg-gray-50 border border-gray-200 rounded-lg space-y-3 sm:space-y-4">
              <a
                href="/assets/docs/MU-Consulting-Methodology-Datasheet-June2016.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-lg sm:text-xl font-bold text-[#f16d05] hover:underline block break-words"
              >
                MU Methodology Consulting
              </a>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-left sm:text-justify">
                ViSolve MU consulting services includes verifying the product against the NIST Test, procedures and creation of the Gap Analysis Report Providing guidelines for the incomplete MU features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White Papers Section */}
      <section className="py-10 sm:py-12 md:py-14 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3a3f4b] text-center md:text-left">
            White Papers
          </h2>
          <div className="space-y-4 sm:space-y-6 max-w-4xl">
            <div className="p-4 bg-white rounded border border-gray-200 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">Hardening of OpenEMR</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                This Technical Guide is intended to provide a detailed overview on deploying and hardening OpenEMR in Cloud(AWS).
              </p>
            </div>
            <div className="p-4 bg-white rounded border border-gray-200 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">High Availability of OpenEMR in Cloud</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We also help healthcare providers and healthcare technology vendors migrate from legacy system or a commercial system.
              </p>
            </div>
            <div className="p-4 bg-white rounded border border-gray-200 shadow-sm">
              <a
                href="/assets/docs/securedataatrest.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-base sm:text-lg font-bold text-[#f16d05] hover:underline block mb-1 break-words"
              >
                Securing OpenEMR with disk encryption
              </a>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                This document focuses on achieving High Availability for OpenEMR in Cloud (AWS). It focuses on how a stable environment for an EMR (OpenEMR) could be offered in a cloud environment (AWS).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Customer Projects & OpenEMR Professional Services */}
      <section className="py-10 sm:py-12 md:py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-8 sm:space-y-12">
          {/* Sample Customer Projects */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3a3f4b] text-center md:text-left">
              Sample Customer Projects
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                "Customized deployment and 7x24 support",
                "Customization of Forms, Modules, Specialty Workflow etc.",
                "Integration with other systems such as e-prescription , practice management etc",
                "Single sign-on implementation",
                "User interface enhancements",
                "Meaningful Use certification",
                "Business Continuity solutions for OpenEMR in Cloud (High Availablity & Disaster Recovery)",
                "Migration & Hosting in Amazon Cloud (HIPAA Compliant)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 bg-gray-50 p-3 sm:p-3.5 rounded border border-gray-200">
                  <FiCheck className="text-[#f16d05] text-sm sm:text-base mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* OpenEMR Professional Services Include */}
          <div className="space-y-4 sm:space-y-6 pt-6 border-t border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3a3f4b] text-center md:text-left">
              OpenEMR Professional Services include
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed text-left sm:text-justify max-w-4xl">
              We also help healthcare providers and healthcare technology vendors migrate from legacy system or a commercial system to OpenEMR and also migrate OpenEMR to the cloud. In addition to hosting OpenEMR in the cloud, we assure the benefits such as High Availability, Security, Performance, Scalability and Disaster Recovery.
            </p>
          </div>

          {/* ViSolve's Contribution to OpenEMR */}
          <div className="space-y-3 sm:space-y-4 pt-6 border-t border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3a3f4b] text-center md:text-left">
              ViSolve's Contribution to OpenEMR
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed text-left sm:text-justify max-w-4xl">
              As a prominent member of the OEMR board, ViSolve has contributed significantly in donating software development including developing security modules like HIPAA de-identification, audit logging and client certifications, recording disclosures, emergency access, consent management, performance improvement and defect fixing. ViSolve played a vital role in getting OpenEMR ONC-ATCB certified from the ICSA labs and continuing to contribute to various technical enhancements.
            </p>
            <p className="text-xs sm:text-sm text-gray-700 font-semibold pt-2 break-words">
              ViSolve is listed as a premium professional support vendor and certified contributor of OpenEMR on the{" "}
              <a
                href="https://www.open-emr.org/wiki/index.php/OpenEMR_Professional_Support#ViSolve.2C_Inc._2"
                target="_blank"
                rel="noreferrer"
                className="text-[#f16d05] hover:underline inline-block sm:inline"
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

export default Customization;

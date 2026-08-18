import React, { useState } from "react";
import { Link } from "react-router-dom";

const pdfIcon = "/assets/openemr/pdf.png";
const bannerImg = "/assets/images/content_images/resource_content.png";

const categories = [
  { id: "openemr", label: "OpenEMR", heading: "OpenEMR" },
  { id: "healthit", label: "Health IT Engineering/Outsourcing", heading: "HEALTH IT" },
  { id: "mu", label: "Meaningful Use", heading: "MEANINGFUL USE CONSULTING" },
  { id: "qa", label: "QA", heading: "QA" },
  { id: "interoperability", label: "Interoperability", heading: "Interoperability Services" },
  { id: "lim", label: "LIM", heading: "Lab Interoperability Module" },
  { id: "pbm", label: "PBM", heading: "Pluggable Billing Module" },
];

function Datasheet() {
  const [activeCategory, setActiveCategory] = useState("openemr");
  const [innerTabs, setInnerTabs] = useState({
    openemr: "datasheet",
    healthit: "articles",
    mu: "datasheet",
    qa: "datasheet",
    interoperability: "datasheet",
    lim: "datasheet",
    pbm: "datasheet",
  });

  const handleInnerTabChange = (catId, tabId) => {
    setInnerTabs((prev) => ({ ...prev, [catId]: tabId }));
  };

  const currentCategoryObj = categories.find((c) => c.id === activeCategory);
  const activeInnerTab = innerTabs[activeCategory];

  return (
    <div className="bg-white min-h-screen text-[#333333] font-sans w-full">
      {/* Banner / Header */}
      <div className="bg-[#f5f5f5] py-4 border-b border-gray-200 w-full">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <img
            src={bannerImg}
            alt="Healthcare IT Resources Header"
            className="max-h-24 object-contain w-auto max-w-full"
          />
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-[#e9ecef] py-2 border-b border-gray-300 text-sm w-full">
        <div className="max-w-7xl mx-auto px-4 text-gray-600">
          <span className="text-[#0070c0]">Resources</span> &gt;&gt;{" "}
          <span className="text-gray-800 font-semibold">Healthcare IT</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-8 w-full space-y-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Healthcare IT Resources
        </h1>

        {/* Top Category Tabs */}
        <div className="border-b border-gray-200 pb-3 overflow-x-auto">
          <div className="flex flex-nowrap sm:flex-wrap gap-2 min-w-max sm:min-w-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                aria-label={`Select category ${cat.label}`}
                className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-[#f16d05] text-white shadow-sm"
                    : "bg-gray-100 text-[#0070c0] hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Header & Inner Tabs Section */}
        <div className="bg-slate-50 border border-gray-200 rounded-xl p-5 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-4 gap-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#f16d05]">
              {currentCategoryObj?.heading}
            </h2>

            {/* Inner Tabs Navigation */}
            <div className="flex flex-wrap gap-2">
              {activeCategory === "openemr" && (
                <>
                  <button
                    onClick={() => handleInnerTabChange("openemr", "datasheet")}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded border transition-colors ${
                      activeInnerTab === "datasheet"
                        ? "bg-[#f16d05] text-white border-[#f16d05]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    Datasheet
                  </button>
                  <button
                    onClick={() => handleInnerTabChange("openemr", "demo")}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded border transition-colors ${
                      activeInnerTab === "demo"
                        ? "bg-[#f16d05] text-white border-[#f16d05]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => handleInnerTabChange("openemr", "casestudy")}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded border transition-colors ${
                      activeInnerTab === "casestudy"
                        ? "bg-[#f16d05] text-white border-[#f16d05]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    Case Study
                  </button>
                </>
              )}

              {activeCategory === "healthit" && (
                <button
                  onClick={() => handleInnerTabChange("healthit", "articles")}
                  className="px-3 py-1.5 text-xs sm:text-sm font-semibold rounded border bg-[#f16d05] text-white border-[#f16d05]"
                >
                  Articles
                </button>
              )}

              {activeCategory === "mu" && (
                <>
                  <button
                    onClick={() => handleInnerTabChange("mu", "datasheet")}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded border transition-colors ${
                      activeInnerTab === "datasheet"
                        ? "bg-[#f16d05] text-white border-[#f16d05]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    Datasheet
                  </button>
                  <button
                    onClick={() => handleInnerTabChange("mu", "articles")}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded border transition-colors ${
                      activeInnerTab === "articles"
                        ? "bg-[#f16d05] text-white border-[#f16d05]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    Articles
                  </button>
                </>
              )}

              {activeCategory === "qa" && (
                <>
                  <button
                    onClick={() => handleInnerTabChange("qa", "datasheet")}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded border transition-colors ${
                      activeInnerTab === "datasheet"
                        ? "bg-[#f16d05] text-white border-[#f16d05]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    Datasheet
                  </button>
                  <button
                    onClick={() => handleInnerTabChange("qa", "whitepaper")}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded border transition-colors ${
                      activeInnerTab === "whitepaper"
                        ? "bg-[#f16d05] text-white border-[#f16d05]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    White Paper
                  </button>
                </>
              )}

              {activeCategory === "interoperability" && (
                <>
                  <button
                    onClick={() => handleInnerTabChange("interoperability", "datasheet")}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded border transition-colors ${
                      activeInnerTab === "datasheet"
                        ? "bg-[#f16d05] text-white border-[#f16d05]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    Datasheet
                  </button>
                  <button
                    onClick={() => handleInnerTabChange("interoperability", "articles")}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded border transition-colors ${
                      activeInnerTab === "articles"
                        ? "bg-[#f16d05] text-white border-[#f16d05]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    Articles
                  </button>
                </>
              )}

              {activeCategory === "lim" && (
                <>
                  <button
                    onClick={() => handleInnerTabChange("lim", "datasheet")}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded border transition-colors ${
                      activeInnerTab === "datasheet"
                        ? "bg-[#f16d05] text-white border-[#f16d05]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    Datasheet
                  </button>
                  <button
                    onClick={() => handleInnerTabChange("lim", "articles")}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded border transition-colors ${
                      activeInnerTab === "articles"
                        ? "bg-[#f16d05] text-white border-[#f16d05]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    Articles
                  </button>
                  <button
                    onClick={() => handleInnerTabChange("lim", "demo")}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded border transition-colors ${
                      activeInnerTab === "demo"
                        ? "bg-[#f16d05] text-white border-[#f16d05]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => handleInnerTabChange("lim", "casestudy")}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded border transition-colors ${
                      activeInnerTab === "casestudy"
                        ? "bg-[#f16d05] text-white border-[#f16d05]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    Case Study
                  </button>
                </>
              )}

              {activeCategory === "pbm" && (
                <>
                  <button
                    onClick={() => handleInnerTabChange("pbm", "datasheet")}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded border transition-colors ${
                      activeInnerTab === "datasheet"
                        ? "bg-[#f16d05] text-white border-[#f16d05]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    Datasheet
                  </button>
                  <button
                    onClick={() => handleInnerTabChange("pbm", "demo")}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded border transition-colors ${
                      activeInnerTab === "demo"
                        ? "bg-[#f16d05] text-white border-[#f16d05]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    Demo
                  </button>
                </>
              )}
            </div>
          </div>

          {/* INNER CONTENT DISPLAY */}
          <div className="pt-2">
            {/* 1. OPENEMR */}
            {activeCategory === "openemr" && (
              <>
                {activeInnerTab === "datasheet" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PdfCard
                      title="OpenEMR Medical Administrative Assistants Guide"
                      description="This document describes the OpenEMR guidelines for Medical Administrative Assistants."
                      asset="/assets/resources/healthcare-it/openemr-guide.pdf"
                    />
                    <PdfCard
                      title="Hardening OpenEMR in Cloud"
                      description="This Technical Guide is intended to provide a detailed overview on deploying and hardening OpenEMR in Cloud (AWS)."
                      asset="/assets/resources/healthcare-it/Hardening_of_OpenEMR_in_Cloud_AWS.pdf"
                    />
                    <PdfCard
                      title="High Availability Of OpenEMR in Cloud"
                      description="This document focuses on achieving High Availability for OpenEMR in Cloud (AWS)."
                      asset="/assets/resources/healthcare-it/High_Availability_of_OpenEMR_in_Cloud_AWS.pdf"
                    />
                    <InfoCard
                      title="Deploying OpenEMR with Multiple Instance in Cloud"
                      description="The main objective of this technical guide is to assist users on how to deploy multiple OpenEMR instance in cloud environment (AWS)."
                    />
                  </div>
                )}

                {activeInnerTab === "demo" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <DemoCard
                      title="OpenEMR Demo"
                      description="This is an OpenEMR Demo."
                      url="http://www.visolve.com/hc/"
                    />
                  </div>
                )}

                {activeInnerTab === "casestudy" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PdfCard
                      title="24x7x365 Business Continuity of OpenEMR in Cloud"
                      description="24x7x365 access to patient data through increased availability of OpenEMR in Cloud"
                      asset="/assets/resources/healthcare-it/24x7x365-Business-Continuity-of-openEMR-in-Cloud-Case-Study-June2016.pdf"
                    />
                    <PdfCard
                      title="Calendar Synchronization in OpenEMR"
                      description="This Technical Guide is intended to provide a detailed overview on Calendar Synchronization in OpenEMR."
                      asset="/assets/resources/healthcare-it/Calendar-Synchronization-in-OpenEMR-Tech-Guide-June2016.pdf"
                    />
                  </div>
                )}
              </>
            )}

            {/* 2. HEALTH IT ENGINEERING/OUTSOURCING */}
            {activeCategory === "healthit" && (
              <div className="space-y-4">
                <InfoCard
                  title="What makes an ACO succeed? - June 18, 2014"
                  description="An accountable care organization (ACO) is a healthcare organization characterized by a payment and care delivery model that seeks to tie provider reimbursements to quality ....."
                />
                <InfoCard
                  title="What is Population Health Management? - June 17, 2014"
                  description="In a society, people are influenced by other people living there. Our life is interdependently weaved with everyone else. The linkage between people applies to the field of ....."
                />
              </div>
            )}

            {/* 3. MEANINGFUL USE */}
            {activeCategory === "mu" && (
              <>
                {activeInnerTab === "datasheet" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PdfCard
                      title="Meaningful Use Stage 2 Final Rules"
                      description="This document describes Meaningful Use - Core and Menu Objectives for Eligible Professionals (EPs) and Eligible Hospitals (EHs)"
                      asset="/assets/resources/healthcare-it/Meaningful Use Stage 2 Final Rules.pdf"
                    />
                    <PdfCard
                      title="MU Stage 2 Final Rules for Eligible Professionals"
                      description="This document describes the Summary of proposed changes in Meaningful use stage 2 for Eligible Professionals (EPs)"
                      asset="/assets/resources/healthcare-it/Meaningful Use Stage 2_Final Rules_for_Eligible Professionals.pdf"
                    />
                    <PdfCard
                      title="MU Stage 2 Final Rules for Eligible Hospitals"
                      description="This document describes the Summary of proposed changes in Meaningful use stage 2 for Eligible Hospitals (EHs)"
                      asset="/assets/resources/healthcare-it/Meaningful Use Stage 2_Final Rules_for_Eligible Hospitals.pdf"
                    />
                    <PdfCard
                      title="MU Stage 2 Final Rules Standards & Certification Criteria - 2014 Edition"
                      description="This document describes the Proposed Timeline for Stage 2 and Meaningful Use certification criteria"
                      asset="/assets/resources/healthcare-it/Meaningful Use Stage 2_Final Rules_Standards & Certification Criteria - 2014 Edition.pdf"
                    />
                    <PdfCard
                      title="Meaningful Use - Interactive Charts"
                      description="This document offers an overview of Meaningful Use measures for Eligible Hospitals and Eligible Professionals, EHR penalties, Physician Medicare and Medicaid Incentives, and Hospital Incentives."
                      asset="/assets/resources/healthcare-it/Meaningful Use Interactive Charts.pdf"
                    />
                    <PdfCard
                      title="MU Consulting Methodology - Brochure"
                      description="This document describes the MU Consulting Services offered by ViSolve Healthcare IT and the steps taken by our team of experts to help you achieve the Meaningful Use Certification."
                      asset="/assets/resources/healthcare-it/MUO Consulting Methodology.pdf"
                    />
                  </div>
                )}

                {activeInnerTab === "articles" && (
                  <div className="space-y-4">
                    <InfoCard
                      title="ViSolve’s Meaningful Use capabilities proven!!"
                      description="ViSolve, Inc. assisted simplifyMD to achieve the 2014 Edition – Complete Ambulatory EHR certification from ICSA Labs. ViSolve development team was involved right from ....."
                    />
                    <InfoCard
                      title="$19 billion given as EHR Incentives"
                      description="Centers for Medicare & Medicaid Services (CMS) recently revealed the fact that more than $19 Billion has been reimbursed as incentives for the meaningful use program. ....."
                    />
                    <InfoCard
                      title="SGR Formula Demystified"
                      description="The physicians receive their Medicare reimbursements through a complicated formula (based on economic growth) known as Sustainable Growth Rate (SGR) that was prescribed back in 1997. ....."
                    />
                    <InfoCard
                      title="Challenges faced by EHR Vendors"
                      description="EHRs are not easily usable and their workflows are complicated. Due to Meaningful Use and incentives, most organizations just want to set up an EHR and start using it. ....."
                    />
                    <InfoCard
                      title="Security Risk Analysis (SRA) and Meaningful Use Attestation"
                      description="Security Risk Analysis (SRA) will help the provider to evaluate his EHR and his practice settings for Securing the Patient Data and fixing/mitigating the Security and Privacy threats, if any. ....."
                    />
                    <InfoCard
                      title="Social and Behavioral data in EHR"
                      description="Despite the strong evidence, social and behavioral factors are not well addressed in clinical care; especially EHRs that do not record more about social and behavioral factors. ....."
                    />
                    <InfoCard
                      title="ONC Health IT Strategic Plan 2015-2020"
                      description="The office of the National Coordinator for Health IT has released its Federal Health IT Strategic roadmap for 2015-2020, updating the goals that was released during the year 2011. ....."
                    />
                  </div>
                )}
              </>
            )}

            {/* 4. QA */}
            {activeCategory === "qa" && (
              <>
                {activeInnerTab === "datasheet" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PdfCard
                      title="QA Services"
                      description="This document gives you an insight into the list of QA Services we perform here at ViSolve."
                      asset="/assets/resources/healthcare-it/QA_Services_Version1.0_08292013.pdf"
                    />
                  </div>
                )}

                {activeInnerTab === "whitepaper" && (
                  <div className="space-y-4">
                    <InfoCard
                      title="Enhancing EHR Performance for Better Business Outcomes"
                      description="A whitepaper on optimizing EHR performance to drive operational success."
                    />
                    <InfoCard
                      title="Visolve’s Role in augmenting an EHR’s Quality"
                      description="An overview of ViSolve's contributions to improving EHR quality and standards."
                    />
                  </div>
                )}
              </>
            )}

            {/* 5. INTEROPERABILITY */}
            {activeCategory === "interoperability" && (
              <>
                {activeInnerTab === "datasheet" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PdfCard
                      title="Achieving DICOM Interoperability using Mirth - Technical Guide"
                      description="A technical document on achieving DICOM Interoperability using Mirth, and Integrating DICOM with OpenEMR."
                      asset="/assets/resources/healthcare-it/Achieving-DICOM-Interoperability-in-OpenEMR-using-Mirth-Tech-Guide-June2016.pdf"
                    />
                  </div>
                )}

                {activeInnerTab === "articles" && (
                  <div className="space-y-4">
                    <InfoCard
                      title="What is Interoperability?"
                      description="Interoperability is the ability of making disparate systems talk to each other. The basic purpose of enabling interoperability is information exchange. ....."
                    />
                    <InfoCard
                      title="ONC Releases 10-Year Vision to Achieve Interoperability in Health IT"
                      description="At the epicenter of the healthcare scene, providers play a vital role in delivery of healthcare. They are key stakeholders in the healthcare cycle and impact almost everyone ....."
                    />
                    <InfoCard
                      title="ONC Releases 10-Year Vision to Achieve Interoperability in Health IT"
                      description="The Office of the National Coordinator for Health Information Technology recently released a vision document to achieve Interoperability in HealthIT. ....."
                    />
                  </div>
                )}
              </>
            )}

            {/* 6. LIM */}
            {activeCategory === "lim" && (
              <>
                {activeInnerTab === "datasheet" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PdfCard
                      title="LIM for Labs & Radiology"
                      description="This document describes about the Lab Inter-operability Module."
                      asset="/assets/resources/healthcare-it/LIM-OnePager-Datasheet-June2016.pdf"
                    />
                    <PdfCard
                      title="LIM for Clinicians"
                      description="This Technical Guide is intended to provide a detailed overview on LIM for Clinicians."
                      asset="/assets/resources/healthcare-it/LIM-for-Lab-and-Clinicians-DataSheet-June2016.pdf"
                    />
                  </div>
                )}

                {activeInnerTab === "articles" && (
                  <div className="space-y-4">
                    <InfoCard
                      title="Patient direct access to Lab Test Results"
                      description="Under the HIPAA rule, the patient or the patient representative can see and directly request the lab for the lab test results, including an electronic copy of the result. ....."
                    />
                    <InfoCard
                      title="Why connecting to Labs is becoming difficult for EMR / EHR vendors"
                      description="Connecting Laboratories to Electronic Medical Record/Health Record (EMR/EHR) systems is a critical piece of the interoperability puzzle. ....."
                    />
                  </div>
                )}

                {activeInnerTab === "demo" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InfoCard
                      title="Lab Interoperability Module"
                      description="Lab Interoperability Module Demo."
                    />
                  </div>
                )}

                {activeInnerTab === "casestudy" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PdfCard
                      title="PMS and EHR Integration - Case Study"
                      description="A case study that describes how ViSolve Healthcare IT helped a leading medical billing company in the U.S. to integrate their PMS with EHR."
                      asset="/assets/resources/healthcare-it/PMS-EHR-Integration-Case-Study-June2016.pdf"
                    />
                    <InfoCard
                      title="Lab and EHR Integration - Case Study"
                      description="A case study that describes how ViSolve Healthcare IT helped a leading system integrator in the U.S. to integrate their hosted EHR cloud environment with the laboratory information system (LIS)."
                    />
                  </div>
                )}
              </>
            )}

            {/* 7. PBM */}
            {activeCategory === "pbm" && (
              <>
                {activeInnerTab === "datasheet" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PdfCard
                      title="ViSolve's PBM"
                      description="This document describes about the Pluggable Billing Module."
                      asset="/assets/resources/healthcare-it/Datasheet_PBM_13Oct2016_Updated.pdf"
                    />
                  </div>
                )}

                {activeInnerTab === "demo" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <DemoCard
                      title="Pluggable Billing Module"
                      description="Billing Module Demo."
                      route="/services/medicalbilling"
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

{/* Helper Sub-Components */}

function PdfCard({ title, description, asset }) {
  return (
    <a
      href={asset}
      target="_blank"
      rel="noreferrer"
      aria-label={`Download PDF: ${title}`}
      className="flex items-start space-x-4 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-[#f16d05] transition-all group w-full"
    >
      <img
        src={pdfIcon}
        alt="PDF Icon"
        className="w-10 h-10 object-contain flex-shrink-0 mt-1"
      />
      <div className="space-y-1">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-[#f16d05] transition-colors">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
        <span className="inline-block text-xs font-semibold text-[#f16d05] pt-1">
          Download PDF &rarr;
        </span>
      </div>
    </a>
  );
}

function InfoCard({ title, description }) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm w-full space-y-1">
      <h3 className="text-sm sm:text-base font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function DemoCard({ title, description, url, route }) {
  if (route) {
    return (
      <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col justify-between space-y-3 w-full">
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-gray-800">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
        <div>
          <Link
            to={route}
            className="inline-block px-3.5 py-1.5 text-xs font-semibold text-white bg-[#f16d05] rounded hover:bg-[#d85e00] transition-colors"
          >
            View Demo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col justify-between space-y-3 w-full">
      <div>
        <h3 className="text-sm sm:text-base font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
      {url ? (
        <div>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-3.5 py-1.5 text-xs font-semibold text-white bg-[#f16d05] rounded hover:bg-[#d85e00] transition-colors"
          >
            View Demo
          </a>
        </div>
      ) : null}
    </div>
  );
}

export default Datasheet;

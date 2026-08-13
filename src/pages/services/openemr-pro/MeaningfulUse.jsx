import React from "react";
import { Link } from "react-router-dom";
import OpenEMRSubNav from "../../../components/ui/OpenEMRSubNav";

function MeaningfulUse() {
  return (
    <div className="w-full bg-white font-sans text-gray-700">
      {/* OpenEMR Section Sub-Navigation */}
      <OpenEMRSubNav activeLabel="Meaningful Use" />


      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 flex justify-center">
            <img
              src="/assets/openemr/mu_consulting.png"
              alt="Meaningful Consulting"
              className="max-h-[350px] w-auto object-contain drop-shadow"
            />
          </div>
          <div className="md:col-span-6 text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-4xl font-normal text-gray-800 leading-tight">
              Meaningful Use Objective
            </h1>
            <h5 className="text-base text-gray-600 font-light leading-relaxed">
              ViSolve’s professionals with their deep knowledge and experience in Meaningful Use Consulting & Certification assistance process, can guide you to get your EMR certified on time, and earn proven assurance for your products functionality, interoperability and security.
            </h5>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          {/* Overview text & Process Diagram */}
          <div className="space-y-8">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify max-w-5xl mx-auto">
              Meaningful Use (MU) is a set of defined standards dictated by CMS (Center for Medicare & Medicaid Services) led by the U.S. Government under the HITECH [Health IT for Economic and Clinical Health] to encourage healthcare providers to illustrate the use of certified Electronic Health Records on a ‘Meaningful Use’ basis. Adhering to Meaningful Use (MU) provides tremendous opportunity for healthcare providers to embrace new technology, improve patient care and receive ARRA/HITECH funding.
            </p>

            <div className="text-center space-y-6">
              <h4 className="text-2xl font-bold text-[#3a3f4b]">
                ViSolve Meaningful Use Consulting Process
              </h4>
              <div className="flex justify-center">
                <img
                  src="/assets/openemr/MU Consulting Process.png"
                  alt="ViSolve Meaningful Use Consulting Process"
                  className="max-w-full h-auto max-h-[500px] object-contain rounded shadow-sm border border-gray-100"
                />
              </div>
            </div>
          </div>

          {/* Process Breakdown Steps */}
          <div className="max-w-5xl mx-auto space-y-8 pt-4">
            {/* Step 1: Gap Analysis */}
            <div className="space-y-2">
              <h5 className="text-lg font-bold text-[#3a3f4b]">Gap Analysis</h5>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                Our MU team will request for a product demo of the EHR product to understand the functionality. Once the comfort level is reached, the team execute the Health IT (HIT) test procedures on the application to identify the (present) compliance level with the NIST (National Institute of Standards and Technology) guidelines. A Gap Analysis Report — that enumerates the features that need to be developed, enhanced, and the ones that do not need any updates, will be shared with the customer.
              </p>
            </div>

            {/* Step 2: Effort & Cost Estimation */}
            <div className="space-y-2">
              <h5 className="text-lg font-bold text-[#3a3f4b]">Effort & Cost Estimation</h5>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                Based on the gap analysis, we will provide an estimate of our cost based on the effort that would be involved in the project. Upon agreement, we will move forward with the actual software development and quality assurance process.
              </p>
            </div>

            {/* Step 3: Software Development Assistance */}
            <div className="space-y-2">
              <h5 className="text-lg font-bold text-[#3a3f4b]">Software Development Assistance</h5>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                Our developers would be happy to assist you in creating the code or modifying your code to make your EHR eligible for certification. We take up the responsibility to design and develop the features based on the MU Objectives. We have dedicated Project Management Professionals (PMPs) whose skills encompass to overlook and manage the code built for you by our team of engineers.
              </p>
            </div>

            {/* Step 4: ONC Certification Preparation Assistance */}
            <div className="space-y-2">
              <h5 className="text-lg font-bold text-[#3a3f4b]">ONC Certification Preparation Assistance</h5>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                As prominent OpenEMR Board Members, our MU team have the experience of demonstrating OpenEMR for certification to ICSA Labs (Accredited Test Lab and Office of the National Coordinator Authorized Certification Body (ONC-ACB)). Therefore, if you need any assistance with the certification preparation, we are here to help you. On behalf of you, we can go one step ahead and perform the demo to the certification body.
              </p>
            </div>

            {/* Step 5: ONC Certification Maintenance Assistance */}
            <div className="space-y-2">
              <h5 className="text-lg font-bold text-[#3a3f4b]">ONC Certification Maintenance Assistance</h5>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                You have a new feature deployed, and you are not sure if that’s going to affect the MU objectives. Reach out to us — we can test your product. Once your product is ONC-ATCB certified, ViSolve can offer post certification assistance for the product.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MeaningfulUse;

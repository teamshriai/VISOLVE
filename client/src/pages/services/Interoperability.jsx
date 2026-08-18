import React from "react";
import { FiFileText } from "react-icons/fi";

function Interoperability() {
  return (
    <div className="w-full bg-white font-sans text-gray-700">

      {/* Main Content */}

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-12">
        {/* Title & Overview */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#262626]">
              Interoperability
            </h2>
            <a
              href="/assets/resources/Interoporablity.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 bg-[#f16d05] hover:bg-orange-600 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded shadow transition-colors"
            >
              <FiFileText className="text-base" />
              <span>Download Interoperability Datasheet (PDF)</span>
            </a>
          </div>
          <p className="text-sm md:text-base leading-relaxed text-justify text-gray-600">
            Real-time healthcare settings will need to have seamless exchange of healthcare data between different systems such as EMR/EHR, practice management/medical billing system, laboratory information system, Radiology information system etc. Our interoperability team focuses on providing customized healthcare interoperability solutions to enable secure exchange of patient data between disparate systems in a healthcare environment. We enable integration environments that adheres to standards such as HITECH, meaningful use and HIPAA. Also, one of the key factors of the requirements is to be eligible for incentive payments is the capability to exchange clinical information and report on key quality measures. We enable interfacing your EHR to practice management, billing, lab, radiology or hospital systems or linking your practice to other systems as part of a community wide health information exchange. We can help you regulate and simplify your deployment via open source based integration services, based on industry standards, to integrate individual systems to communicate with each other and third party systems.
          </p>
        </section>

        {/* Interoperability Services */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-[#262626]">
            Interoperability Services
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Our Interoperability consultants possess in-depth expertise in developing, testing, deploying and managing bi-directional interfaces.
          </p>
          <div className="space-y-3 text-sm md:text-base text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-800">Developing Interfaces:</strong> Our Integration consultants develop customized interfaces using their expertise in various data formats and healthcare standards including HL7 (Version 2 and 3), HL7 CDA & CCD, CCR, X12, NCPDP, DICOM, XML, delimited files, etc.
            </p>
            <p>
              <strong className="text-gray-800">Testing Interfaces:</strong> Our experts follow test-as-you-develop model that improves the quality of interfaces while developing and enables rapid deployments.
            </p>
            <p>
              <strong className="text-gray-800">Deploying Interfaces:</strong> Our team has extensive experience in deploying interfaces including documenting the interfaces that have been built and test, and enabling back up of the production environment. This stage involves porting the testing environment and testing the production set up without interrupting and finally starting the interfacing connections for use.
            </p>
            <p>
              <strong className="text-gray-800">Managing Interfaces:</strong> Once the interfaces have been deployed, they are managed with the help of customized monitoring capabilities including a dashboard that provides proactive alerts, message statistics as well as active connection statuses.
            </p>
            <p>
              <strong className="text-gray-800">Professional Support for Mirth:</strong> We also provide third party professional support for Mirth suite of applications which is now used in over 100,000 settings worldwide and has set the standard for ease and speed in getting systems connected, and building a Health Information Exchange (HIE) solution within your organization or across your community.
            </p>
          </div>
        </section>

        {/* Lab Interoperability Module */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-[#262626]">
            Lab Interoperability Module
          </h3>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
            ViSolve's Lab Interoperability Module (LIM) can help you improve lab outreach with physicians by enabling electronic lab orders and results exchange between your clinical laboratory and physician practices. While there may be several unique challenges faced by different stake holders in this system, ViSolve addresses this challenge with a bi-directional Lab Interoperability Module - an interface engine and gateway that enables seamless connectivity between clinicians and labs.
          </p>
        </section>

        {/* LIM Subsections */}
        <section className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-[#262626] mb-1">
              LIM for Clinical Labs and Radiology Labs
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
              Clinical labs and radiology labs can retain existing referral physician base and win more physician customers by enabling them to electronically place lab orders from their EMR/EHR and receive results into the EMR/EHR, using LIM.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#262626] mb-1">
              LIM for Physician Practices
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
              LIM also enables physicians to send orders to multiple labs and receive results using a single bi-directional interface. This helps physicians to save significantly on integration, implementation and training costs, effort and time. Physicians who do not use an EMR/EHR, can use the LIM portal for ordering tests and viewing results.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#262626] mb-1">
              LIM for EMR/EHR vendors
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
              EMR/EHR vendors can now integrate order entry and results exchange into the system using LIM to improve meaningful use compliance, by enable physicians to place orders from their using CPOE feature and results exchange between healthcare providers, labs, imaging centers and ancillary services.
            </p>
          </div>
        </section>

        {/* Demo Videos */}
        <section className="space-y-6 pt-4">
          <h3 className="text-2xl font-bold text-[#262626]">
            Demo Videos:
          </h3>

          <div className="space-y-6">
            <div>
              <p className="text-sm md:text-base text-gray-700 font-semibold mb-3">
                To view a pre-recorded video demo on ViSolve Lab Interoperability Module (LIM) - EMR Integration, please watch this video:
              </p>
              <div className="w-full max-w-2xl aspect-video rounded shadow overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Us0qwUWUZI4"
                  title="ViSolve Lab Interoperability Module (LIM) - EMR Integration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div>
              <p className="text-sm md:text-base text-gray-700 font-semibold mb-3">
                To view a pre-recorded video demo on LIM Portal, please watch this video:
              </p>
              <div className="w-full max-w-2xl aspect-video rounded shadow overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/1LScBf-b-qM"
                  title="LIM Portal Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Interoperability;

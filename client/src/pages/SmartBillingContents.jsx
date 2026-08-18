import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const sampleScreens = [
  { src: "/assets/openemr/PBM-Dashboard-1.png", title: "PBM Dashboard" },
  { src: "/assets/openemr/Patient-Management-2.png", title: "Patient Management" },
  { src: "/assets/openemr/Claim-Management-3.png", title: "Claim Management" },
  { src: "/assets/openemr/Claim-Management-Edit-Logs.png", title: "Claim Management Logs" },
  { src: "/assets/openemr/Payment-Posting-5.png", title: "Payment Posting" },
  { src: "/assets/openemr/Reports-Dashboard-5.png", title: "Reports Dashboard" },
  { src: "/assets/openemr/Insurance-Reports-6.png", title: "Insurance Reports" },
];

function SmartBillingContents() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="w-full bg-white font-sans text-gray-700">
      {/* Fixed Action Controls */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-2">
        <a
          href="https://billing.visolve.com/user-registration/"
          target="_blank"
          rel="noreferrer"
          className="bg-[#ff8000] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded shadow-lg text-xs uppercase text-center transition-colors"
        >
          Live Demo
        </a>
        <a
          href="#video_demo"
          className="bg-[#ff8000] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded shadow-lg text-xs uppercase text-center transition-colors"
        >
          Video Demo
        </a>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight">
              ViSolve Medical Billing Solution.
            </h1>
            <p className="text-lg md:text-2xl font-semibold text-[#ff8000]">
              Enabling Physicians to get paid faster and easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
            {/* Checklist */}
            <div className="md:col-span-5 space-y-3">
              {[
                "Intuitive and easy to use",
                "Cloud based software",
                "Hosted in HIPAA compliant AWS",
                "Easily customizable",
                "Free trial for 90 days",
                "Low monthly payments and no start up costs",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-sm md:text-base font-medium text-gray-700">
                  <img
                    src="/assets/openemr/check-orange.png"
                    alt="bullet icon"
                    className="w-4 h-4 object-contain"
                  />
                  <span>{item}</span>
                </div>
              ))}

              <div className="pt-4 flex space-x-3">
                <a
                  href="https://billing.visolve.com/user-registration/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#ff8000] hover:bg-orange-600 text-white font-bold py-2.5 px-5 rounded shadow text-xs md:text-sm uppercase transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href="#video_demo"
                  className="bg-[#ff8000] hover:bg-orange-600 text-white font-bold py-2.5 px-5 rounded shadow text-xs md:text-sm uppercase transition-colors"
                >
                  Video Demo
                </a>
              </div>
            </div>

            {/* Doctor Thumbnail Banner */}
            <div className="md:col-span-7 flex justify-center">
              <img
                src="/assets/openemr/doc-thumb.png"
                alt="Happy Practitioner"
                className="max-h-[360px] w-auto object-contain drop-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Billing Content Section */}
      <section className="py-14 space-y-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-14">
          {/* Medical Billing Overview */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Medical Billing
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
              If you are looking for an intuitive and reliable medical billing software, then you are at the right place. ViSolve's Medical Billing software also known as Pluggable Billing Module (PBM) is an easy to use medical office software that caters to a wide range of general and specialty practices to simplify the billing process and help providers get paid faster.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify font-medium">
              One of the biggest challenge for practices is to get paid. Following are some of the most common medical billing challenges faced by healthcare providers, which ViSolve's billing solution aims to address:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-sm text-gray-700">
              {[
                "Ensuring use of latest medical billing codes and staying up-to-date on latest regulations",
                "Increased percentage of errors in medical bills which in turn increases claim rejections and resubmissions",
                "Ensuring collection of full co-pays",
                "Automatic electronic checking of patient's insurance coverage",
                "Advance checking of medical procedures that are covered and not covered in a patient's insurance policy",
                "Emphasis on both submission of claims and follow ups",
                "Flexibility for providers to choose whether or not, they want to work with the same vendor or different vendor for medical billing software and revenue cycle management services",
                "Offshoring medical billing concerns such as patient data security, lack or attrition of skilled offshore billing staff, and lack of specialty based billing knowledge",
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-[#ff8000] font-bold">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sample Screens Gallery */}
          <div className="space-y-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Medical Billing Sample Screens
            </h2>
            <div className="bg-slate-900 rounded-xl p-4 md:p-6 shadow-xl space-y-4">
              <div className="h-64 sm:h-80 md:h-[420px] flex items-center justify-center overflow-hidden">
                <img
                  src={sampleScreens[activeSlide].src}
                  alt={sampleScreens[activeSlide].title}
                  className="max-h-full max-w-full object-contain rounded"
                />
              </div>
              <div className="flex items-center justify-between px-4 text-white text-xs md:text-sm">
                <button
                  onClick={() => setActiveSlide((prev) => (prev === 0 ? sampleScreens.length - 1 : prev - 1))}
                  className="inline-flex items-center space-x-1 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded transition-colors"
                >
                  <FiChevronLeft className="text-base" />
                  <span>Previous</span>
                </button>
                <span className="font-semibold text-orange-400">
                  {sampleScreens[activeSlide].title} ({activeSlide + 1} / {sampleScreens.length})
                </span>
                <button
                  onClick={() => setActiveSlide((prev) => (prev + 1) % sampleScreens.length)}
                  className="inline-flex items-center space-x-1 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded transition-colors"
                >
                  <span>Next</span>
                  <FiChevronRight className="text-base" />
                </button>
              </div>
            </div>
          </div>

          {/* Datasheet Section */}
          <div className="bg-slate-50 border border-gray-200 rounded-xl p-6 md:p-8 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Datasheet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-4 flex justify-center">
                <a href="/docs/PBM Final.pdf" target="_blank" rel="noreferrer">
                  <img
                    src="/assets/openemr/datasheet.jpg"
                    alt="ViSolve Smart Billing Datasheet"
                    className="max-h-52 object-contain shadow rounded hover:opacity-90 transition-opacity"
                  />
                </a>
              </div>
              <div className="md:col-span-8 space-y-3">
                <a
                  href="/docs/PBM Final.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl font-bold text-gray-800 hover:text-[#ff8000] transition-colors"
                >
                  ViSolve Smart Billing
                </a>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                  Medical billing is a complex and cumbersome process in every medical practice. Additionally, insurance companies makes it harder for medical practices by rejecting nearly 30% of the claims, based on industry statistics. Claim rejections could be due to several reasons such as missing, invalid and incomplete charge details etc. For the claims that are accepted, the insurance companies take about 60 to 90 days to pay money to doctors.
                </p>
              </div>
            </div>
          </div>

          {/* Easily Customizable */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-3">
              <h2 className="text-2xl font-bold text-gray-800">Easily Customizable</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                ViSolve's medical billing solution is designed to address the real challenges of medical billing. Given that customer feedback for us is the key, we will continue to be sensitive to provider's billing challenges and will continue to enhance the software to ensure every provider's ROI on this software is justified. One of the biggest strengths of ViSolve Healthcare is customization and we provide customized solutions to ensure the software works according to the needs of providers and not the other way.
              </p>
            </div>
            <div className="md:col-span-5 flex justify-center">
              <img
                src="/assets/openemr/billing_new_1.png"
                alt="Billing Customization"
                className="max-h-56 object-contain"
              />
            </div>
          </div>

          {/* High Interoperability */}
          <div className="space-y-6 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-800">High Interoperability</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
              The pluggable billing module can also be an extension to the EMR at your practice, and has a seamless workflow to integrate with any EHR/EMR or any healthcare module or third party system.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex justify-center">
                <img
                  src="/assets/openemr/billing_new_2.png"
                  alt="High Interoperability"
                  className="max-h-56 object-contain"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-lg font-bold text-gray-800">
                  Practitioner friendly software enabling better outcomes
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">
                  The software also comes with a business intelligence dashboard feature and efficient workflow helping you getting you paid quicker. Any issues with a claim, can be addressed before claim submission enabling in error free claims that supports faster payments. Claim denials are added as new rules that helps prevent denials in future. Our software helps free up healthcare providers from administrative tasks so they can focus on other high priorities and enhanced patient care.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              Electronic claims, paper claims, patient appointment scheduling, insurance eligibility checks, connecting to multiple clearing houses and much more makes ViSolve's medical billing module a great choice for a general practice or specialty practice.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed text-justify">
              It offers user-friendly, efficient and complete electronic automation of claims processing with user-defined rules to correct claims. Through our advanced medical billing module, holding multiple pre-defined validation rules, clear rejection intimations are inbuilt with the billing application. We assist to process claims instantaneously in a single shot, resulting in improved productivity and less hassles.
            </p>
          </div>

          {/* Lowest TCO */}
          <div className="space-y-3 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-800">Lowest Total Cost of Ownership advantage</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
              ViSolve's main objective is to reduce significant internal costs associated with in-house billing and provide your medical office timely reimbursement through electronic claim submission. It is a cloud based software, which we host for you in a HIPAA compliant Amazon Cloud with no start up cost or contractual hassles. We also provide free trial for 90 days, where users can gets hands on to evaluate and use the product. Post the trial period, you can continue to use the software for a minimal monthly fee that includes hosting and basic support. Our rates is definitely one of the most competitive in the industry.
            </p>
          </div>

          {/* No vendor lock in */}
          <div className="space-y-3 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-800">No vendor lock in</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
              While we provide one stop solutions and encourage you to work with one of our partners for a seamless and proven revenue cycle management solutions, we do not believe in overselling or forcing providers to change vendors or dictate with whom they should be working with. There is no vendor lock in and providers have absolute flexibility to work with whom they have best working relationship and outcomes. We are very good in what we do - Customized healthcare software and solutions and we do not compete with revenue cycle management vendors.
            </p>
          </div>

          {/* Other Benefits */}
          <div className="space-y-3 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-800">Other Benefits</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
              {[
                "Produces clean and accurate claims using HIPAA compliant transaction formats",
                "Paperless collection processes and streamlined data entry",
                "Enables prompt and accurate reimbursement",
                "Reporting tools provide Business Intelligence data to improve operations and business outcomes",
                "Helps to verify insurance benefits and make billing adjustments",
                "Enables easy follow-up on accepted, rejected, and overdue claims",
                "Cloud based software that is equipped with performance, security and scalability",
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-[#ff8000] font-bold">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Embedded YouTube Video Demo */}
          <div id="video_demo" className="space-y-4 text-center border-t border-gray-200 pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Video Demo of ViSolve Smart Billing
            </h2>
            <div className="max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/MUN3lVurLrQ"
                title="Video Demo of ViSolve Smart Billing"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SmartBillingContents;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiX } from 'react-icons/fi';

function PBM() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-gray-600">
          <Link to="/services" className="hover:text-[#f16d05]">Services</Link>
          <span className="mx-2">&gt;&gt;</span>
          <Link to="/services/openemr" className="hover:text-[#f16d05]">Healthcare IT</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span className="text-gray-800 font-medium">Pluggable Billing Module (PBM)</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Pluggable Billing Module (PBM)</h1>
            <p className="text-blue-100 mt-2 text-base md:text-lg">
              Smart Medical Billing Solution for OpenEMR &amp; Healthcare Facilities
            </p>
          </div>
          <div className="flex-shrink-0 bg-white/10 p-3 rounded-lg border border-white/20">
            <img
              src="/assets/images/billing_banner.png"
              alt="Pluggable Billing Module Banner"
              className="max-h-16 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Article Content */}
          <div className="md:col-span-8 space-y-8">
            {/* Title Badge Section */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl md:text-3xl font-bold text-[#f16d05]">
                  Pluggable Billing Module
                </h2>
                <span className="bg-red-600 text-white font-extrabold px-3 py-1 text-xs uppercase tracking-wider rounded">
                  Now With
                </span>
                <img
                  src="/assets/images/Login-logo-nopad.png"
                  alt="OpenEMR Integration"
                  className="h-8 object-contain inline-block"
                />
              </div>

              <p className="text-gray-800 font-medium text-base md:text-lg leading-relaxed">
                <strong>ViSolve’s Pluggable Billing Module (PBM)</strong> — is an extension to the EMR at your practice, and is made available as a pluggable module to get integrated with it.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Billing is a unique realm in health care industry, and with PBM, we offer a complete user friendly business solution to your health care facility. Through ViSolve’s PBM, we focus on providing a hassle free product that could be plugged with any kind of EMR covering major clearing houses and insurance companies that are recommended.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                With the current healthcare environment, it is observed that processing the insurance claims and transferring the payments from insurance companies to the EMR is more hassle ridden and time consuming. Most of the insurance companies are keen in rejecting the insurance claim and deny it due to validation issues within the claim. This, ofcourse creates complications and takes time in getting the payments back to the EMR.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                With respect to these concerns, using ViSolve’s PBM, we are keen to ensure the time taken is reduced in processing the claims from the EMR to insurance companies. Through our advanced electronic billing module, holding multiple pre-defined validation rules and clear rejection intimations inbuilt with the billing application, we assist to process the claim instantaneously in a single shot, so that the cumbersome billing process is reduced at the EMR's end.
              </p>
            </div>

            {/* Product Features List */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-bold text-[#215B87]">
                Our Pluggable Billing Module Features Include:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 text-sm md:text-base">
                <li className="flex items-center space-x-2">
                  <FiCheck className="text-[#f16d05] font-bold text-lg inline" />
                  <span>Scheduling</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FiCheck className="text-[#f16d05] font-bold text-lg inline" />
                  <span>Patient Registration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FiCheck className="text-[#f16d05] font-bold text-lg inline" />
                  <span>Adaptable to any EHR</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FiCheck className="text-[#f16d05] font-bold text-lg inline" />
                  <span>Supports multiple clearing houses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FiCheck className="text-[#f16d05] font-bold text-lg inline" />
                  <span>Supports insurance eligibility checks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FiCheck className="text-[#f16d05] font-bold text-lg inline" />
                  <span>Supports both electronic and paper claims</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FiCheck className="text-[#f16d05] font-bold text-lg inline" />
                  <span>Pre-defined validation rules for error analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FiCheck className="text-[#f16d05] font-bold text-lg inline" />
                  <span>Crisp &amp; clear error messages on claim rejections</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FiCheck className="text-[#f16d05] font-bold text-lg inline" />
                  <span>Business Intelligence Reports &amp; Patient Statements</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FiCheck className="text-[#f16d05] font-bold text-lg inline" />
                  <span>ERA Auto posting</span>
                </li>
                <li className="flex items-center space-x-2 md:col-span-2">
                  <FiCheck className="text-[#f16d05] font-bold text-lg inline" />
                  <span>Support on iPad and Smartphones</span>
                </li>
              </ul>
            </div>

            {/* Call to Action Contact */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-800 text-sm md:text-base">
                To know more about ViSolve's Pluggable Billing Module, please contact us by email at{' '}
                <a href="mailto:services@visolve.com" className="text-blue-600 font-semibold underline">
                  services@visolve.com
                </a>{' '}
                or call us at <span className="font-semibold text-gray-900">+1 (408)-850-2243</span>.
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="md:col-span-4 space-y-6">
            {/* Live & Recorded Demos */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg space-y-4 shadow-sm">
              <h4 className="font-bold text-[#215B87] uppercase tracking-wider text-sm border-b pb-2">
                PBM Demos
              </h4>
              <div className="space-y-4">
                <a
                  href="https://billing.visolve.com/user-registration/"
                  target="_blank"
                  rel="noreferrer"
                  className="block group"
                >
                  <img
                    src="/assets/images/billing_live_demo.png"
                    alt="Pluggable Billing Module Live Demo"
                    className="w-36 hover:opacity-90 transition-opacity rounded border border-gray-300"
                  />
                  <span className="text-xs text-blue-600 group-hover:underline block mt-1 font-medium">
                    Try Live Billing Demo &gt;&gt;
                  </span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="block text-left group w-full"
                >
                  <img
                    src="/assets/images/billing_demo_video.png"
                    alt="Pluggable Billing Module Recorded Video Demo"
                    className="w-36 hover:opacity-90 transition-opacity rounded border border-gray-300"
                  />
                  <span className="text-xs text-blue-600 group-hover:underline block mt-1 font-medium">
                    Watch Video Demo (YouTube) &gt;&gt;
                  </span>
                </button>
              </div>
            </div>

            {/* Datasheets */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg space-y-4 shadow-sm">
              <h4 className="font-bold text-[#215B87] uppercase tracking-wider text-sm border-b pb-2">
                Datasheets
              </h4>
              <div className="flex items-start space-x-3">
                <a
                  href="/assets/resources/healthcare-it/PBM Final.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-shrink-0"
                >
                  <img
                    src="/assets/images/side_datasheet.png"
                    alt="PBM Datasheet PDF"
                    className="w-14 h-auto border border-gray-300 rounded shadow-sm hover:opacity-90"
                  />
                </a>
                <div className="text-xs text-gray-700 space-y-1">
                  <a
                    href="/assets/resources/healthcare-it/PBM Final.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-blue-600 hover:underline block leading-snug"
                  >
                    PBM for EMR/EHR Vendors
                  </a>
                  <p className="text-gray-600">
                    Smart medical billing system that integrates with any EMR/EHR
                  </p>
                </div>
              </div>
            </div>

            {/* Healthcare IT Products & Services Sidebar Links */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg space-y-4 shadow-sm text-xs">
              <h4 className="font-bold text-[#215B87] uppercase tracking-wider border-b pb-2">
                Products
              </h4>
              <ul className="space-y-1.5 text-gray-700">
                <li>
                  <span className="font-semibold text-gray-900">Lab Interoperability Module</span>
                  <ul className="pl-4 mt-1 space-y-1 text-gray-600">
                    <li><Link to="/services/openemr" className="hover:text-[#f16d05]">For EMR/EHR Vendors</Link></li>
                    <li><Link to="/services/interoperability" className="hover:text-[#f16d05]">For Labs &amp; Radiology</Link></li>
                    <li><Link to="/services/openemr" className="hover:text-[#f16d05]">For Clinicians</Link></li>
                  </ul>
                </li>
                <li className="pt-2">
                  <Link to="/products/pbm" className="font-bold text-[#f16d05]">
                    Pluggable Billing Module (PBM)
                  </Link>
                </li>
              </ul>

              <h4 className="font-bold text-[#215B87] uppercase tracking-wider border-b pb-2 pt-4">
                Services
              </h4>
              <ul className="space-y-1.5 text-gray-700">
                <li><Link to="/services/openemr" className="hover:text-[#f16d05]">EMR/EHR Services</Link></li>
                <li><Link to="/services/openemr" className="hover:text-[#f16d05]">Software Engineering Services</Link></li>
                <li><Link to="/services/interoperability" className="hover:text-[#f16d05]">Interoperability Services</Link></li>
                <li><Link to="/services/openemr-pro/meaningfuluse" className="hover:text-[#f16d05]">Meaningful Use Consulting</Link></li>
                <li><Link to="/services/qa-certification" className="hover:text-[#f16d05]">QA Services</Link></li>
                <li><Link to="/services/migration" className="hover:text-[#f16d05]">Migration Services (ICD-10, EHR)</Link></li>
                <li><Link to="/services/opensource" className="hover:text-[#f16d05]">Open Source Services</Link></li>
              </ul>
            </div>

            {/* Direct Contact Info */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg space-y-3 shadow-sm text-xs">
              <h4 className="font-bold text-[#215B87] uppercase tracking-wider border-b pb-2">
                Call Us
              </h4>
              <p className="text-gray-700">Talk to our healthcare solution specialist:</p>
              <div className="flex items-center space-x-3">
                <img src="/assets/images/side_call.jpg" alt="Call Support" className="w-12 h-12 object-cover rounded-full" />
                <div>
                  <p className="text-sm font-bold text-gray-900">+1 (408)-850-2243</p>
                  <p className="text-gray-500">services@visolve.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-4 relative space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="font-bold text-[#215B87]">Pluggable Billing Module Video Demo</h3>
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="text-gray-500 hover:text-gray-800 text-lg font-bold px-2"
              >
                <FiX />
              </button>
            </div>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/MUN3lVurLrQ?autoplay=1"
                title="Pluggable Billing Module Video Demo"
                className="w-full h-full rounded border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PBM;

import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import OpenEMRSubNav from "../../../components/ui/OpenEMRSubNav";

function Features() {
  return (
    <div className="w-full bg-white font-sans text-gray-700">
      {/* OpenEMR Section Sub-Navigation */}
      <OpenEMRSubNav activeLabel="Features" />
      {/* Floating See in Action button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://openemrpro.visolve.com/user-registration/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-2 bg-[#f16d05] text-white font-bold py-2.5 px-4 rounded shadow-lg hover:bg-orange-600 transition-colors text-sm"
        >
          <span>See in Action</span>
          <FiExternalLink className="text-base" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-4xl font-normal text-gray-800 leading-tight">
              ViSolve OpenEMR Pro
            </h1>
            <h5 className="text-lg text-gray-600 font-light">
              Connect the tools of your trade into one seamless flow.
            </h5>
            <h6 className="text-sm text-gray-500 font-normal">
              The hub of all - work here the friction between tasks is removed.
            </h6>
            <div className="pt-4 flex justify-center md:justify-start">
              <a
                href="https://openemrpro.visolve.com/user-registration/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 bg-[#f16d05] text-white font-semibold py-2.5 px-5 rounded shadow hover:bg-orange-600 transition-colors text-sm"
              >
                <span>See in Action</span>
                <FiExternalLink className="text-base" />
              </a>
            </div>
          </div>
          <div className="md:col-span-6 flex justify-center">
            <img
              src="/assets/openemr/openemr-features-banner-edited.png"
              alt="OpenEMR Pro Features"
              className="max-h-[350px] w-auto object-contain drop-shadow"
            />
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          {/* Feature 1: Video Consultation */}
          <div id="feature1" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-10 border-b border-gray-100">
            <div>
              <h4 className="text-xl font-bold text-[#ff8000] mb-2">Video Consultation</h4>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                FACE TO FACE, NO MATTER WHERE YOU ARE. Patients who live in remote locations can get the quality care they deserve through Video Consultation. It also allows clinicians to expand their practice hours, letting people book appointments at times that fit their needs and lifestyle.
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-800">Schedule Appointment</h5>
              <p className="text-xs text-gray-600 leading-relaxed">
                Set up an appointment with your provider based on their availability. Make sure to set the appointment type as "Video Consult".
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-800">Join Video Consultation</h5>
              <p className="text-xs text-gray-600 leading-relaxed">
                Verify the prerequisites in your device and join the video consultation call with your provider.
              </p>
            </div>
          </div>

          {/* Feature 2: Secure Messages */}
          <div id="feature2" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-10 border-b border-gray-100">
            <div>
              <h4 className="text-xl font-bold text-[#ff8000] mb-2">Secure Messages</h4>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                A simple, automated &amp; integrated patient messaging system that anyone in your practice can use. It’s all about the automation. Ongoing patient interactions can result in greater loyalty &amp; bring in new revenue.
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <h5 className="text-sm font-semibold text-gray-800">Inbox</h5>
                <p className="text-xs text-gray-600 leading-relaxed">Inbox focuses on organizing the messages by allowing the user to bundle similar emails together.</p>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-800">Sent Items</h5>
                <p className="text-xs text-gray-600 leading-relaxed">The email you’ve sent will now be stored in the ‘Sent Mail’ folder on your portal Admin dashboard.</p>
              </div>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-800">Compose Message</h5>
              <p className="text-xs text-gray-600 leading-relaxed">Do you want to send mail to provider or patient, OpenEMR-Pro provided integrated Secured Messages helps in composing messages in simple steps.</p>
            </div>
          </div>

          {/* Feature 3: Efficient billing management */}
          <div id="feature3" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-10 border-b border-gray-100">
            <div>
              <h4 className="text-xl font-bold text-[#ff8000] mb-2">Efficient billing management</h4>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                With ViSolve Medical Billing, there’s no better software to support in-house billing process. ViSolve's web and mobile compatible Billing application help practice to easily manage patients and the obstacle that come with billing insurance.
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <h5 className="text-sm font-semibold text-gray-800">ERA Processing</h5>
                <p className="text-xs text-gray-600 leading-relaxed">ViSolve facilitates the downloading and initial processing of Electronic Remittance Advice (ERA) messages from insurance payers for ViSolve medical billing users.</p>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-800">Clearing House</h5>
                <p className="text-xs text-gray-600 leading-relaxed">No more uploading claims &amp; downloading remittances. Save time &amp; hassle with our integrated clearinghouse for flawless, all-in-one data exchange.</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h5 className="text-sm font-semibold text-gray-800">Claims Scrubbing</h5>
                <p className="text-xs text-gray-600 leading-relaxed">Every claim is cross-checked for patient &amp; policy identification &amp; checked by payer-specific rules, reviewed to ensure accurate coding.</p>
              </div>
              <Link to="/services/medicalbilling" className="inline-flex items-center space-x-1 text-xs font-bold text-[#f16d05] hover:underline pt-2">
                <span>Learn More</span>
                <FiArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          {/* Feature 4: Streamline scheduling process */}
          <div id="feature4" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-10 border-b border-gray-100">
            <div>
              <h4 className="text-xl font-bold text-[#ff8000] mb-2">Streamline scheduling process</h4>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Medical schedulers hold specialized positions in the administrative staff of a hospital, clinic, or other medical setting. Typical daily duties performed by medical scheduler include create/edit patient and provider appointments.
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-800">Provider Availability Check</h5>
              <p className="text-xs text-gray-600 leading-relaxed">Elegant User Interface giving out provider's available time slots to avoid redundant appointments and conflicts.</p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-800">Recurring appointments</h5>
              <p className="text-xs text-gray-600 leading-relaxed">Schedule recurring appointments for provider and patient in OpenEMR-Pro by just checking the options which makes front office staff work easier.</p>
            </div>
          </div>

          {/* Feature 5: Patient Portal */}
          <div id="feature5" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div>
              <h4 className="text-xl font-bold text-[#ff8000] mb-2">Patient Portal</h4>
              <p className="text-xs text-gray-600 leading-relaxed text-justify">
                Improved patient engagement with ViSolve Patient Portal. See how you can deliver better care through patient-physician video conferencing, appointment reminders, online order refills, direct message communication with providers and more.
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <h5 className="text-sm font-semibold text-gray-800">Health Records</h5>
                <p className="text-xs text-gray-600 leading-relaxed">Patients can access their medical health records and get more involved in the care with their provider.</p>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-800">Prescription</h5>
                <p className="text-xs text-gray-600 leading-relaxed">Ordering prescription refill has never been this easy before!</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h5 className="text-sm font-semibold text-gray-800">Pay Bills</h5>
                <p className="text-xs text-gray-600 leading-relaxed">Easily pay your bills for office visits from the patient portal.</p>
              </div>
              <Link to="/services/patientportal" className="inline-flex items-center space-x-1 text-xs font-bold text-[#f16d05] hover:underline pt-2">
                <span>Learn More</span>
                <FiArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;

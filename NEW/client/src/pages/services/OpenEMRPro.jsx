import React from "react";
import { Link } from "react-router-dom";
import { FiShield, FiCalendar, FiVideo, FiGlobe, FiBarChart2, FiFileText, FiSliders, FiMail, FiExternalLink } from "react-icons/fi";
import OpenEMRSubNav from "../../components/ui/OpenEMRSubNav";

function OpenEMRPro() {
  return (
    <div className="w-full bg-white font-sans text-gray-700">
      {/* OpenEMR Section Sub-Navigation */}
      <OpenEMRSubNav activeLabel="OpenEMR Pro" />
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
      <section className="bg-white border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 flex justify-center">
            <a href="https://openemrpro.visolve.com/user-registration" target="_blank" rel="noreferrer">
              <img
                src="/assets/openemr/openemr-pro-hero.png"
                alt="OpenEMR Pro"
                className="max-h-[360px] w-auto object-contain"
              />
            </a>
          </div>
          <div className="md:col-span-6 text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-4xl font-normal text-gray-800 leading-tight">
              Feel the power of OpenEMR Pro
            </h1>
            <h5 className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
              Your best healthcare partner to align every step of the practice with full-spectrum 7x24 patient management support and with exclusive features like patient portal, HIE, Interoperability (FHIR), billing, scheduler, cloud hosting and more.
            </h5>
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
        </div>
      </section>

      {/* What makes ViSolve OpenEMR Pro better? */}
      <section id="brand" className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-[#3a3f4b]">
              What makes ViSolve OpenEMR Pro better?
            </h3>
          </div>

          {/* Grid of 8 Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: 2FA */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f6f8] text-[#ff7405] text-2xl flex items-center justify-center mb-4">
                <FiShield />
              </div>
              <h5 className="text-lg font-semibold text-[#3a3f4b] mb-2">Two Factor Authentication</h5>
              <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                As a part of cyber security strategy, Visolve recommends Two Factor Authentication. With an extra layer of security, healthcare organizations can avoid phishing attacks and safeguard patients' electronic health records (EHR).
              </p>
            </div>

            {/* Card 2: Google Calendar Integration */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f6f8] text-[#ff7405] text-2xl flex items-center justify-center mb-4">
                <FiCalendar />
              </div>
              <h5 className="text-lg font-semibold text-[#3a3f4b] mb-2">Google Calendar Integration</h5>
              <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Patient appointments can be integrated with Google calendar so that the patients get automated reminders reducing redundancy in work flow.
              </p>
            </div>

            {/* Card 3: Video Consultation */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f6f8] text-[#ff7405] text-2xl flex items-center justify-center mb-4">
                <FiVideo />
              </div>
              <h5 className="text-lg font-semibold text-[#3a3f4b] mb-2">Video Consultation</h5>
              <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Expedite patient collaboration with healthcare providers through real-time video communications. Patient Portal takes advantage of HIPAA enabled Zoom US software to deliver better patient-provider collaboration. Let the patients get treated virtually from anywhere at your convenience. Save your meetings for later reviews.
              </p>
            </div>

            {/* Card 4: Interoperability */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f6f8] text-[#ff7405] text-2xl flex items-center justify-center mb-4">
                <FiGlobe />
              </div>
              <h5 className="text-lg font-semibold text-[#3a3f4b] mb-2">Interoperability through FHIR/Mirth</h5>
              <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                By Offering customisable solution, OpenEMR Pro is helping to fulfill vision of truly connected office, in which patients, providers and technology are connected seamlessly and exchange data with other hospitals, when required, through Mirth Connect.
              </p>
            </div>

            {/* Card 5: Physician Dashboard */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f6f8] text-[#ff7405] text-2xl flex items-center justify-center mb-4">
                <FiBarChart2 />
              </div>
              <h5 className="text-lg font-semibold text-[#3a3f4b] mb-2">Physician Dashboard</h5>
              <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Stay on top of your day. View your schedule, messages, test results & to-do lists in one convenient location. Our physician dashboard is part of OpenEMR Pro, a best-in-class integrated EHR system designed to simplify & streamline all your clinical processes.
              </p>
            </div>

            {/* Card 6: Patient Documents */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f6f8] text-[#ff7405] text-2xl flex items-center justify-center mb-4">
                <FiFileText />
              </div>
              <h5 className="text-lg font-semibold text-[#3a3f4b] mb-2">Patient Documents</h5>
              <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Patients can quickly & easily complete forms online. Simple tap-&-type entry makes it quick & easy to update demographic changes, complete a form, or sign a form. It fits into your practice rather than you adjusting to fit its features. No pester, just convenience.
              </p>
            </div>

            {/* Card 7: Customizable Forms */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f6f8] text-[#ff7405] text-2xl flex items-center justify-center mb-4">
                <FiSliders />
              </div>
              <h5 className="text-lg font-semibold text-[#3a3f4b] mb-2">Customizable Forms</h5>
              <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                The electronic medical records software that lets you chart your way in, because one-size doesn't fit all! It's a highly personal way to create optimal workflows that lets you consult more patients in an environment that fits your style.
              </p>
            </div>

            {/* Card 8: Patient Messaging */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#f5f6f8] text-[#ff7405] text-2xl flex items-center justify-center mb-4">
                <FiMail />
              </div>
              <h5 className="text-lg font-semibold text-[#3a3f4b] mb-2">Patient Messaging</h5>
              <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                A simple automated and integrated patient messaging system that's absolutely easy to use. Ongoing patient interactions can result in greater loyalty and bring in more revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OpenEMR Pro features & add-ons */}
      <section className="py-14 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-[#3a3f4b]">
              OpenEMR Pro features & add-ons
            </h3>
          </div>

          {/* Row 1: Video Consultation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Video Consultation</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                With the wide expanse of digital technology at our disposal, healthcare professionals are increasingly using them to provide care to patients who need it most. Patients who live in remote locations can get the quality care they deserve through Video Consultation. It also allows clinicians to expand their practice hours, letting people book appointments at times that fit their needs and lifestyle.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/assets/openemr/video-consult.png" alt="Video Visit" className="max-h-72 w-auto object-contain rounded" />
            </div>
          </div>

          {/* Row 2: Patient Interaction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img src="/assets/openemr/compose-message.png" alt="Patient Messages" className="max-h-72 w-auto object-contain rounded" />
            </div>
            <div className="space-y-3 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Patient Interaction</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                Forget phone tag. Communicate with Providers and Patients in the most convenient and confidential way on the go, while reducing bottlenecks and cost. Patients would rather like to chat in the privacy of their devices than remain on hold while being passed around from staff to staff before reaching the Provider.
              </p>
            </div>
          </div>

          {/* Row 3: Customization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Customization</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                No one size fits all. OpenEMR Pro doesn't make you adjust your practice to fit our software, instead OpenEMR Pro can be configured to fit your practice. OpenEMR Pro is customizable as much as your practice requires. Also, the templates and forms can be customized to fit your specialty and preferences.
              </p>
            </div>
            <div className="space-y-4 flex flex-col items-center">
              <img src="/assets/openemr/customization.png" alt="Customization screen 1" className="max-h-48 w-auto object-contain rounded drop-shadow-sm" />
              <img src="/assets/openemr/customization1.png" alt="Customization screen 2" className="max-h-48 w-auto object-contain rounded drop-shadow-sm" />
              <img src="/assets/openemr/customization2.png" alt="Customization screen 3" className="max-h-48 w-auto object-contain rounded drop-shadow-sm" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OpenEMRPro;

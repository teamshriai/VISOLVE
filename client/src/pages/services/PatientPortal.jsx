import React from "react";
import { FiExternalLink, FiList, FiVideo, FiCalendar, FiGlobe, FiDownload } from "react-icons/fi";
import OpenEMRSubNav from "../../components/ui/OpenEMRSubNav";

function PatientPortal() {
  const scrollToFeatures = () => {
    const el = document.getElementById("feature1");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white font-sans text-gray-700">
      {/* OpenEMR Section Sub-Navigation */}
      <OpenEMRSubNav activeLabel="Patient Portal" />
      {/* Floating See in Action button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://35.90.242.205/patientportal/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-2 bg-[#f16d05] text-white font-bold py-2.5 px-4 rounded shadow-lg hover:bg-orange-600 transition-colors text-sm"
        >
          <span>See in Action</span>
          <FiExternalLink className="text-base" />
        </a>
      </div>

      {/* Custom Header */}

      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-4xl font-normal text-gray-800 leading-tight">
              Engage your patient better with Visolve Patient Portal
            </h1>
            <h5 className="text-lg text-gray-600 font-light">
              Helps Healthcare practitioners provide superior care and real time consultation
            </h5>
            <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-3">
              <a
                href="https://35.90.242.205/patientportal/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 bg-[#f16d05] text-white font-semibold py-2.5 px-5 rounded shadow hover:bg-orange-600 transition-colors text-sm"
              >
                <span>See in Action</span>
                <FiExternalLink className="text-base" />
              </a>
              <button
                type="button"
                onClick={scrollToFeatures}
                className="inline-flex items-center space-x-2 bg-[#f16d05] text-white font-semibold py-2.5 px-5 rounded shadow hover:bg-orange-600 transition-colors text-sm"
              >
                <FiList className="text-base" />
                <span>Features</span>
              </button>
            </div>
          </div>
          <div className="md:col-span-6 flex justify-center">
            <a href="https://35.90.242.205/patientportal/" target="_blank" rel="noreferrer">
              <img
                src="/assets/openemr/mysalutem-fea.png"
                alt="Patient Portal"
                className="max-h-[350px] w-auto object-contain drop-shadow"
              />
            </a>
          </div>
        </div>
      </section>

      {/* What makes ViSolve Patient Portal better? */}
      <section id="service" className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-10">
          <h3 className="text-3xl font-semibold text-[#3a3f4b]">
            What makes ViSolve Patient Portal better?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#f5f6f8] text-[#ff7405] text-3xl flex items-center justify-center mb-4">
                <FiVideo />
              </div>
              <h5 className="text-xl font-semibold text-[#3a3f4b] mb-2">Video Consultation</h5>
              <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Patients get to book appointments for video consultation enabling the Healthcare provider to consult on the go. Makes remote consultation possible irrespective of restricted mobility or geographic distance.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#f5f6f8] text-[#ff7405] text-3xl flex items-center justify-center mb-4">
                <FiCalendar />
              </div>
              <h5 className="text-xl font-semibold text-[#3a3f4b] mb-2">Google Calendar</h5>
              <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Patient appointments can be integrated with Google calendar so that the patients get automated reminders reducing redundancy in work flow.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#f5f6f8] text-[#ff7405] text-3xl flex items-center justify-center mb-4">
                <FiGlobe />
              </div>
              <h5 className="text-xl font-semibold text-[#3a3f4b] mb-2">Interoperability (FHIR)</h5>
              <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                ViSolve's enhanced interoperability solutions allow users to securely and rapidly aggregate patient data from all sources seamlessly and share it between disparate systems for more coordinated &amp; efficient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strengthen Patient Engagement */}
      <section className="py-14 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-[#3a3f4b]">
              Strengthen Patient Engagement with ViSolve
            </h3>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Video Consultation</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                Expedite patient collaboration with healthcare providers through real-time video communications. Patient Portal takes advantage of HIPAA enabled Zoom US software to deliver better patient-provider collaboration. Let the patients get treated virtually from anywhere at your convenience. Save your meetings for later reviews.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/assets/openemr/videoconsulting.png" alt="Video Consultation" className="max-h-72 w-auto object-contain rounded" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img src="/assets/openemr/prescriptionrefills.png" alt="Prescription Refills" className="max-h-72 w-auto object-contain rounded" />
            </div>
            <div className="space-y-3 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Prescription Refills</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                Enables the patients to request for a prescription refill from pharmacy by merely a few clicks from the mobile device, thereby making the process smooth and uncomplicated.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Manage Appointments</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                Patient Portal integrates with the EHR at the provider's office reducing the number of no-shows and avoiding duplicate patient appointments by sending out automated reminders to the patients prior to appointment.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/assets/openemr/scheduleappointment.png" alt="Schedule appointment" className="max-h-72 w-auto object-contain rounded" />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img src="/assets/openemr/securemessaging.png" alt="Secure Messaging" className="max-h-72 w-auto object-contain rounded" />
            </div>
            <div className="space-y-3 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Secure Messaging</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                Send and receive messages from Patient Portal between the patient and provider that are super-safe and secure. Patients can communicate any health related information which gets to be handled with discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="feature1" className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <h3 className="text-3xl font-bold text-center text-black">Features</h3>

          {/* Feature 1: Health Records */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-8 border-b border-gray-100">
            <div>
              <h4 className="text-xl font-bold text-[#ff8000] mb-2">Health Records</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Patients can access their medical health records and get more involved in care with their provider.
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <h5 className="text-sm font-semibold text-gray-800">Vitals</h5>
                <p className="text-xs text-gray-600 leading-relaxed">View your vital signs information like blood pressure, height, weight and other medical details.</p>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-800">Allergies</h5>
                <p className="text-xs text-gray-600 leading-relaxed">Get information about your allergies, date when it was recorded and the current status of the allergy.</p>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-800">Patient Documents</h5>
                <p className="text-xs text-gray-600 leading-relaxed">Quickly upload any files from your previous providers and securely send them over to your practice.</p>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-800">Reports</h5>
                <p className="text-xs text-gray-600 leading-relaxed">View your entire health and care information in the form of a detailed report. Download your compiled CCR/CCD documents to ensure persistent care.</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h5 className="text-sm font-semibold text-gray-800">Health Issues</h5>
                <p className="text-xs text-gray-600 leading-relaxed">Get a snapshot view of patient health issues, begin date and the status of each issue.</p>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-800">Immunizations</h5>
                <p className="text-xs text-gray-600 leading-relaxed">Get the list of your immunization records with vaccine details, date/quantity and completion status.</p>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-800">Test Results</h5>
                <p className="text-xs text-gray-600 leading-relaxed">Get notified when you receive lab test results. View the result details and the test status in the portal.</p>
              </div>
            </div>
          </div>

          {/* Feature 2: Appointments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-8 border-b border-gray-100">
            <div>
              <h4 className="text-xl font-bold text-[#ff8000] mb-2">Appointments</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Appointment scheduling helps in increasing revenue and improve patient satisfaction by managing the flow of patients.
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <h5 className="text-sm font-semibold text-gray-800">Schedule Appointment</h5>
                <p className="text-xs text-gray-600 leading-relaxed">Schedule an appointment for specific appointment type, visit reason and the appointment duration.</p>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-gray-800">Set Reminder Preference</h5>
                <p className="text-xs text-gray-600 leading-relaxed">Choose how and when you want to get notified about your upcoming appointment - Email/SMS/Call.</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h5 className="text-sm font-semibold text-gray-800">View Appointments</h5>
                <p className="text-xs text-gray-600 leading-relaxed">View the list of upcoming appointments to avoid any confusions with the provider. Also view the past appointments details for any specific information.</p>
              </div>
            </div>
          </div>

          {/* Feature 3: Secure Messaging */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-8 border-b border-gray-100">
            <div>
              <h4 className="text-xl font-bold text-[#ff8000] mb-2">Secure Messaging</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Send/receive HIPAA enabled messages between patients and healthcare providers.
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-800">Send Messages to Provider</h5>
              <p className="text-xs text-gray-600 leading-relaxed">Transfer important health information or a message with your provider with high levels of privacy and security.</p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-800">Manage Messages</h5>
              <p className="text-xs text-gray-600 leading-relaxed">Keep track of messages with your provider. Review and delete messages that are of less relevance.</p>
            </div>
          </div>

          {/* Feature 4: Prescriptions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-8 border-b border-gray-100">
            <div>
              <h4 className="text-xl font-bold text-[#ff8000] mb-2">Prescriptions</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Ordering your prescription refill has never been this easy before!
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-800">Send Refill Request</h5>
              <p className="text-xs text-gray-600 leading-relaxed">Save time and enjoy convenient prescription refills and transfer options from the portal.</p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-800">View Prescription</h5>
              <p className="text-xs text-gray-600 leading-relaxed">Take a stock of the prescriptions suggested by the provider. Need a refill? Choose the medication, select the pharmacy and send a refill request.</p>
            </div>
          </div>

          {/* Feature 5: Pay Bills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-8 border-b border-gray-100">
            <div>
              <h4 className="text-xl font-bold text-[#ff8000] mb-2">Pay Bills</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Easily pay your bills for office visits from the patient portal.
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-800">Pay Bills</h5>
              <p className="text-xs text-gray-600 leading-relaxed">Had an office visit with the provider? Watch out for the invoice on the Pay Bills screen. Select the invoice and pay your charges.</p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-800">View Reports</h5>
              <p className="text-xs text-gray-600 leading-relaxed">Receive a handy copy of your medical bill with the charge details.</p>
            </div>
          </div>

          {/* Feature 6: Video Consultation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-8 border-b border-gray-100">
            <div>
              <h4 className="text-xl font-bold text-[#ff8000] mb-2">Video Consultation</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Increase patient engagement through direct video consultation with the providers.
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-800">Schedule Appointment</h5>
              <p className="text-xs text-gray-600 leading-relaxed">Set up an appointment with your provider based on their availability. Make sure to set the appointment type as "Video Consult".</p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-800">Join Video Consultation</h5>
              <p className="text-xs text-gray-600 leading-relaxed">Verify the prerequisites in your device and join the video consultation call with your provider.</p>
            </div>
          </div>

          {/* Feature 7: Patient Education Material */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div>
              <h4 className="text-xl font-bold text-[#ff8000] mb-2">Patient Education Material</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Patient resources for educational purposes. Know more about specific medical terminologies from leading healthcare information sources.
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-800">Search Resource</h5>
              <p className="text-xs text-gray-600 leading-relaxed">First class integration with Medline, eMedicine and WebMD to deliver educational materials for better care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Datasheet CTA Section */}
      <section className="py-10 bg-gray-50 text-center">
        <a
          href="/assets/docs/patientportal-datasheet.pdf"
          download
          className="inline-flex items-center space-x-2 bg-[#f16d05] text-white font-semibold py-3 px-6 rounded shadow hover:bg-orange-600 transition-colors text-sm"
        >
          <span>Download Datasheet</span>
          <FiDownload className="text-base" />
        </a>
      </section>
    </div>
  );
}

export default PatientPortal;

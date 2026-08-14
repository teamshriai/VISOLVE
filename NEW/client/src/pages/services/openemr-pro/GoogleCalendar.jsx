import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import OpenEMRSubNav from "../../../components/ui/OpenEMRSubNav";

function GoogleCalendar() {
  return (
    <div className="w-full bg-white font-sans text-gray-700">
      {/* OpenEMR Section Sub-Navigation */}
      <OpenEMRSubNav activeLabel="Google Calendar" />
      {/* Floating See in Action button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://gc.visolve.com/"
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
          <div className="md:col-span-6 flex justify-center">
            <a href="https://gc.visolve.com/" target="_blank" rel="noreferrer">
              <img
                src="/assets/openemr/google_calendar_banner.jpg"
                alt="Google Calendar Notification"
                className="max-h-[350px] w-auto object-contain drop-shadow"
              />
            </a>
          </div>
          <div className="md:col-span-6 text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-4xl font-normal text-gray-800 leading-tight">
              Feel the power of OpenEMR Pro with Google Calendar
            </h1>
            <h5 className="text-base text-gray-600 font-light">
              Reduce no-shows and late arrivals of patients with auto-reminders
            </h5>
            <div className="pt-4 flex justify-center md:justify-start">
              <a
                href="https://gc.visolve.com/"
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

      {/* How Google Calendar works for OpenEMR Pro? */}
      <section className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#3a3f4b] text-center">
            How Google Calendar works for OpenEMR Pro?
          </h3>

          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h5 className="text-lg font-bold text-[#3a3f4b]">
                Feel the power of OpenEMR Pro with Google Calendar
              </h5>
              <div className="flex items-start space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#f16d05] text-white font-bold flex items-center justify-center text-sm shrink-0">
                  1
                </span>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-gray-800">Download & Register</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Download Google Calendar on your mobile device (iOS : Apps Store; Android : Google Play Store)
                  </p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Login to OpenEMR Pro with registered credentials.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/assets/openemr/login.png" alt="Download & Register" className="max-h-72 w-auto object-contain rounded border border-gray-200 shadow-sm" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img src="/assets/openemr/gc_1.png" alt="Create Patient" className="max-h-72 w-auto object-contain rounded border border-gray-200 shadow-sm" />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <div className="flex items-start space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#f16d05] text-white font-bold flex items-center justify-center text-sm shrink-0">
                  2
                </span>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-gray-800">Create Patient</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Create new patient by: Patient/client &rarr; New/Search &rarr; Fill in required details especially in Choices &rarr; Gmail ID for Google calendar notification (Fill in Patient's Gmail ID).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#f16d05] text-white font-bold flex items-center justify-center text-sm shrink-0">
                  3
                </span>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-gray-800">Enabling Notification for Service Provider</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    As a service provider, if you are interested in getting intimation of patient appointments (else, skip this step), enable Google Calendar Notification under 'User settings' as shown below:
                  </p>
                  <p className="text-sm md:text-base font-bold text-gray-800">
                    Username &rarr; Settings &rarr; Google Calendar Notification &rarr; Enable Gmail Account.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/assets/openemr/gc_7.png" alt="Enabling Notification" className="max-h-72 w-auto object-contain rounded border border-gray-200 shadow-sm" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img src="/assets/openemr/gc_2.png" alt="Manage Google Calendar Settings" className="max-h-72 w-auto object-contain rounded border border-gray-200 shadow-sm" />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <div className="flex items-start space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#f16d05] text-white font-bold flex items-center justify-center text-sm shrink-0">
                  4
                </span>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-gray-800">Manage Google Calendar Settings</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Login to Google Calendar through registered Gmail ID.
                  </p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Change the settings in Google Calendar for the field 'Automatically add invitations': Google Calendar &rarr; Settings &rarr; Event Settings &rarr; Automatically add invitations (select the preferred option).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#f16d05] text-white font-bold flex items-center justify-center text-sm shrink-0">
                  5
                </span>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-gray-800">Create Appointment</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Create a new appointment for patient.
                  </p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    If the patient Gmail ID is available then the notification will be automatically created in patient's Google Calendar.
                  </p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    If the service provider Google Calendar notification is enabled with Gmail ID, then notification will be automatically created in physician Google Calendar.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/assets/openemr/gc_3.png" alt="Create Appointment" className="max-h-72 w-auto object-contain rounded border border-gray-200 shadow-sm" />
            </div>
          </div>

          {/* Step 6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img src="/assets/openemr/gc_4.png" alt="Appointment Notification" className="max-h-72 w-auto object-contain rounded border border-gray-200 shadow-sm" />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <div className="flex items-start space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#f16d05] text-white font-bold flex items-center justify-center text-sm shrink-0">
                  6
                </span>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-gray-800">Appointment Notification</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Congrats! You have successfully enabled Google Calendar notification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GoogleCalendar;

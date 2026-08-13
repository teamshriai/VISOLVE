import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink, FiChevronRight } from "react-icons/fi";
import OpenEMRSubNav from "../../../components/ui/OpenEMRSubNav";

function Scheduler() {
  return (
    <div className="w-full bg-white font-sans text-gray-700">
      {/* OpenEMR Section Sub-Navigation */}
      <OpenEMRSubNav activeLabel="Scheduler Pro" />
      {/* Floating See in Action button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://35.90.242.205/openemr/"
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
            <a href="https://35.90.242.205/openemr/" target="_blank" rel="noreferrer">
              <img
                src="/assets/openemr/schedular.jpeg"
                alt="Scheduler"
                className="max-h-[350px] w-auto object-contain drop-shadow"
              />
            </a>
          </div>
          <div className="md:col-span-6 text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-4xl font-normal text-gray-800 leading-tight">
              Feel the power of OpenEMR Pro with Scheduler
            </h1>
            <h5 className="text-base text-gray-600 font-light leading-relaxed">
              OpenEMR Pro Scheduler provides instant access to your patient appointments along with an intuitive user interface.
            </h5>
            <div className="pt-4 flex justify-center md:justify-start">
              <a
                href="https://35.90.242.205/openemr/"
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

      {/* Highlights Section */}
      <section className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3a3f4b]">
              Highlights of OpenEMR Scheduler
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-base text-gray-700">
                  <FiChevronRight className="text-[#f16d05] text-xl shrink-0 mt-0.5" />
                  <span>Eliminate the tangle of identifying your appointments with OpenEMR Scheduler.</span>
                </li>
                <li className="flex items-start space-x-3 text-base text-gray-700">
                  <FiChevronRight className="text-[#f16d05] text-xl shrink-0 mt-0.5" />
                  <span>Helps you organize your daily, weekly and monthly appointments.</span>
                </li>
                <li className="flex items-start space-x-3 text-base text-gray-700">
                  <FiChevronRight className="text-[#f16d05] text-xl shrink-0 mt-0.5" />
                  <span>Track the provider availability with OpenEMR Scheduler.</span>
                </li>
                <li className="flex items-start space-x-3 text-base text-gray-700">
                  <FiChevronRight className="text-[#f16d05] text-xl shrink-0 mt-0.5" />
                  <span>Distinguish all your appointments into categories with custom color codes.</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/openemr/openemr_scheduler.png"
                alt="OpenEMR Scheduler Highlights"
                className="max-h-80 w-auto object-contain rounded border border-gray-200 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Automatic Reminders Configuration Section */}
      <section className="py-14 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3a3f4b]">
              How to configure automatic reminders in OpenEMR?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 text-base text-gray-700">
                  <FiChevronRight className="text-[#f16d05] text-xl shrink-0 mt-0.5" />
                  <span>Navigate to Administration &rarr; Globals &rarr; Notifications</span>
                </li>
                <li className="space-y-2">
                  <div className="flex items-start space-x-3 text-base text-gray-700">
                    <FiChevronRight className="text-[#f16d05] text-xl shrink-0 mt-0.5" />
                    <span>Adjust the configuration as appropriate for your setup.</span>
                  </div>
                  <div className="pl-9 space-y-1 text-sm text-gray-600">
                    <p>SMTP Server Hostname - email outgoing server host/ip.</p>
                    <p>SMTP Server Port Number</p>
                    <p>SMTP User for Authentication - outgoing server user</p>
                    <p>SMTP Password for Authentication - outgoing server password</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3 text-base text-gray-700">
                  <FiChevronRight className="text-[#f16d05] text-xl shrink-0 mt-0.5" />
                  <span>Create notification based on your requirement.</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/openemr/reminder.png"
                alt="Automatic Reminders Configuration"
                className="max-h-80 w-auto object-contain rounded border border-gray-200 shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Scheduler;

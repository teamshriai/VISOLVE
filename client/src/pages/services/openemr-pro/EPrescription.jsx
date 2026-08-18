import React from "react";
import OpenEMRSubNav from "../../../components/ui/OpenEMRSubNav";

function EPrescription() {
  return (
    <div className="w-full bg-white font-sans text-gray-700">
      {/* OpenEMR Section Sub-Navigation */}
      <OpenEMRSubNav activeLabel="e-Prescription" />
      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 flex justify-center">
            <img
              src="/assets/openemr/calendar-banner.png"
              alt="e-Prescription"
              className="max-h-[350px] w-auto object-contain drop-shadow"
            />
          </div>
          <div className="md:col-span-6 text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-4xl font-normal text-gray-800 leading-tight">
              Feel the power of OpenEMR with e-Prescription
            </h1>
            <h5 className="text-base text-gray-600 font-light">
              Most connected network in healthcare to support your practice and patients.
            </h5>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#3a3f4b]">
            ViSolve e-Prescription : The best way to prescribe
          </h3>
          <p className="text-sm md:text-base font-bold text-gray-700 max-w-3xl mx-auto">
            Go Paperless with Visolve's fast & flexible e-prescription platform. Save Time, Money & Resources.
          </p>
        </div>
      </section>

      {/* How e-Prescription works in OpenEMR Pro? */}
      <section className="py-14 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#3a3f4b] text-center">
            How e-Prescription works in OpenEMR Pro?
          </h3>

          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#f16d05] text-white font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h4 className="text-xl font-bold text-gray-800">Download & Register</h4>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Create an account in e-Prescription service gateway ( Weno /NewCrop /Allscripts )
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Register{" "}
                <a
                  href="https://openemrpro.visolve.com/user-registration/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#f16d05] font-semibold hover:underline"
                >
                  here
                </a>{" "}
                in OpenEMR Pro as a service provider for demo registration.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Login to OpenEMR Pro with registered credentials.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/assets/openemr/registration.png" alt="Download & Register" className="max-h-72 w-auto object-contain rounded border border-gray-200 shadow-sm" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img src="/assets/openemr/p3.png" alt="Enabling Connector" className="max-h-72 w-auto object-contain rounded border border-gray-200 shadow-sm" />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#f16d05] text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h4 className="text-xl font-bold text-gray-800">Enabling Connector for e-Prescription</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                To enable e-Prescription select: Administration &rarr; Globals &rarr; Connectors &rarr; Enable e-Prescription Service (Weno /NewCrop /Allscripts).
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Enter account details such as Account ID and password.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed font-semibold">
                Next in 'Rx' Tab enable:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-1 pl-4">
                <li>Rx Enable DEA</li>
                <li>Rx Show DEA</li>
                <li>Rx Enable NPI</li>
                <li>Rx Show NPI</li>
                <li>Rx Enable State Lic</li>
                <li>Rx Show State Lic</li>
                <li>Rx NLM Drug-Drug</li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#f16d05] text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h4 className="text-xl font-bold text-gray-800">Pharmacy Settings</h4>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Import Pharmacy by: Administration &rarr; Other &rarr; Weno Management.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Select State and City to Import for Pharmacy.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/assets/openemr/p4.png" alt="Pharmacy Settings" className="max-h-72 w-auto object-contain rounded border border-gray-200 shadow-sm" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img src="/assets/openemr/p5.png" alt="Edit Prescription" className="max-h-72 w-auto object-contain rounded border border-gray-200 shadow-sm" />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#f16d05] text-white font-bold flex items-center justify-center text-sm">
                  4
                </span>
                <h4 className="text-xl font-bold text-gray-800">Edit Prescription</h4>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Create a new prescription by: Patient/Client &rarr; Patient. Select the Patient.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                In Patient summary, select Edit Prescription. Prescription list appears.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                To add new prescription, click 'Add'. Add Prescription window appears.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#f16d05] text-white font-bold flex items-center justify-center text-sm">
                  5
                </span>
                <h4 className="text-xl font-bold text-gray-800">Create Prescription</h4>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Enter the required fields and click 'save'.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/assets/openemr/p6.png" alt="Create Prescription" className="max-h-72 w-auto object-contain rounded border border-gray-200 shadow-sm" />
            </div>
          </div>

          {/* Step 6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img src="/assets/openemr/p7.png" alt="Send NewRx" className="max-h-72 w-auto object-contain rounded border border-gray-200 shadow-sm" />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#f16d05] text-white font-bold flex items-center justify-center text-sm">
                  6
                </span>
                <h4 className="text-xl font-bold text-gray-800">Send NewRx</h4>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Prescription list appears.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Check 'Send NewRx' for prescriptions to be transmitted.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Click 'Transmit Rx'.
              </p>
            </div>
          </div>

          {/* Step 7 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#f16d05] text-white font-bold flex items-center justify-center text-sm">
                  7
                </span>
                <h4 className="text-xl font-bold text-gray-800">Approve Rx</h4>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                The transmitted prescription details are listed.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Click 'Transmit Order'.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Then approve prescription order.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/assets/openemr/p8.png" alt="Approve Rx" className="max-h-72 w-auto object-contain rounded border border-gray-200 shadow-sm" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EPrescription;

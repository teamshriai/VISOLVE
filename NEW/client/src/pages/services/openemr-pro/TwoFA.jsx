import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import OpenEMRSubNav from "../../../components/ui/OpenEMRSubNav";

function TwoFA() {
  return (
    <div className="w-full bg-white font-sans text-gray-700">
      {/* OpenEMR Section Sub-Navigation */}
      <OpenEMRSubNav activeLabel="2FA" />
      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 flex justify-center">
            <img
              src="/assets/openemr/2fa-banner.png"
              alt="Two Factor Authentication"
              className="max-h-[350px] w-auto object-contain drop-shadow"
            />
          </div>
          <div className="md:col-span-6 text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-4xl font-normal text-gray-800 leading-tight">
              Apply XTRA layer of security to your Patient information with 2FA
            </h1>
            <h5 className="text-base text-gray-600 font-light flex items-center justify-center md:justify-start space-x-2 flex-wrap gap-y-2">
              <span>Use your favourite authenticator like Google App for 2FA.</span>
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

      {/* Two Factor Authentication Highlights */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-[#3a3f4b] text-center">
            Two Factor Authentication Highlights
          </h3>
          <div className="max-w-4xl mx-auto space-y-4 text-sm md:text-base text-gray-600 leading-relaxed text-justify">
            <p>
              Two-Factor Authentication (2FA) is a security feature provided to users to verify themselves with two different authentication factors. This process is done to better protect both the user's credentials and the resources that the user can access. Unlike methods that depend on Single-Factor Authentication (SFA), wherein a user is provided with only one factor - typically a password or a passcode.
            </p>
            <p>
              2FA provides a higher level of security and assurance by providing a user with a password or a passcode as well as with a second factor, usually either a security token or a biometric factor such as facial/finger print scan.
            </p>
            <p>
              OpenEMR 2FA adds an additional layer of security to the system by making it very difficult for attackers to gain access, thereby considerably reducing the risks of a potential threat that may result in leakage of patient records elsewhere. OpenEMR 2FA is also a form of Multi-Faceted Authentication (MFA) where more than one type of authentication is required to access the system.
            </p>
          </div>
        </div>
      </section>

      {/* How Two Factor Authentication works for OpenEMR? */}
      <section className="py-14 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#3a3f4b] text-center">
            How Two Factor Authentication works for OpenEMR?
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
                Download Google Authenticator on your mobile device (iOS : App Store; Android : Google Play Store)
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Login to OpenEMR Pro with registered credentials.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/assets/openemr/login.png" alt="Download & Register" className="max-h-72 w-auto object-contain rounded border border-gray-200 shadow-sm" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img src="/assets/openemr/2fa_settings.png" alt="Change Settings" className="max-h-72 w-auto object-contain rounded border border-gray-200 shadow-sm" />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#f16d05] text-white font-bold flex items-center justify-center text-sm">
                  2
                </span>
                <h4 className="text-xl font-bold text-gray-800">Change Settings</h4>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                After successful login, click the user name
              </p>
              <p className="text-sm md:text-base font-bold text-gray-800">
                Username &rarr; MFA Management
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#f16d05] text-white font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h4 className="text-xl font-bold text-gray-800">Registering Two Factor Authentication</h4>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Select "TOTP key" in the select/Add New Authentication Method.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                After the redirection, Provide the password that was used during the registration.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Either use the Google Authenticator or Authy app and scan the QR code that has been generated.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Once registered kindly logout.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/assets/openemr/2fa_qr_register.png" alt="Registering 2FA" className="max-h-72 w-auto object-contain rounded border border-gray-200 shadow-sm" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img src="/assets/openemr/2fa_validate.png" alt="Validate 2FA" className="max-h-72 w-auto object-contain rounded border border-gray-200 shadow-sm" />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#f16d05] text-white font-bold flex items-center justify-center text-sm">
                  4
                </span>
                <h4 className="text-xl font-bold text-gray-800">Validate Two Factor Authentication</h4>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Login with the registered credentials.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                TOTP verification screen appears, Enter the 6 digit PIN that you have in the Google Authenticator app.
              </p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Click on Authenticate TOTP and this will navigate to the application.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TwoFA;

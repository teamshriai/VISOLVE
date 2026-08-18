import React from "react";
import OpenEMRSubNav from "../../../components/ui/OpenEMRSubNav";

function Support() {
  return (
    <div className="w-full bg-white font-sans text-gray-700">
      {/* OpenEMR Section Sub-Navigation */}
      <OpenEMRSubNav activeLabel="Support" />

      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 flex justify-center">
            <img
              src="/assets/openemr/support.png"
              alt="Support"
              className="max-h-[350px] w-auto object-contain drop-shadow"
            />
          </div>
          <div className="md:col-span-6 text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-4xl font-normal text-gray-800 leading-tight">
              OpenEMR Pro Support
            </h1>
            <h5 className="text-base text-gray-600 font-light leading-relaxed">
              Helps you stay on the preeminent position of healthcare by bringing improved business outcomes
            </h5>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
          <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify max-w-5xl">
            As an ardent promoter of Open Source Technologies and the Ex-Chair of OpenEMR Board, ViSolve has gone a long way in contributing and supporting OpenEMR and continues to make significant technical contributions to OpenEMR especially in the following areas:
          </p>

          {/* Core Areas Bullet List */}
          <ul className="space-y-3 pl-2">
            <li className="flex items-center space-x-3 text-sm md:text-base text-gray-800 font-medium">
              <img src="/assets/openemr/icon.png" alt="icon" className="w-4 h-4 object-contain" />
              <span>OpenEMR Meaningful Use Certification</span>
            </li>
            <li className="flex items-center space-x-3 text-sm md:text-base text-gray-800 font-medium">
              <img src="/assets/openemr/icon.png" alt="icon" className="w-4 h-4 object-contain" />
              <span>OpenEMR Customization</span>
            </li>
            <li className="flex items-center space-x-3 text-sm md:text-base text-gray-800 font-medium">
              <img src="/assets/openemr/icon.png" alt="icon" className="w-4 h-4 object-contain" />
              <span>OpenEMR Hosting &amp; Support in Cloud</span>
            </li>
            <li className="flex items-center space-x-3 text-sm md:text-base text-gray-800 font-medium">
              <img src="/assets/openemr/icon.png" alt="icon" className="w-4 h-4 object-contain" />
              <span>Interoperability</span>
            </li>
          </ul>

          {/* Section 1: OpenEMR Meaningful Use Certification */}
          <div className="space-y-4 pt-4">
            <h5 className="text-lg font-bold text-[#3a3f4b]">OpenEMR Meaningful Use Certification</h5>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify max-w-5xl">
              ViSolve has enhanced/customized and demonstrated the following features to an ONC authorized Testing and Certification body and helped OpenEMR achieve Meaningful Use Stage II Certification:
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-center space-x-3 text-sm md:text-base text-gray-700">
                <img src="/assets/openemr/icon.png" alt="icon" className="w-4 h-4 object-contain" />
                <span>Audit report(s)</span>
              </li>
              <li className="flex items-center space-x-3 text-sm md:text-base text-gray-700">
                <img src="/assets/openemr/icon.png" alt="icon" className="w-4 h-4 object-contain" />
                <span>Integrity</span>
              </li>
              <li className="flex items-center space-x-3 text-sm md:text-base text-gray-700">
                <img src="/assets/openemr/icon.png" alt="icon" className="w-4 h-4 object-contain" />
                <span>Computerized provider order entry</span>
              </li>
              <li className="flex items-center space-x-3 text-sm md:text-base text-gray-700">
                <img src="/assets/openemr/icon.png" alt="icon" className="w-4 h-4 object-contain" />
                <span>Automated measure calculation and many more</span>
              </li>
            </ul>
          </div>

          {/* Section 2: OpenEMR Customization */}
          <div className="space-y-4 pt-4">
            <h5 className="text-lg font-bold text-[#3a3f4b]">OpenEMR Customization</h5>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify max-w-5xl">
              No one size fits all and ViSolve has helped several healthcare organizations achieve a user friendly EMR that best fits the specialty workflow requirements through extensive customization. This has enabled healthcare organizations with several benefits including:
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-center space-x-3 text-sm md:text-base text-gray-700">
                <img src="/assets/openemr/icon.png" alt="icon" className="w-4 h-4 object-contain" />
                <span>Reduced patient wait times</span>
              </li>
              <li className="flex items-center space-x-3 text-sm md:text-base text-gray-700">
                <img src="/assets/openemr/icon.png" alt="icon" className="w-4 h-4 object-contain" />
                <span>Reduced medical errors and duplication of patient data</span>
              </li>
              <li className="flex items-center space-x-3 text-sm md:text-base text-gray-700">
                <img src="/assets/openemr/icon.png" alt="icon" className="w-4 h-4 object-contain" />
                <span>Improved productivity of medical staff</span>
              </li>
              <li className="flex items-center space-x-3 text-sm md:text-base text-gray-700">
                <img src="/assets/openemr/icon.png" alt="icon" className="w-4 h-4 object-contain" />
                <span>Improved business outcomes</span>
              </li>
            </ul>
          </div>

          {/* Section 3: OpenEMR Hosting & Support */}
          <div className="space-y-2 pt-4">
            <h5 className="text-lg font-bold text-[#3a3f4b]">OpenEMR Hosting &amp; Support</h5>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify max-w-5xl">
              ViSolve has decades of experience working with enterprise customers providing a range of System Services [Enterprise IT]. Leveraging on this expertise, ViSolve provides services including Hosting and Support of OpenEMR in Cloud (AWS). Other services includes Migration, High Availability &amp; Disaster Recovery, Performance /Scalability and Security.
            </p>
          </div>

          {/* Section 4: Interoperability */}
          <div className="space-y-2 pt-4">
            <h5 className="text-lg font-bold text-[#3a3f4b]">Interoperability</h5>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify max-w-5xl">
              ViSolve helps healthcare organizations integrate disparate healthcare systems using customized interoperability solutions [HL7/DICOM Integration including other formats]. Interoperability benefits include improved care co-ordination and seamless data exchange between disparate systems within and across organizations.
            </p>
          </div>

          {/* Section 5: Extensive Onboarding */}
          <div className="space-y-2 pt-4">
            <h5 className="text-lg font-bold text-[#3a3f4b]">Extensive Onboarding</h5>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify max-w-5xl">
              ViSolve vehemently supports all the technological aspects of your practice through and through &amp; helps you stay in the preeminent position of healthcare. We bring in improved business outcomes by timely product enhancement recommendations. And on consensus, coherently implement the enhancements on priority without any downtime. You are always on top of the game with continued training of the same.
            </p>
          </div>

          {/* Section 6: Resources */}
          <div className="space-y-2 pt-4">
            <h5 className="text-lg font-bold text-[#3a3f4b]">Resources</h5>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify max-w-5xl">
              With your business partnership with ViSolve, you will never be in the dark when it comes to advancement of technology. Being a precursor in OpenEMR Pro contribution, we provide exhaustive resources that help your practice champion the healthcare ecosystem. From performance analytics to debugging minor issues, we do all the heavy-lifting.
            </p>
          </div>

          {/* Section 7: Availability */}
          <div className="space-y-2 pt-4">
            <h5 className="text-lg font-bold text-[#3a3f4b]">Availability</h5>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify max-w-5xl">
              ViSolve also provides remote desktop 7x24 support services across time-zones while driving operational efficiency and improved business outcomes for customers. Multilevel support modes include Phone, Email, Skype, Online Ticketing, Online chat etc. We're always by your side in every twist of your healthcare practice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;

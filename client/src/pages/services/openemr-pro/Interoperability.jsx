import React from "react";
import OpenEMRSubNav from "../../../components/ui/OpenEMRSubNav";

function Interoperability() {
  return (
    <div className="w-full bg-white font-sans text-gray-700">
      {/* OpenEMR Section Sub-Navigation */}
      <OpenEMRSubNav activeLabel="Interoperability" />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-16">
        {/* Section 1: Interoperability using HL7 */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-normal text-gray-800">
              Interoperability using HL7
            </h1>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify max-w-5xl">
              ViSolve helps healthcare organizations to integrate disparate healthcare systems using standard interoperability solutions [HL7/DICOM Integration including other formats]. Interoperability benefits include improved care co-ordination and seamless data exchange between disparate systems within and across organizations.
            </p>
          </div>

          <div className="text-center space-y-6 pt-4">
            <p className="text-base font-medium text-gray-700">
              Enabling Interoperability between AMC (Academic Medical Center) and affiliated Teaching Hospital
            </p>
            <div className="flex justify-center">
              <img
                src="/assets/openemr/Intero.jpg"
                alt="Enabling Interoperability between AMC and affiliated Teaching Hospital"
                className="max-w-full h-auto object-contain rounded shadow-sm border border-gray-100"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Interoperability using FHIR */}
        <section className="space-y-6 pt-6 border-t border-gray-200">
          <h1 className="text-3xl md:text-4xl font-normal text-gray-800">
            Interoperability using FHIR
          </h1>
          <div className="text-center space-y-4 py-6 bg-slate-50 rounded-lg border border-gray-100 p-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 uppercase tracking-wide">
              Contact us for FHIR API Library for your EMR
            </h3>
            <p className="text-sm text-gray-600">
              To know more,{" "}
              <a
                href="https://www.hl7.org/fhir/"
                target="_blank"
                rel="noreferrer"
                className="text-[#f16d05] font-semibold hover:underline"
              >
                https://www.hl7.org/fhir/
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Interoperability;

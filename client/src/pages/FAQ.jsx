import React, { useState } from "react";
import { Link } from "react-router-dom";

const commonFaqImg = "/assets/images/content_images/commonfaq.png";
const sideCallImg = "/assets/images/side_call.jpg";

const sections = [
  { id: "icd10", title: "ICD-10" },
  { id: "emrehr", title: "EMR/EHR" },
  { id: "intero", title: "Interoperability" },
  { id: "onc", title: "ONC Certification" },
  { id: "mbcc", title: "Medical Billing and Coding" },
  { id: "mu", title: "Meaningful Use" },
];

const enterpriseItLinks = [
  { title: "Migration Services", path: "/services" },
  { title: "Cloud Services", path: "/services" },
  { title: "Product/Solution QA Certification", path: "/services" },
  { title: "Database Services", path: "/services" },
  { title: "Virtualization Services", path: "/services" },
  { title: "Open Source Services", path: "/services" },
  { title: "Enterprise Security", path: "/services" },
  { title: "Web Caching", path: "/services" },
  { title: "Solutions Demo Portals", path: "/services" },
];

const healthcareItLinks = [
  { title: "OpenEMR", path: "/services/openemr" },
  { title: "Health IT Engineering", path: "/services" },
  { title: "Interoperability Services", path: "/services/interoperability" },
  { title: "Medical Billing Solutions", path: "/services/medicalbilling" },
];

function FAQ() {
  const [activeSection, setActiveSection] = useState("icd10");

  return (
    <div className="bg-white min-h-screen text-[#333333] font-sans w-full">
      {/* Banner / Header Image */}
      <div className="bg-[#f5f5f5] py-4 border-b border-gray-200 w-full">
        <div className="max-w-6xl mx-auto px-4 flex justify-center">
          <img
            src={commonFaqImg}
            alt="FAQ Header"
            className="max-h-24 object-contain w-auto max-w-full"
          />
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-[#e9ecef] py-2 border-b border-gray-300 text-sm w-full">
        <div className="max-w-6xl mx-auto px-4 text-gray-600">
          <Link to="/resources" className="hover:underline text-[#0070c0]">
            Resources
          </Link>{" "}
          &gt;&gt; <span className="text-gray-800 font-semibold">FAQ</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
          {/* Main Content Column */}
          <div className="lg:col-span-3 space-y-6 w-full">
            {/* Section Tab Buttons */}
            <div className="border-b border-gray-200 pb-2">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSection(sec.id)}
                    className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded transition-colors ${
                      activeSection === sec.id
                        ? "bg-[#ff6600] text-white"
                        : "bg-gray-100 text-[#0070c0] hover:bg-gray-200"
                    }`}
                  >
                    {sec.title}
                  </button>
                ))}
              </div>
            </div>

            {/* TAB 1: ICD-10 */}
            {activeSection === "icd10" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-[#ff6600] border-b pb-2">ICD-10</h1>

                {/* Table of Questions */}
                <ul className="list-disc pl-5 space-y-1.5 text-[#0070c0] text-sm sm:text-base">
                  <li><a href="#faq1" className="hover:underline">What is ICD-10?</a></li>
                  <li><a href="#faq2" className="hover:underline">How is ICD-10 different from ICD-9?</a></li>
                  <li><a href="#faq3" className="hover:underline">Structure of ICD-10 codes</a></li>
                  <li><a href="#faq4" className="hover:underline">Comparison of ICD-9 and ICD-10 Diagnosis Code Sets</a></li>
                  <li><a href="#faq5" className="hover:underline">Why move from ICD-9 codes to ICD-10 codes?</a></li>
                  <li><a href="#faq6" className="hover:underline">Why ICD-10 is better than ICD-9?</a></li>
                  <li><a href="#faq7" className="hover:underline">What is the impact created by ICD-10 codes?</a></li>
                  <li><a href="#faq8" className="hover:underline">Does ICD-10 coding impact the CPT codes?</a></li>
                  <li><a href="#faq9" className="hover:underline">What are ICD-10-PCS codes?</a></li>
                  <li><a href="#faq10" className="hover:underline">What are the benefits of ICD-10?</a></li>
                  <li><a href="#faq11" className="hover:underline">What is the timeline to move from ICD-9 to ICD-10?</a></li>
                  <li><a href="#faq12" className="hover:underline">What is the non-compliance penalty?</a></li>
                  <li><a href="#faq13" className="hover:underline">Where can I get my copy of ICD-10 codes online?</a></li>
                  <li><a href="#faq14" className="hover:underline">What should I do to get started?</a></li>
                </ul>

                {/* Q1 */}
                <div id="faq1" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">What is ICD-10?</h3>
                  <p className="text-sm leading-relaxed text-gray-700 mb-2">
                    ICD-10 (International Classification of Diseases) is the diagnostic coding system implemented by the World Health Organization (WHO). ICD is mainly used for epidemiological tracking of illness and injuries.
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700">
                    The ICD-10 code set has more specific codes for illness and injuries and clinical information that are in line with today’s healthcare practice. ICD-10 has two sets of codes: ICD-10-CM (Clinical Modification) and ICD-10-PCS (Procedure Coding System).
                  </p>
                </div>

                {/* Q2 */}
                <div id="faq2" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">How is ICD-10 different from ICD-9?</h3>
                  <p className="text-sm leading-relaxed text-gray-700 mb-2">
                    The ICD-10-CM codes are entirely different from the ICD-9-CM codes. The ICD-10 codes have fundamental changes in the structure and the concepts. ICD-9 codes do not convey specific information in the codes.
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700">
                    For instance, if a patient reports a cut on his/her left hand, the ICD-9 codes do not differentiate whether the wound is in the left/right hand. Later, if the patient is again diagnosed for a cut in the right hand, the same ICD-9 diagnosis code would be repeated. ICD-10 codes identify this difference of right and left, encounter information, and other vital clinical information.
                  </p>
                </div>

                {/* Q3 */}
                <div id="faq3" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">Structure of ICD-10 codes</h3>
                  <div className="bg-gray-50 p-4 border border-gray-200 rounded my-3 text-center">
                    <p className="font-mono text-sm font-bold text-[#ff6600] mb-1">Category | Detail &amp; Site | Side | Encounter</p>
                    <p className="text-xs text-gray-600">S52 . 5 2 1 A</p>
                  </div>
                  <p className="text-sm font-semibold text-gray-800 mb-1">Example: S52.521A – Torus fracture of lower end of right radius, initial encounter for closed fracture</p>
                  <p className="text-sm leading-relaxed text-gray-700">
                    In this example, first three characters (S52) is the “Category”, fourth and fifth characters (‘5’ &amp; ‘2’) represent the clinical detail and anatomic site, sixth character (‘1’) indicates the right or left side, and the seventh character (‘A’) provides the additional information such as type of encounter and so on.
                  </p>
                </div>

                {/* Q4 */}
                <div id="faq4" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-3">Comparison of ICD-9 and ICD-10 Diagnosis Code Sets</h3>
                  <div className="overflow-x-auto w-full">
                    <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm text-left">
                      <thead>
                        <tr className="bg-gray-100 font-semibold text-gray-800">
                          <th className="border border-gray-300 p-2.5">ICD-9</th>
                          <th className="border border-gray-300 p-2.5">ICD-10</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-gray-700">
                        <tr>
                          <td className="border border-gray-300 p-2.5">Approx. 13,000 codes</td>
                          <td className="border border-gray-300 p-2.5">Approx. 68,000 available codes</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2.5">3–5 characters in length</td>
                          <td className="border border-gray-300 p-2.5">3–7 characters in length</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2.5">Lack of specificity of detail</td>
                          <td className="border border-gray-300 p-2.5">Specific detail</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2.5">Lack of identifying right/left (laterality)</td>
                          <td className="border border-gray-300 p-2.5">Able to identify laterality</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2.5">First digit may be Alpha or numeric; 2–5 are numeric</td>
                          <td className="border border-gray-300 p-2.5">1st digit is Alpha; 2nd &amp; 3rd are numeric; 4–7 are alpha or numeric</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2.5">No placeholders to fill empty positions</td>
                          <td className="border border-gray-300 p-2.5">Placeholder ‘X’ fills empty character positions (4, 5, 6th positions)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Q5 */}
                <div id="faq5" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">Why move from ICD-9 codes to ICD-10 codes?</h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    ICD-9 codes were developed almost 30 years ago. These codes are now obsolete and outdated, and lack the specificity of diagnosis information required for current healthcare practice. The structure of ICD-9 codes limits the addition of new codes as most categories are full.
                  </p>
                </div>

                {/* Q6 */}
                <div id="faq6" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">Why ICD-10 is better than ICD-9?</h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    ICD-10 has five times more diagnosis codes and categories that allow a specific way of representing medical diagnosis and procedures accurately.
                  </p>
                </div>

                {/* Q7 */}
                <div id="faq7" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">What is the impact created by ICD-10 codes?</h3>
                  <p className="text-sm leading-relaxed text-gray-700 mb-2">
                    If ICD-10 codes are implemented correctly, specific codes corresponding to patient problems will improve claim settlement processes, ensuring error-free claims.
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700">
                    ICD-10 codes must be implemented by healthcare vendors, payers, providers, and regulatory agencies currently utilizing ICD-9 codes.
                  </p>
                </div>

                {/* Q8 */}
                <div id="faq8" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">Does ICD-10 coding impact the CPT codes?</h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    <strong>No.</strong> The ICD-10 codes will not affect the Current Procedural Terminology (CPT) codes used for outpatient procedures. ICD-10 codes are applicable for hospital inpatient procedures.
                  </p>
                </div>

                {/* Q9 */}
                <div id="faq9" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">What are ICD-10-PCS codes?</h3>
                  <p className="text-sm leading-relaxed text-gray-700 mb-2">
                    ICD-10-PCS (Procedure Coding System), designed by 3M Health Information Management for Centers for Medicare &amp; Medicaid Services, replaces Volume 3 of ICD-9-CM for inpatient procedure reporting with approx. 71,000 seven-character alphanumeric codes.
                  </p>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-700 space-y-1 mb-2">
                    <li>1st digit — Name of the section</li>
                    <li>2nd digit — Body System</li>
                    <li>3rd digit — Root Operation</li>
                    <li>4th digit — Body Part</li>
                    <li>5th digit — Approach</li>
                    <li>6th digit — Device</li>
                    <li>7th digit — Qualifier</li>
                  </ul>
                  <p className="text-sm text-gray-700">
                    Example for knee joint replacement (0SRC0JZ): 0 = Medical/Surgical, S = Lower Joint, R = Replacement, C = Knee Joint Right, 0 = Open, J = Synthetic Substitute, Z = No Qualifier.
                  </p>
                  <p className="text-sm text-[#0070c0] mt-2">
                    For details:{" "}
                    <a
                      href="https://www.cms.gov/ICD10"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline break-all"
                    >
                      https://www.cms.gov/ICD10
                    </a>
                  </p>
                </div>

                {/* Q10 */}
                <div id="faq10" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">What are the benefits of ICD-10?</h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    Moving to ICD-10 speeds up medical reimbursement processes, reduces payment errors, and enhances the overall quality of care offered to patients.
                  </p>
                </div>

                {/* Q11 */}
                <div id="faq11" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">What is the timeline to move from ICD-9 to ICD-10?</h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    The Department of Health &amp; Human Services (HHS) published final rules mandating the replacement of ICD-9 code sets with ICD-10-CM and ICD-10-PCS code sets with final compliance dates established by federal guidelines.
                  </p>
                </div>

                {/* Q12 */}
                <div id="faq12" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">What is the non-compliance penalty?</h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    HHS enforces penalties for non-compliance. Organizations are subject to fines of $1 per covered life per day for non-compliance with certification requirements, doubling for incomplete or inaccurate information.
                  </p>
                </div>

                {/* Q13 */}
                <div id="faq13" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">Where can I get my copy of ICD-10 codes online?</h3>
                  <p className="text-sm text-gray-700 mb-1">You can find ICD-10-CM and ICD-10-PCS code sets on the CMS website:</p>
                  <p className="text-sm text-[#0070c0]">
                    <a
                      href="https://www.cms.gov/ICD10"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline break-all"
                    >
                      https://www.cms.gov/ICD10
                    </a>
                  </p>
                </div>

                {/* Q14 */}
                <div id="faq14" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">What should I do to get started?</h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    The first step towards ICD-10 compliance is carrying out an “ICD-10 Assessment, Impact Analysis, and Planning”. ViSolve Healthcare IT can assist you throughout the compliance process. Contact our consultants at +1 408 666 4320 or email us at{" "}
                    <a href="mailto:services@visolve.com" className="text-[#0070c0] hover:underline">
                      services@visolve.com
                    </a>.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: EMR/EHR */}
            {activeSection === "emrehr" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-[#ff6600] border-b pb-2">EMR/EHR</h1>
                <ul className="list-disc pl-5 space-y-1.5 text-[#0070c0] text-sm sm:text-base">
                  <li><a href="#emrehr1" className="hover:underline">What is the difference between EMR and EHR?</a></li>
                </ul>

                <div id="emrehr1" className="pt-4 border-t border-gray-200 space-y-3">
                  <h3 className="text-base font-bold text-gray-900">What is the difference between EMR and EHR?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    EMR and EHR are two terms used interchangeably. While both represent electronic medical documentation, key structural differences exist:
                  </p>

                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">What is an EMR?</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Electronic Medical Record is a digital repository of patient charts replacing paper charts in one practice.</li>
                      <li>Contains medical and treatment history used to schedule appointments, monitor vitals, and improve care within the practice.</li>
                      <li>Information usually remains within the individual practice.</li>
                    </ul>
                  </div>

                  <div className="space-y-2 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">What is an EHR?</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Electronic Health Record includes detailed long-term and aggregate health information (demographics, progress notes, labs, allergies).</li>
                      <li>Can securely share patient information across hospitals, insurance companies, labs, and disparate practices.</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded border border-gray-200 text-sm text-gray-800">
                    <span className="font-bold">Key Difference:</span> EHR contains broader patient information that can travel across care facilities, whereas EMR is typically restricted to a single practice.
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Interoperability */}
            {activeSection === "intero" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-[#ff6600] border-b pb-2">Interoperability</h1>
                <ul className="list-disc pl-5 space-y-1.5 text-[#0070c0] text-sm sm:text-base">
                  <li><a href="#intero1" className="hover:underline">What is the difference between unidirectional and bidirectional integration with a lab?</a></li>
                  <li><a href="#intero2" className="hover:underline">What is Opt-in Opt-Out HIE?</a></li>
                </ul>

                <div id="intero1" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">What is the difference between unidirectional and bidirectional integration with a lab?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    In a physician practice or hospital, the EMR/EHR integrates with laboratories to transmit electronic lab requests and responses.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    If only one interface (request OR response) is connected, it is <strong>unidirectional</strong>. In <strong>bidirectional</strong> integration, both HL7 lab requests and HL7 lab responses are electronically integrated into the EHR.
                  </p>
                </div>

                <div id="intero2" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">What is Opt-in Opt-Out HIE?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    These are two primary models for patient consent regarding personal health information exchange through Health Information Exchange (HIE) networks:
                  </p>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li><strong>Opt-in:</strong> Requires explicit authorization/signing a standardized consent form before patient health data can be exchanged.</li>
                    <li><strong>Opt-out:</strong> Patient health information is shared by default unless the patient formally raises an objection/opts out.</li>
                  </ul>
                </div>
              </div>
            )}

            {/* TAB 4: ONC Certification */}
            {activeSection === "onc" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-[#ff6600] border-b pb-2">ONC Certification</h1>
                <ul className="list-disc pl-5 space-y-1.5 text-[#0070c0] text-sm sm:text-base">
                  <li><a href="#onc1" className="hover:underline">What is ONC-ATCB?</a></li>
                  <li><a href="#onc2" className="hover:underline">What is the difference between modular certified EHR and complete EHR?</a></li>
                  <li><a href="#onc3" className="hover:underline">Do third party modules require certification when added to a modular EHR?</a></li>
                  <li><a href="#onc4" className="hover:underline">Do ONC-ATCB certified products undergo re-certification for each release?</a></li>
                </ul>

                <div id="onc1" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">What is ONC-ATCB?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ONC-Authorized Testing and Certification Bodies are designated entities authorized by the Office of the National Coordinator (ONC) to perform testing and issue certifications for EHR modules and Complete EHR systems.
                  </p>
                </div>

                <div id="onc2" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">What is the difference between modular certified EHR and complete EHR?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    A <strong>Modular Certified EHR</strong> satisfies privacy/security standards and a subset of meaningful use criteria chosen by the vendor, whereas a <strong>Complete EHR</strong> meets all mandatory meaningful use criteria in full.
                  </p>
                </div>

                <div id="onc3" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">Do third party modules require certification when added to a modular EHR?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Yes.</strong> If third-party software (such as e-prescribing tools) is added to meet specific meaningful use objectives, that module must also be ONC certified.
                  </p>
                </div>

                <div id="onc4" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">Do ONC-ATCB certified products undergo re-certification for each release?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Minor product changes unlikely to affect compliance do not require retesting (though self-attestation is required). Modifications with significant impact on compliance require retesting.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 5: Medical Billing and Coding */}
            {activeSection === "mbcc" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-[#ff6600] border-b pb-2">Medical Billing and Coding</h1>
                <ul className="list-disc pl-5 space-y-1.5 text-[#0070c0] text-sm sm:text-base">
                  <li><a href="#mb1" className="hover:underline">Is there a limit on the number of CPT codes per bill?</a></li>
                  <li><a href="#mb2" className="hover:underline">What is a CPT modifier?</a></li>
                  <li><a href="#mb3" className="hover:underline">Where are modifiers shown in CMS 1500 and X12 forms?</a></li>
                  <li><a href="#mb4" className="hover:underline">What are Multiple modifiers?</a></li>
                  <li><a href="#mb5" className="hover:underline">What is the maximum number of modifiers allowed?</a></li>
                </ul>

                <div id="mb1" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">Is there a limit on the number of CPT codes per bill?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Yes.</strong> CMS 1500 forms accept up to six CPT codes for medical reimbursement claims submitted to insurance payers.
                  </p>
                </div>

                <div id="mb2" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">What is a CPT modifier?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    A modifier is a 2-digit code added to a CPT code to indicate that a service or procedure was altered by specific circumstances without changing its basic definition.
                  </p>
                </div>

                <div id="mb3" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">Where are modifiers shown in CMS 1500 and X12 forms?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    In CMS 1500 forms, modifiers belong in field 24d. In X12 electronic transactions, Loop 2400:SV101 populates modifier data.
                  </p>
                </div>

                <div id="mb4" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">What are Multiple modifiers?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    When two or more modifiers apply to a procedure, Modifier 99 is appended to the main procedure code and individual modifiers are listed in 24d on CMS forms.
                  </p>
                </div>

                <div id="mb5" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">What is the maximum number of modifiers allowed?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    A maximum of four modifiers can be attached per CPT code on CMS forms. X12 formats allow four modifiers separated by colon delimiters.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 6: Meaningful Use */}
            {activeSection === "mu" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-[#ff6600] border-b pb-2">Meaningful Use</h1>
                <ul className="list-disc pl-5 space-y-1.5 text-[#0070c0] text-sm sm:text-base">
                  <li><a href="#mu1" className="hover:underline">What is Meaningful Use?</a></li>
                  <li><a href="#mu2" className="hover:underline">Why Meaningful Use?</a></li>
                  <li><a href="#mu3" className="hover:underline">What happens if I do not get my EHR attested?</a></li>
                  <li><a href="#mu4" className="hover:underline">What is Medicare and Medicaid?</a></li>
                  <li><a href="#mu5" className="hover:underline">How many criteria must be met for MU Stage 1 Certification?</a></li>
                  <li><a href="#mu6" className="hover:underline">Who are Eligible Professionals and Eligible Hospitals?</a></li>
                  <li><a href="#mu7" className="hover:underline">What is Transition of Care?</a></li>
                </ul>

                <div id="mu1" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">What is Meaningful Use?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Meaningful Use (MU) is a set of standards defined by CMS under the HITECH Act to encourage healthcare providers to demonstrate certified Electronic Health Record usage in exchange for federal incentive payments.
                  </p>
                </div>

                <div id="mu2" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">Why Meaningful Use?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    MU improves patient safety, clinical quality, efficiency of health records, care coordination, and public health tracking.
                  </p>
                </div>

                <div id="mu3" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">What happens if I do not get my EHR attested?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Failing to demonstrate meaningful use results in forfeiture of financial incentives and subjects providers to Medicare payment reduction penalties.
                  </p>
                </div>

                <div id="mu4" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">What is Medicare and Medicaid?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    <strong>Medicare:</strong> Federal insurance program for patients 65+ and eligible disabled individuals.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Medicaid:</strong> Joint state/federal assistance program serving low-income patients of any age.
                  </p>
                </div>

                <div id="mu5" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">How many criteria must be met for MU Stage 1 Certification?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Eligible Professionals (EPs) must complete 15 Core Objectives, 5 Menu Set Objectives, and 6 Clinical Quality Measures (CQMs). Eligible Hospitals must complete 14 Core Objectives, 5 Menu Objectives, and 15 CQMs.
                  </p>
                </div>

                <div id="mu6" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">Who are Eligible Professionals and Eligible Hospitals?</h3>
                  <div className="overflow-x-auto w-full my-2">
                    <table className="w-full border border-gray-300 text-xs sm:text-sm text-left">
                      <thead>
                        <tr className="bg-gray-100 font-semibold text-gray-800">
                          <th className="border border-gray-300 p-2">Eligible Professionals (EPs)</th>
                          <th className="border border-gray-300 p-2">Eligible Hospitals (EHs)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-gray-700">
                        <tr>
                          <td className="border border-gray-300 p-2">
                            MD, DO, DPM, Chiropractor, Oral Surgeon, Dentist, Optometrist, PA, NP, Clinical Nurse Specialist
                          </td>
                          <td className="border border-gray-300 p-2">
                            Acute care hospitals, Critical Access Hospitals (CAHs), Medicare Advantage Hospitals
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div id="mu7" className="pt-4 border-t border-gray-200">
                  <h3 className="text-base font-bold text-gray-900 mb-2">What is Transition of Care?</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Transition of Care refers to moving a patient from one care setting (e.g., hospital, primary care, home health) to another, requiring a summary care record transfer.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-1 space-y-6 w-full">
            {/* Enterprise IT */}
            <div className="bg-[#f9f9f9] p-4 rounded border border-gray-200">
              <h3 className="font-bold text-gray-800 text-base mb-2 border-b pb-1">
                Enterprise IT
              </h3>
              <ul className="text-sm space-y-1.5 text-[#0070c0]">
                {enterpriseItLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path} className="hover:underline block">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Healthcare IT */}
            <div className="bg-[#f9f9f9] p-4 rounded border border-gray-200">
              <h3 className="font-bold text-gray-800 text-base mb-2 border-b pb-1">
                Healthcare IT
              </h3>
              <ul className="text-sm space-y-1.5 text-[#0070c0]">
                {healthcareItLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path} className="hover:underline block">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Side Call Box */}
            <div className="bg-[#f4f7f9] p-4 rounded border border-blue-100 flex items-center space-x-3">
              <img
                src={sideCallImg}
                alt="Talk to our experts"
                className="w-10 h-10 object-contain flex-shrink-0"
              />
              <div>
                <p className="text-xs text-gray-600 font-medium">
                  Talk to our experts:
                </p>
                <p className="text-sm sm:text-base font-bold text-gray-800">
                  +1 408 666 4320
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

import React from "react";
import { FiExternalLink, FiList, FiTarget, FiHome, FiCheckSquare, FiTrendingUp, FiHeart, FiDownload } from "react-icons/fi";

function MedicalBilling() {
  const scrollToFeatures = () => {
    const el = document.getElementById("feature1");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white font-sans text-gray-700">
      {/* Floating See in Action button when scrolled */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://35.90.242.205/openemr"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-2 bg-[#f16d05] text-white font-bold py-2.5 px-4 rounded shadow-lg hover:bg-orange-600 transition-colors text-sm"
        >
          <span>See in Action</span>
          <FiExternalLink className="text-base" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="w-full bg-slate-50 border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-4xl font-normal text-gray-800 leading-tight">
              Improve your cash flow with ViSolve RCM
            </h1>
            <h5 className="text-lg text-gray-600 font-light">
              Redefine your revenue cycle with Visolve RCM
            </h5>
            <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-3">
              <a
                href="https://35.90.242.205/openemr"
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
          <div className="md:col-span-7 flex justify-center">
            <a href="https://35.90.242.205/openemr" target="_blank" rel="noreferrer" className="block max-w-full">
              <img
                src="/assets/medicalbilling/slide_openemr.png"
                alt="Medical Billing"
                className="max-h-[380px] w-auto object-contain drop-shadow-md rounded"
              />
            </a>
          </div>
        </div>
      </section>

      {/* What Makes ViSolve RCM Better? */}
      <section className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h3 className="text-3xl font-semibold text-[#3a3f4b] mb-10">
            What makes ViSolve RCM better?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Claims Scrubbing */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#f5f6f8] text-[#ff7405] text-3xl flex items-center justify-center mb-4">
                <FiTarget />
              </div>
              <h5 className="text-xl font-semibold text-[#3a3f4b] mb-2">Claims Scrubbing</h5>
              <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Automatically validate a claim and check for accuracy at ease. Every claim is cross-checked for patient &amp; policy identification and verified by payer-specific rules. Cleaner the claim higher the reimbursement.
              </p>
            </div>

            {/* Clearinghouse */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#f5f6f8] text-[#ff7405] text-3xl flex items-center justify-center mb-4">
                <FiHome />
              </div>
              <h5 className="text-xl font-semibold text-[#3a3f4b] mb-2">Clearinghouse</h5>
              <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                No more uploading claims &amp; downloading remittances. Save time with our integrated clearinghouse for flawless, all-in-one data exchange, Hassel-free.
              </p>
            </div>

            {/* ERA Processing */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#f5f6f8] text-[#ff7405] text-3xl flex items-center justify-center mb-4">
                <FiCheckSquare />
              </div>
              <h5 className="text-xl font-semibold text-[#3a3f4b] mb-2">ERA Processing</h5>
              <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Save time with automated ERA receiving &amp; posting. Use auto-generated worklists to manage denials &amp; unexpected payment amounts.
              </p>
            </div>

            {/* Analytics & Reporting */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col items-center md:col-span-1">
              <div className="w-20 h-20 rounded-full bg-[#f5f6f8] text-[#ff7405] text-3xl flex items-center justify-center mb-4">
                <FiTrendingUp />
              </div>
              <h5 className="text-xl font-semibold text-[#3a3f4b] mb-2">Analytics &amp; Reporting</h5>
              <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Medical billing provides timely, meaningful financial analytics and customized reports that help to maximize financial performance &amp; tighten the revenue cycle.
              </p>
            </div>

            {/* Insurance Eligibility */}
            <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm flex flex-col items-center md:col-span-1">
              <div className="w-20 h-20 rounded-full bg-[#f5f6f8] text-[#ff7405] text-3xl flex items-center justify-center mb-4">
                <FiHeart />
              </div>
              <h5 className="text-xl font-semibold text-[#3a3f4b] mb-2">Insurance Eligibility</h5>
              <div className="w-12 h-0.5 bg-gray-300 mb-4"></div>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Copays, coverage &amp; deductibles are auto-verified prior to each visit. On-demand verification tools lets you do on-the-spot checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore ViSolve Revenue Cycle Management */}
      <section className="py-14 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-gray-800">
              Explore ViSolve Revenue Cycle Management
            </h3>
            <h4 className="text-lg font-light text-gray-600 mt-2">
              Do more by doing less
            </h4>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h4 className="text-2xl font-bold text-gray-800">Analytics & Reporting</h4>
              <p className="text-sm font-bold text-gray-700 leading-relaxed">
                Medical Billing software provides user with timely, meaningful and actionable financial analytics & customized reports such as claim reports, copay details, Monthly / Weekly Reports etc., making healthcare management more convenient, productive and intuitive.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/medicalbilling/analytics-and-reports.png"
                alt="Analytics and Reporting"
                className="max-h-72 w-auto object-contain rounded"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img
                src="/assets/medicalbilling/ERA-processing.png"
                alt="ERA Processing"
                className="max-h-72 w-auto object-contain rounded"
              />
            </div>
            <div className="space-y-3 order-1 md:order-2">
              <h4 className="text-2xl font-bold text-gray-800">ERA Processing</h4>
              <p className="text-sm font-bold text-gray-700 leading-relaxed">
                The right billing service augmented with right technology saves you time and money. Enjoy the benefits of automated ERA (Electronic Remittance Advice) receiving & posting, and auto-generated worklists to manage denials, rejection or errors, that help you positively impact both your business and patients.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h4 className="text-2xl font-bold text-gray-800">Claim Management</h4>
              <p className="text-sm font-bold text-gray-700 leading-relaxed">
                Claim Management is an integrated platform that helps you manage the entire claims process in one location, from cost assessment to final reimbursement, without hassles. Process and manage each claim with a single centralized platform.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/medicalbilling/Claim-Management.png"
                alt="Claim Management"
                className="max-h-72 w-auto object-contain rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section id="feature1" className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          <h3 className="text-3xl font-bold text-center text-black">Features</h3>

          {/* Feature 1: Financial Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-8 border-b border-gray-100">
            <div>
              <h4 className="text-xl font-bold text-[#ff8000] mb-2">Financial Dashboard</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Easier reporting improves productivity. View at-a-glance updates of your practice's financial status with the ViSolve Billing dashboard. Filter data by payments, claims, date range & payments and claims that needed action. ViSolve Medical Billing's Financial dashboard provides a 360-degree view of your practice's financial health.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-base font-semibold text-gray-800">Payments</h5>
              <div className="flex gap-3 items-start">
                <img src="/assets/medicalbilling/billing/payment.png" alt="Payments" className="w-8 h-8 object-contain" />
                <p className="text-xs text-gray-600 leading-relaxed">
                  ViSolve's Financial dashboard provides details about submitted, paid and pending amount in a graphical report and lists payments which needed action.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="text-base font-semibold text-gray-800">Claims</h5>
              <div className="flex gap-3 items-start">
                <img src="/assets/medicalbilling/billing/claim.png" alt="Claims" className="w-8 h-8 object-contain" />
                <p className="text-xs text-gray-600 leading-relaxed">
                  Once all diagnoses and medical procedures have been made the bill is sent out to the insurance company, or payer. ViSolve's Financial dashboard provides reports on claim details in graphical form.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2: Patients */}
          <div id="feature2" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-8 border-b border-gray-100">
            <div>
              <h4 className="text-xl font-bold text-[#ff8000] mb-2">Patients</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                ViSolve Medical Billing provides a easy way to add and edit patient.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-base font-semibold text-gray-800">Create Patient</h5>
              <div className="flex gap-3 items-start">
                <img src="/assets/medicalbilling/billing/add patient.png" alt="Create Patient" className="w-8 h-8 object-contain" />
                <p className="text-xs text-gray-600 leading-relaxed">
                  ViSolve Medical Billing has a easy way to add patient details which makes the medical billing to work standalone without depending on EHR.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="text-base font-semibold text-gray-800">Update Patient</h5>
              <div className="flex gap-3 items-start">
                <img src="/assets/medicalbilling/billing/updatepatient.png" alt="Update Patient" className="w-8 h-8 object-contain" />
                <p className="text-xs text-gray-600 leading-relaxed">
                  Patient details can be edited in ViSolve Medical Billing.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3: Claim Management */}
          <div id="feature3" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-8 border-b border-gray-100">
            <div>
              <h4 className="text-xl font-bold text-[#ff8000] mb-2">Claim Management</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Efficient claim management is vital to the success of both large and small companies working within the insurance industry. Major components of the claims handling process include developing strategies to cut costs and reduce fraud while keeping customers satisfied.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h5 className="text-base font-semibold text-gray-800 mb-1">Submit Claims</h5>
                <div className="flex gap-3 items-start">
                  <img src="/assets/medicalbilling/billing/submit claim.png" alt="Submit Claims" className="w-8 h-8 object-contain" />
                  <p className="text-xs text-gray-600 leading-relaxed">
                    ViSolve Medical Billing encourages healthcare providers to submit claims and receive payments electronically in order to reduce administrative costs and improve cash flow.
                  </p>
                </div>
              </div>
              <div>
                <h5 className="text-base font-semibold text-gray-800 mb-1">Generate HCFA 1500 PDF</h5>
                <div className="flex gap-3 items-start">
                  <img src="/assets/medicalbilling/billing/hcfa.png" alt="HCFA 1500" className="w-8 h-8 object-contain" />
                  <p className="text-xs text-gray-600 leading-relaxed">
                    HCFA 1500 contains Patient demographics, diagnostic codes, CPT/HCPCS codes, diagnosis codes, units. The official standard form used by physicians and other providers when submitting bills/claims for reimbursement.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="text-base font-semibold text-gray-800">Generate X12</h5>
              <div className="flex gap-3 items-start">
                <img src="/assets/medicalbilling/billing/x121.png" alt="X12" className="w-8 h-8 object-contain" />
                <p className="text-xs text-gray-600 leading-relaxed">
                  The patient details along with claim ID, encounter details and billing amount are sent to Clearing House or insurance company and remittance details are returned after various validation.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4: Payments */}
          <div id="feature4" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-8 border-b border-gray-100">
            <div>
              <h4 className="text-xl font-bold text-[#ff8000] mb-2">Payments</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                ViSolve offer comprehensive medical billing services and hence, you can be assured of our expertise in delivering not just payment posting services, but the critical steps that pre-empt payment posting and follow that as well.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-base font-semibold text-gray-800">Payments</h5>
              <div className="flex gap-3 items-start">
                <img src="/assets/medicalbilling/billing/money.png" alt="Payments" className="w-8 h-8 object-contain" />
                <p className="text-xs text-gray-600 leading-relaxed">
                  Payments include direct patient payment and Insurance payment.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="text-base font-semibold text-gray-800">ERA Posting</h5>
              <div className="flex gap-3 items-start">
                <img src="/assets/medicalbilling/billing/era.png" alt="ERA Posting" className="w-8 h-8 object-contain" />
                <p className="text-xs text-gray-600 leading-relaxed">
                  Electronic remittance advice helps you save time by automatically posting insurance payments based on electronic reports delivered to your practice.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 5: Reports */}
          <div id="feature5" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-8 border-b border-gray-100">
            <div>
              <h4 className="text-xl font-bold text-[#ff8000] mb-2">Reports</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                ViSolve Medical Billing provides you with timely, meaningful financial analytics & customized medical billing reports that help you maximize financial performance. Reports include claim status and claim progress, patient outstanding payments and payment/collection Reports.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h5 className="text-base font-semibold text-gray-800 mb-1">Claims Status Report</h5>
                <div className="flex gap-3 items-start">
                  <img src="/assets/medicalbilling/billing/claim-status.png" alt="Claim Status" className="w-8 h-8 object-contain" />
                  <p className="text-xs text-gray-600 leading-relaxed">
                    The Claims Status Report gives a detailed account of all communications with the payer or insurance company.
                  </p>
                </div>
              </div>
              <div>
                <h5 className="text-base font-semibold text-gray-800 mb-1">Patient Payment Outstanding</h5>
                <div className="flex gap-3 items-start">
                  <img src="/assets/medicalbilling/billing/pat-payment.png" alt="Patient Payment" className="w-8 h-8 object-contain" />
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Outstanding payment could refer to a payment already made but not credited as paid for some reason.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h5 className="text-base font-semibold text-gray-800 mb-1">Claim Progress Report</h5>
                <div className="flex gap-3 items-start">
                  <img src="/assets/medicalbilling/billing/claim-progress.png" alt="Claim Progress" className="w-8 h-8 object-contain" />
                  <p className="text-xs text-gray-600 leading-relaxed">
                    ViSolve's billing provides detailed report on Claim Progress which involves claim details, clearing house response and more.
                  </p>
                </div>
              </div>
              <div>
                <h5 className="text-base font-semibold text-gray-800 mb-1">Payment/Collection Report</h5>
                <div className="flex gap-3 items-start">
                  <img src="/assets/medicalbilling/billing/payment-report.png" alt="Payment Report" className="w-8 h-8 object-contain" />
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Payment report provides a detailed report on payments collected. It includes details such as payment date, payer, payment method and amount.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 6: Administration */}
          <div id="feature6" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div>
              <h4 className="text-xl font-bold text-[#ff8000] mb-2">Administration</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Administrator reduces the possibility of claim rejection by cross-checking the claims even before the claims are forwarded to the payer or insurance company. ViSolve Medical Billing provides two types of validation such as basic and extended validation.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-base font-semibold text-gray-800">Basic Validation</h5>
              <div className="flex gap-3 items-start">
                <img src="/assets/medicalbilling/billing/b-valid.png" alt="Basic Validation" className="w-8 h-8 object-contain" />
                <p className="text-xs text-gray-600 leading-relaxed">
                  ViSolve medical billing allows biller to create a basic validation rules such as mandatory fields, maximum & minimum length of the fields and format.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="text-base font-semibold text-gray-800">Extended Validation</h5>
              <div className="flex gap-3 items-start">
                <img src="/assets/medicalbilling/billing/e-valid.png" alt="Extended Validation" className="w-8 h-8 object-contain" />
                <p className="text-xs text-gray-600 leading-relaxed">
                  Extended validation is an advanced validation which includes complex variables and variation that validates the claims on high-level which reduces the claim rejection rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Datasheet Section */}
      <section className="py-10 bg-gray-50 text-center">
        <a
          href="/assets/docs/ViSolve-Billing-Module-Datasheet.pdf"
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

export default MedicalBilling;

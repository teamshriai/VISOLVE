import React, { useState } from "react";

function SmartFHIRContents() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    phone: "",
    country: "",
    how: "",
    clinic_name: "",
    company_url: "",
    speciality: "",
    patients: "",
    provider: "",
    add_info: "",
    smart_billing: false,
    smart_patient_portal: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white font-sans text-gray-700 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-8">
        <div className="text-center space-y-3 bg-slate-50 border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
            You can now have your own secured FHIR enabled OpenEMR hosted in AWS.
          </h1>
          <p className="text-sm md:text-base text-gray-600 font-medium">
            Just submit this form and we will do the rest for you!
          </p>
        </div>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-xl p-8 text-center space-y-4 shadow">
            <h2 className="text-2xl font-bold">Registration Successful!</h2>
            <p className="text-base text-emerald-700">
              Thank you for registering with our Secure AWS Hosting service. Your credentials will be sent to your registered email.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded shadow transition-colors text-sm"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 md:p-10 space-y-8"
          >
            {/* Personal Details */}
            <div className="space-y-4">
              <h3 className="bg-[#ff8000] text-white font-bold text-base px-4 py-2 rounded">
                Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ff8000]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Designation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="designation"
                    required
                    value={formData.designation}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ff8000]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ff8000]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ff8000]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ff8000]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    How do you get to know about us?
                  </label>
                  <input
                    type="text"
                    name="how"
                    value={formData.how}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ff8000]"
                  />
                </div>
              </div>
            </div>

            {/* Business Details */}
            <div className="space-y-4">
              <h3 className="bg-[#ff8000] text-white font-bold text-base px-4 py-2 rounded">
                Business Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Clinic Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="clinic_name"
                    required
                    value={formData.clinic_name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ff8000]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Company URL
                  </label>
                  <input
                    type="text"
                    name="company_url"
                    value={formData.company_url}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ff8000]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Speciality <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="speciality"
                    required
                    value={formData.speciality}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ff8000]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    # of Patients <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="patients"
                    required
                    value={formData.patients}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ff8000]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    # of Provider <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="provider"
                    required
                    value={formData.provider}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ff8000]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Additional Information (if any)
                  </label>
                  <input
                    type="text"
                    name="add_info"
                    value={formData.add_info}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#ff8000]"
                  />
                </div>
              </div>
            </div>

            {/* Value Added Services */}
            <div className="space-y-4">
              <h3 className="bg-[#ff8000] text-white font-bold text-base px-4 py-2 rounded">
                Value Added Services
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                On registration ViSolve will be providing you with FHIR enabled OpenEMR with Secured AWS Hosting. If you like Smart Billing and patient portal, please check the options below:
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3">
                  <label className="flex items-center space-x-2 text-sm font-bold text-gray-800 cursor-pointer">
                    <input
                      type="checkbox"
                      name="smart_billing"
                      checked={formData.smart_billing}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#ff8000] focus:ring-[#ff8000] rounded"
                    />
                    <span>SMART BILLING</span>
                  </label>
                  <a
                    href="/smart-billing-contents"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#45a425] hover:bg-green-700 text-white font-bold text-xs px-2.5 py-0.5 rounded transition-colors"
                  >
                    More
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <label className="flex items-center space-x-2 text-sm font-bold text-gray-800 cursor-pointer">
                    <input
                      type="checkbox"
                      name="smart_patient_portal"
                      checked={formData.smart_patient_portal}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#ff8000] focus:ring-[#ff8000] rounded"
                    />
                    <span>SMART PATIENT PORTAL</span>
                  </label>
                  <a
                    href="/mysalutem"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#45a425] hover:bg-green-700 text-white font-bold text-xs px-2.5 py-0.5 rounded transition-colors"
                  >
                    More
                  </a>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-[#ff8000] hover:bg-orange-600 text-white font-bold py-2.5 px-10 rounded shadow-md transition-colors text-sm uppercase"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default SmartFHIRContents;

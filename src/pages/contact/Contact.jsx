import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiExternalLink,
  FiArrowRight,
  FiShield,
  FiServer,
  FiCpu,
  FiActivity
} from "react-icons/fi";
import { useReveal } from "../../hooks/useReveal";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("Fill in the details below to connect with our technical team.");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setStatusMessage("Name is required.");
      return;
    }
    if (!formData.email.trim()) {
      setStatusMessage("Enter a valid e-mail address.");
      return;
    }
    if (!formData.company.trim()) {
      setStatusMessage("Company name is required.");
      return;
    }

    setIsSubmitted(true);
    setStatusMessage("Thank you for reaching out! Our enterprise healthcare IT team will contact you shortly.");
  };

  const ref = useReveal();

  return (
    <div ref={ref} className="w-full bg-white font-sans text-gray-800 min-h-screen">
      {/* Breadcrumbs Navigation */}
      <div className="bg-[#EAF3F8]/50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-[#55758C]">
          <Link to="/" className="hover:text-[#155A8A] transition-colors">
            Home
          </Link>
          <span className="mx-2 text-gray-400">&gt;&gt;</span>
          <span className="text-[#08243F] font-semibold">Contact Us</span>
        </div>
      </div>

      {/* Hero / Introduction Header */}
      <section className="bg-white border-b border-gray-100 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="v-reveal v-stagger-1 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#FFF7ED] border border-[#FDBA74]/60 rounded-full text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <span>Let's build better healthcare technology together</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08243F] tracking-tight leading-tight">
              Contact ViSolve Enterprise Solutions
            </h1>

            <p className="text-[#55758C] text-base sm:text-lg leading-relaxed">
              Whether you need specialized OpenEMR customization, healthcare interoperability integration, cloud infrastructure migration, or custom software engineering, our technical experts are here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main 2-Column Contact Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Contact Info & Locations (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Section Header */}
              <div className="border-b border-gray-200 pb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
                  Global Offices & Contacts
                </span>
                <h2 className="text-2xl font-bold text-[#0D3557] mt-1">
                  Contact Information
                </h2>
              </div>

              {/* Direct Reach Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#EAF3F8] border border-blue-200/60 rounded-xl p-4 flex items-start space-x-3 transition-all hover:border-[#FDBA74]/60">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#2878A8]/30 flex items-center justify-center text-[#2878A8] shrink-0 text-base">
                    <FiMail />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#55758C] uppercase tracking-wider">Email Us</p>
                    <a
                      href="mailto:services@visolve.com"
                      className="text-sm font-bold text-[#08243F] hover:text-[#155A8A] transition-colors truncate block mt-0.5"
                    >
                      services@visolve.com
                    </a>
                  </div>
                </div>

                <div className="bg-[#EAF3F8] border border-blue-200/60 rounded-xl p-4 flex items-start space-x-3 transition-all hover:border-[#FDBA74]/60">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#2878A8]/30 flex items-center justify-center text-[#2878A8] shrink-0 text-base">
                    <FiPhone />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#55758C] uppercase tracking-wider">Call Us</p>
                    <a
                      href="tel:+14088502243"
                      className="text-sm font-bold text-[#08243F] hover:text-[#155A8A] transition-colors truncate block mt-0.5"
                    >
                      +1 (408) 850 2243
                    </a>
                  </div>
                </div>

                <div className="bg-[#EAF3F8] border border-blue-200/60 rounded-xl p-4 flex items-start space-x-3 transition-all hover:border-[#FDBA74]/60">
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#2878A8]/30 flex items-center justify-center text-[#2878A8] shrink-0 text-base">
                    <FiClock />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#55758C] uppercase tracking-wider">Business Hours</p>
                    <p className="text-xs font-bold text-[#08243F] mt-0.5">
                      Mon - Fri: 8:00 AM - 6:00 PM PST
                    </p>
                  </div>
                </div>
              </div>

              {/* USA Headquarters Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="p-1.5 bg-[#EAF3F8] border border-[#2878A8]/20 rounded-md text-[#155A8A]">
                        <FiMapPin className="text-base" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#155A8A]">
                        United States Headquarters
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#08243F]">ViSolve, Inc. — California</h3>
                    <p className="text-sm text-[#55758C] leading-relaxed">
                      6559 Springpath Lane<br />
                      San Jose, California - 95120, USA<br />
                      <strong className="text-[#08243F]">Tel:</strong> +1 (408) 850 2243
                    </p>
                  </div>

                  <a
                    href="https://www.google.co.uk/maps/place/6559+Springpath+Ln,+San+Jose,+CA+95120,+USA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group shrink-0 relative overflow-hidden rounded-xl border border-gray-200"
                  >
                    <img
                      src="/assets/images/ViSolve, Inc. California.jpg"
                      alt="ViSolve San Jose California Office Map"
                      className="w-36 h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="bg-white/95 text-[#08243F] text-xs font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center space-x-1">
                        <span>View Map</span>
                        <FiExternalLink className="text-[#EA580C]" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* INDIA Offshore Center Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="p-1.5 bg-[#EAF3F8] border border-[#2878A8]/20 rounded-md text-[#155A8A]">
                        <FiMapPin className="text-base" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#155A8A]">
                        India Offshore Development Center
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#08243F]">ViSolve, Inc. — Tamil Nadu</h3>
                    <p className="text-sm text-[#55758C] leading-relaxed">
                      #1, Rukmani Nagar, Ramanathapuram<br />
                      Coimbatore - 641 045, Tamil Nadu, INDIA
                    </p>
                  </div>

                  <a
                    href="https://maps.google.co.uk/maps?q=ViSolve+Inc&hl=en&sll=20.984928,82.752628&sspn=67.312806,135.263672&hq=ViSolve+Inc&t=m&z=14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group shrink-0 relative overflow-hidden rounded-xl border border-gray-200"
                  >
                    <img
                      src="/assets/images/ViSolve, Inc. California.jpg"
                      alt="ViSolve Coimbatore India Office Map"
                      className="w-36 h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="bg-white/95 text-[#08243F] text-xs font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center space-x-1">
                        <span>View Map</span>
                        <FiExternalLink className="text-[#EA580C]" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="bg-[#EAF3F8]/50 border border-blue-200/80 rounded-2xl p-6 sm:p-8 shadow-xs sticky top-8 space-y-6">
                
                {/* Form Title */}
                <div className="space-y-1 border-b border-gray-200 pb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
                    Get In Touch
                  </span>
                  <h3 className="text-xl font-bold text-[#08243F]">Send Us a Message</h3>
                  <p className={`text-xs mt-1 transition-colors ${isSubmitted ? "text-emerald-700 font-semibold flex items-center space-x-1" : "text-[#55758C]"}`}>
                    {isSubmitted && <FiCheckCircle className="text-emerald-600 text-sm shrink-0" />}
                    <span>{statusMessage}</span>
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#155A8A] uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-[#EA580C]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Sarah Jenkins"
                      className="v-input w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-[#08243F] placeholder-gray-400 focus:outline-none focus:border-[#2878A8] focus:ring-1 focus:ring-[#2878A8]/50 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#155A8A] uppercase tracking-wider mb-1.5">
                      Work Email <span className="text-[#EA580C]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. s.jenkins@healthnetwork.com"
                      className="v-input w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-[#08243F] placeholder-gray-400 focus:outline-none focus:border-[#2878A8] focus:ring-1 focus:ring-[#2878A8]/50 transition-all"
                    />
                  </div>

                  {/* Company Input */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-bold text-[#155A8A] uppercase tracking-wider mb-1.5">
                      Company / Organization <span className="text-[#EA580C]">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Regional Health Alliance"
                      className="v-input w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-[#08243F] placeholder-gray-400 focus:outline-none focus:border-[#2878A8] focus:ring-1 focus:ring-[#2878A8]/50 transition-all"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#155A8A] uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +1 (555) 234-5678"
                      className="v-input w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-[#08243F] placeholder-gray-400 focus:outline-none focus:border-[#2878A8] focus:ring-1 focus:ring-[#2878A8]/50 transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#155A8A] uppercase tracking-wider mb-1.5">
                      Message / Project Scope
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your OpenEMR, Interoperability, Cloud or Engineering requirements..."
                      className="v-input w-full bg-white border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-[#08243F] placeholder-gray-400 focus:outline-none focus:border-[#2878A8] focus:ring-1 focus:ring-[#2878A8]/50 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold py-3 px-6 rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center space-x-2 text-sm"
                  >
                    <span>Send Message</span>
                    <FiSend className="text-sm" />
                  </button>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* "How Can We Help?" Category Quick-Links */}
      <section className="bg-slate-50 border-t border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
              Enterprise Expertise
            </span>
            <h2 className="text-2xl font-bold text-[#08243F]">How Can ViSolve Help You?</h2>
            <p className="text-xs text-[#55758C]">
              Select a specialized domain to explore our enterprise solution portfolios.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/services"
              className="v-card-hover group bg-white border border-gray-200 rounded-xl p-5 hover:border-[#2878A8]/40 hover:shadow-md transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EAF3F8] border border-[#2878A8]/20 flex items-center justify-center text-[#155A8A] text-xl font-bold group-hover:scale-105 transition-transform">
                <FiServer />
              </div>
              <h3 className="font-bold text-[#08243F] group-hover:text-[#155A8A] transition-colors text-base">
                Healthcare IT Services
              </h3>
              <p className="text-xs text-[#55758C] leading-relaxed">
                EMR implementation, HL7 interoperability, lab integration, and 24x7 support.
              </p>
              <div className="flex items-center space-x-1 text-xs font-semibold text-[#155A8A] group-hover:text-[#08243F] transition-colors pt-1">
                <span>Explore Services</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/services/opensource"
              className="v-card-hover group bg-white border border-gray-200 rounded-xl p-5 hover:border-[#2878A8]/40 hover:shadow-md transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EAF3F8] border border-[#2878A8]/20 flex items-center justify-center text-[#0D3557] text-xl font-bold group-hover:scale-105 transition-transform">
                <FiShield />
              </div>
              <h3 className="font-bold text-[#08243F] group-hover:text-[#0D3557] transition-colors text-base">
                OpenEMR Solutions
              </h3>
              <p className="text-xs text-[#55758C] leading-relaxed">
                OpenEMR customization, clinical workflows, ONC certification, and portal engineering.
              </p>
              <div className="flex items-center space-x-1 text-xs font-semibold text-[#0D3557] group-hover:text-[#08243F] transition-colors pt-1">
                <span>OpenEMR Expertise</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/services/qa-certification"
              className="v-card-hover group bg-white border border-gray-200 rounded-xl p-5 hover:border-[#2878A8]/40 hover:shadow-md transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EAF3F8] border border-[#2878A8]/20 flex items-center justify-center text-[#2878A8] text-xl font-bold group-hover:scale-105 transition-transform">
                <FiActivity />
              </div>
              <h3 className="font-bold text-[#08243F] group-hover:text-[#2878A8] transition-colors text-base">
                Software Engineering
              </h3>
              <p className="text-xs text-[#55758C] leading-relaxed">
                Custom web & mobile app engineering, QA automation, performance tuning, and cloud hosting.
              </p>
              <div className="flex items-center space-x-1 text-xs font-semibold text-[#2878A8] transition-colors pt-1">
                <span>Co-Engineering</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <a
              href="https://visolve.com/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="v-card-hover group bg-white border border-gray-200 rounded-xl p-5 hover:border-amber-200 hover:shadow-md transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[#FFF7ED] border border-[#FDBA74]/50 flex items-center justify-center text-[#F97316] text-xl font-bold group-hover:scale-105 transition-transform">
                <FiCpu />
              </div>
              <h3 className="font-bold text-[#08243F] group-hover:text-[#EA580C] transition-colors text-base">
                Healthcare AI
              </h3>
              <p className="text-xs text-[#55758C] leading-relaxed">
                Explore OncoTraceAI and our healthcare AI portfolio applications and research.
              </p>
              <div className="flex items-center space-x-1 text-xs font-semibold text-[#F97316] group-hover:text-[#EA580C] transition-colors pt-1">
                <span>AI Portfolio</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Strategic Contact CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-[#08243F] text-white rounded-2xl p-8 md:p-12 text-center space-y-4 shadow-lg">
            <span className="inline-block px-3 py-1 bg-blue-900/60 border border-blue-700/50 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FDBA74]">
              Start A Conversation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto">
              Have a Healthcare Technology Challenge?
            </h2>
            <p className="text-[#EAF3F8] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Let's discuss how ViSolve can help your organization achieve high-performance, compliant, and scalable healthcare IT infrastructure.
            </p>
            <div className="pt-3 flex justify-center">
              <a
                href="mailto:services@visolve.com"
                className="px-7 py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center space-x-2 text-sm sm:text-base"
              >
                <FiMail className="text-base" />
                <span>Schedule a Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

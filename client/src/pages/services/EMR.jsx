import React from "react";
import { Link } from "react-router-dom";

export default function EMR() {
    return (
        <div className="min-h-screen bg-white text-gray-700 font-sans">
            {/* Breadcrumb */}
            <div className="bg-gray-100 border-b border-gray-200 py-3">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-gray-600">
                    <Link to="/services" className="hover:text-[#f16d05]">Services</Link>
                    <span className="mx-2">&gt;&gt;</span>
                    <span className="text-gray-600">Healthcare IT</span>
                    <span className="mx-2">&gt;&gt;</span>
                    <span className="text-gray-800 font-medium">Healthcare IT Engineering &amp; EMR ROI</span>
                </div>
            </div>

            {/* Header Banner */}
            <section className="bg-[#0B2A4A] text-white py-10">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-3xl md:text-4xl font-bold">Healthcare IT Engineering &amp; EMR Solutions</h1>
                    <p className="text-blue-100 mt-2 text-base md:text-lg">
                        Custom EMR Development, Meaningful Use Consulting, Medical Device Connectivity &amp; ROI Analysis
                    </p>
                </div>
            </section>

            {/* Page Content */}
            <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-8 space-y-10">
                        {/* Section 1: Healthcare IT Engineering */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-[#0B2A4A]">
                                Healthcare IT Engineering Services
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                Are you looking for a synergistic partner to outsource just a few applications or your whole IT operations to eliminate the need for an in-house IT staff, mitigate rising costs and to meet the growing demand for quality care? ViSolve has extensive experience working with clients as an extension of their own engineering teams on open-source-based leading-edge technologies for developing, co-engineering, and customizing solutions for <Link to="/services/openemr" className="text-blue-600 underline font-medium">EMRs</Link>, Medical Device Connectivity, Interoperability, and Managed IT.
                            </p>

                            <div className="bg-slate-50 border border-gray-200 rounded-lg p-6 space-y-4">
                                <h3 className="text-lg font-bold text-gray-800">Our Health IT Engineering Services Include:</h3>
                                <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-gray-700">
                                    <li>
                                        <strong>Product Development:</strong> End-to-end development of new healthcare applications ranging from Requirement Analysis, Architecture &amp; Design, Implementation, Quality Assurance, to User Acceptance Testing.
                                    </li>
                                    <li>
                                        <strong>Application Customization:</strong> Customizing healthcare applications to fit specific clinical workflows is one of our key core strengths.
                                    </li>
                                    <li>
                                        <strong>Meaningful Use Consulting:</strong> Helping EMR/EHR vendors achieve Meaningful Use compliance leading to ONC Certification.
                                    </li>
                                    <li>
                                        <strong>Migration Services:</strong> Migrating legacy healthcare systems to modern web/cloud platforms and cloud infrastructures.
                                    </li>
                                    <li>
                                        <strong>Training &amp; 24x7 Support:</strong> Remote desktop and operational support for clinical staff and IT teams.
                                    </li>
                                </ul>
                            </div>

                            {/* Healthcare IT Engineering Diagram */}
                            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50 text-center">
                                <h4 className="font-bold text-[#0B2A4A] mb-3 text-left text-base">Healthcare IT Engineering Framework</h4>
                                <img
                                    src="/assets/images/Healthcare-IT-Engineering.png"
                                    alt="Health IT Engineering Diagram"
                                    className="max-w-full h-auto mx-auto rounded shadow-sm"
                                />
                            </div>

                            <div className="space-y-3 border-t border-gray-200 pt-6">
                                <h3 className="text-xl font-bold text-[#0B2A4A]">Why Partner with ViSolve for Healthcare IT Co-Engineering?</h3>
                                <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-gray-700">
                                    <li>More than 15 years of strategic relationships with leading healthcare system vendors and organizations.</li>
                                    <li>As an extension of your R&amp;D IT team, we deliver high-quality results on time and within budget.</li>
                                    <li>No generic 'one-size-fits-all' approach — customization is our primary differentiator.</li>
                                    <li>Flexible contractual models avoiding vendor lock-in.</li>
                                    <li>Key advocates and active technical contributors to open source healthcare communities (OpenEMR, OSEHRA, GT.M/MUMPS, PostgreSQL, Hadoop, Mongo DB).</li>
                                    <li>Competitive SLAs, lower development overhead, and reduced time-to-market.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 2: EMR Return on Investment (ROI) */}
                        <section className="space-y-6 border-t border-gray-200 pt-10">
                            <h2 className="text-2xl font-bold text-[#0B2A4A]">
                                EMR Return on Investment (ROI) Analysis
                            </h2>

                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                Implementing an EMR for your practice is a wise choice or at least satisfies federal mandates. But do you know what it costs to adopt an EMR for your practice? Implementing one can be a major investment for most medical practices.
                            </p>

                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                To get an idea of the return on investment, sample ROI cost-benefit analyses for client-server proprietary EMRs versus open-source hosted OpenEMR are provided below:
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                        Cost-Benefit Analysis: Single Provider Office using Client-Server Proprietary EMR
                                    </h3>
                                    <div className="border border-gray-200 rounded-lg p-2 bg-slate-50">
                                        <img
                                            src="/assets/images/EMR ROI.png"
                                            alt="Proprietary EMR Return on Investment (ROI)"
                                            className="w-full max-w-[685px] h-auto mx-auto"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                        Cost-Benefit Analysis: Single Provider Office using Web-Based OpenEMR
                                    </h3>
                                    <div className="border border-gray-200 rounded-lg p-2 bg-slate-50">
                                        <img
                                            src="/assets/images/OpenEMR ROI.png"
                                            alt="OpenEMR Return on Investment (ROI)"
                                            className="w-full max-w-[685px] h-auto mx-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Contact Callout */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <p className="text-gray-800 text-sm md:text-base">
                                To know more about our Healthcare IT engineering services and ROI estimates, please contact us by email at{' '}
                                <a href="mailto:services@visolve.com" className="text-blue-600 font-semibold underline">
                                    services@visolve.com
                                </a>{' '}
                                or call us at{' '}
                                <a href="tel:+14086664320" className="text-blue-600 font-semibold underline">
                                    +1 408 666 4320
                                </a>.
                            </p>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="md:col-span-4 space-y-6">
                        <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg space-y-4 shadow-sm">
                            <h4 className="font-bold text-[#0B2A4A] uppercase tracking-wider text-sm border-b pb-2">
                                Healthcare IT Services
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li><Link to="/services/openemr" className="hover:text-[#f16d05]">OpenEMR Customization</Link></li>
                                <li><Link to="/services/emr" className="font-bold text-[#f16d05]">Health IT Engineering &amp; ROI</Link></li>
                                <li><Link to="/services/interoperability" className="hover:text-[#f16d05]">Interoperability Services</Link></li>
                                <li><Link to="/services/medicalbilling" className="hover:text-[#f16d05]">Medical Billing Solutions</Link></li>
                                <li><Link to="/smart-aws-contents" className="hover:text-[#f16d05]">Cloud Hosting</Link></li>
                                <li><Link to="/services/openemr-pro/support" className="hover:text-[#f16d05]">Support</Link></li>
                                <li><Link to="/services/openemr-pro/meaningfuluse" className="hover:text-[#f16d05]">Meaningful Use Objective</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
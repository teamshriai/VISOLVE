import React from "react";
import { Link } from "react-router-dom";

export default function VistaEHR() {
    return (
        <div className="min-h-screen bg-white text-gray-700 font-sans">
            {/* Breadcrumb */}
            <div className="bg-gray-100 border-b border-gray-200 py-3">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-gray-600">
                    <Link to="/services" className="hover:text-[#f16d05]">Services</Link>
                    <span className="mx-2">&gt;&gt;</span>
                    <span className="text-gray-600">Healthcare IT</span>
                    <span className="mx-2">&gt;&gt;</span>
                    <span className="text-gray-800 font-medium">VistA EHR Solutions</span>
                </div>
            </div>

            {/* Header Banner */}
            <section className="bg-[#0B2A4A] text-white py-10">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-3xl md:text-4xl font-bold">VistA EHR Customization &amp; Integration</h1>
                    <p className="text-blue-100 mt-2 text-base md:text-lg">
                        Open-Source Enterprise Electronic Health Record Solutions for Hospitals &amp; Large Healthcare Systems
                    </p>
                </div>
            </section>

            {/* Page Content */}
            <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-8 space-y-8">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#215B87]">
                                Open-Source VistA EHR Services
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                ViSolve Healthcare IT is committed to serving hospitals, physician practices, laboratories, and imaging centers by providing vendor-neutral open-source solutions. As an active technical contributor to OSEHRA (Open Source Electronic Health Record Alliance) and the MUMPS/GT.M ecosystem, ViSolve delivers specialized customization, cloud hosting, and integration services for VistA EHR.
                            </p>
                        </section>

                        <section className="space-y-4 border-t border-gray-200 pt-6">
                            <h3 className="text-xl font-bold text-[#215B87]">
                                Core VistA Capabilities &amp; Services
                            </h3>
                            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-gray-700">
                                <li>
                                    <strong>VistA Customization &amp; Module Development:</strong> Tailoring clinical workflows, CPRS interface modules, and specialty EHR templates.
                                </li>
                                <li>
                                    <strong>GT.M / MUMPS Database Support:</strong> High-availability database administration, performance tuning, and data migration for enterprise VistA deployments.
                                </li>
                                <li>
                                    <strong>VistA Cloud Hosting (AWS &amp; Private Cloud):</strong> Secure, HIPAA-compliant cloud hosting architecture optimized for high concurrency.
                                </li>
                                <li>
                                    <strong>Interoperability &amp; HL7 Integration:</strong> Bi-directional interfacing between VistA, commercial EMRs, laboratory information systems (LIS), and PACS/DICOM radiology engines.
                                </li>
                            </ul>
                        </section>

                        {/* Diagrams Section */}
                        <section className="space-y-6 pt-4">
                            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50 text-center">
                                <h4 className="font-bold text-[#215B87] mb-3 text-left text-base">VistA Cloud Architecture</h4>
                                <img
                                    src="/assets/images/Vista-In-Cloud.png"
                                    alt="VistA in Cloud Architecture"
                                    className="max-w-full h-auto mx-auto rounded shadow-sm"
                                />
                            </div>

                            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50 text-center">
                                <h4 className="font-bold text-[#215B87] mb-3 text-left text-base">VistA Onion Layer Model</h4>
                                <img
                                    src="/assets/images/vista-onion.png"
                                    alt="VistA Onion Layer Model"
                                    className="max-w-full h-auto mx-auto rounded shadow-sm"
                                />
                            </div>
                        </section>

                        {/* Contact Callout */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <p className="text-gray-800 text-sm md:text-base">
                                To learn more about our VistA EHR customization and integration services, please contact us by email at{' '}
                                <a href="mailto:services@visolve.com" className="text-blue-600 font-semibold underline">
                                    services@visolve.com
                                </a>{' '}
                                or call us at{' '}
                                <a href="tel:+14088502243" className="text-blue-600 font-semibold underline">
                                    +1 (408) 850 2243
                                </a>.
                            </p>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="md:col-span-4 space-y-6">
                        <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg space-y-4 shadow-sm">
                            <h4 className="font-bold text-[#215B87] uppercase tracking-wider text-sm border-b pb-2">
                                Healthcare IT Services
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li><Link to="/services/openemr" className="hover:text-[#f16d05]">OpenEMR Customization</Link></li>
                                <li><Link to="/services/emr" className="hover:text-[#f16d05]">Health IT Engineering &amp; ROI</Link></li>
                                <li><Link to="/services/vista-ehr" className="font-bold text-[#f16d05]">VistA EHR Solutions</Link></li>
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

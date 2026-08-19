import React from "react";
import { Link } from "react-router-dom";

export default function WebCaching() {
    return (
        <div className="min-h-screen bg-white text-gray-700 font-sans">
            {/* Breadcrumb */}
            <div className="bg-gray-100 border-b border-gray-200 py-3">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-gray-600">
                    <Link to="/services" className="hover:text-[#f16d05]">Services</Link>
                    <span className="mx-2">&gt;&gt;</span>
                    <Link to="/services/enterprise-it" className="hover:text-[#f16d05]">Enterprise IT</Link>
                    <span className="mx-2">&gt;&gt;</span>
                    <span className="text-gray-800 font-medium">Web Caching (Squid Services)</span>
                </div>
            </div>

            {/* Header Banner */}
            <section className="bg-[#0B2A4A] text-white py-10">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h1 className="text-3xl md:text-4xl font-bold">Web Caching &amp; Squid Proxy Acceleration</h1>
                    <p className="text-blue-100 mt-2 text-base md:text-lg">
                        High-Performance Transparent Proxying, Bandwidth Optimization, &amp; HTTP Acceleration Solutions
                    </p>
                </div>
            </section>

            {/* Page Content */}
            <main className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-8 space-y-8">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-[#0B2A4A]">
                                Web Caching &amp; Squid Deployment Services
                            </h2>

                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                We provide comprehensive Squid support services, including Squid deployment, custom configuration, and performance fine-tuning tailored to your business requirements and network setup. We support ISPs, educational institutions, financial institutions, healthcare organizations, and technology companies requiring Squid-based web caching proxy solutions.
                            </p>

                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                With more than 15 years of experience in web caching proxy deployment, we pride ourselves on our flagship offering — <strong className="text-[#0B2A4A] font-bold">ViCache+Filter</strong> — a comprehensive GUI tool that simplifies configuring Squid while demonstrating clear ROI by showcasing the percentage of total bandwidth saved.
                            </p>

                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                ViSolve's dedicated support team assists you to install, configure, and performance-tune Squid web caching proxies to peak productivity. Our experienced engineers help increase site uptime through rapid problem analysis and resolution.
                            </p>

                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                Our clients include large and small ISPs, corporations, schools, and Net Cafes. For ISPs, we provide technical assistance setting up high-performance transparent caches, proxy caches, and HTTP accelerators to save precious bandwidth over complex networks. For corporations and schools, we set up safe, secure, policy-based Internet access.
                            </p>

                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                <strong>ViCompress</strong> is an HTTP Accelerator that compresses static and dynamic text pages, saving bandwidth and reducing response times while providing in-memory caching for accelerated delivery.
                            </p>
                        </section>

                        {/* Resources Grid */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <div className="border border-gray-200 rounded-lg p-5 bg-slate-50 flex items-start space-x-4">
                                <img src="/assets/images/whitepapers.png" alt="Whitepaper" className="w-14 h-14 object-contain flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-[#0B2A4A] text-base mb-1">Whitepapers</h3>
                                    <ul className="text-sm space-y-1 text-blue-600">
                                        <li>
                                            <a href="/docs/ViSolve_Web_Caching.pdf" target="_blank" rel="noreferrer" className="hover:underline">
                                                • Increase ROI via Secured Bandwidth Management (PDF)
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-5 bg-slate-50 flex items-start space-x-4">
                                <img src="/assets/images/resources.png" alt="Resources" className="w-14 h-14 object-contain flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-[#0B2A4A] text-base mb-1">Deployment Guides</h3>
                                    <ul className="text-sm space-y-1 text-gray-700">
                                        <li>• Transparent Caching &amp; High-Availability Architecture</li>
                                        <li>• Reverse Proxy &amp; Content Acceleration</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-5 bg-slate-50 flex items-start space-x-4">
                                <img src="/assets/images/reference.png" alt="References" className="w-14 h-14 object-contain flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-[#0B2A4A] text-base mb-1">Technical Support</h3>
                                    <ul className="text-sm space-y-1 text-gray-700">
                                        <li>• Squid 3.x / 2.7 Fine-Tuning &amp; TProxy Patching</li>
                                        <li>• MySQL Log Analysis &amp; Access Control Lists</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-5 bg-slate-50 flex items-start space-x-4">
                                <img src="/assets/images/service.png" alt="Contact" className="w-14 h-14 object-contain flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-[#0B2A4A] text-base mb-1">Email Support</h3>
                                    <p className="text-sm text-gray-700">
                                        Dedicated Squid Support Team:{' '}
                                        <a href="mailto:squid_support@visolve.com" className="text-blue-600 font-semibold underline">
                                            squid_support@visolve.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Contact Callout */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <p className="text-gray-800 text-sm md:text-base">
                                To know more about our Web Caching and Squid services, please contact us by email at{' '}
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
                                Enterprise IT Services
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li><Link to="/services/migration" className="hover:text-[#f16d05]">Migration Services</Link></li>
                                <li><Link to="/services/cloud" className="hover:text-[#f16d05]">Cloud Services</Link></li>
                                <li><Link to="/services/performance-tools" className="hover:text-[#f16d05]">Performance Tools</Link></li>
                                <li><Link to="/services/qa-certification" className="hover:text-[#f16d05]">Product/Solution QA Certification</Link></li>
                                <li><Link to="/services/virtualization" className="hover:text-[#f16d05]">Virtualization Services</Link></li>
                                <li><Link to="/services/opensource" className="hover:text-[#f16d05]">Open Source Services</Link></li>
                                                <li><Link to="/services/demo-portals" className="hover:text-[#f16d05]">Solution Demo Portals</Link></li>
                                <li><Link to="/services/iot" className="hover:text-[#f16d05]">Internet of Things (IoT)</Link></li>
                                <li><Link to="/services/database" className="hover:text-[#f16d05]">Database Services</Link></li>
                                <li><Link to="/services/hadoop-analytics" className="hover:text-[#f16d05]">Hadoop &amp; Business Analytics</Link></li>
                                <li><Link to="/services/web-caching" className="font-bold text-[#f16d05]">Web Caching (Squid)</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

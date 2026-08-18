import React from 'react';
import { Link } from 'react-router-dom';

function TechnicalWriting() {
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-gray-600">
          <Link to="/services" className="hover:text-[#f16d05]">Services</Link>
          <span className="mx-2">&gt;&gt;</span>
          <Link to="/services/enterprise-it" className="hover:text-[#f16d05]">Enterprise IT</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span className="text-gray-800 font-medium">Technical Writing Services</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Technical Documentation &amp; Writing Services</h1>
          <p className="text-blue-100 mt-2 text-base md:text-lg">
            High-quality system documentation, sales &amp; marketing collateral, white papers, and publishing solutions
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-8">
            {/* Overview */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#215B87]">Overview</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                In today's fast-moving software and system engineering ecosystem, clear, precise, and well-structured technical documentation is crucial for product adoption, developer onboarding, system maintenance, and sales enablement.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                ViSolve provides comprehensive <strong>Technical Documentation &amp; Writing Services</strong> tailored for technology vendors, open-source communities, healthcare IT providers, and enterprise software teams. Our experienced technical writers work directly alongside software engineers, architects, and product managers to translate complex system mechanics into actionable, readable, and beautifully formatted technical documentation.
              </p>
            </div>

            {/* Core Capabilities & Services */}
            <div className="space-y-6 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#215B87]">Our Technical Writing Capabilities</h3>

              {/* Capability 1 */}
              <div className="bg-slate-50 p-5 border border-slate-200 rounded-lg space-y-3">
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">1. System &amp; Product Documentation</h4>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                      Complete end-to-end technical documentation for complex enterprise systems, open-source projects, and custom software architectures.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>Architectural Overview &amp; System Design Documents</li>
                      <li>Installation, Configuration &amp; Deployment Guides</li>
                      <li>Administrator &amp; Operator Manuals</li>
                      <li>API Reference, SDK &amp; Developer Documentation</li>
                      <li>Release Notes &amp; Version Migration Guides</li>
                    </ul>
                  </div>
                  <img
                    src="/assets/images/System Documentation_tech_writing.PNG"
                    alt="System Documentation"
                    className="w-32 md:w-40 h-auto rounded border border-gray-200 hidden sm:block"
                  />
                </div>
              </div>

              {/* Capability 2 */}
              <div className="bg-slate-50 p-5 border border-slate-200 rounded-lg space-y-3">
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">2. User &amp; End-User Manuals</h4>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                      User-centric documentation crafted to guide administrators, clinicians, and end-users seamlessly through application features and workflows.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>Step-by-step User Guides &amp; How-To Manuals</li>
                      <li>Interactive Online Help Systems &amp; Knowledge Base Articles</li>
                      <li>Healthcare/EMR Workflow Guides (e.g., OpenEMR, VistA EHR)</li>
                      <li>Troubleshooting &amp; FAQ Documentation</li>
                    </ul>
                  </div>
                  <img
                    src="/assets/images/User Documentation_tech_writing.PNG"
                    alt="User Documentation"
                    className="w-32 md:w-40 h-auto rounded border border-gray-200 hidden sm:block"
                  />
                </div>
              </div>

              {/* Capability 3 */}
              <div className="bg-slate-50 p-5 border border-slate-200 rounded-lg space-y-3">
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">3. Sales &amp; Marketing Collateral</h4>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                      High-impact technical marketing assets that articulate value propositions to key technical stakeholders, executives, and buyers.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>Technical White Papers &amp; Solution Briefs</li>
                      <li>Product Datasheets &amp; Feature Comparatives</li>
                      <li>Implementation Case Studies &amp; Customer Success Stories</li>
                      <li>Executive Summaries &amp; Presentation Decks</li>
                    </ul>
                  </div>
                  <img
                    src="/assets/images/Sales and Marketing_tech_writing.PNG"
                    alt="Sales and Marketing Collateral"
                    className="w-32 md:w-40 h-auto rounded border border-gray-200 hidden sm:block"
                  />
                </div>
              </div>

              {/* Capability 4 */}
              <div className="bg-slate-50 p-5 border border-slate-200 rounded-lg space-y-3">
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">4. Formatting, Editing &amp; Publishing</h4>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                      Professional document design, multi-format publishing, and technical editing to ensure your documentation aligns with corporate branding standards.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      <li>PDF, HTML5, Markdown &amp; Web Publishing</li>
                      <li>Document Style Guide Alignment &amp; Consistency Review</li>
                      <li>Technical Proofreading &amp; Copyediting</li>
                      <li>Graphic &amp; Architectural Diagram Standardization</li>
                    </ul>
                  </div>
                  <img
                    src="/assets/images/Formatting and Publishing_tech_writing.PNG"
                    alt="Formatting and Publishing"
                    className="w-32 md:w-40 h-auto rounded border border-gray-200 hidden sm:block"
                  />
                </div>
              </div>
            </div>

            {/* Why Choose ViSolve */}
            <div className="space-y-4 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#215B87]">Why Choose ViSolve for Technical Documentation?</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                <li><strong className="text-gray-900">Deep Domain Knowledge:</strong> Over two decades of engineering experience in Enterprise IT, Linux/Unix virtualization, Open Source databases, and Healthcare IT/EMR systems.</li>
                <li><strong className="text-gray-900">Engineer-Level Understanding:</strong> Our team understands underlying codebases, REST APIs, database schemas, and cloud architectures, minimizing onboarding time.</li>
                <li><strong className="text-gray-900">Quality &amp; Precision:</strong> Multi-tiered review process involving technical lead validation and editorial proofreading to guarantee zero factual inaccuracy.</li>
                <li><strong className="text-gray-900">End-to-End Delivery:</strong> From initial content research and developer interviews to final polished PDF/HTML publishing.</li>
              </ul>
            </div>

            {/* Contact Callout */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-800 text-sm md:text-base">
                Looking to elevate your technical documentation, user guides, or white papers? Contact our technical writing team at{' '}
                <a href="mailto:services@visolve.com" className="text-blue-600 font-semibold underline">
                  services@visolve.com
                </a>.
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg space-y-4 shadow-sm">
              <h4 className="font-bold text-[#215B87] uppercase tracking-wider text-sm border-b pb-2">
                Enterprise IT Services
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link to="/services/migration" className="hover:text-[#f16d05]">Migration Services</Link></li>
                <li><Link to="/services/cloud" className="hover:text-[#f16d05]">Cloud Services</Link></li>
                <li><Link to="/services/performance-tools" className="hover:text-[#f16d05]">Performance Tools</Link></li>
                <li><Link to="/services/qa-certification" className="hover:text-[#f16d05]">Product/Solution QA Certification</Link></li>
                <li><Link to="/services/technical-writing" className="font-bold text-[#f16d05]">Technical Writing Services</Link></li>
                <li><Link to="/services/virtualization" className="hover:text-[#f16d05]">Virtualization Services</Link></li>
                <li><Link to="/services/opensource" className="hover:text-[#f16d05]">OpenSource Services</Link></li>
                <li><Link to="/services/demo-portals" className="hover:text-[#f16d05]">Solutions Demo Portals</Link></li>
                <li><Link to="/services/iot" className="hover:text-[#f16d05]">Internet of Things (IoT)</Link></li>
                <li><Link to="/services/database" className="hover:text-[#f16d05]">Database Services</Link></li>
                <li><Link to="/services/hadoop-analytics" className="hover:text-[#f16d05]">Hadoop/Business Analytics</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnicalWriting;

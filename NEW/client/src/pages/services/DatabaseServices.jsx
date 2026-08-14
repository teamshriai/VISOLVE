import React from 'react';
import { Link } from 'react-router-dom';

function DatabaseServices() {
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-gray-600">
          <Link to="/services" className="hover:text-[#f16d05]">Services</Link>
          <span className="mx-2">&gt;&gt;</span>
          <Link to="/services/enterprise-it" className="hover:text-[#f16d05]">Enterprise IT</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span className="text-gray-800 font-medium">Database Services</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Database Services</h1>
          <p className="text-blue-100 mt-2 text-base md:text-lg">
            Oracle, MySQL, PostgreSQL, MongoDB, GT.M (Mumps) Administration, Tuning &amp; Migration
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                ViSolve provides expert database services for <strong>Oracle, MySQL, MongoDB, GT.M (Mumps) and other unstructured databases</strong> with an unmatched level of service, support and affordability.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                ViSolve provides Proactive Monitoring, Build, Database Administration, Backup and Recovery, Performance Optimization, High Availability / Disaster Recovery solution and security. Our systematic approach in providing database services enables stable, efficient and agile database systems and processes.
              </p>
            </div>

            {/* Main Database Services Diagram */}
            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50 text-center">
              <h4 className="font-bold text-[#215B87] mb-3 text-left text-base">Database Services Scope</h4>
              <img
                src="/assets/images/ViSolve-Database-Services.png"
                alt="ViSolve Database Services"
                className="max-w-full h-auto mx-auto rounded shadow-sm"
              />
            </div>

            <div className="space-y-4 border-t border-gray-200 pt-6">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Through ViSolve’s expert database services, several of our customers were able to reduce significantly the percentage of database incidents, and improved the availability of their critical databases, realized considerable savings through offshore operations and constant process enhancements. ViSolve provides professional services and support for the following:
              </p>

              {/* Support Matrix Image */}
              <div className="border border-gray-200 rounded-lg p-4 bg-slate-50 text-center">
                <img
                  src="/assets/images/Database-Services-Support.png"
                  alt="Database Services Support Matrix"
                  className="max-w-full h-auto mx-auto rounded shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-4 border-t border-gray-200 pt-6">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                ViSolve improved the performance of MySQL significantly on HP-UX and contributed the code back to the community. MySQL developers approved and incorporated ViSolve's recommendation in its source code. ViSolve can help in planning, testing, and implementing a highly available and scalable DB implementation including Mongo DB, GT.M etc., We also provide migration services to move appropriate data from your relational database system into No SQL databases with as little downtime as possible.
              </p>
            </div>

            {/* Special PostgreSQL Migration Callout */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 space-y-2">
              <h4 className="font-bold text-[#215B87] text-base">Looking for PostgreSQL Migration?</h4>
              <p className="text-gray-700 text-sm md:text-base">
                We offer specialized migration paths from proprietary engines (Oracle, Sybase, Informix) to open-source PostgreSQL.
              </p>
              <div className="pt-2">
                <Link
                  to="/services/postgresql-migration"
                  className="inline-flex items-center text-sm font-semibold text-white bg-[#0B2A4A] hover:bg-[#1a486b] px-4 py-2 rounded transition-colors shadow-sm"
                >
                  View PostgreSQL Migration Services &rarr;
                </Link>
              </div>
            </div>

            {/* Contact Callout */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-800 text-sm md:text-base">
                To know more about our support, please contact us by email at{' '}
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
                Enterprise IT Services
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link to="/services/migration" className="hover:text-[#f16d05]">Migration Services</Link></li>
                <li><Link to="/services/cloud" className="hover:text-[#f16d05]">Cloud Services</Link></li>
                <li><Link to="/services/performance-tools" className="hover:text-[#f16d05]">Performance Tools</Link></li>
                <li><Link to="/services/qa-certification" className="hover:text-[#f16d05]">Product/Solution QA Certification</Link></li>
                <li><Link to="/services/virtualization" className="hover:text-[#f16d05]">Virtualization Services</Link></li>
                <li><Link to="/services/opensource" className="hover:text-[#f16d05]">OpenSource Services</Link></li>
                <li><Link to="/services/security" className="hover:text-[#f16d05]">Enterprise Security</Link></li>
                <li><Link to="/services/demo-portals" className="hover:text-[#f16d05]">Solutions Demo Portals</Link></li>
                <li><Link to="/services/iot" className="hover:text-[#f16d05]">Internet of Things (IoT)</Link></li>
                <li><Link to="/services/database" className="font-bold text-[#f16d05]">Database Services</Link></li>
                <li><Link to="/services/hadoop-analytics" className="hover:text-[#f16d05]">Hadoop/Business Analytics</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DatabaseServices;

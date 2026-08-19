import React from 'react';
import { Link } from 'react-router-dom';

function PostgreSQLMigration() {
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-gray-600">
          <Link to="/services" className="hover:text-[#f16d05]">Services</Link>
          <span className="mx-2">&gt;&gt;</span>
          <Link to="/services/enterprise-it" className="hover:text-[#f16d05]">Enterprise IT</Link>
          <span className="mx-2">&gt;&gt;</span>
          <Link to="/services/migration" className="hover:text-[#f16d05]">Migration Services</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span className="text-gray-800 font-medium">PostgreSQL Migration</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">PostgreSQL Migration</h1>
          <p className="text-blue-100 mt-2 text-base md:text-lg">
            Migration Support, Solid Technology, and Risk Management
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                Organizations of all sizes spend a large portion of their IT budget on Oracle products and services. Oracle is now promoting Exadata and Exalogic as replacements for traditional scale-up database infrastructure. While based on inexpensive, scale out hardware, they exact a high price in software and support services. Many such organizations are looking at ways to reduce cost AND avoid the business risk of having only one vendor for a large percentage of their IT investments.
              </p>
              <p>
                ViSolve is not affiliated with HP, Oracle or other, similar companies. The following tools are of special interest to customers considering migration from an enterprise UNIX, such as AIX, Solaris, or HP-UX to another UNIX or to Linux.
              </p>
              <p>
                Databases are mission-critical, so any Oracle alternative must meet some stringent criteria:
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#496c96]">Solid Technology:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                <li>Simple scale up architecture: easy to deploy and manage, minimal number of hardware and software licenses.</li>
                <li>Complies with SQL standards: Easy to redirect existing applications while ensuring accurate query results.</li>
                <li>High availability: Ability to work together with OS cluster like RedHat Cluster Suite and Novell SUSE HA extension</li>
                <li>Simple database migration and easily available tools and <Link to="/services/migration" className="text-blue-600 font-semibold hover:underline">migration support</Link></li>
              </ul>
            </div>

            <div className="space-y-4 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#496c96]">Solid Economics and Risk Management</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                <li>Available scale-up platform: hardware exists which is certified, scales well, and offers a flexible, virtualization-ready, deployment environment.</li>
                <li>Low cost licensing and support costs.</li>
                <li>Solid market share to reduce long term risks.</li>
              </ul>
            </div>

            <div className="space-y-3 text-gray-700 text-sm md:text-base border-t border-gray-200 pt-6">
              <p>
                ViSolve has extensive experience with PostgreSQL, and considers it a worthy alternative on both HP-UX and Linux platforms.
              </p>
              <p>
                ViSolve can assist you with assessing PostgreSQL as a migration platform and assisting you with your migration.
              </p>
              <p className="pt-2">
                Check out our <Link to="/services/database" className="text-blue-600 font-semibold hover:underline">Database Services</Link>.
              </p>
            </div>

            <div className="flex justify-between items-center border-t border-gray-200 pt-6">
              <Link to="/services/migration/application-porting-kits" className="text-[#f16d05] font-semibold hover:underline">
                &laquo; Application Porting Kits
              </Link>
              <Link to="/services/migration" className="text-[#f16d05] font-semibold hover:underline">
                Migration Services Home &raquo;
              </Link>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-800 text-sm md:text-base">
                To know more about our support, please contact us by email at{' '}
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

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg space-y-4 shadow-sm">
              <h4 className="font-bold text-[#0B2A4A] uppercase tracking-wider text-sm border-b pb-2">
                Migration Resources &amp; Tools
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link to="/services/migration/methodology" className="hover:text-[#f16d05]">Migration Methodology</Link></li>
                <li><Link to="/services/migration/hp-9000-containers" className="hover:text-[#f16d05]">HP 9000 Containers</Link></li>
                <li><Link to="/services/migration/application-porting-kits" className="hover:text-[#f16d05]">Application Porting Kits</Link></li>
                <li><Link to="/services/migration/postgresql" className="font-bold text-[#f16d05]">PostgreSQL Migration</Link></li>
                <li><Link to="/services/database" className="hover:text-[#f16d05]">Database Services</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PostgreSQLMigration;

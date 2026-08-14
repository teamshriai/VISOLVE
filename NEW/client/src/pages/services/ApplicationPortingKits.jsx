import React from 'react';
import { Link } from 'react-router-dom';

function ApplicationPortingKits() {
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
          <span className="text-gray-800 font-medium">Application Porting Kits</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Application Porting Kits</h1>
          <p className="text-blue-100 mt-2 text-base md:text-lg">
            SLPK | SHPK | AHPK Migration and Application Porting Solutions
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#496c96]">HP Solaris-Linux Porting Kit (SLPK)</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                The HP Solaris-Linux Porting Kit (SLPK) is a porting environment for enterprise businesses to automate Solaris to Linux migration - further reducing the TCO of a Linux solution. SLPK automates the migration of Solaris-based applications to drastically reduce the time and effort it takes for them to be up and running on Linux.
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                ViSolve can help you apply this set of tools to streamline your application porting or migration.
              </p>
            </div>

            <div className="space-y-3 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#496c96]">HP Solaris-to-HP-UX Porting Kit (SHPK) features</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                The HP Solaris-to-HP-UX Porting Kit (SHPK) includes a migration environment that contains select development tools, header files and libraries to effortlessly address incompatibilities between the two platforms. Supports 32-bit and 64-bit applications and Solaris 8 and 9 as source platforms.
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                ViSolve can help you apply this set of tools to streamline your application porting or migration.
              </p>
            </div>

            <div className="space-y-3 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#496c96]">HP AIX to HP-UX Porting Kit (AHPK)</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                AHPK is a porting environment for enterprise businesses to automate AIX to HP-UX migration - further reducing the TCO of a HP-UX solution. AHPK automates the migration of AIX-based C and C++ applications to drastically reduce the time and effort it takes for them to be up and running on HP-UX. It transparently handles differences between the compiler, linker and other common build tools on AIX and HP-UX, thus allowing users to use their existing AIX makefiles on HP-UX.
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                ViSolve can help you apply this set of tools to streamline your application porting or migration.
              </p>
            </div>

            <div className="flex justify-between items-center border-t border-gray-200 pt-6">
              <Link to="/services/migration/hp-9000-containers" className="text-[#f16d05] font-semibold hover:underline">
                &laquo; HP 9000 Containers
              </Link>
              <Link to="/services/migration/postgresql" className="text-[#f16d05] font-semibold hover:underline">
                PostgreSQL Migration &raquo;
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg space-y-4 shadow-sm">
              <h4 className="font-bold text-[#215B87] uppercase tracking-wider text-sm border-b pb-2">
                Migration Resources &amp; Tools
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link to="/services/migration/methodology" className="hover:text-[#f16d05]">Migration Methodology</Link></li>
                <li><Link to="/services/migration/hp-9000-containers" className="hover:text-[#f16d05]">HP 9000 Containers</Link></li>
                <li><Link to="/services/migration/application-porting-kits" className="font-bold text-[#f16d05]">Application Porting Kits</Link></li>
                <li><Link to="/services/migration/postgresql" className="hover:text-[#f16d05]">PostgreSQL Migration</Link></li>
                <li><Link to="/services/database" className="hover:text-[#f16d05]">Database Services</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ApplicationPortingKits;

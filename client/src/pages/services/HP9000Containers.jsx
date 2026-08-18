import React from 'react';
import { Link } from 'react-router-dom';

function HP9000Containers() {
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
          <span className="text-gray-800 font-medium">HP 9000 Containers</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">HP 9000 Containers</h1>
          <p className="text-blue-100 mt-2 text-base md:text-lg">
            Simplify transition from PA-RISC based HP 9000 HP-UX servers to HP Integrity HP-UX servers
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                The HP 9000 Containers solution aims to significantly simplify transition from PA-RISC based HP 9000 HP-UX 11i v1 (and later) servers to HP Integrity HP-UX 11i v3 servers. You can copy your entire HP 9000 application ecosystem - there is no need to re-compile applications, prepare application inventories, identify dependencies or re-construct application environment.
              </p>
              
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-center">
                <img
                  src="/assets/images/HP9000 Container.jpg"
                  alt="HP 9000 Containers"
                  className="max-w-full h-auto mx-auto rounded"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#496c96]">When to use?</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                <li>Upgrading or porting to native Integrity versions of applications is infeasible.</li>
                <li>There is not much information available about the application environment, dependencies and customizations on the HP 9000 server</li>
                <li>Legacy stand-alone build environments or mostly home grown applications</li>
                <li>Applications are pure user-space and also not related to system administration or management</li>
                <li>Budget constraints do not allow for native or traditional ARIES migration</li>
              </ul>
            </div>

            <div className="space-y-4 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#496c96]">Scan9000 Tool</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                An automated tool to assess the suitability of HP 9000 Containers to migrate your HP-UX PA-RISC environment to HP Integrity servers. Scan9000 scans the application database of an HP-UX PA-RISC environment for compatibility with rehosting to HP Integrity servers using HP 9000 containers. It provides a detailed report on the installed software, current utilization, sizing and issues (if any) when re-hosting the environment to hp-ux integrity with HP 9000 Containers.
              </p>
              <p className="text-sm">
                To get the usage of the tool, click on "Scan9000 Tool (Download)" on our{' '}
                <Link to="/datasheet" className="text-blue-600 font-semibold hover:underline">
                  Resources
                </Link>{' '}
                page.
              </p>
            </div>

            <div className="flex justify-between items-center border-t border-gray-200 pt-6">
              <Link to="/services/migration/methodology" className="text-[#f16d05] font-semibold hover:underline">
                &laquo; Migration Methodology
              </Link>
              <Link to="/services/migration/application-porting-kits" className="text-[#f16d05] font-semibold hover:underline">
                Application Porting Kits &raquo;
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
                <li><Link to="/services/migration/hp-9000-containers" className="font-bold text-[#f16d05]">HP 9000 Containers</Link></li>
                <li><Link to="/services/migration/application-porting-kits" className="hover:text-[#f16d05]">Application Porting Kits</Link></li>
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

export default HP9000Containers;

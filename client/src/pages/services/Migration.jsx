import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';

function Migration() {
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-gray-600">
          <Link to="/services" className="hover:text-[#f16d05]">Services</Link>
          <span className="mx-2">&gt;&gt;</span>
          <Link to="/services/enterprise-it" className="hover:text-[#f16d05]">Enterprise IT</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span className="text-gray-800 font-medium">Migration Services (Cloud - DB, Applications)</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Migration Services (Cloud - DB, Applications)</h1>
          <p className="text-blue-100 mt-2 text-base md:text-lg">
            Transform outdated and expensive IT infrastructure to highly efficient, flexible, and cost-optimized operations
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content Body */}
          <div className="md:col-span-8 space-y-8">
            {/* Introduction with image */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <img
                  src="/assets/images/migration.png"
                  alt="Migration"
                  className="w-28 h-auto object-contain flex-shrink-0"
                />
                <p>
                  ViSolve has more than 15 years of experience in helping customers transform their outdated and expensive IT infrastructure to highly efficient, flexible and cost optimized operations. ViSolve can work with you at every step of the way in your re-hosting project, from cost justification and TCO analysis, to infrastructure recommendations, to project scoping, and post-migration support.
                </p>
              </div>
              <p>
                ViSolve can help ensure you have a smooth transition process that preserves the data you need and the functionality you are familiar with.
              </p>
            </div>

            {/* What We Offer & Converged Infrastructure 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-gray-200 pt-6">
              {/* Left Column: What We Offer */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#123F67]">What We Offer</h3>

                {/* Linux Migration */}
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-[#e46c0a]">Linux Migration</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    There is more to updating your infrastructure than replacing hardware. ViSolve can help deliver big savings by helping you move your older UNIX, or Linux applications over to a Linux-based infrastructure running on Intel or AMD-based industry standard servers. A move like that will free up budget for your business, and help you remove dependencies on proprietary hardware architectures and operating environments.
                  </p>
                </div>

                {/* Database Migration */}
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-[#e46c0a]">Database Migration</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                    <li>From Oracle on UNIX to Linux with a focus on x86-based virtualized environment</li>
                    <li>From any architecture to x86-64 architecture</li>
                    <li>Oracle to open source databases like EnterpriseDB</li>
                    <li>Staff training on operations and tuning of new environment</li>
                    <li>Post migration support</li>
                  </ul>
                  <p className="text-gray-700 text-sm leading-relaxed pt-1">
                    The ViSolve engineering team has been optimizing performance for commercial databases since the 1980s. We are intimately familiar with the internals of Oracle Database, MySQL, PostgreSQL and other products.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    ViSolve had even improved MySQL database performance on HP-UX by 30% by carrying out rigorous benchmarking iterations with Caliper and other performance benchmarking tools. ViSolve can meet your needs for database performance tuning and/or migrations.
                  </p>
                  <p className="text-sm pt-1">
                    Check out our <Link to="/services/database" className="text-blue-600 font-semibold hover:underline">Database Services.</Link>
                  </p>
                </div>

                {/* Open Source Application Migration */}
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-[#e46c0a]">Open Source Application Migration</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    ViSolve has experience, capabilities and expert knowledge in developing and deploying open source applications and solutions. We can provide tools and expertise in this area to support your migration needs.
                  </p>
                  <p className="text-gray-700 text-sm font-semibold pt-1">Our capabilities include:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                    <li>Migrating UNIX utilities or scripts to Linux</li>
                    <li>Identifying open-source applications to replace current proprietary tools</li>
                    <li>Writing open source tools as needed to support migration and new IT environments</li>
                  </ul>
                </div>

                {/* Operational services */}
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-[#3a3f4b]">Operational services to supplement customer IT staff</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                    <li>Administration (database, applications, servers, storage, networking)</li>
                    <li>After-hours monitoring and management</li>
                    <li>Help desk</li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Converged Infrastructure & Migration Tools */}
              <div className="space-y-6">
                {/* Converged Infrastructure */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#123F67]">Converged Infrastructure</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    ViSolve can help you move your legacy UNIX, Linux, or Windows environment to a Converged Infrastructure. We have broad experience with HP hardware, software, and operating systems and we know how to assist on the journey to lower costs and greater flexibility. We can work with you from the initial plan to the final step as we help you create a modern, optimized computing environment. Our HP technology experience includes:
                  </p>

                  <div className="space-y-1">
                    <p className="text-sm font-bold text-gray-800">Operating systems and related systems-level software</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                      <li>HP-UX, Linux, Windows, OpenVMS, MPE</li>
                      <li>HP Serviceguard</li>
                      <li>Campus, Metro, and Continental Clusters</li>
                      <li>HP Insight Dynamics &amp; Virtual Server Environment</li>
                      <li>HP OpenView, Business Technology Optimization Solutions</li>
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-bold text-gray-800">Platform emulation tools</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                      <li>HP 9000 Containers</li>
                      <li>Aries technology</li>
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-bold text-gray-800">Infrastructure products</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                      <li>HP ProLiant, Integrity, HP9000, HP 3000, Alpha hardware</li>
                      <li>HP XP, 3PAR, EVA, MSA Storage</li>
                    </ul>
                  </div>
                </div>

                {/* Migration Tools */}
                <div className="space-y-3 border-t border-gray-100 pt-4">
                  <h3 className="text-xl font-bold text-[#123F67]">Migration Tools</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    ViSolve has in-depth experience with migration tools from HP, Oracle and others. ViSolve also develops several migration tools and services to reduce migration risks and helping customers to assess their environment feasibility and the level of complexity required for the migration exercise. This in turn becomes a solid source to understand the time and cost estimate involved in such assignments.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    ViSolve is not affiliated with HP, Oracle or other, similar companies. The following tools are of special interest to customers considering migration from an enterprise UNIX, such as AIX, Solaris, or HP-UX to another UNIX or to Linux.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2 justify-center">
                    <span className="px-4 py-2 bg-[#0B2A4A] text-white text-xs font-semibold rounded shadow-sm">
                      HP 9000 Containers
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2 justify-center">
                    <span className="px-4 py-2 bg-[#0B2A4A] text-white text-xs font-semibold rounded shadow-sm">
                      Application Porting Kits
                    </span>
                  </div>

                  <div className="pt-4 text-center">
                    <span className="text-sm font-semibold text-gray-700 block mb-2">5 Step Migration Methodology</span>
                    <div className="inline-block p-2 bg-slate-50 border border-slate-200 rounded">
                      <img
                        src="/assets/images/migration_steps.png"
                        alt="5 Step Migration Methodology"
                        className="max-w-full h-auto mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overall Services Diagram Callout */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg text-center space-y-4">
              <h4 className="text-lg font-bold text-[#0B2A4A]">ViSolve Overall Migration Task &amp; Support Architecture</h4>
              <div className="overflow-x-auto">
                <img
                  src="/assets/resources/Migration_Task_Support.jpg"
                  alt="ViSolve Overall Services Migration Task Support"
                  className="max-w-full h-auto mx-auto rounded border border-gray-200 shadow-sm"
                />
              </div>
            </div>

            {/* ViSolve Can Section */}
            <div className="space-y-4 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#123F67]">ViSolve can</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                <li>Make migration simple with a wide range of tools and services</li>
                <li>Identify open-source applications and tools that could fit into your target environment</li>
                <li>Work with you to consolidate workloads from distributed, standalone servers to virtualized, Linux-based x86 servers</li>
                <li>Support you with local or onsite resources as needed: architects, project managers</li>
                <li>Support you with offshore resources for development, test and ongoing support</li>
                <li>Continued environment support after migration</li>
              </ul>
            </div>

            {/* 24x7 Support Section */}
            <div className="space-y-4 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#123F67]">24x7 Support</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                With 24x7 support, we provide fast responses to your technical queries and extend technical assistance to your pre- and post-migration projects.
              </p>
              <p className="text-gray-800 text-sm md:text-base font-medium pt-2">
                To know more about database migration support, please contact us by email at{' '}
                <a href="mailto:services@visolve.com" className="text-[#f16d05] font-semibold underline">
                  services@visolve.com
                </a>{' '}
                or call us at{' '}
                <a href="tel:+14086664320" className="text-[#f16d05] font-semibold underline">
                  +1 408 666 4320
                </a>.
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="md:col-span-4 space-y-6">
            {/* Migration Sub-navigation */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg space-y-4 shadow-sm">
              <h4 className="font-bold text-[#0B2A4A] uppercase tracking-wider text-sm border-b pb-2">
                Migration Resources &amp; Tools
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link to="/services/migration/methodology" className="hover:text-[#f16d05]">5 Step Migration Methodology</Link></li>
                <li><Link to="/services/migration/hp-9000-containers" className="hover:text-[#f16d05]">HP 9000 Containers</Link></li>
                <li><Link to="/services/migration/application-porting-kits" className="hover:text-[#f16d05]">Application Porting Kits</Link></li>
                <li><Link to="/services/migration/postgresql" className="hover:text-[#f16d05]">PostgreSQL Migration</Link></li>
                <li><Link to="/services/database" className="hover:text-[#f16d05]">Database Tuning &amp; Services</Link></li>
              </ul>
            </div>

            {/* Enterprise IT Navigation */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg space-y-4 shadow-sm">
              <h4 className="font-bold text-[#0B2A4A] uppercase tracking-wider text-sm border-b pb-2">
                Enterprise IT Services
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link to="/services/migration" className="font-bold text-[#f16d05]">Migration Services</Link></li>
                <li><Link to="/services/cloud" className="hover:text-[#f16d05]">Cloud Services</Link></li>
                <li><Link to="/services/performance-tools" className="hover:text-[#f16d05]">Performance Tools</Link></li>
                <li><Link to="/services/qa-certification" className="hover:text-[#f16d05]">Product/Solution QA Certification</Link></li>
                <li><Link to="/services/virtualization" className="hover:text-[#f16d05]">Virtualization Services</Link></li>
                <li><Link to="/services/opensource" className="hover:text-[#f16d05]">OpenSource Services</Link></li>
                <li><Link to="/services/demo-portals" className="hover:text-[#f16d05]">Solutions Demo Portals</Link></li>
                <li><Link to="/services/iot" className="hover:text-[#f16d05]">Internet of Things (IoT)</Link></li>
                <li><Link to="/services/database" className="hover:text-[#f16d05]">Database Services</Link></li>
                <li><Link to="/services/hadoop-analytics" className="hover:text-[#f16d05]">Hadoop/Business Analytics</Link></li>
              </ul>
            </div>

            {/* Healthcare IT Navigation */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg space-y-4 shadow-sm">
              <h4 className="font-bold text-[#0B2A4A] uppercase tracking-wider text-sm border-b pb-2">
                Healthcare IT Services
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link to="/services/openemr" className="hover:text-[#f16d05]">OpenEMR Solutions</Link></li>
                <li><Link to="/services/interoperability" className="hover:text-[#f16d05]">Interoperability Solutions</Link></li>
                <li><Link to="/services/medicalbilling" className="hover:text-[#f16d05]">Medical Billing Solutions</Link></li>
                <li><Link to="/datasheet" className="hover:text-[#f16d05]">Healthcare IT Resources</Link></li>
              </ul>
            </div>

            {/* Call Sidebar Box */}
            <div className="bg-slate-100 border border-slate-200 p-6 rounded-lg text-center space-y-3">
              <p className="text-sm font-semibold text-gray-700">Talk to our experts:</p>
              <div className="flex items-center justify-center space-x-2 text-[#0B2A4A]">
                <FiPhone className="text-xl" />
                <a href="tel:+14086664320" className="font-bold text-lg hover:underline">+1 408 666 4320</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Migration;

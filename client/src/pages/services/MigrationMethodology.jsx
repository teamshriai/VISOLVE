import React from 'react';
import { Link } from 'react-router-dom';

function MigrationMethodology() {
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
          <span className="text-gray-800 font-medium">Migration Methodology</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">5-Step Migration Methodology</h1>
          <p className="text-blue-100 mt-2 text-base md:text-lg">
            Proven migration methodology guiding you through each step of your migration projects
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-8">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              With our proven migration methodology, our experts can guide you through each step of your migration projects.
            </p>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-center">
              <img
                src="/assets/images/migration_steps.png"
                alt="5-Step Migration Methodology"
                className="max-w-full h-auto mx-auto"
              />
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-[#215B87] pl-4 py-1">
                <h3 className="text-lg font-bold text-[#0B2A4A]">1. Assess</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-1">
                  Based on your business migration driver, we will assess your source and target environment. We will identify database and application suitability and availability, and platform independent challenges while moving from UNIX to Linux. As a result you will get an assessment report on the risks involved, effort estimate and cost.
                </p>
              </div>

              <div className="border-l-4 border-[#215B87] pl-4 py-1">
                <h3 className="text-lg font-bold text-[#0B2A4A]">2. Plan</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-1">
                  We will develop a detailed plan on the migration process and the in-house applications to be ported from UNIX to Linux including staffing requirements. We will work closely with you to ensure the development plan meets your business objectives and help us develop a Proof of Concept (PoC). At the end you will receive a report on Project, Staffing Plan and Proof of Concept.
                </p>
              </div>

              <div className="border-l-4 border-[#215B87] pl-4 py-1">
                <h3 className="text-lg font-bold text-[#0B2A4A]">3. Develop</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-1">
                  We will expand the PoC to real project. Your existing application stack is either virtualized or consolidated. Customized Linux installation on target environment and ISV components are finalized. After your review and approval, we will start building and packaging for deployment and develop training and support for your staff. At the end, you will get a detailed and a working Proof of Concept.
                </p>
              </div>

              <div className="border-l-4 border-[#215B87] pl-4 py-1">
                <h3 className="text-lg font-bold text-[#0B2A4A]">4. Deploy</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-1">
                  We will do a pilot deployment after reviewing the data, training and support. Upon successful deployment and further review, the cut over to the new infrastructure is done.
                </p>
              </div>

              <div className="border-l-4 border-[#215B87] pl-4 py-1">
                <h3 className="text-lg font-bold text-[#0B2A4A]">5. Support</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-1">
                  We will support you extensively as part of our project implementation. We will ensure environment stability, validate back-up and high availability tools, and tweak acceptance metrics against business benchmarks. We will also continue to train your key staff with end-user documentation.
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-gray-200 pt-6">
              <Link to="/services/migration" className="text-[#f16d05] font-semibold hover:underline flex items-center space-x-1">
                <span>&laquo; Back to What We Offer</span>
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
                <li><Link to="/services/migration/methodology" className="font-bold text-[#f16d05]">Migration Methodology</Link></li>
                <li><Link to="/services/migration/hp-9000-containers" className="hover:text-[#f16d05]">HP 9000 Containers</Link></li>
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

export default MigrationMethodology;

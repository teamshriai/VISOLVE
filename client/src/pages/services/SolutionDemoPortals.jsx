import React from 'react';
import { Link } from 'react-router-dom';

function SolutionDemoPortals() {
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-gray-600">
          <Link to="/services" className="hover:text-[#f16d05]">Services</Link>
          <span className="mx-2">&gt;&gt;</span>
          <Link to="/services/enterprise-it" className="hover:text-[#f16d05]">Enterprise IT</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span className="text-gray-800 font-medium">Solution Demo Portals</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Solution Demo Portals</h1>
          <p className="text-blue-100 mt-2 text-base md:text-lg">
            Demo centers, pre-sales solution proofing, prototype environments, and 24*7 monitoring
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                ViSolve has more than a decade of experience in developing and managing solution demo centers or portals for enterprise IT vendor organizations. We help enterprise IT vendors attract new clients and achieve their key mission in ensuring their customer organizations are successful in selecting and deploying the most fitting technology solutions to meet their business challenges. The portal also enables enterprise vendor’s customers collaborate with vendor specialists and a dynamic community of partners, Independent Software Vendors (ISVs) and systems integrators.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Beyond information on the solutions, customers feel the need to experience a solution. The objective of each solution center is to create a compelling experience for clients, business partners of the enterprise vendors. ViSolve helps vendors host leading-edge solutions including some of the latest developments from industry solutions. It is also a platform where potential partners and customers share experiences and discuss business issues. Eventually, it also helps customers assess system size, scalability, and performance for IT solutions. In the solution center vendor’s customers can also see their ideas implemented as working prototypes running on vendor systems.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                In a year more than 100,000 clients and business partners visits vendor’s solutions demo portal. In addition to developing the business demo scenarios with the vendor’s pre-sales team, ViSolve provides 24*7 monitoring and support for the demo data center worldwide ensuring performance scalability and business continuity for the demo environment. Vendor can show customers that they understand customer’s business and engage in sales cycle earlier.
              </p>
            </div>

            {/* Diagram Asset */}
            <div className="border border-gray-200 rounded-lg p-4 bg-slate-50 text-center">
              <img
                src="/assets/images/Solution-Demo-Portal.png"
                alt="Solution Demo Portal Ecosystem"
                className="max-w-full h-auto mx-auto rounded shadow-sm"
              />
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
              <h4 className="font-bold text-[#0B2A4A] uppercase tracking-wider text-sm border-b pb-2">
                Enterprise IT Services
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link to="/services/migration" className="hover:text-[#f16d05]">Migration Services</Link></li>
                <li><Link to="/services/cloud" className="hover:text-[#f16d05]">Cloud Services</Link></li>
                <li><Link to="/services/performance-tools" className="hover:text-[#f16d05]">Performance Tools</Link></li>
                <li><Link to="/services/qa-certification" className="hover:text-[#f16d05]">Product/Solution QA Certification</Link></li>
                <li><Link to="/services/virtualization" className="hover:text-[#f16d05]">Virtualization Services</Link></li>
                <li><Link to="/services/opensource" className="hover:text-[#f16d05]">OpenSource Services</Link></li>
                <li><Link to="/services/demo-portals" className="font-bold text-[#f16d05]">Solutions Demo Portals</Link></li>
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

export default SolutionDemoPortals;

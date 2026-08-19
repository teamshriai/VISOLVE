import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

function EnterpriseIT() {
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Breadcrumb Banner */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-gray-600">
          <Link to="/services" className="hover:text-[#f16d05]">Services</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span className="text-gray-800 font-medium">Enterprise IT</span>
        </div>
      </div>

      {/* Page Title Header */}
      <section className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Enterprise IT</h1>
          <p className="text-blue-100 mt-2 text-lg">
            Customized managed IT services & infrastructure solutions 24x7
          </p>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Body */}
          <div className="md:col-span-8 space-y-6">
            <h2 className="text-2xl font-bold text-[#0B2A4A]">Enterprise IT Division</h2>
            <p className="text-gray-700 leading-relaxed">
              ViSolve’s Enterprise IT Division provides customized managed IT services through design, implementation and support of mission critical infrastructure 24x7 on premises, in datacenters, and in the Cloud. For more than a decade, ViSolve’s Enterprise IT Teams have acted as an extension of internal IT teams of leading system vendors, financial institutions and healthcare organizations enabling them towards better business outcomes and achieving unmatched customer retention.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We specialize in customized services and solutions based on open source and leading edge technologies providing compelling value proposition to customers. We manage your day to day IT 24*7*365 in your preferred time-zone, allowing you to focus on your core business while aligning your business with IT, and enabling you to gain greater control of the IT resources.
            </p>
            <p className="text-gray-700 leading-relaxed">
              ViSolve’s Managed IT Services equips you with advantages such as best in class IT operations powered by best practices, improved efficiency, and reduced time to market and ability to take informed decision for better business outcomes. Most importantly we also enable you to lower your operational costs and improve productivity through flexible operating models, tailor made to your operating hours, commercials and specific business needs.
            </p>

            <h3 className="text-xl font-semibold text-[#0B2A4A] pt-4">Enterprise IT Service Capabilities include:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Cloud Services", link: "/services/cloud" },
                { title: "Database Services", link: "/services/database" },
                { title: "Hadoop / Business Analytics", link: "/services/hadoop-analytics" },
                { title: "Virtualization Services", link: "/services/virtualization" },
                { title: "OpenSource Services", link: "/services/opensource" },
                { title: "Performance Tools", link: "/services/performance-tools" },
                { title: "Product / Solution QA Certification", link: "/services/qa-certification" },
                { title: "Migration Services", link: "/services/migration" },
                { title: "Solution Demo Portals", link: "/services/demo-portals" },
                { title: "Internet of Things (IoT)", link: "/services/iot" },
              ].map((item, idx) => (
                <li key={idx} className="bg-gray-50 border border-gray-200 p-4 rounded-lg hover:border-blue-300 transition-colors">
                  <Link to={item.link} className="flex items-center space-x-2 text-[#0B2A4A] font-semibold hover:text-[#F28C28]">
                    <FiChevronRight className="text-[#F28C28]" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <p className="text-gray-800">
                To know more about our Enterprise IT Services, please contact us by email at{' '}
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
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg space-y-4">
              <h4 className="font-bold text-[#0B2A4A] uppercase tracking-wider text-sm border-b pb-2">
                Enterprise IT Services
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link to="/services/migration" className="hover:text-[#f16d05]">Migration Services</Link></li>
                <li><Link to="/services/cloud" className="hover:text-[#f16d05]">Cloud Services</Link></li>
                <li><Link to="/services/performance-tools" className="hover:text-[#f16d05]">Performance Tools</Link></li>
                <li><Link to="/services/qa-certification" className="hover:text-[#f16d05]">QA Certification</Link></li>
                <li><Link to="/services/database" className="hover:text-[#f16d05]">Database Services</Link></li>
                <li><Link to="/services/hadoop-analytics" className="hover:text-[#f16d05]">Hadoop/Business Analytics</Link></li>
                <li><Link to="/services/virtualization" className="hover:text-[#f16d05]">Virtualization Services</Link></li>
                <li><Link to="/services/opensource" className="hover:text-[#f16d05]">OpenSource Services</Link></li>
                <li><Link to="/services/demo-portals" className="hover:text-[#f16d05]">Solutions Demo Portals</Link></li>
                <li><Link to="/services/iot" className="hover:text-[#f16d05]">Internet of Things (IoT)</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EnterpriseIT;

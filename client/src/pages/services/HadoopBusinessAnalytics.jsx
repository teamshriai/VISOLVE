import React from 'react';
import { Link } from 'react-router-dom';

function HadoopBusinessAnalytics() {
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-gray-600">
          <Link to="/services" className="hover:text-[#f16d05]">Services</Link>
          <span className="mx-2">&gt;&gt;</span>
          <Link to="/services/enterprise-it" className="hover:text-[#f16d05]">Enterprise IT</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span className="text-gray-800 font-medium">Hadoop / Business Analytics</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Hadoop &amp; Business Analytics</h1>
          <p className="text-blue-100 mt-2 text-base md:text-lg">
            Big Data Processing, MapReduce, YARN, HP Vertica Analytics, Predictive Data Mining
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Based on predictions by IDC, The big data market is predicted to be valued at $100bn by 2020, and half of this will be driven by Hadoop. Organizations are looking forward to adopt Hadoop to store, manage, and process Big Data to gain faster and better insights into their business and customers. Hadoop is a rapidly evolving Open Source framework scalable for processing huge datasets in distributed systems thereby enabling users to store and process huge volumes of data and analyzes structured and complex data.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Our consultants possess the Hadoop expertise including MapReduce, YARN, Hive, Pig, Drill, Oozie, Sqoop, etc. to support the big data platform in-house. ViSolve can help organizations to use Hadoop capabilities in the cloud to cost-effectively deploy analytics.
              </p>
            </div>

            {/* Advantages List */}
            <div className="space-y-3 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#215B87]">Advantages of Using Hadoop:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                <li>Hadoop is open source and cost effective</li>
                <li>Hadoop provides MapReduce, an efficient framework for processing big data</li>
                <li>Hadoop supports your existing database and analytics infrastructures without displacing them</li>
                <li>Hadoop provides compelling value proposition where it is implemented with the right infrastructure</li>
                <li>Hadoop is supported by a growing and vibrant community</li>
              </ul>
            </div>

            <div className="space-y-4 border-t border-gray-200 pt-6">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                ViSolve provides <strong>Hadoop Consulting &amp; Development</strong> to help organizations with customized solutions using Hadoop in areas such as Business Analytics &amp; Business Intelligence, Reporting Capabilities &amp; Real-time Reporting, Interactive Reporting &amp; Interactive Business Analytics, Predictive Analytics, Data Mining &amp; Data Aggregation, Performance Management and Clustering.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Our Hadoop Consultants possess expertise in Hadoop deployment, from installation and architecture to its configuration and optimization. We provide the most competitive rates on the market for experienced Hadoop development and consulting professionals.
              </p>
            </div>

            {/* Business Analytics & HP Vertica */}
            <div className="space-y-4 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#215B87]">Business Analytics</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Leveraging on expertise in Hadoop and HP Vertica, ViSolve provides customized business analytics solutions to help Enterprises and Healthcare Organizations leverage the power of analytics in the context of their business to uncover insights and trends from data including Big Data to make smart decisions to address business needs, improve business outcomes and stay ahead of competition. Our team has extensive experience in <strong>HP Vertica</strong>, a leading next-generation analytics platform enabling companies to monetize their data in real time and helping solve challenges in the real world. The HP Vertica Analytics Platform is already used by more than hundreds of customers across a variety of industries worldwide, including Verizon, Twitter, BlueCross BlueShield, Mozilla, Comcast etc.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Leveraging our experience across verticals such as Healthcare, Banking and Financial Institutions etc. on top of this expertise in various cutting edge technologies, we are committed to deliver the most wide-ranging and integrated solutions that let customers discover value in big data, gain insight into every aspect of their business, plan ahead, and act with confidence-anytime, anywhere, on any device.
              </p>
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
                <li><Link to="/services/database" className="hover:text-[#f16d05]">Database Services</Link></li>
                <li><Link to="/services/hadoop-analytics" className="font-bold text-[#f16d05]">Hadoop/Business Analytics</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HadoopBusinessAnalytics;

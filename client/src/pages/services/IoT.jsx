import React from 'react';
import { Link } from 'react-router-dom';

function IoT() {
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-gray-600">
          <Link to="/services" className="hover:text-[#f16d05]">Services</Link>
          <span className="mx-2">&gt;&gt;</span>
          <Link to="/services/enterprise-it" className="hover:text-[#f16d05]">Enterprise IT</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span className="text-gray-800 font-medium">Internet of Things (IoT)</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Internet of Things (IoT)</h1>
          <p className="text-blue-100 mt-2 text-base md:text-lg">
            Smart Sensor Networks, Remote Patient Monitoring, Health IT Infrastructure &amp; Data Intelligence
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Internet of Things (IoT) is viewed as billions of intelligent connections that will comprehend every facet of our lives and make the world a better place. Research firm Gartner predicts IoT will generate USD300 billion in revenue by 2020, with estimates of how many connected devices ranging from 25 billion to more than 200 billion. Those devices need sensors, networks, back-end infrastructure and analytics software to make them useful though.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                ViSolve is working to provide custom solutions based on the trends of IoT by connecting customer’s business with the next generation internet-enabled devices in the cloud, and focusing on generating data-driven intelligence from connected things, people and devices.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                IoT is the collection of smart, sensor-enabled physical objects, and the networks, servers and services that interact with them. This is expected to be a key enabler of industry scenarios and innovations in the digital world and specifically has tremendous impact in the healthcare sector. IoT is used in remote monitoring of patients, to analyze trends to provide better healthcare or attain significant savings by pro-actively managing the Health IT Infrastructure.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#215B87]">Benefits Organizations Achieve Using IoT:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                <li>Considerable improvement in asset utilization</li>
                <li>Higher business process efficiency</li>
                <li>Address operational costs</li>
                <li>Transform current business and customer experience</li>
                <li>Generate new revenue streams</li>
                <li>Enhance security</li>
                <li>Pro-active management and fixing of issues, revolutionizing customer experience</li>
              </ul>
            </div>

            <div className="space-y-4 border-t border-gray-200 pt-6">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                We can work with Healthcare IT Vendors and other products, to incorporate IoT into their products, enabling differentiation in the market and driving margins. Ultimately IoT aids in transforming our world from disconnected, secluded systems to Internet-enabled devices that can network and communicate with each other and the cloud, providing the opportunity to improve overall business outcomes.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                We leverage our expertise in leading edge technologies, analytical capabilities and healthcare domain combining the power of IoT to take your business to new heights.
              </p>
            </div>

            {/* Contact Callout */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-800 text-sm md:text-base">
                To know more about our IoT solutions and services, please contact us by email at{' '}
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
                <li><Link to="/services/demo-portals" className="hover:text-[#f16d05]">Solutions Demo Portals</Link></li>
                <li><Link to="/services/iot" className="font-bold text-[#f16d05]">Internet of Things (IoT)</Link></li>
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

export default IoT;

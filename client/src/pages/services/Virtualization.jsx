import React from 'react';
import { Link } from 'react-router-dom';

function Virtualization() {
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-gray-600">
          <Link to="/services" className="hover:text-[#f16d05]">Services</Link>
          <span className="mx-2">&gt;&gt;</span>
          <Link to="/services/enterprise-it" className="hover:text-[#f16d05]">Enterprise IT</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span className="text-gray-800 font-medium">Virtualization Services</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Virtualization Services</h1>
          <p className="text-blue-100 mt-2 text-base md:text-lg">
            Data Center Monitoring, Server Virtualization, Network/Storage Virtualization, and 24x7 Support
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-8">
            {/* Overview */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <img
                  src="/assets/images/virtualization.jpg"
                  alt="Virtualization Services"
                  className="rounded border border-gray-200 shadow-sm shrink-0"
                />
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Virtualization drives and enables data center consolidation, and improves efficiency and availability of IT resources to respond to market dynamics faster and better. This ensures competitive advantage for the mission-critical businesses. While virtualization can give your business an edge and improve overall performance, implementing it can be challenging. This is why we are in the business, to help you in the successful implementation by mitigating associated risks and delivering project on time without cost overruns.
                </p>
              </div>
            </div>

            {/* What We Offer */}
            <div className="space-y-6 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#215B87]">What we offer</h3>
              <p className="text-gray-700 text-sm md:text-base font-medium">
                We offer the following Virtualization services:
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-[#e46c0a] pl-4 py-1">
                  <h4 className="text-lg font-bold text-[#e46c0a]">Server Virtualization</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm md:text-base mt-2">
                    <li>Extensive experience and expertise in implementing virtualized environment using VMware, Microsoft Hyper-V and HP Integrity VM</li>
                    <li>Hands-on experience in Open Source Virtualization tools such as Xen, OpenVZ, QEMU, KVM and VirtualBox</li>
                    <li>In-depth technical and implementation skills in virtualization functionalities such as VMware vMotion, Oracle Secure Live Migration, HP Online VM Migration and VM with Serviceguard</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#e46c0a] pl-4 py-1">
                  <h4 className="text-lg font-bold text-[#e46c0a]">Network/Storage Virtualization</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm md:text-base mt-2">
                    <li>Implementation experience in HP Virtual Connect (VC) Technology and HP VC Flex-10 modules for blade servers (LAN &amp; SAN). Technology expertise in VLAN, HP APA and VMware Virtual Switch</li>
                    <li>Storage provisioning expertise using HP EVA 4000, HP EVA 6000, HP MSA1000, NAS, SAN switches such as Brocade and QLogic, and applications like HP Command View EVA and SSSU</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#e46c0a] pl-4 py-1">
                  <h4 className="text-lg font-bold text-[#e46c0a]">Data Center Management and Monitoring</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm md:text-base mt-2">
                    <li>Expertise in Integrated Management systems for virtualized environment such as VMware vCenter Server, HP Insight Control Suite and OpenStack</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#e46c0a] pl-4 py-1">
                  <h4 className="text-lg font-bold text-[#e46c0a]">Software packages deployed for HA</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-gray-700 text-sm md:text-base mt-2">
                    <li>Clustering options from Red Hat, Novell/SUSE</li>
                    <li>Oracle RAC</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 24x7 Support */}
            <div className="space-y-3 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#215B87]">24x7 Support</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                We believe it is critical to provide 24x7 support for mission-critical data centers to ensure service availability and business continuity. We provide end-to-end 24x7 Data Center Monitoring &amp; Management, Service Availability, Performance and Capacity Monitoring &amp; Management services.
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
                <li><Link to="/services/virtualization" className="font-bold text-[#f16d05]">Virtualization Services</Link></li>
                <li><Link to="/services/opensource" className="hover:text-[#f16d05]">OpenSource Services</Link></li>
                <li><Link to="/services/demo-portals" className="hover:text-[#f16d05]">Solutions Demo Portals</Link></li>
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

export default Virtualization;

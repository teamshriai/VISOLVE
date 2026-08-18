import React from 'react';
import { Link } from 'react-router-dom';

function ViCacheFilter() {
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-gray-600">
          <Link to="/services" className="hover:text-[#f16d05]">Services</Link>
          <span className="mx-2">&gt;&gt;</span>
          <Link to="/services/enterprise-it" className="hover:text-[#f16d05]">Enterprise IT</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span className="text-gray-800 font-medium">ViCache+Filter</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">ViCache+Filter</h1>
          <p className="text-blue-100 mt-2 text-base md:text-lg">
            Web Caching, Filtering, Data Mining, Monitoring &amp; Live GUI Reporting Solution
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-8">
            {/* Main Overview */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#215B87]">
                How to Control, Save and Monitor HTTP Bandwidth?
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Easy to manage internet access and better response time is a critical factor in the success of most corporates around the globe. However, unrestricted and unmanaged Internet access by employees can lead to security infractions, loss of productivity and increases the corporate IT spending. ViCache+Filter helps you solve the challenges of Internet Bandwidth Performance and in Effective Management of internet access.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-[#215B87] p-4 my-4">
                <p className="text-[#215B87] font-semibold text-base md:text-lg">
                  ViCache+Filter = Caching + Data Mining + Monitoring + URL Filtering + Live Reports (GUI)
                </p>
              </div>

              {/* Main Product Image */}
              <div className="text-center py-4 bg-gray-50 border border-gray-200 rounded-lg">
                <img
                  src="/assets/images/vicache.jpg"
                  alt="ViCache+Filter Architecture & Features"
                  className="max-w-full h-auto mx-auto rounded"
                />
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4">
                <p className="text-gray-900 font-semibold text-sm md:text-base">
                  ViCache+Filter is deployed on your server that runs on Linux.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base mt-2">
                  With ViCache+Filter - Corporates, SMBs, ISPs and Educational Institutions can see an average of 50% increase in network performance, Customize web content delivery at the edge of the network (closer to the user) and could take the load off the high traffic Internet backbone.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-4 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#215B87]">Benefits</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                <li>You provide the hardware and we deploy the solution</li>
                <li>Doubles the Network bandwidth and Better response time</li>
                <li>Scalable by clustering or by WCCP</li>
                <li>Provides easy to use GUI for configuration and monitoring</li>
                <li>24 x 7 Service provided by ViSolve Support Team</li>
                <li>Browser based administration, live and historical reports</li>
                <li>Plug and Play with your existing network environment</li>
              </ul>
            </div>

            {/* How We Deploy */}
            <div className="space-y-6 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#215B87]">How We Deploy</h3>
              
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg text-center">
                <img
                  src="/assets/images/squid_how_we_deploy.jpg"
                  alt="Squid How We Deploy Process"
                  className="max-w-full h-auto mx-auto rounded border border-gray-300"
                />
              </div>

              <div className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
                <p><strong className="text-gray-900">Step 1 :</strong> Customers purchase ViCache+Filter solution.</p>
                <p><strong className="text-gray-900">Step 2 :</strong> You will receive a confirmation email from ViSolve once your order has been processed.</p>
                <p><strong className="text-gray-900">Step 3 :</strong> ViSolve assigns consultant/engineer for the installation process of ViCache+Filter.</p>
                <p><strong className="text-gray-900">Step 4 :</strong> ViSolve informs customers to keep their setup ready. The list of required software components are given in the Install/Conf ViCache+Filter document.</p>
                <p><strong className="text-gray-900">Step 5 :</strong> 'Email' and 'IM' will be the primary modes of communication. After the setup is ready email us your IM id to <a href="mailto:squid_support@visolve.com" className="text-blue-600 font-semibold underline">squid_support@visolve.com</a>. The assigned ViSolve consultant/engineer will also be in touch with you via other means (telephone, fax) as necessary.</p>
                <p><strong className="text-gray-900">Step 6 :</strong> Once the deployment base has been setup, provide us with a web-access document which should contain the physical and logical network diagram of the current (and the proposed) setup. This is to enable our support engineers to meet your needs and to provide you a customized solution. Then allow us to access your network to install and configure ViCache+Filter.</p>
                <p><strong className="text-gray-900">Step 7 :</strong> ViCache+Filter will be deployed on your hardware.</p>
                <p><strong className="text-gray-900">Step 8 :</strong> ViSolve engineers will email you once the installation is completed.</p>
              </div>
            </div>

            {/* System Requirements */}
            <div className="space-y-6 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#215B87]">System Requirements</h3>
              
              {/* Hardware Table */}
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full text-left text-sm text-gray-700">
                  <thead className="bg-[#0B2A4A] text-white">
                    <tr>
                      <th colSpan="2" className="px-4 py-3 font-semibold">Recommended Hardware Specifications - For Optimal Performance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white">
                      <td className="px-4 py-2.5 font-medium text-gray-900 w-1/3">Processor</td>
                      <td className="px-4 py-2.5">3GHz X86 or higher</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2.5 font-medium text-gray-900">Hard Disk Space</td>
                      <td className="px-4 py-2.5">4 X 73GB</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2.5 font-medium text-gray-900">RAM</td>
                      <td className="px-4 py-2.5">4GB</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Software Table */}
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="w-full text-left text-sm text-gray-700">
                  <thead className="bg-[#0B2A4A] text-white">
                    <tr>
                      <th colSpan="2" className="px-4 py-3 font-semibold">Recommended Software Specifications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white">
                      <td className="px-4 py-2.5 font-medium text-gray-900 w-1/3">Operating System</td>
                      <td className="px-4 py-2.5">Fedora Core 2 and above</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2.5 font-medium text-gray-900">Squid</td>
                      <td className="px-4 py-2.5">2.x / 3.x</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2.5 font-medium text-gray-900">Python</td>
                      <td className="px-4 py-2.5">v2.4.2</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2.5 font-medium text-gray-900">PHP</td>
                      <td className="px-4 py-2.5">v4.3.9</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2.5 font-medium text-gray-900">PERL</td>
                      <td className="px-4 py-2.5">v5.8.5</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2.5 font-medium text-gray-900">OpenLDAP</td>
                      <td className="px-4 py-2.5">
                        openldap (if user based)<br />
                        openldap-2.1.29-1<br />
                        openldap-devel-2.1.29-1<br />
                        openldap-clients-2.1.29-1<br />
                        openldap-servers-2.1.29-1
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2.5 font-medium text-gray-900">Perl GD's</td>
                      <td className="px-4 py-2.5">
                        perl-GDTextUtil-0.86-0<br />
                        gd-2.0.28-1<br />
                        perl-GD-2.30-2.1<br />
                        zlib-1.2.1.2-1<br />
                        libpng-1.2.7-1<br />
                        perl-GDGraph-1.43-0
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 italic text-sm">
                <strong className="text-gray-900">NOTE:</strong> We will help you to install all these software components, if you do not have them installed already.
              </p>
            </div>

            {/* Contact Callout */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-800 text-sm md:text-base">
                For questions, customized deployment, or support regarding ViCache+Filter, email us at{' '}
                <a href="mailto:squid_support@visolve.com" className="text-blue-600 font-semibold underline">
                  squid_support@visolve.com
                </a>{' '}
                or call <span className="font-semibold text-gray-900">+1 (408) 850 2243</span>.
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
                <li><Link to="/services/technical-writing" className="hover:text-[#f16d05]">Technical Writing Services</Link></li>
                <li><Link to="/services/virtualization" className="hover:text-[#f16d05]">Virtualization Services</Link></li>
                <li><Link to="/services/opensource" className="hover:text-[#f16d05]">OpenSource Services</Link></li>
                <li><Link to="/services/security" className="hover:text-[#f16d05]">Enterprise Security</Link></li>
                <li><Link to="/services/web-caching" className="hover:text-[#f16d05]">Web Caching (Squid)</Link></li>
                <li><Link to="/products/vicache-filter" className="font-bold text-[#f16d05]">ViCache+Filter Solution</Link></li>
                <li><Link to="/services/demo-portals" className="hover:text-[#f16d05]">Solutions Demo Portals</Link></li>
                <li><Link to="/services/iot" className="hover:text-[#f16d05]">Internet of Things (IoT)</Link></li>
                <li><Link to="/services/database" className="hover:text-[#f16d05]">Database Services</Link></li>
                <li><Link to="/services/hadoop-analytics" className="hover:text-[#f16d05]">Hadoop/Business Analytics</Link></li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg space-y-4 shadow-sm">
              <h4 className="font-bold text-[#215B87] uppercase tracking-wider text-sm border-b pb-2">
                Healthcare IT
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link to="/services/openemr" className="hover:text-[#f16d05]">OpenEMR Solutions</Link></li>
                <li><Link to="/services/interoperability" className="hover:text-[#f16d05]">Interoperability Solutions</Link></li>
                <li><Link to="/services/vista-ehr" className="hover:text-[#f16d05]">VistA EHR Solutions</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ViCacheFilter;

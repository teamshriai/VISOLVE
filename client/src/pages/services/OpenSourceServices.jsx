import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';

function OpenSourceServices() {
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-gray-600">
          <Link to="/services" className="hover:text-[#f16d05]">Services</Link>
          <span className="mx-2">&gt;&gt;</span>
          <Link to="/services/enterprise-it" className="hover:text-[#f16d05]">Enterprise IT</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span className="text-gray-800 font-medium">OpenSource Services</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">OpenSource Services</h1>
          <p className="text-blue-100 mt-2 text-base md:text-lg">
            Custom open source development, integration, migration, and 24x7 support
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Article Content */}
          <div className="md:col-span-8 space-y-8">
            {/* Introduction */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p>
                ViSolve is committed to helping organizations take full advantage of open source and the value they realize from open source. Low Total Cost of Ownership (TCO) seems to be an apparent motive for choosing open source, however there are other potential advantages offering significant value such as improved software quality, reliability, security, flexible development and deployments, customizable business solutions that has the CXOs and key IT decision makers considering open source for their enterprises and healthcare organizations.
              </p>
              <p>
                Our team has extensive experience, knowledge, skills and expertise in open source and we offer a comprehensive array of services to address all your open source needs.
              </p>
            </div>

            {/* ViSolve's Involvement with Open Source */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#215B87]">ViSolve&apos;s involvement with open source:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base leading-relaxed">
                <li>
                  Customized build/support of open source products (Apache, OpenSSL, ModSecurity) and other dependent packages for Wells Fargo Bank
                </li>
                <li>
                  Improved the performance of MySQL significantly on HP-UX and contributed the code back to the community
                </li>
                <li>
                  Built, released and supported over 60 open source products for a leading system vendor in the world
                </li>
                <li>
                  Thorough knowledge in open source products (JBOSS, MySQL, Postgres, Apache, Linux, Glassfish), and tools like Eclipse, Selenium, Git, OpenStack with expertise in PHP and Java
                </li>
                <li>
                  Extensive expertise in Design, Storage, Network, Security, Database, Scalability, High Availability and other OpenStack-based services
                </li>
                <li>
                  Board member of OpenEMR, a leading open source EMR for physician practices. ViSolve has made significant technical contributions towards Meaningful Use compliance and certification of OpenEMR
                </li>
                <li>
                  Member of OSEHRA - Open Source Electronic Health Record Alliance aimed at promoting and enhancing VistA EHR in the cloud
                </li>
                <li>
                  Active participation in other open source communities including Source Forge, Hardhats, MongoDB, Hadoop, OpenStack, Web Caching (Squid), MySQL etc.,
                </li>
                <li>
                  Open source consulting including security advisory services, roadmap planning, Proofs of Concepts (PoC), custom development of applications and maintenance services, application integration, migrating and porting new technology
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base pt-2">
                We distinguish ourselves from others by providing a combination of expert consultants and senior application developers with highly experienced infrastructure engineers. ViSolve&apos;s 24x7 support and remote system management will help you in reducing your IT infrastructure cost.
              </p>
            </div>

            {/* Custom Stack Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#215B87]">Custom Stack Services</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                IT departments are deploying solution stacks that include proprietary and open source products to meet their needs. Each IT department has defined their own unique set of applications and versions. It takes considerable time and effort to certify and maintain a specific combination to enable a stable production environment.
              </p>
              
              <h4 className="text-lg font-semibold text-[#e46c0a]">What We Offer</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                <li>
                  Web-suite: Apache, OpenSSH, OpenSSL
                </li>
                <li>
                  Managed private cloud: VMware / Linux / <Link to="/services/cloud" className="text-blue-600 hover:underline">OpenStack</Link>
                </li>
                <li>
                  Virtualization: VMware / Xen / KVM
                </li>
                <li>
                  Production / Development Database: VMware / Red Hat Linux / <Link to="/services/database" className="text-blue-600 hover:underline">Oracle or MySQL</Link>
                </li>
                <li>
                  Middleware &amp; DB: JBOSS / <Link to="/services/database" className="text-blue-600 hover:underline">PostgreSQL</Link>
                </li>
                <li>
                  Development and QA: Eclipse, version control such as Subversion and GIT
                </li>
              </ul>
            </div>

            {/* Specific Support Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#215B87]">Specific Support Services</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                <li>
                  Custom product build to meet your requirements. We create custom builds in our lab to meet your specifications – matching your development or production environment
                </li>
                <li>
                  Deliver binaries as well as source code and compile/build instructions per open source standards
                </li>
                <li>
                  Delivery periodic patch and vulnerability notifications
                </li>
                <li>
                  Support by email
                </li>
              </ul>
            </div>

            {/* UNIX/Linux Based Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#215B87]">UNIX/Linux Based Services</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                For all your UNIX/Linux based services, ViSolve provides software consulting and support services backed by a decade of experience in providing value-added solutions largely through open source products and technologies.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                ViSolve has integrated open source products and technologies to create high-value solutions that cover technology domains such as security, database, network, email, Java development environments, and application and web services.
              </p>

              <h4 className="text-lg font-semibold text-[#e46c0a]">What We Offer</h4>
              <p className="text-gray-700 text-sm md:text-base">
                ViSolve offers host of services to software developers and IT professionals who are either already in a HP-UX or Linux environment or are considering migrating to Linux environment.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                <li>
                  <Link to="/services/migration" className="text-blue-600 hover:underline font-medium">Migration</Link>
                </li>
                <li>Solution Support</li>
                <li>Quality Assurance</li>
                <li>Software Development</li>
                <li>Testing and Deployment</li>
                <li>Benchmarking and Sizing</li>
                <li>System and Network Management</li>
              </ul>
            </div>

            {/* 24x7 Support */}
            <div className="space-y-4 bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#215B87]">24x7 Support</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                We engage world class support team to provide 24x7 comprehensive assistance for your support requests. Contact us to chart out flexible and customized support plans for all your open source based development, customization and support projects.
              </p>
              <p className="text-gray-800 text-sm md:text-base font-medium pt-2">
                To know more about our support, please contact us by email at{' '}
                <a href="mailto:services@visolve.com" className="text-[#f16d05] font-semibold underline">
                  services@visolve.com
                </a>{' '}
                or call us at{' '}
                <a href="tel:+14088502243" className="text-[#f16d05] font-semibold underline">
                  +1 (408) 850 2243
                </a>.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-6">
            {/* Enterprise IT Navigation */}
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
                <li><Link to="/services/opensource" className="font-bold text-[#f16d05]">OpenSource Services</Link></li>
                <li><Link to="/services/demo-portals" className="hover:text-[#f16d05]">Solutions Demo Portals</Link></li>
                <li><Link to="/services/iot" className="hover:text-[#f16d05]">Internet of Things (IoT)</Link></li>
                <li><Link to="/services/database" className="hover:text-[#f16d05]">Database Services</Link></li>
                <li><Link to="/services/hadoop-analytics" className="hover:text-[#f16d05]">Hadoop/Business Analytics</Link></li>
              </ul>
            </div>

            {/* Healthcare IT Navigation */}
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg space-y-4 shadow-sm">
              <h4 className="font-bold text-[#215B87] uppercase tracking-wider text-sm border-b pb-2">
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
              <div className="flex items-center justify-center space-x-2 text-[#215B87]">
                <FiPhone className="text-xl" />
                <a href="tel:+14088502243" className="font-bold text-lg hover:underline">+1 (408) 850 2243</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OpenSourceServices;

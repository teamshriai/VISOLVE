import React from 'react';
import { Link } from 'react-router-dom';

function QACertification() {
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-gray-600">
          <Link to="/services" className="hover:text-[#f16d05]">Services</Link>
          <span className="mx-2">&gt;&gt;</span>
          <Link to="/services/enterprise-it" className="hover:text-[#f16d05]">Enterprise IT</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span className="text-gray-800 font-medium">Product/Solution QA Certification</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Product/Solution QA Certification</h1>
          <p className="text-blue-100 mt-2 text-base md:text-lg">
            Automated QA templates, reusable Open Source components, and rapid product certification
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-8">
            {/* Overview */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#215B87]">Product/Solution QA Certification</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                With the increase in complexity of software development and consumer demand, development teams are under tremendous pressure to deliver new software products, applications and updates at a swift pace. Nevertheless the role of QA has become even more significant to achieve impeccable quality rapidly.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Over the years, ViSolve has evolved as one of the top QA Services provider for businesses looking to certify their products or solutions quickly to achieve faster time to market. Here we are with <strong className="text-gray-900">automated QA templates created using reusable Open Source components and with very little customization, we can help to certify your product or any part of your solution stack in no time.</strong>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-50 p-4 border border-slate-200 rounded-lg">
                <div className="md:col-span-7 space-y-3 text-sm text-gray-700 leading-relaxed">
                  <p>
                    Unlike manual software testing, our experienced QA Engineers while taking advantage of industry leading QA automation tools, technologies and frameworks such as Cypress, Selenium etc., empowers businesses to speed up workflows and maximize the team and process efficiency by ensuring precision through speedy, seamless, automated test suites.
                  </p>
                  <p>
                    It is possible to even simulate several virtual users interacting with the application with a well-planned automation test suite.
                  </p>
                </div>
                <div className="md:col-span-5 text-center">
                  <img
                    src="/assets/images/QAmain.png"
                    alt="QA Certification Automation"
                    className="max-w-full h-auto mx-auto rounded shadow-sm border border-gray-200"
                  />
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base pt-2">
                With extensive expertise in QA and Software Development life cycle and in-depth domain knowledge across various industries, our customizable QA automation solutions and services are tailor-made to suit your specific business needs and project requirements. It proves to be very useful during CI/CD where software is developed, tested, and deployed multiple times per day, rather than in stages. It also enables frequent testing which makes it easy to spot problems on the move.
              </p>
            </div>

            {/* How Automated QA Benefits */}
            <div className="space-y-4 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#215B87]">How Automated QA can benefit your company?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7">
                  <ol className="list-decimal pl-6 space-y-1.5 text-gray-700 text-sm md:text-base font-medium">
                    <li>Faster feedback cycle</li>
                    <li>Improved reliability and accuracy</li>
                    <li>Eliminates the chances of human-prone errors</li>
                    <li>Increases test coverage</li>
                    <li>Ideal for large-scale software testing</li>
                    <li>Saves time in regression testing</li>
                    <li>Reusable test scripts</li>
                    <li>Determines the stability of your build</li>
                    <li>Faster time to market</li>
                    <li>Reduced business expenses</li>
                    <li>Standardized and more structured processes</li>
                  </ol>
                </div>
                <div className="md:col-span-5 text-center">
                  <img
                    src="/assets/images/QAmain1.png"
                    alt="QA Process Benefits"
                    className="max-w-full h-auto mx-auto rounded shadow-sm border border-gray-200"
                  />
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base pt-2">
                It also helps in the validation of various phases of the software project and improves the overall efficiency of the project and teams while adding great value for repeated execution testing and successive development cycles.
              </p>
            </div>

            {/* Why Choose ViSolve */}
            <div className="space-y-4 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#215B87]">Why should you choose ViSolve as your QA Partner?</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                <li>Expert Teams with in-depth experience in developing Automation Testing Framework &amp; Tools for diverse products &amp; solutions based on different programming languages/systems.</li>
                <li>Hands on experience in the industry leading Automation Testing Tools such as Selenium, Cypress, Protractor, Jasmine, Karma etc.</li>
                <li>Renowned for Performance certification of the world’s leading enterprise-class, type-1 hypervisor Kernel including Core components such as Core, Storage and Network from release to release.</li>
                <li>Developed in-house, an Automation Product and Solution Certification Tool for a leading Open Source Healthcare Application.</li>
              </ul>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base pt-2">
                On the whole, our customizable automation testing templates for Product/Solution QA certification helps companies to save time and money by accelerating the QA process and delivers very high levels of accuracy. Our Automation Testing Templates and Frameworks not only add greats value to the overall SDLC but enables QA teams to focus more on expanding the test coverage and perform advanced levels of testing to consistently deliver high quality products/solutions enabling superior business outcomes.
              </p>
            </div>

            {/* Contact Callout */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-800 text-sm md:text-base">
                For more information, please email to{' '}
                <a href="mailto:services@visolve.com" className="text-blue-600 font-semibold underline">
                  services@visolve.com
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
                <li><Link to="/services/qa-certification" className="font-bold text-[#f16d05]">Product/Solution QA Certification</Link></li>
                <li><Link to="/services/virtualization" className="hover:text-[#f16d05]">Virtualization Services</Link></li>
                <li><Link to="/services/opensource" className="hover:text-[#f16d05]">OpenSource Services</Link></li>
                <li><Link to="/services/security" className="hover:text-[#f16d05]">Enterprise Security</Link></li>
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

export default QACertification;

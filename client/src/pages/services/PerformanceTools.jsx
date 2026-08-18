import React from 'react';
import { Link } from 'react-router-dom';

function PerformanceTools() {
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-gray-600">
          <Link to="/services" className="hover:text-[#f16d05]">Services</Link>
          <span className="mx-2">&gt;&gt;</span>
          <Link to="/services/enterprise-it" className="hover:text-[#f16d05]">Enterprise IT</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span className="text-gray-800 font-medium">Performance Tools</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Performance Tools</h1>
          <p className="text-blue-100 mt-2 text-base md:text-lg">
            Performance Engineering, Kernel Certification, and Performance Automation Tools
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-8">
            {/* Overview */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#215B87]">Performance Engineering Overview</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                ViSolve holds a stellar track record in its Performance Engineering journey, with more than a decade of solid experience of several engagements with leading system vendors in the world. The goal of ViSolve’s Performance Engineering and Testing is to ensure that your software product or application is robust enough to handle any extreme workloads and can perform consistently to the highest standards in both normal and extreme load conditions.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Performance must be built into the product; it must not be an afterthought. Our Performance Engineering consultants help companies to quantify ROI by incorporating strategies during the software design stage to avoid situations where applications fail to meet end-user expectations during actual use. Make your mobile &amp; web applications robust to handle any extreme workloads.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3 border-t border-gray-200 pt-6">
              <h4 className="text-lg font-bold text-[#496c96]">Some of the benefits of our Performance Engineering Consulting services include:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                <li>Automated Performance Testing Certification for Products/Solutions accelerates time to market</li>
                <li>Helps raise red flags if any, right at the beginning of the Software Development Lifecycle</li>
                <li>Helps save time and money due to performance engineering tests of Prototypes</li>
                <li>Helps significant increase in performance improvements</li>
              </ul>
            </div>

            {/* Kernel Performance Certification */}
            <div className="space-y-3 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#215B87]">Performance Certification for type-1 hypervisor Kernel</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Bare metal hypervisors need to be extremely robust as the IT teams working on virtualized environments are under constant pressure to meet fluctuating customer demands in complex projects. It affects the overall performance and reliability as they consolidate several applications.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                ViSolve continues to be the preferred and approved technology vendor, a significant extension of the US/Indian Performance Engineering Team of the world’s leading Virtualization company. ViSolve’s team of offshore Performance Engineering experts, helps the vendor achieve significant improvements in the performance of their virtualization products. Performance certification of the world’s leading enterprise-class, type-1 hypervisor Kernel for key components such as Core, Storage, and Network from release to release is done by the ViSolve Performance Engineering team.
              </p>
            </div>

            {/* Development of Tools & Dashboard */}
            <div className="space-y-4 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#215B87]">Development of Performance Engineering Tools</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                ViSolve Performance Engineering team has been instrumental in the custom development of a Performance Dashboard Tool to improve the productivity of the development and QA teams with the visual overview of the performance data by tracking performance numbers of new check-ins by developers against previous release(s).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-slate-50 p-4 border border-slate-200 rounded-lg">
                <div className="md:col-span-7 space-y-2 text-sm text-gray-700 leading-relaxed">
                  <p>
                    One of the main objectives of the Performance tool is to analyze and provide the intelligence of the kernel building every night on performance. This tool is used for Performance Automation Engineering for tracking the performance quality of various product releases.
                  </p>
                  <p>
                    This environment is intended for the Performance Automation Engineer's usage for official release regression tracking. While the data is browse-able by people outside of this team, the creation of data is limited to the Performance Automation Engineering team.
                  </p>
                </div>
                <div className="md:col-span-5 text-center">
                  <img
                    src="/assets/images/perfdash_screen.jpg"
                    alt="Performance Dashboard Tool Screen"
                    className="max-w-full h-auto mx-auto rounded border border-gray-300 shadow-sm"
                  />
                </div>
              </div>

              <h4 className="text-base font-bold text-gray-800 pt-2">
                The Performance Dashboard benefits the Development and QA teams while improving productivity and easing performance measurements through:
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                <li>An elegant graphical view representation of each performance test.</li>
                <li>Drag and drop feature for comparison of both tests and runs.</li>
                <li>Maintains different types of snapshots for future comparisons for each release.</li>
                <li>Enables grouping of Users into Teams to enable access rights for a dashboard.</li>
                <li>Ability to add new releases and customize the order of releases.</li>
              </ul>
            </div>

            {/* Performance Engineering Analysis */}
            <div className="space-y-3 border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold text-[#215B87]">Performance Engineering Analysis</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                There are several programs that allow creating a virtual machine (VM) that runs on Mac which makes it possible to run a full version of the Windows operating system on top of the main macOS on Mac. However, with this virtualization technology, the Mac system will need plenty of memory and processor power in order to provide optimal performance - and the virtual machine may not be as fast as an actual physical PC that has its own built-in processor and memory.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                ViSolve’s team of Performance Engineering has hands-on experience in Performance Engineering Analysis for leading-edge Mac Virtualization technologies. This includes performance engineering analysis, performance benchmarking, testing, and providing tuning recommendations for Mac virtualization products. With the increased the number of performance test executions through automation testing and enhanced analysis processes ViSolve team can help customers using mac virtualization technologies to implement performance engineering practices that are required to optimize and achieve higher levels of overall system speed and performance. We enable customers to tune and build performance based on performance objectives and analysis.
              </p>
            </div>

            {/* Contact Callout */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-800 text-sm md:text-base">
                Are you looking for help to structure and execute cost-efficient and high-quality performance engineering best practices? Are you looking for expert consulting to build and certify high-performing products and applications? To talk to our performance engineering team, email{' '}
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
                <li><Link to="/services/performance-tools" className="font-bold text-[#f16d05]">Performance Tools</Link></li>
                <li><Link to="/services/qa-certification" className="hover:text-[#f16d05]">Product/Solution QA Certification</Link></li>
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

export default PerformanceTools;

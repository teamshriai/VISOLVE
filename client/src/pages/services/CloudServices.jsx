import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiCloud,
  FiShield,
  FiServer,
  FiDatabase,
  FiActivity,
  FiCheckCircle,
  FiLock,
  FiLayers,
  FiHeadphones,
  FiChevronRight,
  FiArrowRight,
  FiPhone,
  FiMail,
  FiRefreshCw
} from 'react-icons/fi';
import { useReveal } from '../../hooks/useReveal';

function CloudServices() {
  const ref = useReveal();
  return (
    <div ref={ref} className="w-full bg-white font-sans text-gray-800">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#EAF3F8]/50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-[#55758C]">
          <Link to="/services" className="hover:text-[#155A8A] transition-colors">
            Services
          </Link>
          <span className="mx-2 text-gray-400">&gt;&gt;</span>
          <Link to="/services/enterprise-it" className="hover:text-[#155A8A] transition-colors">
            Enterprise IT
          </Link>
          <span className="mx-2 text-gray-400">&gt;&gt;</span>
          <span className="text-[#08243F] font-semibold">Cloud Services</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-block px-3 py-1 bg-[#FFF7ED] border border-[#FDBA74]/60 rounded-full text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
              Cloud / Healthcare IT Solutions
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08243F] leading-tight tracking-tight">
              Secure Cloud Solutions <br className="hidden sm:inline" />
              Built for Modern Healthcare
            </h1>
            
            <p className="text-[#55758C] text-base sm:text-lg leading-relaxed max-w-2xl">
              ViSolve delivers end-to-end cloud consulting, migration, management, and 24x7 infrastructure support for healthcare providers, health IT vendors, and enterprise organizations worldwide.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-lg shadow-sm hover:shadow transition-all inline-flex items-center space-x-2 text-sm sm:text-base"
              >
                <span>Explore Cloud Solutions</span>
                <FiArrowRight />
              </Link>
              <a
                href="tel:+14086664320"
                className="px-6 py-3 bg-white border border-[#08243F] text-[#08243F] hover:bg-[#EAF3F8]/50 font-semibold rounded-lg transition-colors inline-flex items-center space-x-2 text-sm sm:text-base"
              >
                <FiPhone className="text-[#F59E0B]" />
                <span>+1 408 666 4320</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-50 border border-gray-200 p-4 sm:p-6 shadow-sm overflow-hidden group">
              <img
                src="/assets/images/cloud/cloud_banner.png"
                alt="ViSolve Enterprise Cloud Services"
                className="w-full h-auto object-contain rounded-xl max-h-80 mx-auto transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="mt-4 pt-4 border-t border-gray-200/80 flex items-center justify-between text-xs text-[#55758C]">
                <span className="flex items-center space-x-1.5 font-medium text-[#155A8A]">
                  <FiShield className="text-[#2878A8]" />
                  <span>Enterprise Security</span>
                </span>
                <span className="flex items-center space-x-1.5 font-medium text-[#0D3557]">
                  <FiServer className="text-[#0D3557]" />
                  <span>OpenStack / AWS / Hybrid</span>
                </span>
                <span className="flex items-center space-x-1.5 font-medium text-[#08243F]">
                  <FiActivity className="text-[#EA580C]" />
                  <span>24x7 Monitoring</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Value Strip */}
      <section className="bg-[#EAF3F8] border-b border-blue-200/60 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 p-2">
              <FiShield className="text-2xl text-[#155A8A] shrink-0" />
              <div className="text-left">
                <p className="font-bold text-sm sm:text-base text-[#08243F]">Secure Infrastructure</p>
                <p className="text-xs text-[#55758C]">Hardened Compliance & Auditing</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 p-2">
              <FiActivity className="text-2xl text-[#F97316] shrink-0" />
              <div className="text-left">
                <p className="font-bold text-sm sm:text-base text-[#08243F]">High Availability</p>
                <p className="text-xs text-[#55758C]">Auto-Scaling & Disaster Recovery</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 p-2">
              <FiCheckCircle className="text-2xl text-[#2878A8] shrink-0" />
              <div className="text-left">
                <p className="font-bold text-sm sm:text-base text-[#08243F]">Healthcare Ready</p>
                <p className="text-xs text-[#55758C]">Clinical Workflow Alignment</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 p-2">
              <FiLayers className="text-2xl text-[#EA580C] shrink-0" />
              <div className="text-left">
                <p className="font-bold text-sm sm:text-base text-[#08243F]">Scalable Cloud</p>
                <p className="text-xs text-[#55758C]">Vendor-Neutral Architecture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Area */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Main Body (8 Cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Cloud Consulting */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#EAF3F8] border border-[#2878A8]/30 rounded-lg text-[#155A8A]">
                  <FiCloud className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-[#0D3557]">Cloud Consulting</h2>
              </div>
              
              <p className="text-[#55758C] leading-relaxed text-base">
                ViSolve helps enterprises, SMBs, health IT vendors and healthcare providers towards successful cloud adoption through its cloud consulting services. We help customers identify opportunities for current IT environments to leverage advantages of the cloud including deployment models such as hybrid clouds that provides best of both worlds.
              </p>
              <p className="text-[#55758C] leading-relaxed text-base">
                Our vendor neutral cloud consulting services span from defining a cloud strategy roadmap, assessing readiness for cloud adoption, determining suitability of IT resources for cloud migration, and orchestrating the creation of the complete cloud infrastructure required for business applications.
              </p>
              <p className="text-[#55758C] leading-relaxed text-base">
                We recommend solutions that ensure high compliance and security, reduced Total Cost of Ownership (TCO), accelerated time to market, improved customer experiences, and virtualized processing of mission-critical applications.
              </p>
            </div>

            {/* Cloud Solutions Capabilities Cards Grid */}
            <div id="solutions" className="space-y-6 pt-4 border-t border-gray-200">
              <div>
                <h3 className="text-2xl font-bold text-[#0D3557]">Cloud Capabilities & Solutions</h3>
                <p className="text-[#55758C] text-sm mt-1">
                  Engineered to meet stringent operational, security, and scalability demands.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="v-card-hover bg-white p-6 rounded-xl border border-gray-200 hover:border-[#2878A8]/50 hover:shadow-md transition-all space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EAF3F8] border border-[#2878A8]/20 flex items-center justify-center text-[#155A8A] text-xl font-bold">
                    <FiCloud />
                  </div>
                  <h4 className="font-bold text-[#155A8A] text-lg">Cloud Consulting & Strategy</h4>
                  <p className="text-[#55758C] text-sm leading-relaxed">
                    Roadmap creation, TCO evaluation, readiness assessments, and platform selection tailored to healthcare and IT workloads.
                  </p>
                </div>

                <div className="v-card-hover bg-white p-6 rounded-xl border border-gray-200 hover:border-[#2878A8]/50 hover:shadow-md transition-all space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF7ED] border border-[#FDBA74]/50 flex items-center justify-center text-[#EA580C] text-xl font-bold">
                    <FiRefreshCw />
                  </div>
                  <h4 className="font-bold text-[#155A8A] text-lg">Seamless Cloud Migration</h4>
                  <p className="text-[#55758C] text-sm leading-relaxed">
                    Migrate servers, databases, and application suites from physical or virtual environments to target cloud infrastructure with zero downtime.
                  </p>
                </div>

                <div className="v-card-hover bg-white p-6 rounded-xl border border-gray-200 hover:border-[#2878A8]/50 hover:shadow-md transition-all space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EAF3F8] border border-[#2878A8]/20 flex items-center justify-center text-[#2878A8] text-xl font-bold">
                    <FiServer />
                  </div>
                  <h4 className="font-bold text-[#155A8A] text-lg">OpenStack & AWS Deployment</h4>
                  <p className="text-[#55758C] text-sm leading-relaxed">
                    Expert deployment and custom configuration of open-source OpenStack, Xen Cloud Platform (XCP), and AWS public/private models.
                  </p>
                </div>

                <div className="v-card-hover bg-white p-6 rounded-xl border border-gray-200 hover:border-[#2878A8]/50 hover:shadow-md transition-all space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EAF3F8] border border-[#2878A8]/20 flex items-center justify-center text-[#0D3557] text-xl font-bold">
                    <FiActivity />
                  </div>
                  <h4 className="font-bold text-[#155A8A] text-lg">Cloud Management & Auto-Scaling</h4>
                  <p className="text-[#55758C] text-sm leading-relaxed">
                    Auto-scaling policies, failover management, continuity backup, disaster recovery, and resource optimization.
                  </p>
                </div>

                <div className="v-card-hover bg-white p-6 rounded-xl border border-gray-200 hover:border-[#2878A8]/50 hover:shadow-md transition-all space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EAF3F8] border border-[#2878A8]/20 flex items-center justify-center text-[#155A8A] text-xl font-bold">
                    <FiShield />
                  </div>
                  <h4 className="font-bold text-[#155A8A] text-lg">Security & Audit Compliance</h4>
                  <p className="text-[#55758C] text-sm leading-relaxed">
                    Auditing, access management, incident response, and hardening configurations tailored to regulatory requirements.
                  </p>
                </div>

                <div className="v-card-hover bg-white p-6 rounded-xl border border-gray-200 hover:border-[#2878A8]/50 hover:shadow-md transition-all space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FFF7ED] border border-[#FDBA74]/50 flex items-center justify-center text-[#EA580C] text-xl font-bold">
                    <FiHeadphones />
                  </div>
                  <h4 className="font-bold text-[#155A8A] text-lg">24x7x365 Technical Support</h4>
                  <p className="text-[#55758C] text-sm leading-relaxed">
                    Round-the-clock expert support, continuous monitoring, and proactive maintenance to guarantee system availability.
                  </p>
                </div>
              </div>
            </div>

            {/* Healthcare Cloud Value / Two-Column Section */}
            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-4">
                  <h3 className="text-2xl font-bold text-[#0D3557]">Built for Healthcare Infrastructure</h3>
                  <p className="text-[#55758C] text-sm sm:text-base leading-relaxed">
                    ViSolve brings over a decade of deep domain expertise in open-source healthcare systems, helping clinical networks and software vendors achieve agility without compromising data security.
                  </p>

                  <ul className="space-y-2 text-sm text-[#55758C]">
                    <li className="flex items-start space-x-2.5">
                      <FiCheckCircle className="text-[#EA580C] text-lg mt-0.5 shrink-0" />
                      <span><strong className="text-[#08243F]">Reduced TCO & Cost Optimization:</strong> Lower hardware costs and operational overhead.</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <FiCheckCircle className="text-[#F97316] text-lg mt-0.5 shrink-0" />
                      <span><strong className="text-[#08243F]">High Availability & Business Continuity:</strong> 24x7 uptime for clinical applications.</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <FiCheckCircle className="text-[#155A8A] text-lg mt-0.5 shrink-0" />
                      <span><strong className="text-[#08243F]">Vendor-Neutral Consulting:</strong> Strategic guidance for hybrid, public, and private clouds.</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <FiCheckCircle className="text-[#2878A8] text-lg mt-0.5 shrink-0" />
                      <span><strong className="text-[#08243F]">Risk Mitigation:</strong> Comprehensive pre-migration planning, testing, and pilot PoC.</span>
                    </li>
                  </ul>
                </div>

                <div className="md:col-span-5">
                  <div className="bg-white p-3 border border-gray-200 rounded-xl shadow-xs">
                    <img
                      src="/assets/images/cloud/Cloud_2.png"
                      alt="Deployment and Management Services"
                      className="w-full h-auto object-contain rounded-lg"
                    />
                    <p className="text-center text-xs text-[#55758C] mt-2 font-medium">
                      Cloud Deployment & Management Architecture
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Security Section (Dark Navy Section) */}
            <div className="bg-[#08243F] text-white rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <div className="inline-block px-3 py-1 bg-blue-900/60 border border-blue-700/50 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FDBA74]">
                  Security & Reliability
                </div>
                <h3 className="text-2xl font-bold mt-2 text-white">Enterprise Cloud Infrastructure Protection</h3>
                <p className="text-[#EAF3F8] text-sm mt-1 max-w-2xl">
                  Protect your healthcare and enterprise environment with secure cloud infrastructure and controlled access protocols.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#0D3557] p-5 rounded-xl border border-blue-900/60 space-y-2">
                  <FiLock className="text-2xl text-[#F97316]" />
                  <h4 className="font-bold text-white text-base">Controlled Access</h4>
                  <p className="text-[#EAF3F8] text-xs leading-relaxed">
                    Granular role-based access controls, identity auditing, and continuous incident management.
                  </p>
                </div>

                <div className="bg-[#0D3557] p-5 rounded-xl border border-blue-900/60 space-y-2">
                  <FiDatabase className="text-2xl text-[#F59E0B]" />
                  <h4 className="font-bold text-white text-base">Disaster Recovery</h4>
                  <p className="text-[#EAF3F8] text-xs leading-relaxed">
                    Automated backup snapshots, failover mechanisms, and multi-region redundancy.
                  </p>
                </div>

                <div className="bg-[#0D3557] p-5 rounded-xl border border-blue-900/60 space-y-2">
                  <FiActivity className="text-2xl text-[#EA580C]" />
                  <h4 className="font-bold text-white text-base">Proactive Monitoring</h4>
                  <p className="text-[#EAF3F8] text-xs leading-relaxed">
                    Real-time monitoring tools (e.g. Open Source Icinga / Nagios) ensuring high infrastructure health.
                  </p>
                </div>
              </div>
            </div>

            {/* Enterprise CTA Card */}
            <div className="bg-[#08243F] text-white rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-md">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Ready to Modernize Your Healthcare Infrastructure?
              </h3>
              <p className="text-[#EAF3F8] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Contact ViSolve’s cloud services team to schedule a technical cloud assessment or discuss your custom deployment requirements.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-lg shadow-sm hover:shadow transition-all text-sm sm:text-base inline-flex items-center space-x-2"
                >
                  <span>Talk to Our Cloud Experts</span>
                  <FiArrowRight />
                </Link>
                <a
                  href="mailto:services@visolve.com"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base inline-flex items-center space-x-2 border border-white/20"
                >
                  <FiMail className="text-[#FDBA74]" />
                  <span>services@visolve.com</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Request A Demo Widget */}
            <div className="bg-white border border-gray-200 p-5 rounded-2xl space-y-3 shadow-xs text-center">
              <h4 className="font-bold text-[#08243F] uppercase tracking-wider text-xs border-b border-gray-100 pb-2 text-left">
                Request A Demo
              </h4>
              <Link to="/contact" className="block group">
                <img
                  src="/assets/images/cloud_demo.png"
                  alt="Request Cloud Demo"
                  className="mx-auto rounded-lg hover:opacity-90 transition-opacity cursor-pointer max-w-full h-auto border border-gray-200"
                />
              </Link>
              <p className="text-xs text-[#55758C] text-left pt-1">
                Explore our live cloud environment & interactive healthcare solution portals.
              </p>
            </div>

            {/* Expert Contact Widget */}
            <div className="bg-[#EAF3F8] border border-blue-200/80 p-5 rounded-2xl flex items-center space-x-4 shadow-xs">
              <img
                src="/assets/images/side_call.jpg"
                alt="Talk to our experts"
                className="w-12 h-12 rounded-full object-cover shrink-0 border border-blue-300"
              />
              <div>
                <p className="text-xs font-semibold text-[#0D3557] uppercase tracking-wide">Talk to our experts</p>
                <a href="tel:+14086664320" className="text-base font-bold text-[#08243F] hover:text-[#155A8A] transition-colors block">
                  +1 408 666 4320
                </a>
              </div>
            </div>

            {/* Enterprise IT Services Sidebar Menu */}
            <div className="bg-white border border-gray-200 p-6 rounded-2xl space-y-4 shadow-xs">
              <h4 className="font-bold text-[#08243F] uppercase tracking-wider text-xs border-b border-gray-100 pb-2">
                Enterprise IT Services
              </h4>
              <ul className="space-y-2.5 text-sm text-[#55758C]">
                <li>
                  <Link to="/services/migration" className="hover:text-[#155A8A] transition-colors flex items-center justify-between">
                    <span>Migration Services</span>
                    <FiChevronRight className="text-gray-400 text-xs" />
                  </Link>
                </li>
                <li>
                  <Link to="/services/cloud" className="font-bold text-[#08243F] flex items-center justify-between">
                    <span>Cloud Services</span>
                    <FiChevronRight className="text-[#155A8A] text-xs" />
                  </Link>
                </li>
                <li>
                  <Link to="/services/performance-tools" className="hover:text-[#155A8A] transition-colors flex items-center justify-between">
                    <span>Performance Tools</span>
                    <FiChevronRight className="text-gray-400 text-xs" />
                  </Link>
                </li>
                <li>
                  <Link to="/services/qa-certification" className="hover:text-[#155A8A] transition-colors flex items-center justify-between">
                    <span>Product/Solution QA</span>
                    <FiChevronRight className="text-gray-400 text-xs" />
                  </Link>
                </li>
                <li>
                  <Link to="/services/virtualization" className="hover:text-[#155A8A] transition-colors flex items-center justify-between">
                    <span>Virtualization Services</span>
                    <FiChevronRight className="text-gray-400 text-xs" />
                  </Link>
                </li>
                <li>
                  <Link to="/services/opensource" className="hover:text-[#155A8A] transition-colors flex items-center justify-between">
                    <span>OpenSource Services</span>
                    <FiChevronRight className="text-gray-400 text-xs" />
                  </Link>
                </li>
                <li>
                  <Link to="/services/demo-portals" className="hover:text-[#155A8A] transition-colors flex items-center justify-between">
                    <span>Solution Demo Portals</span>
                    <FiChevronRight className="text-gray-400 text-xs" />
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

export default CloudServices;

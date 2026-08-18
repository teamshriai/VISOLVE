import { Link } from 'react-router-dom';
import {
  FiFileText,
  FiGitMerge,
  FiCode,
  FiUsers,
  FiArrowUpRight,
  FiMail,
  FiChevronRight
} from 'react-icons/fi';
import { useReveal } from '../../hooks/useReveal';

const services = [
  {
    id: 'emr',
    number: '01',
    title: 'Electronic Medical Records',
    description:
      'Consulting, Customization, Development, Implementation, QA and Support of open source based EMRs like OpenEMR, VistA and Tolven.',
    icon: FiFileText,
    iconColor: 'text-[#155A8A]', // Corporate Blue
    link: '/services/emr',
  },
  {
    id: 'interop',
    number: '02',
    title: 'Healthcare Interoperability',
    description:
      'Connecting/integrating disparate systems - HL7, DICOM, CCD/CCR, HIE, Lab-Physician Interoperability Solutions, EMR-PMS integration and medical device connectivity.',
    icon: FiGitMerge,
    iconColor: 'text-[#2878A8]', // Medium Blue
    link: '/services/interoperability',
  },
  {
    id: 'engineering',
    number: '03',
    title: 'Healthcare Software Engineering',
    description:
      'We co-engineer software applications or develop from scratch as per the unique requirements of our clients. Strengthen your expertise by leveraging on our resources.',
    icon: FiCode,
    iconColor: 'text-[#0D3557]', // Midnight Blue
    link: '/contact',
  },
  {
    id: 'professional',
    number: '04',
    title: 'Healthcare Professional Services',
    description:
      'Product implementation, custom development, upgrades, monitoring and 24x7 support. Healthcare professional services that you can count on.',
    icon: FiUsers,
    iconColor: 'text-[#55758C]', // Slate Blue
    link: '/contact',
  },
];

const rowStagger = ["v-stagger-1", "v-stagger-2", "v-stagger-3", "v-stagger-4"];

function Services() {
  const ref = useReveal();
  return (
    <div ref={ref} className="w-full bg-white font-sans text-gray-800">
      {/* Breadcrumb Navigation */}
      <div className="bg-[#EAF3F8]/50 border-b border-gray-200 py-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-sm text-[#55758C]">
          <Link to="/services" className="hover:text-[#155A8A] transition-colors">
            Services
          </Link>
          <span className="mx-2 text-gray-400">&gt;&gt;</span>
          <span className="text-[#08243F] font-semibold">Healthcare IT Services</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-14 space-y-10">
        
        {/* Page Header */}
        <div className="v-reveal v-stagger-1 space-y-3 border-b border-gray-200 pb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
            Enterprise Healthcare Solutions
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#08243F] tracking-tight">
            Healthcare IT Services to Meet Your Business Need
          </h1>
          <div className="w-16 h-1 bg-[#F97316] rounded-full mt-2" />
        </div>

        {/* Editorial Service Rows with Multi-Blue Hierarchy */}
        <div className="divide-y divide-gray-200/90 border-t border-b border-gray-200">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={service.link}
                className={`v-reveal ${rowStagger[i]} group relative flex flex-col md:flex-row md:items-center py-6 sm:py-8 px-3 sm:px-5 transition-all duration-300 hover:bg-[#EAF3F8] rounded-xl space-y-4 md:space-y-0`}
              >
                {/* Left Side: Number & Icon */}
                <div className="flex items-center space-x-4 md:w-1/4 shrink-0">
                  <span className="text-sm font-bold text-[#55758C] group-hover:text-[#08243F] transition-colors w-7">
                    {service.number}
                  </span>
                  <div className={`w-11 h-11 rounded-xl bg-[#EAF3F8] border border-[#2878A8]/20 flex items-center justify-center ${service.iconColor} group-hover:bg-[#FFF7ED] group-hover:border-amber-200/80 transition-all duration-300 group-hover:scale-105 shrink-0`}>
                    <Icon className="text-xl" />
                  </div>
                </div>

                {/* Center: Title & Description */}
                <div className="flex-1 md:pr-6 space-y-1">
                  <h2 className="text-lg sm:text-xl font-bold text-[#0D3557] group-hover:text-[#155A8A] transition-colors flex items-center justify-between md:justify-start">
                    <span>{service.title}</span>
                    <FiArrowUpRight className="md:hidden text-[#55758C] group-hover:text-[#F97316] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-xl" />
                  </h2>
                  <p className="text-sm sm:text-base text-[#55758C] leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Right Side: Action Arrow (Desktop) */}
                <div className="hidden md:flex items-center justify-end w-12 shrink-0">
                  <div className="w-9 h-9 rounded-full bg-white border border-gray-200 group-hover:border-[#F97316]/50 group-hover:bg-[#FFF7ED] flex items-center justify-center transition-all duration-300">
                    <FiArrowUpRight className="text-[#55758C] group-hover:text-[#F97316] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-base" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Contact Information & Partnership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          
          {/* Contact Box */}
          <div className="bg-[#EAF3F8]/60 border border-blue-200/80 rounded-2xl p-6 space-y-3 shadow-2xs">
            <h3 className="text-base font-bold text-[#0D3557] flex items-center space-x-2">
              <FiMail className="text-[#EA580C]" />
              <span>Contact Professional Services</span>
            </h3>
            <p className="text-sm text-[#55758C] leading-relaxed">
              To learn more about our healthcare IT services and custom development, reach out via:
            </p>
            <div className="space-y-1.5 text-sm pt-1">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-[#0D3557]">Email:</span>
                <a
                  href="mailto:services@visolve.com"
                  className="text-[#155A8A] hover:text-[#08243F] font-semibold underline decoration-amber-300/80 transition-colors"
                >
                  services@visolve.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-[#0D3557]">Phone:</span>
                <a
                  href="tel:+14088502243"
                  className="text-[#155A8A] hover:text-[#08243F] font-semibold underline decoration-amber-300/80 transition-colors"
                >
                  +1 (408) 850 2243
                </a>
              </div>
            </div>
          </div>

          {/* Related Info Box */}
          <div className="bg-[#08243F] text-white rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-sm">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FDBA74]">
                Strategic Partnership
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                Healthcare Professional Services Partnership
              </h3>
              <p className="text-[#EAF3F8] text-sm mt-2 leading-relaxed">
                Partner with ViSolve to accelerate your health IT engineering, EHR customization, and interoperability mandates.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#F97316] hover:text-white transition-colors"
            >
              <span>Explore Partnership Options</span>
              <FiChevronRight />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Services;

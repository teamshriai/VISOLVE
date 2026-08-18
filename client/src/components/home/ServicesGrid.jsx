import { Link } from "react-router-dom";
import {
  FiRefreshCw,
  FiActivity,
  FiCloud,
  FiCheckCircle,
  FiLayers,
  FiCode,
  FiShield,
  FiMonitor,
  FiChevronRight
} from "react-icons/fi";
import { useReveal } from "../../hooks/useReveal";

const services = [
  {
    id: 1,
    title: "Migration Service",
    description: "Seamless legacy to cloud & platform migration",
    link: "/services/migration",
    icon: FiRefreshCw,
    iconColor: "text-[#EA580C]",
  },
  {
    id: 2,
    title: "Performance Tools",
    description: "Web caching & system performance optimization",
    link: "/services/performance-tools",
    icon: FiActivity,
    iconColor: "text-[#F97316]",
  },
  {
    id: 3,
    title: "Cloud Services",
    description: "AWS, OpenStack & hybrid cloud hosting",
    link: "/services/cloud",
    icon: FiCloud,
    iconColor: "text-[#F59E0B]",
  },
  {
    id: 4,
    title: "Product/Solution QA",
    description: "Comprehensive software QA & certification",
    link: "/services/qa-certification",
    icon: FiCheckCircle,
    iconColor: "text-[#F59E0B]",
  },
  {
    id: 5,
    title: "Virtualization Services",
    description: "Hypervisor & server virtualization solutions",
    link: "/services/virtualization",
    icon: FiLayers,
    iconColor: "text-[#F97316]",
  },
  {
    id: 6,
    title: "OpenSource Services",
    description: "OpenEMR, Linux & enterprise open source",
    link: "/services/opensource",
    icon: FiCode,
    iconColor: "text-[#EA580C]",
  },
  {
    id: 7,
    title: "Enterprise Security",
    description: "2FA, SSO & identity protection infrastructure",
    link: "/services/security",
    icon: FiShield,
    iconColor: "text-[#C2410C]",
  },
  {
    id: 8,
    title: "Solution Demo Portals",
    description: "Interactive demo environments & portals",
    link: "/services/demo-portals",
    icon: FiMonitor,
    iconColor: "text-[#EA580C]",
  },
];

const staggerClasses = [
  "v-stagger-1",
  "v-stagger-2",
  "v-stagger-3",
  "v-stagger-4",
  "v-stagger-5",
  "v-stagger-6",
  "v-stagger-7",
  "v-stagger-8",
];

function ServicesGrid() {
  const ref = useReveal();

  return (
    <section ref={ref} className="w-full bg-slate-50 border-y border-gray-200 py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
        
        {/* Section Header */}
        <div className="v-reveal v-stagger-1 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200/80 pb-4 gap-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
              Core Enterprise Capabilities
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B2A4A]">
              ViSolve Specialized Services
            </h2>
          </div>
          <Link
            to="/services"
            className="v-link text-xs sm:text-sm font-semibold text-[#0B2A4A] hover:text-[#EA580C] transition-colors flex items-center space-x-1"
          >
            <span>View All Services</span>
            <FiChevronRight className="text-[#F97316]" />
          </Link>
        </div>

        {/* Compact Service Tiles Grid with staggered reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.link}
                className={`v-reveal ${staggerClasses[i]} v-card-hover group relative bg-white border border-gray-200/90 rounded-xl p-4 hover:border-[#FDBA74]/80 flex items-start space-x-3.5`}
              >
                <div className={`w-10 h-10 rounded-lg bg-blue-50/70 border border-blue-100/70 flex items-center justify-center ${item.iconColor} group-hover:bg-[#FFF7ED] group-hover:border-[#FDBA74]/60 transition-colors shrink-0`}>
                  <Icon className="text-lg v-icon-shift" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-[#0B2A4A] group-hover:text-[#EA580C] transition-colors truncate">
                      {item.title}
                    </h3>
                    <FiChevronRight className="text-gray-300 group-hover:text-[#F97316] group-hover:translate-x-0.5 transition-all text-xs shrink-0 ml-1" />
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ServicesGrid;

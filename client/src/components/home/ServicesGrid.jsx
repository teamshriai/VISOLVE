import { Link } from "react-router-dom";
import {
  FiCpu,
  FiHeart,
  FiRefreshCw,
  FiCloud,
  FiLayout,
  FiCheckCircle,
  FiCode,
  FiMonitor,
  FiChevronRight
} from "react-icons/fi";
import { useReveal } from "../../hooks/useReveal";

const services = [
  {
    id: 1,
    title: "AI Healthcare Solutions",
    description:
      "Clinical AI engineering, decision-support interfaces and the healthcare data pipelines underneath them.",
    link: "/services/ai-healthcare",
    icon: FiCpu,
  },
  {
    id: 2,
    title: "OpenEMR",
    description:
      "Customization, implementation and support for OpenEMR, tailored to how your practice actually works.",
    link: "/services/openemr",
    icon: FiHeart,
  },
  {
    id: 3,
    title: "Migration Service",
    description:
      "Seamless legacy to cloud and cross-platform migration, planned so services stay available throughout.",
    link: "/services/migration",
    icon: FiRefreshCw,
  },
  {
    id: 4,
    title: "Cloud Services",
    description:
      "AWS, OpenStack and hybrid cloud hosting, from initial assessment through to ongoing operations.",
    link: "/services/cloud",
    icon: FiCloud,
  },
  {
    id: 5,
    title: "Product / Development Solutions",
    description:
      "Product engineering, platform and backend work, and sustained development capacity for your roadmap.",
    link: "/services/product-development",
    icon: FiLayout,
  },
  {
    id: 6,
    title: "Product / Solution QA",
    description:
      "Comprehensive software QA and certification, covering functional, performance and release validation.",
    link: "/services/qa-certification",
    icon: FiCheckCircle,
  },
  {
    id: 7,
    title: "OpenSource Services",
    description:
      "OpenEMR, Linux and enterprise open source — deployment, customization and long-term maintenance.",
    link: "/services/opensource",
    icon: FiCode,
  },
  {
    id: 8,
    title: "Solution Demo Portals",
    description:
      "Interactive demo environments and portals that let prospects evaluate your solution on their own terms.",
    link: "/services/demo-portals",
    icon: FiMonitor,
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
    <section
      ref={ref}
      className="w-full bg-slate-50 border-y border-gray-200 py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8 md:space-y-10">

        {/* Section header */}
        <div className="v-reveal v-stagger-1 flex flex-col gap-4 border-b border-gray-200/80 pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
              Core Enterprise Capabilities
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#08243F] tracking-tight">
              ViSolve Specialized Services
            </h2>
            <div className="mt-3 w-16 h-1 rounded-full bg-[#F97316]" />
            <p className="mt-4 text-sm sm:text-base text-[#55758C] leading-relaxed">
              AI healthcare engineering, OpenEMR, cloud and migration, product
              development and QA — delivered as managed practices and supported
              end to end by our own team.
            </p>
          </div>
          <Link
            to="/services"
            className="v-link inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[#08243F] transition-colors hover:text-[#EA580C]"
          >
            <span>View All Services</span>
            <FiChevronRight className="text-[#F97316]" strokeWidth={1.5} />
          </Link>
        </div>

        {/* Service tiles — 1 / 2 / 4 across, staggered reveal */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.link}
                className={`v-reveal ${staggerClasses[i]} v-card-hover group flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5 transition-all hover:border-[#2878A8]/40 hover:shadow-md`}
              >
                <span className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#2878A8]/20 bg-[#EAF3F8] text-[#155A8A] transition-colors group-hover:border-[#FDBA74]/60 group-hover:bg-[#FFF7ED] group-hover:text-[#EA580C]">
                  <Icon className="v-icon-shift text-xl" strokeWidth={1.5} />
                </span>

                <h3 className="text-base font-bold leading-snug text-[#08243F] transition-colors group-hover:text-[#155A8A]">
                  {item.title}
                </h3>

                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#55758C]">
                  {item.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#155A8A] transition-colors group-hover:text-[#EA580C]">
                  Learn more
                  <FiChevronRight
                    className="transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                  />
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ServicesGrid;

import { Link } from "react-router-dom";
import {
  FiActivity,
  FiCpu,
  FiDatabase,
  FiShield,
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";
import { useReveal } from "../../hooks/useReveal";

/*
 * AI Healthcare Solutions.
 *
 * TODO(copy): the capability descriptions and the "How we engage" steps below are
 * generic placeholders written to be accurate but non-specific. Replace with the
 * real service wording. No metrics, certifications, client names or delivery
 * claims are asserted anywhere on this page — please keep it that way unless the
 * claim can be substantiated.
 */

const capabilities = [
  {
    icon: FiCpu,
    title: "AI Healthcare Solutions",
    description:
      "Design and delivery of AI components that sit inside healthcare software — model integration, inference services and the APIs that connect them to existing EHR workflows.",
  },
  {
    icon: FiActivity,
    title: "Decision Support Interfaces",
    description:
      "Front-end and service work for tools that surface AI output to care teams, built so results stay reviewable, attributable and easy to act on at the point of care.",
  },
  {
    icon: FiDatabase,
    title: "Healthcare Data Pipelines",
    description:
      "Ingestion, normalisation and storage for healthcare and research data, including HL7 and FHIR interfaces, so downstream models work from consistent inputs.",
  },
  {
    icon: FiShield,
    title: "Privacy-Conscious Architecture",
    description:
      "Access control, audit trails and data-handling patterns designed for systems that process patient information, applied from the architecture stage rather than retrofitted.",
  },
];

const engagement = [
  {
    step: "01",
    title: "Scope",
    description:
      "We review the care workflow, the data available to it and the constraints you are working under, then agree what is worth building first.",
  },
  {
    step: "02",
    title: "Build",
    description:
      "Iterative delivery against that scope, with the integration surface to your existing systems treated as part of the work rather than an afterthought.",
  },
  {
    step: "03",
    title: "Operate",
    description:
      "Deployment, monitoring and ongoing support, including the handover material your own team needs to run and extend the system.",
  },
];

function AIHealthcareSolutions() {
  const ref = useReveal();

  return (
    <div ref={ref} className="w-full bg-white font-sans text-gray-800">
      {/* Breadcrumb */}
      <div className="bg-[#EAF3F8]/50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-[#55758C]">
          <Link to="/services" className="hover:text-[#155A8A] transition-colors">
            Services
          </Link>
          <span className="mx-2 text-gray-400">&gt;&gt;</span>
          <span className="text-[#08243F] font-semibold">AI Healthcare Solutions</span>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="v-reveal v-stagger-1 max-w-3xl space-y-5">
          <div className="inline-block px-3 py-1 bg-[#FFF7ED] border border-[#FDBA74]/60 rounded-full text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
            AI Healthcare
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08243F] leading-tight tracking-tight">
            AI Healthcare Solutions
          </h1>
          <p className="text-[#55758C] text-base sm:text-lg leading-relaxed">
            Hands-on support for healthcare teams putting AI into healthcare and
            research software — from the data pipelines underneath it to the
            interfaces care teams actually use.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-lg shadow-sm hover:shadow transition-all inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Talk to us</span>
              <FiArrowRight strokeWidth={1.5} />
            </Link>
            <a
              href="https://www.shri-ai.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white border border-[#08243F] text-[#08243F] hover:bg-[#EAF3F8]/50 font-semibold rounded-lg transition-colors inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Explore the AI Healthcare Solutions</span>
              <FiArrowUpRight strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-slate-50 border-y border-gray-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
          <div className="v-reveal v-stagger-1 max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
              What We Build
            </span>
            <h2 className="text-2xl font-bold text-[#0D3557]">
              Capabilities across the stack
            </h2>
            <p className="text-sm text-[#55758C] leading-relaxed">
              Four areas we take on, individually or as one engagement, depending on
              where your team needs the depth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {capabilities.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`v-reveal v-stagger-${i + 2} v-card-hover bg-white p-6 rounded-xl border border-gray-200 hover:border-[#2878A8]/50 hover:shadow-md transition-all space-y-3`}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EAF3F8] border border-[#2878A8]/20 flex items-center justify-center text-[#155A8A]">
                    <Icon className="text-xl" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-[#155A8A] text-lg">{item.title}</h3>
                  <p className="text-sm text-[#55758C] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we engage */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-8">
        <div className="v-reveal v-stagger-1 max-w-2xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
            How We Engage
          </span>
          <h2 className="text-2xl font-bold text-[#0D3557]">
            Three stages, agreed up front
          </h2>
        </div>

        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {engagement.map((item, i) => (
            <div
              key={item.step}
              className={`v-reveal v-stagger-${i + 2} group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-6 px-2 sm:px-4 rounded-xl transition-colors hover:bg-[#EAF3F8]/60`}
            >
              <span className="text-sm font-bold text-[#55758C] md:w-12 shrink-0">
                {item.step}
              </span>
              <div className="md:flex-1 space-y-1.5">
                <h3 className="font-bold text-[#08243F] text-base">{item.title}</h3>
                <p className="text-sm text-[#55758C] leading-relaxed max-w-3xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-12 md:pb-16">
        <div className="v-reveal v-stagger-1 bg-[#08243F] text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FDBA74]">
              Start a Conversation
            </span>
            <h2 className="text-2xl font-bold text-white">
              Tell us what you are building
            </h2>
            <p className="text-sm text-[#EAF3F8] leading-relaxed">
              Send us the workflow you have in mind and the systems it has to work
              with, and we will come back with how we would approach it.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-lg shadow-sm hover:shadow transition-all inline-flex items-center gap-2 text-sm shrink-0 self-start md:self-auto"
          >
            <span>Contact us</span>
            <FiArrowRight strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AIHealthcareSolutions;

import { Link } from "react-router-dom";
import {
  FiLayout,
  FiServer,
  FiGitBranch,
  FiLifeBuoy,
  FiArrowRight,
} from "react-icons/fi";
import { useReveal } from "../../hooks/useReveal";

/*
 * Product / Development Solutions.
 *
 * TODO(copy): the capability descriptions and engagement models below are generic
 * placeholders — accurate but deliberately non-specific. Replace with the real
 * service wording. Nothing here asserts a metric, certification, client name or
 * delivery guarantee; please keep it that way unless it can be substantiated.
 */

const capabilities = [
  {
    icon: FiLayout,
    title: "Product Engineering",
    description:
      "Building software products end to end — architecture, application development and the release process that keeps them shipping after launch.",
  },
  {
    icon: FiServer,
    title: "Platform & Backend",
    description:
      "Services, APIs and data layers designed to carry production traffic, with the operational tooling needed to run and observe them.",
  },
  {
    icon: FiGitBranch,
    title: "Modernisation",
    description:
      "Taking existing applications forward — dependency and framework upgrades, incremental re-architecture, and reducing the cost of changing the codebase.",
  },
  {
    icon: FiLifeBuoy,
    title: "Sustained Engineering",
    description:
      "Ongoing development capacity for teams that need consistent throughput on a roadmap rather than a one-off project delivery.",
  },
];

const models = [
  {
    title: "Dedicated team",
    description:
      "An allocated group working to your roadmap and your process, reporting the way your existing teams do.",
  },
  {
    title: "Project delivery",
    description:
      "A defined scope with agreed milestones, suited to work that has a clear boundary and end state.",
  },
  {
    title: "Team extension",
    description:
      "Engineers added into your existing team to cover a specific skill gap or a period of higher load.",
  },
];

function ProductDevelopment() {
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
          <span className="text-[#08243F] font-semibold">
            Product / Development Solutions
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="v-reveal v-stagger-1 max-w-3xl space-y-5">
          <div className="inline-block px-3 py-1 bg-[#FFF7ED] border border-[#FDBA74]/60 rounded-full text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
            Product Engineering
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08243F] leading-tight tracking-tight">
            Product / Development Solutions
          </h1>
          <p className="text-[#55758C] text-base sm:text-lg leading-relaxed">
            Engineering capacity for building and maintaining software products —
            whether that means taking a product from architecture to release, or
            adding sustained development throughput to a team you already have.
          </p>
          <div className="pt-1">
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-lg shadow-sm hover:shadow transition-all inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <span>Talk to us</span>
              <FiArrowRight strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-slate-50 border-y border-gray-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
          <div className="v-reveal v-stagger-1 max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
              What We Take On
            </span>
            <h2 className="text-2xl font-bold text-[#0D3557]">
              From first architecture to sustained delivery
            </h2>
            <p className="text-sm text-[#55758C] leading-relaxed">
              Four areas of work, taken on individually or combined, depending on
              where your product is today.
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

      {/* Engagement models */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-8">
        <div className="v-reveal v-stagger-1 max-w-2xl space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
            Engagement Models
          </span>
          <h2 className="text-2xl font-bold text-[#0D3557]">
            Three ways to work with us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {models.map((item, i) => (
            <div
              key={item.title}
              className={`v-reveal v-stagger-${i + 2} bg-[#EAF3F8]/60 border border-blue-200/80 rounded-xl p-5 sm:p-6 space-y-2`}
            >
              <h3 className="font-bold text-[#08243F] text-base">{item.title}</h3>
              <p className="text-sm text-[#55758C] leading-relaxed">
                {item.description}
              </p>
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
              Tell us where your product is today
            </h2>
            <p className="text-sm text-[#EAF3F8] leading-relaxed">
              Share the stack, the roadmap and the gap you are trying to close, and
              we will come back with how we would staff and sequence it.
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

export default ProductDevelopment;

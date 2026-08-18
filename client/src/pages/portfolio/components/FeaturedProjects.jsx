import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "OncoTrace AI",
    href: "https://www.oncotraceai.org/",
    tagline: "Precision oncology platform for longitudinal tracking.",
    desc: "Longitudinal cancer monitoring system utilizing liquid biopsy and ctDNA analytics to accurately track disease progression and treatment response over extended clinical timelines.",
    tags: ["Liquid Biopsy Data Workflows", "ctDNA-Based Molecular Monitoring", "Automated Variant Analysis", "NGS Pipeline Integration", "Clinical Timeline Visualization", "AI-Assisted Report Generation", "Longitudinal Patient Tracking"],
    status: "In Active R&D · Product Development Phase",
  },
  {
    title: "Patient-Centric Healthcare Platform",
    tagline: "Unified architecture connecting all healthcare stakeholders.",
    desc: "A comprehensive portal integrating electronic health records, laboratory results, and AI-generated summaries into a securely accessible, unified system.",
    tags: ["Secure Authentication & Access Control", "Centralized Patient Records", "Clinical Timeline & Medical History", "Appointment Scheduling", "Laboratory Result Integration", "Real-Time Notifications", "AI-Generated Health Summaries"],
    status: "In Development",
  },
  {
    title: "Mobile Health Platform",
    tagline: "Deploying precision care to distributed communities.",
    desc: "Optimized for point-of-care environments, enabling field health workers to efficiently capture, process, and synchronize critical health data remotely.",
    tags: ["Mobile Clinic Workflow Management", "Field Healthcare Worker Portal", "Community Screening Programs", "Sample Collection Tracking", "Referral & Follow-Up Management", "Population-Level Health Analytics"],
    status: "Active Deployment",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold text-medical-teal uppercase tracking-widest mb-3">
          Technical Initiatives
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold">Our Featured Projects</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => {
          const Card = p.href ? "a" : "div";

          return (
          <Card
            key={p.title}
            {...(p.href ? { href: p.href, "aria-label": `Learn more about ${p.title}` } : {})}
            className={`rounded-2xl border border-gray-100 p-7 card-hover bg-white flex flex-col ${p.href ? "group" : ""}`}
          >
            <span className="text-[10px] font-semibold text-medical-blue bg-blue-50 px-3 py-1 rounded-full w-fit mb-4">
              {p.status}
            </span>
            <h4 className={`text-xl font-bold mb-1 ${p.href ? "group-hover:text-medical-blue" : ""}`}>{p.title}</h4>
            <p className="text-xs font-semibold text-medical-teal mb-3">{p.tagline}</p>
            <p className="text-gray-600 text-sm mb-5 grow">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-[10px] bg-gray-100 text-gray-700 px-2 rounded-md py-1">
                  {t}
                </span>
              ))}
            </div>
            {p.href ? (
              <span className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-medical-blue">
                See More <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            ) : (
              <button
                type="button"
                disabled
                className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-slate-400 cursor-not-allowed"
                title="More details coming soon"
              >
                See More <ArrowUpRight size={16} aria-hidden="true" />
              </button>
            )}
          </Card>
          );
        })}
      </div>
    </section>
  );
}

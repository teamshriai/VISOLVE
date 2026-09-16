import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "OncoTrace AI",
    href: "https://www.oncotrace-ai.org/",
    tagline: "Precision oncology platform for longitudinal tracking.",
    desc: "Longitudinal cancer monitoring system utilizing liquid biopsy and ctDNA analytics to accurately track disease progression and treatment response over extended clinical timelines.",
    tags: ["Liquid Biopsy Data Workflows", "ctDNA-Based Molecular Monitoring", "Automated Variant Analysis", "NGS Pipeline Integration", "Clinical Timeline Visualization", "AI-Assisted Report Generation", "Longitudinal Patient Tracking"],
    status: "In Active R&D · Product Development Phase",
  },
  {
    title: "Mammogram AI",
    href: "https://www.oncotrace-ai.org/mammodemo/ui",
    tagline: "Five-year breast cancer risk from a single screening exam.",
    desc: "Processes the four standard mammographic views through a deep-learning model to produce calibrated per-year and cumulative risk projections.",
    tags: ["Four-View DICOM Ingestion", "DICOM-to-PNG Conversion", "Deep Learning Risk Inference", "Calibrated 5-Year Risk Scoring", "Per-Year & Cumulative Risk Curves", "Local & Remote Study Loading", "Non-Persistent Upload Handling"],
    status: "Live Demo · Research Preview",
  },
  {
    title: "Stroke AI",
    href: "https://stroke-ai.org",
    tagline: "The intelligent command centre for stroke care.",
    desc: "Connects patients, ambulances, labs, and hospitals in real time so imaging is read in transit and treatment can begin before arrival.",
    tags: ["NCCT Haemorrhage Detection", "CTA Occlusion Localization", "CT Perfusion Analysis", "DICOM Ingestion Pipeline", "Ambulance & Hospital Coordination", "Triage Urgency Index", "En-Route Clinical Handover"],
    status: "In Active R&D · Launching 2026",
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
    <section
      id="projects"
      className="bg-gradient-to-b from-night-soft to-night-plum text-on-dark py-section px-gutter [--card-accent:240_106_155]"
    >
      <div className="max-w-page mx-auto">
        <div className="text-center mb-16">
          <p className="text-eyebrow uppercase text-brand-pink mb-4">
            Technical Initiatives
          </p>
          <h2 className="text-h2 font-light">Our Featured Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => {
            const Card = p.href ? "a" : "div";

            return (
              <Card
                key={p.title}
                {...(p.href
                  ? {
                      href: p.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": `Learn more about ${p.title} (opens in new tab)`,
                    }
                  : {})}
                className={`card card-dark rounded-none p-8 flex flex-col ${p.href ? "group" : ""}`}
              >
                <p className="text-eyebrow uppercase text-on-dark-soft mb-5">
                  {p.status}
                </p>
                <h3 className={`text-h4 font-medium text-on-dark mb-1 ${p.href ? "transition-colors group-hover:text-brand-pink" : ""}`}>{p.title}</h3>
                <p className="text-sm text-accent-bright mb-3">{p.tagline}</p>
                <p className="text-sm text-on-dark-soft mb-6 flex-grow">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-2xs text-on-dark-soft border border-white/15 px-2 py-1 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
                {p.href ? (
                  <span className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-brand-pink transition-[gap] group-hover:gap-2.5">
                    See More <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                ) : (
                  <span className="mt-6 text-eyebrow uppercase text-on-dark-soft">
                    Details coming soon
                  </span>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

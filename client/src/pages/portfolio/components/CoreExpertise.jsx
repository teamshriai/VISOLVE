import { Brain, HeartPulse, Microscope, Dna, Code2 } from "lucide-react";

const domains = [
  {
    icon: Brain,
    title: "AI Systems",
    desc: "Developing autonomous, reasoning-capable agents and complex LLM architectures.",
    items: ["Agentic AI Systems", "LLM-Powered Applications", "Multi-Agent Architectures", "Intelligent Process Automation", "Conversational AI Assistants", "Workflow Orchestration Engines"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare AI",
    desc: "Translating high-volume clinical data into precise, actionable decision support.",
    items: ["Clinical Decision Support Systems", "Predictive Health Analytics", "AI-Powered Diagnostic Support", "Preventive Care Platforms", "Automated Risk Stratification"],
  },
  {
    icon: Microscope,
    title: "Precision Oncology",
    desc: "Architecting robust pipelines for variant analysis and molecular monitoring.",
    items: ["Liquid Biopsy Data Pipelines", "ctDNA Detection & Analysis", "Next-Gen Sequencing (NGS) Pipelines", "Genomic Variant Interpretation", "Molecular Response Monitoring", "Longitudinal Cancer Surveillance"],
  },
  {
    icon: Dna,
    title: "Genomics",
    desc: "Processing massive-scale sequencing data into accessible, annotated structures.",
    items: ["FASTQ & BAM Processing", "VCF Variant Analysis", "Biomarker Discovery Pipelines", "Automated Variant Annotation", "End-to-End Genomic Data Workflows"],
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "Deploying scalable, cloud-native infrastructure with robust security and compliance standards.",
    items: ["Enterprise-Grade Web Applications", "Patient & Provider Portals", "Real-Time Healthcare Dashboards", "Secure, Role-Based Authentication", "Cloud-Native API Architecture", "Scalable Database Design"],
  },
];

export default function CoreExpertise() {
  return (
    <section
      id="expertise"
      className="bg-gradient-to-b from-tint-lavender to-tint-pink py-section px-gutter [--card-accent:165_141_232]"
    >
      <div className="max-w-page mx-auto">
        <div className="text-center mb-16">
          <p className="text-eyebrow uppercase text-accent-deep mb-4">
            Core Expertise
          </p>
          <h2 className="text-h2 font-light">Five Disciplines. One Integrated Technology Platform.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((d) => (
            <div key={d.title} className="card rounded-none p-7 flex flex-col">
              <d.icon className="text-accent-deep mb-5" size={20} strokeWidth={1.5} aria-hidden="true" />
              <h3 className="text-h4 font-medium mb-2">{d.title}</h3>
              <p className="text-sm text-ink-muted mb-4 flex-grow">{d.desc}</p>
              <ul className="space-y-2">
                {d.items.map((item) => (
                  <li key={item} className="text-sm text-ink-soft flex items-start gap-2.5">
                    <span className="mt-[11px] w-2 h-px bg-ink-muted flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section id="expertise" className="py-24 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-medical-teal uppercase tracking-widest mb-3">
            Core Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">Five Disciplines. One Integrated Technology Practice.</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((d) => (
            <div key={d.title} className="bg-white/90 rounded-2xl p-7 border border-blue-100 card-hover flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br/srgb from-medical-blue to-medical-teal flex items-center justify-center mb-5">
                <d.icon className="text-white" size={22} />
              </div>
              <h4 className="text-lg font-bold mb-2">{d.title}</h4>
              <p className="text-sm text-gray-500 mb-4 grow">{d.desc}</p>
              <ul className="space-y-2">
                {d.items.map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-medical-teal shrink-0" />
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

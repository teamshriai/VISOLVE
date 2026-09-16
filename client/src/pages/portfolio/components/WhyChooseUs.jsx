import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "AI-First Development", desc: "AI models and agents are natively integrated into the core software architecture." },
  { title: "Healthcare and Life-Science Context", desc: "Domain depth that helps product and research teams navigate complex data, workflows, and constraints." },
  { title: "Security by Default", desc: "Privacy-conscious architecture and rigorous technical practices for systems that handle sensitive data." },
  { title: "Modern, Cloud-Native Foundations", desc: "Highly resilient cloud architectures designed for horizontal scalability." },
  { title: "Genomics & Oncology Depth", desc: "Specialized capacity in processing large-scale molecular and next-generation sequencing data." },
  { title: "Modular, Future-Proof Architecture", desc: "Microservices-driven design enabling continuous integration and seamless updates." },
  { title: "Production-Ready Standards", desc: "Robust technical practices supporting high availability in production environments." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-tint-sky to-tint-mist py-section px-gutter [--card-accent:58_130_196]">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-eyebrow uppercase text-accent-deep mb-4">
          System Integrity
        </p>
        <h2 className="text-h2 font-light mb-6">
          Reliability Architected into the Core Foundation
        </h2>
        <p className="text-lead text-ink-soft max-w-measure mx-auto mb-14">
          We apply the rigor needed to deliver dependable systems for ambitious products and research programs.
        </p>
        <div className="grid sm:grid-cols-2 gap-5 text-left">
          {reasons.map((r) => (
            <div key={r.title} className="card rounded-none flex items-start gap-4 p-5">
              <CheckCircle2 className="text-accent-deep flex-shrink-0 mt-1" size={18} strokeWidth={1.5} aria-hidden="true" />
              <div>
                <span className="block text-ink font-medium mb-1">{r.title}</span>
                <span className="block text-sm text-ink-muted">{r.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

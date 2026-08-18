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
    <section className="py-24 px-6 bg-medical-dark text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-sm font-semibold text-medical-teal uppercase tracking-widest mb-3">
          System Integrity
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Reliability Architected into the Core Foundation
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          We apply the rigor needed to deliver dependable systems for ambitious products and research programs.
        </p>
        <div className="grid sm:grid-cols-2 gap-5 text-left">
          {reasons.map((r) => (
            <div key={r.title} className="flex items-start gap-4 bg-white/5 p-5 rounded-xl border border-white/10">
              <CheckCircle2 className="text-medical-teal shrink-0 mt-1" size={20} />
              <div>
                <span className="block text-white font-bold mb-1">{r.title}</span>
                <span className="block text-sm text-gray-300">{r.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

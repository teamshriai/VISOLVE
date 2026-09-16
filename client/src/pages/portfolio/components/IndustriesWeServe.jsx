const industries = [
  { name: "Health-Tech Product Companies", desc: "Extending technical capacity for secure, scalable product delivery" },
  { name: "Life-Science and Biotech Teams", desc: "Advancing data and AI systems for complex scientific workflows" },
  { name: "Genomics Research Groups", desc: "Creating high-performance pipelines and research platforms for sequencing data" },
  { name: "AI and Data Product Teams", desc: "Taking intelligent products from technical concept to reliable deployment" },
  { name: "Digital Health Startups", desc: "Establishing the product foundations needed to validate and scale quickly" },
  { name: "Medical Software Teams", desc: "Strengthening specialized technical initiatives with domain-aware delivery" },
  { name: "Academic Research Consortia", desc: "Turning collaborative research needs into useful, maintainable software" },
  { name: "Innovation Labs", desc: "Prototyping and productionizing new platforms, workflows, and AI capabilities" },
];

export default function IndustriesWeServe() {
  return (
    <section
      id="industries"
      className="bg-gradient-to-b from-tint-mist to-tint-pink-soft py-section px-gutter [--card-accent:165_141_232]"
    >
      <div className="max-w-page mx-auto">
        <div className="text-center mb-16">
          <p className="text-eyebrow uppercase text-accent-deep mb-4">
            Who We Collaborate With
          </p>
          <h2 className="text-h2 font-light">For Teams Defining What&apos;s Next</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind) => (
            <div key={ind.name} className="card rounded-none p-6 leading-relaxed flex flex-col justify-center">
              <h3 className="text-h4 font-medium text-ink mb-2">{ind.name}</h3>
              <p className="text-sm text-ink-muted">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

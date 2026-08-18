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
    <section id="industries" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold text-medical-teal uppercase tracking-widest mb-3">
          Who We Collaborate With
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">For Teams Defining What&apos;s Next</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {industries.map((ind) => (
          <div key={ind.name} className="rounded-xl border border-violet-100 bg-white/90 p-6 leading-relaxed card-hover flex flex-col justify-center">
            <h4 className="font-bold text-medical-dark mb-2">{ind.name}</h4>
            <p className="text-sm text-slate-600">{ind.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

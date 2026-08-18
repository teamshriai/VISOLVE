const groups = [
  { title: "Frontend", items: ["React", "TypeScript", "TailwindCSS", "Vite", "Framer Motion"] },
  { title: "Backend", items: ["Node.js", "Express", "TypeScript", "REST APIs"] },
  { title: "Databases", items: ["PostgreSQL", "Prisma ORM"] },
  { title: "AI", items: ["Python", "PyTorch", "Scikit-learn", "LangChain", "Agentic AI", "RAG"] },
  { title: "Healthcare Standards", items: ["HL7", "FHIR", "DICOM (Planned)", "RBAC", "OAuth", "JWT Auth"] },
  { title: "Cloud & DevOps", items: ["AWS", "Docker", "Nginx", "Linux", "GitHub Actions", "CI/CD"] },
];

export default function TechnicalCapabilities() {
  return (
    <section id="capabilities" className="py-24 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-medical-teal uppercase tracking-widest mb-3">
            Technical Capabilities
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">The Technology Stack Behind Our Systems</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We select technologies for the security, scalability, and performance that complex product and research workloads demand.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="bg-white/90 rounded-2xl p-6 border border-violet-100 card-hover">
              <h4 className="font-bold mb-4 text-medical-blue">{g.title}</h4>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="text-xs font-medium bg-violet-50 text-slate-700 px-3 py-1.5 rounded-full">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

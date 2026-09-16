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
    <section
      id="capabilities"
      className="bg-gradient-to-b from-tint-pink to-tint-sky py-section px-gutter [--card-accent:240_106_155]"
    >
      <div className="max-w-page mx-auto">
        <div className="text-center mb-16">
          <p className="text-eyebrow uppercase text-accent-deep mb-4">
            Technical Capabilities
          </p>
          <h2 className="text-h2 font-light mb-6">The Technology Stack Behind Our Systems</h2>
          <p className="text-lead text-ink-soft max-w-measure mx-auto">
            We select technologies for the security, scalability, and performance that complex product and research workloads demand.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="card rounded-none p-6">
              <h3 className="text-eyebrow uppercase text-ink-muted mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="text-2xs text-ink-muted border border-line px-2 py-1 rounded-sm">
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

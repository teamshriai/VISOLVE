import { motion } from "framer-motion";
import { Dna } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 bg-linear-to-b/srgb from-stone-50 via-blue-50/60 to-stone-50 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern [background-size:24px_24px] opacity-30" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-medical-teal/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-medical-blue/10 rounded-full blur-3xl" />
      <svg
        aria-hidden="true"
        viewBox="0 0 440 300"
        className="pointer-events-none absolute right-[-80px] top-28 hidden w-[440px] text-medical-teal/30 lg:block"
        fill="none"
      >
        <path d="M46 204 117 128l79 43 74-111 93 66" stroke="currentColor" strokeWidth="1.5" />
        <path d="m117 128 36-81 43 124 88 35 79-80" stroke="currentColor" strokeWidth="1" strokeDasharray="5 7" />
        <circle cx="46" cy="204" r="8" fill="currentColor" />
        <circle cx="117" cy="128" r="11" fill="currentColor" />
        <circle cx="153" cy="47" r="6" fill="currentColor" />
        <circle cx="196" cy="171" r="9" fill="currentColor" />
        <circle cx="270" cy="60" r="12" fill="currentColor" />
        <circle cx="284" cy="206" r="7" fill="currentColor" />
        <circle cx="363" cy="126" r="10" fill="currentColor" />
      </svg>

      <div className="max-w-5xl mx-auto text-center px-6">
  <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 text-xs font-semibold text-medical-blue bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full mb-6"
        >
          <Dna size={14} /> Technical Excellence in AI & Precision Medicine
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          /* md:leading-none preserves the shipped rendering: under Tailwind v3 the
             md:text-6xl rule's own line-height (1) out-ordered leading-tight at ≥md.
             v4 resolves that pairing the other way, so it is pinned explicitly. */
          className="text-4xl md:text-6xl font-extrabold leading-tight md:leading-none tracking-tight"
        >
          An <span className="gradient-text">AI</span> service platform connecting genomics, diagnostics, clinicians, and patients
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          We collaborate with product teams and researchers to architect, deploy, and scale secure AI, genomics, and healthcare software for complex research and product environments.
        </motion.p>

      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="wash-hero text-on-dark pt-40 pb-section px-gutter">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-eyebrow uppercase text-accent-bright mb-6"
        >
          Technical Excellence in AI &amp; Precision Medicine
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-display font-light text-on-dark"
        >
          An <span className="text-brand-pink">AI</span> service platform connecting genomics, diagnostics, clinicians, and patients
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-lead text-on-dark-soft max-w-measure mx-auto"
        >
          Visolve sponsors <strong className="font-bold text-on-dark">SHRI-AI</strong>, supporting the research and engineering behind its product development.
        </motion.p>
      </div>
    </section>
  );
}

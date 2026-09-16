import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section id="cta" className="bg-gradient-to-b from-tint-pink-soft to-tint-cream py-section px-gutter text-center">
      <div className="max-w-measure mx-auto">
        <p className="text-eyebrow uppercase text-accent-deep mb-4">
          Technical Collaboration
        </p>
        <h2 className="text-h2 font-light mb-6">Bring Visolve Into Your Technical Team</h2>
        <p className="text-lead text-ink-soft mb-10">
          Need specialist engineering support for a health-tech product, AI platform, or research initiative? Let&apos;s discuss how we can help your team move faster.
        </p>
        <Link
          to="/portfolio/contact"
          className="inline-block bg-accent-deep text-white text-sm font-medium px-8 py-3 rounded-sm hover:bg-ink transition-colors"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section id="cta" className="py-28 px-6 bg-linear-to-r/srgb from-medical-blue to-medical-teal text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-semibold text-white uppercase tracking-widest mb-3 opacity-90">
          Technical Collaboration
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Bring Visolve Into Your Technical Team</h3>
        <p className="text-lg text-white/90 mb-10">
          Need specialist engineering support for a health-tech product, AI platform, or research initiative? Let&apos;s discuss how we can help your team move faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/portfolio/contact"
            className="bg-white text-medical-blue font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

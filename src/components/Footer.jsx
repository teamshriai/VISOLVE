import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

import linkedinIcon from "../assets/visolve/footer/Linkedin.png";
import facebookIcon from "../assets/visolve/footer/facebook-logo.png";

const testimonials = [
  {
    quote: "Please accept my thanks to you and your team on the great work performed on this project. From my conversations with our technical head, all went very well with our recent event and we are well positioned to continue development of our Cloud Center of Excellence.",
    author: "— Product Manager, HP",
  },
  {
    quote: "I understand that what I asked of the team this week involved huge changes, and once again they have risen to the task. So a HUGE thank you to the team for their dedication to the task at hand.",
    author: "— Program Manager, Global Presales, HP",
  },
  {
    quote: "Good work and thank you. I am really happy with the quick turnaround time and prompt support.",
    author: "— Director, Business Intelligence Analytics",
  },
  {
    quote: "Perfect, this is exactly what I was looking for, thank you very much! This makes this demo useful to many more people looking to implement SG with Oracle.",
    author: "— Solution Architect, Global Presales, HP",
  },
  {
    quote: "Appreciate your contribution in helping us to achieve MU Stage 2 Certification. Looking forward to work with you in migrating our customer environment.",
    author: "— COO, Leading EHR Vendor",
  },
];

/* ── Column heading ── */
function FooterHeading({ children }) {
  return (
    <h5 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--accent-orange)" }}>
      {children}
    </h5>
  );
}

/* ── Footer link ── */
function FLink({ to, href, children, external }) {
  const cls = "block py-0.5 text-[13px] text-slate-400 hover:text-white transition-colors leading-relaxed";
  if (external || href) {
    return (
      <a href={href || to} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={cls}>
        {children}
      </a>
    );
  }
  return <Link to={to} className={cls}>{children}</Link>;
}

function Footer() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer
      style={{ background: "#0B0F14", borderTop: "1px solid rgba(255,255,255,0.07)" }}
      className="w-full bg-[#0B0F14] text-slate-400 font-sans text-sm pt-14 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Accent line ── */}
        <div className="w-12 h-0.5 mb-10" style={{ background: "var(--accent-orange)" }} />

        {/* ── Columns ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

          {/* About */}
          <div>
            <FooterHeading>About Us</FooterHeading>
            <ul className="space-y-1">
              <li><FLink to="/about">Company</FLink></li>
              <li><FLink to="/core-team">Core Team</FLink></li>
              <li><FLink href="/partner.html">Partner</FLink></li>
              <li><FLink to="/careers">Careers</FLink></li>
              <li><FLink to="/contact">Contact Us</FLink></li>
              <li><FLink to="/faq">FAQ</FLink></li>
            </ul>
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-x-3 gap-y-1 text-[12px] text-slate-500">
              <a href="https://forum.visolve.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Forums</a>
              <span className="text-slate-700">|</span>
              <a href="/privacy.html" className="hover:text-white transition-colors">Privacy</a>
              <span className="text-slate-700">|</span>
              <a href="/sitemap.html" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>

          {/* Enterprise IT */}
          <div>
            <FooterHeading>Enterprise IT</FooterHeading>
            <ul className="space-y-1">
              <li><FLink to="/services/cloud">Cloud Services</FLink></li>
              <li><FLink to="/services/virtualization">Virtualization Services</FLink></li>
              <li><FLink to="/services/opensource">Open Source Services</FLink></li>
              <li><FLink to="/services/security">Enterprise Security</FLink></li>
              <li><FLink to="/services/performance-tools">Performance Tools</FLink></li>
              <li><FLink to="/services/qa-certification">Product / Solution QA</FLink></li>
              <li><FLink to="/services/demo-portals">Solutions Demo Portals</FLink></li>
            </ul>
          </div>

          {/* Corporate Office */}
          <div>
            <FooterHeading>Corporate Office</FooterHeading>
            <a
              href="https://www.google.co.uk/maps/place/6559+Springpath+Ln,+San+Jose,+CA+95120,+USA"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[13px] text-slate-400 hover:text-white transition-colors leading-relaxed mb-3"
            >
              6559 Springpath Lane<br />
              San Jose, CA 95120, USA
            </a>
            <p className="text-[13px] mb-1">
              <span className="text-slate-300 font-semibold">Email: </span>
              <a href="mailto:services@visolve.com" className="text-slate-400 hover:text-white transition-colors">
                services@visolve.com
              </a>
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-5">
              <a href="https://www.linkedin.com/company/visolve-inc" target="_blank" rel="noopener noreferrer"
                 className="opacity-60 hover:opacity-100 transition-opacity">
                <img src={linkedinIcon} alt="ViSolve LinkedIn" className="h-7 w-auto" />
              </a>
              <a href="https://twitter.com/ViSolve_Inc" target="_blank" rel="noopener noreferrer"
                 title="ViSolve X (formerly Twitter)"
                 aria-label="ViSolve X (formerly Twitter)"
                 className="opacity-60 hover:opacity-100 transition-opacity flex items-center justify-center">
                <FaXTwitter className="h-6 w-6 text-white" />
              </a>
              <a href="https://www.facebook.com/pages/Visolve-Inc/153410278126103" target="_blank" rel="noopener noreferrer"
                 className="opacity-60 hover:opacity-100 transition-opacity">
                <img src={facebookIcon} alt="ViSolve Facebook" className="h-7 w-auto" />
              </a>
            </div>
          </div>

          {/* Testimonials */}
          <div
            className="rounded-xl p-5 border flex flex-col justify-between"
            style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--accent-orange)" }}>
                Customer Testimonials
              </h5>
              <p className="italic text-slate-300 text-xs leading-relaxed min-h-[90px]">
                "{testimonials[idx].quote}"
              </p>
            </div>
            <div className="text-right font-semibold text-slate-400 mt-4 text-xs">
              {testimonials[idx].author}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-slate-600"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span>©1995 – 2026 ViSolve, Inc. All Rights Reserved.</span>
          <span className="text-slate-700">
            Powered by{" "}
            <span style={{ color: "var(--accent-orange)" }}>ViSolve</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

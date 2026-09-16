import { useState } from "react";
import { Link } from "react-router-dom";
import { BrainCircuit, Building2, House, Layers3, Mail, Menu, X } from "lucide-react";
import BrandLogos from "./BrandLogos";

const links = [
  { label: "Solutions", href: "#projects", icon: Layers3 },
  { label: "Capabilities", href: "#capabilities", icon: BrainCircuit },
  { label: "Industries", href: "#industries", icon: Building2 },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full z-50 bg-surface border-b border-line">
      <div className="max-w-page mx-auto flex items-center justify-between px-gutter py-4">
        <BrandLogos />
        <nav className="hidden md:flex items-center gap-6 text-sm text-ink-soft">
          <Link to="/" className="inline-flex items-center gap-1.5 hover:text-accent-deep transition-colors">
            <House size={15} strokeWidth={1.5} aria-hidden="true" />
            Home
          </Link>
          {links.map((l) => (
            <a key={l.label} href={l.href} className="inline-flex items-center gap-1.5 hover:text-accent-deep transition-colors">
              <l.icon size={15} strokeWidth={1.5} aria-hidden="true" />
              {l.label}
            </a>
          ))}
          <Link to="/portfolio/contact" className="inline-flex items-center gap-1.5 hover:text-accent-deep transition-colors">
            <Mail size={15} strokeWidth={1.5} aria-hidden="true" />
            Contact
          </Link>
        </nav>
        <Link
          to="/portfolio/contact"
          className="hidden md:inline-block bg-accent-deep text-white text-sm font-medium px-5 py-2.5 rounded-sm hover:bg-ink transition-colors"
        >
          Discuss Your Requirements
        </Link>
        <button
          type="button"
          className="md:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-gutter py-6 border-t border-line bg-surface text-sm text-ink-soft">
          <Link to="/" className="inline-flex items-center gap-2" onClick={() => setOpen(false)}>
            <House size={16} strokeWidth={1.5} aria-hidden="true" />
            Home
          </Link>
          {links.map((l) => (
            <a key={l.label} href={l.href} className="inline-flex items-center gap-2" onClick={() => setOpen(false)}>
              <l.icon size={16} strokeWidth={1.5} aria-hidden="true" />
              {l.label}
            </a>
          ))}
          <Link to="/portfolio/contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 text-accent-deep">
            <Mail size={16} strokeWidth={1.5} aria-hidden="true" />
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

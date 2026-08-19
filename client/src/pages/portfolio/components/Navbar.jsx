import { useState } from "react";
import { Link } from "react-router-dom";
import { BrainCircuit, Building2, House, Layers3, Mail, Menu, X } from "lucide-react";
import BrandLogos from "./BrandLogos";

const links = [
  { label: "Capabilities", href: "#capabilities", icon: BrainCircuit },
  { label: "Solutions", href: "#projects", icon: Layers3 },
  { label: "Industries", href: "#industries", icon: Building2 },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full z-50 bg-stone-50/85 backdrop-blur-md border-b border-blue-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <BrandLogos />
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link to="/" className="inline-flex items-center gap-1.5 hover:text-medical-blue transition">
            <House size={15} aria-hidden="true" />
            Home
          </Link>
          {links.map((l) => (
            <a key={l.label} href={l.href} className="inline-flex items-center gap-1.5 hover:text-medical-blue transition">
              <l.icon size={15} aria-hidden="true" />
              {l.label}
            </a>
          ))}
          <Link to="/portfolio/contact" className="inline-flex items-center gap-1.5 hover:text-medical-blue transition">
            <Mail size={15} aria-hidden="true" />
            Contact
          </Link>
        </nav>
        <Link
          to="/portfolio/contact"
          className="hidden md:inline-block bg-medical-blue text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-medical-dark transition"
        >
          Discuss Your Project
        </Link>
        <button
          type="button"
          className="md:hidden text-medical-dark"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-stone-50 text-sm font-medium text-slate-600">
          <Link to="/" className="inline-flex items-center gap-2" onClick={() => setOpen(false)}>
            <House size={16} aria-hidden="true" />
            Home
          </Link>
          {links.map((l) => (
            <a key={l.label} href={l.href} className="inline-flex items-center gap-2" onClick={() => setOpen(false)}>
              <l.icon size={16} aria-hidden="true" />
              {l.label}
            </a>
          ))}
          <Link to="/portfolio/contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 font-medium text-medical-blue">
            <Mail size={16} aria-hidden="true" />
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoImg from "../assets/visolve/logo.png";

/* ── SVG icons ── */
const ChevronDown = () => (
  <svg className="w-3.5 h-3.5 fill-current ml-1 opacity-80" viewBox="0 0 20 20">
    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

/* ── Menu data ── */
const SERVICES_ENTERPRISE = [
  ["Migration Service",             "/services/migration"],
  ["Cloud Services",                "/services/cloud"],
  ["Virtualization Services",       "/services/virtualization"],
  ["OpenSource Services",           "/services/opensource"],
  ["Enterprise Security (2FA/SSO)", "/services/security"],
  ["Performance Tools",             "/services/performance-tools"],
  ["Product / Solution QA",         "/services/qa-certification"],
  ["Solution Demo Portals",         "/services/demo-portals"],
  ["Web Caching (Squid)",           "/services/web-caching"],
  ["Technical Writing",             "/services/technical-writing"],
];

const SERVICES_HEALTHCARE = [
  ["OpenEMR Customization",    "/services/openemr"],
  ["Interoperability Services","/services/interoperability"],
  ["Cloud Hosting",            "/smart-aws-contents"],
  ["OpenEMR Pro Support",      "/services/openemr-pro/support"],
  ["VistA EHR Solutions",      "/services/vista-ehr"],
  ["Meaningful Use Objective", "/services/openemr-pro/meaningfuluse"],
  ["Medical Billing",          "/services/medicalbilling"],
  ["Patient Portal",           "/services/patientportal"],
  ["EMR Services",             "/services/emr"],
];

const PRODUCTS = [
  ["OpenEMR Pro",                   "/services/openemr-pro"],
  ["Patient Portal",                "/services/patientportal"],
  ["Medical Billing (RCM)",         "/services/medicalbilling"],
  ["Pluggable Billing (PBM)",       "/products/pbm"],
  ["ViCache Filter",                "/products/vicache-filter"],
  ["2FA",                           "/services/openemr-pro/2fa"],
  ["Google Calendar Integration",   "/services/openemr-pro/googlecalendar"],
  ["Scheduler Pro",                 "/services/openemr-pro/scheduler"],
  ["e-Prescription",                "/services/openemr-pro/eprescription"],
  ["Telehealth",                    "/services/openemr-pro/telehealth"],
];

const RESOURCES = [
  ["Blogs",        "/blogs"],
  ["Case Studies", "/casestudy"],
  ["Datasheets",   "/datasheet"],
  ["Webinars",     "/webinars"],
  ["Videos",       "/videos"],
  ["Enterprise IT","/services/enterprise-it"],
];

const ABOUT = [
  ["Company",    "/about"],
  ["Core Team",  "/core-team"],
  ["Contact Us", "/contact"],
  ["FAQ",        "/faq"],
];

/* ── Dropdown Panel ── */
function DropdownPanel({ children, wide }) {
  return (
    <div
      className={`absolute left-0 top-full mt-0 z-50 rounded-b-xl shadow-2xl border border-white/10 overflow-hidden ${
        wide ? "w-[580px] grid grid-cols-2" : "w-52 flex flex-col"
      }`}
      style={{ background: "#0d3358" }}
    >
      {children}
    </div>
  );
}

/* ── Single dropdown column ── */
function DropdownColumn({ title, items, onClose }) {
  return (
    <div className="p-4">
      {title && (
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#F28C28] mb-2.5 pb-1.5 border-b border-white/10">
          {title}
        </p>
      )}
      <ul className="space-y-0.5">
        {items.map(([label, to]) => (
          <li key={to}>
            <Link
              to={to}
              onClick={onClose}
              className="flex items-center gap-1.5 px-2 py-1.5 rounded text-[13px] text-white/80 hover:text-[#F28C28] hover:bg-white/10 transition-colors"
            >
              <span className="text-[#F28C28] text-[9px]">▶</span>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Desktop nav link style ── */
function desktopLinkClass(isActive) {
  return `px-3 py-2 text-sm font-medium rounded transition-all inline-flex items-center gap-0.5 ${
    isActive
      ? "text-[#F28C28] bg-white/10"
      : "text-white/85 hover:text-white hover:bg-white/10"
  }`;
}

/* ── Mobile accordion section ── */
function MobileSection({ label, children, open, onToggle }) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 transition-colors"
      >
        <span>{label}</span>
        <span className="text-white/50 text-xs">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="bg-black/20 px-5 pb-4 pt-2 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
}

/* ── Mobile dropdown link ── */
function MobileLink({ to, children, onClose }) {
  return (
    <Link
      to={to}
      onClick={onClose}
      className="block py-1.5 text-[13px] text-white/70 hover:text-[#F28C28] pl-3 border-l-2 border-transparent hover:border-[#F28C28] transition-all"
    >
      {children}
    </Link>
  );
}

function MobileSectionLabel({ children }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-widest text-[#F28C28] pt-3 pb-1.5 first:pt-1">
      {children}
    </p>
  );
}

/* ═══════════════════════════════════════════════════════════
   NAVBAR COMPONENT
═══════════════════════════════════════════════════════════ */
function Navbar() {
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [activeDD, setActiveDD]         = useState(null);
  const [mobileSection, setMobileSection] = useState(null);
  const [scrolled, setScrolled]         = useState(false);
  const location = useLocation();

  /* Close mobile on route change */
  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
  }, [location]);

  /* Scroll shadow */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const closeAll = () => { setMobileOpen(false); setMobileSection(null); };
  const toggleMobile = (name) =>
    setMobileSection((prev) => (prev === name ? null : name));

  return (
    <header
      style={{ background: "var(--primary-blue)" }}
      className={`w-full sticky top-0 z-50 transition-shadow duration-200 ${
        scrolled ? "shadow-xl" : "shadow-md"
      }`}
    >
      {/* ── Top bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[68px]">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeAll}>
          <img
            src={logoImg}
            alt="ViSolve"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-0.5 lg:gap-1">
          <NavLink to="/" end className={({ isActive }) => desktopLinkClass(isActive)}>
            Home
          </NavLink>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDD("services")}
            onMouseLeave={() => setActiveDD(null)}
          >
            <NavLink to="/services" className={({ isActive }) => desktopLinkClass(isActive)}>
              Services <ChevronDown />
            </NavLink>
            {activeDD === "services" && (
              <DropdownPanel wide>
                <DropdownColumn title="Enterprise IT Services"  items={SERVICES_ENTERPRISE} onClose={() => setActiveDD(null)} />
                <DropdownColumn title="Healthcare IT Services"  items={SERVICES_HEALTHCARE} onClose={() => setActiveDD(null)} />
              </DropdownPanel>
            )}
          </div>

          {/* Products */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDD("products")}
            onMouseLeave={() => setActiveDD(null)}
          >
            <button className={desktopLinkClass(false)}>
              Products <ChevronDown />
            </button>
            {activeDD === "products" && (
              <DropdownPanel>
                <DropdownColumn items={PRODUCTS} onClose={() => setActiveDD(null)} />
              </DropdownPanel>
            )}
          </div>

          {/* Resources */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDD("resources")}
            onMouseLeave={() => setActiveDD(null)}
          >
            <button className={desktopLinkClass(false)}>
              Resources <ChevronDown />
            </button>
            {activeDD === "resources" && (
              <DropdownPanel>
                <DropdownColumn items={RESOURCES} onClose={() => setActiveDD(null)} />
              </DropdownPanel>
            )}
          </div>

          <NavLink to="/careers" className={({ isActive }) => desktopLinkClass(isActive)}>
            Careers
          </NavLink>

          {/* About */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDD("about")}
            onMouseLeave={() => setActiveDD(null)}
          >
            <NavLink to="/about" className={({ isActive }) => desktopLinkClass(isActive)}>
              About <ChevronDown />
            </NavLink>
            {activeDD === "about" && (
              <DropdownPanel>
                <DropdownColumn items={ABOUT} onClose={() => setActiveDD(null)} />
              </DropdownPanel>
            )}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="ml-2 px-4 py-2 text-sm font-semibold rounded text-white transition-all"
            style={{ background: "var(--accent-orange)" }}
            onMouseEnter={e => e.currentTarget.style.background = "var(--accent-orange-hover)"}
            onMouseLeave={e => e.currentTarget.style.background = "var(--accent-orange)"}
          >
            Contact Us
          </Link>
        </nav>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded text-white/80 hover:bg-white/10 transition-colors"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <div
          className="md:hidden overflow-y-auto max-h-[80vh] border-t border-white/10"
          style={{ background: "var(--primary-blue)" }}
        >
          {/* Home */}
          <Link
            to="/"
            onClick={closeAll}
            className="block px-5 py-3.5 text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 border-b border-white/10"
          >
            Home
          </Link>

          {/* Services */}
          <MobileSection
            label="Services"
            open={mobileSection === "services"}
            onToggle={() => toggleMobile("services")}
          >
            <MobileSectionLabel>Enterprise IT</MobileSectionLabel>
            {SERVICES_ENTERPRISE.map(([label, to]) => (
              <MobileLink key={to} to={to} onClose={closeAll}>{label}</MobileLink>
            ))}
            <MobileSectionLabel>Healthcare IT</MobileSectionLabel>
            {SERVICES_HEALTHCARE.map(([label, to]) => (
              <MobileLink key={to} to={to} onClose={closeAll}>{label}</MobileLink>
            ))}
          </MobileSection>

          {/* Products */}
          <MobileSection
            label="Products"
            open={mobileSection === "products"}
            onToggle={() => toggleMobile("products")}
          >
            {PRODUCTS.map(([label, to]) => (
              <MobileLink key={to} to={to} onClose={closeAll}>{label}</MobileLink>
            ))}
          </MobileSection>

          {/* Resources */}
          <MobileSection
            label="Resources"
            open={mobileSection === "resources"}
            onToggle={() => toggleMobile("resources")}
          >
            {RESOURCES.map(([label, to]) => (
              <MobileLink key={to} to={to} onClose={closeAll}>{label}</MobileLink>
            ))}
          </MobileSection>

          {/* Careers */}
          <Link
            to="/careers"
            onClick={closeAll}
            className="block px-5 py-3.5 text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 border-b border-white/10"
          >
            Careers
          </Link>

          {/* About */}
          <MobileSection
            label="About Us"
            open={mobileSection === "about"}
            onToggle={() => toggleMobile("about")}
          >
            {ABOUT.map(([label, to]) => (
              <MobileLink key={to} to={to} onClose={closeAll}>{label}</MobileLink>
            ))}
          </MobileSection>

          {/* Mobile CTA */}
          <div className="px-5 py-4">
            <Link
              to="/contact"
              onClick={closeAll}
              className="block w-full text-center text-white text-sm font-semibold py-2.5 rounded transition-colors"
              style={{ background: "var(--accent-orange)" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

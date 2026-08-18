import { Link } from "react-router-dom";

import visolveLogo from "../assets/logo.png";
import shraiLogo from "../assets/shriai.png";

export default function BrandLogos() {
  return (
    <div className="flex items-center gap-3 sm:gap-5">
      <a
        href="https://www.shri-ai.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:opacity-90 transition"
        aria-label="ShriAI – Visit shri-ai.org"
      >
        <img
          src={shraiLogo}
          alt="ShriAI"
          className="h-14 w-auto sm:h-16 object-contain drop-shadow-xs"
        />
      </a>
      <span aria-hidden="true" className="h-8 w-px bg-violet-200 sm:h-10" />
      <Link to="/" className="flex items-center hover:opacity-90 transition">
        <img src={visolveLogo} alt="Visolve" className="h-9 w-auto sm:h-11" />
      </Link>
    </div>
  );
}

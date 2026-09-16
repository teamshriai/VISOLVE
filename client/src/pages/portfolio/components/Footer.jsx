import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-12 px-gutter text-center text-sm text-ink-muted border-t border-line bg-tint-cream">
      © {new Date().getFullYear()} Visolve Technologies. All rights reserved. |{" "}
      <Link to="/" className="text-accent-deep hover:text-ink transition-colors">
        Back to visolve.com
      </Link>
    </footer>
  );
}

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-10 px-6 text-center text-sm text-slate-500 border-t border-violet-100 bg-stone-50">
      © {new Date().getFullYear()} Visolve Technologies. All rights reserved. |{" "}
      <Link to="/" className="text-medical-blue font-medium">
        Back to visolve.com
      </Link>
    </footer>
  );
}

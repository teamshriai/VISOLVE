import { Link, useLocation } from "react-router-dom";

const subNavLinks = [
  { label: "Cloud Hosting", to: "/services/openemr" },
  { label: "RCM", to: "/services/medicalbilling" },
  { label: "Patient Portal", to: "/services/patientportal" },
  { label: "OpenEMR Pro", to: "/services/openemr-pro" },
  { label: "Scheduler Pro", to: "/services/openemr-pro/scheduler" },
  { label: "Google Calendar", to: "/services/openemr-pro/googlecalendar" },
  { label: "Customization", to: "/services/customization" },
  { label: "e-Prescription", to: "/services/openemr-pro/eprescription" },
  { label: "Interoperability (HL7/FHIR)", to: "/services/openemr-pro/interoperability" },
];

function OpenEMRSubNav({ activeLabel }) {
  const location = useLocation();

  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 flex items-center space-x-1 py-2 whitespace-nowrap">
        {subNavLinks.map((item) => {
          const isActive = activeLabel
            ? item.label === activeLabel
            : location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`px-3 py-1.5 rounded text-xs md:text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-[#f16d05] text-white"
                  : "text-[#0B2A4A] hover:text-[#f16d05] hover:bg-orange-50"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default OpenEMRSubNav;

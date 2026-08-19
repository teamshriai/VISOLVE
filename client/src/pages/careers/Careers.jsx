import React from "react";
import { Link } from "react-router-dom";

const careersContentImg = "/assets/images/content_images/careers_content.png";
const sideCallImg = "/assets/images/side_call.jpg";

const openPositions = [
  {
    title: "Hypervisor-Capacity Planning Tech Lead",
    path: null,
  },
  {
    title: "Senior Software Fullstack PHP Developer",
    path: null,
  },
  {
    title: "System/Cloud Engineer",
    path: null,
  },
  {
    title: "QA Automation Test Engineer/Lead (Cypress)",
    path: null,
  },
  {
    title: "Software Developer UI",
    path: null,
  },
  {
    title: "Senior Backend Developer - Python / Django",
    path: null,
  },
];

const enterpriseItLinks = [
  { title: "Migration Services", path: "/services" },
  { title: "Cloud Services", path: "/services" },
  { title: "Performance Tools", path: "/services" },
  { title: "Product/Solution QA Certification", path: "/services" },
  { title: "Database Services", path: "/services" },
  { title: "Hadoop/Business Analytics", path: "/services" },
  { title: "Virtualization Services", path: "/services" },
  { title: "Open Source Services", path: "/services" },
  { title: "Enterprise Security", path: "/services" },
  { title: "Web Caching", path: "/services" },
  { title: "Solutions Demo Portals", path: "/services" },
  { title: "Internet of Things (IoT)", path: "/services" },
];

const healthcareItLinks = [
  { title: "OpenEMR Solutions", path: "/services/openemr" },
  { title: "Health IT Engineering", path: "/services" },
  { title: "Interoperability Solutions", path: "/services/interoperability" },
  { title: "Medical Billing Solutions", path: "/services/medicalbilling" },
];

function Careers() {
  return (
    <div className="bg-white min-h-screen text-[#333333] font-sans w-full">
      {/* Banner / Header Image */}
      <div className="bg-[#f5f5f5] py-4 border-b border-gray-200 w-full">
        <div className="max-w-6xl mx-auto px-4 flex justify-center">
          <img
            src={careersContentImg}
            alt="Careers Header"
            className="max-h-24 object-contain w-auto max-w-full"
          />
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-[#e9ecef] py-2 border-b border-gray-300 text-sm w-full">
        <div className="max-w-6xl mx-auto px-4 text-gray-600">
          <Link to="/about" className="hover:underline text-[#0070c0]">
            About Us
          </Link>{" "}
          &gt;&gt; <span className="text-gray-800 font-semibold">Careers</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
          {/* Main Left / Center Content (3 cols on large screens, 1 col on small screens) */}
          <div className="lg:col-span-3 space-y-6 text-[15px] leading-relaxed text-[#333333] w-full">
            <p className="text-justify sm:text-left">
              In a world where possibilities are endless, an ever changing pace
              of technology is at every man's grasp. The competition is fierce.
              Do you dare to step in and change the course of tomorrow for the
              better? Do you feel that you are the technological revolution than
              a part of it? Then apply within to make history with the brightest
              minds at the stroke of a key, over a healthy debate or for the
              sheer love for technology.
            </p>

            <div className="text-center py-2">
              <span className="text-[#000000] text-base sm:text-lg font-medium">
                Help us to help you grow!
              </span>
            </div>

            <div className="space-y-3 pt-2">
              {openPositions.map((job, idx) => (
                <div key={idx}>
                  {job.path ? (
                    <Link
                      to={job.path}
                      className="text-[#004267] hover:underline font-normal text-sm sm:text-base block"
                    >
                      {job.title}
                    </Link>
                  ) : (
                    <p className="text-[#004267] font-normal text-sm sm:text-base">
                      {job.title}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar (1 col on large screens, stacks below main content on smaller screens) */}
          <div className="lg:col-span-1 space-y-6 w-full">
            {/* Enterprise IT */}
            <div className="bg-[#f9f9f9] p-4 rounded border border-gray-200">
              <h3 className="font-bold text-gray-800 text-base mb-2 border-b pb-1">
                Enterprise IT
              </h3>
              <ul className="text-sm space-y-1.5 text-[#0070c0]">
                {enterpriseItLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path} className="hover:underline block">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Healthcare IT */}
            <div className="bg-[#f9f9f9] p-4 rounded border border-gray-200">
              <h3 className="font-bold text-gray-800 text-base mb-2 border-b pb-1">
                Healthcare IT
              </h3>
              <ul className="text-sm space-y-1.5 text-[#0070c0]">
                {healthcareItLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path} className="hover:underline block">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Side Call Box */}
            <div className="bg-[#f4f7f9] p-4 rounded border border-blue-100 flex items-center space-x-3">
              <img
                src={sideCallImg}
                alt="Talk to our experts"
                className="w-10 h-10 object-contain flex-shrink-0"
              />
              <div>
                <p className="text-xs text-gray-600 font-medium">
                  Talk to our experts:
                </p>
                <p className="text-sm sm:text-base font-bold text-gray-800">
                  +1 408 666 4320
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;


import React from "react";
import { Link } from "react-router-dom";
const aboutusContentImg = "/assets/images/content_images/aboutus_content.png";
const sideCallImg = "/assets/images/side_call.jpg";

function About() {
  return (
    <div className="bg-white min-h-screen text-[#333333] font-sans">
      {/* Banner / Header Image */}
      <div className="bg-[#f5f5f5] py-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 flex justify-center">
          <img
            src={aboutusContentImg}
            alt="About Us Header"
            className="max-h-24 object-contain"
          />
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-[#e9ecef] py-2 border-b border-gray-300 text-sm">
        <div className="max-w-6xl mx-auto px-4 text-gray-600">
          <Link to="/about" className="hover:underline text-[#0070c0]">
            About Us
          </Link>{" "}
          &gt;&gt; <span className="text-gray-800 font-semibold">Company</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Left / Center Content (3 cols) */}
          <div className="lg:col-span-3 space-y-6 text-[15px] leading-relaxed text-[#333333]">
            <p className="text-lg font-bold text-[#1f497d]">
              ViSolve Inc. is dedicated to provide software solutions and
              services based on open source and leading-edge technologies to
              healthcare providers and technology companies to help them meet
              their business objectives.
            </p>

            <p>
              Founded in 1995, ViSolve is headquartered in San Jose, California
              and is a product development, software services and consulting
              firm focused primarily on providing Healthcare IT and Enterprise
              IT services using open source and leading-edge technologies. For
              decades ViSolve has been delivering scalable and cost-effective
              services to global customers with immediate and measurable
              business values.
            </p>

            <p>
              Our knowledge and experience that span various domains, platforms
              and technologies combined with our strong understanding of
              business processes enable us to provide services that meet each
              clients unique business requirements. We are committed to help
              organizations to get most out of their IT investments by offering
              7x24 commercial support and services.
            </p>

            <p>ViSolve can attribute its success directly to:</p>

            <ul className="list-disc pl-6 space-y-1.5">
              <li>
                Experienced, passionate and loyal team of people who work as one
                to serve our customers
              </li>
              <li>
                Intimate relationships with our customers that help us
                understand their distinctive business requirements
              </li>
              <li>
                Domain expertise that helps us deliver what is expected from us
              </li>
              <li>
                Deliverables that meet or surpass customer expectations
              </li>
              <li>
                Value added services that offer increased productivity and
                profitability to our customers
              </li>
              <li>
                Customized support based on each customers requirements
              </li>
              <li>
                Network with key industry veterans, stalwarts and vendors that
                keep us abreast of the industrys solution needs and federal
                mandates and requirements
              </li>
            </ul>

            <div className="pt-2">
              <h2 className="text-lg font-bold text-[#1f497d] mb-2">
                Healthcare IT
              </h2>
              <p className="mb-3">
                ViSolve Healthcare IT is committed to serve hospitals, physician
                practices, labs, imaging centers and{" "}
                <Link
                  to="/portfolio"
                  className="text-[#0070c0] hover:underline"
                >
                  medical device manufacturers
                </Link>{" "}
                by providing them standard interoperable and vendor neutral
                healthcare IT solutions and services. Our services are{" "}
                <Link
                  to="/portfolio"
                  className="text-[#0070c0] hover:underline"
                >
                  Lab Interoperability Module
                </Link>{" "}
                – connecting labs and disparate doctor EMR/EHR systems,
                customized EHR/EMR services (OpenEMR, VistA, Tolven, Myca,
                etc.,), healthcare interoperability, healthcare software
                engineering services and healthcare IT consulting services.
              </p>
              <p className="mb-3">
                Healthcare IT team includes clinicians, developers and process
                experts - people deeply experienced in healthcare domain and
                cutting edge technologies.
              </p>
              <p className="mb-2">How we are distinct:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  Vendor neutral, one stop shop for cost effective and quality
                  Healthcare IT Services
                </li>
                <li>
                  Unmatched customization to match distinct business
                  requirements of a healthcare provider
                </li>
                <li>
                  Hybrid Service Delivery Model enabling lowest Total Cost of
                  Ownership (TCO) and unparalleled cost-value equation
                </li>
                <li>
                  Armed with adequate resources skilled in diverse technical
                  skill-set and domain expertise facilitating the ability to
                  staff immediately according to client/project needs
                </li>
                <li>Flexibility and efficiency in assignments</li>
                <li>
                  World Class 7x24 support infrastructure providing an average
                  response time of &lt; 4 hours
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <h2 className="text-lg font-bold text-[#1f497d] mb-2">
                Enterprise Technology
              </h2>
              <p className="mb-3">
                With its phenomenal technical workforce and global alliances,
                ViSolve is one of the most preferred partners of HP and has long
                standing relationship with their product development,
                world-wide pre-sales and support teams. With 17 years of
                experience and extensive knowledge working with global
                customers on evolving technologies time-to-time, ViSolve
                features:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 mb-4">
                <li>
                  End-to-end capabilities in Data Center Consolidation,
                  Enterprise Security, Enterprise Migration and Support
                  Services
                </li>
                <li>
                  In-depth knowledge in Virtualization, Cloud using Oracle on
                  UNIX/Linux and Database Performance tuning
                </li>
                <li>
                  Over a decade of experience in Open Source Product Development
                  with proven expertise in LAMP and security services; a
                  leading contributor to the Open Source community
                </li>
              </ul>

              <div className="border border-[#EAEBEC] p-3 mb-4 bg-[#FFFFEF] rounded text-sm">
                <span className="font-bold text-[#ff6600]">Article : </span>
                <Link
                  to="/portfolio"
                  className="font-bold text-[#0070c0] hover:underline"
                >
                  How to Fix the ‘Heartbleed’ Flaw?
                </Link>
              </div>

              <p>
                With extensive capabilities that span various domains and
                technologies, ViSolve can offer cost-effective solutions,
                services and world-class support to all its healthcare IT and
                enterprise IT customers.
              </p>
            </div>
          </div>

          {/* Right Sidebar (1 col) */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#f9f9f9] p-4 rounded border border-gray-200">
              <h3 className="font-bold text-gray-800 text-base mb-2 border-b pb-1">
                Enterprise IT
              </h3>
              <ul className="text-sm space-y-1.5 text-[#0070c0]">
                <li>
                  <Link to="/services" className="hover:underline">
                    Migration Services
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">
                    Performance Tools
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">
                    Product/Solution QA Certification
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">
                    Database Services
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">
                    Virtualization Services
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">
                    Open Source Services
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">
                    Enterprise Security
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">
                    Web Caching
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">
                    Solutions Demo Portals
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-[#f9f9f9] p-4 rounded border border-gray-200">
              <h3 className="font-bold text-gray-800 text-base mb-2 border-b pb-1">
                Healthcare IT
              </h3>
              <ul className="text-sm space-y-1.5 text-[#0070c0]">
                <li>
                  <Link to="/services" className="hover:underline">
                    OpenEMR Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">
                    Health IT Engineering
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">
                    Interoperability Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:underline">
                    Medical Billing Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-[#f4f7f9] p-4 rounded border border-blue-100 flex items-center space-x-3">
              <img
                src={sideCallImg}
                alt="Talk to our experts"
                className="w-10 h-10 object-contain"
              />
              <div>
                <p className="text-xs text-gray-600 font-medium">
                  Talk to our experts:
                </p>
                <p className="text-base font-bold text-gray-800">
                  +1 (408) 850 2243
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

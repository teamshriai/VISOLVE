import { useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: "professional",
    background: "/assets/openemr/s1.jpg",
    openemrLogo: "/assets/openemr/Login-logo-nopad.png",
    title: "Professional Edition (7.X)",
    quote: (
      <>
        Control your destiny!
        <br />
        <span className="font-bold text-[#ff8000]">Customize </span>
        your business Solution with
        <br /> Open Source Software
      </>
    ),
    features: [
      "(Patient Portal)",
      "Smart Billing",
      "Lab Integration",
      "Scheduler",
      "Hosting and Deployment",
      "FHIR Enabled",
      "7x24 Support",
    ],
    buttons: [
      { text: "OpenEMR Pro", href: "https://openemrpro.visolve.com/interface/login/login.php?site=default", external: true },
      { text: "Revenue Cycle Management", href: "https://www.visolve.com/patientportal/", external: true },
      { text: "RCM AI", href: "/services/medicalbilling", external: false },
      { text: "Patient Portal", href: "https://www.visolve.com/patientportal/", external: true },
      { text: "Google Calendar Integration", href: "/services/openemr-pro/googlecalendar", external: false },
      { text: "Tele Health", href: "/services/openemr-pro/telehealth", external: false },
    ],
  },
  {
    id: "patient-portal",
    background: "/assets/openemr/s1.jpg",
    title: "Patient Portal",
    quote: (
      <>
        Control your destiny!
        <br />
        <span className="font-bold text-[#ff8000]">Customize </span>
        your business Solution with
        <br /> Open Source Software
      </>
    ),
    features: [
      "Video Visit",
      "Provide a better service for your patients",
      "Automated Reminders",
      "Access to health Records 7x24",
      "Ability to order refills online",
      "Self Schedule Appointments",
      "Provide secured communication",
      "Pay bills Online",
    ],
    buttons: [
      { text: "Patient Portal Demo", href: "https://www.visolve.com/patientportal/", external: true },
      { text: "Resources", href: "/services/patientportal", external: false },
    ],
  },
  {
    id: "billing",
    background: "/assets/openemr/slide_openemr.jpg",
    title: "Smart Billing",
    quote: (
      <>
        Control your destiny!
        <br />
        <span className="font-bold text-[#ff8000]">Customize </span>
        your business Solution with
        <br /> Open Source Software
      </>
    ),
    features: [
      "OpenSource based Smart Billing",
      "HIPAA Compliant AWS Solution",
      "Cloud/Standalone (On Premise)",
      "Claim Scrubbing",
    ],
    buttons: [
      { text: "Smart Billing Demo", href: "https://billing.visolve.com/user-registration/", external: true },
      { text: "Resources", href: "/smart-billing-contents", external: false },
    ],
  },
  {
    id: "fhir",
    background: "/assets/openemr/s4.jpg",
    title: "Interoperability with FHIR",
    quote: (
      <>
        Control your destiny!
        <br />
        <span className="font-bold text-[#ff8000]">Customize </span>
        your business Solution with
        <br /> Open Source Software
      </>
    ),
    features: [
      "Interoperability out-of-the-box",
      "Customize solution to meet your business needs",
      "Quickly Develop Mobile Apps",
      "Easily integrate with Medical Devices",
    ],
    buttons: [
      { text: "OpenEMR - FHIR Enabled", href: "https://openemrpro.visolve.com/interface/login/login.php?site=default", external: true },
      { text: "OpenEMR + FHIR Architecture", href: "/smart-fhir-contents", external: false },
    ],
  },
  {
    id: "aws",
    background: "/assets/openemr/aws_new_form.jpg",
    title: "Highly secured hosting in AWS",
    quote: (
      <>
        Control your destiny!
        <br />
        <span className="font-bold text-[#ff8000]">Customize </span>
        your business Solution with
        <br /> Open Source Software
      </>
    ),
    features: [
      "7x24 Support",
      "Access anywhere anytime",
      "Cost effective hosted services",
      "Value added services",
      "Customization",
      "Smart Billing",
      "Smart Patient Portal",
      "Hassel free patch updates",
      "Backup and Recovery",
    ],
    buttons: [
      { text: "Free Trial", href: "/smart-aws-contents", external: false },
    ],
  },
];

const subNavItems = [
  { name: "Cloud Hosting", href: "/services" },
  { name: "RCM", href: "/services/medicalbilling" },
  { name: "Patient Portal", href: "/services/patientportal" },
  { name: "Tele Health/Video consulting", href: "/services/openemr-pro/telehealth" },
  { name: "Scheduler", href: "/services/openemr-pro/scheduler" },
  { name: "Google Calendar Integration", href: "/services/openemr-pro/googlecalendar" },
  { name: "Customization", href: "/services/customization" },
  { name: "e-Prescription", href: "/services/openemr-pro/eprescription" },
  { name: "Interoperability(HL7/FHIR)", href: "/services/openemr-pro/interoperability" },
  { name: "MU", href: "/services/openemr-pro/meaningfuluse" },
];

function OpenEMR() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const slide = slides[currentSlide];

  const ppNestedFeatures = [
    "Automated Reminders",
    "Access to health Records 7x24",
    "Ability to order refills online",
    "Self Schedule Appointments",
  ];

  const awsNestedFeatures = [
    "Customization",
    "Smart Billing",
    "Smart Patient Portal",
  ];

  return (
    <div className="w-full bg-white font-sans">
      {/* OpenEMR Sub-Navigation */}
      <div className="w-full bg-white border-b border-gray-200 py-2.5 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-3 md:space-x-5 text-xs md:text-sm font-bold text-[#555] whitespace-nowrap">
          {subNavItems.map((item, idx) => (
            <div key={item.name} className="flex items-center space-x-3 md:space-x-5">
              <Link
                to={item.href}
                className="text-[#ff8000] hover:text-[#e67300] transition-colors font-semibold"
              >
                {item.name}
              </Link>
              {idx < subNavItems.length - 1 && <span className="text-gray-300">|</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Main Hero / Carousel Section */}
      <main className="w-full">
        <section className="relative w-full bg-white py-8 md:py-12 border-b border-gray-200">
          {/* Top Carousel Dots */}
          <div className="w-full flex justify-center items-center mb-6 space-x-2.5">
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-3.5 h-3.5 rounded-full transition-all ${
                  currentSlide === index ? "bg-[#ff8000]" : "bg-[#c6c6c6] hover:bg-[#ff8000]"
                }`}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative min-h-[460px] flex items-center">
            {/* Triangular Carousel Arrows */}
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-20 hover:scale-110 transition-transform"
            >
              <img
                src="/assets/openemr/slider-left-arrow.png"
                alt="Previous"
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-20 hover:scale-110 transition-transform"
            >
              <img
                src="/assets/openemr/slider-right-arrow.png"
                alt="Next"
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
            </button>

            {/* Slide Layout */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center px-8 md:px-12">
              {/* Left Column: Logos, Title, Feature List */}
              <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
                {slide.id === "professional" && (
                  <div>
                    {slide.openemrLogo && (
                      <img
                        src={slide.openemrLogo}
                        alt="OpenEMR"
                        className="h-10 md:h-12 w-auto object-contain mb-2"
                      />
                    )}
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222]">
                      {slide.title}
                    </h1>
                  </div>
                )}

                {slide.id === "patient-portal" && (
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222] mb-1">
                      Patient Portal
                    </h1>
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <span>Now available with</span>
                      <img
                        src="/assets/openemr/Login-logo.png"
                        alt="OpenEMR"
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                  </div>
                )}

                {slide.id === "billing" && (
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#222] mb-1">
                      Smart Billing
                    </h1>
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <span>Now available with</span>
                      <img
                        src="/assets/openemr/Login-logo.png"
                        alt="OpenEMR"
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                  </div>
                )}

                {slide.id === "fhir" && (
                  <h1 className="text-2xl md:text-3xl font-bold text-[#222] flex items-center flex-wrap gap-2">
                    <span>Interoperability with</span>
                    <img
                      src="/assets/openemr/new_fhir_logo.png"
                      alt="FHIR"
                      className="h-8 w-auto object-contain"
                    />
                  </h1>
                )}

                {slide.id === "aws" && (
                  <h1 className="text-2xl md:text-3xl font-bold text-[#222] flex items-center flex-wrap gap-2">
                    <span>Highly secured hosting in</span>
                    <img
                      src="/assets/openemr/amazon-aws.png"
                      alt="Amazon AWS"
                      className="h-8 w-auto object-contain"
                    />
                  </h1>
                )}

                {/* Features List */}
                <div className="space-y-1.5 pt-2">
                  {slide.features.map((feature, idx) => {
                    const isNested =
                      (slide.id === "patient-portal" && ppNestedFeatures.includes(feature)) ||
                      (slide.id === "aws" && awsNestedFeatures.includes(feature));

                    return (
                      <div
                        key={`${feature}-${idx}`}
                        className={`flex items-center gap-2 text-xs md:text-sm font-semibold text-[#333] ${
                          isNested ? "ml-5" : ""
                        }`}
                      >
                        <img
                          src={
                            isNested
                              ? "/assets/openemr/tick1-orange.png"
                              : "/assets/openemr/check-orange.png"
                          }
                          alt="bullet"
                          className="w-3.5 h-3.5 flex-shrink-0"
                        />
                        <span>{feature}</span>
                        {slide.id === "patient-portal" && feature === "Video Visit" && (
                          <img
                            src="/assets/openemr/new_June_12.gif"
                            alt="new"
                            className="h-4 w-auto ml-1 inline-block"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Middle Column: Doctor/Hero Image Centered */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center my-4 lg:my-0">
                <img
                  src={slide.background}
                  alt="Doctor Illustration"
                  className="max-h-[340px] w-auto object-contain drop-shadow-md rounded"
                />
              </div>

              {/* Right Column: Quote & Orange Action Buttons */}
              <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center space-y-4">
                <div className="text-center lg:text-right text-xs md:text-sm font-semibold text-gray-800 leading-snug">
                  <p>Customize Your Business Needs With</p>
                  <p className="font-bold text-[#ff8000]">Open Source Software Solution</p>
                </div>

                <div className="flex flex-col gap-2 w-full max-w-[220px]">
                  {slide.buttons.map((btn) => (
                    btn.external ? (
                      <a
                        key={btn.text}
                        href={btn.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full"
                      >
                        <button
                          type="button"
                          className="w-full py-2 px-3 bg-[#ff8000] text-white text-xs md:text-sm font-bold rounded shadow hover:bg-[#e67300] transition-colors text-center"
                        >
                          {btn.text}
                        </button>
                      </a>
                    ) : (
                      <Link key={btn.text} to={btn.href} className="block w-full">
                        <button
                          type="button"
                          className="w-full py-2 px-3 bg-[#ff8000] text-white text-xs md:text-sm font-bold rounded shadow hover:bg-[#e67300] transition-colors text-center"
                        >
                          {btn.text}
                        </button>
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Below Hero: Solutions Section */}
        <section id="vi-solutions" className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#262626]">Solutions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Patient Portal */}
              <Link to="/services/patientportal" className="group block bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden">
                <div className="h-44 overflow-hidden">
                  <img
                    src="/assets/openemr/mobile-home.png"
                    alt="Patient Portal"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">(PatientPortal)</h3>
                  <p className="text-xs text-gray-600 leading-relaxed text-justify">
                    Engage your patients using HIPAA-compliant - ViSolve Patient Portal, a solution to assist patients with features such as Video consult, Secure messaging and automated reminder system, Appointment Scheduling, personal health records, Prescription refill request, Online payments.
                  </p>
                </div>
              </Link>

              {/* Card 2: Billing */}
              <Link to="/smart-billing-contents" className="group block bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden">
                <div className="h-44 overflow-hidden">
                  <img
                    src="/assets/openemr/Sol-medical-billing-min.jpg"
                    alt="ViSolve Smart Billing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Billing</h3>
                  <p className="text-xs text-gray-600 leading-relaxed text-justify">
                    ViSolve's cloud-based medical billing (Smart Billing) helps healthcare organizations of all sizes increase revenue, reduce costs associated with managing insurance claims and accelerate cash flow including patient eligibility verification that completely integrates your financial, reporting and scheduling needs.
                  </p>
                </div>
              </Link>

              {/* Card 3: Interoperability */}
              <Link to="/services/interoperability" className="group block bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden">
                <div className="h-44 overflow-hidden">
                  <img
                    src="/assets/openemr/Sol-Interoperability-min.jpg"
                    alt="Interoperability"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Interoperability</h3>
                  <p className="text-xs text-gray-600 leading-relaxed text-justify">
                    ViSolve's enhanced interoperability solutions enable you to, securely, and rapidly aggregate patient data from all sources and seamlessly share it for more coordinated, efficient care between disparate systems (ambulatory care to hospital systems).
                  </p>
                </div>
              </Link>

              {/* Card 4: OpenEMR-Professional Edition */}
              <Link to="/customization-contents" className="group block bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 overflow-hidden">
                <div className="h-44 overflow-hidden">
                  <img
                    src="/assets/openemr/openemr_box.JPG"
                    alt="OpenEMR Customization"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">OpenEMR-Professional Edition</h3>
                  <p className="text-xs text-gray-600 leading-relaxed text-justify">
                    No need to change the way you work, rather we change the system to work the way you want. We provide Customized OpenEMR with value added Component with highly secured hosting in AWS, to best fits a practice so you can focus on patient care.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="vi-whyus" className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#262626]">Why Us</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Item 1 */}
              <div className="bg-white rounded-lg border border-gray-200 shadow p-6 text-center">
                <img src="/assets/openemr/whyus-img11.jpg" alt="Lower Cost" className="w-full h-40 object-cover rounded mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Lower Cost of Ownership</h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  No start up costs or fat payments. SAAS solutions hosted and supported for a minimal monthly fee. Open Source solutions comes totally license free. Thus enabling low cost of ownership for customers.
                </p>
              </div>

              {/* Item 2 */}
              <div className="bg-white rounded-lg border border-gray-200 shadow p-6 text-center">
                <img src="/assets/openemr/whyus-img22.jpg" alt="7x24 Support" className="w-full h-40 object-cover rounded mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Improved Services</h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  Hybrid Service Delivery using onsite and remote resources, who possess best in class healthcare domain expertise and technical skills. Customized solutions and support across timezones delivers high value.
                </p>
              </div>

              {/* Item 3 */}
              <div className="bg-white rounded-lg border border-gray-200 shadow p-6 text-center">
                <img src="/assets/openemr/whyus-img33.jpg" alt="Peace of mind" className="w-full h-40 object-cover rounded mb-4" />
                <h3 className="text-lg font-bold text-gray-800 mb-2">Peace of Mind</h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">
                  Provides one stop solutions for a healthcare practice’s IT needs. No more hassles of dealing with multiple vendors and disparate systems. Works as an extension of customer’s business delivering improved outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default OpenEMR;

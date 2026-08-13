import React from "react";
import { Link } from "react-router-dom";

const coreTeamMembers = [
  {
    id: "sena",
    name: "Sena Palanisami",
    title: "Founder, CEO & Executive Board Member",
    linkedin: "https://www.linkedin.com/in/sena2visolve",
    image: "/assets/images/core-team/sena-2.jpg",
    quote:
      "A graduate of University of Minnesota and a tech savvy entrepreneur with over 30 years of experience in product development and solutions in cutting edge technologies. He has a passion for Open Source with a focus on AI, security and managing international software operations.",
    bio: [
      "Sena Palanisami has 30 years of experience in software product development, founding international software R&D operations, managing partners and customers.",
      "Sena founded the ViSolve US operation in 1998. He assumed the responsibility of chairman and CEO of ViSolve in 2001. In that role, Sena drives the overall direction of the company and oversees the company's operation, administrative, finance, sales and marketing functions. During his leadership at ViSolve, he has grown ViSolve into a 50+ strong team and a multimillion dollar operation.",
      'Sena\'s enthusiasm, entrepreneurial instincts, strategic thinking and commitment to the vision of information technology enabling "better healthcare any time from anywhere in the world" has driven ViSolve to provide customized and interoperable services and solutions that help communities to reduce healthcare costs, improve efficiency and care. He is also the Board Member of one of the most popular Open Source based EHR Community and active member of HIMSS.',
      "Prior to joining ViSolve, Sena worked for nearly 20 years at Hewlett-Packard. During his tenure at HP, Sena started as a software development engineer, and went on to manage several assignments in Development, Operations, Advanced Product Planning, Business Development and Customer Support including founding International software operations for HP in Australia and India.",
      "Sena holds a Master's degree in mathematics, and has a Master's in Computer Science from the University of Minnesota in Minneapolis.",
    ],
  },
  {
    id: "pendy",
    name: "Pendy Pendyala",
    title: "Executive Board Member",
    linkedin: "",
    image: "/assets/images/core-team/pendy.jpg",
    quote:
      "Pendy was most recently the Assistant Dean & Executive Director of the IBEAR MBA Program and International Outreach at the Marshall School of Business, University of Southern California. Prior to joining USC, Pendy held wide-ranging senior leadership roles in General Management, Marketing and Operations at various global companies, based in the US, India and China.",
    bio: [
      "Pendy Pendyala is on the Advisory Board of several Silicon Valley Companies. To further his desire to 'do good while doing good business', he has been increasing his involvement with companies in the healthcare space. His passion for innovative consumer products, user-centric design and scaling businesses globally adds great value to the ViSolve Board in their pursuit of 'Wearable Healthcare Technology and Tele-health Solutions'.",
      "He was most recently the Assistant Dean & Executive Director of the IBEAR MBA Program and International Outreach at the Marshall School of Business, University of Southern California. Prior to joining USC, Pendy held wide-ranging senior leadership roles in General Management, Marketing and Operations at various global companies, based in the US, India and China. His responsibilities spanned leading the $ 8 Billion world-wide Monochrome LaserJet Business of Hewlett Packard as its Vice-President & General Manager to starting and rapidly scaling first-of-a-kind innovative businesses at Seiko Instruments and HP.",
      "He successfully led several transformative intiatives such as transitioning the worldwide headquarters of the Monochrome LaserJet business from the United States to China to address high-growth opportunities in emerging markets; increasing customer satisfaction while lowering costs and generating revenues at the point of service in the Americas Consumer Support Delivery organization that provided support for more than 5,000 of HP's consumer products to more than 100 million U.S. consumers; and merging 35 organizations into an integrated Americas Partner Operations on the heels of the Hewlett Packard-Compaq merger.",
      "Pendy graduated from the IBEAR MBA program in 1988, has an MBA from the Indian Institute of Management, Calcutta and has an undergraduate degree in Mechanical Engineering from the Indian Institute of Technology, Madras, India.",
    ],
  },
  {
    id: "samuel",
    name: "Dr. Samuel T.Bowen",
    title: "Executive Board Member",
    linkedin: "",
    image: "/assets/images/core-team/samuel.jpg",
    quote:
      "Dr. Bowen is a diplomat of the American Board of Internal Medicine and has substantial training and experience in primary care, urgent care, and emergency and occupational care environments.",
    bio: [
      "Dr. Bowen is a diplomat of the American Board of Internal Medicine and has substantial training and experience in primary care, urgent care, and emergency and occupational care environments.",
      "He was an affiliate faculty in the Advanced Cardiac Life Support and Pediatric Advanced Life Support at American Heart Association. Dr. Bowen established his first medical practice in Cornelius, N.C. in 1987 and Bowen Primary & Urgent Care in 1998 and is currently on staff at Catawba Valley Medical Center in Hickory, N.C.",
      "He obtained his Bachelor of Science degree from Rice University in Houston, Texas and his Doctor of Medicine from the University of Texas Medical School in Houston, Texas. He completed his internal medicine residency at the University of Texas Health Science Center at Houston in 1987.",
      "Dr. Bowen's interests in computer programming prompted his involvement in developing free, open source software. He began using OpenEMR in his practice from 2004 and has been involved in the development process. He has been an active contributor to forums involving free open source medical software and has helped many physicians and IT professionals learn how to install and operate OpenEMR.",
      "Dr. Bowen is the Founder and Executive Director of OEMR, a tax exempt, non-profit organization that funds and guides the OpenEMR project.",
      "He is also the Founder and President Board of Directors of Apollo Health Care Cooperative, a non-profit that provides primary care for uninsured patients in Catawba County, NC.",
      "Founder and President of Open Source Medical Software (OSMS) a non-profit organization.",
    ],
  },
  {
    id: "sunil",
    name: "Dr. Sunil Nihalani",
    title: "Executive Board Member",
    linkedin: "https://www.linkedin.com/pub/sunil-nihalani/5/83a/a69",
    image: "/assets/images/core-team/sunil.jpg",
    quote:
      "Dr. Sunil Nihalani, MD, is a board-certified internal medicine physician who has been in private practice since 1998 in central Florida. He is also a managing partner at Clinical Info Solutions, a revenue cycle management company based in Winter Haven, Florida, which he co-founded in 2007.",
    bio: [
      "Dr. Sunil Nihalani, MD, is a board-certified internal medicine physician who has been in private practice since 1998 in central Florida. He is also a managing partner at Clinical Info Solutions, a revenue cycle management company based in Winter Haven, Florida, which he co-founded in 2007.",
      "Dr. Nihalani has a strong interest in healthcare IT and in developing innovative IT solutions for physicians. His vision is to use automation and artificial intelligence to provide evidence-based, cost-effective care to patients.",
      "He got his medical degree from Gandhi Medical College in Bhopal, India and did his residency training at St Louis University Hospital in St Louis, MO.",
      "Dr. Nihalani is currently chief of medical staff and a member of the board at Lake Wales Hospital, Lake Wales, Florida.",
    ],
  },
  {
    id: "radha",
    name: "Radha Chinnasamy",
    title: "Director - Finance",
    linkedin: "",
    image: "/assets/images/core-team/radha.jpg",
    quote:
      "Radha is responsible for Financial Operations at ViSolve. She holds a Master's degree in Accounting and Finance. She started her career at ViSolve and has worked closely with senior management to help the company meet and exceed the financial expectations for more than five years.",
    bio: [
      "Radha is responsible for Financial Operations at ViSolve. She holds a Master's degree in Accounting and Finance. She started her career at ViSolve and has worked closely with senior management to help the company meet and exceed the financial expectations for more than five years. She is responsible for ViSolve's worldwide finance organization, including accounting and reporting, strategic planning, treasury, tax, audit and investor relations. She takes care of the Indian operations including finance, accounting and logistics management. She is known for her accurate cost estimation and intelligent investment strategies.",
    ],
  },
  {
    id: "ajay",
    name: "Ajay Singh",
    title: "Advisory Board Member",
    linkedin: "https://sg.linkedin.com/in/ajay-singh-a32b07",
    image: "/assets/images/core-team/ajay.jpg",
    quote:
      "Ajay has more than 20 years of experience in product design, development, strategy and transformation projects across marketing, customer experience with top global enterprises. He is currently the founder and CEO of Stoodnt, a platform and marketplace focused on helping students, parents with U.S. college admissions by offering insights, online tools and counseling services.",
    bio: [
      "Ajay has more than 20 years of experience in product design, development, strategy and transformation. He has led a number of successful businesses, product launches and transformation projects across marketing, customer experience with companies such as American Express, Cendant, Intel and Booz Allen spread globally. Over the last four years he led Emerging Payments and Services product organization for International markets at American Express based in Asia. He is currently the founder and CEO of Stoodnt, a platform and marketplace focused on helping students, parents with U.S. college admissions by offering insights, online tools and counseling services. Ajay has an M.B.A from Harvard Business School, M.S in Computer Engineering from University of Texas at Austin and B.Tech from Indian Institute of Technology in India.",
    ],
  },
];

function CoreTeam() {
  return (
    <div className="bg-white min-h-screen text-[#333333] font-sans">
      {/* Header Banner */}
      <div className="bg-[#f2f4f7] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <img
            src="/assets/images/content_images/coreteam_content.png"
            alt="Core Team"
            className="max-h-20 object-contain"
          />
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-[#e9ecef] text-xs py-2 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-600">
          <Link to="/about" className="hover:underline text-[#215B87]">
            About Us
          </Link>{" "}
          &gt;&gt; <span className="font-semibold text-gray-800">Core Team</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          {coreTeamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 lg:p-8 flex flex-col lg:flex-row gap-8 items-start"
            >
              {/* Bio Column */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <div>
                    <h2 className="text-xl font-bold text-[#215B87]">
                      {member.name}
                    </h2>
                    <p className="text-sm italic text-gray-600">
                      {member.title}
                    </p>
                  </div>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <img
                        src="/assets/images/core-team/linkedin.png"
                        alt="LinkedIn Profile"
                        className="w-6 h-6 object-contain"
                      />
                    </a>
                  )}
                </div>

                <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                  {member.bio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Sidebar / Photo & Quote Column */}
              <div className="w-full lg:w-72 bg-[#f8f9fa] border border-gray-200 rounded-md p-4 flex flex-col items-center text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-36 object-cover rounded-full border-2 border-[#215B87] shadow-md mb-4"
                />
                <blockquote className="text-xs text-gray-600 italic border-l-2 border-[#FFA500] pl-3 text-left">
                  <span className="text-[#FFA500] text-base font-bold">“</span>
                  {member.quote}
                  <span className="text-[#FFA500] text-base font-bold">”</span>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoreTeam;

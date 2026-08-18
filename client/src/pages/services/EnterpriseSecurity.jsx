import React from 'react';
import { Link } from 'react-router-dom';
import { FiFileText } from 'react-icons/fi';

function EnterpriseSecurity() {
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-sm text-gray-600">
          <Link to="/services" className="hover:text-[#f16d05]">Services</Link>
          <span className="mx-2">&gt;&gt;</span>
          <Link to="/services/enterprise-it" className="hover:text-[#f16d05]">Enterprise IT</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span className="text-gray-800 font-medium">Enterprise Security (2FA, SSO)</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Enterprise Security (2FA, SSO)</h1>
          <p className="text-blue-100 mt-2 text-base md:text-lg">
            Two-Factor Authentication, Single Sign-On, One-Time Password (OTP), and Secure AAA Solutions
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-8">
            {/* Overview */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#496c96]">Two Factor Authentication</h3>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Computer security has been the victim of the "year of the" syndrome with firewalls, intrusion detections, VPNs, and now Certification authorities (CAs) for PKIs. One form of attack on network computing platforms is eavesdropping on network connections to obtain authentication such as Login IDs and Passwords of legitimate users. Given enough time for attempts, it is relatively easy for unauthorized intruders to crack a static password and above all manageability of passwords could prove to be big headache for enterprise IT administrators.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Setting up Public Key Infrastructure (PKI) with CA. Certificate Authorities and managing it could prove to be a costly affair, with year-on-year recurring investments. With Visolve's HP-UX AAA Solution your organization can easily provide users with secure access to data 24x7 from any remote location, using any computer. The OTP system protects against external passive attacks against the authentication subsystem. The OTP authentication system allows you to cost-effectively implement strong authentication in any RADIUS-enabled gateway including VPN solutions and web access solutions.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Large enterprises equip their staff with laptops and open their networks for remote access and with scenarios where companies hire temporary employees and vendors, in such environments; a simple static password solution can become a liability. Unlike static passwords, a one-time password changes each time user logs in with the password being generated either by time-synchronized or counter-synchronized methods that typically requires the user to carry a small piece of hardware in his key-chain.
              </p>
            </div>

            {/* Resources Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-3">
              <h4 className="font-bold text-gray-800 text-base">Security Downloads &amp; Resources</h4>
              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href="/assets/resources/Two-Factor Authentication.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:underline bg-white px-3 py-2 border border-gray-300 rounded shadow-sm"
                >
                  <FiFileText className="text-base text-gray-500" />
                  <span>Two-Factor Authentication Presentation (PDF)</span>
                </a>
                <a
                  href="/assets/resources/OTP for Banks from ViSolve.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:underline bg-white px-3 py-2 border border-gray-300 rounded shadow-sm"
                >
                  <FiFileText className="text-base text-gray-500" />
                  <span>OTP for Banks Datasheet (PDF)</span>
                </a>
              </div>
            </div>

            {/* Contact Callout */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-800 text-sm md:text-base">
                To know more about our support, please contact us by email at{' '}
                <a href="mailto:services@visolve.com" className="text-blue-600 font-semibold underline">
                  services@visolve.com
                </a>{' '}
                or call us at{' '}
                <a href="tel:+14088502243" className="text-blue-600 font-semibold underline">
                  +1 (408) 850 2243
                </a>.
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg space-y-4 shadow-sm">
              <h4 className="font-bold text-[#215B87] uppercase tracking-wider text-sm border-b pb-2">
                Enterprise IT Services
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link to="/services/migration" className="hover:text-[#f16d05]">Migration Services</Link></li>
                <li><Link to="/services/cloud" className="hover:text-[#f16d05]">Cloud Services</Link></li>
                <li><Link to="/services/performance-tools" className="hover:text-[#f16d05]">Performance Tools</Link></li>
                <li><Link to="/services/qa-certification" className="hover:text-[#f16d05]">Product/Solution QA Certification</Link></li>
                <li><Link to="/services/virtualization" className="hover:text-[#f16d05]">Virtualization Services</Link></li>
                <li><Link to="/services/opensource" className="hover:text-[#f16d05]">OpenSource Services</Link></li>
                <li><Link to="/services/security" className="font-bold text-[#f16d05]">Enterprise Security</Link></li>
                <li><Link to="/services/demo-portals" className="hover:text-[#f16d05]">Solutions Demo Portals</Link></li>
                <li><Link to="/services/iot" className="hover:text-[#f16d05]">Internet of Things (IoT)</Link></li>
                <li><Link to="/services/database" className="hover:text-[#f16d05]">Database Services</Link></li>
                <li><Link to="/services/hadoop-analytics" className="hover:text-[#f16d05]">Hadoop/Business Analytics</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EnterpriseSecurity;

import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, ArrowLeft, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import BrandLogos from "./components/BrandLogos";

const contactEmail = "info@oncotraceai.org";

const emailJsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const hasEmailJsConfig = Object.values(emailJsConfig).every(Boolean);

const contactDetails = [
    {
        icon: Mail,
        label: "Email Us",
        value: contactEmail,
        href: `mailto:${contactEmail}`,
    },
    {
        icon: Phone,
        label: "Call Us",
        value: "+1 408 666 4320",
        href: "tel:+14086664320",
    },
    {
        icon: MapPin,
        label: "Our Location",
        value: "ViSolve, Inc., 6559 Springpath Lane, San Jose, California – 95120, USA",
        href: "https://maps.google.com/?q=6559+Springpath+Lane+San+Jose+CA+95120",
    },
];

export default function PortfolioContact() {
    const formRef = useRef(null);
    const [status, setStatus] = useState("idle");
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        if (hasEmailJsConfig) {
            try {
            await emailjs.sendForm(
                emailJsConfig.serviceId,
                emailJsConfig.templateId,
                formRef.current,
                emailJsConfig.publicKey
            );
            setStatus("sent");
            return;
            } catch {
                // Fall through to a prefilled email draft when the service is unavailable.
            }
        }

        const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(
            form.subject || "Project Enquiry"
        )}&body=${encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
        )}`;
        window.location.href = mailtoLink;
        setStatus("draft");
    };

    return (
        <div className="portfolio-root min-h-screen bg-linear-to-b/srgb from-stone-50 via-blue-50/40 to-stone-50">
            {/* Navbar bar */}
            <header className="fixed top-0 w-full z-50 bg-stone-50/85 backdrop-blur-md border-b border-blue-100">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    <BrandLogos />
                    <Link
                        to="/portfolio"
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-medical-blue transition"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 pt-40 pb-28">
                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="text-xs font-semibold text-medical-teal uppercase tracking-widest">
                        Get In Touch
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 tracking-tight">
                        Let&apos;s Advance Something{" "}
                        <span className="gradient-text">Meaningful Together</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Whether you&apos;re advancing a health-tech product, leading a research initiative, or scaling an AI or data platform, we&apos;d love to understand where your team needs support.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-10 items-start">
                    {/* Contact info sidebar */}
                    <div className="lg:col-span-2 space-y-5-legacy">
                        {contactDetails.map(({ icon: Icon, label, value, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="flex items-start gap-4 bg-white/90 border border-blue-100 rounded-2xl p-5 card-hover"
                            >
                                <div className="w-11 h-11 rounded-xl bg-linear-to-br/srgb from-medical-blue to-medical-teal flex items-center justify-center shrink-0">
                                    <Icon size={20} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-0.5">
                                        {label}
                                    </p>
                                    <p className="text-sm font-medium text-slate-800">{value}</p>
                                </div>
                            </a>
                        ))}

                        <div className="bg-linear-to-br/srgb from-medical-blue to-medical-teal rounded-2xl p-6 text-white mt-6">
                            <h3 className="font-bold text-lg mb-2">Response Time</h3>
                            <p className="text-white/80 text-sm">
                                We typically respond within 24 hours on business days. For urgent
                                inquiries, please email us directly.
                            </p>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="lg:col-span-3 bg-white/90 border border-blue-100 rounded-2xl p-8 shadow-xs">
                        {status === "sent" || status === "draft" ? (
                            <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                                <CheckCircle size={56} className="text-medical-teal mb-4" />
                                <h2 className="text-2xl font-bold mb-2">
                                    {status === "sent" ? "Message Sent!" : "Email Draft Opened"}
                                </h2>
                                <p className="text-gray-600 mb-8">
                                    {status === "sent"
                                        ? "Thank you for reaching out. We'll get back to you soon."
                                        : "Please send the prefilled email from your email application to complete your enquiry."}
                                </p>
                                <button
                                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", company: "", subject: "", message: "" }); }}
                                    className="bg-medical-blue text-white font-semibold px-7 py-3 rounded-lg hover:bg-medical-dark transition"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5-legacy">
                                <input type="hidden" name="to_email" value={contactEmail} />
                                <input type="hidden" name="reply_to" value={form.email} />
                                <h2 className="text-xl font-bold mb-1">Send Us a Message</h2>
                                <p className="text-gray-500 text-sm mb-6">
                                    Tell us about your project and we&apos;ll get back to you.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Dr. Paul"
                                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 transition"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="you@company.com"
                                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 transition"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Organization / Company
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={form.company}
                                            onChange={handleChange}
                                            placeholder="Your company or research group"
                                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 transition"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Subject <span className="text-red-400">*</span>
                                        </label>
                                        <select
                                            required
                                            name="subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 transition bg-white"
                                        >
                                            <option value="">Select a topic…</option>
                                            <option>AI / ML Development</option>
                                            <option>Product Technology Collaboration</option>
                                            <option>Genomics / Oncology</option>
                                            <option>Cloud Infrastructure</option>
                                            <option>General Enquiry</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Message <span className="text-red-400">*</span>
                                    </label>
                                    <textarea
                                        required
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Describe your project, challenges, or questions…"
                                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 transition resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="w-full inline-flex items-center justify-center gap-2 bg-medical-blue text-white font-semibold px-7 py-3 rounded-lg hover:bg-medical-dark disabled:opacity-60 transition"
                                >
                                    {status === "sending" ? (
                                        "Sending…"
                                    ) : (
                                        <>
                                            Send Message <Send size={16} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="py-10 px-6 text-center text-sm text-slate-500 border-t border-blue-100 bg-stone-50">
                © {new Date().getFullYear()} Visolve Technologies. All rights reserved. |{" "}
                <Link to="/" className="text-medical-blue font-medium">
                    visolve.com
                </Link>
            </footer>
        </div>
    );
}

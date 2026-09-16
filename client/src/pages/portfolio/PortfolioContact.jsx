import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, ArrowLeft, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import BrandLogos from "./components/BrandLogos";
import Footer from "./components/Footer";
import useCardSpotlight from "./useCardSpotlight";

const contactEmail = "info@shri-ai.org";

const emailJsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const hasEmailJsConfig = Object.values(emailJsConfig).every(Boolean);

const inputClass =
    "w-full border border-line-strong rounded-sm bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-accent focus:ring-1 focus:ring-accent transition-colors";

const labelClass = "block text-eyebrow uppercase text-ink-muted mb-2";

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
    useCardSpotlight();

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
        <div className="portfolio-root min-h-screen bg-gradient-to-b from-tint-sky via-tint-pink-soft to-tint-cream [--card-accent:58_130_196]">
            {/* Navbar bar — keep this class string in sync with Navbar.jsx */}
            <header className="fixed top-0 w-full z-50 bg-surface border-b border-line">
                <div className="max-w-page mx-auto flex items-center justify-between px-gutter py-4">
                    <BrandLogos />
                    <Link
                        to="/portfolio"
                        className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-accent-deep transition-colors"
                    >
                        <ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" />
                        Back to Home
                    </Link>
                </div>
            </header>

            <div className="max-w-page mx-auto px-gutter pt-40 pb-section">
                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-eyebrow uppercase text-accent-deep mb-4">
                        Get In Touch
                    </p>
                    <h1 className="text-display font-light mb-6">
                        Let&apos;s Advance Something Meaningful Together
                    </h1>
                    <p className="text-lead text-ink-soft max-w-measure mx-auto">
                        Whether you&apos;re advancing a health-tech product, leading a research initiative, or scaling an AI or data platform, we&apos;d love to understand where your team needs support.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-10 items-start">
                    {/* Contact info sidebar */}
                    <div className="lg:col-span-2 flex flex-col gap-5">
                        {contactDetails.map(({ icon: Icon, label, value, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="card rounded-none flex items-start gap-4 p-5"
                            >
                                <Icon size={18} strokeWidth={1.5} className="text-ink-muted mt-0.5 flex-shrink-0" aria-hidden="true" />
                                <div>
                                    <p className="text-eyebrow uppercase text-ink-muted mb-1">
                                        {label}
                                    </p>
                                    <p className="text-sm text-ink">{value}</p>
                                </div>
                            </a>
                        ))}

                        <div className="bg-night text-on-dark rounded-none p-6 mt-6">
                            <h2 className="text-h4 font-medium mb-2">Response Time</h2>
                            <p className="text-sm text-on-dark-soft">
                                We typically respond within 24 hours on business days. For urgent
                                inquiries, please email us directly.
                            </p>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="lg:col-span-3 bg-surface border border-line rounded-none p-8">
                        {status === "sent" || status === "draft" ? (
                            <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                                <CheckCircle size={48} strokeWidth={1.25} className="text-accent-deep mb-5" aria-hidden="true" />
                                <h2 className="text-h4 font-medium mb-2">
                                    {status === "sent" ? "Message Sent!" : "Email Draft Opened"}
                                </h2>
                                <p className="text-sm text-ink-muted mb-8">
                                    {status === "sent"
                                        ? "Thank you for reaching out. We’ll get back to you soon."
                                        : "Please send the prefilled email from your email application to complete your enquiry."}
                                </p>
                                <button
                                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", company: "", subject: "", message: "" }); }}
                                    className="bg-accent-deep text-white text-sm font-medium px-7 py-3 rounded-sm hover:bg-ink transition-colors"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <input type="hidden" name="to_email" value={contactEmail} />
                                <input type="hidden" name="reply_to" value={form.email} />
                                <div>
                                    <h2 className="text-h4 font-medium mb-1">Send Us a Message</h2>
                                    <p className="text-sm text-ink-muted">
                                        Tell us about your project and we&apos;ll get back to you.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className={labelClass}>
                                            Full Name <span className="text-ink-muted" aria-hidden="true">*</span>
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Dr. Paul"
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClass}>
                                            Email Address <span className="text-ink-muted" aria-hidden="true">*</span>
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="you@company.com"
                                            className={inputClass}
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className={labelClass}>
                                            Organization / Company
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={form.company}
                                            onChange={handleChange}
                                            placeholder="Your company or research group"
                                            className={inputClass}
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClass}>
                                            Subject <span className="text-ink-muted" aria-hidden="true">*</span>
                                        </label>
                                        <select
                                            required
                                            name="subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            className={inputClass}
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
                                    <label className={labelClass}>
                                        Message <span className="text-ink-muted" aria-hidden="true">*</span>
                                    </label>
                                    <textarea
                                        required
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Describe your project, challenges, or questions…"
                                        className={`${inputClass} resize-none`}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="w-full inline-flex items-center justify-center gap-2 bg-accent-deep text-white text-sm font-medium px-7 py-3 rounded-sm hover:bg-ink disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                                >
                                    {status === "sending" ? (
                                        "Sending…"
                                    ) : (
                                        <>
                                            Send Message <Send size={16} strokeWidth={1.5} aria-hidden="true" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

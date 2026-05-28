"use client";
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { personalInfo } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Could not connect to the server. Please try again later.");
    }
  };

  const info = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: "#" },
  ];

  return (
    <section id="contact" ref={ref} className="relative px-6 overflow-hidden py-28">
      {/* Background */}
      <div
        className="orb"
        style={{
          width: 700, height: 700,
          bottom: "-20%", left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(200,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`mb-16 opacity-0 ${visible ? "animate-fade-up" : ""}`}>
          <span className="section-label">05 — Contact</span>
          <h2 className="mt-3 text-4xl font-light font-display md:text-5xl" style={{ color: "var(--text-primary)" }}>
            Let's{" "}
            <span className="text-gold-gradient font-gwen">Work Together</span>
          </h2>
          <p className="max-w-xl mt-4 text-base" style={{ color: "var(--text-secondary)" }}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            Send me a message and I'll get back to you within 24–48 hours.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left — info */}
          <div className={`lg:col-span-2 opacity-0 delay-200 ${visible ? "animate-fade-up" : ""}`}>
            <div className="mb-10 space-y-4">
              {info.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 p-4 transition-all duration-300 rounded-xl group"
                  style={{ border: "1px solid var(--border-subtle)", background: "var(--bg-card)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-gold)";
                    e.currentTarget.style.background = "var(--bg-surface)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.background = "var(--bg-card)";
                  }}
                >
                  <div
                    className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg"
                    style={{
                      background: "var(--gold-glow)",
                      border: "1px solid var(--border-gold)",
                      color: "var(--gold-300)",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="section-label text-xs mb-0.5">{label}</p>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability card */}
            <div
              className="p-6 glass-card"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-2.5 h-2.5 rounded-full animate-pulse-gold"
                  style={{ background: "#4ade80" }}
                />
                <span className="text-sm font-gwen" style={{ color: "#4ade80" }}>
                  Currently Available
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Open to full-time positions, freelance projects, and consulting opportunities.
                Response time: 24–48 hours.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className={`lg:col-span-3 opacity-0 delay-400 ${visible ? "animate-fade-up" : ""}`}>
            <div className="p-8 glass-card">
              {status === "success" ? (
                <div className="py-12 text-center">
                  <div
                    className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full"
                    style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.3)" }}
                  >
                    <CheckCircle size={32} style={{ color: "#4ade80" }} />
                  </div>
                  <h3 className="mb-2 text-2xl font-display font-gwen" style={{ color: "var(--text-primary)" }}>
                    Message Sent!
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Thank you for reaching out. I'll get back to you within 24–48 hours.
                    A confirmation email has been sent to your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block mb-2 section-label">Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="field-input"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 section-label">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="field-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 section-label">Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="field-input"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 section-label">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project or opportunity..."
                      className="resize-none field-input"
                    />
                  </div>

                  {status === "error" && (
                    <div
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}
                    >
                      <AlertCircle size={16} style={{ color: "#ef4444", flexShrink: 0, marginTop: 2 }} />
                      <p className="text-sm" style={{ color: "#ef4444" }}>{errorMsg}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="justify-center w-full btn-gold"
                    style={{ opacity: status === "loading" ? 0.7 : 1, cursor: status === "loading" ? "not-allowed" : "pointer" }}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                    By submitting, you'll receive a confirmation email at your address.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

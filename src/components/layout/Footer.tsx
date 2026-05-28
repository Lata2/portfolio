"use client";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { personalInfo, navLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--bg-deep)", borderTop: "1px solid var(--border-subtle)" }}>
      <div className="max-w-6xl px-6 py-16 mx-auto">
        <div className="grid gap-12 mb-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="text-2xl font-gwen font-display text-gold-gradient">
              Lata Dewangan
            </span>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Full Stack Web Developer crafting elegant, scalable digital experiences from Indore, India.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 section-label">Navigation</p>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-300)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 section-label">Connect</p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: personalInfo.github, label: "GitHub" },
                { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: Twitter, href: personalInfo.twitter, label: "Twitter" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full"
                  style={{ border: "1px solid var(--border-gold)", color: "var(--text-muted)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--gold-300)";
                    e.currentTarget.style.borderColor = "var(--gold-400)";
                    e.currentTarget.style.background = "var(--gold-glow)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.borderColor = "var(--border-gold)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8 gold-divider" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {year} Lata Dewangan. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Built with Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

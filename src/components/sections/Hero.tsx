"use client";
import { useEffect, useState, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, roles } from "@/lib/data";

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let delay = deleting ? 40 : speed;
    if (!deleting && text === current) delay = pause;

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? text.slice(0, -1) : current.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(roles);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: personalInfo.yearsExperience, label: "Years Experience" },
    { value: personalInfo.projectsCompleted, label: "Projects Completed" },
    { value: personalInfo.happyClients, label: "Happy Clients" },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Background orbs */}
      <div
        className="orb animate-float"
        style={{
          width: 500, height: 500,
          top: "-10%", right: "-5%",
          background: "radial-gradient(circle, rgba(200,169,110,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="orb animate-float delay-400"
        style={{
          width: 400, height: 400,
          bottom: "10%", left: "-5%",
          background: "radial-gradient(circle, rgba(200,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,169,110,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,169,110,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Label */}
            <div
              className={`inline-flex items-center gap-3 mb-8 opacity-0 ${visible ? "animate-fade-up" : ""}`}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse-gold"
                style={{ background: "var(--gold-400)" }}
              />
              <span className="section-label">Available for opportunities</span>
            </div>

            {/* Name */}
            <h1
              className={`font-display font-light leading-none mb-6 opacity-0 delay-100 ${visible ? "animate-fade-up" : ""}`}
              style={{ fontSize: "clamp(52px, 7vw, 88px)" }}
            >
              <span style={{ color: "var(--text-secondary)" }}>Hello, I'm</span>
              <br />
              <span className="text-gold-gradient font-semibold">
                {personalInfo.firstName}
              </span>
              <br />
              <span style={{ color: "var(--text-primary)" }}>{personalInfo.lastName}</span>
            </h1>

            {/* Typewriter role */}
            <div
              className={`flex items-center gap-3 mb-8 opacity-0 delay-200 ${visible ? "animate-fade-up" : ""}`}
            >
              <div className="gold-divider w-8" />
              <p className="font-mono text-sm" style={{ color: "var(--text-secondary)" }}>
                {role}
                <span
                  className="inline-block w-0.5 h-4 ml-0.5 align-middle animate-pulse"
                  style={{ background: "var(--gold-400)" }}
                />
              </p>
            </div>

            {/* Bio */}
            <p
              className={`text-base leading-relaxed mb-10 max-w-lg opacity-0 delay-300 ${visible ? "animate-fade-up" : ""}`}
              style={{ color: "var(--text-secondary)" }}
            >
              {personalInfo.bio}
            </p>

            {/* CTA */}
            <div
              className={`flex flex-wrap gap-4 mb-12 opacity-0 delay-400 ${visible ? "animate-fade-up" : ""}`}
            >
              <a href="#projects" className="btn-gold">
                View My Work
              </a>
              <a href="#contact" className="btn-ghost">
                Get In Touch
              </a>
            </div>

            {/* Social */}
            <div
              className={`flex items-center gap-3 opacity-0 delay-500 ${visible ? "animate-fade-up" : ""}`}
            >
              {[
                { icon: Github, href: personalInfo.github, label: "GitHub" },
                { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    border: "1px solid var(--border-gold)",
                    color: "var(--text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--gold-300)";
                    e.currentTarget.style.borderColor = "var(--gold-400)";
                    e.currentTarget.style.background = "var(--gold-glow)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.borderColor = "var(--border-gold)";
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right column — Signature card */}
          <div
            className={`flex justify-center lg:justify-end opacity-0 delay-300 ${visible ? "animate-fade-up" : ""}`}
          >
            <div className="relative">
              {/* Rotating border ring */}
              <div
                className="absolute inset-0 rounded-full animate-rotate-slow"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0%, var(--gold-500) 25%, transparent 50%, var(--gold-300) 75%, transparent 100%)",
                  padding: "1.5px",
                  borderRadius: "50%",
                  mask: "radial-gradient(circle at center, transparent 140px, black 142px)",
                  WebkitMask: "radial-gradient(circle at center, transparent 140px, black 142px)",
                }}
              />

              {/* Avatar ring */}
              <div
                className="w-72 h-72 md:w-80 md:h-80 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, var(--bg-card) 0%, var(--bg-surface) 100%)",
                  border: "1px solid var(--border-gold)",
                }}
              >
                <div className="text-center">
                  {/* Initials */}
                  <div
                    className="w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center font-display text-5xl font-bold"
                    style={{
                      background: "linear-gradient(135deg, var(--gold-400), var(--gold-600))",
                      color: "var(--bg-void)",
                    }}
                  >
                    HD
                  </div>
                  <p
                    className="font-display text-xl font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {personalInfo.name}
                  </p>
                  <p className="section-label text-xs">{personalInfo.title}</p>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: "#4ade80" }}
                    />
                    <span className="font-mono text-xs" style={{ color: "#4ade80" }}>
                      Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              {[
                { label: "React", top: "5%", left: "-10%" },
                { label: "Next.js", top: "5%", right: "-10%" },
                { label: "Node.js", bottom: "20%", left: "-14%" },
                { label: "TypeScript", bottom: "20%", right: "-14%" },
              ].map(({ label, ...pos }, i) => (
                <div
                  key={label}
                  className="absolute animate-float"
                  style={{ ...pos, animationDelay: `${i * 0.8}s` }}
                >
                  <div
                    className="px-3 py-1.5 rounded-full font-mono text-xs font-medium"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-gold)",
                      color: "var(--gold-300)",
                      boxShadow: "0 4px 20px rgba(200,169,110,0.15)",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-20 grid grid-cols-3 gap-6 max-w-lg opacity-0 delay-600 ${visible ? "animate-fade-up" : ""}`}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p
                className="font-display text-3xl font-semibold text-gold-gradient"
              >
                {value}
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-300 hover:opacity-60"
        style={{ color: "var(--text-muted)" }}
      >
        <span className="font-mono text-xs">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import { skills } from "@/lib/data";

type Tab = "frontend" | "backend" | "tools";
const tabs: { key: Tab; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools & DevOps" },
];

function SkillBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
          {name}
        </span>
        <span className="font-mono text-xs" style={{ color: "var(--gold-400)" }}>
          {level}%
        </span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{ transform: animate ? `scaleX(${level / 100})` : "scaleX(0)" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState<Tab>("frontend");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative px-6 py-28"
      style={{ background: "var(--bg-deep)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`mb-16 opacity-0 ${visible ? "animate-fade-up" : ""}`}>
          <span className="section-label">02 — Expertise</span>
          <h2
            className="mt-3 text-4xl font-light font-display md:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            Skills &{" "}
            <span className="text-gold-gradient font-gwen">Technologies</span>
          </h2>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left — Tabs + Bars */}
          <div className={`opacity-0 delay-200 ${visible ? "animate-fade-up" : ""}`}>
            {/* Tab switcher */}
            <div
              className="flex gap-1 p-1 mb-10 rounded-xl"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}
            >
              {tabs.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className="flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300"
                  style={{
                    background: tab === key ? "var(--gold-glow)" : "transparent",
                    color: tab === key ? "var(--gold-300)" : "var(--text-muted)",
                    border: tab === key ? "1px solid var(--border-gold)" : "1px solid transparent",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Skill bars */}
            <div>
              {skills[tab].map((skill, i) => (
                <SkillBar
                  key={`${tab}-${skill.name}`}
                  name={skill.name}
                  level={skill.level}
                  animate={visible}
                />
              ))}
            </div>
          </div>

          {/* Right — Proficiency visual */}
          <div className={`opacity-0 delay-400 ${visible ? "animate-fade-up" : ""}`}>
            <div className="p-8 glass-card">
              <h3
                className="mb-8 text-2xl font-display font-gwen"
                style={{ color: "var(--text-primary)" }}
              >
                Proficiency Overview
              </h3>

              {/* Radial-ish cards */}
              <div className="space-y-4">
                {[
                  { label: "Frontend Development", pct: 88, desc: "React, Next.js, TypeScript" },
                  { label: "Backend Development", pct: 84, desc: "Node.js, Express, PostgreSQL" },
                  { label: "DevOps & Tools", pct: 76, desc: "Docker, AWS, Git" },
                  { label: "UI/UX Design", pct: 72, desc: "Figma, Framer, Tailwind" },
                ].map(({ label, pct, desc }) => (
                  <div key={label}>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                          {label}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                          {desc}
                        </p>
                      </div>
                      <span
                        className="font-mono text-sm font-gwen"
                        style={{ color: "var(--gold-400)" }}
                      >
                        {pct}%
                      </span>
                    </div>
                    <div
                      className="h-1 overflow-hidden rounded-full"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <div
                        className="h-full transition-all duration-1000 rounded-full"
                        style={{
                          width: visible ? `${pct}%` : "0%",
                          background: "linear-gradient(90deg, var(--gold-500), var(--gold-300))",
                          transitionDelay: "0.4s",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional info */}
              <div
                className="pt-6 mt-8 border-t"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <p className="mb-4 section-label">Also familiar with</p>
                <div className="flex flex-wrap gap-2">
                  {["Redis", "Kubernetes", "CI/CD", "WebSockets", "OAuth2", "TDD"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 font-mono text-xs rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

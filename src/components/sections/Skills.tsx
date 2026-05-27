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
      <div className="flex justify-between items-center mb-2">
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
      className="py-28 px-6 relative"
      style={{ background: "var(--bg-deep)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`mb-16 opacity-0 ${visible ? "animate-fade-up" : ""}`}>
          <span className="section-label">02 — Expertise</span>
          <h2
            className="font-display text-4xl md:text-5xl font-light mt-3"
            style={{ color: "var(--text-primary)" }}
          >
            Skills &{" "}
            <span className="text-gold-gradient font-semibold">Technologies</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Tabs + Bars */}
          <div className={`opacity-0 delay-200 ${visible ? "animate-fade-up" : ""}`}>
            {/* Tab switcher */}
            <div
              className="flex gap-1 mb-10 p-1 rounded-xl"
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
            <div className="glass-card p-8">
              <h3
                className="font-display text-2xl font-semibold mb-8"
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
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                          {label}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                          {desc}
                        </p>
                      </div>
                      <span
                        className="font-mono text-sm font-semibold"
                        style={{ color: "var(--gold-400)" }}
                      >
                        {pct}%
                      </span>
                    </div>
                    <div
                      className="h-1 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-1000"
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
                className="mt-8 pt-6 border-t"
                style={{ borderColor: "var(--border-subtle)" }}
              >
                <p className="section-label mb-4">Also familiar with</p>
                <div className="flex flex-wrap gap-2">
                  {["Redis", "Kubernetes", "CI/CD", "WebSockets", "OAuth2", "TDD"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono"
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

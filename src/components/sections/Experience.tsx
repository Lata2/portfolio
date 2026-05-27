"use client";
import { useEffect, useRef, useState } from "react";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const exp = experiences[selected];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-28 px-6 relative"
      style={{ background: "var(--bg-deep)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`mb-16 opacity-0 ${visible ? "animate-fade-up" : ""}`}>
          <span className="section-label">04 — Career</span>
          <h2 className="font-display text-4xl md:text-5xl font-light mt-3" style={{ color: "var(--text-primary)" }}>
            Work{" "}
            <span className="text-gold-gradient font-semibold">Experience</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left — company list */}
          <div
            className={`lg:col-span-2 space-y-2 opacity-0 delay-200 ${visible ? "animate-fade-up" : ""}`}
          >
            {experiences.map((e, i) => (
              <button
                key={e.id}
                onClick={() => setSelected(i)}
                className="w-full text-left p-5 rounded-xl transition-all duration-300 group"
                style={{
                  background: selected === i ? "var(--bg-card)" : "transparent",
                  border: selected === i ? "1px solid var(--border-gold)" : "1px solid transparent",
                }}
                onMouseEnter={(el) => {
                  if (selected !== i) {
                    (el.currentTarget as HTMLButtonElement).style.background = "var(--bg-card)";
                    (el.currentTarget as HTMLButtonElement).style.border = "1px solid var(--border-subtle)";
                  }
                }}
                onMouseLeave={(el) => {
                  if (selected !== i) {
                    (el.currentTarget as HTMLButtonElement).style.background = "transparent";
                    (el.currentTarget as HTMLButtonElement).style.border = "1px solid transparent";
                  }
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: selected === i ? "var(--gold-glow)" : "var(--bg-surface)",
                      border: `1px solid ${selected === i ? "var(--border-gold)" : "var(--border-subtle)"}`,
                      color: selected === i ? "var(--gold-300)" : "var(--text-muted)",
                    }}
                  >
                    <Briefcase size={16} />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: selected === i ? "var(--text-primary)" : "var(--text-secondary)" }}
                    >
                      {e.company}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                      {e.role}
                    </p>
                    <span
                      className="font-mono text-xs px-2 py-0.5 rounded-full mt-2 inline-block"
                      style={{
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {e.type}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right — detail */}
          <div
            key={selected}
            className={`lg:col-span-3 glass-card p-8 opacity-0 delay-300 ${visible ? "animate-fade-up" : ""}`}
            style={{ animation: "fadeIn 0.4s ease forwards" }}
          >
            <div className="mb-6">
              <h3
                className="font-display text-2xl font-semibold mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {exp.role}
              </h3>
              <p
                className="text-gold-gradient font-semibold text-lg"
              >
                {exp.company}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
                <Calendar size={14} />
                <span className="font-mono text-xs">{exp.period}</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
                <MapPin size={14} />
                <span className="font-mono text-xs">{exp.location}</span>
              </div>
            </div>

            <div className="gold-divider mb-6" />

            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {exp.description}
            </p>

            <div>
              <p className="section-label mb-4">Key Highlights</p>
              <ul className="space-y-3">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                      style={{ background: "var(--gold-400)" }}
                    />
                    <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

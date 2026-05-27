"use client";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

const categories = ["All", "Full Stack", "Frontend", "Backend", "Library"];

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState("All");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" ref={ref} className="relative px-6 overflow-hidden py-28">
      {/* BG orb */}
      <div
        className="orb"
        style={{
          width: 500, height: 500, top: "20%", right: "-10%",
          background: "radial-gradient(circle, rgba(200,169,110,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className={`mb-4 opacity-0 ${visible ? "animate-fade-up" : ""}`}>
          <span className="section-label">03 — Portfolio</span>
          <h2 className="mt-3 text-4xl font-light font-display md:text-5xl" style={{ color: "var(--text-primary)" }}>
            Selected{" "}
            <span className="font-semibold text-gold-gradient">Projects</span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div
          className={`flex flex-wrap gap-2 mb-12 opacity-0 delay-200 ${visible ? "animate-fade-up" : ""}`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full"
              style={{
                background: filter === cat ? "linear-gradient(135deg, var(--gold-400), var(--gold-500))" : "var(--bg-card)",
                color: filter === cat ? "var(--bg-void)" : "var(--text-muted)",
                border: filter === cat ? "none" : "1px solid var(--border-subtle)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`glass-card group relative overflow-hidden transition-all duration-500 opacity-0 ${visible ? "animate-fade-up" : ""}`}
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,169,110,0.5)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 60px rgba(200,169,110,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-gold)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Top bar */}
              <div
                className="w-full h-1"
                style={{
                  background: "linear-gradient(90deg, var(--gold-500), var(--gold-300))",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.4s ease",
                }}
                ref={(el) => {
                  if (el) {
                    el.closest(".glass-card")?.addEventListener("mouseenter", () => {
                      el.style.transform = "scaleX(1)";
                    });
                    el.closest(".glass-card")?.addEventListener("mouseleave", () => {
                      el.style.transform = "scaleX(0)";
                    });
                  }
                }}
              />

              <div className="p-6">
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span
                      className="font-mono text-xs px-2.5 py-1 rounded-full mb-2 inline-block"
                      style={{
                        background: "var(--gold-glow)",
                        border: "1px solid var(--border-gold)",
                        color: "var(--gold-400)",
                      }}
                    >
                      {project.category}
                    </span>
                    <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                      {project.year}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="flex items-center justify-center w-8 h-8 transition-all duration-300 rounded-lg"
                      style={{ border: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold-300)"; e.currentTarget.style.borderColor = "var(--border-gold)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border-subtle)"; }}
                    >
                      <Github size={14} />
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center justify-center w-8 h-8 transition-all duration-300 rounded-lg"
                      style={{ border: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold-300)"; e.currentTarget.style.borderColor = "var(--border-gold)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border-subtle)"; }}
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="mb-2 text-xl font-semibold transition-colors duration-300 font-display group-hover:text-gold-gradient"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="mb-5 text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full font-mono text-xs"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--border-subtle)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div className={`mt-12 text-center opacity-0 delay-600 ${visible ? "animate-fade-up" : ""}`}>
          <a
            href={`https://github.com/hemlatadewangan`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex btn-ghost"
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

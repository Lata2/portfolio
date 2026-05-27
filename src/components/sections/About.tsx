"use client";
import { useEffect, useRef, useState } from "react";
import { MapPin, Code2, Briefcase, GraduationCap } from "lucide-react";
import { personalInfo, techMarquee } from "@/lib/data";

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: Code2,
      title: "Clean Code",
      desc: "Writing maintainable, scalable code following industry best practices and design patterns.",
    },
    {
      icon: Briefcase,
      title: "Full Stack",
      desc: "End-to-end development from database architecture to polished user interfaces.",
    },
    {
      icon: GraduationCap,
      title: "Always Learning",
      desc: "Continuously exploring new technologies and keeping up with the evolving web ecosystem.",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div
        className="orb"
        style={{
          width: 600, height: 600,
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(200,169,110,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className={`mb-16 opacity-0 ${visible ? "animate-fade-up" : ""}`}>
          <span className="section-label">01 — About Me</span>
          <h2
            className="font-display text-4xl md:text-5xl font-light mt-3"
            style={{ color: "var(--text-primary)" }}
          >
            The Story{" "}
            <span className="text-gold-gradient font-semibold">Behind the Code</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div className={`opacity-0 delay-200 ${visible ? "animate-fade-up" : ""}`}>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              I'm a dedicated full-stack web developer based in{" "}
              <span style={{ color: "var(--gold-300)" }}>
                <MapPin size={14} className="inline mr-1" />
                Indore, India
              </span>
              . With expertise in both frontend and backend technologies, I build seamless digital
              experiences from concept to deployment.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              I thrive in collaborative environments and am always eager to learn new technologies
              and tackle challenging problems. My approach combines technical precision with
              thoughtful design to deliver solutions that truly matter.
            </p>

            {/* Traits */}
            <div className="space-y-3 mb-8">
              {[
                "Problem-solver who loves algorithmic challenges",
                "Strong advocate for clean, documented code",
                "Open source contributor and tech community member",
                "Collaborative team player with strong communication skills",
              ].map((trait) => (
                <div key={trait} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "var(--gold-400)" }}
                  />
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {trait}
                  </span>
                </div>
              ))}
            </div>

            <a href={personalInfo.resume} className="btn-ghost inline-flex">
              Download Resume
            </a>
          </div>

          {/* Right — cards */}
          <div className={`space-y-4 opacity-0 delay-400 ${visible ? "animate-fade-up" : ""}`}>
            {cards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="glass-card p-6 flex gap-5 group transition-all duration-300"
                style={{ cursor: "default" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(200,169,110,0.5)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-gold)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "var(--gold-glow)",
                    border: "1px solid var(--border-gold)",
                    color: "var(--gold-300)",
                  }}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech marquee */}
        <div
          className={`mt-20 overflow-hidden opacity-0 delay-600 ${visible ? "animate-fade-up" : ""}`}
        >
          <p className="section-label mb-6 text-center">Technologies I work with</p>
          <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
            <div className="flex animate-marquee whitespace-nowrap">
              {[...techMarquee, ...techMarquee].map((tech, i) => (
                <span
                  key={i}
                  className="mx-6 px-4 py-2 rounded-full text-sm font-mono inline-block"
                  style={{
                    color: "var(--gold-300)",
                    border: "1px solid var(--border-gold)",
                    background: "var(--bg-card)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="about" ref={ref} className="relative px-6 overflow-hidden py-28">
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

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`mb-16 opacity-0 ${visible ? "animate-fade-up" : ""}`}>
          <span className="section-label">01 — About Me</span>
          <h2
            className="mt-3 text-4xl font-light font-display md:text-5xl"
            style={{ color: "var(--text-primary)" }}
          >
            The Story{" "}
            <span className="text-gold-gradient font-gwen">Behind the Code</span>
          </h2>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left — text */}
          <div className={`opacity-0 delay-200 ${visible ? "animate-fade-up" : ""}`}>
            <p
              className="mb-6 text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              I'm a dedicated full-stack web developer based in{" "}
              <span style={{ color: "var(--gold-300)" }}>
                <MapPin size={14} className="inline mr-1" />
             Raipur Chhattisgarh, India
              </span>
              . With expertise in both frontend and backend technologies, I build seamless digital
              experiences from concept to deployment.
            </p>
            <p
              className="mb-8 text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              I thrive in collaborative environments and am always eager to learn new technologies
              and tackle challenging problems. My approach combines technical precision with
              thoughtful design to deliver solutions that truly matter.
            </p>

            {/* Traits */}
            <div className="mb-8 space-y-3">
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

            <a href={personalInfo.resume} className="inline-flex btn-ghost">
              Download Resume
            </a>
          </div>

          {/* Right — cards */}
          <div className={`space-y-4 opacity-0 delay-400 ${visible ? "animate-fade-up" : ""}`}>
            {cards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-5 p-6 transition-all duration-300 glass-card group"
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
                  className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-xl"
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
                    className="font-gwenmb-1 "
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
          <p className="mb-6 text-center section-label">Technologies I work with</p>
          <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
            <div className="flex animate-marquee whitespace-nowrap">
              {[...techMarquee, ...techMarquee].map((tech, i) => (
                <span
                  key={i}
                  className="inline-block px-4 py-2 mx-6 font-mono text-sm rounded-full"
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

"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(6,6,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(200,169,110,0.12)" : "none",
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-display text-xl font-semibold"
            style={{ color: "var(--gold-300)", letterSpacing: "0.5px" }}
          >
            HD<span style={{ color: "var(--text-muted)" }}>.</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => {
              const id = href.replace("#", "");
              const active = activeSection === id;
              return (
                <li key={label}>
                  <a
                    href={href}
                    className="relative text-sm font-medium transition-colors duration-300"
                    style={{ color: active ? "var(--gold-300)" : "var(--text-secondary)" }}
                  >
                    {label}
                    {active && (
                      <span
                        className="absolute -bottom-1 left-0 right-0 h-px animate-scale-in"
                        style={{ background: "var(--gold-400)" }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <a
            href={personalInfo.resume}
            className="hidden md:inline-flex btn-gold text-sm"
            style={{ padding: "10px 24px" }}
          >
            Resume
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition"
            style={{ color: "var(--text-secondary)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-8"
          style={{ background: "rgba(6,6,10,0.97)", backdropFilter: "blur(20px)" }}
        >
          <button
            className="absolute top-6 right-6 p-2"
            style={{ color: "var(--text-secondary)" }}
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl font-light transition-colors duration-300 hover:text-gold-300"
              style={{ color: "var(--text-primary)" }}
            >
              {label}
            </a>
          ))}
          <a href={personalInfo.resume} className="btn-gold mt-4">
            Resume
          </a>
        </div>
      )}
    </>
  );
}

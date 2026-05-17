"use client";

import { useState, useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#matrix", label: "Data.Matrix" },
    { href: "#download", label: "Download" },
    { href: "#support", label: "Support" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bone/95 backdrop-blur-md arch-border-b"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-baseline gap-0 group">
              <span className="font-serif text-2xl md:text-3xl italic tracking-tight font-semibold group-hover:text-klein-blue transition-colors duration-300">
                Arcle
              </span>
              <span className="font-label text-klein-blue ml-1">
                Intelligence
              </span>
            </a>

            <nav className="hidden md:flex items-center h-full">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`h-full px-5 flex items-center font-label text-ink/60 hover:text-ink hover:bg-klein-blue/5 transition-all duration-300 ${
                    i > 0 ? "arch-border-l" : ""
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:lucifertkod2007aa@gmail.com"
                className="h-full px-6 flex items-center arch-border-l bg-ink text-bone font-label hover:bg-klein-blue transition-colors duration-300"
              >
                Contact
              </a>
            </nav>

            <button
              className="md:hidden p-2 arch-border-l arch-border-b"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span
                  className={`block h-px bg-ink transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-[3.5px]" : ""
                  }`}
                />
                <span
                  className={`block h-px bg-ink transition-all duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-bone md:hidden transition-all duration-500 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-20 px-6">
          <nav className="flex flex-col">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={`py-4 font-label text-ink/70 hover:text-klein-blue transition-colors arch-border-b ${
                  mobileMenuOpen
                    ? "animate-[revealUp_0.4s_ease-out_forwards]"
                    : ""
                }`}
                style={{ animationDelay: `${i * 80}ms`, opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:support@arcleintelligence.com"
              className="py-4 font-label bg-ink text-bone arch-border-b mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;

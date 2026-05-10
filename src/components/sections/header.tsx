"use client";

import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#matrix", label: "Data.Matrix" },
    { href: "#donate", label: "Support" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-bone/90 backdrop-blur-md z-50 arch-border-b">
        <div className="w-full px-6 flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="font-serif text-3xl italic tracking-tight font-semibold flex flex-col leading-none">
              <span>Arc</span>
              <span className="text-sm font-sans not-italic font-bold tracking-widest uppercase ml-4 text-klein-blue">
                Intelligence
              </span>
            </div>
          </div>

          <div className="hidden md:flex h-full">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="h-full px-6 flex items-center arch-border-l font-mono text-xs uppercase tracking-widest hover:bg-klein-blue hover:text-bone transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:support@arcintelligence.com"
              className="h-full px-8 flex items-center arch-border-l bg-ink text-bone font-mono text-xs uppercase tracking-widest hover:bg-klein-blue transition-colors"
            >
              Contact
            </a>
          </div>

          <button
            className="md:hidden p-4 arch-border-l"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-px bg-ink mb-1.5"></div>
            <div className="w-6 h-px bg-ink mb-1.5"></div>
            <div className="w-4 h-px bg-ink"></div>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-bone pt-20 md:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-6 py-4 arch-border-b font-mono text-xs uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:support@arcintelligence.com"
              className="px-6 py-4 arch-border-b font-mono text-xs uppercase tracking-widest bg-ink text-bone"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
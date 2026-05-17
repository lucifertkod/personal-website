"use client";

import { useState } from "react";
import LicenseModal from "@/components/LicenseModal";

const Footer = () => {
  const [licenseOpen, setLicenseOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#matrix", label: "Data Matrix" },
    { href: "#download", label: "Download" },
    { href: "#support", label: "Fund the Model" },
  ];

  const socialLinks = [
    { href: "https://youtube.com/@arclintelligence", label: "YouTube" },
    { href: "https://instagram.com/arclintelligence", label: "Instagram" },
    { href: "https://x.com/arclintelligence", label: "X (Twitter)" },
  ];

  return (
    <>
      <footer className="arch-border-t bg-bone">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
          {/* Main footer */}
          <div className="py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand column */}
            <div className="lg:col-span-4">
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-serif text-2xl italic font-semibold">
                  Arcle
                </span>
                <span className="font-label text-klein-blue">Intelligence</span>
              </div>
              <p className="font-mono text-sm text-ink/50 leading-relaxed mb-8 max-w-sm">
                5.82B parameter multimodal AI. Built independently by a student
                developer — zero funding, zero team, for everyone.
              </p>
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-label text-ink/40 hover:text-klein-blue transition-colors pb-1 border-b border-transparent hover:border-klein-blue"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation column */}
            <div className="lg:col-span-3 lg:col-start-6">
              <p className="font-label text-ink/25 mb-6">Navigation</p>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-mono text-sm text-ink/50 hover:text-klein-blue transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact column */}
            <div className="lg:col-span-3">
              <p className="font-label text-ink/25 mb-6">Contact</p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:lucifertkod2007aa@gmail.com"
                  className="font-mono text-sm text-ink/50 hover:text-klein-blue transition-colors"
                >
                  lucifertkod2007aa@gmail.com
                </a>
                <a
                  href="tel:+16200977797"
                  className="font-mono text-sm text-ink/50 hover:text-klein-blue transition-colors"
                >
                  +1 (620) 097-7797
                </a>
                <button
                  onClick={() => setLicenseOpen(true)}
                  className="font-mono text-sm text-ink/50 hover:text-klein-blue transition-colors text-left"
                >
                  View License
                </button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="arch-border-t py-6 flex flex-col md:flex-row justify-between items-center gap-4 font-label text-ink/30">
            <p>Built by ArcleIntelligence &copy; 2026</p>
            <p>
              Frontend designed by{" "}
              <a
                href="https://naman.is-a.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/50 hover:text-klein-blue transition-colors"
              >
                Naman
              </a>
            </p>
          </div>
        </div>
      </footer>

      <LicenseModal isOpen={licenseOpen} onClose={() => setLicenseOpen(false)} />
    </>
  );
};

export default Footer;

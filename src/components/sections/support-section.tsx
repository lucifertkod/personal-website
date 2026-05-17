"use client";

import { useState } from "react";
import LicenseModal from "@/components/LicenseModal";

const tiers = [
  {
    id: "supporter",
    number: "01",
    name: "Supporter",
    price: "$9.99",
    description: "Fund the next iteration",
  },
  {
    id: "champion",
    number: "02",
    name: "Champion",
    price: "$19.99",
    description: "Early access + priority support",
  },
  {
    id: "legendary",
    number: "03",
    name: "Legendary",
    price: "$39.99",
    description: "All features + direct line to devs",
  },
  {
    id: "elite",
    number: "04",
    name: "Elite",
    price: "$69.99",
    description: "Everything + custom feature requests",
    featured: true,
  },
];

const SupportSection = () => {
  const [licenseOpen, setLicenseOpen] = useState(false);

  return (
    <section id="support" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-label text-klein-blue mb-4">
            Support Protocol
          </p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.9] mb-6">
            Fortify the
            <br />
            <span className="font-serif italic font-light text-ink/60 lowercase">
              Architecture
            </span>
          </h2>
          <p className="font-mono text-sm text-ink/50 leading-relaxed">
            ArcleIntelligence remains free and private. Every contribution
            funds the next iteration of local AI.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 arch-border">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`bg-card p-8 flex flex-col relative transition-all duration-300 hover:bg-ink hover:text-bone group ${
                tier.featured ? "bg-bone-dark" : ""
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 font-label bg-klein-blue text-bone px-3 py-1">
                  Recommended
                </div>
              )}

              <div className="font-label text-ink/20 group-hover:text-bone/30 mb-6 pb-4 arch-border-b transition-colors">
                Tier / {tier.number}
              </div>

              <h3 className="font-serif italic text-2xl mb-1 group-hover:text-bone transition-colors">
                {tier.name}
              </h3>

              <p className="font-mono text-xs text-ink/40 group-hover:text-bone/50 mb-6 transition-colors">
                {tier.description}
              </p>

              <div className="font-sans font-bold text-3xl tracking-tight mb-8 group-hover:text-bone transition-colors">
                {tier.price}
              </div>

              <button className="btn-secondary w-full group-hover:border-bone/30 group-hover:text-bone group-hover:bg-bone/10 mt-auto">
                Donate
              </button>
            </div>
          ))}
        </div>

        {/* Free download path */}
        <div className="mt-12 text-center">
          <a
            href="#download"
            className="btn-ghost inline-flex"
          >
            Proceed to download without donation
            <span className="transition-transform">→</span>
          </a>
        </div>

        {/* License link */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setLicenseOpen(true)}
            className="font-mono text-xs text-ink/30 hover:text-klein-blue transition-colors"
          >
            View License (Apache 2.0)
          </button>
        </div>
      </div>

      <LicenseModal isOpen={licenseOpen} onClose={() => setLicenseOpen(false)} />
    </section>
  );
};

export default SupportSection;

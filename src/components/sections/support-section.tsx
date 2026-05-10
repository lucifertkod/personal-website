"use client";

import { useState } from "react";

const tiers = [
  { tier: "01", name: "Supporter", price: "$9.99" },
  { tier: "02", name: "Champion", price: "$19.99" },
  { tier: "03", name: "Legendary", price: "$39.99" },
  { tier: "04", name: "Elite", price: "$69.99", featured: true },
];

const SupportSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="donate" className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto scroll-mt-20">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="font-mono text-sm uppercase tracking-widest text-klein-blue mb-4">
          Support Protocol
        </h2>
        <h3 className="font-sans font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-6">
          Fortify the <br />
          <span className="font-serif italic font-normal text-ink/70">Architecture</span>
        </h3>
        <p className="font-mono text-sm text-ink/60">
          ArcIntelligence remains free and private. Support development. Every contribution funds
          the next iteration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={tier.featured 
              ? "arch-border bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 text-amber-950 p-8 flex flex-col relative group overflow-hidden shadow-2xl shadow-amber-500/20" 
              : "arch-border bg-white p-8 flex flex-col relative group overflow-hidden"
            }
          >
            {tier.featured && (
              <div className="absolute top-0 right-0 p-2 font-mono text-[10px] uppercase bg-amber-950 text-amber-200 font-bold tracking-widest">
                Max Yield
              </div>
            )}
            <div
              className={tier.featured 
                ? "font-mono text-[10px] text-amber-800 uppercase tracking-widest mb-8 pb-4 border-b border-amber-900/20" 
                : "font-mono text-[10px] text-ink/40 uppercase tracking-widest mb-8 pb-4 arch-border-b"
              }
            >
              Tier / {tier.tier}
            </div>
            <h4 className="font-serif italic text-3xl mb-2">{tier.name}</h4>
            <div className="font-sans font-bold text-4xl mb-8">{tier.price}</div>
            <button
              className={tier.featured
                ? "w-full mt-auto py-4 bg-amber-950 text-amber-200 font-mono text-sm uppercase tracking-widest font-bold hover:bg-amber-900 hover:text-amber-100 transition-colors"
                : "btn-outline w-full mt-auto font-bold group-hover:bg-ink group-hover:text-bone"
              }
            >
              Donate
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#download"
          className="font-mono text-xs uppercase tracking-widest border-b border-ink/30 text-ink/60 hover:text-ink hover:border-ink pb-1 transition-colors"
        >
          Proceed to download without donation ↬
        </a>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-bone/90 backdrop-blur-sm p-4 md:p-12 flex items-center justify-center"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="arch-border bg-white w-full max-w-4xl max-h-[90vh] flex flex-col relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 font-mono text-xs uppercase tracking-widest text-ink hover:text-klein-blue transition-colors flex items-center gap-2 group z-10 bg-white px-2"
            >
              Close <span className="text-lg leading-none group-hover:rotate-90 transition-transform">×</span>
            </button>
            <div className="p-8 md:p-12 border-b border-ink/10">
              <h3 className="font-serif italic text-3xl">Apache License 2.0</h3>
              <div className="font-mono text-xs uppercase tracking-widest text-klein-blue mt-2">
                Legal Framework Reference
              </div>
            </div>
            <div className="p-8 md:p-12 overflow-y-auto font-mono text-xs md:text-sm text-ink/70 leading-relaxed whitespace-pre-wrap">
              Apache License
              Version 2.0, January 2004
              http://www.apache.org/licenses/

              TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

              1. Definitions.
              &quot;License&quot; shall mean the terms and conditions for use, reproduction,
              and distribution as defined by Sections 1 through 9 of this document.

              &quot;Licensor&quot; shall mean the copyright owner or entity authorized by
              the copyright owner that is granting the License.

              &quot;Legal Entity&quot; shall mean the union of the acting entity and all
              other entities that control, are controlled by, or are under common
              control with that entity.

              &quot;You&quot; (or &quot;Your&quot;) shall mean an individual or Legal Entity
              exercising permissions granted by this License.

              2. Grant of Copyright License. Subject to the terms and conditions of
              this License, each Contributor hereby grants to You a perpetual,
              worldwide, non-exclusive, no-charge, royalty-free, irrevocable
              copyright license to reproduce, prepare Derivative Works of,
              publicly display, publicly perform, sublicense, and distribute
              the Work and such Derivative Works in Source or Object form.

              3. Grant of Patent License. Subject to the terms and conditions of
              this License, each Contributor hereby grants to You a perpetual,
              worldwide, non-exclusive, no-charge, royalty-free, irrevocable
              patent license to make, have made, use, offer to sell, sell, import,
              and otherwise transfer the Work.

              4. Redistribution. You may reproduce and distribute copies of the
              Work or Derivative Works thereof in any medium, with or without
              modifications, and in Source or Object form, provided that You
              meet the following conditions.

              5. Submission of Contributions. Unless You explicitly state otherwise,
              any Contribution intentionally submitted for inclusion in the Work
              by You to the Licensor shall be under the terms and conditions of
              this License.

              6. Trademarks. This License does not grant permission to use the trade
              names, trademarks, service marks, or product names of the Licensor.

              7. Disclaimer of Warranty. Unless required by applicable law or
              agreed to in writing, Licensor provides the Work (and each
              Contributor provides its Contributions) on an &quot;AS IS&quot; BASIS,
              WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND.

              8. Limitation of Liability. In no event and under no legal theory,
              whether in tort (including negligence), contract, or otherwise,
              shall any Contributor be liable to You for damages.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SupportSection;
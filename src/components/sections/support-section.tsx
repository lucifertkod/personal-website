"use client";

import { useState } from "react";
import LicenseModal from "@/components/LicenseModal";

const tiersUSD = [
  {
    id: "compute",
    number: "01",
    name: "Compute Spark",
    price: "$5",
    impact: "~15 minutes of GPU compute",
    paypal: "https://www.paypal.com/paypalme/AbhinavAnand848/5",
  },
  {
    id: "training",
    number: "02",
    name: "Training Hour",
    price: "$25",
    impact: "~1 hour of model training",
    paypal: "https://www.paypal.com/paypalme/AbhinavAnand848/25",
  },
  {
    id: "experiment",
    number: "03",
    name: "Experimental Run",
    price: "$100",
    impact: "1 complete training experiment",
    paypal: "https://www.paypal.com/paypalme/AbhinavAnand848/100",
  },
  {
    id: "cycle",
    number: "04",
    name: "Improvement Cycle",
    price: "$500",
    impact: "Full capability improvement cycle",
    featured: true,
    paypal: "https://www.paypal.com/paypalme/AbhinavAnand848/500",
  },
];

const tiersINR = [
  {
    id: "compute",
    number: "01",
    name: "Compute Spark",
    price: "₹420",
    impact: "~15 minutes of GPU compute",
    razorpay: "https://pages.razorpay.com/ArcleIntelligence-crowdfunding",
  },
  {
    id: "training",
    number: "02",
    name: "Training Hour",
    price: "₹2,100",
    impact: "~1 hour of model training",
    razorpay: "https://pages.razorpay.com/ArcleIntelligence-crowdfunding",
  },
  {
    id: "experiment",
    number: "03",
    name: "Experimental Run",
    price: "₹8,400",
    impact: "1 complete training experiment",
    razorpay: "https://pages.razorpay.com/ArcleIntelligence-crowdfunding",
  },
  {
    id: "cycle",
    number: "04",
    name: "Improvement Cycle",
    price: "₹42,000",
    impact: "Full capability improvement cycle",
    featured: true,
    razorpay: "https://pages.razorpay.com/ArcleIntelligence-crowdfunding",
  },
];

const milestones = [
  { amount: "$1,000 / ₹84K", progress: "15%" },
  { amount: "$5,000 / ₹4.2L", progress: "45%" },
  { amount: "$10,000 / ₹8.4L", progress: "80%" },
  { amount: "$25,000+ / ₹21L+", progress: "100% + Open Release" },
];

const SupportSection = () => {
  const [licenseOpen, setLicenseOpen] = useState(false);
  const [paymentRegion, setPaymentRegion] = useState<"intl" | "in">("intl");

  const tiers = paymentRegion === "intl" ? tiersUSD : tiersINR;

  return (
    <section id="support" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-label text-klein-blue mb-4">
            Crowdfunding Protocol
          </p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.9] mb-6">
            Fund the
            <br />
            <span className="font-serif italic font-light text-ink/60 lowercase">
              Training
            </span>
          </h2>
          <p className="font-mono text-sm text-ink/50 leading-relaxed max-w-xl mx-auto">
            ArcleIntelligence is being built independently by a student developer
            — zero corporate funding, no investors, no team. Your contribution
            directly funds GPU compute for training.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="arch-border inline-flex">
            <button
              onClick={() => setPaymentRegion("intl")}
              className={`px-6 py-2.5 font-label transition-colors ${
                paymentRegion === "intl" ? "bg-ink text-bone" : "text-ink/50 hover:text-ink"
              }`}
            >
              International (USD)
            </button>
            <button
              onClick={() => setPaymentRegion("in")}
              className={`px-6 py-2.5 font-label arch-border-l transition-colors ${
                paymentRegion === "in" ? "bg-ink text-bone" : "text-ink/50 hover:text-ink"
              }`}
            >
              India (INR)
            </button>
          </div>
        </div>

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
                  Best Value
                </div>
              )}

              <div className="font-label text-ink/20 group-hover:text-bone/30 mb-6 pb-4 arch-border-b transition-colors">
                Tier / {tier.number}
              </div>

              <h3 className="font-serif italic text-2xl mb-1 group-hover:text-bone transition-colors">
                {tier.name}
              </h3>

              <p className="font-mono text-xs text-ink/40 group-hover:text-bone/50 mb-6 transition-colors">
                {tier.impact}
              </p>

              <div className="font-sans font-bold text-3xl tracking-tight mb-8 group-hover:text-bone transition-colors">
                {tier.price}
              </div>

              <a
                href={paymentRegion === "intl" ? tier.paypal : tier.razorpay}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center group-hover:border-bone/30 group-hover:text-bone group-hover:bg-bone/10 mt-auto"
              >
                {paymentRegion === "intl" ? "Pay via PayPal" : "Pay via UPI"}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 arch-border bg-bone p-6 md:p-8">
          <p className="font-label text-ink/40 mb-6 text-center">
            Training Milestones
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((m) => (
              <div key={m.amount} className="text-center">
                <div className="font-sans font-bold text-xl text-klein-blue">
                  {m.progress}
                </div>
                <div className="font-mono text-xs text-ink/50 mt-1">
                  {m.amount}
                </div>
              </div>
            ))}
          </div>
          <p className="font-serif italic text-sm text-center text-ink/40 mt-6">
            At 100% — model weights on HuggingFace, source code on GitHub.
            Free for everyone.
          </p>
        </div>

        <div className="mt-12 text-center">
          <a href="#features" className="btn-ghost inline-flex">
            See model capabilities
            <span className="transition-transform">→</span>
          </a>
        </div>

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

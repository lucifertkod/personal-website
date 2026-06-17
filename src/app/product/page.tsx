import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ScrollManager from "@/components/scroll-manager";

export const metadata: Metadata = {
  title: "Product — ArcleIntelligence",
  description:
    "ArcleIntelligence products: fully offline Android AI Assistant and cross-platform Desktop Agent. On-device LLM inference, privacy-first.",
};

const androidSpecs = [
  { spec: "Platform", detail: "Android 10+" },
  { spec: "Execution", detail: "Fully On-Device" },
  { spec: "Network", detail: "True Offline (Zero Cloud)" },
  { spec: "Voice Control", detail: "Native Voice Assistant" },
  { spec: "LLM Inference", detail: "On-Device, Custom Models" },
  { spec: "Media Generation", detail: "Text, Image, Video" },
  { spec: "Pricing Model", detail: "Freemium" },
  { spec: "Storage Required", detail: "3–6 GB" },
];

const desktopSpecs = [
  { spec: "Platform", detail: "Windows / macOS / Linux" },
  { spec: "Execution", detail: "Fully On-Device" },
  { spec: "Network", detail: "True Offline" },
  { spec: "Agent Capabilities", detail: "Full Desktop Automation" },
  { spec: "LLM Inference", detail: "On-Device, Custom Models" },
  { spec: "File Operations", detail: "Read, Write, Organize" },
  { spec: "App Integration", detail: "Native OS Integration" },
  { spec: "Status", detail: "In Development" },
];

const pricingTiers = [
  {
    tier: "01",
    name: "Free",
    price: "$0",
    period: "/mo",
    features: [
      "On-device AI assistant",
      "Voice commands",
      "Text generation",
      "Basic media generation",
      "Community support",
    ],
    buttonLabel: "Get Started",
    featured: false,
  },
  {
    tier: "02",
    name: "Pro",
    price: "$9.99",
    period: "/mo",
    features: [
      "Everything in Free",
      "Priority model updates",
      "Advanced media suite",
      "Extended context window",
      "Email support",
    ],
    buttonLabel: "Subscribe",
    featured: false,
  },
  {
    tier: "03",
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Everything in Pro",
      "Custom model training",
      "Dedicated support",
      "SLA guarantees",
      "Volume licensing",
    ],
    buttonLabel: "Contact Sales",
    featured: true,
  },
];

export default function ProductPage() {
  return (
    <main className="relative min-h-screen bg-bone text-ink overflow-x-hidden selection:bg-klein-blue selection:text-bone">
      <ScrollManager />

      {/* Grid lines overlay */}
      <div className="fixed left-6 top-0 bottom-0 w-px bg-grid-line z-[-1] hidden md:block"></div>
      <div className="fixed right-6 top-0 bottom-0 w-px bg-grid-line z-[-1] hidden md:block"></div>
      <div className="fixed left-1/2 top-0 bottom-0 w-px bg-grid-line z-[-1] hidden lg:block opacity-50"></div>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20">
        <div className="max-w-[1600px] mx-auto w-full">
          <h2 className="font-mono text-sm uppercase tracking-widest text-klein-blue mb-4">
            Product — ArcleIntelligence
          </h2>
          <h1 className="font-sans font-bold text-[12vw] sm:text-[9vw] lg:text-[7vw] leading-[0.85] tracking-tighter uppercase mb-8">
            Our Product
            <br />
            <span className="font-serif italic font-normal text-ink/70 lowercase">
              Suite
            </span>
          </h1>
          <p className="font-serif text-2xl md:text-3xl leading-snug text-ink/80 max-w-2xl">
            Two AI products designed for absolute privacy and full offline
            operation. No cloud. No compromise. Intelligence that runs entirely
            on your hardware.
          </p>
        </div>
      </section>

      {/* Android Assistant Section */}
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-end arch-border-b pb-8">
          <div>
            <h2 className="font-mono text-sm uppercase tracking-widest text-klein-blue mb-4">
              Fig. 1 — Android Assistant
            </h2>
            <h3 className="font-sans font-bold text-4xl md:text-6xl uppercase tracking-tighter">
              ArcleIntelligence
              <br />
              <span className="font-serif italic font-normal text-ink/70">
                Android
              </span>
            </h3>
          </div>
          <div className="font-mono text-sm text-ink/60 md:max-w-xs md:justify-self-end">
            A fully offline voice assistant powered by on-device LLM inference.
            Zero cloud dependency. Freemium model — the core experience is free
            forever.
          </div>
        </div>

        <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink/70 max-w-3xl mb-16">
          The Android assistant runs a custom-trained language model directly on
          your device. Voice commands, text generation, and multimodal media
          creation — all processed locally without ever touching a server. Your
          conversations never leave your phone.
        </p>

        <div className="overflow-x-auto arch-border bg-white shadow-xl shadow-ink/5">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="font-mono text-xs uppercase tracking-widest bg-bone">
                <th className="p-6 arch-border-r arch-border-b w-1/2 font-semibold text-ink">
                  Specification
                </th>
                <th className="p-6 arch-border-b w-1/2 font-semibold text-ink">
                  Detail
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-sm">
              {androidSpecs.map((row, index) => (
                <tr
                  key={index}
                  className={`arch-border-b hover-invert group ${
                    index === androidSpecs.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <td className="p-6 arch-border-r font-medium group-hover:border-r-klein-blue transition-colors">
                    {row.spec}
                  </td>
                  <td className="p-6 text-ink/70 group-hover:text-bone/70 transition-colors">
                    {row.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Desktop Agent Section */}
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-end arch-border-b pb-8">
          <div>
            <h2 className="font-mono text-sm uppercase tracking-widest text-klein-blue mb-4">
              Fig. 2 — Desktop Agent
            </h2>
            <h3 className="font-sans font-bold text-4xl md:text-6xl uppercase tracking-tighter">
              ArcleIntelligence
              <br />
              <span className="font-serif italic font-normal text-ink/70">
                Desktop
              </span>
            </h3>
          </div>
          <div className="font-mono text-sm text-ink/60 md:max-w-xs md:justify-self-end">
            A cross-platform agentic assistant that automates your desktop
            workflow. Fully local execution across Windows, macOS, and Linux.
          </div>
        </div>

        <p className="font-serif text-xl md:text-2xl leading-relaxed text-ink/70 max-w-3xl mb-16">
          The desktop agent goes beyond conversation — it acts. File operations,
          application integration, and full desktop automation powered by
          on-device intelligence. An autonomous agent that operates without
          network access, keeping your workflow entirely private.
        </p>

        <div className="overflow-x-auto arch-border bg-white shadow-xl shadow-ink/5">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="font-mono text-xs uppercase tracking-widest bg-bone">
                <th className="p-6 arch-border-r arch-border-b w-1/2 font-semibold text-ink">
                  Specification
                </th>
                <th className="p-6 arch-border-b w-1/2 font-semibold text-ink">
                  Detail
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-sm">
              {desktopSpecs.map((row, index) => (
                <tr
                  key={index}
                  className={`arch-border-b hover-invert group ${
                    index === desktopSpecs.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <td className="p-6 arch-border-r font-medium group-hover:border-r-klein-blue transition-colors">
                    {row.spec}
                  </td>
                  <td className="p-6 text-ink/70 group-hover:text-bone/70 transition-colors">
                    {row.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Product Screenshots Grid */}
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="mb-16 arch-border-b pb-8">
          <h2 className="font-mono text-sm uppercase tracking-widest text-klein-blue mb-4">
            Fig. 3 — Interface Preview
          </h2>
          <h3 className="font-sans font-bold text-4xl md:text-6xl uppercase tracking-tighter">
            Product
            <br />
            <span className="font-serif italic font-normal text-ink/70">
              Gallery
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="arch-border bg-white p-4 relative shadow-md shadow-ink/5"
            >
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-ink"></div>
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-ink"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-ink"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-ink"></div>
              <div className="aspect-video bg-bone flex items-center justify-center arch-border">
                <div className="text-center">
                  <div className="font-mono text-xs uppercase tracking-widest text-ink/30 mb-2">
                    Product Screenshot
                  </div>
                  <div className="font-serif italic text-lg text-ink/20">
                    Preview {n}
                  </div>
                </div>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mt-4 text-center">
                Product Interface — View {n}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-mono text-sm uppercase tracking-widest text-klein-blue mb-4">
            Pricing — ArcleIntelligence
          </h2>
          <h3 className="font-sans font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-6">
            Choose Your
            <br />
            <span className="font-serif italic font-normal text-ink/70">
              Tier
            </span>
          </h3>
          <p className="font-mono text-sm text-ink/60">
            Every tier runs fully on-device. No cloud. No data collection.
            Upgrade for advanced capabilities and priority support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={
                tier.featured
                  ? "arch-border bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 text-amber-950 p-8 flex flex-col relative group overflow-hidden shadow-2xl shadow-amber-500/20"
                  : "arch-border bg-white p-8 flex flex-col relative group overflow-hidden"
              }
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 p-2 font-mono text-[10px] uppercase bg-amber-950 text-amber-200 font-bold tracking-widest">
                  Max Tier
                </div>
              )}
              <div
                className={
                  tier.featured
                    ? "font-mono text-[10px] text-amber-800 uppercase tracking-widest mb-8 pb-4 border-b border-amber-900/20"
                    : "font-mono text-[10px] text-ink/40 uppercase tracking-widest mb-8 pb-4 arch-border-b"
                }
              >
                Tier / {tier.tier}
              </div>
              <h4 className="font-serif italic text-3xl mb-2">{tier.name}</h4>
              <div className="font-sans font-bold text-4xl mb-2">
                {tier.price}
                <span
                  className={
                    tier.featured
                      ? "font-mono text-sm font-normal text-amber-800"
                      : "font-mono text-sm font-normal text-ink/40"
                  }
                >
                  {tier.period}
                </span>
              </div>

              <ul className="mt-6 mb-8 space-y-3 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className={
                      tier.featured
                        ? "font-mono text-xs text-amber-900 flex items-start gap-3"
                        : "font-mono text-xs text-ink/60 flex items-start gap-3"
                    }
                  >
                    <span
                      className={
                        tier.featured
                          ? "text-amber-950 mt-0.5 text-sm leading-none"
                          : "text-klein-blue mt-0.5 text-sm leading-none"
                      }
                    >
                      ↳
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={
                  tier.featured
                    ? "w-full mt-auto py-4 bg-amber-950 text-amber-200 font-mono text-sm uppercase tracking-widest font-bold hover:bg-amber-900 hover:text-amber-100 transition-colors"
                    : "btn-outline w-full mt-auto font-bold group-hover:bg-ink group-hover:text-bone"
                }
              >
                {tier.buttonLabel}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:support@arcleintelligence.com"
            className="font-mono text-xs uppercase tracking-widest border-b border-ink/30 text-ink/60 hover:text-ink hover:border-ink pb-1 transition-colors"
          >
            Questions? Contact support@arcleintelligence.com ↬
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

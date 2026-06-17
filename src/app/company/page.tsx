import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ScrollManager from "@/components/scroll-manager";

export const metadata: Metadata = {
  title: "Company — ArcleIntelligence",
  description:
    "About ArcleIntelligence: building fully offline, on-device, privacy-first AI. Founded by Abhinav Anand in Katihar, Bihar, India.",
};

const companyFacts = [
  { parameter: "Founded", value: "2026" },
  { parameter: "Headquarters", value: "Katihar, Bihar, India" },
  { parameter: "Entity Type", value: "Sole Proprietorship" },
  { parameter: "Founder", value: "Abhinav Anand" },
  { parameter: "Team Size", value: "1 (Solo Founder)" },
  { parameter: "Contact", value: "support@arcleintelligence.com" },
  { parameter: "Core Product", value: "On-Device AI Assistant" },
  { parameter: "Technology Stack", value: "Custom LLM, On-Device Inference" },
];

const milestones = [
  {
    period: "Q1 2026",
    title: "Architecture Design",
    description:
      "Core system architecture and model design finalized. Foundational decisions on inference engine, model topology, and on-device execution pipeline locked in.",
  },
  {
    period: "Q2 2026",
    title: "Model Training",
    description:
      "Custom LLM training pipeline built from scratch and initial models trained. End-to-end control over data curation, tokenization, and optimization for edge hardware.",
  },
  {
    period: "Q2 2026",
    title: "Reddit Traction",
    description:
      "Benchmark results shared on r/indianstartups, gaining significant community attention and validation from developers and AI enthusiasts across India.",
  },
  {
    period: "Q3 2026",
    title: "Android App Development",
    description:
      "Building fully offline voice assistant for Android — on-device LLM inference, native voice control, and multimodal generation without any cloud dependency.",
  },
  {
    period: "Q4 2026",
    title: "Desktop Agent",
    description:
      "Cross-platform agentic desktop assistant in active development. Full desktop automation, file operations, and native OS integration — all running locally.",
  },
];

export default function CompanyPage() {
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
            About — ArcleIntelligence
          </h2>
          <h1 className="font-sans font-bold text-[12vw] sm:text-[9vw] lg:text-[7vw] leading-[0.85] tracking-tighter uppercase mb-8">
            Building the Future
            <br />
            <span className="font-serif italic font-normal text-ink/70 lowercase">
              of Private AI
            </span>
          </h1>
          <p className="font-serif text-2xl md:text-3xl leading-snug text-ink/80 max-w-2xl">
            Building fully offline, on-device, privacy-first AI — no cloud
            dependency, no data leaving the user&apos;s device. Intelligence that
            belongs entirely to you.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="mb-16 arch-border-b pb-8">
          <h2 className="font-mono text-sm uppercase tracking-widest text-klein-blue mb-4">
            Fig. 1 — Founder Profile
          </h2>
          <h3 className="font-sans font-bold text-4xl md:text-6xl uppercase tracking-tighter">
            The
            <br />
            <span className="font-serif italic font-normal text-ink/70">
              Architect
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Founder Photo Frame */}
          <div className="arch-border bg-white p-4 relative shadow-xl shadow-ink/5">
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-ink"></div>
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-ink"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-ink"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-ink"></div>
            <div className="aspect-[3/4] bg-bone flex items-center justify-center arch-border">
              <div className="text-center">
                <div className="font-mono text-xs uppercase tracking-widest text-ink/30 mb-2">
                  Founder Portrait
                </div>
                <div className="font-serif italic text-lg text-ink/20">
                  Photograph
                </div>
              </div>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mt-4 text-center">
              Abhinav Anand — Founder &amp; Developer
            </div>
          </div>

          {/* Right: Bio Content */}
          <div className="flex flex-col justify-center">
            <div className="font-mono text-[10px] text-ink/40 uppercase tracking-widest mb-8 pb-4 arch-border-b">
              Founder &amp; Sole Developer
            </div>
            <h4 className="font-serif italic text-5xl md:text-6xl mb-6">
              Abhinav Anand
            </h4>
            <div className="space-y-6 font-mono text-sm text-ink/70 leading-relaxed">
              <p>
                19 years old. Based in Katihar, Bihar, India. A self-taught
                developer and AI researcher building ArcleIntelligence entirely
                from the ground up — alone.
              </p>
              <p>
                The entire multimodal AI stack is built independently: an
                Android voice assistant with fully on-device inference, a
                cross-platform desktop agent, custom LLM training pipelines,
                infrastructure, and product — all constructed solo without
                external funding or a team.
              </p>
              <p>
                Open benchmark results have been shared publicly on Reddit&apos;s
                r/indianstartups, demonstrating real performance metrics against
                established cloud-dependent models. The project has received
                media coverage for its ambitious scope and privacy-first
                approach.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 arch-border bg-bone text-ink/60">
                Self-Taught
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 arch-border bg-bone text-ink/60">
                Solo Builder
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 arch-border bg-bone text-ink/60">
                Age 19
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 arch-border bg-bone text-ink/60">
                Bihar, India
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Facts Table */}
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-end arch-border-b pb-8">
          <div>
            <h2 className="font-mono text-sm uppercase tracking-widest text-klein-blue mb-4">
              Fig. 2 — Data Matrix
            </h2>
            <h3 className="font-sans font-bold text-4xl md:text-6xl uppercase tracking-tighter">
              Company
              <br />
              <span className="font-serif italic font-normal text-ink/70">
                Parameters
              </span>
            </h3>
          </div>
          <div className="font-mono text-sm text-ink/60 md:max-w-xs md:justify-self-end">
            Core operational data and organizational structure of
            ArcleIntelligence.
          </div>
        </div>

        <div className="overflow-x-auto arch-border bg-white shadow-xl shadow-ink/5">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="font-mono text-xs uppercase tracking-widest bg-bone">
                <th className="p-6 arch-border-r arch-border-b w-1/2 font-semibold text-ink">
                  Parameter
                </th>
                <th className="p-6 arch-border-b w-1/2 font-semibold text-ink">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="font-sans text-sm">
              {companyFacts.map((row, index) => (
                <tr
                  key={index}
                  className={`arch-border-b hover-invert group ${
                    index === companyFacts.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <td className="p-6 arch-border-r font-medium group-hover:border-r-klein-blue transition-colors">
                    {row.parameter}
                  </td>
                  <td className="p-6 text-ink/70 group-hover:text-bone/70 transition-colors">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="mb-16 arch-border-b pb-8">
          <h2 className="font-mono text-sm uppercase tracking-widest text-klein-blue mb-4">
            Fig. 3 — Development Timeline
          </h2>
          <h3 className="font-sans font-bold text-4xl md:text-6xl uppercase tracking-tighter">
            Project
            <br />
            <span className="font-serif italic font-normal text-ink/70">
              Milestones
            </span>
          </h3>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] md:left-[120px] top-0 bottom-0 w-px arch-border-l"></div>

          <div className="space-y-0">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12 pb-16 last:pb-0"
              >
                {/* Period Label */}
                <div className="font-mono text-xs uppercase tracking-widest text-ink/60 pt-1 md:text-right">
                  {milestone.period}
                </div>

                {/* Timeline Dot + Content */}
                <div className="relative pl-10 md:pl-12">
                  {/* Klein Blue Dot */}
                  <div className="absolute left-[-1px] md:left-[-1px] top-1.5 w-[15px] h-[15px] bg-klein-blue flex items-center justify-center">
                    <div className="w-[5px] h-[5px] bg-bone"></div>
                  </div>

                  <div className="arch-border bg-white p-6 md:p-8 shadow-md shadow-ink/5">
                    <h4 className="font-sans font-bold text-xl uppercase tracking-tight mb-3">
                      {milestone.title}
                    </h4>
                    <p className="font-mono text-sm text-ink/60 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

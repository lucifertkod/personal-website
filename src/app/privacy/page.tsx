import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ScrollManager from "@/components/scroll-manager";

export const metadata: Metadata = {
  title: "Privacy Policy — ArcleIntelligence",
  description:
    "ArcleIntelligence Privacy Policy. Learn how we protect your data with on-device AI processing and minimal data collection.",
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen bg-bone text-ink overflow-x-hidden selection:bg-klein-blue selection:text-bone">
      <ScrollManager />

      {/* Grid lines overlay */}
      <div className="fixed left-6 top-0 bottom-0 w-px bg-grid-line z-[-1] hidden md:block"></div>
      <div className="fixed right-6 top-0 bottom-0 w-px bg-grid-line z-[-1] hidden md:block"></div>
      <div className="fixed left-1/2 top-0 bottom-0 w-px bg-grid-line z-[-1] hidden lg:block opacity-50"></div>

      <Header />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 md:px-12 max-w-[1600px] mx-auto">
        <h2 className="font-mono text-sm uppercase tracking-widest text-klein-blue mb-4">
          Legal — ArcleIntelligence
        </h2>
        <h3 className="font-sans font-bold text-4xl md:text-6xl uppercase tracking-tighter">
          Privacy
          <br />
          <span className="font-serif italic font-normal text-ink/70">
            Policy
          </span>
        </h3>
      </section>

      {/* Content */}
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="arch-border bg-white w-full max-w-4xl mx-auto flex flex-col">
          {/* Document Header */}
          <div className="p-8 md:p-12 border-b border-ink/10">
            <h3 className="font-serif italic text-3xl">Privacy Policy</h3>
            <div className="font-mono text-xs uppercase tracking-widest text-klein-blue mt-2">
              Legal Framework — ArcleIntelligence
            </div>
            <p className="font-mono text-xs text-ink/50 mt-3">
              Last updated: June 2026
            </p>
          </div>

          {/* Document Body */}
          <div className="p-8 md:p-12 flex flex-col gap-10">
            {/* 1. Introduction */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                1. Introduction
              </h4>
              <p className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed">
                ArcleIntelligence is committed to protecting your privacy. Our
                products are designed with a privacy-first architecture — core
                AI processing happens entirely on your device. This policy
                explains what data we collect, how we use it, and your rights
                regarding your personal information.
              </p>
            </div>

            {/* 2. On-Device Processing */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                2. On-Device Processing
              </h4>
              <p className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed">
                All AI inference, voice processing, text generation, and media
                generation runs locally on your device. No data is sent to
                external servers for AI processing. Your conversations, files,
                and generated content never leave your device. This is a
                fundamental design principle, not a feature toggle — there is no
                cloud fallback for AI workloads.
              </p>
            </div>

            {/* 3. Data We Collect */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                3. Data We Collect
              </h4>
              <div className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed flex flex-col gap-4">
                <div>
                  <p className="font-sans font-bold text-sm text-ink/80 mb-1">
                    Account Information
                  </p>
                  <p>
                    When you create an account, we collect your email address and
                    name via Supabase authentication for account management
                    purposes only.
                  </p>
                </div>
                <div>
                  <p className="font-sans font-bold text-sm text-ink/80 mb-1">
                    Payment Information
                  </p>
                  <p>
                    If you subscribe to a paid plan, payment processing is
                    handled by Razorpay. We do not store credit card numbers or
                    payment details on our servers. Razorpay&apos;s privacy
                    policy governs payment data handling.
                  </p>
                </div>
                <div>
                  <p className="font-sans font-bold text-sm text-ink/80 mb-1">
                    Usage Analytics
                  </p>
                  <p>
                    We may collect anonymized, non-identifiable usage statistics
                    (e.g., app opens, feature usage counts) to improve the
                    product. This data cannot be traced back to individual users.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Data We Do NOT Collect */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                4. Data We Do NOT Collect
              </h4>
              <ul className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed flex flex-col gap-2">
                <li className="flex items-start gap-2">
                  <span className="text-klein-blue mt-0.5">—</span>
                  Voice recordings or transcriptions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-klein-blue mt-0.5">—</span>
                  AI conversation history
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-klein-blue mt-0.5">—</span>
                  Generated content (text, images, video)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-klein-blue mt-0.5">—</span>
                  Files accessed or created by the AI
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-klein-blue mt-0.5">—</span>
                  Location data
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-klein-blue mt-0.5">—</span>
                  Contact lists or personal files
                </li>
              </ul>
            </div>

            {/* 5. Third-Party Services */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                5. Third-Party Services
              </h4>
              <div className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed flex flex-col gap-4">
                <div>
                  <p className="font-sans font-bold text-sm text-ink/80 mb-1">
                    Supabase
                  </p>
                  <p>
                    Used for authentication and account management. See{" "}
                    <a
                      href="https://supabase.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-klein-blue hover:underline"
                    >
                      Supabase Privacy Policy
                    </a>
                    .
                  </p>
                </div>
                <div>
                  <p className="font-sans font-bold text-sm text-ink/80 mb-1">
                    Razorpay
                  </p>
                  <p>
                    Used for payment processing. See{" "}
                    <a
                      href="https://razorpay.com/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-klein-blue hover:underline"
                    >
                      Razorpay Privacy Policy
                    </a>
                    .
                  </p>
                </div>
                <p>
                  We do not use any third-party advertising, tracking, or
                  analytics services that identify individual users.
                </p>
              </div>
            </div>

            {/* 6. Data Security */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                6. Data Security
              </h4>
              <p className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed">
                We implement industry-standard security measures for the limited
                data we do collect. Account data is encrypted in transit and at
                rest. Our infrastructure is designed to minimize attack surface
                by keeping sensitive data on your device rather than in the
                cloud.
              </p>
            </div>

            {/* 7. Your Rights */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                7. Your Rights
              </h4>
              <p className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed">
                You may request access to, correction of, or deletion of your
                personal data by contacting{" "}
                <a
                  href="mailto:support@arcleintelligence.com"
                  className="text-klein-blue hover:underline"
                >
                  support@arcleintelligence.com
                </a>
                . We will respond to your request within 30 days. You may also
                delete your account at any time, which will remove all
                associated data from our systems.
              </p>
            </div>

            {/* 8. Children's Privacy */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                8. Children&apos;s Privacy
              </h4>
              <p className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed">
                ArcleIntelligence is not directed at children under 13. We do
                not knowingly collect personal data from children under 13. If
                we become aware that we have inadvertently collected data from a
                child under 13, we will promptly delete that information.
              </p>
            </div>

            {/* 9. Changes to This Policy */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                9. Changes to This Policy
              </h4>
              <p className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed">
                We may update this policy from time to time. Changes will be
                posted on this page with an updated &quot;Last updated&quot;
                date. We encourage you to review this page periodically. Your
                continued use of our services after changes are posted
                constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* 10. Contact */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                10. Contact
              </h4>
              <p className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed">
                For privacy-related inquiries, please contact us at{" "}
                <a
                  href="mailto:support@arcleintelligence.com"
                  className="text-klein-blue hover:underline"
                >
                  support@arcleintelligence.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

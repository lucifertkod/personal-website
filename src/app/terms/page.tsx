import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ScrollManager from "@/components/scroll-manager";

export const metadata: Metadata = {
  title: "Terms of Service — ArcleIntelligence",
  description:
    "ArcleIntelligence Terms of Service. Terms governing use of our on-device AI products and services.",
};

export default function TermsPage() {
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
          Terms of
          <br />
          <span className="font-serif italic font-normal text-ink/70">
            Service
          </span>
        </h3>
      </section>

      {/* Content */}
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="arch-border bg-white w-full max-w-4xl mx-auto flex flex-col">
          {/* Document Header */}
          <div className="p-8 md:p-12 border-b border-ink/10">
            <h3 className="font-serif italic text-3xl">Terms of Service</h3>
            <div className="font-mono text-xs uppercase tracking-widest text-klein-blue mt-2">
              Legal Framework — ArcleIntelligence
            </div>
            <p className="font-mono text-xs text-ink/50 mt-3">
              Last updated: June 2026
            </p>
          </div>

          {/* Document Body */}
          <div className="p-8 md:p-12 flex flex-col gap-10">
            {/* 1. Acceptance of Terms */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                1. Acceptance of Terms
              </h4>
              <p className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed">
                By accessing or using any ArcleIntelligence products, software,
                or services, you agree to be bound by these Terms of Service. If
                you do not agree to these terms, you may not use our services.
                These terms constitute a legally binding agreement between you
                and ArcleIntelligence.
              </p>
            </div>

            {/* 2. Description of Service */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                2. Description of Service
              </h4>
              <p className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed">
                ArcleIntelligence provides on-device AI assistant software for
                Android and desktop platforms. The service is designed to operate
                primarily offline without cloud dependency. AI processing,
                inference, and content generation occur locally on your device.
                Certain features such as account management and subscription
                billing require an internet connection.
              </p>
            </div>

            {/* 3. User Accounts */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                3. User Accounts
              </h4>
              <p className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed">
                You may need to create an account to access certain features.
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You agree to notify us immediately of any unauthorized
                use of your account.
              </p>
            </div>

            {/* 4. Subscription & Billing */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                4. Subscription &amp; Billing
              </h4>
              <ul className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed flex flex-col gap-3">
                <li className="flex items-start gap-2">
                  <span className="text-klein-blue mt-0.5">—</span>
                  A free tier is available with core features at no cost.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-klein-blue mt-0.5">—</span>
                  Paid subscriptions are billed through Razorpay. By subscribing
                  to a paid plan, you authorize recurring charges as described at
                  the time of purchase.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-klein-blue mt-0.5">—</span>
                  Subscriptions auto-renew unless cancelled before the renewal
                  date. You may cancel at any time through your account settings.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-klein-blue mt-0.5">—</span>
                  Refunds are handled on a case-by-case basis. Contact{" "}
                  <a
                    href="mailto:support@arcleintelligence.com"
                    className="text-klein-blue hover:underline"
                  >
                    support@arcleintelligence.com
                  </a>{" "}
                  for refund requests.
                </li>
              </ul>
            </div>

            {/* 5. Acceptable Use */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                5. Acceptable Use
              </h4>
              <p className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed mb-3">
                You agree NOT to:
              </p>
              <ul className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed flex flex-col gap-2">
                <li className="flex items-start gap-2">
                  <span className="text-klein-blue mt-0.5">—</span>
                  Use the service for illegal activities or to facilitate
                  unlawful conduct.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-klein-blue mt-0.5">—</span>
                  Reverse-engineer, decompile, disassemble, or attempt to
                  extract source code from the software.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-klein-blue mt-0.5">—</span>
                  Redistribute, resell, sublicense, or commercially exploit the
                  software without written authorization.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-klein-blue mt-0.5">—</span>
                  Use the service to generate content that violates applicable
                  laws or the rights of third parties.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-klein-blue mt-0.5">—</span>
                  Attempt to circumvent security features, access controls, or
                  licensing mechanisms.
                </li>
              </ul>
            </div>

            {/* 6. Intellectual Property */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                6. Intellectual Property
              </h4>
              <p className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed">
                ArcleIntelligence, its AI models, software, algorithms, and
                branding are the intellectual property of ArcleIntelligence and
                are protected by applicable intellectual property laws. Content
                you generate using the service belongs to you. We claim no
                ownership over your AI-generated outputs, documents, or creative
                works produced through our tools.
              </p>
            </div>

            {/* 7. Disclaimer of Warranty */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                7. Disclaimer of Warranty
              </h4>
              <p className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed uppercase">
                The service is provided &quot;as is&quot; without warranties of
                any kind, express or implied, including but not limited to
                implied warranties of merchantability, fitness for a particular
                purpose, and non-infringement. We do not guarantee uninterrupted
                or error-free operation. AI outputs may contain inaccuracies and
                should not be relied upon as the sole basis for important
                decisions.
              </p>
            </div>

            {/* 8. Limitation of Liability */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                8. Limitation of Liability
              </h4>
              <p className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed uppercase">
                To the maximum extent permitted by applicable law,
                ArcleIntelligence shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages,
                including but not limited to loss of profits, data, use, or
                goodwill, arising out of or in connection with your use of or
                inability to use the service, regardless of the theory of
                liability.
              </p>
            </div>

            {/* 9. Termination */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                9. Termination
              </h4>
              <p className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed">
                We may suspend or terminate your access to the service if you
                violate these Terms or engage in conduct that we determine, in
                our sole discretion, to be harmful to other users or to
                ArcleIntelligence. You may terminate your account at any time by
                contacting{" "}
                <a
                  href="mailto:support@arcleintelligence.com"
                  className="text-klein-blue hover:underline"
                >
                  support@arcleintelligence.com
                </a>
                . Upon termination, your right to use the service will
                immediately cease.
              </p>
            </div>

            {/* 10. Governing Law */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                10. Governing Law
              </h4>
              <p className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed">
                These Terms are governed by and construed in accordance with the
                laws of India. Any disputes arising from or relating to these
                Terms or your use of the service shall be subject to the
                exclusive jurisdiction of the courts in Bihar, India.
              </p>
            </div>

            {/* 11. Changes to Terms */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                11. Changes to Terms
              </h4>
              <p className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes
                will be posted on this page with an updated &quot;Last
                updated&quot; date. Your continued use of the service after
                changes are posted constitutes acceptance of the revised Terms.
                We encourage you to review these Terms periodically.
              </p>
            </div>

            {/* 12. Contact */}
            <div>
              <h4 className="font-sans font-bold text-base md:text-lg mb-3">
                12. Contact
              </h4>
              <p className="font-mono text-xs md:text-sm text-ink/70 leading-relaxed">
                For questions about these Terms of Service, please contact us at{" "}
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

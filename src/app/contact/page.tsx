import type { Metadata } from "next";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import ScrollManager from "@/components/scroll-manager";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact — ArcleIntelligence",
  description:
    "Get in touch with ArcleIntelligence. Contact us for support, partnerships, or inquiries at lucifertkod2007aa@gmail.com.",
};

export default function ContactPage() {
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
          Contact — ArcleIntelligence
        </h2>
        <h3 className="font-sans font-bold text-4xl md:text-6xl uppercase tracking-tighter">
          Get in
          <br />
          <span className="font-serif italic font-normal text-ink/70">
            Touch
          </span>
        </h3>
      </section>

      {/* Content */}
      <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Form */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink/40 mb-8">
              Send a Message
            </h4>
            <ContactForm />
          </div>

          {/* Right: Contact Info */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink/40 mb-8">
              Contact Information
            </h4>

            <div className="flex flex-col gap-10">
              {/* Email */}
              <div className="arch-border bg-white p-6 md:p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-klein-blue mb-3">
                  Email
                </p>
                <a
                  href="mailto:lucifertkod2007aa@gmail.com"
                  className="font-mono text-sm hover:text-klein-blue transition-colors"
                >
                  lucifertkod2007aa@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="arch-border bg-white p-6 md:p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-klein-blue mb-3">
                  Address
                </p>
                <p className="font-mono text-sm text-ink/70 leading-relaxed">
                  Katihar, Bihar, India
                </p>
              </div>

              {/* Social */}
              <div className="arch-border bg-white p-6 md:p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-klein-blue mb-3">
                  Social
                </p>
                <div className="flex gap-4 font-mono text-xs uppercase tracking-widest">
                  <a
                    href="https://youtube.com/@luciferthetechnicalgamerz8278"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-klein-blue transition-colors pb-1 border-b border-transparent hover:border-klein-blue"
                  >
                    YouTube
                  </a>
                  <a
                    href="https://www.instagram.com/abhinavanand8608"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-klein-blue transition-colors pb-1 border-b border-transparent hover:border-klein-blue"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://x.com/Anonomus090806"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-klein-blue transition-colors pb-1 border-b border-transparent hover:border-klein-blue"
                  >
                    X (Twitter)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

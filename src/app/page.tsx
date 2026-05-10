import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Marquee from "@/components/sections/marquee";
import FeatureTable from "@/components/sections/feature-table";
import FeaturesGrid from "@/components/sections/features-grid";
import SupportSection from "@/components/sections/support-section";
import Footer from "@/components/sections/footer";
import ScrollManager from "@/components/scroll-manager";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bone text-ink overflow-x-hidden selection:bg-klein-blue selection:text-bone">
      <ScrollManager />
      
      {/* Grid lines overlay */}
      <div className="fixed left-6 top-0 bottom-0 w-px bg-grid-line z-[-1] hidden md:block"></div>
      <div className="fixed right-6 top-0 bottom-0 w-px bg-grid-line z-[-1] hidden md:block"></div>
      <div className="fixed left-1/2 top-0 bottom-0 w-px bg-grid-line z-[-1] hidden lg:block opacity-50"></div>

      <Header />
      <Hero />
      <Marquee />
      <FeatureTable />
      <FeaturesGrid />
      <SupportSection />
      <Footer />
    </main>
  );
}
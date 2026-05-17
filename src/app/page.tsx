import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Marquee from "@/components/sections/marquee";
import FeatureTable from "@/components/sections/feature-table";
import FeaturesGrid from "@/components/sections/features-grid";
import DownloadSection from "@/components/sections/download-section";
import SupportSection from "@/components/sections/support-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bone text-ink overflow-x-hidden selection:bg-klein-blue selection:text-bone">
      {/* Fixed grid lines */}
      <div className="fixed-grid-line left-6 md:left-12 lg:left-24" />
      <div className="fixed-grid-line right-6 md:right-12 lg:right-24" />
      <div className="fixed-grid-line left-1/2 opacity-50 hidden 2xl:block" />

      <Header />
      <Hero />
      <Marquee />
      <FeatureTable />
      <FeaturesGrid />
      <DownloadSection />
      <SupportSection />
      <Footer />
    </main>
  );
}

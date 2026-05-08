import HeroSection from "@/components/sections/hero";
import DeploymentCard from "@/components/sections/deployment-card";
import ComparisonSection from "@/components/sections/comparison";
import PricingTable from "@/components/sections/pricing-table";
import UseCasesSection from "@/components/sections/use-cases";
import FooterSection from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <HeroSection />
      <DeploymentCard />
      <ComparisonSection />
      <PricingTable />
      <UseCasesSection />
      <FooterSection />
    </main>
  );
}

import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { TestTransfers } from "@/components/TestTransfers";
import { TwoFactor } from "@/components/TwoFactor";
import { HowItWorks } from "@/components/HowItWorks";
import { Mission } from "@/components/Mission";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <TestTransfers />
      <TwoFactor />
      <HowItWorks />
      <Mission />
      <Footer />
    </div>
  );
};

export default Index;

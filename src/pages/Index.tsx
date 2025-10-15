import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import BrandIdeas from "@/components/BrandIdeas";
import Strategy from "@/components/Strategy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Pricing />
      <BrandIdeas />
      <Strategy />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

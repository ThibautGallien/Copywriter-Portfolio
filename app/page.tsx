// app/page.tsx
"use client";

import HeroSection from "@/components/sections/HeroSection";
import ConceptSlider from "@/components/sections/ConceptSlider";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ROICalculator from "@/components/sections/Calculator";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TripleGuarantee from "@/components/sections/TripleGuarantee";
import AboutSection from "@/components/sections/AboutSection";
import ReassuranceSection from "@/components/sections/ReassuranceSection";
import FreeBookSection from "@/components/sections/FreeBookSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { Footer } from "react-day-picker";
import SalesPage from "@/components/sections/SalesPage";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <HeroSection />
      <ConceptSlider />
      <SalesPage />
      <ServicesSection />
      <ProcessSection />
      <ROICalculator />
      <BenefitsSection />
      <TripleGuarantee />
      <AboutSection />
      <ReassuranceSection />
      <FreeBookSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}

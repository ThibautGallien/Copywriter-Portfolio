// app/page.tsx
"use client";

import { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ConceptSlider from "@/components/sections/ConceptSlider";
import SalesPage from "@/components/sections/SalesPage";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ProcessSection from "@/components/sections/ProcessSection";
import ROICalculator from "@/components/sections/Calculator";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TripleGuarantee from "@/components/sections/TripleGuarantee";
import AboutPreview from "@/components/sections/AboutPreview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ReassuranceSection from "@/components/sections/ReassuranceSection";
import FreeBookSection from "@/components/sections/FreeBookSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  // Supprime les attributs ajoutés par les extensions navigateur
  useEffect(() => {
    const removeExtensionAttributes = () => {
      document.body.removeAttribute("cz-shortcut-listen");
    };

    removeExtensionAttributes();

    // Observer pour les changements futurs
    const observer = new MutationObserver(removeExtensionAttributes);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <HeroSection />
      <ConceptSlider />
      <SalesPage />
      <ServicesPreview />
      <ProcessSection />
      <ROICalculator />
      <BenefitsSection />
      <TripleGuarantee />
      <AboutPreview />
      <TestimonialsSection />
      <ReassuranceSection />
      <FreeBookSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}

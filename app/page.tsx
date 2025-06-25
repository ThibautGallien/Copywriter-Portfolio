// app/page.tsx
"use client";

import { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ROICalculator from "@/components/sections/Calculator";
import TripleGuarantee from "@/components/sections/TripleGuarantee";
import AboutPreview from "@/components/sections/AboutPreview";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ValuePropositionSection from "@/components/sections/ValuePropositionSection";

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
      <AboutPreview />
      <ValuePropositionSection />
      <ROICalculator />
      <ProcessSection />
      <TripleGuarantee />
      <FAQSection />
      <CTASection />
    </main>
  );
}

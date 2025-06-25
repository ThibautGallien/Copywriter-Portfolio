"use client";

import HeroServicesSection from "@/components/sections/HeroServicesSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionIntroSection from "@/components/sections/SolutionIntroSection";
import WhyMeSection from "@/components/sections/WhyMeSection";
import DeliverablesSection from "@/components/sections/DeliverablesSection";
import TripleGuarantee from "@/components/sections/TripleGuarantee";
import ProcessSection from "@/components/sections/ProcessSection";
import ScarcitySection from "@/components/sections/ScarcitySection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <HeroServicesSection />
      <ProblemSection />
      <SolutionIntroSection />
      <WhyMeSection />
      <DeliverablesSection />
      <TripleGuarantee />
      <ProcessSection />
      <ScarcitySection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}

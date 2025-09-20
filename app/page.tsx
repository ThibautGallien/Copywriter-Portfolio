import HeroSectionRedesign from "@/components/sections/HeroSectionRedesign";
import StatsProofSection from "@/components/sections/StatsProofSection";
import AboutCredibilitySection from "@/components/sections/AboutCredibilitySection";
import UniquePropositionSection from "@/components/sections/UniquePropositionSection";
import SimplifiedProcessSection from "@/components/sections/SimplifiedProcessSection";
import FAQObjectionsSection from "@/components/sections/FAQObjectionsSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0D0D]">
      <HeroSectionRedesign />
      <StatsProofSection />
      <AboutCredibilitySection />
      <UniquePropositionSection />
      <SimplifiedProcessSection />
      <FAQObjectionsSection />
      <FinalCTASection />
    </main>
  );
}

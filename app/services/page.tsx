import HeroProblemeSection from "@/components/sections/HeroProblemeSection";
import SolutionDetaillee from "@/components/sections/SolutionDetaillee";
import LivrablesConcrets from "@/components/sections/LivrablesConcrets";
import TarificationSection from "@/components/sections/TarificationSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import CTAFinalSection from "@/components/sections/CTAFinalSection";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] pt-16">
      <HeroProblemeSection />
      <SolutionDetaillee />
      <LivrablesConcrets />
      <TarificationSection />
      <ProcessSection />
      <SocialProofSection />
      <CTAFinalSection />
      <ExitIntentPopup delay={5000} />
    </main>
  );
}

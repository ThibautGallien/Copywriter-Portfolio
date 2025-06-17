"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FAQSection from "@/components/sections/FAQSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import AboutPreview from "@/components/sections/AboutPreview";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="relative">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-3/4 -right-32 w-64 h-64 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesPreview />
        <AboutPreview />
        <BenefitsSection />
        <ProcessSection />
        <FeaturesSection />
        <FAQSection />
        <CTASection />
      </motion.div>
    </div>
  );
}

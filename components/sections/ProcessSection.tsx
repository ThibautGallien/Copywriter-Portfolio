"use client";

import { motion } from "framer-motion";
import { Search, Settings, TrendingUp, Calendar, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Audit stratégique gratuit",
    description:
      "J'analyse votre situation actuelle, identifie les opportunités et vous donne un plan d'action concret. Même si nous ne travaillons pas ensemble, vous repartez avec des conseils actionnables.",
    icon: Search,
    color: "from-[#9B5DE5] to-[#7C3AED]",
    duration: "30 minutes",
    result: "Plan d'action gratuit",
  },
  {
    number: "02",
    title: "Setup & Configuration",
    description:
      "Je configure vos séquences, optimise vos pages de capture et mets en place le tracking pour mesurer précisément chaque euro généré.",
    icon: Settings,
    color: "from-[#3A86FF] to-[#0EA5E9]",
    duration: "2-3 semaines",
    result: "Système opérationnel",
  },
  {
    number: "03",
    title: "Lancement & Optimisation",
    description:
      "J'envoie votre newsletter hebdomadaire, teste et améliore vos séquences pour maximiser les conversions mois après mois.",
    icon: TrendingUp,
    color: "from-[#FFD400] to-[#F59E0B]",
    duration: "En continu",
    result: "Revenus croissants",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-12 lg:py-24 bg-[#0D0D0D] relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3A86FF]/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#9B5DE5]/20 border border-[#9B5DE5]/30 rounded-full px-4 py-2 mb-6">
            <Target className="w-4 h-4 lg:w-5 lg:h-5 text-[#9B5DE5]" />
            <span className="text-[#9B5DE5] font-medium text-sm lg:text-base">
              Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk text-white mb-4 leading-tight">
            Comment nous travaillons
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              ensemble
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Un processus simple, transparent et orienté résultats en 3 étapes
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-20 lg:top-24 w-0.5 h-24 lg:h-32 bg-gradient-to-b from-[#9B5DE5] to-[#3A86FF] z-0"></div>
              )}

              <div className="flex gap-4 sm:gap-6 lg:gap-8 mb-8 lg:mb-12 relative z-10">
                {/* Timeline node */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg relative`}
                  >
                    <step.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FFD400] rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-black">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-2">
                        <h3 className="text-lg sm:text-xl font-bold font-space-grotesk text-white leading-tight flex-1">
                          {step.title}
                        </h3>
                        <div className="flex flex-col lg:items-end flex-shrink-0">
                          <span
                            className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${step.color} text-white self-start lg:self-auto`}
                          >
                            {step.duration}
                          </span>
                          <span className="text-xs text-[#FFD400] mt-1 font-medium">
                            {step.result}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What you get section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16"
        >
          <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border border-[#9B5DE5]/30 max-w-4xl mx-auto">
            <CardContent className="p-6 lg:p-8">
              <div className="text-center mb-6 lg:mb-8">
                <h3 className="text-xl lg:text-2xl font-bold font-space-grotesk mb-4">
                  Ce que vous obtenez concrètement
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#FFD400] mb-3 text-sm lg:text-base">
                    Livrables techniques :
                  </h4>
                  <ul className="space-y-2 text-xs lg:text-sm text-gray-300">
                    <li>• Pages de capture optimisées</li>
                    <li>• 3-5 séquences email automatisées</li>
                    <li>• Newsletter hebdomadaire</li>
                    <li>• Tracking et analytics</li>
                    <li>• Tests A/B réguliers</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-[#FFD400] mb-3 text-sm lg:text-base">
                    Résultats attendus :
                  </h4>
                  <ul className="space-y-2 text-xs lg:text-sm text-gray-300">
                    <li>• Taux d'ouverture : 25-35%</li>
                    <li>• Taux de clic : 3-8%</li>
                    <li>• +20% de CA minimum</li>
                    <li>• Audience plus engagée</li>
                    <li>• Revenus prévisibles</li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-6 pt-6 border-t border-gray-700">
                <p className="text-xs lg:text-sm text-gray-400">
                  <Calendar className="w-3 h-3 lg:w-4 lg:h-4 inline mr-2" />
                  Premiers résultats visibles sous 2-3 semaines
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

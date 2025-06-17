"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Audit & Diagnostic",
    description:
      "Analyse complète de votre situation actuelle et identification des points d'amélioration.",
    icon: Target,
    color: "from-[#9B5DE5] to-[#7C3AED]",
  },
  {
    number: "02",
    title: "Stratégie sur mesure",
    description:
      "Création d'un plan d'action personnalisé basé sur vos objectifs et votre marché.",
    icon: TrendingUp,
    color: "from-[#3A86FF] to-[#0EA5E9]",
  },
  {
    number: "03",
    title: "Création & Optimisation",
    description:
      "Rédaction et mise en place de tous vos contenus copywriting haute conversion.",
    icon: Award,
    color: "from-[#FFD400] to-[#F59E0B]",
  },
  {
    number: "04",
    title: "Suivi & Amélioration",
    description:
      "Monitoring des performances et optimisations continues pour maximiser vos résultats.",
    icon: CheckCircle,
    color: "from-[#9B5DE5] to-[#3A86FF]",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[#0D0D0D] relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3A86FF]/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-[#FFD400] font-bold text-sm tracking-wider uppercase">
              ⚙️ PROCESSUS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-4">
            Mon Process
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              {" "}
              Step-by-Step
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une méthode éprouvée pour transformer vos idées en contenu qui
            convertit. Transparent, efficace, et toujours orienté résultats.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full group">
                <CardContent className="p-6 text-center">
                  {/* Step number */}
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-[#FFD400] text-black font-bold text-sm px-3 py-1 rounded-full">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-space-grotesk text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border border-[#9B5DE5]/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold font-space-grotesk text-white mb-4">
                Prêt à démarrer votre transformation ?
              </h3>
              <p className="text-gray-300 mb-6">
                Chaque étape est pensée pour maximiser vos résultats et votre
                ROI.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#9B5DE5] font-space-grotesk">
                    24h
                  </div>
                  <div className="text-xs text-gray-400">Première réponse</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#3A86FF] font-space-grotesk">
                    7-14j
                  </div>
                  <div className="text-xs text-gray-400">Délai moyen</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#FFD400] font-space-grotesk">
                    100%
                  </div>
                  <div className="text-xs text-gray-400">
                    Satisfaction garantie
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

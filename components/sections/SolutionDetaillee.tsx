"use client";

import { motion } from "framer-motion";
import { CheckCircle, Mail, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const newsletterFeatures = [
  "Contenu à valeur ajoutée (pas de blabla)",
  "Ton aligné avec votre marque",
  "Calls-to-action subtils mais efficaces",
  "Tracking précis des performances",
];

const automationFeatures = [
  "Séquence bienvenue (transformation prospect → client)",
  "Abandon panier (récupération ventes perdues)",
  "Relance clients inactifs (réactivation)",
  "Post-achat (fidélisation + upsell)",
];

const expectedResults = [
  {
    percentage: "+127%",
    label: "Taux d'ouverture moyen",
  },
  {
    percentage: "+340%",
    label: "Taux de clic",
  },
  {
    percentage: "+280%",
    label: "CA généré par email",
  },
];

export default function SolutionDetaillee() {
  return (
    <section
      id="solution"
      className="py-12 lg:py-24 bg-gradient-to-b from-[#0D0D0D] to-gray-900/20 relative"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk mb-4 lg:mb-6">
            Je transforme votre liste en
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              machine à revenus automatisée
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Newsletter hebdomadaire + séquences automation qui convertissent vos
            abonnés en clients fidèles
          </p>
        </motion.div>

        {/* Les 2 piliers */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {/* Newsletter Hebdomadaire */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-[#9B5DE5]/10 to-[#7C3AED]/10 border-[#9B5DE5]/30 h-full">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#9B5DE5] to-[#7C3AED] rounded-2xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <CardTitle className="text-xl lg:text-2xl font-space-grotesk">
                  Newsletter Hebdomadaire
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm lg:text-base text-gray-300 mb-4 lg:mb-6 leading-relaxed">
                  Chaque semaine, un email que vos abonnés attendent, lisent, et
                  qui les prépare à acheter.
                </p>
                <ul className="space-y-2 lg:space-y-3">
                  {newsletterFeatures.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#9B5DE5] mt-0.5 flex-shrink-0" />
                      <span className="text-xs lg:text-sm text-gray-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Séquences Automation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-[#3A86FF]/10 to-[#0EA5E9]/10 border-[#3A86FF]/30 h-full">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#3A86FF] to-[#0EA5E9] rounded-2xl flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <CardTitle className="text-xl lg:text-2xl font-space-grotesk">
                  Séquences Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm lg:text-base text-gray-300 mb-4 lg:mb-6 leading-relaxed">
                  Des emails automatisés qui travaillent 24h/24 pour convertir
                  et fidéliser.
                </p>
                <ul className="space-y-2 lg:space-y-3">
                  {automationFeatures.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#3A86FF] mt-0.5 flex-shrink-0" />
                      <span className="text-xs lg:text-sm text-gray-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Résultats attendus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-[#FFD400]/10 to-[#F59E0B]/10 border-[#FFD400]/30 max-w-4xl mx-auto">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">
                Résultats typiques après 60 jours :
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                {expectedResults.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-[#FFD400] mb-2">
                      {result.percentage}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-300">
                      {result.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

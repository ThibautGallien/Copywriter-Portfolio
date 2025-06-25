"use client";

import { motion } from "framer-motion";
import { CheckCircle, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const deliverables = [
  "Audit complet de vos emails.",
  "Définition d'une stratégie de conversion claire.",
  "Création ou refonte de vos pages de capture / landing pages.",
  "Élaboration de 2 à 3 séquences mail clés.",
  "Copywriting sur-mesure pour chaque séquence.",
  "Implémentation technique dans votre outil (Brevo, ActiveCampaign, Klaviyo…) + automatisations.",
  "Plan éditorial pour vos newsletters.",
  "Création, rédaction et envoi de 1 à 2 emails par semaine.",
  "Tests A/B et réécriture des emails peu performants.",
  "Optimisation continue de vos séquences selon les performances.",
  "Rapport mensuel : KPI + recommandations.",
  "Stratégies de réactivation des inactifs.",
  "Accompagnement et conseils personnalisés chaque mois.",
];

export default function DeliverablesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0D0D0D] to-gray-900/20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Package className="w-8 h-8 text-[#FFD400]" />
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white">
              Qu'est-ce que vous obtenez
              <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
                {" "}
                concrètement ?
              </span>
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-space-grotesk text-white">
                Votre Package Complet
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {deliverables.map((deliverable, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#9B5DE5] mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 leading-relaxed text-left">
                      {deliverable}
                    </p>
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

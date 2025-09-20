"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const livrables = [
  {
    categorie: "Audit & Stratégie",
    items: [
      "Audit complet de votre stratégie email actuelle",
      "Analyse de votre audience et segments",
      "Stratégie de contenu personnalisée",
      "Calendrier éditorial sur 3 mois",
    ],
  },
  {
    categorie: "Setup Technique",
    items: [
      "Configuration complète dans votre outil email",
      "Création/optimisation des formulaires de capture",
      "Mise en place du tracking et analytics",
      "Tests de délivrabilité et optimisation",
    ],
  },
  {
    categorie: "Contenu & Copywriting",
    items: [
      "Rédaction de 4-6 séquences automation complètes",
      "Newsletter hebdomadaire (rédaction + envoi)",
      "Templates d'emails réutilisables",
      "Guide de ton et style pour votre équipe",
    ],
  },
  {
    categorie: "Optimisation Continue",
    items: [
      "Tests A/B réguliers sur objets et contenus",
      "Rapport mensuel détaillé + recommandations",
      "Optimisation basée sur les performances",
      "Support et conseils stratégiques illimités",
    ],
  },
];

export default function LivrablesConcrets() {
  return (
    <section className="py-12 lg:py-24 bg-[#0D0D0D] relative">
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
            Ce que vous obtenez
            <span className="text-[#FFD400]"> concrètement</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Un système email complet, clé en main, qui génère des revenus dès
            les premières semaines
          </p>
        </motion.div>

        {/* Grid de livrables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {livrables.map((section, index) => (
            <motion.div
              key={section.categorie}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 h-full hover:border-gray-700 transition-colors duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg lg:text-xl font-space-grotesk text-[#9B5DE5]">
                    {section.categorie}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + itemIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                        <span className="text-xs lg:text-sm text-gray-300 leading-relaxed">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bonus info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16"
        >
          <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/30 max-w-3xl mx-auto">
            <CardContent className="p-6 lg:p-8 text-center">
              <h3 className="text-lg lg:text-xl font-bold font-space-grotesk mb-4">
                Tout est inclus dans mon accompagnement
              </h3>
              <p className="text-sm lg:text-base text-gray-300 leading-relaxed mb-4">
                Pas de frais cachés, pas de surprises. Vous obtenez un système
                email complet, opérationnel et optimisé pour générer des
                revenus.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                {[
                  "Setup complet",
                  "Formation incluse",
                  "Support illimité",
                  "Garantie résultats",
                ].map((guarantee, index) => (
                  <div key={index} className="text-xs lg:text-sm">
                    <div className="text-[#06D6A0] font-medium">✓</div>
                    <div className="text-gray-400">{guarantee}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

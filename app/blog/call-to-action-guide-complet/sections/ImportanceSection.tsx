"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArticleSection,
  BenefitsList,
  Highlight,
} from "@/components/blog/BlogComponents";

const parcoursBenefits = [
  {
    title: "Découverte → CTA vers un contenu gratuit",
    description: "Article, checklist, guide pour capter l'attention initiale",
  },
  {
    title: "Évaluation → CTA pour tester, comparer",
    description: "Demander plus d'infos, essai gratuit, démonstration",
  },
  {
    title: "Décision → CTA clair vers l'achat",
    description: "Inscription, prise de rendez-vous, finalisation d'achat",
  },
];

const impactBenefits = [
  {
    title: "Transformer un lecteur en lead qualifié",
    description:
      "Un bon CTA filtre les curieux des véritables intéressés. Quand quelqu'un laisse son email, réserve un diagnostic ou télécharge un guide, vous savez que ce n'est plus un simple lecteur : c'est un lead qualifié.",
  },
  {
    title: "Impact direct sur vos conversions",
    description:
      "Un CTA n'est pas une décoration : c'est un levier de performance mesurable. Un bouton bien pensé peut doubler vos inscriptions, tripler vos téléchargements ou réduire l'abandon panier.",
  },
];

const ctaAdaptation = [
  {
    phase: "En phase de découverte",
    strategy: 'Privilégiez un CTA "soft"',
    examples: ["Guide gratuit", "Checklist", "Article approfondi"],
    color: "from-[#9B5DE5] to-[#7C3AED]",
  },
  {
    phase: "En phase avancée",
    strategy: "Proposez un CTA plus engageant",
    examples: ["Appel découverte", "Offre d'essai", "Audit gratuit"],
    color: "from-[#3A86FF] to-[#0EA5E9]",
  },
  {
    phase: "En infopreneuriat",
    strategy: "CTA pour nurturer ET vendre",
    examples: ["Newsletter", "Ressources gratuites", "Session de coaching"],
    color: "from-[#FFD400] to-[#F59E0B]",
  },
];

export default function ImportanceSection() {
  return (
    <ArticleSection
      id="importance"
      title="Pourquoi un Call to Action est indispensable en marketing digital ?"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-12"
      >
        {/* Faire avancer le prospect */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-[#9B5DE5]">
            Faire avancer le prospect dans son parcours d'achat
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Le CTA agit comme un guide discret mais décisif. À chaque étape du
            parcours :
          </p>

          <div className="space-y-4 mb-6">
            {parcoursBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 bg-gray-900/30 rounded-lg border-l-4 border-[#9B5DE5]"
              >
                <h4 className="font-bold text-[#FFD400] mb-2">
                  {benefit.title.split("→")[0]}→
                </h4>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-300 leading-relaxed font-medium">
            Chaque clic rapproche le prospect de l'étape suivante.
          </p>
        </div>

        {/* Impact benefits */}
        <div className="mb-12">
          <BenefitsList
            benefits={impactBenefits}
            title="Les bénéfices concrets d'un CTA efficace"
            cardClassName="bg-gradient-to-br from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/30"
          />
        </div>

        {/* ROI Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-[#06D6A0]/20 to-[#059669]/20 border-[#06D6A0]/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#06D6A0] mb-4">
                Derrière chaque CTA optimisé, ce sont des revenus en plus
              </h3>
              <p className="text-gray-300">
                Un bouton bien pensé génère des résultats mesurables sans trafic
                supplémentaire. C'est de l'optimisation pure : même audience,
                meilleurs résultats.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Adaptation */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-[#9B5DE5]">
            Adapter le CTA en B2B et pour les infopreneurs
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Tous les prospects n'ont pas le même degré de maturité. C'est là
            qu'intervient l'art du CTA adapté :
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {ctaAdaptation.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 h-full">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${phase.color} flex items-center justify-center mb-4`}
                    >
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <h4 className="font-bold text-white mb-2">{phase.phase}</h4>
                    <p className="text-[#FFD400] text-sm font-medium mb-3">
                      {phase.strategy}
                    </p>
                    <div className="space-y-1">
                      {phase.examples.map((example, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs mr-2 mb-1"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <Highlight>
          Un CTA peut autant servir à nurturer la relation qu'à vendre
          directement.
          <span className="text-[#FFD400] font-bold">
            {" "}
            La clé : adapter l'intensité à la maturité de votre prospect.
          </span>
        </Highlight>
      </motion.div>
    </ArticleSection>
  );
}

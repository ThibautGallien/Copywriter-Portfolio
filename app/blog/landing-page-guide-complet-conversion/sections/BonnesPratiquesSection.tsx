"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";

const bestPractices = [
  {
    title: "Responsive design et vitesse",
    description:
      "Page parfaitement adaptée sur tous les écrans avec un temps de chargement inférieur à 3 secondes",
  },
  {
    title: "RGPD et consentements",
    description:
      "Mentions claires sur la collecte de données et case à cocher explicite",
  },
  {
    title: "Page de remerciement",
    description:
      "Confirme l'action et permet de proposer des actions complémentaires",
  },
  {
    title: "Tests A/B continus",
    description:
      "Testez titres, CTA, visuels pour optimiser en permanence vos performances",
  },
];

export default function BonnesPratiquesSection() {
  return (
    <ArticleSection
      id="bonnes-pratiques"
      title="Les meilleures pratiques de conception et d'optimisation"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="text-gray-300 leading-relaxed mb-8">
          Une landing page performante ne se limite pas à son design ou à son
          contenu. Elle doit aussi offrir une expérience fluide, rassurante et
          adaptée à chaque utilisateur.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {bestPractices.map((practice, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#3A86FF] mb-4">
                  {practice.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {practice.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Highlight>
          <span className="font-bold text-[#9B5DE5]">
            Plus vous respectez votre visiteur, plus vos pages convertissent.
          </span>
          <br />
          Et plus elles convertissent, plus votre business se développe.
        </Highlight>
      </motion.div>
    </ArticleSection>
  );
}

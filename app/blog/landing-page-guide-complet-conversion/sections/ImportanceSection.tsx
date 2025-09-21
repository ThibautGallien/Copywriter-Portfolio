"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, BenefitsList } from "@/components/blog/BlogComponents";

const landingPageBenefits = [
  {
    title: "Alignement parfait avec vos campagnes",
    description:
      "Chaque clic payé atterrit sur une page cohérente avec votre message publicitaire",
  },
  {
    title: "Optimisation du taux de conversion",
    description:
      "Focalisation sur un seul objectif multiplie vos chances de conversion",
  },
  {
    title: "Collecte de données qualifiées",
    description:
      "Récoltez des informations précieuses sur des prospects déjà intéressés",
  },
  {
    title: "Amélioration du ROI publicitaire",
    description: "Chaque euro dépensé en publicité génère plus de valeur",
  },
];

export default function ImportanceSection() {
  return (
    <ArticleSection
      id="importance"
      title="Pourquoi une Landing Page est essentielle en marketing digital"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="text-gray-300 leading-relaxed mb-8">
          Une landing page n'est pas une simple "belle page web" : c'est un
          outil stratégique au cœur de toute campagne marketing. Bien conçue,
          elle agit comme un filtre qui transforme l'attention captée en
          résultats tangibles.
        </p>

        <BenefitsList
          benefits={landingPageBenefits}
          title="Les bénéfices concrets d'une landing page"
        />

        <div className="mt-8">
          <Card className="bg-gradient-to-r from-[#06D6A0]/20 to-[#059669]/20 border-[#06D6A0]/30">
            <CardContent className="p-6">
              <h4 className="font-bold text-[#06D6A0] mb-3">
                📊 Preuve de crédibilité
              </h4>
              <p className="text-gray-300">
                HubSpot a démontré que les entreprises qui utilisent plus de 30
                landing pages génèrent en moyenne{" "}
                <strong className="text-[#FFD400]">7 fois plus de leads</strong>{" "}
                que celles qui n'en utilisent que 10 ou moins.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </ArticleSection>
  );
}

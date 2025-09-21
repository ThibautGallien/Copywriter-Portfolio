"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArticleSection,
  DetailedExample,
  ArticleCTA,
} from "@/components/blog/BlogComponents";

const examples = [
  {
    title: "Mailchimp – l'exemple pédagogique",
    description:
      "La plateforme email marketing propose des landing pages claires pour ses outils.",
    points: [
      "Design minimaliste qui met en avant un seul message",
      "Illustration simple et parlante",
      "CTA clair et direct : 'Commencer gratuitement'",
      "Bénéfices immédiats plutôt que fonctionnalités",
    ],
    insight:
      "Exemple parfait d'une page qui crée un lien émotionnel immédiat avec son univers",
  },
  {
    title: "HubSpot – la clarté avant tout",
    description:
      "Logiciel CRM qui utilise des landing pages pour capter des leads via des démos.",
    points: [
      "Titre accrocheur résumant la promesse",
      "Formulaire ultra-court (email + prénom)",
      "Témoignages clients bien visibles",
      "CTA répété à plusieurs endroits stratégiques",
    ],
    insight:
      "Approche B2B parfaite : valeur immédiate + guidage concret vers l'utilisation",
  },
  {
    title: "E-commerce – l'efficacité orientée achat",
    description:
      "Sites de vente qui créent des pages spécifiques pour leurs produits phares.",
    points: [
      "Photos produit en haute qualité",
      "Mise en avant de la promotion",
      "Compteur de temps pour créer l'urgence",
      "Code promo directement utilisable",
    ],
    insight:
      "Combine émotion, urgence et facilité d'achat pour maximiser les conversions",
  },
];

export default function ExemplesSection() {
  return (
    <ArticleSection id="exemples" title="Exemples de Landing Pages réussies">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="text-gray-300 leading-relaxed mb-8">
          Les bonnes pratiques, c'est utile. Mais rien ne vaut des exemples
          concrets pour visualiser ce qu'une landing page efficace peut donner.
        </p>

        <div className="space-y-8">
          {examples.map((example, index) => (
            <DetailedExample key={index} example={example} />
          ))}
        </div>

        <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/20 mt-8">
          <CardContent className="p-6">
            <h4 className="font-bold text-[#FFD400] mb-3">
              💡 Pour aller plus loin
            </h4>
            <p className="text-gray-300">
              Vous pouvez consulter des galeries spécialisées comme Land-book ou
              Lapa Ninja qui regroupent des centaines d'exemples de landing
              pages efficaces, toutes industries confondues.
            </p>
          </CardContent>
        </Card>

        <ArticleCTA
          title="Besoin d'une landing page qui convertit vraiment ?"
          description="Je crée des landing pages sur mesure qui transforment vos visiteurs en clients. Consultation gratuite pour analyser vos besoins."
          buttonText="Discuter de mon projet"
        />
      </motion.div>
    </ArticleSection>
  );
}

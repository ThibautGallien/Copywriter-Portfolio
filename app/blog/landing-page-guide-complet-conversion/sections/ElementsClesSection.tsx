"use client";

import { motion } from "framer-motion";
import {
  ArticleSection,
  BenefitsList,
  Highlight,
} from "@/components/blog/BlogComponents";

const essentialElements = [
  {
    title: "Un objectif unique et clair",
    description:
      "La page ne doit poursuivre qu'un seul but : inscription, téléchargement, achat...",
  },
  {
    title: "Une proposition de valeur (USP) mise en avant",
    description:
      "Expliquez clairement ce que le visiteur gagne en restant sur votre page",
  },
  {
    title: "Un titre accrocheur + sous-titre explicatif",
    description:
      "Le titre capte l'attention, le sous-titre apporte la précision",
  },
  {
    title: "Un contenu orienté bénéfices",
    description:
      "Privilégiez les arguments centrés sur les bénéfices concrets pour l'utilisateur",
  },
  {
    title: "La preuve sociale",
    description:
      "Témoignages, logos partenaires, avis clients pour renforcer la crédibilité",
  },
  {
    title: "Des visuels impactants",
    description:
      "Photos de qualité, vidéos, mockups pour projeter le visiteur dans l'usage",
  },
  {
    title: "Des CTA visibles et incitatifs",
    description: "Boutons clairs, colorés, avec un verbe d'action engageant",
  },
  {
    title: "Un formulaire optimisé",
    description: "Demandez uniquement les informations indispensables",
  },
];

export default function ElementsClesSection() {
  return (
    <ArticleSection
      id="elements-cles"
      title="Les éléments indispensables d'une landing page performante"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="text-gray-300 leading-relaxed mb-8">
          Créer une landing page efficace, c'est trouver l'équilibre parfait
          entre clarté, persuasion et simplicité. Chaque composant doit avoir
          une raison d'être et contribuer à l'action attendue.
        </p>

        <BenefitsList
          benefits={essentialElements}
          title="Les composants incontournables"
          cardClassName="bg-gradient-to-br from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/30"
        />

        <Highlight
          color="from-[#FFD400]/20 to-[#F59E0B]/20"
          borderColor="border-[#FFD400]/30"
        >
          Une landing page efficace, ce n'est pas un patchwork.
          <span className="text-[#FFD400] font-bold">
            {" "}
            C'est une flèche : un seul message, une seule direction.
          </span>
        </Highlight>
      </motion.div>
    </ArticleSection>
  );
}

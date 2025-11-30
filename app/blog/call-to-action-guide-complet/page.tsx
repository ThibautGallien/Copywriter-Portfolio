"use client";

import { TrendingUp, Target, Users } from "lucide-react";
import {
  ArticleHeader,
  KeyPointsSection,
  TableOfContents,
  ArticleNavigation,
  ArticleCTA,
} from "@/components/blog/BlogComponents";

// Import des sections
import DefinitionSection from "./sections/DefinitionSection";
import ImportanceSection from "./sections/ImportanceSection";
import CaracteristiquesSection from "./sections/CaracteristiquesSection";
import PlacementSection from "./sections/PlacementSection";
import ExemplesSection from "./sections/ExemplesSection";
import OptimisationSection from "./sections/OptimisationSection";
import ErreursSection from "./sections/ErreursSection";
import ChecklistSection from "./sections/ChecklistSection";
import ConclusionSection from "./sections/ConclusionSection";

const articleMeta = {
  title: "Call to Action (CTA) : Guide complet",
  publishedAt: "2024-06-30",
  estimatedReadingTime: 10,
  author: "Thibaut Gallien",
  categories: ["Copywriting", "Conversion"],
  categoryColors: ["#10b981", "#059669"],
};

const keyPoints = [
  {
    icon: TrendingUp,
    title: "Booste tes conversions",
    description:
      "Un CTA optimisé peut augmenter de 80% le taux de clic sur une landing page",
  },
  {
    icon: Target,
    title: "Guide l'action",
    description:
      "Transforme un simple lecteur en prospect qualifié grâce à un appel à l'action clair",
  },
  {
    icon: Users,
    title: "Améliore l'expérience",
    description:
      "Oriente tes visiteurs vers la prochaine étape de leur parcours",
  },
];

const tableOfContents = [
  { id: "definition", title: "Qu'est-ce qu'un Call to Action ?" },
  { id: "importance", title: "Pourquoi un CTA est indispensable ?" },
  { id: "caracteristiques", title: "Les 5 caractéristiques d'un CTA efficace" },
  {
    id: "placement",
    title: "Où placer tes CTA pour maximiser les conversions ?",
  },
  { id: "exemples", title: "Exemples concrets de CTA qui fonctionnent" },
  { id: "optimisation", title: "Comment optimiser tes CTA grâce aux tests ?" },
  { id: "erreurs", title: "Erreurs fréquentes à éviter" },
  { id: "checklist", title: "Checklist pour créer un CTA qui convertit" },
];

export default function CTAArticle() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <ArticleHeader
          meta={articleMeta}
          excerpt="La plupart des sites perdent des clients… non pas à cause de leur offre, mais parce que leurs CTA sont invisibles, vagues ou mal placés. Résultat : tes visiteurs lisent, scrollent, et repartent sans rien faire. Un détail qui coûte cher."
        />

        <KeyPointsSection points={keyPoints} />

        <TableOfContents items={tableOfContents} />

        <DefinitionSection />
        <ImportanceSection />
        <CaracteristiquesSection />
        <PlacementSection />
        <ExemplesSection />
        <OptimisationSection />
        <ErreursSection />
        <ChecklistSection />
        <ConclusionSection />

        <ArticleCTA
          title="🎯 Envie de CTA qui transforment vraiment ?"
          description="Je t'aide à créer des pages et des emails avec des CTA qui convertissent. Audit gratuit pour identifier où tu perds de l'argent."
          buttonText="Postuler pour un audit gratuit"
          buttonLink="https://calendly.com/hello-thibautgallien/30min"
        />

        <ArticleNavigation />
      </div>
    </div>
  );
}

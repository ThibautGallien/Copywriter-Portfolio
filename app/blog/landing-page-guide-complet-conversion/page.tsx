"use client";

import { TrendingUp, Target, Users } from "lucide-react";
import {
  ArticleHeader,
  KeyPointsSection,
  TableOfContents,
  ArticleNavigation,
  ArticleCTA,
} from "@/components/blog/BlogComponents";

const articleMeta = {
  title: "Landing Page : définition, exemples et guide complet",
  publishedAt: "2024-06-20",
  estimatedReadingTime: 10,
  author: "Thibaut Gallien",
  categories: ["Copywriting", "Conversion"],
  categoryColors: ["#FF6B6B", "#4ECDC4"],
};

const keyPoints = [
  {
    icon: TrendingUp,
    title: "Conversion focalisée",
    description:
      "Une landing page a un seul objectif : convertir vos visiteurs en prospects ou clients",
  },
  {
    icon: Target,
    title: "Élimination des distractions",
    description:
      "Suppression de tous les éléments qui peuvent détourner l'attention de votre CTA principal",
  },
  {
    icon: Users,
    title: "Expérience utilisateur optimisée",
    description:
      "Parcours utilisateur simplifié et orienté vers une action précise",
  },
];

const tableOfContents = [
  { id: "definition", title: "Qu'est-ce qu'une Landing Page ?" },
  { id: "importance", title: "Pourquoi une Landing Page est essentielle" },
  { id: "elements-cles", title: "Les éléments indispensables" },
  { id: "bonnes-pratiques", title: "Meilleures pratiques de conception" },
  { id: "erreurs-eviter", title: "Les erreurs à éviter absolument" },
  { id: "exemples", title: "Exemples de Landing Pages réussies" },
  { id: "creation", title: "Étapes pour créer votre Landing Page" },
];

export default function LandingPageArticle() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <ArticleHeader
          meta={articleMeta}
          excerpt="Vous dépensez du budget en publicité, mais vos visiteurs ne convertissent pas ? La réponse tient souvent en deux mots : landing page. Une landing page bien conçue transforme un trafic froid en prospects qualifiés — et des prospects en clients."
        />

        <KeyPointsSection points={keyPoints} />

        <TableOfContents items={tableOfContents} />

        {/* Import des sections depuis les autres composants */}
        <DefinitionSection />
        <ImportanceSection />
        <ElementsClesSection />
        <BonnesPratiquesSection />
        <ErreursSection />
        <ExemplesSection />
        <CreationSection />
        <FAQSection />
        <ConclusionSection />

        <ArticleCTA
          title="🚀 Prêt à créer une landing page qui cartonne ?"
          description="Je vous accompagne dans la création de landing pages sur mesure qui transforment vos visiteurs en clients. Consultation gratuite pour analyser votre projet."
          buttonText="Discuter du projet"
          buttonLink="https://calendly.com/hello-thibautgallien/30min"
        />

        <ArticleNavigation />
      </div>
    </div>
  );
}

// Import les sections depuis les composants suivants
import DefinitionSection from "./sections/DefinitionSection";
import ImportanceSection from "./sections/ImportanceSection";
import ElementsClesSection from "./sections/ElementsClesSection";
import BonnesPratiquesSection from "./sections/BonnesPratiquesSection";
import ErreursSection from "./sections/ErreursSection";
import ExemplesSection from "./sections/ExemplesSection";
import CreationSection from "./sections/CreationSection";
import FAQSection from "./sections/FAQSection";
import ConclusionSection from "./sections/ConclusionSection";

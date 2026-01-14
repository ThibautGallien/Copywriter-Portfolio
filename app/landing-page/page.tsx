"use client";

import { Zap, Target, TrendingUp } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import {
  ArticleHeader,
  KeyPointsSection,
  TableOfContents,
  ArticleNavigation,
  ArticleCTA,
} from "@/components/blog/BlogComponents";

import DefinitionSection from "./sections/DefinitionSection";
import ImportanceSection from "./sections/ImportanceSection";
import ElementsSection from "./sections/ElementsSection";
import ErrorsSection from "./sections/ErrorsSection";
import ExamplesSection from "./sections/ExamplesSection";
import TypesSection from "./sections/TypesSection";
import StepsSection from "./sections/StepsSection";
import FAQSection from "./sections/FAQSection";

const articleMeta = {
  title: "Landing Page : définition, exemples et guide complet 2025",
  publishedAt: "2025-01-15",
  lastModified: "2025-01-15",
  estimatedReadingTime: 12,
  author: "Thibaut Gallien",
  categories: ["Landing Page", "Conversion"],
  categoryColors: ["#10b981", "#06b6d4"],
};

const keyPoints = [
  {
    icon: Zap,
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
    icon: TrendingUp,
    title: "ROI multiplié",
    description:
      "Les meilleures landing pages convertissent 3 à 5x mieux que les pages classiques",
  },
];

const tableOfContents = [
  { id: "definition", title: "Qu'est-ce qu'une Landing Page" },
  { id: "importance", title: "Pourquoi c'est essentiel" },
  { id: "elements", title: "Les 8 éléments indispensables" },
  { id: "errors", title: "Les 5 erreurs fatales" },
  { id: "examples", title: "3 landing pages décortiquées" },
  { id: "types", title: "Landing page par objectif" },
  { id: "steps", title: "Comment créer la tienne" },
];

const relatedArticles = [
  {
    title: "Définition complète landing page",
    url: "/landing-page/definition",
    description: "Tout comprendre sur les landing pages en 5 minutes",
  },
  {
    title: "Créer une landing page en 2025",
    url: "/landing-page/creer",
    description: "Guide pas à pas pour créer ta première landing page",
  },
  {
    title: "Exemples de landing pages qui convertissent",
    url: "/landing-page/exemples",
    description: "10 exemples analysés avec taux de conversion réels",
  },
  {
    title: "Design de landing page",
    url: "/landing-page/design",
    description: "Principes de design pour maximiser tes conversions",
  },
  {
    title: "Landing page gratuite : meilleurs outils",
    url: "/landing-page/gratuite",
    description: "Créer une landing page sans dépenser 1€",
  },
  {
    title: "Landing page WordPress",
    url: "/landing-page/wordpress",
    description: "Créer des landing pages sur WordPress (avec ou sans code)",
  },
];

// Schemas restent identiques
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Landing Page : définition, exemples et guide complet 2025",
  description:
    "Guide complet des landing pages : définition, 8 éléments essentiels, 5 erreurs à éviter, 3 exemples analysés avec taux de conversion réels. Basé sur l'analyse de 127 landing pages.",
  image: "https://www.thibautgallien.fr/images/landing-page-cover.jpg",
  author: {
    "@type": "Person",
    name: "Thibaut Gallien",
    url: "https://www.thibautgallien.fr/a-propos",
  },
  publisher: {
    "@type": "Organization",
    name: "Thibaut Gallien - Stratège Funnel",
    logo: {
      "@type": "ImageObject",
      url: "https://www.thibautgallien.fr/logo.png",
    },
  },
  datePublished: "2025-01-15",
  dateModified: "2025-01-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.thibautgallien.fr/landing-page",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "C'est quoi une landing page ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une landing page est une page web avec un seul objectif : transformer un visiteur en lead ou en client. Contrairement à une page d'accueil qui propose 15 liens et 3 CTA différents, une landing page ne laisse que 2 choix : faire l'action demandée (s'inscrire, acheter, télécharger) ou partir. Pas de menu, pas de sidebar, pas de distraction. Taux de conversion moyen : 1,75% pour les landing pages moyennes, 11,45% pour les 10% meilleures (source : Unbounce, analyse de 44 000 pages).",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le taux de conversion moyen d'une landing page ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le taux de conversion moyen d'une landing page est de 2,35% tous secteurs confondus (source : Unbounce 2024, analyse de 44 000 landing pages). Les 10% meilleures atteignent 11,45%. Par type : Lead magnet (ebook, guide) : 18,7% en moyenne. E-commerce (vente produit) : 4,2% en moyenne. Démo B2B (prise de RDV) : 8,4% en moyenne. Événement gratuit : 28,3% en moyenne. La différence ? 8 éléments clés que 90% des entreprises oublient.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte la création d'une landing page ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le coût varie selon l'approche : DIY gratuit avec WordPress + Elementor (si tu as déjà WordPress), ou outils no-code : Unbounce (90€/mois), Leadpages (37€/mois), Systeme.io (gratuit jusqu'à 2000 contacts). Freelance/agence : Landing page template personnalisé : 800-1 500€, Landing page sur mesure (design custom + copywriting) : 2 000-3 500€, Landing page premium (design + copy + A/B testing + optimisation 3 mois) : 4 000-8 000€. Mon conseil : Commence avec un template Unbounce à 90€/mois pour tester rapidement. Investis dans du custom quand tu génères 50+ leads/mois.",
      },
    },
    {
      "@type": "Question",
      name: "Landing page vs page d'accueil : quelle différence ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Page d'accueil : Objectif = présenter l'entreprise. Navigation = menu complet, 10+ liens. CTA = 3-5 CTA différents. Taux de conversion = 1-3% en moyenne. Durée de vie = permanente. Landing page : Objectif = convertir sur 1 action. Navigation = 0 ou 1 lien. CTA = 1 CTA répété 3-4 fois. Taux de conversion = 5-15% si bien conçue. Durée de vie = temporaire (campagne). Résultat : Landing pages avec 1 CTA convertissent 266% mieux que celles avec 2+ CTA (étude HubSpot, 5 000 pages).",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://www.thibautgallien.fr",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Landing Page",
      item: "https://www.thibautgallien.fr/landing-page",
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment créer une landing page qui convertit",
  description:
    "Guide étape par étape pour créer une landing page avec un taux de conversion supérieur à 10%",
  step: [
    {
      "@type": "HowToStep",
      name: "Définir l'objectif unique",
      text: "Choisis UN seul objectif : génération de leads, vente, inscription événement, ou démo. Une landing page = 1 objectif = 1 CTA. Les landing pages avec 1 CTA convertissent 266% mieux que celles avec 2+ CTA.",
    },
    {
      "@type": "HowToStep",
      name: "Rédiger un titre bénéfice",
      text: "Écris un titre qui vend un bénéfice, pas une fonctionnalité. Mauvais : 'Notre plateforme CRM moderne'. Bon : 'Gère 500+ leads sans perdre une vente'. Changer un titre peut améliorer la conversion de 30-90%.",
    },
    {
      "@type": "HowToStep",
      name: "Créer un formulaire court",
      text: "Pour du lead gen, limite à 3 champs maximum (prénom, email, téléphone). Unbounce : 3 champs = 10,4% conversion, 5 champs = 6,2%, 7+ champs = 3,1%. Demande le minimum pour démarrer la conversation.",
    },
    {
      "@type": "HowToStep",
      name: "Ajouter la preuve sociale",
      text: "Intègre chiffres d'autorité ('Utilisé par 150 000+ entreprises'), logos clients (6-8 entreprises connues), ou témoignages avec photo. Logos augmentent confiance de 42% selon Nielsen.",
    },
    {
      "@type": "HowToStep",
      name: "Optimiser pour mobile",
      text: "67% du trafic landing page vient du mobile. Teste ta page sur mobile AVANT de lancer. Chaque seconde de chargement supplémentaire = -7% de conversion (Google Speed Report).",
    },
    {
      "@type": "HowToStep",
      name: "Tester et itérer",
      text: "Lance des tests A/B sur titre, CTA, visuels, formulaire. Les CTA spécifiques augmentent la conversion de 21% en moyenne (WordStream, 3 000 tests). Optimise en continu.",
    },
  ],
};

export default function LandingPagePillarPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <ArticleHeader
            meta={articleMeta}
            excerpt="1 847€ dépensés en Google Ads. 2 340 visiteurs. 41 conversions. Taux de conversion : 1,75%. C'est la moyenne des landing pages B2B en 2024. Mais les 10% meilleures atteignent 11,45%. Même industrie. Même budget. Même trafic. J'ai analysé 127 landing pages #1 sur Google pour comprendre pourquoi certaines convertissent à 2% et d'autres à 15%. Voici ce que j'ai découvert."
          />

          <KeyPointsSection points={keyPoints} />

          <TableOfContents items={tableOfContents} />

          <DefinitionSection />
          <ImportanceSection />
          <ElementsSection />
          <ErrorsSection />
          <ExamplesSection />
          <TypesSection />
          <StepsSection />

          <section className="my-16">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Aller plus loin sur les landing pages
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedArticles.map((article, index) => (
                <Link
                  key={index}
                  href={article.url}
                  className="group bg-neutral-50 border border-neutral-200 rounded-2xl p-5 hover:border-blue-300 transition-all"
                >
                  <h3 className="font-bold text-blue-600 group-hover:text-blue-500 transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {article.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <FAQSection />

          <ArticleCTA
            title="🚀 Ta landing page convertit à moins de 5% ?"
            description="Je décortique ta landing page en 48h pour identifier les 3 à 5 points de friction qui tuent tes conversions. Tu reçois un plan d'action clair avec les copies réécrites prêtes à tester."
            buttonText="Réserve ton audit gratuit (30 min)"
            buttonLink="https://calendly.com/hello-thibautgallien/30min"
          />

          <ArticleNavigation />
        </div>
      </div>
    </>
  );
}

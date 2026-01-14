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
import FormulasSection from "./sections/FormulasSection";
import ApplicationSection from "./sections/ApplicationSection";
import ConversionSection from "./sections/ConversionSection";
import ConclusionSection from "./sections/ConclusionSection";
import FAQSection from "./sections/FAQSection";

const articleMeta = {
  title:
    "Copywriting : pourquoi tes textes ne vendent pas (et comment y remédier)",
  publishedAt: "2025-01-15",
  estimatedReadingTime: 8,
  author: "Thibaut Gallien",
  categories: ["Copywriting", "Conversion"],
  categoryColors: ["#10b981", "#059669"],
};

const keyPoints = [
  {
    icon: Zap,
    title: "Écriture qui vend",
    description:
      "Le copywriting transforme des mots en actions concrètes : achats, inscriptions, clics",
  },
  {
    icon: Target,
    title: "Conversion immédiate",
    description:
      "Contrairement à la rédaction web qui éduque, le copywriting vise l'action maintenant",
  },
  {
    icon: TrendingUp,
    title: "ROI multiplié",
    description:
      "Un bon copy peut multiplier tes revenus par 2 à 3 sans changer ton produit ou ton trafic",
  },
];

const tableOfContents = [
  { id: "definition", title: "C'est quoi le copywriting" },
  { id: "formulas", title: "Les 3 formules qui fonctionnent" },
  { id: "application", title: "Comment l'appliquer à ton business" },
  { id: "conversion", title: "Comment je peux t'aider" },
];

const relatedArticles = [
  {
    title: "Définition complète du copywriting",
    url: "/copywriting/definition",
    description: "Tout comprendre sur le copywriting en 5 minutes",
  },
  {
    title: "Meilleures formations copywriting",
    url: "/copywriting/formation",
    description: "Les formations qui valent vraiment le coup",
  },
  {
    title: "Copywriting pour page de vente",
    url: "/copywriting/page-de-vente",
    description: "Structure et techniques pour des pages qui convertissent",
  },
  {
    title: "Exemples de copywriting qui cartonnent",
    url: "/copywriting/exemples",
    description: "7 exemples analysés en détail",
  },
  {
    title: "Copywriting et IA",
    url: "/copywriting/ia",
    description: "Comment utiliser l'IA pour ton copywriting",
  },
  {
    title: "Devenir copywriter : jobs et salaires",
    url: "/copywriting/jobs",
    description: "Métier, formation, rémunération",
  },
  {
    title: "Techniques de copywriting avancées",
    url: "/copywriting/techniques",
    description: "AIDA, PAS, FAB et autres formules détaillées",
  },
];

// Schema JSON-LD Article
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Copywriting : pourquoi tes textes ne vendent pas (et comment y remédier)",
  description:
    "Guide complet du copywriting : définition, formules AIDA et PAS, techniques d'application, et erreurs à éviter pour transformer tes visiteurs en clients.",
  image: "https://www.thibautgallien.fr/images/copywriting-cover.jpg",
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
    "@id": "https://www.thibautgallien.fr/copywriting",
  },
};

// Schema JSON-LD FAQ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de temps faut-il pour apprendre le copywriting ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les bases du copywriting s'apprennent en 2 à 3 semaines si tu pratiques tous les jours. Pour devenir vraiment bon, compte 6 à 12 mois de pratique régulière. L'erreur que je vois trop souvent : passer 6 mois à lire des livres et des formations sans jamais écrire une seule ligne. Le copywriting s'apprend en écrivant, en testant, et en mesurant. Pas en consommant du contenu. Si tu veux accélérer : écris 3 versions différentes d'un même texte chaque jour pendant 30 jours. Tu progresseras plus en 1 mois qu'en 6 mois de théorie.",
      },
    },
    {
      "@type": "Question",
      name: "Le copywriting fonctionne-t-il pour tous les types de business ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, mais différemment selon ton cycle de vente. Pour un e-commerce à 20€, tu as 10 secondes pour convaincre. Ton copywriting doit être immédiat, émotionnel, et lever 2-3 objections clés. Pour un SaaS B2B à 5 000€/an, ton prospect va lire 8 pages, comparer 5 solutions, et impliquer 3 décideurs. Ton copywriting doit construire la confiance sur plusieurs touchpoints. L'erreur fatale : copier le ton d'un concurrent qui vend un produit complètement différent. Un copywriting qui marche pour un cours en ligne à 97€ ne marchera jamais pour un logiciel d'entreprise à 50 000€.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il écrire long ou court en copywriting ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La vraie réponse : aussi long qu'il faut pour convaincre, aussi court que possible pour garder l'attention. Pour un produit à 2 000€ avec 5 objections majeures, tu auras besoin de 3 000 mots. Pour un call-to-action sur une page d'accueil, 8 mots suffisent. Le test ultime : retire une phrase. Si ton taux de conversion baisse, elle était nécessaire. Si rien ne change, elle était inutile. J'ai vu des pages de vente à 8 000 mots convertir à 12%, et d'autres à 500 mots convertir à 2%. Ce n'est pas la longueur qui compte, c'est la pertinence de chaque phrase.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on faire du copywriting ET du SEO en même temps ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, et tu devrais toujours faire les deux. Le SEO amène du trafic qualifié, le copywriting convertit ce trafic en clients. L'erreur que je vois partout : des articles bourrés de mots-clés qui se lisent comme des robots. Ou à l'inverse, des textes magnifiques qui ne rankent jamais parce qu'ils ignorent totalement le SEO. La bonne approche : écris d'abord pour ton lecteur avec du vrai copywriting (bénéfices, objections, émotions). Ensuite, optimise pour Google (mots-clés dans les titres, structure H2/H3, maillage interne). Dans cet ordre. Jamais l'inverse.",
      },
    },
  ],
};

// Schema JSON-LD Breadcrumb
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
      name: "Copywriting",
      item: "https://www.thibautgallien.fr/copywriting",
    },
  ],
};

export default function CopywritingPillarPage() {
  return (
    <>
      {/* Schema JSON-LD */}
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

      <div className="min-h-screen bg-white text-neutral-900 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <ArticleHeader
            meta={articleMeta}
            excerpt="Cette pub qui t'a fait sortir ta carte bancaire à 23h. Cet email qui t'a fait cliquer alors que tu détestes les newsletters. Ce bouton sur lequel tu as cliqué sans réfléchir. C'est du copywriting. Et la différence entre une landing page à 2% de conversion et une à 8% ? Souvent, c'est juste le copy."
          />

          <KeyPointsSection points={keyPoints} />

          <TableOfContents items={tableOfContents} />

          <DefinitionSection />
          <FormulasSection />
          <ApplicationSection />
          <ConversionSection />
          <ConclusionSection />

          {/* Section liens internes vers satellites */}
          <section className="my-16">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">
              Aller plus loin sur le copywriting
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedArticles.map((article, index) => (
                <Link
                  key={index}
                  href={article.url}
                  className="group bg-white border border-neutral-200 rounded-xl p-5 hover:border-blue-200 transition-all"
                >
                  <h3 className="font-bold text-blue-600 group-hover:text-blue-500 transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-neutral-500 text-sm">
                    {article.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <FAQSection />

          <ArticleCTA
            title="🚀 Ton funnel laisse filer des clients chaque jour ?"
            description="Je décortique ton funnel en 48h pour identifier les 3 à 5 points de friction qui te coûtent le plus cher. Tu reçois un plan d'action clair avec les copies réécrites prêtes à tester."
            buttonText="Réserve ton audit gratuit (30 min)"
            buttonLink="https://calendly.com/hello-thibautgallien/30min"
          />

          <ArticleNavigation />
        </div>
      </div>
    </>
  );
}

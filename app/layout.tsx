import "./globals.css";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title:
    "Thibaut Gallien - Analyse Data, Email Marketing & SEO | Business en ligne",

  description:
    "J'aide les business en ligne à performer : analyse de données pour trouver où tu perds de l'argent, email marketing pour convertir ta liste, SEO pour devenir visible sur Google. Résultats mesurables.",

  keywords: [
    "analyse données marketing",
    "optimisation funnel",
    "email marketing freelance",
    "SEO freelance",
    "audit funnel",
    "optimisation taux de conversion",
    "séquence email automatisée",
    "référencement naturel",
    "consultant marketing digital",
    "audit SEO",
    "stratégie email marketing",
    "optimisation landing page",
    "améliorer conversion site",
    "freelance SEO France",
    "email marketing e-commerce",
    "audit marketing digital",
    "augmenter CA en ligne",
    "data driven marketing",
    "newsletter conversion",
    "optimisation site Google",
    "welcome sequence email",
    "mots-clés SEO",
    "analyse trafic web",
    "CRO conversion rate optimization",
    "consultant email marketing",
  ].join(", "),

  authors: [{ name: "Thibaut Gallien", url: "https://thibautgallien.com" }],
  creator: "Thibaut Gallien",
  publisher: "Thibaut Gallien",

  metadataBase: new URL("https://thibautgallien.com"),

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://thibautgallien.com",
    title:
      "Thibaut Gallien - Analyse Data, Email Marketing & SEO | Business en ligne",
    description:
      "J'aide les business en ligne à performer : analyse de données, email marketing et SEO. Des résultats concrets et mesurables.",
    siteName: "Thibaut Gallien - Data, Email & SEO",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thibaut Gallien - Optimisation Funnel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@thibautgallien",
    creator: "@thibautgallien",
    title:
      "Thibaut Gallien - Analyse Data, Email Marketing & SEO | Business en ligne",
    description:
      "J'aide les business en ligne à performer : analyse de données, email marketing et SEO. Des résultats concrets et mesurables.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Marketing",
  classification: "Business",

  verification: {
    // Tu pourras ajouter ici tes codes de vérification plus tard
    // google: "ton-code-google",
    // yandex: "ton-code-yandex",
  },

  other: {
    "msapplication-TileColor": "#10b981",
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable}`}>
      <head>

        {/* Schema.org pour les données structurées - VERSION AMÉLIORÉE */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Thibaut Gallien - Data, Email Marketing & SEO",
              founder: {
                "@type": "Person",
                name: "Thibaut Gallien",
                jobTitle: "Consultant Marketing Digital",
                description:
                  "Consultant marketing digital spécialisé en analyse de données, email marketing et SEO. 5 ans d'expérience. J'aide les business en ligne à performer.",
                url: "https://thibautgallien.com",
                sameAs: [
                  "https://www.linkedin.com/in/thibaut-gallien",
                  "https://twitter.com/thibautgallien",
                ],
              },
              description:
                "Services d'analyse de données, email marketing et SEO pour les business en ligne. Résultats concrets et mesurables.",
              url: "https://thibautgallien.com",
              areaServed: {
                "@type": "Country",
                name: "France",
              },
              serviceType: [
                "Analyse de données marketing",
                "Email Marketing",
                "SEO - Référencement Naturel",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services Marketing Digital",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Diagnostic Complet - Analyse de Données",
                      description:
                        "Analyse complète de ton funnel avec rapport détaillé et plan d'action priorisé par impact.",
                    },
                    price: "800",
                    priceCurrency: "EUR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Optimisation Complète - Analyse de Données",
                      description:
                        "Diagnostic + Implémentation + Tracking 60 jours. Je m'occupe de tout.",
                    },
                    price: "2000",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/LimitedAvailability",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Setup Email Marketing",
                      description:
                        "Création de séquences email automatisées (welcome, vente), segmentation et templates.",
                    },
                    price: "700",
                    priceCurrency: "EUR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Gestion Email Marketing",
                      description:
                        "Gestion complète de l'email marketing : newsletters, séquences, A/B testing, rapports mensuels.",
                    },
                    price: "500",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/LimitedAvailability",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Audit SEO + Plan d'action",
                      description:
                        "Audit technique complet, recherche de mots-clés, analyse concurrentielle et plan d'action priorisé.",
                    },
                    price: "600",
                    priceCurrency: "EUR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Accompagnement SEO",
                      description:
                        "Accompagnement SEO mensuel : optimisations techniques, contenu, suivi des positions.",
                    },
                    price: "500",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/LimitedAvailability",
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "3",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />

        {/* FAQ Schema (optionnel mais bon pour le SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Quels services proposes-tu ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Je propose trois services : (1) Analyse de données pour identifier où ton funnel perd de l'argent, (2) Email marketing pour transformer ta liste en source de revenus, (3) SEO pour rendre ton site visible sur Google.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Combien coûtent tes services ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Analyse de données : 800€ (diagnostic) ou 2000€ (optimisation complète). Email marketing : 700€ (setup) ou 500€/mois (gestion complète). SEO : 600€ (audit) ou 500€/mois (accompagnement).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels types de business peuvent bénéficier de ces services ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Tous les business 100% en ligne : coaching, formation, e-commerce, affiliation, SaaS. Conditions : minimum 5K€/mois de CA et 500 visiteurs/mois.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-inter bg-white text-neutral-900 antialiased">
        <GoogleAnalytics />
        <MicrosoftClarity />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          richColors
          theme="light"
          expand={true}
          duration={5000}
          toastOptions={{
            style: {
              background: "white",
              color: "#171717",
              border: "1px solid #e5e5e5",
              borderRadius: "12px",
            },
          }}
        />
      </body>
    </html>
  );
}

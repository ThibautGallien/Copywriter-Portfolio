import "./globals.css";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "Thibaut Gallien - Optimisation Funnel | J'augmente le CA des business en ligne",

  description:
    "J'augmente le CA des business en ligne en trouvant les 2-3 endroits où ils perdent de l'argent. Analyse data → Fixes concrets → Résultats mesurables. Diagnostic complet ou optimisation totale (3 places gratuites disponibles).",

  keywords: [
    "optimisation funnel",
    "audit funnel gratuit",
    "conversion funnel",
    "optimisation taux de conversion",
    "analyse funnel marketing",
    "CRO conversion rate optimization",
    "freelance optimisation funnel",
    "audit marketing digital",
    "analyste funnel",
    "optimisation landing page",
    "améliorer conversion site",
    "diagnostic funnel",
    "consultant funnel marketing",
    "optimisation checkout",
    "audit ads facebook",
    "améliorer ROI publicité",
    "funnel marketing ecommerce",
    "optimisation funnel infoproduit",
    "audit email marketing",
    "séquence email conversion",
    "augmenter CA en ligne",
    "trouver fuites funnel",
    "optimisation funnel coaching",
    "optimisation funnel formation",
    "tracking conversion funnel",
    "data driven marketing",
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
      "Thibaut Gallien - Optimisation Funnel | J'augmente le CA des business en ligne",
    description:
      "J'augmente le CA des business en ligne en trouvant les 2-3 endroits où ils perdent de l'argent. Analyse data → Fixes concrets → Résultats mesurables. 3 places gratuites disponibles.",
    siteName: "Thibaut Gallien - Optimisation Funnel",
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
      "Thibaut Gallien - Optimisation Funnel | J'augmente le CA des business en ligne",
    description:
      "J'augmente le CA des business en ligne en trouvant les 2-3 endroits où ils perdent de l'argent. Analyse data → Fixes concrets → Résultats mesurables.",
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
        {/* Preconnect pour optimiser les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Schema.org pour les données structurées - VERSION AMÉLIORÉE */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Thibaut Gallien - Optimisation Funnel",
              founder: {
                "@type": "Person",
                name: "Thibaut Gallien",
                jobTitle: "Optimiseur de funnels marketing",
                description:
                  "Entrepreneur et optimiseur de funnels. 5 ans d'expérience en marketing digital. J'analyse les données pour trouver où les business perdent de l'argent et je fixe les problèmes.",
                url: "https://thibautgallien.com",
                sameAs: [
                  "https://www.linkedin.com/in/thibaut-gallien",
                  "https://twitter.com/thibautgallien",
                ],
              },
              description:
                "Service d'optimisation de funnels marketing. Diagnostic complet + implémentation + tracking pour augmenter le CA des business en ligne.",
              url: "https://thibautgallien.com",
              areaServed: {
                "@type": "Country",
                name: "France",
              },
              serviceType: "Optimisation de funnels marketing",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services d'optimisation",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Diagnostic Complet",
                      description:
                        "Analyse complète de ton funnel avec rapport détaillé et plan d'action priorisé. Tu implémentes, je guide.",
                    },
                    price: "800",
                    priceCurrency: "EUR",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Optimisation Complète",
                      description:
                        "Diagnostic + Implémentation + Tracking 60 jours. Je m'occupe de tout.",
                    },
                    price: "2000",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/LimitedAvailability",
                    availableAtOrFrom: {
                      "@type": "Place",
                      name: "En ligne",
                    },
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
                  name: "Combien coûte un diagnostic de funnel ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le Diagnostic Complet coûte 800€. L'Optimisation Complète (diagnostic + implémentation + tracking) coûte 2000€. Actuellement, 3 places gratuites sont disponibles pour l'offre complète en échange d'un témoignage et case study.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Combien de temps prend l'optimisation d'un funnel ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Le diagnostic prend 48-72h. L'implémentation complète prend 3 semaines. Le tracking se fait sur 60 jours. Total : environ 10-11 semaines du début à la fin.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quels types de business peuvent bénéficier de ce service ?",
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

import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title:
    "Thibaut Gallien - Optimisation Funnel | Je truouve où tu perds de l'argent",

  description:
    "J'analyse tes funnels (ads, landing, emails, checkout) pour trouver où tu perds de l'argent. Diagnostic complet + implémentation + tracking. 3 audits gratuits disponibles.",

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
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://thibautgallien.com",
    title:
      "Thibaut Gallien - Optimisation Funnel | Je truouve où tu perds de l'argent",
    description:
      "J'analyse tes funnels (ads, landing, emails, checkout) pour trouver où tu perds de l'argent. Diagnostic complet + implémentation + tracking. 3 audits gratuits disponibles.",
    siteName: "Thibaut Gallien - Optimisation Funnel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thibaut Gallien - Optimisation Funnel | Je truouve où tu perds de l'argent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thibautgallien",
    creator: "@thibautgallien",
    title:
      "Thibaut Gallien - Optimisation Funnel | Je truouve où tu perds de l'argent",
    description:
      "J'analyse tes funnels (ads, landing, emails, checkout) pour trouver où tu perds de l'argent. Diagnostic complet + implémentation + tracking. 3 audits gratuits disponibles.",
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
  other: {
    "msapplication-TileColor": "#9B5DE5",
    "theme-color": "#0D0D0D",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Preconnect pour optimiser les performances */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Schema.org pour les données structurées */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Thibaut Gallien",
              jobTitle: "Optimiseur de funnels marketing",
              description:
                "J'analyse tes funnels (ads, landing, emails, checkout) pour trouver où tu perds de l'argent. Diagnostic complet + implémentation + tracking. 3 audits gratuits disponibles.",
              url: "https://thibautgallien.com",
              sameAs: [
                "https://www.linkedin.com/in/thibaut-gallien",
                "https://twitter.com/thibautgallien",
              ],
              offers: {
                "@type": "Offer",
                category: "Service",
                description:
                  "J'optimise tes funnels marketing pour maximiser les conversions et les revenus.",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "France",
                addressCountry: "FR",
              },
            }),
          }}
        />
      </head>
      <body className="font-inter bg-[#0D0D0D] text-white antialiased">
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          richColors
          theme="dark"
          expand={true}
          duration={5000}
        />
      </body>
    </html>
  );
}

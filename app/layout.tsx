import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity";

export const metadata: Metadata = {
  title:
    "Thibaut Gallien — Consultant Croissance Digitale | SEO, Email, Data",
  description:
    "Je rends ton business visible sur Google et je transforme ton trafic en revenus. SEO, email marketing, data. Pas de bullshit, des résultats.",
  keywords: [
    "consultant SEO",
    "SEO local",
    "SEO growth",
    "email marketing",
    "analyse données marketing",
    "croissance digitale",
    "référencement naturel",
    "consultant marketing digital",
    "audit SEO",
    "stratégie email marketing",
    "SEO freelance France",
    "data driven marketing",
  ].join(", "),
  authors: [{ name: "Thibaut Gallien", url: "https://thibautgallien.com" }],
  creator: "Thibaut Gallien",
  publisher: "Thibaut Gallien",
  metadataBase: new URL("https://thibautgallien.com"),
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://thibautgallien.com",
    title: "Thibaut Gallien — Consultant Croissance Digitale",
    description:
      "SEO, email marketing, data. Je rends ton business visible sur Google et je transforme ton trafic en revenus.",
    siteName: "Thibaut Gallien",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thibaut Gallien — Consultant Croissance Digitale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thibautgallien",
    creator: "@thibautgallien",
    title: "Thibaut Gallien — Consultant Croissance Digitale",
    description:
      "SEO, email marketing, data. Je rends ton business visible sur Google et je transforme ton trafic en revenus.",
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
    "msapplication-TileColor": "#0A0A0B",
    "theme-color": "#0A0A0B",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Thibaut Gallien — Consultant Croissance Digitale",
              founder: {
                "@type": "Person",
                name: "Thibaut Gallien",
                jobTitle: "Consultant Croissance Digitale",
                description:
                  "Consultant spécialisé en SEO, email marketing et data. J'aide les business à devenir visibles sur Google et à convertir leur trafic.",
                url: "https://thibautgallien.com",
                sameAs: [
                  "https://www.linkedin.com/in/thibaut-gallien",
                  "https://twitter.com/thibautgallien",
                ],
              },
              description:
                "Services de SEO, email marketing et analyse de données pour les business en ligne.",
              url: "https://thibautgallien.com",
              areaServed: { "@type": "Country", name: "France" },
              serviceType: [
                "SEO Local",
                "SEO Growth",
                "Email Marketing",
                "Analyse de données",
              ],
            }),
          }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <MicrosoftClarity />
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="top-right"
          richColors
          theme="dark"
          expand={true}
          duration={5000}
          toastOptions={{
            style: {
              background: "#141416",
              color: "#EDEDEF",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "6px",
            },
          }}
        />
      </body>
    </html>
  );
}

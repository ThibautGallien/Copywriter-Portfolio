import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

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
    "Thibaut Gallien - Copywriter Email Marketing | Newsletter & Séquences qui Vendent",
  description:
    "Copywriter spécialisé en email marketing. Je transforme vos emails en machine à vendre avec des newsletters et séquences d'automation qui convertissent. ROI x2 garanti.",
  keywords: [
    "copywriter email marketing",
    "newsletter qui vend",
    "séquence email automation",
    "email marketing freelance",
    "copywriting conversion",
    "rédacteur web emails",
    "marketing automation",
    "email sequences",
    "newsletter copywriter",
    "email sales funnel",
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
    title: "Thibaut Gallien - Expert Email Marketing & Copywriting",
    description:
      "Spécialiste email marketing qui transforme vos newsletters en machine à vendre. Séquences d'automation, copywriting haute conversion. ROI x2 garanti en 60 jours.",
    siteName: "Thibaut Gallien - Copywriter",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thibaut Gallien - Expert Email Marketing & Copywriting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thibautgallien",
    creator: "@thibautgallien",
    title: "Thibaut Gallien - Expert Email Marketing & Copywriting",
    description:
      "Spécialiste email marketing qui transforme vos newsletters en machine à vendre. Séquences d'automation, copywriting haute conversion.",
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
              jobTitle: "Copywriter Email Marketing",
              description:
                "Expert en email marketing et copywriting, spécialisé dans les newsletters et séquences d'automation qui convertissent.",
              url: "https://thibautgallien.com",
              sameAs: [
                "https://www.linkedin.com/in/thibaut-gallien",
                "https://twitter.com/thibautgallien",
              ],
              offers: {
                "@type": "Offer",
                category: "Service",
                description:
                  "Services de copywriting email marketing avec garantie ROI x2",
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

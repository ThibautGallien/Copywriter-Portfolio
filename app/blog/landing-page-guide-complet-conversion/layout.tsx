import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Landing Page : définition, exemples et guide complet pour convertir | Thibaut Gallien",
  description:
    "Découvrez comment créer des landing pages qui convertissent vraiment. Structure, éléments clés, erreurs à éviter et exemples concrets pour maximiser vos conversions.",
  keywords: [
    "landing page",
    "page d'atterrissage",
    "conversion",
    "copywriting",
    "taux de conversion",
    "CTA",
    "formulaire capture",
    "optimisation conversion",
    "marketing digital",
    "lead generation",
    "USP",
    "proposition de valeur",
  ].join(", "),
  authors: [{ name: "Thibaut Gallien", url: "https://thibautgallien.com" }],
  creator: "Thibaut Gallien",
  publisher: "Thibaut Gallien",
  alternates: {
    canonical: "/blog/landing-page-guide-complet-conversion",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    url: "https://thibautgallien.com/blog/landing-page-guide-complet-conversion",
    title:
      "Landing Page : définition, exemples et guide complet pour convertir",
    description:
      "Découvrez comment créer des landing pages qui convertissent vraiment. Structure, éléments clés, erreurs à éviter et exemples concrets.",
    siteName: "Thibaut Gallien - Copywriter",
    images: [
      {
        url: "/og-landing-page.jpg",
        width: 1200,
        height: 630,
        alt: "Guide complet des landing pages qui convertissent",
      },
    ],
    publishedTime: "2024-06-20T00:00:00.000Z",
    modifiedTime: "2024-06-20T00:00:00.000Z",
    authors: ["Thibaut Gallien"],
    section: "Copywriting",
    tags: ["Copywriting", "Conversion", "Landing Page", "Marketing"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thibautgallien",
    creator: "@thibautgallien",
    title:
      "Landing Page : définition, exemples et guide complet pour convertir",
    description:
      "Découvrez comment créer des landing pages qui convertissent vraiment. Structure, éléments clés et exemples concrets.",
    images: ["/og-landing-page.jpg"],
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
  category: "Copywriting",
  classification: "Tutorial",
  other: {
    "article:author": "Thibaut Gallien",
    "article:published_time": "2024-06-20T00:00:00.000Z",
    "article:modified_time": "2024-06-20T00:00:00.000Z",
    "article:section": "Copywriting",
    "article:tag": "Copywriting, Conversion, Landing Page",
  },
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Schema.org pour l'article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "Landing Page : définition, exemples et guide complet pour convertir",
            description:
              "Découvrez comment créer des landing pages qui convertissent vraiment. Structure, éléments clés, erreurs à éviter et exemples concrets pour maximiser vos conversions.",
            image: "https://thibautgallien.com/og-landing-page.jpg",
            author: {
              "@type": "Person",
              name: "Thibaut Gallien",
              url: "https://thibautgallien.com",
              sameAs: [
                "https://www.linkedin.com/in/thibaut-gallien",
                "https://twitter.com/thibautgallien",
              ],
            },
            publisher: {
              "@type": "Person",
              name: "Thibaut Gallien",
              url: "https://thibautgallien.com",
            },
            datePublished: "2024-06-20T00:00:00.000Z",
            dateModified: "2024-06-20T00:00:00.000Z",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://thibautgallien.com/blog/landing-page-guide-complet-conversion",
            },
            articleSection: "Copywriting",
            keywords: [
              "landing page",
              "conversion",
              "copywriting",
              "marketing digital",
              "lead generation",
            ],
            wordCount: 4200,
            timeRequired: "PT10M",
            url: "https://thibautgallien.com/blog/landing-page-guide-complet-conversion",
          }),
        }}
      />
      {children}
    </>
  );
}

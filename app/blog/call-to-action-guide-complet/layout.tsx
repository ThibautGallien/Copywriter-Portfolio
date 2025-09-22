import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Call to Action (CTA) : Guide complet",
  description:
    "Découvrez comment créer des CTA efficaces qui boostent vos conversions. Guide complet avec exemples concrets, erreurs à éviter et checklist pratique.",
  keywords: [
    "call to action",
    "CTA",
    "bouton conversion",
    "taux de clic",
    "copywriting",
    "conversion optimization",
    "marketing digital",
    "landing page",
    "email marketing",
    "UX design",
  ].join(", "),
  authors: [{ name: "Thibaut Gallien", url: "https://thibautgallien.com" }],
  creator: "Thibaut Gallien",
  publisher: "Thibaut Gallien",
  alternates: {
    canonical: "/blog/call-to-action-guide-complet",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    url: "https://thibautgallien.com/blog/call-to-action-guide-complet",
    title: "Call to Action (CTA) : définition, exemples et bonnes pratiques",
    description:
      "Guide complet pour créer des CTA qui convertissent vraiment. Découvrez les techniques qui transforment vos visiteurs en clients.",
    siteName: "Thibaut Gallien - Copywriter",
    images: [
      {
        url: "/og-cta-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Guide complet des Call to Action efficaces",
      },
    ],
    publishedTime: "2024-06-30T00:00:00.000Z",
    modifiedTime: "2024-06-30T00:00:00.000Z",
    authors: ["Thibaut Gallien"],
    section: "Copywriting",
    tags: ["Copywriting", "Conversion", "CTA", "Marketing"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thibautgallien",
    creator: "@thibautgallien",
    title: "Call to Action (CTA) : définition, exemples et bonnes pratiques",
    description:
      "Guide complet pour créer des CTA qui convertissent vraiment. Techniques et exemples concrets inclus.",
    images: ["/og-cta-guide.jpg"],
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
    "article:published_time": "2024-06-30T00:00:00.000Z",
    "article:modified_time": "2024-06-30T00:00:00.000Z",
    "article:section": "Copywriting",
    "article:tag": "Copywriting, Conversion, CTA",
  },
};

export default function CTAGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Call to Action (CTA) : Guide complet",
            description:
              "Guide complet pour créer des CTA efficaces qui transforment vos visiteurs en clients. Découvrez les techniques, exemples et erreurs à éviter.",
            image: "https://thibautgallien.com/og-cta-guide.jpg",
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
            datePublished: "2024-06-30T00:00:00.000Z",
            dateModified: "2024-06-30T00:00:00.000Z",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://thibautgallien.com/blog/call-to-action-guide-complet",
            },
            articleSection: "Copywriting",
            keywords: [
              "call to action",
              "CTA",
              "conversion",
              "copywriting",
              "marketing digital",
            ],
            wordCount: 3800,
            timeRequired: "PT10M",
            url: "https://thibautgallien.com/blog/call-to-action-guide-complet",
          }),
        }}
      />
      {children}
    </>
  );
}

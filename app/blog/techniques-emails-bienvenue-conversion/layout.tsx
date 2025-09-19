import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Email de bienvenue : le guide complet pour convertir vos nouveaux abonnés | Thibaut Gallien",
  description:
    "Découvrez comment créer des emails de bienvenue qui transforment vos nouveaux abonnés en clients fidèles. Structure, exemples concrets et checklist pratique.",
  keywords: [
    "email de bienvenue",
    "séquence de bienvenue",
    "email marketing",
    "onboarding email",
    "taux d'ouverture",
    "conversion email",
    "copywriting email",
    "automation email",
    "newsletter engagement",
    "email welcome series",
  ].join(", "),
  authors: [{ name: "Thibaut Gallien", url: "https://thibautgallien.com" }],
  creator: "Thibaut Gallien",
  publisher: "Thibaut Gallien",
  alternates: {
    canonical: "/blog/techniques-emails-bienvenue-conversion",
  },
  openGraph: {
    type: "article",
    locale: "fr_FR",
    url: "https://thibautgallien.com/blog/techniques-emails-bienvenue-conversion",
    title:
      "Email de bienvenue : le guide complet pour convertir vos nouveaux abonnés",
    description:
      "Découvrez comment créer des emails de bienvenue qui transforment vos nouveaux abonnés en clients fidèles. Structure, exemples concrets et checklist pratique.",
    siteName: "Thibaut Gallien - Copywriter",
    images: [
      {
        url: "/og-email-bienvenue.jpg",
        width: 1200,
        height: 630,
        alt: "Guide complet des emails de bienvenue qui convertissent",
      },
    ],
    publishedTime: "2024-06-25T00:00:00.000Z",
    modifiedTime: "2024-06-25T00:00:00.000Z",
    authors: ["Thibaut Gallien"],
    section: "Email Marketing",
    tags: ["Email Marketing", "Conversion", "Copywriting", "Automation"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@thibautgallien",
    creator: "@thibautgallien",
    title:
      "Email de bienvenue : le guide complet pour convertir vos nouveaux abonnés",
    description:
      "Découvrez comment créer des emails de bienvenue qui transforment vos nouveaux abonnés en clients fidèles.",
    images: ["/og-email-bienvenue.jpg"],
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
  category: "Email Marketing",
  classification: "Tutorial",
  other: {
    "article:author": "Thibaut Gallien",
    "article:published_time": "2024-06-25T00:00:00.000Z",
    "article:modified_time": "2024-06-25T00:00:00.000Z",
    "article:section": "Email Marketing",
    "article:tag": "Email Marketing, Conversion, Copywriting",
  },
};

export default function EmailBienvenueLayout({
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
              "Email de bienvenue : le guide complet pour convertir vos nouveaux abonnés",
            description:
              "Découvrez comment créer des emails de bienvenue qui transforment vos nouveaux abonnés en clients fidèles. Structure, exemples concrets et checklist pratique.",
            image: "https://thibautgallien.com/og-email-bienvenue.jpg",
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
            datePublished: "2024-06-25T00:00:00.000Z",
            dateModified: "2024-06-25T00:00:00.000Z",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://thibautgallien.com/blog/techniques-emails-bienvenue-conversion",
            },
            articleSection: "Email Marketing",
            keywords: [
              "email de bienvenue",
              "séquence de bienvenue",
              "email marketing",
              "conversion",
              "copywriting",
            ],
            wordCount: 3500,
            timeRequired: "PT8M",
            url: "https://thibautgallien.com/blog/techniques-emails-bienvenue-conversion",
          }),
        }}
      />
      {children}
    </>
  );
}

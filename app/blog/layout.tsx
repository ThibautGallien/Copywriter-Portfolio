import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Copywriting & Conversion | Thibaut Gallien",
  description:
    "Conseils, techniques et stratégies pour transformer tes visiteurs en clients. Copywriting, funnels, conversion. Actionnable. Pas de blabla.",
  keywords: [
    "copywriting",
    "conversion",
    "email marketing",
    "funnel marketing",
    "landing page",
    "CTA",
    "optimisation conversion",
    "growth marketing",
    "stratégie digitale",
  ],
  openGraph: {
    title: "Blog - Copywriting & Conversion | Thibaut Gallien",
    description:
      "Conseils, techniques et stratégies pour transformer tes visiteurs en clients. Copywriting, funnels, conversion. Actionnable. Pas de blabla.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Copywriting & Conversion | Thibaut Gallien",
    description:
      "Conseils, techniques et stratégies pour transformer tes visiteurs en clients.",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

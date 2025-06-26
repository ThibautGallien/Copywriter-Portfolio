import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Copywriting - Conseils Email Marketing | Thibaut Gallien",
  description:
    "Découvrez mes conseils copywriting, techniques d'email marketing et stratégies pour booster vos conversions. Articles pratiques pour entrepreneurs.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

/**
 * Composant pour générer le Schema.org des articles de blog
 * Améliore le SEO et permet d'avoir des rich snippets dans Google
 */

interface ArticleSchemaProps {
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  url: string;
  image?: string;
  keywords?: string[];
  estimatedReadingTime?: number;
}

export function ArticleSchema({
  title,
  description,
  publishedAt,
  author,
  url,
  image,
  keywords,
  estimatedReadingTime,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: image || "https://thibautgallien.com/og-image.jpg",
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Person",
      name: author,
      url: "https://thibautgallien.com",
      jobTitle: "Optimiseur de funnels marketing",
      sameAs: [
        "https://www.linkedin.com/in/thibaut-gallien",
        "https://twitter.com/thibautgallien",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Thibaut Gallien",
      logo: {
        "@type": "ImageObject",
        url: "https://thibautgallien.com/profile-pic.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://thibautgallien.com${url}`,
    },
    ...(keywords && keywords.length > 0 && { keywords: keywords.join(", ") }),
    ...(estimatedReadingTime && {
      timeRequired: `PT${estimatedReadingTime}M`,
    }),
    inLanguage: "fr-FR",
    articleSection: "Marketing Digital",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

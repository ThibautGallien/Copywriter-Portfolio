import { notFound } from "next/navigation";
import { allBlogPosts } from "@/.contentlayer/generated";
import { MDXContent } from "@/components/mdx/MDXComponents";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = allBlogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Article introuvable",
    };
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      url: `https://thibautgallien.com/blog/${post.slug}`,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = allBlogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Articles suivants/précédents
  const sortedPosts = allBlogPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const currentIndex = sortedPosts.findIndex((p) => p.slug === post.slug);
  const previousPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < sortedPosts.length - 1
      ? sortedPosts[currentIndex + 1]
      : null;

  return (
    <>
      {/* Schema.org pour l'article */}
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        publishedAt={post.publishedAt}
        author={post.author}
        url={post.url}
        keywords={post.keywords}
        estimatedReadingTime={post.estimatedReadingTime}
      />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: post.url },
        ]}
      />

      <div className="min-h-screen pt-24 pb-16" style={{ background: "var(--bg)" }}>
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-medium transition-colors"
              style={{ color: "var(--accent-blue)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
          </div>

          {/* Article Header */}
          <article>
            <header className="mb-12">
              {/* Catégories */}
              <div className="flex gap-2 mb-6">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="px-4 py-2 text-sm font-semibold rounded-full"
                    style={{
                      background: "rgba(59, 130, 246, 0.1)",
                      color: "var(--accent-blue)",
                      border: "1px solid rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Titre */}
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6" style={{ color: "var(--text)" }}>
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                {post.excerpt}
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-6 pb-8" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(59, 130, 246, 0.1)" }}>
                    <User className="w-5 h-5" style={{ color: "var(--accent-blue)" }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                      {post.author}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" style={{ color: "var(--text-dim)" }} />
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" style={{ color: "var(--text-dim)" }} />
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {post.estimatedReadingTime} min de lecture
                  </span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="mdx-content">
              <MDXContent code={post.body.code} />
            </div>
          </article>

          {/* Navigation entre articles */}
          {(previousPost || nextPost) && (
            <div className="mt-16 pt-12" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <h3 className="text-2xl font-bold mb-8" style={{ color: "var(--text)" }}>
                Continuer la lecture
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {previousPost && (
                  <Link
                    href={previousPost.url}
                    className="group p-6 rounded-xl transition-all"
                    style={{
                      background: "rgba(20, 20, 22, 0.85)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <div className="flex items-center gap-2 text-sm mb-3" style={{ color: "var(--text-dim)" }}>
                      <ArrowLeft className="w-4 h-4" />
                      <span>Article précédent</span>
                    </div>
                    <h4 className="font-bold transition-colors line-clamp-2" style={{ color: "var(--text)" }}>
                      {previousPost.title}
                    </h4>
                  </Link>
                )}

                {nextPost && (
                  <Link
                    href={nextPost.url}
                    className="group p-6 rounded-xl transition-all md:ml-auto"
                    style={{
                      background: "rgba(20, 20, 22, 0.85)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <div className="flex items-center gap-2 text-sm mb-3 md:justify-end" style={{ color: "var(--text-dim)" }}>
                      <span>Article suivant</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold transition-colors line-clamp-2 md:text-right" style={{ color: "var(--text)" }}>
                      {nextPost.title}
                    </h4>
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* CTA Final */}
          <div
            className="mt-16 p-10 rounded-xl text-center"
            style={{
              background: "linear-gradient(180deg, rgba(59, 130, 246, 0.06) 0%, rgba(20, 20, 22, 0.85) 100%)",
              border: "1px solid rgba(59, 130, 246, 0.15)",
            }}
          >
            <h3 className="text-3xl font-bold mb-4" style={{ color: "var(--text)" }}>
              Prêt à optimiser ton funnel ?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
              Je t&apos;aide à trouver les 2-3 endroits où tu perds de l&apos;argent et à
              les corriger. Audit gratuit disponible.
            </p>
            <Link
              href="https://calendly.com/hello-thibautgallien/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-lg"
            >
              Réserver un audit gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import { notFound } from "next/navigation";
import { allBlogPosts } from "@/.contentlayer/generated";
import { MDXContent } from "@/components/mdx/MDXComponents";
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
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
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
    <div className="min-h-screen bg-white text-neutral-900 pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
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
                  className="px-4 py-2 text-sm font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Titre */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-neutral-600 pb-8 border-b border-neutral-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    {post.author}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-neutral-400" />
                <span className="text-sm">
                  {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-neutral-400" />
                <span className="text-sm">
                  {post.estimatedReadingTime} min de lecture
                </span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-neutral max-w-none">
            <MDXContent code={post.body.code} />
          </div>
        </article>

        {/* Navigation entre articles */}
        {(previousPost || nextPost) && (
          <div className="mt-16 pt-12 border-t border-neutral-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-8">
              Continuer la lecture
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {previousPost && (
                <Link
                  href={previousPost.url}
                  className="group p-6 bg-neutral-50 hover:bg-emerald-50 border-2 border-neutral-200 hover:border-emerald-200 rounded-2xl transition-all"
                >
                  <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Article précédent</span>
                  </div>
                  <h4 className="font-bold text-neutral-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {previousPost.title}
                  </h4>
                </Link>
              )}

              {nextPost && (
                <Link
                  href={nextPost.url}
                  className="group p-6 bg-neutral-50 hover:bg-emerald-50 border-2 border-neutral-200 hover:border-emerald-200 rounded-2xl transition-all md:ml-auto"
                >
                  <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3 md:justify-end">
                    <span>Article suivant</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-neutral-900 group-hover:text-emerald-600 transition-colors line-clamp-2 md:text-right">
                    {nextPost.title}
                  </h4>
                </Link>
              )}
            </div>
          </div>
        )}

        {/* CTA Final */}
        <div className="mt-16 p-10 bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-2xl text-center">
          <h3 className="text-3xl font-bold text-neutral-900 mb-4">
            🎯 Envie de CTA qui transforment vraiment ?
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Je t'aide à créer des pages et des emails avec des CTA qui
            convertissent. Audit gratuit pour identifier où tu perds de
            l'argent.
          </p>
          <Link
            href="https://calendly.com/hello-thibautgallien/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full text-lg transition-colors"
          >
            Postuler pour un audit gratuit
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

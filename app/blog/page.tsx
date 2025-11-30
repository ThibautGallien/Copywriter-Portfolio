"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

// Custom useInView hook
function useInView(ref: any, options = {}) {
  const [isInView, setIsInView] = useState(false);
  const { once = false, margin = "0px" }: any = options;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsInView(false);
        }
      },
      { rootMargin: margin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, once, margin]);

  return isInView;
}

// Articles réels basés sur votre structure
const blogPosts = [
  {
    id: "1",
    title: "Call to Action (CTA) : Guide complet",
    slug: "call-to-action-guide-complet",
    excerpt:
      "Découvrez comment créer des CTA efficaces qui boostent vos conversions. Guide complet avec exemples concrets, erreurs à éviter et checklist pratique.",
    publishedAt: "2024-06-30",
    estimatedReadingTime: 10,
    categories: ["Copywriting", "Conversion"],
    categoryColors: ["#10b981", "#059669"],
    author: "Thibaut Gallien",
    featured: true,
  },
  {
    id: "2",
    title: "Landing Page : définition, exemples et guide complet",
    slug: "landing-page-guide-complet-conversion",
    excerpt:
      "Apprenez à créer des landing pages qui transforment vraiment vos visiteurs en prospects qualifiés. Structure, éléments clés et erreurs à éviter.",
    publishedAt: "2024-06-20",
    estimatedReadingTime: 10,
    categories: ["Copywriting", "Conversion"],
    categoryColors: ["#10b981", "#059669"],
    author: "Thibaut Gallien",
    featured: true,
  },
  {
    id: "3",
    title:
      "Email de bienvenue : le guide complet pour convertir vos nouveaux abonnés",
    slug: "techniques-emails-bienvenue-conversion",
    excerpt:
      "Découvrez comment transformer vos nouveaux abonnés en clients fidèles dès le premier email avec ces stratégies éprouvées.",
    publishedAt: "2024-06-25",
    estimatedReadingTime: 8,
    categories: ["Email Marketing", "Conversion"],
    categoryColors: ["#14b8a6", "#0d9488"],
    author: "Thibaut Gallien",
    featured: false,
  },
];

// Fade in component
function FadeIn({ children, delay = 0, className = "" }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function BlogPage() {
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  // Extraire toutes les catégories uniques
  const allCategories = [
    "Tous",
    ...Array.from(new Set(blogPosts.flatMap((post) => post.categories))),
  ];

  // Filtrage des articles
  useEffect(() => {
    let filtered = blogPosts;

    // Filtrage par catégorie
    if (selectedCategory !== "Tous") {
      filtered = filtered.filter((post) =>
        post.categories.includes(selectedCategory)
      );
    }

    // Filtrage par recherche
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.categories.some((cat) =>
            cat.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  // Composant Card cliquable
  const ClickableArticleCard = ({
    post,
    featured = false,
  }: {
    post: any;
    featured?: boolean;
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Link href={`/blog/${post.slug}`} className="block h-full">
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="h-full"
          >
            <Card
              className={`overflow-hidden group transition-all duration-300 h-full cursor-pointer border-2 ${
                featured
                  ? "bg-gradient-to-br from-emerald-50 to-white border-emerald-200 hover:border-emerald-400 hover:shadow-xl"
                  : "bg-white border-neutral-200 hover:border-emerald-200 hover:shadow-lg"
              }`}
            >
              <CardContent
                className={featured ? "p-8" : "p-6 flex flex-col h-full"}
              >
                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("fr-FR")}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{post.estimatedReadingTime} min</span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`font-bold leading-tight mb-4 group-hover:text-emerald-600 transition-colors ${
                    featured
                      ? "text-3xl text-neutral-900"
                      : "text-xl text-neutral-900 flex-grow"
                  }`}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  className={`text-neutral-600 leading-relaxed mb-6 ${
                    featured ? "text-base" : "text-sm flex-grow"
                  }`}
                >
                  {post.excerpt}
                </p>

                {/* Categories and CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2 flex-wrap">
                    {post.categories.map((category: string, idx: number) => (
                      <span
                        key={category}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-emerald-600 font-semibold text-sm group-hover:text-emerald-700 transition-colors ml-4">
                    Lire
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Author */}
                {!featured && (
                  <div className="flex items-center gap-2 mt-5 pt-5 border-t border-neutral-200">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <User className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-sm text-neutral-600 font-medium">
                      {post.author}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </Link>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6 cursor-default"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-emerald-500 rounded-full"
              />
              <span className="text-sm font-semibold text-emerald-700">
                Blog
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 mb-6 leading-tight">
              Conseils{" "}
              <span className="relative inline-block">
                <span className="text-emerald-600">Copywriting</span>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 w-full h-3 text-emerald-200"
                  viewBox="0 0 200 10"
                  fill="none"
                >
                  <motion.path
                    d="M0 5 Q50 0 100 5 T200 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-10">
              Techniques et stratégies pour transformer vos visiteurs en
              clients.
              <br />
              <span className="font-semibold text-neutral-900">
                Actionnable. Pas de blabla.
              </span>
            </p>

            {/* Filtres et recherche */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              {/* Barre de recherche */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Rechercher des articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 bg-neutral-50 border-neutral-200 focus:border-emerald-500 focus:ring-emerald-500 text-neutral-900 placeholder-neutral-400 rounded-xl"
                />
              </div>

              {/* Filtres par catégorie */}
              <div className="flex gap-2 flex-wrap justify-center">
                {allCategories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-emerald-600 text-white shadow-md"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Résultats de recherche */}
        {(searchTerm || selectedCategory !== "Tous") && (
          <FadeIn delay={0.1}>
            <div className="mb-10 text-center">
              <p className="text-neutral-500 text-lg">
                <span className="font-semibold text-neutral-900">
                  {filteredPosts.length}
                </span>{" "}
                article{filteredPosts.length > 1 ? "s" : ""} trouvé
                {filteredPosts.length > 1 ? "s" : ""}
                {searchTerm && (
                  <>
                    {" "}
                    pour{" "}
                    <span className="font-semibold text-emerald-600">
                      &quot;{searchTerm}&quot;
                    </span>
                  </>
                )}
                {selectedCategory !== "Tous" && (
                  <>
                    {" "}
                    dans{" "}
                    <span className="font-semibold text-emerald-600">
                      &quot;{selectedCategory}&quot;
                    </span>
                  </>
                )}
              </p>
            </div>
          </FadeIn>
        )}

        {filteredPosts.length > 0 ? (
          <>
            {/* Articles en vedette */}
            {featuredPosts.length > 0 &&
              selectedCategory === "Tous" &&
              !searchTerm && (
                <FadeIn delay={0.2}>
                  <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="h-1 w-12 bg-emerald-500 rounded-full" />
                      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                        Articles en vedette
                      </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      {featuredPosts.map((post) => (
                        <ClickableArticleCard
                          key={post.id}
                          post={post}
                          featured={true}
                        />
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )}

            {/* Tous les articles ou articles filtrés */}
            <FadeIn delay={0.3}>
              <div>
                {selectedCategory === "Tous" &&
                  !searchTerm &&
                  featuredPosts.length > 0 && (
                    <div className="flex items-center gap-3 mb-8">
                      <div className="h-1 w-12 bg-neutral-300 rounded-full" />
                      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                        Tous les articles
                      </h2>
                    </div>
                  )}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(featuredPosts.length > 0 &&
                  selectedCategory === "Tous" &&
                  !searchTerm
                    ? regularPosts
                    : filteredPosts
                  ).map((post, index) => (
                    <ClickableArticleCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            </FadeIn>
          </>
        ) : (
          <FadeIn delay={0.2}>
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-neutral-400" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Aucun article trouvé
              </h2>
              <p className="text-neutral-500 mb-8 max-w-md mx-auto">
                Aucun article ne correspond à vos critères de recherche. Essayez
                d&apos;autres mots-clés ou réinitialisez les filtres.
              </p>
              <motion.button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Tous");
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-500 transition-colors"
              >
                Réinitialiser les filtres
              </motion.button>
            </div>
          </FadeIn>
        )}

        {/* Call to action */}
        <FadeIn delay={0.4}>
          <div className="mt-20">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 overflow-hidden">
                <CardContent className="p-10 md:p-12 relative">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-30 -z-10" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-20 -z-10" />

                  <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                      Prêt à booster tes conversions ?
                    </h2>
                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                      Découvre comment je peux t&apos;aider à transformer ton
                      funnel en machine à vendre. Audit gratuit pour identifier
                      où tu perds de l&apos;argent.
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        asChild
                        size="lg"
                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
                      >
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2"
                        >
                          Postuler pour un audit gratuit
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

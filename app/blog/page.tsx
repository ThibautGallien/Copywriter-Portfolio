"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

// Articles statiques pour le moment
const blogPosts = [
  {
    id: "1",
    title: "7 techniques pour des emails de bienvenue qui convertissent",
    slug: "techniques-emails-bienvenue-conversion",
    excerpt:
      "Découvrez comment transformer vos nouveaux abonnés en clients fidèles dès le premier email avec ces stratégies éprouvées.",
    publishedAt: "2024-06-25",
    estimatedReadingTime: 8,
    categories: ["Email Marketing", "Conversion"],
    categoryColors: ["#9B5DE5", "#3A86FF"],
    author: "Thibaut Gallien",
    featured: true,
  },
  {
    id: "2",
    title: "Landing Page : Les 5 éléments qui font vendre",
    slug: "landing-page-elements-conversion",
    excerpt:
      "Analysons les composants essentiels d'une landing page qui transforme vos visiteurs en prospects qualifiés.",
    publishedAt: "2024-06-20",
    estimatedReadingTime: 6,
    categories: ["Copywriting", "Conversion"],
    categoryColors: ["#FF6B6B", "#4ECDC4"],
    author: "Thibaut Gallien",
    featured: true,
  },
  {
    id: "3",
    title: "Séquence email : Comment nurturing vos prospects",
    slug: "sequence-email-nurturing-prospects",
    excerpt:
      "Créez des séquences automatisées qui éduquent vos prospects et les accompagnent vers l'achat naturellement.",
    publishedAt: "2024-06-15",
    estimatedReadingTime: 10,
    categories: ["Email Marketing", "Automation"],
    categoryColors: ["#9B5DE5", "#FFD93D"],
    author: "Thibaut Gallien",
    featured: false,
  },
  {
    id: "4",
    title: "Copywriting : Écrire des CTA qui poussent à l'action",
    slug: "copywriting-cta-efficaces",
    excerpt:
      "Les mots qui transforment. Apprenez à rédiger des appels à l'action irrésistibles qui génèrent plus de clics.",
    publishedAt: "2024-06-10",
    estimatedReadingTime: 5,
    categories: ["Copywriting"],
    categoryColors: ["#FF6B6B"],
    author: "Thibaut Gallien",
    featured: false,
  },
  {
    id: "5",
    title: "Psychologie de la vente : Les 3 triggers émotionnels",
    slug: "psychologie-vente-triggers-emotionnels",
    excerpt:
      "Comprenez les mécanismes psychologiques qui poussent vos prospects à acheter et intégrez-les dans vos textes.",
    publishedAt: "2024-06-05",
    estimatedReadingTime: 7,
    categories: ["Psychologie", "Copywriting"],
    categoryColors: ["#A8E6CF", "#FF6B6B"],
    author: "Thibaut Gallien",
    featured: false,
  },
  {
    id: "6",
    title: "Email Marketing : Optimiser le taux d'ouverture",
    slug: "email-marketing-taux-ouverture",
    excerpt:
      "Strategies avancées pour que vos emails soient ouverts, lus et génèrent l'engagement souhaité.",
    publishedAt: "2024-05-30",
    estimatedReadingTime: 9,
    categories: ["Email Marketing"],
    categoryColors: ["#9B5DE5"],
    author: "Thibaut Gallien",
    featured: false,
  },
];

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

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white pt-24 pb-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -left-64 w-96 h-96 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-32 -right-64 w-96 h-96 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B6B] rounded-full mix-blend-multiply filter blur-3xl opacity-3"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            Le Blog
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              Copywriting
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Conseils, techniques et stratégies pour transformer vos emails en
            machine à vendre. Découvrez les secrets du copywriting qui
            convertit.
          </p>

          {/* Filtres et recherche */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-4xl mx-auto">
            {/* Barre de recherche */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Rechercher des articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5] text-white placeholder-gray-400"
              />
            </div>

            {/* Filtres par catégorie */}
            <div className="flex gap-2 flex-wrap justify-center">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === category
                      ? "bg-[#9B5DE5] text-white"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Résultats de recherche */}
        {(searchTerm || selectedCategory !== "Tous") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 text-center"
          >
            <p className="text-gray-400">
              {filteredPosts.length} article
              {filteredPosts.length > 1 ? "s" : ""} trouvé
              {filteredPosts.length > 1 ? "s" : ""}
              {searchTerm && ` pour "${searchTerm}"`}
              {selectedCategory !== "Tous" && ` dans "${selectedCategory}"`}
            </p>
          </motion.div>
        )}

        {filteredPosts.length > 0 ? (
          <>
            {/* Articles en vedette */}
            {featuredPosts.length > 0 &&
              selectedCategory === "Tous" &&
              !searchTerm && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-16"
                >
                  <h2 className="text-2xl font-bold font-space-grotesk mb-8 text-center">
                    Articles en vedette
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {featuredPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                      >
                        <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-gray-700 overflow-hidden group hover:border-[#9B5DE5]/50 transition-all duration-300 h-full">
                          <CardContent className="p-8">
                            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.publishedAt).toLocaleDateString(
                                  "fr-FR"
                                )}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.estimatedReadingTime} min
                              </div>
                            </div>

                            <h3 className="text-2xl font-bold font-space-grotesk mb-4 group-hover:text-[#9B5DE5] transition-colors leading-tight">
                              {post.title}
                            </h3>

                            <p className="text-gray-300 leading-relaxed mb-6">
                              {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex gap-2 flex-wrap">
                                {post.categories.map((category, idx) => (
                                  <span
                                    key={category}
                                    className="px-3 py-1 text-xs rounded-full border"
                                    style={{
                                      backgroundColor: `${post.categoryColors[idx] || "#9B5DE5"}20`,
                                      borderColor: `${post.categoryColors[idx] || "#9B5DE5"}40`,
                                      color:
                                        post.categoryColors[idx] || "#9B5DE5",
                                    }}
                                  >
                                    {category}
                                  </span>
                                ))}
                              </div>

                              <Button
                                asChild
                                variant="ghost"
                                className="text-[#9B5DE5] hover:text-white hover:bg-[#9B5DE5]/20 ml-4"
                              >
                                <Link href={`/blog/${post.slug}`}>
                                  Lire l'article
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

            {/* Tous les articles ou articles filtrés */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {selectedCategory === "Tous" && !searchTerm && (
                <h2 className="text-2xl font-bold font-space-grotesk mb-8 text-center">
                  Tous les articles
                </h2>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(featuredPosts.length > 0 &&
                selectedCategory === "Tous" &&
                !searchTerm
                  ? regularPosts
                  : filteredPosts
                ).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-900/50 border-gray-800 overflow-hidden group hover:border-[#9B5DE5]/50 transition-all duration-300 h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.publishedAt).toLocaleDateString(
                              "fr-FR"
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.estimatedReadingTime} min
                          </div>
                        </div>

                        <h3 className="text-xl font-bold font-space-grotesk mb-3 group-hover:text-[#9B5DE5] transition-colors leading-tight flex-grow">
                          {post.title}
                        </h3>

                        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex gap-2 flex-wrap">
                            {post.categories
                              .slice(0, 2)
                              .map((category, idx) => (
                                <span
                                  key={category}
                                  className="px-2 py-1 text-xs rounded-full border"
                                  style={{
                                    backgroundColor: `${post.categoryColors[idx] || "#9B5DE5"}20`,
                                    borderColor: `${post.categoryColors[idx] || "#9B5DE5"}40`,
                                    color:
                                      post.categoryColors[idx] || "#9B5DE5",
                                  }}
                                >
                                  {category}
                                </span>
                              ))}
                          </div>

                          <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="text-[#9B5DE5] hover:text-white hover:bg-[#9B5DE5]/20 ml-2"
                          >
                            <Link href={`/blog/${post.slug}`}>
                              Lire
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                          </Button>
                        </div>

                        {/* Auteur */}
                        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-800">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-400">
                            {post.author}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Aucun article trouvé</h2>
            <p className="text-gray-400 mb-8">
              Aucun article ne correspond à vos critères de recherche.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Tous");
              }}
              variant="outline"
              className="border-gray-700 hover:border-[#9B5DE5] hover:text-[#9B5DE5]"
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold font-space-grotesk mb-4">
                Envie d'aller plus loin ?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Découvrez comment je peux vous aider à transformer vos emails en
                véritable machine de vente. Consultation gratuite de 30 minutes
                pour analyser votre stratégie actuelle.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
              >
                <Link href="/contact">
                  Réserver ma consultation gratuite
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

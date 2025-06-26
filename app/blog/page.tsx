"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { sanityClient, blogPostsQuery, urlFor } from "@/lib/sanity";
import type { BlogPost } from "@/types/sanity";

// Cette fonction s'exécute côté serveur à chaque build
export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await sanityClient.fetch(blogPostsQuery);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -left-64 w-96 h-96 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-32 -right-64 w-96 h-96 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Conseils, techniques et stratégies pour transformer vos emails en
            machine à vendre.
          </p>
        </motion.div>

        {/* Articles */}
        {loading ? (
          <div className="text-center py-16">
            <div className="w-8 h-8 border-2 border-[#9B5DE5] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Chargement des articles...</p>
          </div>
        ) : posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 overflow-hidden group hover:border-[#9B5DE5]/50 transition-all duration-300">
                  {post.featuredImage && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={urlFor(post.featuredImage)
                          .width(400)
                          .height(200)
                          .url()}
                        alt={post.featuredImage.alt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedAt).toLocaleDateString("fr-FR")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.estimatedReadingTime} min
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-space-grotesk mb-3 group-hover:text-[#9B5DE5] transition-colors">
                      {post.title}
                    </h3>

                    {post.excerpt && (
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {post.categories.slice(0, 2).map((category) => (
                          <span
                            key={category}
                            className="px-2 py-1 bg-[#9B5DE5]/10 text-[#9B5DE5] text-xs rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                      </div>

                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-[#9B5DE5] hover:text-white hover:bg-[#9B5DE5]/20"
                      >
                        <Link href={`/blog/${post.slug.current}`}>
                          Lire
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">
              Articles en cours de rédaction
            </h2>
            <p className="text-gray-400 mb-8">
              Les premiers articles arrivent bientôt !
            </p>
            <Button asChild>
              <Link href="/contact">
                Me contacter pour être notifié
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

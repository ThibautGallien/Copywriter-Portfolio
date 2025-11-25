/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import Link from "next/link";
import { trackNewsletterSignup } from "@/lib/analytics";

// Newsletter modal component
function NewsletterModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      if (response.ok) {
        // Track l'inscription newsletter
        trackNewsletterSignup("homepage_modal");

        toast.success("Bienvenue !", {
          description: "Vérifie ta boîte mail (et les spams) 📧",
        });
        setEmail("");
        setName("");
        onClose();
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      toast.error("Erreur lors de l'envoi", {
        description: "Réessaye ou contacte-moi directement.",
      });
    }

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-900 border border-[#9B5DE5]/30 rounded-2xl p-6 md:p-8 max-w-lg w-full relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>

          <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk mb-4">
            Reçois Mes Meilleurs Tips Marketing
          </h2>
          <p className="text-gray-300 mb-6">
            1 email par semaine. Tips actionnables. Pas de spam. Désabonne-toi
            quand tu veux.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Prénom"
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#9B5DE5] focus:outline-none"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#9B5DE5] focus:outline-none"
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
            >
              {isSubmitting ? "Envoi..." : "S'inscrire"}
            </Button>
          </form>
        </motion.div>
      </div>
    </>
  );
}

export default function HomePage() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  // Tu devras remplacer ceci par tes vrais articles du blog
  const blogPosts = [
    {
      title: "Comment J'ai Doublé Le Taux De Conversion D'Une Landing Page",
      excerpt:
        "L'histoire d'un audit qui a révélé 3 leaks majeurs et comment je les ai corrigés en 2 semaines.",
      slug: "doubler-taux-conversion",
    },
    {
      title: "Les 5 Erreurs Qui Tuent Ton Funnel (Et Comment Les Éviter)",
      excerpt:
        "Si tu perds de l'argent sur ton funnel, il y a de fortes chances que tu fasses au moins une de ces erreurs.",
      slug: "5-erreurs-funnel",
    },
    {
      title: "Pourquoi Tes Emails Ne Convertissent Pas",
      excerpt:
        "Spoiler : ce n'est pas ton taux d'ouverture le problème. C'est ce qui vient après.",
      slug: "emails-conversion",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0D0D0D]">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -left-64 w-96 h-96 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-32 -right-64 w-96 h-96 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Copy */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-black font-space-grotesk mb-6 leading-tight">
                  Je trouve où les business en ligne perdent de l'argent
                </h1>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Entrepreneur, copywriter, optimiseur de funnels. J'analyse, je
                  fixe, je track. 5 ans d'expérience, 0 bullshit.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
                  >
                    <Link href="/gratuit">
                      Postuler pour un audit gratuit
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-gray-700 hover:border-[#9B5DE5] hover:text-[#9B5DE5] transition-colors"
                  >
                    <Link href="/blog">
                      Lire le blog
                      <BookOpen className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

              {/* Right - Photo */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="w-full max-w-[450px] mx-auto aspect-square bg-gradient-to-br from-[#9B5DE5]/20 to-[#3A86FF]/20 rounded-full flex items-center justify-center border border-gray-800 relative overflow-hidden">
                  <div className="w-[90%] aspect-square bg-gradient-to-br from-[#9B5DE5] to-[#3A86FF] rounded-full flex items-center justify-center shadow-2xl">
                    <img
                      src="/profile-pic.webp"
                      alt="Moi, après le coiffeur"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION : CE QUE JE FAIS */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6">
              Comment je peux t'aider
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "📊",
                title: "Audit & Optimisation Complète",
                description:
                  "Je trouve les 2-3 endroits où tu perds de l'argent (ads, landing, emails, checkout). Je fixe. On mesure.",
                ctaText: "Voir l'offre gratuite",
                ctaLink: "/gratuit",
              },
              {
                icon: "✍️",
                title: "Copywriting Qui Convertit",
                description:
                  "Emails, pages de vente, landing pages. Du copy qui vend, pas du blabla qui endort.",
                ctaText: "Me contacter",
                ctaLink: "/contact",
              },
              {
                icon: "🎯",
                title: "Conseil Ponctuel",
                description:
                  "Tu as une question précise ? Un problème urgent ? On en parle, je te guide.",
                ctaText: "Réserver un call",
                ctaLink: "/contact",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 h-full hover:border-gray-700 transition-colors">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="font-bold text-xl text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    <Button
                      asChild
                      variant="link"
                      className="text-[#9B5DE5] hover:text-[#7C3AED] p-0 h-auto justify-start"
                    >
                      <Link href={service.ctaLink}>
                        {service.ctaText}{" "}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION : DERNIERS ARTICLES */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-12 text-center">
              Derniers articles de blog
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-gray-800 h-full hover:border-gray-700 transition-colors">
                    <CardContent className="p-6 flex flex-col h-full">
                      <h3 className="font-bold text-lg text-white mb-3 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      <Button
                        asChild
                        variant="link"
                        className="text-[#9B5DE5] hover:text-[#7C3AED] p-0 h-auto justify-start"
                      >
                        <Link href={`/blog/${post.slug}`}>
                          Lire la suite <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-700 hover:border-[#9B5DE5] hover:text-[#9B5DE5]"
              >
                <Link href="/blog">
                  Voir tous les articles
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* SECTION : POURQUOI MOI */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-12 text-center">
              Pourquoi tu devrais m'étouter
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Entrepreneur depuis 2020, ex-CM Tugan.ai, créateur de funnels
                  qui convertissent. 5 ans d'expérience en marketing digital.
                </p>
                <p>
                  J'ai réussi des trucs. J'ai foiré des trucs. J'ai appris des
                  deux.
                </p>
                <p>
                  Aujourd'hui, j'aide des business à trouver où ils perdent de
                  l'argent et à fixer ça.
                </p>
                <p className="text-[#9B5DE5] font-semibold text-lg">
                  Pas de bullshit, juste des chiffres.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "2020", label: "Année où j'ai commencé" },
                  { number: "+100", label: "Funnels analysés" },
                  { number: "5 ans", label: "D'expérience" },
                  { number: "60%", label: "Conversion sur ma meilleure LP" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gradient-to-br from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/30 text-center p-6">
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90"
              >
                <Link href="/about">
                  En savoir plus sur moi
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* SECTION : NEWSLETTER CTA */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/30 max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6">
                  Reçois mes meilleurs tips marketing
                </h2>

                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  1 email par semaine. Tips actionnables. Pas de spam.
                  Désabonne-toi quand tu veux.
                </p>

                <Button
                  onClick={() => setIsNewsletterOpen(true)}
                  size="lg"
                  className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90"
                >
                  S'inscrire à la newsletter
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>

      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />
    </div>
  );
}

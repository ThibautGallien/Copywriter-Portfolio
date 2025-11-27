/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";
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
        {/* BLOC 1 : HERO */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-space-grotesk mb-8 leading-tight">
                J'augmente le CA des business en ligne en trouvant les 2-3
                endroits où ils perdent de l'argent
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
                Analyse data → Fixes concrets → Résultats mesurables
              </p>

              <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                5 ans d'expérience. 0 bullshit. Juste des chiffres.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity text-lg px-8 py-6"
                >
                  <Link href="/services">
                    Postuler pour un audit gratuit (3 places)
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-700 hover:border-[#9B5DE5] hover:text-[#9B5DE5] transition-colors text-lg px-8 py-6"
                >
                  <a href="#solution">
                    Voir comment ça marche
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BLOC 2 : PROBLÈME */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-800/30 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-8 text-center">
                Tu as du trafic. Tu as une offre qui fonctionne. Mais ton CA
                stagne.
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                <p>
                  Quelque part entre tes ads et ta page de remerciement, tu
                  perds trop de monde. Et tu ne sais pas exactement où.
                </p>
                <p>
                  Tu sens que tu as atteint un plafond de verre. Tes taux de
                  conversion sont moyens, mais tu ne sais pas comment les
                  améliorer.
                </p>

                <p>
                  Résultat : tu balances{" "}
                  <span className="text-red-400 font-semibold">
                    500-2000€/mois en pub
                  </span>{" "}
                  pour des résultats qui ne suivent pas.
                </p>

                <p className="text-xl font-semibold text-white">
                  Tu sens qu'il y a un problème. Mais impossible de mettre le
                  doigt dessus.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* BLOC 3 : SOLUTION */}
        <section id="solution" className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-16 text-center">
              Voilà comment je fixe ça
            </h2>

            <div className="space-y-8">
              {[
                {
                  number: "1",
                  title: "J'analyse ta data",
                  description:
                    "Je passe 6-8h à décortiquer ton funnel (ads, landing, emails, checkout, page de vente, upsells, homepage, offre, avatar). Je trouve les 2-3 fuites majeures.",
                },
                {
                  number: "2",
                  title: "Je fixe",
                  description:
                    "J'implémente les changements (copy, structure, automatisations). On se met d'accord puis j'exécute.",
                },
                {
                  number: "3",
                  title: "On mesure",
                  description:
                    "Tracking rigoureux pendant 60 jours. On compare avant/après tous les 15 jours. Si ça ne marche pas, je corrige.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-[#9B5DE5]/50 transition-colors">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#9B5DE5] to-[#3A86FF] flex items-center justify-center text-3xl font-bold">
                          {step.number}
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-2xl font-bold text-white mb-3">
                            {step.title}
                          </h3>
                          <p className="text-lg text-gray-300 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-xl text-[#9B5DE5] font-semibold mt-12">
              Pas de théorie. Pas d'intuition. Juste des chiffres.
            </p>
          </motion.div>
        </section>

        {/* BLOC 4 : PREUVES */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-12 text-center">
              Pourquoi tu devrais m'écouter
            </h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12 mb-12">
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed mb-8">
                <p className="text-xl font-semibold text-white">
                  Mes résultats :
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#9B5DE5] flex-shrink-0 mt-1" />
                    <span>
                      Landing page qui convertit à{" "}
                      <span className="text-white font-semibold">30%</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#9B5DE5] flex-shrink-0 mt-1" />
                    <span>
                      Emails qui ouvrent à{" "}
                      <span className="text-white font-semibold">45%</span> sur
                      liste froide (6 mois sans envoi)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#9B5DE5] flex-shrink-0 mt-1" />
                    <span>
                      Funnel séduction qui a cartonné (sans connaissance du
                      secteur au départ)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#9B5DE5] flex-shrink-0 mt-1" />
                    <span>
                      <span className="text-white font-semibold">
                        5 ans d'expérience
                      </span>
                      , 100+ funnels analysés
                    </span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-800 pt-8 space-y-4 text-lg text-gray-300">
                <p>
                  J'ai réussi des trucs. J'ai foiré des trucs. J'ai appris des
                  deux.
                </p>
                <p>
                  Aujourd'hui, j'aide des business à trouver où ils perdent de
                  l'argent et à fixer ça.{" "}
                  <span className="text-white font-semibold">
                    Pas de PowerPoint. Pas de PDF de 150 pages. Juste de
                    l'implémentation.
                  </span>
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 text-lg px-8 py-6"
              >
                <Link href="/about">
                  En savoir plus sur mon parcours
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* BLOC 5 : QUALIFICATION */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-12 text-center">
              C'est pour toi si...
            </h2>

            <Card className="bg-gradient-to-br from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/30">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-4">
                  {[
                    "Tu fais minimum 5k€/mois de CA",
                    "Tu as déjà des clients (offre validée)",
                    "Tu as du trafic mais ton CA stagne",
                    "Tu veux des résultats mesurables, pas du blabla, un pdf un peu vague, ou des réunions sans fin",
                    "Tu es prêt à implémenter mes recommandations",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle2 className="w-7 h-7 text-[#9B5DE5] flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-white">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <p className="text-gray-300 text-lg mt-8 text-center">
                  Peu importe que tu vendes du coaching, de la formation, du
                  e-commerce ou du SaaS.
                </p>

                <p className="text-white text-xl font-semibold mt-6 text-center">
                  Si tu corresponds à ces critères, lis la suite.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* BLOC 6 : OFFRE PRINCIPALE */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-[#9B5DE5] border-2">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-block bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                    3 PLACES GRATUITES
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6">
                    Audit Complet + Implémentation + Tracking
                  </h2>

                  <div className="space-y-3 text-lg text-gray-300 mb-8">
                    <p>Diagnostic en 48-72h (rapport 5-8 pages)</p>
                    <p className="text-[#9B5DE5]">↓</p>
                    <p>Call de validation 30 min (on choisit quoi fixer)</p>
                    <p className="text-[#9B5DE5]">↓</p>
                    <p>Implémentation de 3 semaines maximum (je fixe tout)</p>
                    <p className="text-[#9B5DE5]">↓</p>
                    <p>Tracking 60 jours (on mesure l'avant/après)</p>
                  </div>

                  <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
                    <p className="text-2xl font-bold text-white mb-2">
                      Valeur normale : 2000€
                    </p>
                    <p className="text-3xl font-black text-[#9B5DE5]">
                      Pour toi : 0€
                    </p>
                    <p className="text-sm text-gray-400 mt-3">
                      En échange : témoignage + case study avec résultats réels
                    </p>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 text-xl px-10 py-7 mb-6"
                  >
                    <Link href="/services">
                      Postuler maintenant
                      <ArrowRight className="w-6 h-6 ml-2" />
                    </Link>
                  </Button>

                  <p className="text-sm text-gray-400">
                    3 places seulement. Sélection sous 48h.
                  </p>
                </div>

                <div className="border-t border-gray-700 pt-8">
                  <p className="text-lg font-semibold text-white mb-3">
                    Pourquoi gratuit ?
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Je n'ai jamais vendu ce service officiellement. J'ai
                    optimisé mes propres funnels avec succès, mais je n'ai aucun
                    case study client. Je veux prouver que je peux trouver et
                    fixer les problèmes de quelqu'un d'autre. Ensuite, je vends
                    à 2000€.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mention de l'offre audit seul */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <p className="text-gray-400 mb-4">
                Ou commence par un Diagnostic Complet (sans implémentation) pour
                800€
              </p>
              <Button
                asChild
                variant="outline"
                className="border-gray-700 hover:border-[#9B5DE5] hover:text-[#9B5DE5]"
              >
                <Link href="/services">
                  En savoir plus sur l'offre Diagnostic
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* BLOC 7 : PORTES DE SORTIE - BLOG */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4 text-center">
              Pas encore prêt ?
            </h2>
            <p className="text-xl text-gray-400 mb-12 text-center">
              Explore le reste
            </p>

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

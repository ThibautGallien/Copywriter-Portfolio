/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Zap,
  Search,
  TrendingUp,
  MessageCircle,
  FileText,
  Globe,
} from "lucide-react";
import Link from "next/link";

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full mb-8">
              <Search className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">
                SEO - Référencement Naturel
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              Rends ton site visible sur
              <br />
              <span className="text-purple-600">Google</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              J'optimise ton site existant pour qu'il remonte dans les résultats
              de recherche. Du trafic organique qualifié, sans payer de pub.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CE QUE JE NE FAIS PAS */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="p-6 bg-white border border-neutral-200 rounded-xl">
                <p className="text-neutral-700 text-center">
                  <strong>Important :</strong> Je fais uniquement du SEO
                  (référencement naturel). Pas de SEA (publicité Google Ads),
                  pas de création de site web. J'optimise ton site existant pour
                  qu'il soit mieux positionné sur Google.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* LE PROBLÈME */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
                Tu te reconnais ?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Ton site est invisible sur Google",
                    description:
                      "Tu as un site, mais personne ne te trouve via la recherche. Tes concurrents apparaissent avant toi sur les mots-clés importants.",
                  },
                  {
                    title: "Tu dépends de la pub payante",
                    description:
                      "100% de ton trafic vient des ads. Le jour où tu coupes le budget, plus rien. Le SEO te donne un trafic durable et gratuit.",
                  },
                  {
                    title: "Tu ne sais pas quels mots-clés cibler",
                    description:
                      "Tu publies du contenu, mais sans stratégie de mots-clés. Résultat : des articles que personne ne recherche.",
                  },
                  {
                    title: "Des problèmes techniques freinent ton site",
                    description:
                      "Vitesse lente, erreurs d'indexation, balises manquantes. Des problèmes techniques invisibles mais qui plombent ton référencement.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-white rounded-xl border border-neutral-200"
                  >
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* LES OFFRES */}
      <section className="container mx-auto px-6 py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-4">
              Deux formules selon tes besoins
            </h2>
            <p className="text-xl text-neutral-600 text-center mb-12">
              Un coup de boost ou un accompagnement continu
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* OPTION 1 : AUDIT SEO */}
            <FadeIn delay={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="p-8 bg-white border-2 border-neutral-200 rounded-2xl hover:border-purple-300 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      Audit SEO + Plan d'action
                    </h3>
                    <p className="text-sm text-neutral-500">
                      Tu implémentes, je guide
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-neutral-900">
                      600€
                    </span>
                    <span className="text-neutral-500">TTC</span>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Paiement en une fois ou 2x sans frais
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-neutral-900">
                    Ce que tu reçois :
                  </h4>
                  {[
                    "Audit technique complet (vitesse, indexation, structure)",
                    "Analyse de tes positions actuelles",
                    "Recherche de mots-clés à fort potentiel",
                    "Analyse concurrentielle SEO",
                    "Plan d'action priorisé (quick wins + long terme)",
                    "1 appel de débriefing pour tout expliquer",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Clock className="w-4 h-4" />
                    <span>Livraison en 5-7 jours</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Target className="w-4 h-4" />
                    <span>Focus quick wins + vision long terme</span>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <p className="text-sm text-neutral-700">
                    <strong>Pour qui ?</strong> Tu as une équipe ou les compétences
                    pour implémenter. Tu veux juste un diagnostic clair et savoir
                    par où commencer.
                  </p>
                </div>

                <Link
                  href="https://calendly.com/hello-thibautgallien/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl text-center transition-colors"
                >
                  Discutons de ton projet
                </Link>
              </motion.div>
            </FadeIn>

            {/* OPTION 2 : ACCOMPAGNEMENT SEO */}
            <FadeIn delay={0.2}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative p-8 bg-gradient-to-br from-purple-50 to-white border-2 border-purple-300 rounded-2xl hover:shadow-xl transition-all"
              >
                {/* Badge recommandé */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 bg-purple-600 text-white text-sm font-bold rounded-full">
                    Le plus demandé
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-6 mt-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      Accompagnement SEO
                    </h3>
                    <p className="text-sm text-neutral-500">
                      Je m'occupe de ton référencement
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-neutral-900">
                      500€
                    </span>
                    <span className="text-neutral-500">/mois TTC</span>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Engagement minimum 3 mois
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-neutral-900">
                    Ce que tu reçois :
                  </h4>
                  {[
                    "Tout l'Audit SEO (diagnostic + plan d'action)",
                    "Implémentation des optimisations techniques",
                    "Optimisation on-page de tes pages clés",
                    "Stratégie de contenu SEO (4 contenus/mois)",
                    "Suivi des positions et du trafic organique",
                    "Rapports mensuels détaillés",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>Résultats progressifs sur 3-6 mois</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <MessageCircle className="w-4 h-4" />
                    <span>Accès direct par WhatsApp/Slack</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Globe className="w-4 h-4" />
                    <span>Suivi Search Console + Analytics</span>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <p className="text-sm text-neutral-700">
                    <strong>Pour qui ?</strong> Tu veux déléguer ton SEO et voir
                    ton trafic organique grimper mois après mois. 3 places
                    disponibles.
                  </p>
                </div>

                <Link
                  href="https://calendly.com/hello-thibautgallien/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl text-center transition-colors"
                >
                  Je veux cette offre
                </Link>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CE QUE JE FAIS CONCRÈTEMENT */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
                Ce que je fais concrètement
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "SEO Technique",
                    items: [
                      "Vitesse de chargement",
                      "Structure des URLs",
                      "Indexation et crawl",
                      "Données structurées (Schema.org)",
                      "Core Web Vitals",
                    ],
                  },
                  {
                    title: "SEO On-Page",
                    items: [
                      "Balises title et meta description",
                      "Structure des titres (H1, H2, H3)",
                      "Optimisation des images",
                      "Maillage interne",
                      "Contenu optimisé pour les mots-clés",
                    ],
                  },
                  {
                    title: "Stratégie de contenu",
                    items: [
                      "Recherche de mots-clés",
                      "Calendrier éditorial SEO",
                      "Rédaction optimisée",
                      "Cocons sémantiques",
                      "Pages piliers + articles satellites",
                    ],
                  },
                  {
                    title: "Suivi et reporting",
                    items: [
                      "Google Search Console",
                      "Google Analytics 4",
                      "Suivi des positions",
                      "Rapports mensuels",
                      "Recommandations d'ajustement",
                    ],
                  },
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-neutral-50 rounded-xl"
                  >
                    <h3 className="text-lg font-bold text-neutral-900 mb-4">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-neutral-600">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
                Questions fréquentes
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "En combien de temps je vais voir des résultats ?",
                    a: "Le SEO est un travail de moyen/long terme. Les premiers résultats techniques se voient en quelques semaines. Pour les positions sur des mots-clés, compte 3-6 mois selon la concurrence. C'est un investissement durable.",
                  },
                  {
                    q: "Tu fais aussi du SEA (Google Ads) ?",
                    a: "Non, je me concentre uniquement sur le SEO (référencement naturel). Si tu as besoin de SEA, je peux te rediriger vers un spécialiste de confiance.",
                  },
                  {
                    q: "Tu crées aussi des sites web ?",
                    a: "Non, j'optimise les sites existants. Tu dois déjà avoir un site en place. Si tu as besoin d'un site, je peux te recommander un développeur.",
                  },
                  {
                    q: "C'est quoi le ROI du SEO ?",
                    a: "Contrairement aux ads, le trafic SEO est gratuit une fois positionné. Un article bien référencé peut t'apporter du trafic pendant des années. Le coût par visite diminue avec le temps.",
                  },
                  {
                    q: "Tu travailles avec quels types de sites ?",
                    a: "Sites vitrines, e-commerce, blogs, SaaS. Tous les CMS : WordPress, Shopify, Next.js, Webflow, etc. L'essentiel c'est que tu aies déjà un site en ligne.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-6 bg-white rounded-xl"
                  >
                    <h3 className="font-bold text-lg text-neutral-900 mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="p-12 bg-white border-2 border-purple-200 rounded-2xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  Prêt à être visible sur Google ?
                </h2>
                <p className="text-xl text-neutral-600 mb-8">
                  On prend 30 minutes pour analyser ta situation SEO actuelle
                  et voir comment je peux t'aider.
                </p>

                <Link
                  href="https://calendly.com/hello-thibautgallien/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full text-lg transition-colors shadow-xl"
                >
                  Réserver l'appel gratuit
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <p className="text-sm text-neutral-500 mt-6">
                  Aucune obligation. Juste une discussion honnête sur ton projet.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

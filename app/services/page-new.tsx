/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Zap,
  FileText,
  TrendingUp,
  MessageCircle,
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              Deux façons de bosser ensemble
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Selon ce dont tu as besoin et ton budget
            </p>
          </FadeIn>
        </div>
      </section>

      {/* LES OFFRES */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* OPTION 1 : DIAGNOSTIC */}
            <FadeIn delay={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="p-8 bg-white border-2 border-neutral-200 rounded-2xl hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      Diagnostic Complet
                    </h3>
                    <p className="text-sm text-neutral-500">
                      Tu implémentes, je guide
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-neutral-900">
                      800€
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
                    "Analyse complète de ton funnel (tracking, pages, emails, ads)",
                    "Rapport détaillé avec les 2-3 vrais problèmes",
                    "Plan d'action priorisé par impact",
                    "Exemples concrets et recommandations",
                    "1 appel de suivi pour répondre aux questions",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Clock className="w-4 h-4" />
                    <span>Livraison en 48-72h</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Target className="w-4 h-4" />
                    <span>Focus sur les quick wins</span>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <p className="text-sm text-neutral-700">
                    <strong>Pour qui ?</strong> Tu as les ressources pour
                    implémenter toi-même (ou une équipe tech) et tu veux juste
                    savoir quoi corriger en priorité.
                  </p>
                </div>

                <Link
                  href="https://calendly.com/hello-thibautgallien/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-center transition-colors"
                >
                  Discutons de ton projet
                </Link>
              </motion.div>
            </FadeIn>

            {/* OPTION 2 : OPTIMISATION COMPLÈTE */}
            <FadeIn delay={0.2}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative p-8 bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-300 rounded-2xl hover:shadow-xl transition-all"
              >
                {/* Badge recommandé */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 bg-emerald-600 text-white text-sm font-bold rounded-full">
                    Le plus demandé
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-6 mt-2">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      Optimisation Complète
                    </h3>
                    <p className="text-sm text-neutral-500">
                      Je m'occupe de tout
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-neutral-900">
                      2000€
                    </span>
                    <span className="text-neutral-500">TTC</span>
                  </div>
                  <p className="text-sm text-neutral-600">
                    Paiement en 2x ou 3x sans frais
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-neutral-900">
                    Ce que tu reçois :
                  </h4>
                  {[
                    "Tout le Diagnostic Complet (analyse + rapport)",
                    "Implémentation de toutes les corrections",
                    "Setup tracking complet (GA4, Clarity, pixels)",
                    "Optimisation des emails, pages, ads",
                    "Suivi sur 60 jours avec ajustements",
                    "Rapports hebdomadaires des résultats",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Clock className="w-4 h-4" />
                    <span>Durée : 60 jours de suivi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>Optimisation continue</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <MessageCircle className="w-4 h-4" />
                    <span>Accès direct par WhatsApp/Slack</span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-6">
                  <p className="text-sm text-neutral-700">
                    <strong>Pour qui ?</strong> Tu veux déléguer complètement
                    et avoir quelqu'un qui gère tout de A à Z. 3 places
                    disponibles par mois.
                  </p>
                </div>

                <Link
                  href="https://calendly.com/hello-thibautgallien/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-center transition-colors"
                >
                  Je veux cette offre
                </Link>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PROCESSUS DÉTAILLÉ */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-16">
                Comment ça se passe concrètement ?
              </h2>

              <div className="space-y-12">
                {[
                  {
                    step: "1",
                    title: "Appel découverte (30 min)",
                    description:
                      "Tu me montres ton funnel, tes chiffres actuels, ce que tu as déjà testé. On voit si c'est pertinent de bosser ensemble.",
                  },
                  {
                    step: "2",
                    title: "Accès à tes outils",
                    description:
                      "Tu me donnes accès (lecture seule) à GA4, tes campagnes pub, Clarity, ton CRM/email. Je plonge dans les données.",
                  },
                  {
                    step: "3",
                    title: "Analyse (48-72h)",
                    description:
                      "J'analyse tout, je repère les fuites, je priorise par impact. Je prépare le rapport ou je commence à implémenter.",
                  },
                  {
                    step: "4",
                    title: "Livraison + Suivi",
                    description:
                      "Diagnostic : tu reçois le rapport + 1 appel de débriefing. Optimisation complète : j'implémente tout + suivi 60 jours.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
                Questions fréquentes
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "Combien de temps ça prend ?",
                    a: "Diagnostic : 48-72h pour le rapport. Optimisation complète : 3 semaines d'implémentation + 60 jours de suivi.",
                  },
                  {
                    q: "Quels types de business tu aides ?",
                    a: "Coaching, formation, e-commerce, affiliation, SaaS. En gros, tout ce qui est 100% en ligne. Conditions : minimum 5K€/mois de CA et 500 visiteurs/mois.",
                  },
                  {
                    q: "Qu'est-ce qui est inclus dans le diagnostic ?",
                    a: "Analyse complète : tracking (GA4, pixels), pages (landing, vente, checkout), emails (séquences, taux d'ouverture/clic), ads (ciblage, créas). Tu reçois un rapport Notion avec tout détaillé + plan d'action.",
                  },
                  {
                    q: "Et si j'ai besoin de plus après ?",
                    a: "Aucun problème. On peut upgrader du Diagnostic vers l'Optimisation complète (tu payes la différence). Ou on peut faire du suivi mensuel.",
                  },
                  {
                    q: "Tu fais des garanties de résultats ?",
                    a: "Je ne garantis pas un chiffre précis (trop de variables). Mais je garantis de trouver des problèmes concrets et de te donner un plan clair pour les corriger. Si après l'analyse je ne trouve rien à améliorer (jamais arrivé), je te rembourse.",
                  },
                  {
                    q: "Pourquoi seulement 3 places pour l'offre complète ?",
                    a: "Parce que l'Optimisation complète demande du temps et de la disponibilité. Je préfère faire du bon travail pour 3 clients que du travail bâclé pour 10.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-6 bg-neutral-50 rounded-xl"
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
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="p-12 bg-white border-2 border-blue-200 rounded-2xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  Prêt à corriger ton funnel ?
                </h2>
                <p className="text-xl text-neutral-600 mb-8">
                  On commence par un appel de 30 minutes pour voir si ça a du
                  sens de bosser ensemble.
                </p>

                <Link
                  href="https://calendly.com/hello-thibautgallien/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full text-lg transition-colors shadow-xl"
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

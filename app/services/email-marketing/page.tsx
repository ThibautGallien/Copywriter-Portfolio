/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  Zap,
  Mail,
  TrendingUp,
  MessageCircle,
  Users,
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

export default function EmailMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-8">
              <Mail className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                Email Marketing
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              Transforme ta liste email en
              <br />
              <span className="text-emerald-600">machine à revenus</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Des séquences qui convertissent, une stratégie qui fidélise,
              des emails que tes abonnés ont envie de lire.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* LE PROBLÈME */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
                Tu te reconnais ?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Ta liste dort",
                    description:
                      "Tu as des centaines (ou milliers) d'emails, mais tu ne sais pas quoi leur envoyer. Résultat : silence radio ou envois sporadiques.",
                  },
                  {
                    title: "Tes emails s'ouvrent mais ne vendent pas",
                    description:
                      "Les taux d'ouverture sont corrects, mais derrière ? Peu de clics, peu de ventes. Le problème est dans le contenu et la stratégie.",
                  },
                  {
                    title: "Pas de séquences automatisées",
                    description:
                      "Les nouveaux inscrits ne reçoivent rien (ou juste un email de bienvenue basique). Tu perds des ventes en autopilote.",
                  },
                  {
                    title: "Tu envoies au hasard",
                    description:
                      "Pas de calendrier, pas de segmentation, pas de stratégie. Chaque email est improvisé et tu ne sais pas ce qui marche.",
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
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-4">
              Deux formules selon tes besoins
            </h2>
            <p className="text-xl text-neutral-600 text-center mb-12">
              Que tu veuilles un coup de main ponctuel ou un accompagnement complet
            </p>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* OPTION 1 : SETUP */}
            <FadeIn delay={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="p-8 bg-white border-2 border-neutral-200 rounded-2xl hover:border-emerald-300 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900">
                      Setup Email
                    </h3>
                    <p className="text-sm text-neutral-500">
                      Je crée, tu envoies
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-neutral-900">
                      700€
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
                    "Audit de ta stratégie email actuelle",
                    "Création de ta welcome sequence (5-7 emails)",
                    "1 séquence de vente automatisée (5-8 emails)",
                    "Segmentation de ta liste existante",
                    "Templates réutilisables pour tes newsletters",
                    "Guide de bonnes pratiques personnalisé",
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
                    <span>Livraison en 5-7 jours</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Target className="w-4 h-4" />
                    <span>Setup clé en main</span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-6">
                  <p className="text-sm text-neutral-700">
                    <strong>Pour qui ?</strong> Tu as une liste email mais pas de
                    séquences en place. Tu veux un setup solide pour commencer à
                    convertir en autopilote.
                  </p>
                </div>

                <Link
                  href="https://calendly.com/hello-thibautgallien/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-center transition-colors"
                >
                  Discutons de ton projet
                </Link>
              </motion.div>
            </FadeIn>

            {/* OPTION 2 : GESTION COMPLÈTE */}
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
                      Gestion Complète
                    </h3>
                    <p className="text-sm text-neutral-500">
                      Je gère tout ton email marketing
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
                    "Tout le Setup Email (séquences + segmentation)",
                    "Rédaction et envoi de 4 newsletters/mois",
                    "A/B testing continu (objets, contenus, heures)",
                    "Création de nouvelles séquences selon les besoins",
                    "Rapports mensuels détaillés",
                    "Optimisation continue de la délivrabilité",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>Optimisation continue</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <MessageCircle className="w-4 h-4" />
                    <span>Accès direct par WhatsApp/Slack</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Users className="w-4 h-4" />
                    <span>3 places disponibles</span>
                  </div>
                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-6">
                  <p className="text-sm text-neutral-700">
                    <strong>Pour qui ?</strong> Tu veux déléguer complètement ton
                    email marketing et te concentrer sur le reste de ton business.
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

      {/* CE QUE JE MAÎTRISE */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
                Les outils que je maîtrise
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Plateformes",
                    items: ["Brevo (Sendinblue)", "Mailchimp", "ConvertKit", "ActiveCampaign", "Klaviyo"],
                  },
                  {
                    title: "Types de séquences",
                    items: ["Welcome series", "Séquences de vente", "Panier abandonné", "Relance inactive", "Onboarding"],
                  },
                  {
                    title: "Stratégie",
                    items: ["Segmentation avancée", "A/B testing", "Délivrabilité", "Copywriting email", "Automatisation"],
                  },
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-white rounded-xl border border-neutral-200"
                  >
                    <h3 className="text-lg font-bold text-neutral-900 mb-4">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-neutral-600">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
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
                    q: "Tu peux utiliser mon outil d'emailing actuel ?",
                    a: "Oui, je m'adapte à ton outil. Je connais bien Brevo, Mailchimp, ConvertKit, ActiveCampaign et Klaviyo. Si tu utilises autre chose, on en discute.",
                  },
                  {
                    q: "Combien d'emails dans une séquence de vente ?",
                    a: "En général entre 5 et 8 emails, répartis sur 7-14 jours. Ça dépend de ton produit, ton prix et ton audience. On calibre ensemble.",
                  },
                  {
                    q: "Tu rédiges aussi le contenu des emails ?",
                    a: "Oui, rédaction complète. Objets, corps, CTA. Je m'adapte à ton ton de voix et à ta marque. Tu valides avant envoi.",
                  },
                  {
                    q: "J'ai une petite liste, c'est pertinent ?",
                    a: "À partir de 500 abonnés, oui. En dessous, on peut mettre en place les séquences pour être prêt quand ta liste grandit, mais le ROI sera limité.",
                  },
                  {
                    q: "Tu gères aussi l'acquisition de leads ?",
                    a: "Non, je me concentre sur ce qui se passe après l'inscription. Pour l'acquisition, on peut coupler avec mon service d'analyse de données ou de SEO.",
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
              <div className="p-12 bg-white border-2 border-emerald-200 rounded-2xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  Prêt à faire bosser ta liste email ?
                </h2>
                <p className="text-xl text-neutral-600 mb-8">
                  On prend 30 minutes pour voir ta situation et définir la meilleure
                  stratégie email pour ton business.
                </p>

                <Link
                  href="https://calendly.com/hello-thibautgallien/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full text-lg transition-colors shadow-xl"
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

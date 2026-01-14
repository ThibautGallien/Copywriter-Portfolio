"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Target,
  LineChart,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const timelineEvents = [
  {
    year: "2020-2021",
    title: "Premiers pas dans l'entreprenariat",
    icon: "🚀",
    description:
      "Gestion de business d'infoproduits et copywriting freelance. Création de funnels, emails, formations. En parallèle d'études à l'Institut Paul Bocuse.",
    result:
      "J'ai appris à créer des funnels de A à Z, à vendre des produits que je ne connaissais pas en comprenant vraiment ce que les gens recherchent.",
  },
  {
    year: "2023-2024",
    title: "Community Manager chez Tugan.ai",
    icon: "🤖",
    description:
      "Gestion de communauté, création de contenu, activation d'affiliés. J'ai perfectionné mes compétences en copywriting et appris à utiliser l'IA comme outil de productivité.",
    result:
      "Produire du contenu pertinent à grande échelle. Gérer une communauté engagée. Utiliser l'IA intelligemment.",
  },
  {
    year: "2023-Aujourd'hui",
    title: "Sites d'affiliation SEO",
    icon: "💰",
    description:
      "Lancement de 2 sites d'affiliation optimisés SEO. Revenue passif qui augmente progressivement. Landing pages à 30%+ de conversion, emails à 45% d'ouverture sur liste froide.",
    result:
      "Le SEO prend du temps mais génère des revenus durables. Une landing page bien optimisée peut convertir à 30%+.",
  },
  {
    year: "2024",
    title: "Montée en compétences technique",
    icon: "💻",
    description:
      "Apprentissage du développement web pour implémenter mes optimisations moi-même. Focus sur l'analyse data et l'optimisation complète de funnels.",
    result:
      "Je peux maintenant analyser, identifier les problèmes ET les implémenter techniquement.",
  },
  {
    year: "2025",
    title: "Responsable e-commerce pharmacie en ligne",
    icon: "🎯",
    description:
      "Gestion complète de l'e-commerce d'une pharmacie en ligne. Analyse de données, optimisation du funnel, copywriting, tracking, implémentation technique. Application concrète de mes compétences en environnement professionnel.",
    result:
      "Expérience terrain sur un vrai business avec budget publicitaire et volume de trafic significatif.",
  },
];

const personalStats = [
  {
    icon: TrendingUp,
    stat: "60%",
    label: "Meilleur taux de conversion landing page",
    color: "text-blue-600",
  },
  {
    icon: LineChart,
    stat: "45%",
    label: "Taux d'ouverture email (liste froide)",
    color: "text-blue-600",
  },
  {
    icon: Target,
    stat: "100+",
    label: "Funnels analysés",
    color: "text-blue-600",
  },
  {
    icon: Calendar,
    stat: "5 ans",
    label: "D'expérience terrain",
    color: "text-blue-600",
  },
];

const skills = [
  {
    title: "Analyse de données",
    description:
      "Google Analytics, tracking complet du parcours client, identification des points de friction.",
    icon: "📊",
  },
  {
    title: "Copywriting",
    description:
      "Pages de vente, landing pages, séquences email. Des centaines de pages écrites et testées.",
    icon: "✍️",
  },
  {
    title: "Optimisation technique",
    description:
      "Implémentation des changements, A/B testing, intégrations. Je code mes propres solutions.",
    icon: "⚙️",
  },
  {
    title: "Vision 360°",
    description:
      "De l'acquisition au post-achat. Je comprends comment chaque élément impacte le résultat final.",
    icon: "🎯",
  },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
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

export default function AboutPage() {
  return (
    <div className="relative pt-24 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <FadeIn className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-sora mb-6 leading-[1.1] text-neutral-900">
            Thibaut Gallien
            <br />
            <span className="text-blue-600">
              Optimisation de funnels
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-8">
            J&apos;analyse ton funnel pour trouver où tu perds de l&apos;argent.
            <br />
            Puis je fixe les problèmes.
          </p>
          <motion.a
            href="/mini-audit-gratuit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition-colors"
          >
            Mini-audit gratuit (10 places/mois)
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </FadeIn>

        {/* Personal Stats */}
        <FadeIn delay={0.1} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sora text-neutral-900 mb-4">
              Quelques chiffres
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Des résultats concrets issus de mes propres projets.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {personalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="text-center p-6 rounded-2xl bg-neutral-50 border border-neutral-200 cursor-default"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                <div
                  className={`text-3xl font-bold font-sora mb-2 ${stat.color}`}
                >
                  {stat.stat}
                </div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Profile Section */}
        <FadeIn delay={0.2} className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="w-[400px] h-[400px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center border-2 border-blue-200 relative overflow-hidden mx-auto">
                  <div className="w-[350px] h-[350px] bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl relative z-10 overflow-hidden">
                    <Image
                      src="/profile-pic.webp"
                      alt="Thibaut Gallien - Optimisation de funnels"
                      width={350}
                      height={350}
                      className="w-full h-full object-cover rounded-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4 text-neutral-900">
                  Qui je suis
                </h2>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Entrepreneur depuis 2020. Ex-community manager chez Tugan.ai.
                </p>
              </div>

              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  J&apos;ai passé 5 ans à créer des funnels, des séquences email, des landing pages.
                  J&apos;ai lancé des sites d&apos;affiliation qui génèrent des revenus passifs.
                </p>
                <p>
                  Aujourd&apos;hui, j&apos;aide les entrepreneurs à identifier où leur funnel perd de l&apos;argent.
                  Ads, landing pages, emails, checkout, post-achat. J&apos;analyse tout.
                </p>
                <p>
                  Une fois les problèmes identifiés, je les fixe. Copy, design, technique, tracking.
                  Tu te concentres sur ton business, je m&apos;occupe du reste.
                </p>
                <p className="font-semibold text-neutral-900">
                  Pas de promesses irréalistes. Juste de l&apos;analyse, de l&apos;exécution, et des résultats mesurables.
                </p>
              </div>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-semibold rounded-full hover:bg-neutral-800 transition-colors"
              >
                Discutons de ton funnel
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </FadeIn>

        {/* Timeline */}
        <FadeIn delay={0.3} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4 text-neutral-900">
              Mon parcours
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Comment j&apos;en suis arrivé là.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline line */}
                {index < timelineEvents.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-blue-300 z-0" />
                )}

                <div className="flex gap-6 mb-8 relative z-10">
                  {/* Timeline node */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg"
                    >
                      <span className="text-2xl">{event.icon}</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-blue-200 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-lg font-bold text-blue-600 font-sora">
                          {event.year}
                        </span>
                        <h3 className="text-xl font-bold font-sora text-neutral-900">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-neutral-600 leading-relaxed mb-3">
                        {event.description}
                      </p>
                      <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                        <p className="text-sm text-neutral-700">
                          <span className="font-semibold text-neutral-900">Ce que j&apos;en ai retiré : </span>
                          {event.result}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* What I Do */}
        <FadeIn delay={0.4} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4 text-neutral-900">
              Ce que je fais
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Mes compétences au service de ton funnel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-blue-200 transition-colors h-full">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{skill.icon}</div>
                    <div>
                      <h3 className="font-semibold font-sora mb-2 text-neutral-900">
                        {skill.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Offre gratuite */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Link href="/mini-audit-gratuit">
              <motion.div
                whileHover={{ y: -4 }}
                className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl hover:border-blue-400 transition-colors cursor-pointer"
              >
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-3">
                    🎁 Mini-audit gratuit (10 places/mois)
                  </h3>
                  <p className="text-neutral-700 mb-2">
                    Je regarde ton funnel pendant 15 minutes et je t&apos;envoie une vidéo Loom avec :
                  </p>
                  <ul className="text-left text-neutral-600 space-y-1 max-w-lg mx-auto mb-4">
                    <li>• 2-3 problèmes évidents identifiés</li>
                    <li>• Recommandations quick wins</li>
                    <li>• Priorisation des actions</li>
                  </ul>
                  <p className="text-sm text-blue-600 font-semibold">
                    Clique ici pour postuler →
                  </p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </FadeIn>

        {/* CTA Final */}
        <FadeIn delay={0.5} className="text-center">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-neutral-50 to-blue-50 border border-neutral-200 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-sora mb-6 text-neutral-900">
              Tu fais plus de 5K€/mois ?
            </h2>
            <p className="text-neutral-600 mb-4 text-lg">
              Il y a probablement des fuites d&apos;argent dans ton funnel.
            </p>
            <p className="text-neutral-900 mb-8 text-xl font-semibold">
              Je les trouve. Je les fixe. On mesure les résultats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition-colors"
              >
                Voir mes services
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/mini-audit-gratuit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Mini-audit gratuit
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

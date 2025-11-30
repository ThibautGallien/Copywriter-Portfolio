"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Target,
  LineChart,
  Calendar,
  Check,
  X,
} from "lucide-react";
import Link from "next/link";

// --- Constantes de données : Mises à jour ---

const timelineEvents = [
  {
    year: "2019-2021",
    title: "La Gastronomie Et Mes Débuts Dans L'Entreprenariat",
    icon: "🚀",
    description:
      "Gestion de business d'infoproduits + copywriter freelance. Funnels, emails, formations... tout le bordel. En parallèle de mes études à Paul Bocuse (oui, j'aime les défis impossibles).",
    learned:
      "Créer un funnel de A à Z. Vendre un truc que je ne connais pas en comprenant ce que les gens veulent. Gérer un business avec zéro temps et zéro budget.",
    failed:
      "Boutique drop streetwear japonais (pas atteint le breakeven). Funnel 'économies d'argent' (mauvais ciblage, vendu à des rats).",
  },
  {
    year: "2023-2024",
    title: "Dans Les Coulisses De Tugan.ai",
    icon: "🤖",
    description:
      "Community Manager chez Tugan.ai. J'ai perfectionné mes compétences en copywriting, création de contenu, gestion des affiliés. Et surtout appris à écrire pour une audience spécifique et à utiliser l'IA pour travailler plus vite sans perdre en qualité.",
    learned:
      "Gérer une communauté engagée. Trouver et activer des affiliés. Produire du contenu en masse sans perdre en pertinence. Utiliser l'IA comme assistant, pas comme remplaçant.",
    failed: null,
  },
  {
    year: "2023-Aujourd'hui",
    title: "Mes Petites Machines À Cash SEO",
    icon: "💰",
    description:
      "Lancement de 2 sites d'affiliation optimisés SEO et automatisés. Quelques centaines d'euros par mois qui augmentent petit à petit. Landing pages qui convertissent à 30%, emails à 45% d'ouverture sur liste froide.",
    learned:
      "Le SEO prend du temps mais ça paye sur le long terme. Une bonne landing page peut convertir à 30%+ si tu testes et optimises. Les emails à 45% d'ouverture sur liste froide, c'est possible.",
    failed: null,
  },
  {
    year: "2024-2025",
    title: "Montée En Compétences Stratégique",
    icon: "🎯",
    description:
      "Apprentissage du dev web pour implémenter mes optimisations moi-même. Reprise focus sur mes services freelance : optimisation complète de funnels, analyse data, implémentation.",
    learned:
      "Aider des business à scaler en trouvant leurs problèmes (ads, landing, emails, offre, checkout) et en les fixant. Construire des case studies solides. Monter mes prix progressivement.",
    failed: null,
  },
];

const personalStats = [
  {
    icon: TrendingUp,
    stat: "60%",
    label: "Conversion sur ma meilleure landing page",
    color: "text-emerald-600",
  },
  {
    icon: LineChart,
    stat: "45%",
    label: "Taux d'ouverture email (liste froide, 6 mois sans envoi)",
    color: "text-emerald-600",
  },
  {
    icon: Target,
    stat: "100+",
    label: "Funnels analysés et optimisés",
    color: "text-emerald-600",
  },
  {
    icon: Calendar,
    stat: "5 ans",
    label: "D'expérience terrain (pas de théorie)",
    color: "text-emerald-600",
  },
];

const services = [
  {
    title: "📊 Diagnostic Complet",
    description:
      "J'analyse toutes les étapes de ton funnel (ads, landing, emails, page de vente, checkout, post-achat). Je trouve les 2-3 plus gros problèmes. Je te dis combien ils te coûtent par mois.",
    icon: "🔎",
  },
  {
    title: "⚙️ Implémentation & Fix",
    description:
      "Je fixe ce qu'on a identifié ensemble. Copy, design, automatisations, paramétrage ads, structure de page. Tu valides, j'exécute.",
    icon: "🛠️",
  },
  {
    title: "📈 Tracking & Optimisation",
    description:
      "On mesure les résultats pendant 60 jours. Si un fix ne fonctionne pas, je le modifie. Pas de frais supplémentaires. L'objectif c'est que ça marche.",
    icon: "🚀",
  },
  {
    title: "✍️ Copywriting (Email, Pages De Vente, Landing)",
    description:
      "Si ton problème c'est le copy, je gère. J'ai écrit des centaines d'emails et de pages. Je sais ce qui marche.",
    icon: "🖋️",
  },
];

const beliefs = [
  {
    title: "🎯 L'Expérience Terrain, Ça Compte",
    description:
      "5 ans à créer des funnels, gérer des audiences, écrire des emails qui convertissent, lancer des sites d'affiliation, paramétrer des ads. Pas de théorie, que du concret testé et approuvé.",
    icon: "✅",
  },
  {
    title: "💎 Transparence Totale",
    description:
      "Je te dis ce que je trouve. Même si c'est ton offre qui est pourrie, pas juste ton funnel. L'honnêteté, c'est rare, alors autant en profiter.",
    icon: "💬",
  },
  {
    title: "🚀 Obsession Du Résultat",
    description:
      "Si ça ne performe pas, on itère jusqu'à ce que ça marche. Tes résultats sont ma fierté. Et accessoirement, mes futurs case studies.",
    icon: "🏆",
  },
  {
    title: "🔄 Polyvalence Assumée",
    description:
      "Copywriting, analyse data, technique, SEO, ads, design... Mon parcours atypique me donne une vision 360° de ta problématique. Je suis polyvalent. C'est ma force.",
    icon: "♻️",
  },
  {
    title: "🤖 L'IA Comme Assistant, Pas Comme Remplaçant",
    description:
      "J'utilise l'IA pour analyser plus vite, trier les données, brainstormer des solutions. Mais c'est moi qui valide ce qui cloche vraiment. L'IA me fait gagner du temps. Elle ne remplace pas mon analyse.",
    icon: "🧠",
  },
];

const quirkyFacts = [
  "J'ai fait mes premiers € en vendant une formation sur la séduction. Je n'y connaissais rien. Ça a cartonné quand même.",
  "Je suis un grand fan de Godzilla et de Gundam (oui, j'aime les gros monstres et les gros robots). Si tu veux qu'on parle de ça pendant un call, je suis partant.",
  "Ma meilleure landing page avait 60% de taux de conversion. Franchement, c'est pas mal. C'est pour un site d'affiliation qui tourne encore aujourd'hui.",
  "J'ai appris le code pour créer des SaaS. 6 commencés, 0 terminé. Mais au moins je peux implémenter mes optimisations moi-même.",
  "J'ai commencé le japonais en autodidacte à 12 ans pour impressionner une fille. J'ai pas réussi. Mais au moins je sais où m'expatrier.",
  "J'aime très fort ma femme (non, ce n'est pas écrit sous la contrainte). Elle supporte mes idées et mes horaires de fou. C'est une sainte.",
];

// Composant FadeIn réutilisable
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

// Composant pour l'affichage des learnings/échecs
const LearningBlock = ({
  icon: Icon,
  title,
  content,
  colorClass,
  bgClass,
  borderClass,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
}) => (
  <div
    className={`flex items-start gap-3 p-4 rounded-xl border ${borderClass} ${bgClass} mt-4`}
  >
    <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${colorClass}`} />
    <p className="text-sm leading-relaxed">
      <span className="font-semibold text-neutral-900">{title} : </span>
      <span className="text-neutral-600">{content}</span>
    </p>
  </div>
);

export default function ImprovedAboutPage() {
  return (
    <div className="relative pt-24 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <FadeIn className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-sora mb-6 leading-[1.1] text-neutral-900">
            5 ans à créer des funnels,
            <br />
            <span className="text-emerald-600">
              foirer, réussir, et recommencer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Maintenant je trouve où TU perds de l'argent.
          </p>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
            Entrepreneur depuis 2020, ex-CM Tugan.ai, créateur de funnels qui
            convertissent.
          </p>
          <motion.a
            href="/gratuit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-500 transition-colors"
          >
            Je veux corriger ma fuite de cash !
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </FadeIn>

        {/* Personal Stats */}
        <FadeIn delay={0.1} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sora text-neutral-900 mb-2">
              Les Chiffres{" "}
              <span className="text-emerald-600">
                (Parce Que Tout Le Monde Aime Les Chiffres)
              </span>
            </h2>
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
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
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
                <div className="w-[400px] h-[400px] bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-full flex items-center justify-center border-2 border-emerald-200 relative overflow-hidden mx-auto">
                  <div className="w-[350px] h-[350px] bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl relative z-10">
                    <img
                      src="/profile-pic.webp"
                      alt="Thibaut Gallien - Funnel Optimizer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute inset-0">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-1/4 left-1/4 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <span className="text-white font-bold text-xs">📧</span>
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-emerald-400 rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                      className="absolute top-1/3 right-1/6 w-5 h-5 bg-emerald-300 rounded-full"
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
                  📊 Salut ! Moi c&apos;est{" "}
                  <span className="text-emerald-600">Thibaut</span>
                </h2>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Le mec qui trouve les trous dans ton business et qui les
                  colmate
                </p>
              </div>

              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Entrepreneur depuis 2020, ex-community manager chez Tugan.ai,
                  créateur de funnels qui convertissent.
                </p>
                <p>
                  Avec 5 ans d&apos;expérience en marketing digital, j&apos;ai
                  une obsession : trouver où tu perds de l&apos;argent entre le
                  clic et le paiement, et fixer ça.
                </p>
                <p>
                  Mon truc ? Analyser la data comme un malade, repérer les 2-3
                  endroits où ton funnel fuit, et implémenter les fixes qui
                  changent vraiment tes résultats.
                </p>
                <p className="font-bold text-neutral-900">
                  Pas de bullshit. Pas de promesses de 10K€ en 30 jours. Juste
                  de l&apos;analyse, de l&apos;exécution, et des chiffres qui
                  prouvent que ça marche.
                </p>
              </div>

              <motion.a
                href="/gratuit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-semibold rounded-full hover:bg-neutral-800 transition-colors"
              >
                Discutons de ton business
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </FadeIn>

        {/* Timeline */}
        <FadeIn delay={0.3} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4 text-neutral-900">
              Mon Parcours
              <span className="text-emerald-600"> (Version Non-Romancée)</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Spoiler alert : c&apos;est parti dans tous les sens, mais au final
              ça donne un profil plutôt sympa.
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
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-emerald-500 to-emerald-300 z-0" />
                )}

                <div className="flex gap-6 mb-8 relative z-10">
                  {/* Timeline node */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg"
                    >
                      <span className="text-2xl">{event.icon}</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-emerald-200 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-lg font-bold text-emerald-600 font-sora">
                          {event.year}
                        </span>
                        <h3 className="text-xl font-bold font-sora text-neutral-900">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-neutral-600 leading-relaxed text-base mb-4">
                        {event.description}
                      </p>

                      {/* Bloc Learned */}
                      {event.learned && (
                        <LearningBlock
                          icon={Check}
                          title="Ce que j'ai appris"
                          content={event.learned}
                          colorClass="text-emerald-600"
                          bgClass="bg-emerald-50"
                          borderClass="border-emerald-200"
                        />
                      )}

                      {/* Bloc Failed */}
                      {event.failed && (
                        <LearningBlock
                          icon={X}
                          title="Ce que j'ai foiré"
                          content={event.failed}
                          colorClass="text-red-600"
                          bgClass="bg-red-50"
                          borderClass="border-red-200"
                        />
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* What I Actually Do */}
        <FadeIn delay={0.4} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4 text-neutral-900">
              Concrètement,
              <span className="text-emerald-600"> Je Fais Quoi ?</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
              Je trouve où tu perds de l&apos;argent dans ton funnel. Et je
              fixe.
            </p>

            {/* Bannière d'offre gratuite */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="my-8 max-w-3xl mx-auto"
            >
              <Link href="/gratuit">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl hover:border-red-300 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-red-600 leading-tight">
                      🔥 OFFRE LANCEMENT : 3 PLACES GRATUITES !
                    </h3>
                  </div>
                  <p className="text-red-700 font-semibold">
                    Pour les{" "}
                    <strong>
                      3 premiers, Diagnostic + Implémentation GRATUITE
                    </strong>{" "}
                    en échange d&apos;un Case Study.
                  </p>
                  <p className="text-sm text-red-600 mt-2">
                    Clique ici pour postuler et valider ton éligibilité.
                  </p>
                </motion.div>
              </Link>
            </motion.div>

            <p className="text-neutral-600 max-w-2xl mx-auto font-semibold">
              Je m&apos;occupe de tout. Tu te concentres sur ce qui apporte de
              la valeur à ton business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-emerald-200 transition-colors h-full">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{service.icon}</div>
                    <div>
                      <h3 className="font-semibold font-sora mb-3 text-neutral-900">
                        {service.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Beliefs */}
        <FadeIn delay={0.5} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sora mb-4 text-neutral-900">
              Ma Philosophie
              <span className="text-emerald-600"> (Que J&apos;Assume)</span>
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Quelques trucs auxquels je crois dur comme fer. Ça te donne une
              idée de comment je bosse.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {beliefs.map((belief, index) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-emerald-200 transition-colors h-full">
                  <h3 className="font-semibold font-sora mb-3 text-neutral-900">
                    {belief.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Quirky Facts */}
        <FadeIn delay={0.6} className="mb-20">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-neutral-50 to-emerald-50 border border-neutral-200">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold font-sora mb-2 text-neutral-900">
                Anecdotes
                <span className="text-emerald-600"> Parfaitement Inutiles</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {quirkyFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-neutral-200"
                >
                  <span className="text-emerald-600 font-bold text-lg flex-shrink-0">
                    •
                  </span>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {fact}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CTA Final */}
        <FadeIn delay={0.7} className="text-center">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-sora mb-6 text-neutral-900">
              Prêt à trouver où tu perds de l'argent ?
            </h2>
            <p className="text-neutral-600 mb-4 text-lg">
              Si tu fais 5K€/mois ou plus avec du trafic mais que ton CA stagne,
              il y a forcément des trous dans ton funnel.
            </p>
            <p className="text-neutral-900 mb-8 text-xl font-bold">
              Je les trouve. Je les fixe. On mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-500 transition-colors"
              >
                Voir mes offres
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/gratuit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full border-2 border-emerald-600 hover:bg-emerald-50 transition-colors"
              >
                Postuler (3 places gratuites)
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

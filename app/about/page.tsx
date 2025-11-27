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
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    color: "text-[#06D6A0]",
  },
  {
    icon: LineChart,
    stat: "45%",
    label: "Taux d'ouverture email (liste froide, 6 mois sans envoi)",
    color: "text-[#9B5DE5]",
  },
  {
    icon: Target,
    stat: "100+",
    label: "Funnels analysés et optimisés",
    color: "text-[#3A86FF]",
  },
  {
    icon: Calendar,
    stat: "5 ans",
    label: "D'expérience terrain (pas de théorie)",
    color: "text-[#FFD400]",
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

export default function ImprovedAboutPage() {
  // Composant pour l'affichage des learnings/échecs
  const LearningBlock = ({
    icon: Icon,
    title,
    content,
    colorClass,
  }: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    content: string;
    colorClass: string;
  }) => (
    <div
      className={`flex items-start gap-2 p-3 rounded-lg border ${colorClass} bg-opacity-10 mt-3`}
    >
      <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colorClass}`} />
      <p className="text-sm font-semibold leading-relaxed">
        {title} : <span className="font-normal text-gray-300">{content}</span>
      </p>
    </div>
  );

  return (
    <div className="relative pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -left-64 w-96 h-96 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-32 -right-64 w-96 h-96 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-8 leading-tight">
            5 ans à créer des funnels,
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              foirer, réussir, et recommencer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Maintenant je trouve où TU perds de l'argent.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Entrepreneur depuis 2020, ex-CM Tugan.ai, créateur de funnels qui
            convertissent.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#FFD400] to-[#FF9900] text-black hover:opacity-90 transition-opacity font-bold"
          >
            <Link href="/gratuit">
              Je veux corriger ma fuite de cash !
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>

        {/* Personal Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-20"
        >
          <div className="text-center md:col-span-4 mb-4">
            <h2 className="text-2xl font-bold font-space-grotesk text-white">
              Les Chiffres{" "}
              <span className="text-[#FFD400]">
                (Parce Que Tout Le Monde Aime Les Chiffres)
              </span>
            </h2>
          </div>
          {personalStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center">
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div
                    className={`text-3xl font-bold font-space-grotesk mb-2 ${stat.color}`}
                  >
                    {stat.stat}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="w-[400px] h-[400px] bg-gradient-to-br from-[#9B5DE5]/20 to-[#3A86FF]/20 rounded-full flex items-center justify-center border border-gray-800 relative overflow-hidden mx-auto">
                  <div className="w-[350px] h-[350px] bg-gradient-to-br from-[#9B5DE5] to-[#3A86FF] rounded-full flex items-center justify-center shadow-2xl relative z-10">
                    <img
                      src="/profile-pic.webp"
                      alt="Thibaut Gallien - Funnel Optimizer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-[#FFD400] rounded-full animate-bounce flex items-center justify-center">
                      <span className="text-black font-bold text-xs">📧</span>
                    </div>
                    <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-[#9B5DE5] rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/6 w-4 h-4 bg-[#3A86FF]/50 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/2 left-1/3 w-3 h-3 bg-[#FFD400]/60 rounded-full animate-bounce"></div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-[#9B5DE5] rounded-full animate-pulse shadow-lg"></div>
              </div>
            </motion.div>

            {/* Right Side - Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
                  📊 Salut ! Moi c&apos;est{" "}
                  <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
                    Thibaut
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Le mec qui trouve les trous dans ton business et qui les
                  colmate
                </p>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
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
                <p className="font-bold text-white">
                  Pas de bullshit. Pas de promesses de 10K€ en 30 jours. Juste
                  de l&apos;analyse, de l&apos;exécution, et des chiffres qui
                  prouvent que ça marche.
                </p>
              </div>

              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
                >
                  <Link href="/gratuit">
                    Discutons de ton business
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
              Mon Parcours
              <span className="text-[#9B5DE5]"> (Version Non-Romancée)</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Spoiler alert : c&apos;est parti dans tous les sens, mais au final
              ça donne un profil plutôt sympa.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline line */}
                {index < timelineEvents.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-[#9B5DE5] to-[#3A86FF] z-0"></div>
                )}

                <div className="flex gap-6 mb-8 relative z-10">
                  {/* Timeline node */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] flex items-center justify-center shadow-lg">
                      <span className="text-2xl">{event.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-lg font-bold text-[#FFD400] font-space-grotesk">
                            {event.year}
                          </span>
                          <h3 className="text-xl font-bold font-space-grotesk text-white">
                            {event.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-base">
                          {event.description}
                        </p>

                        {/* Bloc Learned */}
                        {event.learned && (
                          <LearningBlock
                            icon={Check}
                            title="Ce que j'ai appris"
                            content={event.learned}
                            colorClass="text-green-400 border-green-700"
                          />
                        )}

                        {/* Bloc Failed */}
                        {event.failed && (
                          <LearningBlock
                            icon={X}
                            title="Ce que j'ai foiré"
                            content={event.failed}
                            colorClass="text-red-400 border-red-700"
                          />
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What I Actually Do */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
              Concrètement,
              <span className="text-[#FFD400]"> Je Fais Quoi ?</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Je trouve où tu perds de l&apos;argent dans ton funnel. Et je
              fixe.
            </p>

            {/* Bannière d'offre gratuite */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="my-6 max-w-2xl mx-auto shadow-xl"
            >
              <Link href="/gratuit" className="block">
                <div className="p-4 md:p-6 bg-red-900/50 border border-red-700 rounded-xl hover:bg-red-800/60 transition-colors cursor-pointer">
                  <div className="flex items-center justify-center gap-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[#FFD400] mb-0 leading-tight">
                      🔥 OFFRE LANCEMENT : 3 PLACES GRATUITES !
                    </h3>
                  </div>
                  <p className="text-red-300 font-semibold mt-2">
                    Pour les{" "}
                    <strong>
                      3 premiers, Diagnostic + Implémentation GRATUITE
                    </strong>{" "}
                    en échange d&apos;un Case Study.
                  </p>
                  <p className="text-sm text-red-300/80 mt-1">
                    Clique ici pour postuler et valider ton éligibilité.
                  </p>
                </div>
              </Link>
            </motion.div>

            <p className="text-gray-300 max-w-2xl mx-auto mt-2 font-semibold">
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
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-[#9B5DE5]/30 transition-colors duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{service.icon}</div>
                      <div>
                        <h3 className="font-semibold font-space-grotesk mb-3 text-white">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Beliefs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
              Ma Philosophie
              <span className="text-[#9B5DE5]"> (Que J&apos;Assume)</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
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
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-[#9B5DE5]/30 transition-colors duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div>
                        <h3 className="font-semibold font-space-grotesk mb-3 text-white">
                          {belief.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {belief.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quirky Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-800">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk mb-4">
                  Anecdotes
                  <span className="text-[#FFD400]"> Parfaitement Inutiles</span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {quirkyFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg"
                  >
                    <span className="text-[#FFD400] font-bold text-lg">•</span>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {fact}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/30 max-w-3xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6">
                Prêt à trouver où tu perds de l'argent ?
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Si tu fais 5K€/mois ou plus avec du trafic mais que ton CA
                stagne, il y a forcément des trous dans ton funnel.
              </p>
              <p className="text-white mb-8 text-xl font-bold">
                Je les trouve. Je les fixe. On mesure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity font-bold"
                >
                  <Link href="/services">
                    Voir mes offres
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#FFD400] text-[#FFD400] hover:bg-[#FFD400] hover:text-black font-bold"
                >
                  <Link href="/gratuit">
                    Postuler (3 places gratuites)
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

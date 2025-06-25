"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Mail, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const timelineEvents = [
  {
    year: "2019-2021",
    title: "La gastronomie et mes débuts dans l'entreprenariat",
    description:
      "Gestion de business d'infoproduits et copywriter freelance. Funnels complets, emails de vente, les formations, le design, etc... En parallèle de mes études à l'Institut Paul Bocuse parce que j'aime les défis impossibles. Finalement le COVID aura eu raison de ma santé mentale et j'ai arrêté mes études.",
    icon: "🚀",
  },
  {
    year: "2022-2023",
    title: "Dans les coulisses de Tugan.ai",
    description:
      "Community Manager chez Tugan.ai. J'ai perfectionné mes compétences en copywriting, création de contenu, gestion des affiliés. Et surtout appris à écrire pour une audience spécifique et à utiliser l'IA pour travailler plus rapidement sans perdre en qualité.",
    icon: "🤖",
  },
  {
    year: "2023",
    title: "Mes petites machines à cash SEO",
    description:
      "Lancement de 2 sites d'affiliation optimisés SEO. Ils me rapportent un peu d'argent tous les mois (j'écris un article quand j'ai envie, donc c'est rare). Quelques revenus qui augmentent petit à petit avec une newsletter par semaine et des séquences mails optimisées.",
    icon: "💰",
  },
  {
    year: "2024-2025",
    title: "Montée en compétences stratégique",
    description:
      "Apprentissage du développement web pour développer des compétences qui seront utiles plus tard pour moi et mes clients. Et reprise focus sur mes services de copywriter freelance.",
    icon: "🎯",
  },
];

const personalStats = [
  {
    icon: TrendingUp,
    stat: "2020",
    label: "Année où j'ai commencé à entreprendre",
    color: "text-[#8B4513]",
  },
  {
    icon: Users,
    stat: "+500",
    label: "Mails, page de vente, landing page analysées",
    color: "text-[#61DAFB]",
  },
  {
    icon: Mail,
    stat: "∞",
    label: "Emails écrits (j'ai arrêté de compter)",
    color: "text-[#3A86FF]",
  },
  {
    icon: Target,
    stat: "5 ans",
    label: "D'expérience en copywriting",
    color: "text-[#FFD400]",
  },
];

const beliefs = [
  {
    title: "L'expérience terrain, ça compte",
    description:
      "5 ans à créer des funnels, gérer des audiences, écrire des emails qui convertissent. Pas de théorie, que du concret testé et approuvé.",
    icon: "🎯",
  },
  {
    title: "Transparence level : cristal",
    description:
      "Je vous explique ce que je fais, pourquoi je le fais, et comment. L'honnêteté, c'est rare, alors autant en profiter.",
    icon: "💎",
  },
  {
    title: "Obsession du résultat",
    description:
      "Que ce soit le funnel d'un infoproduit ou votre newsletter, si ça ne performe pas, on itère jusqu'à ce que ça marche. Vos résultats sont ma fierté.",
    icon: "🚀",
  },
  {
    title: "Polyvalence assumée",
    description:
      "Business, copywriting, technique, SEO... Mon parcours atypique me donne une vision 360° de votre problématique. Et une adaptabilité à toute épreuve.",
    icon: "🔄",
  },
];

const quirkyFacts = [
  "J'ai fais mes premiers € en vendant une formation sur la séduction. Je n'y connais rien, mais j'avais compris ce que mes clients souhaitaient.",
  "Je suis un grand fans de Godzilla et de Gundam (oui, j'aime les gros monstres et les gros robots).",
  "Ma meilleure page de capture avait 60% de taux de conversion.",
  "J'ai appris le code pas pour devenir dev, mais pour créer des SAAS (6 commencés, 0 terminé).",
  "Je réfléchs à transformer ma newsletter en manga sur le copywriting (le grand méchant se nomme fade-sama).",
  "J'ai commencé le japonais à 12 ans pour impressioner une fille dans ma classe. J'ai pas réussi. Mais au moins je sais où m'expatrier et j'ai l'air intelligent. ",
];

const services = [
  {
    title: "Stratégie Email Complète",
    description:
      "De l'audit de votre situation actuelle à la mise en place d'un système qui tourne tout seul.",
    icon: "📊",
  },
  {
    title: "Rédaction & Séquences",
    description:
      "Emails de bienvenue, séquences de vente, newsletters... tout ce qui fait vibrer une boîte mail.",
    icon: "✍️",
  },
  {
    title: "Setup Technique",
    description:
      "Configuration des outils, automatisations, délivrabilité. Le côté tech, je gère (merci 2024).",
    icon: "⚙️",
  },
  {
    title: "Optimisation Continue",
    description:
      "Tests A/B, analyse des performances, améliorations. Parce qu'un bon email, c'est un email qui s'améliore.",
    icon: "📈",
  },
];

export default function ImprovedAboutPage() {
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
            Thibaut, le chauve qui gère
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              vos emails de A à Z
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Entrepreneur depuis 2020, ex-CM Tugan.ai, créateur de funnels qui
            convertissent. 5 ans d'expérience en copywriting.
          </p>
        </motion.div>

        {/* Personal Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-20"
        >
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
                {/* Conteneur rond - plus grand que l'image pour contenir les animations */}
                <div className="w-[400px] h-[400px] bg-gradient-to-br from-[#9B5DE5]/20 to-[#3A86FF]/20 rounded-full flex items-center justify-center border border-gray-800 relative overflow-hidden mx-auto">
                  {/* Avatar rond - plus petit que le conteneur */}
                  <div className="w-[350px] h-[350px] bg-gradient-to-br from-[#9B5DE5] to-[#3A86FF] rounded-full flex items-center justify-center shadow-2xl relative z-10">
                    <img
                      src="/profile-pic.webp"
                      alt="Thibaut Gallien - Copywriter"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  {/* Animations qui restent dans le conteneur rond */}
                  <div className="absolute inset-0">
                    {/* Floating elements repositionnés pour rester dans le cercle */}
                    <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-[#FFD400] rounded-full animate-bounce flex items-center justify-center">
                      <span className="text-black font-bold text-xs">📧</span>
                    </div>
                    <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-[#9B5DE5] rounded-full animate-pulse"></div>

                    {/* Cercles décoratifs supplémentaires */}
                    <div className="absolute top-1/3 right-1/6 w-4 h-4 bg-[#3A86FF]/50 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/2 left-1/3 w-3 h-3 bg-[#FFD400]/60 rounded-full animate-bounce"></div>
                  </div>
                </div>

                {/* Éléments flottants externes */}
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
                  Salut ! Moi c'est{" "}
                  <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
                    Thibaut
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Le copywriter qui transforme vos listes mails en machine à
                  convertir
                </p>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Entrepreneur depuis 2020, ex-community manager chez Tugan.ai,
                  créateur de funnels qui convertissent. Avec 5 ans d'expérience
                  en copywriting, j'ai une obsession : faire de vos emails votre
                  canal de vente le plus fiable.
                </p>

                <p>
                  Mon truc ? Combiner l'efficacité du copywriting avec un style
                  narratif qui marque les esprits. Résultat : vos prospects
                  attendent vos emails comme le prochain épisode de leur série
                  préférée.
                </p>
              </div>

              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
                >
                  <Link href="https://calendly.com/hello-thibautgallien/30min">
                    Prendre un café virtuel
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
              Mon parcours
              <span className="text-[#9B5DE5]"> (version non-romancée)</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Spoiler alert : c'est parti dans tous les sens, mais au final ça
              donne un profil plutôt sympa.
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
                  <div className="absolute left-8 top-16 w-0.5 h-20 bg-gradient-to-b from-[#9B5DE5] to-[#3A86FF] z-0"></div>
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
                        <p className="text-gray-300 leading-relaxed">
                          {event.description}
                        </p>
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
              <span className="text-[#FFD400]"> je fais quoi ?</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Je m'occupe de transformer votre liste mail en canal de ventes le
              plus fiable.
            </p>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Je m'occupe de tout, vous pouvez vous concentrer sur ce qui
              apporte de la valeur à votre business.
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
              Ma philosophie
              <span className="text-[#9B5DE5]"> (que j'assume)</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Quelques trucs auxquels je crois dur comme fer. Ça vous donne une
              idée de comment je bosse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
                      <div className="text-3xl">{belief.icon}</div>
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
                  <span className="text-[#FFD400]"> parfaitement inutiles</span>
                </h2>
                <p className="text-gray-300">
                  Parce que l'humour, c'est important. Et que j'assume mes
                  bizarreries.
                </p>
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

        {/* Honest CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border border-[#9B5DE5]/30 max-w-3xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6">
                On prend un café virtuel ?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                On analyse ce que vous avez en place (ou pas encore) côté email
                marketing, je vous partage des pistes concrètes pour améliorer
                vos résultats, et si ça fait sens pour vous, on enchaîne. Sinon,
                vous repartez avec des conseils actionnables. Dans tous les cas,
                vous y gagnez.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity px-4 md:px-8 text-sm md:text-lg w-full sm:w-auto"
              >
                <Link href="https://calendly.com/hello-thibautgallien/30min">
                  <span className="hidden sm:inline">
                    Je réserve mon appel stratégique
                  </span>
                  <span className="sm:hidden">Réserver un appel</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </Link>
              </Button>
              <p className="text-sm text-gray-400 mt-4">
                PS : Je ne force jamais la vente. Si je peux vous aider, je vous
                le dirai. Sinon, je vous orienterai vers une meilleure solution.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

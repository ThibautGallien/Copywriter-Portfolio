"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Mail,
  Clock,
  Shield,
  Calendar,
  Users,
  Settings,
  X,
  Search,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";

// Section 1: Hero + Problème spécifique
const HeroProblemeSection = () => (
  <section className="min-h-screen bg-[#0D0D0D] text-white relative overflow-hidden flex items-center pt-20">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-32 -left-64 w-96 h-96 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-32 -right-64 w-96 h-96 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Pain Point Principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-black font-space-grotesk mb-6 leading-tight">
            Vos emails ne convertissent pas ?
            <br />
            <span className="text-red-400">Normal.</span>
          </h1>
        </motion.div>

        {/* Statistiques du problème */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <Card className="bg-red-900/20 border-red-500/30">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">87%</div>
              <div className="text-sm text-gray-300">
                des entrepreneurs n'exploitent pas le potentiel de leur liste
                email
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-900/20 border-red-500/30">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">2,3%</div>
              <div className="text-sm text-gray-300">
                de taux de clic moyen (alors que 8%+ est atteignable)
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-900/20 border-red-500/30">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">
                0 - 100€
              </div>
              <div className="text-sm text-gray-300">
                générés par email chez 70% des entrepreneurs
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Les vrais problèmes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-left max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Voici pourquoi vos emails{" "}
            <span className="text-red-400">ne rapportent presque rien</span> :
          </h2>

          <div className="space-y-4">
            {[
              'Vous envoyez des emails "newsletter" généralistes qui ne vendent rien',
              "Vos séquences automation n'existent pas (abandon panier, bienvenue, relance)",
              "Vos emails ressemblent à tous les autres : aucune personnalité, aucun angle",
              "Vous n'avez aucune stratégie : vous envoyez quand ça vous passe par la tête",
              "Vous ne trackez rien : impossible de savoir ce qui fonctionne",
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800"
              >
                <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">{problem}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transition vers solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-2xl p-8 border border-[#9B5DE5]/30">
            <h3 className="text-2xl font-bold mb-4">
              Résultat : votre liste email dort.
              <br />
              <span className="text-[#FFD400]">
                C'est de l'argent qui s'évapore chaque jour.
              </span>
            </h3>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
            >
              <Link href="#solution">
                Découvrir ma solution
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Section 2: Solution détaillée
const SolutionDetaillee = () => (
  <section
    id="solution"
    className="py-24 bg-gradient-to-b from-[#0D0D0D] to-gray-900/20 relative"
  >
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
          Je transforme votre liste en
          <br />
          <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
            machine à revenus automatisée
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Newsletter hebdomadaire + séquences automation qui convertissent vos
          abonnés en clients fidèles
        </p>
      </motion.div>

      {/* Les 2 piliers */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-[#9B5DE5]/10 to-[#7C3AED]/10 border-[#9B5DE5]/30 h-full">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-[#9B5DE5] to-[#7C3AED] rounded-2xl flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-space-grotesk">
                Newsletter Hebdomadaire
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Chaque semaine, un email que vos abonnés attendent, lisent, et
                qui les prépare à acheter.
              </p>
              <ul className="space-y-3">
                {[
                  "Contenu à valeur ajoutée (pas de blabla)",
                  "Ton aligné avec votre marque",
                  "Calls-to-action subtils mais efficaces",
                  "Tracking précis des performances",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#9B5DE5] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-[#3A86FF]/10 to-[#0EA5E9]/10 border-[#3A86FF]/30 h-full">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-[#3A86FF] to-[#0EA5E9] rounded-2xl flex items-center justify-center mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-space-grotesk">
                Séquences Automation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Des emails automatisés qui travaillent 24h/24 pour convertir et
                fidéliser.
              </p>
              <ul className="space-y-3">
                {[
                  "Séquence bienvenue (transformation prospect → client)",
                  "Abandon panier (récupération ventes perdues)",
                  "Relance clients inactifs (réactivation)",
                  "Post-achat (fidélisation + upsell)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#3A86FF] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Résultats attendus */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Card className="bg-gradient-to-r from-[#FFD400]/10 to-[#F59E0B]/10 border-[#FFD400]/30 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6">
              Résultats typiques après 60 jours :
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFD400] mb-2">
                  +127%
                </div>
                <div className="text-sm text-gray-300">
                  Taux d'ouverture moyen
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFD400] mb-2">
                  +340%
                </div>
                <div className="text-sm text-gray-300">Taux de clic</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFD400] mb-2">
                  +280%
                </div>
                <div className="text-sm text-gray-300">CA généré par email</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

// Section 3: Livrables concrets
const LivrablesConcrets = () => {
  const livrables = [
    {
      categorie: "Audit & Stratégie",
      items: [
        "Audit complet de votre stratégie email actuelle",
        "Analyse de votre audience et segments",
        "Stratégie de contenu personnalisée",
        "Calendrier éditorial sur 3 mois",
      ],
    },
    {
      categorie: "Setup Technique",
      items: [
        "Configuration complète dans votre outil email",
        "Création/optimisation des formulaires de capture",
        "Mise en place du tracking et analytics",
        "Tests de délivrabilité et optimisation",
      ],
    },
    {
      categorie: "Contenu & Copywriting",
      items: [
        "Rédaction de 4-6 séquences automation complètes",
        "Newsletter hebdomadaire (rédaction + envoi)",
        "Templates d'emails réutilisables",
        "Guide de ton et style pour votre équipe",
      ],
    },
    {
      categorie: "Optimisation Continue",
      items: [
        "Tests A/B réguliers sur objets et contenus",
        "Rapport mensuel détaillé + recommandations",
        "Optimisation basée sur les performances",
        "Support et conseils stratégiques illimités",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#0D0D0D] relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
            Ce que vous obtenez
            <span className="text-[#FFD400]"> concrètement</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un système email complet, clé en main, qui génère des revenus dès
            les premières semaines
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {livrables.map((section, index) => (
            <motion.div
              key={section.categorie}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-space-grotesk text-[#9B5DE5]">
                    {section.categorie}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 4: Tarification révolutionnaire
const TarificationSection = () => (
  <section className="py-24 bg-gradient-to-b from-gray-900/20 to-[#0D0D0D] relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
          Je ne gagne que si
          <span className="text-[#06D6A0]"> vous gagnez</span>
        </h2>
      </motion.div>

      {/* Modèle de tarification */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-16"
      >
        <Card className="bg-gradient-to-r from-[#06D6A0]/10 to-[#059669]/10 border-[#06D6A0]/30">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                Mon modèle :{" "}
                <span className="text-[#06D6A0]">
                  30% du CA supplémentaire généré
                </span>
              </h3>
              <p className="text-lg text-gray-300">
                Vous ne payez que sur les résultats. Pas de résultats = pas de
                paiement.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 mb-8">
              <h4 className="font-bold text-[#FFD400] mb-4 text-center">
                Exemple concret :
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>CA email avant mon intervention :</span>
                  <span className="text-red-400 font-bold">1 000€/mois</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>CA email après optimisation :</span>
                  <span className="text-[#06D6A0] font-bold">4 000€/mois</span>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span>CA supplémentaire généré :</span>
                    <span className="text-[#FFD400] font-bold">
                      +3 000€/mois
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Ma rémunération (30%) :</span>
                    <span className="text-[#9B5DE5] font-bold">900€/mois</span>
                  </div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-bold">Vous gardez :</span>
                    <span className="text-[#06D6A0] font-bold">
                      +2 100€/mois
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-5 h-5 text-red-400 mr-2" />
                <span className="font-bold text-red-300">Votre garantie :</span>
              </div>
              <p className="text-center text-gray-300">
                Si mes emails ne génèrent{" "}
                <strong>aucun revenu supplémentaire</strong>, ma rémunération
                est de <strong className="text-red-400">0€</strong>.
                <br />
                Vous ne risquez absolument rien.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Comparaison avec concurrence */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-center mb-8">
          Comparaison avec les autres approches
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              type: "Agence traditionnelle",
              price: "3 000-8 000€/mois",
              risk: "Très élevé",
              results: "Incertains",
              color: "red",
            },
            {
              type: "Freelance classique",
              price: "1 500-3 000€/mois",
              risk: "Élevé",
              results: "Variables",
              color: "orange",
            },
            {
              type: "Mon approche",
              price: "30% du CA supplémentaire",
              risk: "Zéro",
              results: "Garantis",
              color: "green",
            },
          ].map((option, index) => (
            <Card
              key={option.type}
              className={`border-2 ${
                option.color === "green"
                  ? "bg-gradient-to-br from-[#06D6A0]/10 to-[#059669]/10 border-[#06D6A0] scale-105"
                  : option.color === "red"
                  ? "bg-gray-900/30 border-red-500/30"
                  : "bg-gray-900/30 border-orange-500/30"
              }`}
            >
              <CardContent className="p-6 text-center">
                <h4
                  className={`font-bold mb-4 ${
                    option.color === "green"
                      ? "text-[#06D6A0]"
                      : option.color === "red"
                      ? "text-red-400"
                      : "text-orange-400"
                  }`}
                >
                  {option.type}
                </h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400 text-sm">Prix :</span>
                    <div className="font-semibold text-white">
                      {option.price}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Risque :</span>
                    <div
                      className={`font-semibold ${
                        option.color === "green"
                          ? "text-[#06D6A0]"
                          : option.color === "red"
                          ? "text-red-400"
                          : "text-orange-400"
                      }`}
                    >
                      {option.risk}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Résultats :</span>
                    <div className="font-semibold text-white">
                      {option.results}
                    </div>
                  </div>
                </div>
                {option.color === "green" && (
                  <div className="mt-4 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#06D6A0] mr-2" />
                    <span className="text-sm text-[#06D6A0] font-bold">
                      Recommandé
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// Section 5: Process étape par étape - Copié depuis la home page
const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Audit stratégique gratuit",
      description:
        "J'analyse votre situation actuelle, identifie les opportunités et vous donne un plan d'action concret. Même si nous ne travaillons pas ensemble, vous repartez avec des conseils actionnables.",
      icon: Search,
      color: "from-[#9B5DE5] to-[#7C3AED]",
      duration: "30 minutes",
      result: "Plan d'action gratuit",
    },
    {
      number: "02",
      title: "Setup & Configuration",
      description:
        "Je configure vos séquences, optimise vos pages de capture et mets en place le tracking pour mesurer précisément chaque euro généré.",
      icon: Settings,
      color: "from-[#3A86FF] to-[#0EA5E9]",
      duration: "2-3 semaines",
      result: "Système opérationnel",
    },
    {
      number: "03",
      title: "Lancement & Optimisation",
      description:
        "J'envoie votre newsletter hebdomadaire, teste et améliore vos séquences pour maximiser les conversions mois après mois.",
      icon: TrendingUp,
      color: "from-[#FFD400] to-[#F59E0B]",
      duration: "En continu",
      result: "Revenus croissants",
    },
  ];

  return (
    <section className="py-24 bg-[#0D0D0D] relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3A86FF]/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#9B5DE5]/20 border border-[#9B5DE5]/30 rounded-full px-4 py-2 mb-6">
            <Target className="w-5 h-5 text-[#9B5DE5]" />
            <span className="text-[#9B5DE5] font-medium">Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-4 leading-tight">
            Comment nous travaillons
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              ensemble
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un processus simple, transparent et orienté résultats en 3 étapes
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-32 bg-gradient-to-b from-[#9B5DE5] to-[#3A86FF] z-0"></div>
              )}

              <div className="flex gap-4 sm:gap-8 mb-12 relative z-10">
                {/* Timeline node */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg relative`}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FFD400] rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-black">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                        <h3 className="text-lg sm:text-xl font-bold font-space-grotesk text-white leading-tight flex-1">
                          {step.title}
                        </h3>
                        <div className="flex flex-col sm:items-end flex-shrink-0">
                          <span
                            className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${step.color} text-white self-start sm:self-auto`}
                          >
                            {step.duration}
                          </span>
                          <span className="text-xs text-[#FFD400] mt-1 font-medium">
                            {step.result}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What you get section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border border-[#9B5DE5]/30 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold font-space-grotesk mb-4">
                  Ce que vous obtenez concrètement
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#FFD400] mb-3">
                    Livrables techniques :
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Pages de capture optimisées</li>
                    <li>• 3-5 séquences email automatisées</li>
                    <li>• Newsletter hebdomadaire</li>
                    <li>• Tracking et analytics</li>
                    <li>• Tests A/B réguliers</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-[#FFD400] mb-3">
                    Résultats attendus :
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Taux d'ouverture : 25-35%</li>
                    <li>• Taux de clic : 3-8%</li>
                    <li>• +20% de CA minimum</li>
                    <li>• Audience plus engagée</li>
                    <li>• Revenus prévisibles</li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Premiers résultats visibles sous 2-3 semaines
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

// Section 6: Social Proof & Urgence
const SocialProofSection = () => (
  <section className="py-24 bg-gradient-to-b from-gray-900/20 to-[#0D0D0D] relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
          <Users className="w-5 h-5 text-amber-500" />
          <span className="text-amber-500 font-medium">Places limitées</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
          Attention : cette offre est
          <span className="text-amber-500"> strictement limitée</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-500/30">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Pourquoi je ne prends que 3 nouveaux clients par mois ?
              </h3>
            </div>

            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Parce que{" "}
                <strong className="text-white">
                  chaque système email demande du temps, de la réflexion et une
                  exécution soignée
                </strong>
                .
              </p>

              <p>
                Plutôt que de multiplier les projets, je préfère consacrer mon
                énergie à quelques clients pour leur garantir :
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                {[
                  "Un accompagnement personnalisé de qualité",
                  "Des résultats concrets et mesurables",
                  "Une disponibilité totale pour les optimisations",
                  "Un suivi rigoureux des performances",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 text-center">
                <Clock className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                <p className="font-semibold text-amber-300 mb-2">
                  Places disponibles pour Q1 2025 : 2 restantes
                </p>
                <p className="text-sm">
                  Si les créneaux sont pleins, vous devrez attendre le mois
                  prochain.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

// Section 7: CTA Final avec urgence
const CTAFinalSection = () => (
  <section className="py-24 bg-[#0D0D0D] relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border border-[#9B5DE5]/30">
          <CardContent className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-6">
                Votre liste email dort ?
                <br />
                <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
                  C'est de l'argent qui s'évapore chaque jour.
                </span>
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                Pendant que vous hésitez, vos concurrents optimisent leurs
                emails et génèrent des revenus avec leur liste.
                <span className="text-[#FFD400] font-semibold">
                  {" "}
                  Ne les laissez pas prendre de l'avance.
                </span>
              </p>
            </div>

            {/* Proposition de valeur de l'audit */}
            <div className="bg-gray-900/50 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-[#FFD400] mr-3" />
                <h3 className="text-xl font-bold">
                  Audit stratégique gratuit (30 minutes)
                </h3>
              </div>

              <div className="text-left max-w-2xl mx-auto space-y-3 text-gray-300">
                <p className="font-semibold text-white mb-4 text-center">
                  Dans cet audit, vous découvrirez :
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Pourquoi vos emails ne convertissent pas actuellement",
                    "Le potentiel de revenus inexploité de votre liste",
                    "3 optimisations à implémenter immédiatement",
                    "Un plan d'action personnalisé et chiffré",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="mb-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#FFD400] to-[#F59E0B] text-black font-bold hover:opacity-90 transition-opacity text-lg px-12 py-6 w-full sm:w-auto shadow-2xl"
              >
                <Link href="https://calendly.com/hello-thibautgallien/30min">
                  <Calendar className="w-6 h-6 mr-2" />
                  Réserver mon audit
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Garanties */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                "30 min gratuites",
                "Conseils actionnables",
                "Aucun engagement",
                "Plan d'action concret",
              ].map((garantie, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm font-medium text-[#06D6A0]">
                    {garantie}
                  </div>
                </div>
              ))}
            </div>

            {/* Urgence finale */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
              <div className="flex items-start justify-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div className="text-center">
                  <p className="font-semibold text-red-300 mb-2">
                    Dernière chance :
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Chaque jour de retard, ce sont des ventes qui passent à
                    côté. Vos abonnés oublient qui vous êtes, vos concurrents
                    prennent de l'avance, et votre liste perd de sa valeur.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-gray-400">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Plus que 2 places disponibles ce mois-ci
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rassurance finale */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 leading-relaxed">
                <span className="font-semibold text-white">Promesse :</span>{" "}
                Même si nous ne travaillons pas ensemble, vous repartirez avec
                des conseils actionnables qui amélioreront vos résultats dès la
                semaine prochaine.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
);

// Composant principal
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] pt-16">
      <HeroProblemeSection />
      <SolutionDetaillee />
      <LivrablesConcrets />
      <TarificationSection />
      <ProcessSection />
      <SocialProofSection />
      <CTAFinalSection />
      <ExitIntentPopup delay={5000} />
    </main>
  );
}

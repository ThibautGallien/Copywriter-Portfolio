/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  X,
  Clock,
  FileText,
  Code,
  BarChart3,
  MessageSquare,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#0D0D0D]">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -left-64 w-96 h-96 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-32 -right-64 w-96 h-96 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative py-20">
        {/* HERO */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-black font-space-grotesk mb-6 leading-tight">
              Mes Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">
              Deux façons de trouver où tu perds de l'argent
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Tu choisis : diagnostic seul (tu implémentes) ou offre complète
              (je m'occupe de tout).
            </p>
          </motion.div>
        </section>

        {/* TABLEAU COMPARATIF */}
        <section className="max-w-6xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* OFFRE 1 : DIAGNOSTIC COMPLET */}
              <Card className="bg-gray-900/50 border-gray-800 hover:border-[#9B5DE5]/50 transition-colors">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      DONE WITH YOU
                    </div>
                    <h2 className="text-3xl font-bold font-space-grotesk mb-2">
                      Diagnostic Complet
                    </h2>
                    <p className="text-gray-400 mb-4">
                      Tu implémentes, je guide
                    </p>
                    <div className="text-4xl font-black text-[#9B5DE5] mb-2">
                      800€
                    </div>
                    <p className="text-sm text-gray-400">
                      Délai : 48-72h après réception des accès
                    </p>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    <h3 className="font-semibold text-white text-sm uppercase tracking-wide">
                      Ce que tu reçois
                    </h3>
                    {[
                      "Analyse complète de ton funnel (ads, landing, emails, checkout)",
                      "Rapport PDF 5-8 pages avec screenshots annotés",
                      "Vidéo Loom 10-15 min où je décortique tout à l'oral",
                      "Estimation chiffrée de combien chaque leak te coûte",
                      "Plan d'action priorisé (étape 1, 2, 3...)",
                      "Google Sheets avec les KPI à tracker",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#9B5DE5] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </div>
                    ))}

                    <div className="pt-4 border-t border-gray-800">
                      <h3 className="font-semibold text-white text-sm uppercase tracking-wide mb-3">
                        Ce que tu ne reçois pas
                      </h3>
                      {[
                        "L'implémentation (tu te débrouilles)",
                        "Le suivi post-implémentation",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 mb-2"
                        >
                          <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <div className="flex items-start gap-2 mb-2">
                        <Shield className="w-4 h-4 text-[#06D6A0] flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-400">
                          <strong className="text-white">Garantie :</strong> Si
                          je ne trouve pas au moins 2 problèmes majeurs (=
                          chacun te coûte 300€+/mois), je te rembourse
                          intégralement.
                        </p>
                      </div>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="w-full border-[#9B5DE5] text-[#9B5DE5] hover:bg-[#9B5DE5] hover:text-white"
                    >
                      <Link href="/contact">
                        Commander le Diagnostic
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>

                    <p className="text-xs text-gray-400 text-center">
                      Option d'upgrade : +1300€ pour l'implémentation après
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* OFFRE 2 : OPTIMISATION COMPLÈTE */}
              <Card className="bg-gradient-to-br from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5] border-2 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-[#FFD400] text-black px-6 py-2 rounded-full text-sm font-bold">
                    ★ RECOMMANDÉ
                  </div>
                </div>

                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <div className="inline-block bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      DONE FOR YOU
                    </div>
                    <h2 className="text-3xl font-bold font-space-grotesk mb-2">
                      Optimisation Complète
                    </h2>
                    <p className="text-gray-400 mb-4">Je m'occupe de tout</p>
                    <div className="mb-4">
                      <div className="text-4xl font-black text-[#9B5DE5] mb-2">
                        2000€
                      </div>
                      <div className="inline-block bg-[#06D6A0] text-black px-3 py-1 rounded text-sm font-bold">
                        3 PLACES GRATUITES
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      Durée : 3 semaines implémentation + 60 jours tracking
                    </p>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    <h3 className="font-semibold text-white text-sm uppercase tracking-wide">
                      Ce que tu reçois
                    </h3>
                    {[
                      "Tout ce qui est dans l'Audit Seul",
                      "+ Call de validation (30 min)",
                      "+ Implémentation complète (je fixe tout)",
                      "+ Tracking rigoureux pendant 60 jours",
                      "+ Ajustements illimités si ça ne marche pas",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#06D6A0] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </div>
                    ))}

                    <div className="pt-4 border-t border-gray-700">
                      <h3 className="font-semibold text-white text-sm uppercase tracking-wide mb-3">
                        Ce que je ne fais pas
                      </h3>
                      {[
                        "Dev complexe (intégrations custom)",
                        "Créas graphiques ultra-avancées",
                        "Refonte totale de l'offre",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 mb-2"
                        >
                          <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-[#06D6A0]/30">
                      <div className="flex items-start gap-2 mb-2">
                        <Shield className="w-4 h-4 text-[#06D6A0] flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-gray-400">
                          <strong className="text-white">Garantie :</strong> Si
                          après 60 jours, mes fixes n'ont rien amélioré, je
                          reprends tout de zéro et on continue 30 jours de plus.
                        </p>
                      </div>
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90"
                    >
                      <Link href="/gratuit">
                        Postuler pour une place gratuite
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>

                    <p className="text-xs text-gray-400 text-center">
                      3 places gratuites en échange d'un témoignage + case study
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Économie si pris en bundle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <Card className="bg-gray-900/50 border-gray-800 inline-block">
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-2">
                    <span className="text-white font-semibold">Astuce :</span>{" "}
                    Si tu prends d'abord le Diagnostic (800€) puis tu veux
                    l'implémentation après...
                  </p>
                  <p className="text-gray-400 text-sm">
                    Tu payeras{" "}
                    <span className="line-through">800€ + 1500€ = 2300€</span>
                  </p>
                  <p className="text-[#06D6A0] font-semibold text-lg mt-2">
                    En prenant l'offre complète directement : 2000€ (économie de
                    300€)
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* DÉTAILS OFFRE 1 */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-8 text-center">
              Diagnostic Complet : Pour Qui ?
            </h2>

            <Card className="bg-gray-900/50 border-gray-800 mb-8">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl text-white mb-6">
                  Idéal pour :
                </h3>
                <div className="space-y-3">
                  {[
                    "Les entrepreneurs qui ont déjà une équipe (dev, copywriter)",
                    "Ceux qui veulent garder le contrôle de l'implémentation",
                    "Ceux qui veulent tester ma méthode avant d'aller plus loin",
                    "Ceux qui ont un budget limité mais veulent des recommandations expertes",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#9B5DE5] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl text-white mb-6">
                  Ce que contient ton rapport :
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: FileText,
                      title: "Rapport PDF détaillé",
                      desc: "5-8 pages avec screenshots annotés, chiffres précis",
                    },
                    {
                      icon: MessageSquare,
                      title: "Vidéo Loom explicative",
                      desc: "10-15 min où je décortique tout à l'oral",
                    },
                    {
                      icon: BarChart3,
                      title: "Google Sheets KPI",
                      desc: "Tous les métriques à tracker pour mesurer l'impact",
                    },
                    {
                      icon: Clock,
                      title: "Plan d'action priorisé",
                      desc: "Quoi fixer en premier, deuxième, troisième...",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#9B5DE5]/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-[#9B5DE5]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90"
              >
                <Link href="/contact">
                  Commander le Diagnostic (800€)
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* DÉTAILS OFFRE 2 */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-8 text-center">
              Optimisation Complète : Comment Ça Marche ?
            </h2>

            <div className="space-y-8 mb-12">
              {[
                {
                  phase: "Phase 1",
                  title: "Diagnostic Complet",
                  duration: "48-72h",
                  icon: FileText,
                  description:
                    "Analyse complète de ton funnel + rapport détaillé",
                },
                {
                  phase: "Phase 2",
                  title: "Validation + Priorisation",
                  duration: "Call 30 min",
                  icon: MessageSquare,
                  description: "On décide ensemble ce qu'on fixe en priorité",
                },
                {
                  phase: "Phase 3",
                  title: "Implémentation",
                  duration: "3 semaines",
                  icon: Code,
                  description:
                    "Je fixe tout ce qu'on a validé (copy, structure, automatisations)",
                },
                {
                  phase: "Phase 4",
                  title: "Tracking",
                  duration: "60 jours",
                  icon: BarChart3,
                  description: "Suivi hebdomadaire + ajustements si nécessaire",
                },
              ].map((step, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="text-sm text-[#9B5DE5] font-semibold mb-1">
                              {step.phase}
                            </div>
                            <h3 className="text-xl font-bold text-white">
                              {step.title}
                            </h3>
                          </div>
                          <div className="text-sm text-gray-400 whitespace-nowrap ml-4">
                            {step.duration}
                          </div>
                        </div>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-[#06D6A0]/10 to-[#059669]/10 border-[#06D6A0]/30 mb-8">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-[#06D6A0]" />
                  Idéal pour :
                </h3>
                <div className="space-y-3">
                  {[
                    "Les solopreneurs qui n'ont pas d'équipe",
                    "Ceux qui veulent déléguer complètement",
                    "Ceux qui veulent des résultats garantis",
                    "Ceux qui n'ont pas le temps d'implémenter eux-mêmes",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#06D6A0] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90"
              >
                <Link href="/gratuit">
                  Postuler pour une place gratuite
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <p className="text-sm text-gray-400 mt-4">
                3 places gratuites (valeur 2000€) en échange d'un témoignage +
                case study
              </p>
            </div>
          </motion.div>
        </section>

        {/* POURQUOI 2 OFFRES */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-8 text-center">
              Pourquoi 2 Offres ?
            </h2>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    <span className="text-white font-semibold">
                      Parce que tout le monde n'est pas prêt pour le "Done For
                      You".
                    </span>
                  </p>
                  <p>
                    Certains entrepreneurs ont déjà une équipe et veulent juste
                    un diagnostic expert pour savoir quoi fixer.
                  </p>
                  <p>
                    D'autres n'ont pas le temps ou les compétences pour
                    implémenter et préfèrent déléguer complètement.
                  </p>
                  <p className="text-[#9B5DE5] font-semibold">
                    Les deux approches fonctionnent. C'est juste une question de
                    préférence et de situation.
                  </p>
                  <p>
                    Et si tu prends d'abord le Diagnostic et que tu te rends
                    compte que tu veux que je m'occupe de l'implémentation après
                    ? Pas de problème, tu peux upgrader pour +1300€.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* FAQ SPÉCIFIQUE AUX 2 OFFRES */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-12 text-center">
              Questions Fréquentes
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "Quelle offre choisir ?",
                  answer:
                    "Diagnostic Complet si tu as déjà une équipe ou si tu veux garder le contrôle de l'implémentation. Optimisation Complète si tu veux déléguer complètement et avoir un suivi sur 60 jours.",
                },
                {
                  question: "Puis-je upgrader après le Diagnostic ?",
                  answer:
                    "Oui. Si tu prends d'abord le Diagnostic (800€) et que tu veux ensuite l'implémentation, tu payes +1300€. Total = 2100€ (vs 2000€ si pris directement).",
                },
                {
                  question: "Comment fonctionnent les 3 places gratuites ?",
                  answer:
                    "Les 3 premières personnes sélectionnées pour l'Optimisation Complète ne paient rien (valeur 2000€). En échange, je demande un témoignage + les résultats chiffrés pour créer un case study. Après les 3 premiers, l'offre devient payante (2000€).",
                },
                {
                  question:
                    "Que se passe-t-il si j'implémente mal les recommandations du Diagnostic ?",
                  answer:
                    "C'est le risque du 'Done With You'. Tu reçois des recommandations ultra-précises, mais c'est toi qui implémentes. Si tu veux être sûr que ça soit bien fait, prends l'Optimisation Complète où je m'occupe de tout.",
                },
                {
                  question:
                    "Puis-je avoir un call de suivi après le Diagnostic ?",
                  answer:
                    "Pas inclus dans l'offre Diagnostic Complet. Mais tu peux ajouter un call de validation post-implémentation (+200€) où je vérifie que tu as bien tout appliqué.",
                },
                {
                  question: "Combien de temps pour voir des résultats ?",
                  answer:
                    "Diagnostic : tu reçois tout en 48-72h. Optimisation Complète : premiers résultats visibles après 3-4 semaines (fin de l'implémentation), résultats consolidés après 60 jours de tracking.",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-white mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA FINAL */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/30">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6">
                  Prêt à Trouver Où Tu Perds de l'Argent ?
                </h2>

                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Choisis l'offre qui te correspond et passons à l'action.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-[#9B5DE5] text-[#9B5DE5] hover:bg-[#9B5DE5] hover:text-white"
                  >
                    <Link href="/contact">
                      Diagnostic Complet (800€)
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90"
                  >
                    <Link href="/gratuit">
                      Optimisation Complète (Gratuit)
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>

                <p className="text-sm text-gray-400 mt-6">
                  Tu hésites encore ?{" "}
                  <Link
                    href="/contact"
                    className="text-[#9B5DE5] hover:underline"
                  >
                    Contacte-moi
                  </Link>{" "}
                  et on en discute.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

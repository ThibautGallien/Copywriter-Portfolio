"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  DollarSign,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const benefits = [
  {
    icon: Shield,
    title: "Zéro risque pour vous",
    description:
      "Si mon travail ne génère pas de revenus supplémentaires, vous ne payez rien",
    color: "from-[#9B5DE5] to-[#7C3AED]",
  },
  {
    icon: TrendingUp,
    title: "Alignement total",
    description: "Mon succès dépend directement de votre réussite",
    color: "from-[#3A86FF] to-[#0EA5E9]",
  },
  {
    icon: DollarSign,
    title: "Transparence complète",
    description: "Tracking précis du CA généré par chaque email envoyé",
    color: "from-[#FFD400] to-[#F59E0B]",
  },
];

const pricingComparison = [
  {
    type: "Agence classique",
    price: "3000-8000€/mois",
    risk: "Élevé",
    guarantee: "Aucune",
    results: "Incertains",
    color: "red",
  },
  {
    type: "Freelance traditionnel",
    price: "1500-3000€/mois",
    risk: "Moyen",
    guarantee: "Limitée",
    results: "Variables",
    color: "orange",
  },
  {
    type: "Mon approche",
    price: "30% du CA supplémentaire",
    risk: "Nul",
    guarantee: "100% résultats",
    results: "Garantis",
    color: "green",
  },
];

export default function UniquePropositionSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900/20 to-[#0D0D0D] relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-[#FFD400] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 leading-tight">
            Pourquoi je suis le seul à vous proposer
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              cette garantie de résultats ?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Parce que je sais que mes méthodes fonctionnent. Et je suis prêt à
            le prouver avec ma propre rémunération.
          </p>
        </motion.div>

        {/* Main Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <Card className="bg-gradient-to-r from-[#FFD400]/10 to-[#F59E0B]/10 border-[#FFD400]/30 shadow-2xl">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex items-center justify-center mb-6">
                <DollarSign className="w-12 h-12 text-[#FFD400] mr-4" />
                <h3 className="text-3xl md:text-4xl font-bold font-space-grotesk">
                  Mon modèle :
                  <span className="text-[#FFD400]">
                    {" "}
                    30% du CA supplémentaire
                  </span>
                </h3>
              </div>

              <div className="space-y-6 text-lg text-gray-300 mb-8">
                <p>
                  Vous générez actuellement{" "}
                  <strong className="text-white">X€ par mois</strong> avec votre
                  liste email.
                </p>
                <p>
                  Grâce à mon travail, vous passez à{" "}
                  <strong className="text-[#FFD400]">(X + Y)€ par mois</strong>.
                </p>
                <p>
                  Je prends <strong className="text-[#9B5DE5]">30% de Y</strong>{" "}
                  (les revenus supplémentaires).
                </p>
                <div className="bg-gray-900/50 rounded-xl p-6 text-left max-w-2xl mx-auto">
                  <h4 className="font-semibold text-[#FFD400] mb-3 text-center">
                    Exemple concret :
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Revenus email actuels :</span>
                      <span className="text-red-400">500€/mois</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revenus après optimisation :</span>
                      <span className="text-[#06D6A0]">2000€/mois</span>
                    </div>
                    <div className="border-t border-gray-700 pt-2 mt-3">
                      <div className="flex justify-between font-semibold">
                        <span>Revenus supplémentaires :</span>
                        <span className="text-[#FFD400]">+1500€/mois</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ma rémunération (30%) :</span>
                        <span className="text-[#9B5DE5]">450€/mois</span>
                      </div>
                      <div className="flex justify-between font-bold text-[#06D6A0]">
                        <span>Vous gardez :</span>
                        <span>+1050€/mois</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-center mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                  <span className="font-semibold text-red-300">
                    Important :
                  </span>
                </div>
                <p className="text-sm text-gray-300">
                  Si mes emails ne génèrent aucun revenu supplémentaire, ma
                  rémunération est de <strong>0€</strong>.
                  <br />
                  Je prends tous les risques, vous gardez tous les bénéfices.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold font-space-grotesk mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pricing Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk text-center mb-8">
            Comparaison avec les autres approches
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingComparison.map((option, index) => (
              <motion.div
                key={option.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`border-2 transition-all duration-300 ${
                    option.color === "green"
                      ? "bg-gradient-to-br from-[#06D6A0]/10 to-[#059669]/10 border-[#06D6A0] shadow-lg transform scale-105"
                      : option.color === "red"
                      ? "bg-gray-900/30 border-red-500/30"
                      : "bg-gray-900/30 border-orange-500/30"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h4
                        className={`font-bold font-space-grotesk mb-4 ${
                          option.color === "green"
                            ? "text-[#06D6A0]"
                            : option.color === "red"
                            ? "text-red-400"
                            : "text-orange-400"
                        }`}
                      >
                        {option.type}
                      </h4>

                      <div className="space-y-3 mb-6">
                        <div>
                          <span className="text-gray-400 text-sm">Prix :</span>
                          <div className="font-semibold text-white">
                            {option.price}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">
                            Risque :
                          </span>
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
                          <span className="text-gray-400 text-sm">
                            Garantie :
                          </span>
                          <div className="font-semibold text-white">
                            {option.guarantee}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-400 text-sm">
                            Résultats :
                          </span>
                          <div className="font-semibold text-white">
                            {option.results}
                          </div>
                        </div>
                      </div>

                      {option.color === "green" && (
                        <div className="flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-[#06D6A0] mr-2" />
                          <span className="text-sm text-[#06D6A0] font-semibold">
                            Recommandé
                          </span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border border-[#9B5DE5]/30 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-space-grotesk mb-4">
                Prêt à tester cette approche sans risque ?
              </h3>
              <p className="text-gray-300 mb-6">
                Commençons par un audit gratuit de votre stratégie email
                actuelle. Je vous montre exactement où sont vos opportunités de
                croissance.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#FFD400] to-[#F59E0B] text-black font-semibold hover:opacity-90 transition-opacity px-8"
              >
                <Link href="https://calendly.com/hello-thibautgallien/30min">
                  Réserver mon audit gratuit maintenant
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <p className="text-xs text-gray-400 mt-4">
                30 minutes • Gratuit • Sans engagement • Conseils actionnables
                garantis
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

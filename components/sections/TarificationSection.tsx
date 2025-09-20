"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const pricingComparison = [
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
];

export default function TarificationSection() {
  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-gray-900/20 to-[#0D0D0D] relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk mb-4 lg:mb-6">
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
          className="max-w-4xl mx-auto mb-12 lg:mb-16"
        >
          <Card className="bg-gradient-to-r from-[#06D6A0]/10 to-[#059669]/10 border-[#06D6A0]/30">
            <CardContent className="p-6 lg:p-12">
              <div className="text-center mb-6 lg:mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Mon modèle :{" "}
                  <span className="text-[#06D6A0]">
                    30% du CA supplémentaire généré
                  </span>
                </h3>
                <p className="text-base lg:text-lg text-gray-300">
                  Vous ne payez que sur les résultats. Pas de résultats = pas de
                  paiement.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-4 lg:p-6 mb-6 lg:mb-8">
                <h4 className="font-bold text-[#FFD400] mb-4 text-center">
                  Exemple concret :
                </h4>
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-sm lg:text-base">
                      CA email avant mon intervention :
                    </span>
                    <span className="text-red-400 font-bold">1 000€/mois</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-sm lg:text-base">
                      CA email après optimisation :
                    </span>
                    <span className="text-[#06D6A0] font-bold">
                      4 000€/mois
                    </span>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
                      <span className="text-sm lg:text-base">
                        CA supplémentaire généré :
                      </span>
                      <span className="text-[#FFD400] font-bold">
                        +3 000€/mois
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
                      <span className="text-sm lg:text-base">
                        Ma rémunération (30%) :
                      </span>
                      <span className="text-[#9B5DE5] font-bold">
                        900€/mois
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-base lg:text-lg">
                      <span className="font-bold">Vous gardez :</span>
                      <span className="text-[#06D6A0] font-bold">
                        +2 100€/mois
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 lg:p-6">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-red-400 mr-2" />
                  <span className="font-bold text-red-300">
                    Votre garantie :
                  </span>
                </div>
                <p className="text-center text-sm lg:text-base text-gray-300">
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
          <h3 className="text-xl lg:text-2xl font-bold text-center mb-6 lg:mb-8">
            Comparaison avec les autres approches
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            {pricingComparison.map((option, index) => (
              <motion.div
                key={option.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`border-2 transition-all duration-300 h-full ${
                    option.color === "green"
                      ? "bg-gradient-to-br from-[#06D6A0]/10 to-[#059669]/10 border-[#06D6A0] scale-105"
                      : option.color === "red"
                      ? "bg-gray-900/30 border-red-500/30"
                      : "bg-gray-900/30 border-orange-500/30"
                  }`}
                >
                  <CardContent className="p-4 lg:p-6 text-center flex flex-col h-full">
                    <h4
                      className={`font-bold font-space-grotesk mb-4 text-sm lg:text-base ${
                        option.color === "green"
                          ? "text-[#06D6A0]"
                          : option.color === "red"
                          ? "text-red-400"
                          : "text-orange-400"
                      }`}
                    >
                      {option.type}
                    </h4>

                    <div className="space-y-3 mb-6 flex-grow">
                      <div>
                        <span className="text-gray-400 text-xs lg:text-sm">
                          Prix :
                        </span>
                        <div className="font-semibold text-white text-sm lg:text-base">
                          {option.price}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-400 text-xs lg:text-sm">
                          Risque :
                        </span>
                        <div
                          className={`font-semibold text-sm lg:text-base ${
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
                        <span className="text-gray-400 text-xs lg:text-sm">
                          Résultats :
                        </span>
                        <div className="font-semibold text-white text-sm lg:text-base">
                          {option.results}
                        </div>
                      </div>
                    </div>

                    {option.color === "green" && (
                      <div className="flex items-center justify-center mt-auto">
                        <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#06D6A0] mr-2" />
                        <span className="text-xs lg:text-sm text-[#06D6A0] font-bold">
                          Recommandé
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/30 max-w-3xl mx-auto">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-lg lg:text-xl font-bold font-space-grotesk mb-4">
                L'alignement parfait
              </h3>
              <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                Avec ce modèle, mon succès dépend entièrement du vôtre. Je n'ai
                aucun intérêt à vous facturer sans résultats. Mon objectif :
                maximiser vos revenus pour maximiser les miens.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                  {[
                    { label: "Transparence", icon: "🔍" },
                    { label: "Alignement", icon: "🤝" },
                    { label: "Performance", icon: "📈" },
                    { label: "Confiance", icon: "✨" },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg mb-1">{item.icon}</div>
                      <div className="text-xs lg:text-sm text-gray-400">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

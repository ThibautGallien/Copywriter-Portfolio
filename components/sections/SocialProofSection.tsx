"use client";

import { motion } from "framer-motion";
import { Users, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const guarantees = [
  "Un accompagnement personnalisé de qualité",
  "Des résultats concrets et mesurables",
  "Une disponibilité totale pour les optimisations",
  "Un suivi rigoureux des performances",
];

export default function SocialProofSection() {
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
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 lg:w-5 lg:h-5 text-amber-500" />
            <span className="text-amber-500 font-medium text-sm lg:text-base">
              Places limitées
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk mb-4 lg:mb-6">
            Attention : cette offre est
            <span className="text-amber-500"> strictement limitée</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-500/30">
            <CardContent className="p-6 lg:p-12">
              {/* Why limited */}
              <div className="text-center mb-6 lg:mb-8">
                <h3 className="text-xl lg:text-2xl font-bold mb-4">
                  Pourquoi je ne prends que 3 nouveaux clients par mois ?
                </h3>
              </div>

              <div className="space-y-4 lg:space-y-6 text-gray-300">
                <p className="text-base lg:text-lg leading-relaxed">
                  Parce que{" "}
                  <strong className="text-white">
                    chaque système email demande du temps, de la réflexion et
                    une exécution soignée
                  </strong>
                  .
                </p>

                <p className="text-sm lg:text-base leading-relaxed">
                  Plutôt que de multiplier les projets, je préfère consacrer mon
                  énergie à quelques clients pour leur garantir :
                </p>

                {/* Guarantees grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 my-6 lg:my-8">
                  {guarantees.map((guarantee, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs lg:text-sm leading-relaxed">
                        {guarantee}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Urgency box */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-xl p-4 lg:p-6 text-center"
                >
                  <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-amber-500 mx-auto mb-4" />
                  <p className="font-semibold text-amber-300 mb-2 text-sm lg:text-base">
                    Places disponibles pour ce mois-ci : 2 restantes
                  </p>
                  <p className="text-xs lg:text-sm text-gray-400">
                    Si les créneaux sont pleins, vous devrez attendre le mois
                    prochain.
                  </p>
                </motion.div>
              </div>

              {/* Additional benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-6 lg:mt-8 pt-6 lg:pt-8 border-t border-gray-700"
              >
                <h4 className="font-semibold text-amber-300 mb-4 text-center text-sm lg:text-base">
                  Ce que cette approche exclusive vous garantit :
                </h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                  {[
                    { label: "Réactivité", value: "< 24h" },
                    { label: "Disponibilité", value: "100%" },
                    { label: "Suivi", value: "Quotidien" },
                    { label: "Résultats", value: "Garantis" },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-800/30 rounded-lg p-3">
                      <div className="text-amber-500 font-bold text-sm lg:text-base">
                        {item.value}
                      </div>
                      <div className="text-gray-400 text-xs lg:text-sm">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16 text-center"
        >
          <p className="text-sm lg:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Cette limitation n'est pas un argument de vente, c'est une réalité
            opérationnelle. Je préfère refuser des clients plutôt que de
            compromettre la qualité de mon travail.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const auditBenefits = [
  "Pourquoi vos emails ne convertissent pas actuellement",
  "Le potentiel de revenus inexploité de votre liste",
  "3 optimisations à implémenter immédiatement",
  "Un plan d'action personnalisé et chiffré",
];

const guarantees = [
  "30 min gratuites",
  "Conseils actionnables",
  "Aucun engagement",
  "Plan d'action concret",
];

export default function CTAFinalSection() {
  return (
    <section className="py-8 lg:py-8 bg-[#0D0D0D] relative">
      <div className="container mx-auto px-4">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border border-[#9B5DE5]/30">
            <CardContent className="p-6 lg:p-12">
              {/* Header */}
              <div className="mb-6 lg:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-space-grotesk text-white mb-4 lg:mb-6">
                  Votre liste email dort ?
                  <br />
                  <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
                    C'est de l'argent qui s'évapore chaque jour.
                  </span>
                </h2>

                <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Pendant que vous hésitez, vos concurrents optimisent leurs
                  emails et génèrent des revenus avec leur liste.
                  <span className="text-[#FFD400] font-semibold">
                    {" "}
                    Ne les laissez pas prendre de l'avance.
                  </span>
                </p>
              </div>

              {/* Audit Value Proposition */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl p-4 lg:p-6 mb-6 lg:mb-8"
              >
                <div className="flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 lg:w-8 lg:h-8 text-[#FFD400] mr-3" />
                  <h3 className="text-lg lg:text-xl font-bold">
                    Audit stratégique gratuit (30 minutes)
                  </h3>
                </div>

                <div className="text-left max-w-2xl mx-auto space-y-3 text-gray-300">
                  <p className="font-semibold text-white mb-4 text-center text-sm lg:text-base">
                    Dans cet audit, vous découvrirez :
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3">
                    {auditBenefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-[#06D6A0] mt-1 flex-shrink-0" />
                        <span className="text-xs lg:text-sm leading-relaxed">
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Main CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-6 lg:mb-8"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#FFD400] to-[#F59E0B] text-black font-bold hover:opacity-90 transition-opacity text-sm sm:text-base lg:text-lg px-4 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 w-full sm:w-auto shadow-2xl"
                >
                  <Link href="https://calendly.com/hello-thibautgallien/30min">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 flex-shrink-0" />
                    <span className="hidden lg:inline">
                      Réserver mon audit stratégique gratuit
                    </span>
                    <span className="hidden sm:inline lg:hidden">
                      Réserver mon audit gratuit
                    </span>
                    <span className="sm:hidden">Audit gratuit</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 flex-shrink-0" />
                  </Link>
                </Button>
              </motion.div>

              {/* Guarantees Grid */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6 lg:mb-8"
              >
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xs lg:text-sm font-medium text-[#06D6A0]">
                      ✓ {guarantee}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Urgency Warning */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 lg:p-6"
              >
                <div className="flex items-start justify-center gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 lg:w-6 lg:h-6 text-red-400 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-semibold text-red-300 mb-2 text-sm lg:text-base">
                      Dernière chance :
                    </p>
                    <p className="text-xs lg:text-sm text-gray-300 leading-relaxed">
                      Chaque jour de retard, ce sont des ventes qui passent à
                      côté. Vos abonnés oublient qui vous êtes, vos concurrents
                      prennent de l'avance, et votre liste perd de sa valeur.
                    </p>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <p className="text-xs lg:text-sm text-gray-400">
                    <Clock className="w-3 h-3 lg:w-4 lg:h-4 inline mr-1" />
                    Plus que 2 places disponibles ce mois-ci
                  </p>
                </div>
              </motion.div>

              {/* Final Reassurance */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-700"
              >
                <p className="text-xs lg:text-sm text-gray-400 leading-relaxed">
                  <span className="font-semibold text-white">Promesse :</span>{" "}
                  Même si nous ne travaillons pas ensemble, vous repartirez avec
                  des conseils actionnables qui amélioreront vos résultats dès
                  la semaine prochaine.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Secondary CTA for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center sm:hidden"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-gray-700 hover:border-[#9B5DE5] hover:text-[#9B5DE5] transition-colors w-full"
          >
            <Link href="/contact">Ou envoyez-moi un message</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

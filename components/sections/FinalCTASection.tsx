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

const guarantees = [
  "30 minutes gratuites",
  "Conseils actionnables garantis",
  "Aucun engagement",
  "Plan d'action concret",
];

export default function FinalCTASection() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-900/20 to-[#0D0D0D] relative">
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
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-6">
                  Votre liste email dort ?
                  <br />
                  <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
                    C'est de l'argent qui s'évapore chaque jour.
                  </span>
                </h2>

                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Pendant que vous lisez ceci, vos concurrents optimisent leurs
                  emails et génèrent des revenus avec leur liste.
                  <span className="text-[#FFD400] font-semibold">
                    {" "}
                    Ne les laissez pas prendre de l'avance.
                  </span>
                </p>
              </div>

              {/* Value Proposition */}
              <div className="bg-gray-900/50 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-[#FFD400] mr-3" />
                  <h3 className="text-xl font-bold font-space-grotesk">
                    Audit gratuit de votre stratégie email
                  </h3>
                </div>

                <div className="text-left max-w-2xl mx-auto space-y-3 text-gray-300">
                  <p className="font-semibold text-white mb-4">
                    Dans cet audit de 30 minutes, vous découvrirez :
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-1 flex-shrink-0" />
                      <span className="text-sm">
                        Pourquoi vos emails ne convertissent pas
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-1 flex-shrink-0" />
                      <span className="text-sm">
                        3 optimisations immédiates à faire
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-1 flex-shrink-0" />
                      <span className="text-sm">
                        Le potentiel de revenus de votre liste
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-1 flex-shrink-0" />
                      <span className="text-sm">
                        Un plan d'action personnalisé
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main CTA */}
              <div className="mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#FFD400] to-[#F59E0B] text-black font-bold hover:opacity-90 transition-opacity text-sm sm:text-base md:text-lg px-4 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 w-full shadow-2xl"
                >
                  <Link href="https://calendly.com/hello-thibautgallien/30min">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 flex-shrink-0" />
                    <span className="hidden md:inline">
                      Réserver mon audit stratégique gratuit
                    </span>
                    <span className="hidden sm:inline md:hidden">
                      Réserver mon audit gratuit
                    </span>
                    <span className="sm:hidden">Audit gratuit</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 flex-shrink-0" />
                  </Link>
                </Button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {guarantees.map((guarantee, index) => (
                  <motion.div
                    key={guarantee}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-sm font-medium text-[#06D6A0]">
                      {guarantee}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Urgency */}
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                <div className="flex items-start justify-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-semibold text-red-300 mb-2">
                      Attention :
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Chaque jour de retard, c'est des ventes qui passent à
                      côté. Vos abonnés oublient qui vous êtes, vos concurrents
                      prennent de l'avance, et votre liste perd de sa valeur.
                    </p>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <p className="text-sm text-gray-400">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Prochain créneau disponible : cette semaine
                  </p>
                </div>
              </div>

              {/* Final reassurance */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 leading-relaxed">
                  <span className="font-semibold text-white">Promesse :</span>{" "}
                  Même si on ne travaille pas ensemble, vous repartirez avec des
                  conseils actionnables qui amélioreront vos résultats dès la
                  semaine prochaine.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

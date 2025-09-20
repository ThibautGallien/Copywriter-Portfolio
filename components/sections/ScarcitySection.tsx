"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ScarcitySection() {
  return (
    <section className="py-8 bg-[#0D0D0D] relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-[#FFD400] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute top-1/2 -right-32 w-64 h-64 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-500/30 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-[#FFD400]" />
                  <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk text-white">
                    Attention cette offre est limitée
                  </h2>
                </div>
              </div>

              <div className="space-y-6 text-gray-300">
                <div className="flex items-start justify-center gap-4 mb-6">
                  <Users className="w-6 h-6 text-[#9B5DE5] mt-1" />
                  <p className="text-lg font-semibold text-white text-left">
                    Je ne prends qu'un nombre très limité de clients chaque
                    mois.
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-xl p-6">
                  <h3 className="font-semibold text-[#FFD400] mb-4 text-center">
                    Pourquoi ?
                  </h3>
                  <p className="leading-relaxed mb-4 text-left">
                    Parce que chaque système email demande de la réflexion, du
                    temps, et une exécution soignée.
                  </p>
                  <p className="leading-relaxed text-left">
                    Plutôt que de multiplier les projets, je préfère consacrer
                    mon énergie à quelques clients, pour leur garantir un
                    accompagnement de qualité et des résultats concrets.
                  </p>
                </div>

                <div className="flex items-start justify-center gap-3 text-amber-300">
                  <Clock className="w-5 h-5 mt-1" />
                  <p className="font-medium text-left">
                    Si les créneaux sont pleins, vous devrez patienter. Mais si
                    une place est disponible maintenant, c'est le bon moment
                    pour en profiter.
                  </p>
                </div>

                <div className="pt-6 flex justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-[#FFD400] to-[#F59E0B] text-black hover:opacity-90 transition-opacity px-4 sm:px-8 font-semibold text-sm sm:text-base"
                  >
                    <Link href="https://calendly.com/hello-thibautgallien/30min">
                      <span className="hidden sm:inline">
                        Réserver mon audit stratégique gratuit
                      </span>
                      <span className="sm:hidden">
                        Réserver mon audit gratuit
                      </span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

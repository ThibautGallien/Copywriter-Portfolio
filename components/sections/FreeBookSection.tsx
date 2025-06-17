"use client";

import { motion } from "framer-motion";
import { Star, Download, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function FreeBookSection() {
  return (
    <section className="py-24 bg-[#0D0D0D] relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFD400]/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="text-[#FFD400] font-bold text-sm tracking-wider uppercase">
              📚 RESSOURCE GRATUITE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-4">
            NOUS AVONS LITTÉRALEMENT ÉCRIT LE LIVRE SUR...
          </h2>

          <h3 className="text-4xl md:text-5xl font-black font-space-grotesk text-white mb-8 leading-tight">
            COMMENT OBTENIR AUTANT DE
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              CLIENTS, CUSTOMERS ET
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#FFD400] to-[#F59E0B] bg-clip-text text-transparent">
              VENTES QUE VOUS POUVEZ
            </span>
            <br />
            POSSIBLEMENT GÉRER
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Book Cover */}
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="relative mx-auto mb-6"
                  >
                    <div className="w-64 h-80 bg-gradient-to-br from-[#FFD400] to-[#F59E0B] rounded-lg flex flex-col items-center justify-center text-center p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <BookOpen className="w-16 h-16 text-white mb-4" />
                      <div className="text-3xl font-bold text-white mb-2 font-space-grotesk">
                        COPY
                      </div>
                      <div className="text-xl font-bold text-white mb-2 font-space-grotesk">
                        LIKE
                      </div>
                      <div className="text-3xl font-bold text-white mb-4 font-space-grotesk">
                        CRAZY
                      </div>
                      <div className="text-xs text-white text-center leading-tight">
                        COMMENT OBTENIR AUTANT DE CLIENTS,
                        <br />
                        CUSTOMERS ET VENTES QUE
                        <br />
                        VOUS POUVEZ POSSIBLEMENT GÉRER
                      </div>
                      <div className="text-lg font-bold text-white mt-4 font-space-grotesk">
                        THIBAUT
                      </div>
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#9B5DE5] rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#3A86FF] rounded-full animate-pulse"></div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-lg text-gray-300 leading-relaxed"
                  >
                    Copy Like Crazy est passé d'un classement de 90,000 le jour
                    de sa sortie, à un bestseller international Amazon #1 dès le
                    premier jour.
                    <span className="font-bold text-white">
                      {" "}
                      Ce livre est facile à lire et ne perd pas de temps à aller
                      droit au but.
                    </span>
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-lg text-gray-300 leading-relaxed"
                  >
                    Vous obtenez{" "}
                    <span className="font-bold text-[#FFD400] underline">
                      des stratégies actionnables que vous pouvez utiliser
                      IMMÉDIATEMENT
                    </span>{" "}
                    pour augmenter drastiquement les ventes de votre business...
                    dans la plupart des cas, sans dépenser un centime de plus en
                    publicité.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#FFD400] to-[#F59E0B] text-black hover:opacity-90 transition-opacity font-bold"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      TÉLÉCHARGER LE LIVRE GRATUIT
                    </Button>

                    <div className="flex items-center justify-center space-x-2">
                      <div className="flex text-[#FFD400]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={20} fill="currentColor" />
                        ))}
                      </div>
                      <span className="text-gray-300 font-medium">
                        4.9 étoiles sur 5,883 avis
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ValuePropositionSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              Augmentez votre chiffre d'affaires
            </span>
            <br />
            <span className="text-white text-2xl md:text-3xl font-normal">
              Sans dépenser plus en publicité, créer plus de contenu ou trahir
              votre image de marque
            </span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Animation (40% width) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Central Email Icon */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-24 h-24 bg-gradient-to-br from-[#9B5DE5] to-[#3A86FF] rounded-2xl flex items-center justify-center shadow-2xl z-10"
              >
                <Mail className="w-12 h-12 text-white" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  x: [0, 20, 0, -10, 0],
                  y: [0, -15, 0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-16 left-12 w-16 h-16 bg-gradient-to-br from-[#FFD400] to-[#F59E0B] rounded-xl flex items-center justify-center shadow-lg"
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{
                  x: [0, -25, 0, 15, 0],
                  y: [0, 20, 0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-20 right-8 w-14 h-14 bg-gradient-to-br from-[#06D6A0] to-[#059669] rounded-lg flex items-center justify-center shadow-lg"
              >
                <Users className="w-7 h-7 text-white" />
              </motion.div>

              <motion.div
                animate={{
                  x: [0, 15, 0, -20, 0],
                  y: [0, -20, 0, 15, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute bottom-20 left-16 w-12 h-12 bg-gradient-to-br from-[#3A86FF] to-[#0EA5E9] rounded-lg flex items-center justify-center shadow-lg"
              >
                <TrendingUp className="w-6 h-6 text-white" />
              </motion.div>

              {/* Connection Lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                viewBox="0 0 400 500"
              >
                <motion.path
                  d="M100 100 Q200 150 300 120"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.path
                  d="M80 300 Q200 250 320 280"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#9B5DE5" />
                    <stop offset="100%" stopColor="#3A86FF" />
                  </linearGradient>
                  <linearGradient
                    id="gradient2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#FFD400" />
                    <stop offset="100%" stopColor="#06D6A0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Right Side - Content (60% width) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-8"
          >
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-left">
              <p>
                Vous avez déjà des personnes abonnées à votre liste de mails.
                Mais vos mails ne sont{" "}
                <span className="text-red-400 font-semibold">
                  ni ouverts, ni cliqués, ni rentables
                </span>
                .
              </p>

              <p className="text-gray-400">
                Vos prospects vous oublient, n'achètent pas et au final se
                désinscrivent.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk mb-8 text-left">
                J'implémente un système
                <span className="text-[#FFD400]"> sur-mesure :</span>
              </h3>

              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-[#9B5DE5] font-bold text-xl">•</span>
                  <p className="text-gray-300">
                    <strong className="text-white">
                      Qui attire les bons prospects
                    </strong>{" "}
                    sur une landing page optimisée
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#3A86FF] font-bold text-xl">•</span>
                  <p className="text-gray-300">
                    <strong className="text-white">
                      Qui capte leur attention
                    </strong>{" "}
                    et construit la relation dès les premiers mails
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#FFD400] font-bold text-xl">•</span>
                  <p className="text-gray-300">
                    <strong className="text-white">
                      Qui les engage progressivement
                    </strong>{" "}
                    jusqu'à l'achat
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#06D6A0] font-bold text-xl">•</span>
                  <p className="text-gray-300">
                    <strong className="text-white">
                      Et qui continue de s'améliorer
                    </strong>
                    , chaque mois, grâce aux données et aux itérations
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="pt-8 text-center sm:text-left">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  <Link href="https://calendly.com/hello-thibautgallien/30min">
                    <span className="hidden sm:inline">
                      Découvrir comment ça marche
                    </span>
                    <span className="sm:hidden">Comment ça marche</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ValuePropositionSection;

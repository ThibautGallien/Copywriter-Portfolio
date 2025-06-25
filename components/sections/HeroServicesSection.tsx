"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Mail,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const trustSignals = [
  "Résultats visibles dès les premières semaines",
  "Approche 100% personnalisée",
  "Garantie satisfait ou accompagné jusqu'au résultat",
];

export default function HeroServicesSection() {
  return (
    <section className="min-h-screen bg-[#0D0D0D] text-white relative overflow-hidden flex items-center">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -left-64 w-96 h-96 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-32 -right-64 w-96 h-96 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-black font-space-grotesk leading-tight"
            >
              Et si votre liste d'emails devenait{" "}
              <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
                votre canal de ventes
              </span>
              <br />
              le plus fiable ?
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-300 leading-relaxed"
            >
              Sans pub, sans lancement à rallonge, sans trahir votre image de
              marque.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity text-base sm:text-lg px-6 sm:px-12 py-4 sm:py-6"
              >
                <Link href="https://calendly.com/hello-thibautgallien/30min">
                  <span className="hidden sm:inline">
                    Réserver mon audit stratégique gratuit
                  </span>
                  <span className="sm:hidden">Réserver mon audit gratuit</span>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 flex-shrink-0" />
                </Link>
              </Button>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-3"
            >
              {trustSignals.map((signal, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <CheckCircle className="w-5 h-5 text-[#9B5DE5] flex-shrink-0 mt-0.5" />
                  <span>{signal}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
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
        </div>
      </div>
    </section>
  );
}

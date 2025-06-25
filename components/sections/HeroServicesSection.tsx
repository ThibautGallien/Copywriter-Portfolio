"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-black font-space-grotesk mb-6 leading-tight"
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
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed text-left"
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
              className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity text-base sm:text-lg px-6 sm:px-12 py-4 sm:py-6 w-full sm:w-auto"
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
            className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {trustSignals.map((signal, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-sm text-gray-300"
              >
                <CheckCircle className="w-5 h-5 text-[#9B5DE5] flex-shrink-0" />
                <span className="text-left">{signal}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

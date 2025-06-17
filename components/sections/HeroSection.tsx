"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#0D0D0D] text-white relative overflow-hidden flex items-center">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -left-64 w-96 h-96 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-32 -right-64 w-96 h-96 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FFD400] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-[#9B5DE5]/20 to-[#3A86FF]/20 border border-[#9B5DE5]/30 rounded-full px-6 py-2">
              <span className="text-[#FFD400] font-bold text-sm tracking-wider">
                ⚡ COPYWRITER FREELANCE
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black font-space-grotesk mb-6 leading-tight"
          >
            COMME DES{" "}
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              STÉROÏDES*
            </span>
            <br />
            POUR VOTRE BUSINESS
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Faire croître un business c'est dur. Je le rends beaucoup plus
            facile, plus prévisible, moins stressant et plus fun avec mon{" "}
            <span className="text-[#FFD400] font-semibold">
              style narratif unique
            </span>
            .
          </motion.p>

          {/* Email capture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <Card className="bg-gray-900/50 border-gray-800 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Zap className="text-[#9B5DE5] mr-2" size={24} />
                  <span className="text-gray-300 font-medium">
                    Entrez votre email et recevez de la 'magie'...
                  </span>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="votre.email@exemple.com"
                    className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-lg focus:border-[#9B5DE5] focus:outline-none placeholder-gray-400"
                  />
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity px-8"
                  >
                    C'est parti
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm text-gray-400 mb-6"
          >
            *Mais c'est 100% légal (promis juré)
          </motion.p>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center space-x-2"
          >
            <div className="flex text-[#FFD400]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-300 font-medium">
              4.9 étoiles sur 150+ projets
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity px-8"
            >
              <Link href="/contact">
                Travailler avec moi
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-700 hover:border-[#9B5DE5] hover:text-[#9B5DE5] transition-colors px-8"
            >
              <Link href="/services">Voir mes services</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

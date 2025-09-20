"use client";

import { motion } from "framer-motion";
import { ArrowRight, Settings, Mail, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const highlights = [
  {
    icon: Settings,
    title: "Approche Stratégique",
    description:
      "Pas de coups de chance, mais une stratégie éprouvée qui génère des résultats constants",
  },
  {
    icon: Mail,
    title: "Architecte Email",
    description:
      "Conception de systèmes email qui créent une relation durable avec votre audience",
  },
  {
    icon: TrendingUp,
    title: "Résultats Prévisibles",
    description:
      "Chiffre d'affaires généré semaine après semaine grâce à une stratégie structurée et qui s'améliore en continu",
  },
];

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Avatar & Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Conteneur rond - adapté pour mobile */}
              <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-[#9B5DE5]/20 to-[#3A86FF]/20 rounded-full flex items-center justify-center border border-gray-800 relative overflow-hidden mx-auto">
                {/* Avatar rond - plus petit que le conteneur */}
                <div className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[420px] lg:h-[420px] bg-gradient-to-br from-[#9B5DE5] to-[#3A86FF] rounded-full flex items-center justify-center shadow-2xl relative z-10">
                  <img
                    src="/profile-pic.webp"
                    alt="Thibaut"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Animations qui restent dans le conteneur rond */}
                <div className="absolute inset-0">
                  {/* Floating elements repositionnés pour rester dans le cercle */}
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-[#FFD400] rounded-full animate-bounce flex items-center justify-center">
                    <span className="text-black font-bold text-xs">📧</span>
                  </div>
                  <div className="absolute bottom-1/3 right-1/4 w-3 h-3 sm:w-5 sm:h-5 bg-[#9B5DE5] rounded-full animate-pulse"></div>

                  {/* Cercles décoratifs supplémentaires */}
                  <div className="absolute top-1/3 right-1/6 w-3 h-3 sm:w-4 sm:h-4 bg-[#3A86FF]/50 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/2 left-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-[#FFD400]/60 rounded-full animate-bounce"></div>
                </div>
              </div>

              {/* Éléments flottants externes */}
              <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-6 h-6 sm:w-10 sm:h-10 bg-[#9B5DE5] rounded-full animate-bounce flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-xs sm:text-sm">
                  👉
                </span>
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-4 h-4 sm:w-8 sm:h-8 bg-[#9B5DE5] rounded-full animate-pulse shadow-lg"></div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8 order-1 lg:order-2"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-space-grotesk mb-4 lg:mb-6 leading-tight">
                Thibaut.
                <br />
                <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
                  Copywriter & Architecte Email
                </span>
              </h2>
            </div>

            <div className="space-y-4 lg:space-y-6 text-gray-300 leading-relaxed">
              <p className="text-base sm:text-lg">
                Avant de me spécialiser dans l'email, j'avais une conviction
                simple : les meilleurs résultats viennent toujours d'un{" "}
                <span className="text-[#9B5DE5] font-semibold">système</span>.
              </p>

              <p className="text-sm sm:text-base">
                Pas d'un coup de chance, pas d'un éclair de génie isolé. Mais
                d'un système.
              </p>

              <p className="text-sm sm:text-base">
                C'est cette logique que j'applique au copywriting. Je ne me
                contente pas d'écrire de bons emails. Je conçois des{" "}
                <span className="text-[#FFD400] font-semibold">
                  systèmes qui créent une relation solide
                </span>{" "}
                avec votre audience et génèrent du chiffre d'affaires, semaine
                après semaine.
              </p>

              <p className="text-[#3A86FF] font-medium text-base sm:text-lg">
                Mon objectif : que vos prospects ouvrent vos mails avec autant
                d'envie qu'un message perso… et qu'ils finissent par cliquer et
                acheter sans même s'en rendre compte.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-3 sm:gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-3 sm:p-4 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors duration-300"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-space-grotesk text-xs sm:text-sm mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity text-sm sm:text-base px-4 sm:px-6"
              >
                <Link href="/services">
                  <span className="truncate">Comment je peux vous aider</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-700 hover:border-[#9B5DE5] hover:text-[#9B5DE5] transition-colors text-sm sm:text-base px-4 sm:px-6"
              >
                <Link href="/about">
                  <span className="truncate">En savoir plus sur moi</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

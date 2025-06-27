// Remplacer tout le composant AboutSection.tsx par :

"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Avatar & Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                {/* Conteneur rond - plus grand que l'image pour contenir les animations */}
                <div className="w-80 h-80 bg-gradient-to-br from-[#9B5DE5]/20 to-[#3A86FF]/20 rounded-full flex items-center justify-center border border-gray-800 relative overflow-hidden mx-auto">
                  {/* Avatar rond - plus petit que le conteneur */}
                  <div className="w-64 h-64 bg-gradient-to-br from-[#9B5DE5] to-[#3A86FF] rounded-full flex items-center justify-center shadow-2xl relative z-10">
                    <span className="text-6xl font-bold text-white font-space-grotesk">
                      T
                    </span>
                  </div>

                  {/* Animations qui restent dans le conteneur rond */}
                  <div className="absolute inset-0">
                    {/* Floating elements repositionnés pour rester dans le cercle */}
                    <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-[#FFD400] rounded-full animate-bounce flex items-center justify-center">
                      <Mail className="w-3 h-3 text-black" />
                    </div>
                    <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-[#9B5DE5] rounded-full animate-pulse"></div>

                    {/* Cercles décoratifs supplémentaires */}
                    <div className="absolute top-1/3 right-1/6 w-4 h-4 bg-[#3A86FF]/50 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/2 left-1/3 w-3 h-3 bg-[#FFD400]/60 rounded-full animate-bounce"></div>
                  </div>
                </div>

                {/* Éléments flottants externes (optionnels - en dehors du conteneur rond) */}
                <div className="absolute -top-6 -right-6 w-8 h-8 bg-[#9B5DE5] rounded-full animate-bounce flex items-center justify-center shadow-lg">
                  <span className="text-black font-bold text-xs">👉</span>
                </div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-[#9B5DE5] rounded-full animate-pulse shadow-lg"></div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl font-bold mb-6 font-space-grotesk">
                Qui suis-je ?
              </h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  Je suis{" "}
                  <span className="font-bold text-[#9B5DE5]">Thibaut</span>,
                  copywriter obsédé par les résultats et passionné de mangas
                  (oui, les deux vont ensemble).
                </p>
                <p>
                  Depuis des années, j'aide les entrepreneurs à transformer
                  leurs mots en machine à cash grâce au copywriting de
                  persuasion.
                </p>
                <p>
                  Ma mission ?{" "}
                  <span className="font-bold text-[#FFD400]">
                    Faire exploser vos ventes
                  </span>{" "}
                  avec des copies qui convertissent comme des fous, des emails
                  qui vendent pendant que vous dormez, et des landing pages qui
                  transforment vos visiteurs en clients fidèles.
                </p>
                <p>
                  Quand je ne rédige pas du copy qui cartonne, vous me trouverez
                  probablement en train de dévorer le dernier chapitre de One
                  Piece ou d'analyser les techniques de persuasion dans les
                  animes (non, ce n'est pas une perte de temps).
                </p>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
                >
                  <Link href="/about">Découvrir mon histoire</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

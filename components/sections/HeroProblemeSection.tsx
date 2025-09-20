"use client";

import { motion } from "framer-motion";
import { X, ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const problemStats = [
  {
    stat: "87%",
    description:
      "des entrepreneurs n'exploitent pas le potentiel de leur liste email",
  },
  {
    stat: "2,3%",
    description: "de taux de clic moyen (alors que 8%+ est atteignable)",
  },
  {
    stat: "0 - 100€",
    description: "générés par email chez 70% des entrepreneurs",
  },
];

const problems = [
  'Vous envoyez des emails "newsletter" généralistes qui ne vendent rien',
  "Vos séquences automation n'existent pas (abandon panier, bienvenue, relance)",
  "Vos emails ressemblent à tous les autres : aucune personnalité, aucun angle",
  "Vous n'avez aucune stratégie : vous envoyez quand ça vous passe par la tête",
  "Vous ne trackez rien : impossible de savoir ce qui fonctionne",
];

export default function HeroProblemeSection() {
  return (
    <section className="min-h-screen bg-[#0D0D0D] text-white relative overflow-hidden flex items-center pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -left-32 sm:-left-64 w-64 sm:w-96 h-64 sm:h-96 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-32 -right-32 sm:-right-64 w-64 sm:w-96 h-64 sm:h-96 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Pain Point Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center mb-8 lg:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black font-space-grotesk mb-6 leading-tight">
              Vos emails ne convertissent pas ?
              <br />
              <span className="text-red-400">Normal.</span>
            </h1>
          </motion.div>

          {/* Statistiques du problème */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-12 lg:mb-16"
          >
            {problemStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="bg-red-900/20 border-red-500/30 h-full">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-red-400 mb-2">
                      {stat.stat}
                    </div>
                    <div className="text-xs lg:text-sm text-gray-300 leading-relaxed">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Les vrais problèmes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center">
              Voici pourquoi vos emails{" "}
              <span className="text-red-400">ne rapportent presque rien</span> :
            </h2>

            <div className="max-w-4xl mx-auto space-y-3 lg:space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 lg:p-4 bg-gray-900/50 rounded-lg border border-gray-800"
                >
                  <X className="w-4 h-4 lg:w-5 lg:h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                    {problem}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Transition vers solution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-2xl p-6 lg:p-8 border border-[#9B5DE5]/30">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">
                Résultat : votre liste email dort.
                <br />
                <span className="text-[#FFD400]">
                  C'est de l'argent qui s'évapore chaque jour.
                </span>
              </h3>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity w-full sm:w-auto"
                >
                  <Link href="#solution">
                    Découvrir ma solution
                    <ArrowDown className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-700 hover:border-[#9B5DE5] hover:text-[#9B5DE5] transition-colors w-full sm:w-auto"
                >
                  <Link href="https://calendly.com/hello-thibautgallien/30min">
                    Audit gratuit
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

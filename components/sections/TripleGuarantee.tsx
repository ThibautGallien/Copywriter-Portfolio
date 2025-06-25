"use client";

import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, Eye, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const guarantees = [
  {
    icon: TrendingUp,
    title: "Garantie résultats",
    description:
      "Si le système mis en place ne génère pas au moins deux fois le tarif investi en chiffre d'affaires dans les 60 jours, je continue à travailler gratuitement jusqu'à ce que ce soit le cas.",
    color: "from-[#9B5DE5] to-[#7C3AED]",
    highlight: "ROI x2 minimum",
  },
  {
    icon: CheckCircle,
    title: "Garantie satisfaction",
    description:
      "Chaque livrable est validé par vous. Si quelque chose ne vous convient pas, on le revoit ensemble jusqu'à ce que ce soit parfaitement aligné avec votre vision.",
    color: "from-[#3A86FF] to-[#0EA5E9]",
    highlight: "Révisions illimitées",
  },
  {
    icon: Eye,
    title: "Garantie clarté",
    description:
      "Vous savez exactement ce qui est fait, pourquoi, et avec quels résultats. Pas de jargon, pas de zones floues, pas de dépendance technique.",
    color: "from-[#FFD400] to-[#F59E0B]",
    highlight: "Transparence totale",
  },
];

export default function TripleGuarantee() {
  return (
    <section className="py-24 bg-[#0D0D0D] relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9B5DE5]/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-4">
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              Je prends tous les risques
            </span>
            <br />
            <span className="text-white">pour vous</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full group">
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-4">
                    <div
                      className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${guarantee.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <guarantee.icon className="w-10 h-10 text-white" />
                    </div>
                    <div
                      className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${guarantee.color} text-white whitespace-nowrap`}
                    >
                      {guarantee.highlight}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-space-grotesk text-white">
                    {guarantee.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 leading-relaxed text-left">
                    {guarantee.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border border-[#9B5DE5]/30 max-w-3xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-12 h-12 text-[#FFD400] mr-4" />
                <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk text-white">
                  Travaillez en toute sérénité
                </h3>
              </div>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Ces trois garanties vous protègent entièrement. Votre
                investissement est sécurisé, vos résultats sont assurés, et
                votre satisfaction est garantie.
              </p>

              <div className="mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity text-lg px-8"
                >
                  <Link href="https://calendly.com/hello-thibautgallien/30min">
                    Je réserve mon appel gratuit de 30 minutes
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#9B5DE5] font-space-grotesk">
                    ROI x2
                  </div>
                  <div className="text-sm text-gray-400">Minimum garanti</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#3A86FF] font-space-grotesk">
                    60j
                  </div>
                  <div className="text-sm text-gray-400">
                    Délai de résultats
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#FFD400] font-space-grotesk">
                    100%
                  </div>
                  <div className="text-sm text-gray-400">
                    Satisfaction garantie
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

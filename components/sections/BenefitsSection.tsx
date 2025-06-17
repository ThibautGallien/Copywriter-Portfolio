"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  "STOP à la guesswork, au trial-and-error et au show de merde sans fin d'essayer de tout comprendre par vous-même",
  "Développez votre business avec des funnels éprouvés qui convertissent",
  "Automatisez vos ventes avec des séquences email qui travaillent 24h/24",
  "Multipliez vos taux de conversion grâce à un copy scientifique",
  "Libérez votre temps pour vous concentrer sur ce que vous aimez vraiment",
  "Dormez paisiblement en sachant que votre business génère du CA automatiquement",
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-[#0D0D0D] relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute top-1/2 -right-32 w-64 h-64 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-[#FFD400] font-bold text-sm tracking-wider uppercase">
              🚀 BÉNÉFICES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-8 leading-tight">
            DÉVELOPPEZ 10X PLUS VITE,
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              MIEUX, PLUS INTELLIGEMMENT.
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Passez la guesswork, le trial-and-error et le show de merde sans fin
            d'essayer de tout comprendre par vous-même – pour la première fois.
            Et à la place, développez votre business avec des{" "}
            <span className="font-bold underline text-[#9B5DE5]">
              funnels éprouvés
            </span>
            , des frameworks et une{" "}
            <span className="font-bold text-[#FFD400]">
              acquisition scientifique de clients
            </span>{" "}
            (pas des espoirs et des prières).
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle
                      className="text-[#9B5DE5] mt-1 flex-shrink-0"
                      size={24}
                    />
                    <p className="text-lg text-white leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border border-[#9B5DE5]/30 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk text-white mb-6">
                🎯 Revenue Generated & Size Of Our Platform
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-[#9B5DE5] mb-2 font-space-grotesk">
                    €7.8M
                  </p>
                  <p className="text-gray-300">
                    Nous laissons nos chiffres parler. 7.8 millions d'euros de
                    revenus clients reportés et comptés.
                  </p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-[#3A86FF] mb-2 font-space-grotesk">
                    199K
                  </p>
                  <p className="text-gray-300">
                    200,000 clients et plus composent notre plateforme diverse
                    et toujours croissante.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

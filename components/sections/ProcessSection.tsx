"use client";

import { motion } from "framer-motion";
import { Calendar, Settings, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Vous réservez votre appel stratégique gratuit",
    description:
      "On échange 30 minutes pour identifier vos opportunités concrètes avec l'email. Aucun jargon, aucun engagement. Vous repartez avec un diagnostic clair et des actions concrètes — même si on ne travaille pas ensemble.",
    icon: Calendar,
    color: "from-[#9B5DE5] to-[#7C3AED]",
    highlight: "30 min gratuit",
  },
  {
    number: "02",
    title: "On construit ensemble votre système email sur-mesure",
    description:
      "Je vous présente les leviers les plus rentables à activer en priorité. Vous validez les orientations, je vous montre comment chaque séquence et chaque email s'intègre dans une stratégie claire, cohérente, et au service de vos objectifs.",
    icon: Settings,
    color: "from-[#3A86FF] to-[#0EA5E9]",
    highlight: "Stratégie sur-mesure",
  },
  {
    number: "03",
    title: "Je m'occupe de tout, et vous gardez le contrôle",
    description:
      "Vous n'avez rien à faire. Je rédige, je structure, j'automatise — tout en vous tenant informé à chaque étape. Vous gardez le contrôle, mais sans la charge mentale. Pendant ce temps, vous pouvez vous concentrer sur ce que vous faites de mieux : servir vos clients, améliorer votre offre, faire grandir votre business.",
    icon: CheckCircle,
    color: "from-[#FFD400] to-[#F59E0B]",
    highlight: "Clé en main",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-[#0D0D0D] relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3A86FF]/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-4 leading-tight">
            3 étapes pour faire de votre base email
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              votre canal de vente n°1
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-32 bg-gradient-to-b from-[#9B5DE5] to-[#3A86FF] z-0"></div>
              )}

              <div className="flex gap-8 mb-12 relative z-10">
                {/* Timeline node */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg relative`}
                  >
                    <step.icon className="w-6 h-6 text-white" />

                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FFD400] rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-black">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold font-space-grotesk text-white leading-tight">
                          {step.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${step.color} text-white whitespace-nowrap ml-4`}
                        >
                          {step.highlight}
                        </span>
                      </div>

                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border border-[#9B5DE5]/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold font-space-grotesk text-white mb-4">
                Prêt à transformer votre email en machine de vente ?
              </h3>
              <p className="text-gray-300 mb-6">
                Commençons par un appel gratuit de 30 minutes pour identifier
                vos opportunités.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity px-8"
              >
                <Link href="https://calendly.com/hello-thibautgallien/30min">
                  Réserver mon appel stratégique gratuit
                </Link>
              </Button>

              <div className="grid grid-cols-3 gap-6 text-center mt-6 pt-6 border-t border-gray-700">
                <div>
                  <div className="text-lg font-bold text-[#9B5DE5] font-space-grotesk">
                    30 min
                  </div>
                  <div className="text-xs text-gray-400">Appel gratuit</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#3A86FF] font-space-grotesk">
                    0€
                  </div>
                  <div className="text-xs text-gray-400">Aucun engagement</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#FFD400] font-space-grotesk">
                    100%
                  </div>
                  <div className="text-xs text-gray-400">Actionnable</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Star, Shield, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const stats = [
  {
    icon: Users,
    number: "150+",
    label: "Clients satisfaits",
    color: "text-[#9B5DE5]",
  },
  {
    icon: TrendingUp,
    number: "€2.8M",
    label: "CA généré pour mes clients",
    color: "text-[#3A86FF]",
  },
  {
    icon: Shield,
    number: "98%",
    label: "Taux de satisfaction",
    color: "text-[#FFD400]",
  },
];

export default function ReassuranceSection() {
  return (
    <section className="py-24 bg-[#0D0D0D] relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
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
              🛡️ CONFIANCE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-8">
            LE POUVOIR EST DANS
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              {" "}
              LA PLATEFORME
            </span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors duration-300 text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center`}
                    >
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </div>
                  <div
                    className={`text-4xl md:text-5xl font-bold font-space-grotesk mb-2 ${stat.color}`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  La plupart des entrepreneurs essaient de faire croître leur
                  business par essais et erreurs, en 'espérant et en priant'...
                  en tâtonnant et en essayant de tout comprendre par eux-mêmes.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                >
                  Nous appelons cela{" "}
                  <span className="font-bold text-red-400">"guesswork"</span>.
                  C'est peu fiable, extrêmement stressant et aboutit souvent à
                  l'échec (ou à un psychiatre).
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  Nous avons dépensé plus de{" "}
                  <span className="font-bold text-[#9B5DE5]">
                    100 millions d'euros en trafic
                  </span>{" "}
                  pour perfectionner ce qui fonctionne... ce n'est pas notre
                  premier rodéo.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  viewport={{ once: true }}
                  className="text-[#FFD400] font-semibold"
                >
                  Et notre espoir est de réduire le temps qu'il vous faut pour
                  passer de chef d'entreprise solo débutant... À entrepreneur
                  qui cartonne sur le marché...
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity text-xl px-8 animate-pulse"
                >
                  <Link href="/contact">RÉSERVER MON APPEL GRATUIT</Link>
                </Button>

                <div className="flex items-center justify-center mt-6 space-x-2">
                  <div className="flex text-[#FFD400]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-gray-300 font-medium">
                    4.9 étoiles sur 150+ projets
                  </span>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

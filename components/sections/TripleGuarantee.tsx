"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const guarantees = [
  {
    icon: Clock,
    title: "Garantie Délai",
    description:
      "Vos projets livrés dans les temps convenus ou remboursement intégral.",
    color: "from-[#9B5DE5] to-[#7C3AED]",
  },
  {
    icon: TrendingUp,
    title: "Garantie Résultat",
    description:
      "Amélioration mesurable de vos conversions ou nous reprenons tout gratuitement.",
    color: "from-[#3A86FF] to-[#0EA5E9]",
  },
  {
    icon: CheckCircle,
    title: "Garantie Satisfaction",
    description: "100% satisfait ou remboursé, sans question ni justification.",
    color: "from-[#FFD400] to-[#F59E0B]",
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
          <div className="inline-block mb-4">
            <span className="text-[#FFD400] font-bold text-sm tracking-wider uppercase">
              🛡️ GARANTIES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-4">
            MA TRIPLE
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              {" "}
              GARANTIE
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Parce que votre succès est ma priorité absolue. Travaillez avec moi
            en toute sérénité.
          </p>
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
                  <div
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${guarantee.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <guarantee.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-space-grotesk text-white">
                    {guarantee.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 leading-relaxed">
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
                  Travaillez sans risque
                </h3>
              </div>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Ma triple garantie vous protège entièrement. Votre
                investissement est sécurisé, vos résultats sont assurés, et
                votre satisfaction est garantie.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#9B5DE5] font-space-grotesk">
                    24h
                  </div>
                  <div className="text-sm text-gray-400">Délai de réponse</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3A86FF] font-space-grotesk">
                    7j
                  </div>
                  <div className="text-sm text-gray-400">
                    Garantie satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FFD400] font-space-grotesk">
                    100%
                  </div>
                  <div className="text-sm text-gray-400">
                    Remboursement possible
                  </div>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity text-lg px-8"
              >
                <Link href="/contact">
                  Réserver un appel stratégique gratuit
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

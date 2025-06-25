"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const ctaOptions = [
  {
    icon: Mail,
    title: "Brief Express",
    description:
      "Décrivez-moi votre situation email actuelle, je vous réponds sous 24h",
    action: "J'envoie mon brief",
    href: "/contact",
    color: "from-[#9B5DE5] to-[#7C3AED]",
  },
  {
    icon: Calendar,
    title: "Appel Stratégique",
    description:
      "Échangeons 30 minutes sur vos opportunités email (diagnostic gratuit, aucun engagement)",
    action: "Je réserve mon créneau",
    href: "/contact",
    color: "from-[#3A86FF] to-[#0EA5E9]",
  },
];

export default function CTASection() {
  return (
    <section className="py-24 relative">
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
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-[#9B5DE5]/20 to-[#3A86FF]/20 border border-[#9B5DE5]/30 rounded-full px-6 py-2">
              <span className="text-[#FFD400] font-bold text-sm tracking-wider">
                🚀 PRÊT À DÉMARRER ?
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            Transformons votre liste email
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              en votre meilleure source de revenus
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Votre liste email dort ? Vos taux d'ouverture stagnent ? Vos emails
            ne convertissent pas ? Parlons-en et identifions ensemble vos
            opportunités concrètes.
          </p>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-all duration-300 text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 group shadow-2xl text-center"
            >
              <Link href="https://calendly.com/hello-thibautgallien/30min">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
                <span className="hidden sm:inline">
                  Je veux rentabiliser mes emails
                </span>
                <span className="sm:hidden">Rentabiliser mes emails</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Alternative CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16"
        >
          {ctaOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${option.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <option.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold font-space-grotesk mb-2 group-hover:text-[#9B5DE5] transition-colors duration-300">
                        {option.title}
                      </h3>
                      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                        {option.description}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-gray-700 hover:border-[#9B5DE5] hover:text-[#9B5DE5] transition-colors duration-300"
                      >
                        <Link href={option.href}>
                          {option.action}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-800 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-[#9B5DE5] font-space-grotesk">
                  24h
                </div>
                <div className="text-xs text-gray-400">Réponse garantie</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#3A86FF] font-space-grotesk">
                  30 min
                </div>
                <div className="text-xs text-gray-400">Appel gratuit</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#FFD400] font-space-grotesk">
                  ROI x2
                </div>
                <div className="text-xs text-gray-400">Minimum garanti</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

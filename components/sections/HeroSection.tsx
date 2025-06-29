"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import Link from "next/link";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Inscription réussie !", {
          description:
            "Vous recevrez bientôt votre première dose de conseils 🎯",
        });
        setEmail("");
      } else {
        throw new Error(data.error || "Erreur lors de l'inscription");
      }
    } catch (error) {
      console.error("Erreur newsletter:", error);
      toast.error("Erreur lors de l'inscription", {
        description: "Veuillez réessayer ou me contacter directement.",
      });
    }

    setIsSubmitting(false);
  };

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
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black font-space-grotesk mb-6 leading-tight"
          >
            CHAQUE SEMAINE, UNE DOSE DE{" "}
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
            Chaque semaine, des conseils pour écrire des emails qui vendent,
            fidélisent et automatisent votre croissance…{" "}
            <span className="text-[#FFD400] font-semibold">
              pendant que vous vous concentrez sur ce que vous faites de mieux
            </span>
            .
          </motion.p>

          {/* Email capture with Brevo integration */}
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
                    Entrez votre email et recevez votre première dose dès
                    aujourd'hui.
                  </span>
                </div>
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col md:flex-row gap-4"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre.email@exemple.com"
                    required
                    className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-lg focus:border-[#9B5DE5] focus:outline-none placeholder-gray-400"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity px-8 py-4"
                  >
                    {isSubmitting ? (
                      <>
                        Inscription...
                        <div className="w-4 h-4 ml-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </>
                    ) : (
                      <>
                        Rejoindre la newsletter
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
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
            *100% légal. Même si les effets secondaires incluent des pics de
            chiffre d'affaires.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col gap-4 justify-center mt-12 w-full max-w-md mx-auto sm:max-w-none sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity px-4 sm:px-8 text-sm sm:text-base w-full sm:w-auto"
            >
              <Link href="https://calendly.com/hello-thibautgallien/30min">
                <span className="hidden sm:inline">Travailler avec moi</span>
                <span className="sm:hidden">Travailler ensemble</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-700 hover:border-[#9B5DE5] hover:text-[#9B5DE5] transition-colors px-4 sm:px-8 text-sm sm:text-base w-full sm:w-auto"
            >
              <Link href="/services">
                <span className="hidden sm:inline">Voir mes services</span>
                <span className="sm:hidden">Mes services</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

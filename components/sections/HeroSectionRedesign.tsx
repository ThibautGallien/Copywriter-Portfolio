"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import Link from "next/link";

export default function HeroSectionRedesign() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async () => {
    if (!email) return;
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
          description: "Vous recevrez bientôt ma première newsletter 📧",
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
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Pain Point */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <p className="text-lg md:text-xl text-red-400 mb-4">
              Vos emails dorment dans les boîtes de réception ?
            </p>
          </motion.div>

          {/* Solution */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-black font-space-grotesk mb-6 leading-tight"
          >
            Je transforme votre liste email en{" "}
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              source de revenus récurrents
            </span>
          </motion.h1>

          {/* USP */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            <span className="text-[#FFD400] font-semibold">
              Newsletter hebdomadaire + séquences automatisées
            </span>{" "}
            qui convertissent vos abonnés en clients fidèles.
            <br />
            <span className="text-sm text-gray-400 mt-2 block">
              Je ne gagne que 30% du CA supplémentaire généré. Pas de résultats
              = pas de rémunération.
            </span>
          </motion.p>

          {/* Newsletter capture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8"
          >
            <Card className="bg-gray-900/50 border-gray-800 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Mail className="text-[#9B5DE5] mr-2" size={24} />
                  <span className="text-gray-300 font-medium">
                    Recevez mes conseils email marketing chaque semaine
                  </span>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre.email@entreprise.com"
                    className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-lg focus:border-[#9B5DE5] focus:outline-none placeholder-gray-400"
                  />
                  <Button
                    onClick={handleNewsletterSubmit}
                    size="lg"
                    disabled={isSubmitting || !email}
                    className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity px-8 py-4"
                  >
                    {isSubmitting ? (
                      <>
                        Inscription...
                        <div className="w-4 h-4 ml-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </>
                    ) : (
                      <>
                        M'inscrire gratuitement
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col gap-4 justify-center mt-12 w-full max-w-md mx-auto sm:max-w-none sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#FFD400] to-[#F59E0B] text-black font-semibold hover:opacity-90 transition-opacity px-8 text-base w-full sm:w-auto"
            >
              <Link href="https://calendly.com/hello-thibautgallien/30min">
                Audit gratuit de votre stratégie email
                <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-700 hover:border-[#9B5DE5] hover:text-[#9B5DE5] transition-colors px-8 text-base w-full sm:w-auto"
            >
              <Link href="/services">Découvrir mes services</Link>
            </Button>
          </motion.div>

          {/* Social proof teaser */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 text-sm text-gray-400"
          >
            <p>
              L'email marketing génère en moyenne{" "}
              <span className="text-[#9B5DE5] font-semibold">
                42€ pour chaque 1€ investi
              </span>{" "}
              (DMA 2024)
            </p>
            <p className="mt-1">
              Votre liste dort ? C'est de l'argent qui s'évapore chaque jour.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

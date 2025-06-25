"use client";

import { motion } from "framer-motion";
import { ArrowRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900/20 to-[#0D0D0D] relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border border-[#9B5DE5]/30 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-6">
                    Transformons votre liste email en{" "}
                    <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
                      levier de revenus
                    </span>
                  </h2>

                  <p className="text-lg text-gray-300 leading-relaxed mb-8 text-left max-w-4xl mx-auto">
                    Réservez votre appel : dans tous les cas, vous repartez avec
                    un plan d'action concret. Et si on décide de travailler
                    ensemble, on transforme enfin votre liste en levier de
                    revenus.
                  </p>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity text-base sm:text-lg px-6 sm:px-12 py-4 sm:py-6 w-full sm:w-auto"
                >
                  <Link href="https://calendly.com/hello-thibautgallien/30min">
                    <span className="hidden sm:inline">
                      Réserver mon audit stratégique gratuit
                    </span>
                    <span className="sm:hidden">
                      Réserver mon audit gratuit
                    </span>
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 flex-shrink-0" />
                  </Link>
                </Button>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 max-w-4xl mx-auto">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    <p className="font-semibold text-red-300">PS :</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-left">
                    Chaque jour sans stratégie d'email marketing, c'est une
                    vente potentielle qui vous échappe. Vos prospects vous
                    oublient, ou achètent ailleurs.
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

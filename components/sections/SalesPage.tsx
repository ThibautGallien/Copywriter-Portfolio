"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function SalesPage() {
  return (
    <section className="py-24 bg-[#0D0D0D] text-white relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-8 md:p-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold font-space-grotesk mb-8 text-center"
              >
                Cher entrepreneur,
              </motion.h2>

              <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  On se comprend.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="font-semibold"
                >
                  Faire croître un business c'est dur. Vraiment f*cking dur.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Vous vous inquiétez probablement de savoir d'où viendra votre
                  prochain client.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Stressé et dormant comme un enfant de deux ans qui fait ses
                  dents.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Vos cheveux grisonnent dans cinquante nuances à cause de toute
                  cette incertitude.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Et pour couronner le tout.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="font-bold text-[#FFD400] text-xl md:text-2xl"
                >
                  Vous êtes tiré dans un milliard de directions différentes.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border border-[#9B5DE5]/30 p-6 rounded-xl my-8"
                >
                  <p className="font-bold text-[#9B5DE5] text-center">
                    Et nous préférerions nous frotter des piments scorpions dans
                    les yeux plutôt que d'exploiter un business de cette façon.
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  Mais ce n'est pas à propos de nous... C'est à propos de vous.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  viewport={{ once: true }}
                  className="space-y-4 my-8 text-center"
                >
                  <p className="text-gray-300">Plus de sécurité.</p>
                  <p className="text-gray-300">Plus d'argent.</p>
                  <p className="font-bold text-2xl md:text-3xl text-[#FFD400]">
                    Plus de liberté.
                  </p>
                  <p className="text-gray-300">Plus de souvenirs.</p>
                  <p className="font-bold text-xl text-[#3A86FF] underline">
                    Plus de temps avec votre famille.
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  Peu importe ce que c'est pour vous...
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="font-bold text-2xl md:text-3xl text-center bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent"
                >
                  Tout commence par "choisir votre propre aventure"
                  ci-dessous...
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  viewport={{ once: true }}
                  className="italic text-[#FFD400] text-center"
                >
                  *cue angels singing*
                </motion.p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function SolutionIntroSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900/20 to-[#0D0D0D] relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="w-8 h-8 text-[#FFD400]" />
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white">
              Et si vos emails devenaient enfin un{" "}
              <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
                vrai levier de croissance ?
              </span>
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed text-left">
            Je m'appelle{" "}
            <span className="font-bold text-[#9B5DE5]">Thibaut</span>, et j'aide
            les entrepreneurs comme vous à transformer leur liste mail en un
            véritable levier de revenus, fiable, régulier, et aligné avec leur
            image de marque.
          </p>

          <div className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-2xl p-8 border border-gray-800 max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-6 text-left">
              <span className="font-bold text-[#FFD400]">Mon rôle :</span>{" "}
              transformer votre base mails en un système vivant, automatisé, et
              aligné avec votre image de marque.
            </p>

            <div className="space-y-4 text-gray-300 text-left">
              <p>Je ne suis pas là pour vous vendre des rêves.</p>
              <p className="font-semibold text-white">
                Je suis là pour créer, avec vous, un système d'email marketing
                qui rapporte — sans complexité, sans promesse floue, sans vous
                trahir.
              </p>
            </div>
          </div>

          <div className="text-left">
            <p className="text-lg text-gray-300 mb-4">
              Mon approche repose sur trois principes :{" "}
              <span className="text-[#9B5DE5] font-semibold">clarté</span>,{" "}
              <span className="text-[#3A86FF] font-semibold">
                personnalisation
              </span>
              , <span className="text-[#FFD400] font-semibold">efficacité</span>
              .
            </p>
            <p className="text-lg text-gray-300">
              Pas besoin de gros budget, pas besoin d'avoir 10 000 abonnés.
            </p>
            <p className="text-xl font-semibold text-white mt-4">
              Juste une méthode qui respecte votre rythme, vos offres et votre
              image.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function SolutionIntroSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-900/20 to-[#0D0D0D] relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Avatar & Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Conteneur rond - plus grand que l'image pour contenir les animations */}
              <div className="w-[500px] h-[500px] bg-gradient-to-br from-[#9B5DE5]/20 to-[#3A86FF]/20 rounded-full flex items-center justify-center border border-gray-800 relative overflow-hidden mx-auto">
                {/* Avatar rond - plus petit que le conteneur */}
                <div className="w-[420px] h-[420px] bg-gradient-to-br from-[#9B5DE5] to-[#3A86FF] rounded-full flex items-center justify-center shadow-2xl relative z-10">
                  <img
                    src="/profile-pic.webp"
                    alt="Thibaut"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Animations qui restent dans le conteneur rond */}
                <div className="absolute inset-0">
                  {/* Floating elements repositionnés pour rester dans le cercle */}
                  <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-[#FFD400] rounded-full animate-bounce flex items-center justify-center">
                    <span className="text-black font-bold text-xs">📧</span>
                  </div>
                  <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-[#9B5DE5] rounded-full animate-pulse"></div>

                  {/* Cercles décoratifs supplémentaires */}
                  <div className="absolute top-1/3 right-1/6 w-4 h-4 bg-[#3A86FF]/50 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/2 left-1/3 w-3 h-3 bg-[#FFD400]/60 rounded-full animate-bounce"></div>
                </div>
              </div>

              {/* Éléments flottants externes (optionnels - en dehors du conteneur rond) */}
              <div className="absolute -top-8 -right-8 w-10 h-10 bg-[#9B5DE5] rounded-full animate-bounce flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-sm">👉</span>
              </div>
              <div className="absolute -bottom-8 -left-8 w-8 h-8 bg-[#9B5DE5] rounded-full animate-pulse shadow-lg"></div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Je m'appelle{" "}
              <span className="font-bold text-[#9B5DE5]">Thibaut</span>, et
              j'aide les entrepreneurs comme vous à transformer leur liste mail
              en un véritable levier de revenus, fiable, régulier, et aligné
              avec leur image de marque.
            </p>

            <div className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-2xl p-8 border border-gray-800">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                <span className="font-bold text-[#FFD400]">Mon rôle :</span>{" "}
                transformer votre base mails en un système vivant, automatisé,
                et aligné avec votre image de marque.
              </p>

              <div className="space-y-4 text-gray-300">
                <p>Je ne suis pas là pour vous vendre des rêves.</p>
                <p className="font-semibold text-white">
                  Je suis là pour créer, avec vous, un système d'email marketing
                  qui rapporte — sans complexité, sans promesse floue, sans vous
                  trahir.
                </p>
              </div>
            </div>

            <div>
              <p className="text-lg text-gray-300 mb-4">
                Mon approche repose sur trois principes :{" "}
                <span className="text-[#9B5DE5] font-semibold">clarté</span>,{" "}
                <span className="text-[#3A86FF] font-semibold">
                  personnalisation
                </span>
                ,{" "}
                <span className="text-[#FFD400] font-semibold">efficacité</span>
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
      </div>
    </section>
  );
}

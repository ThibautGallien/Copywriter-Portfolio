"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const problems = [
  "Vos emails représentent une petite partie de vos revenus.",
  "Vous perdez de l'argent par manque d'une stratégie claire.",
  "Vous avez des produits de qualité, mais votre communauté n'en entend jamais parler au bon moment.",
  "Vous avez l'impression de devoir tout faire vous-même, sans jamais avoir de résultats concrets.",
  "Vos prospects vous oublient, faute d'emails réguliers pour entretenir la relation",
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-[#0D0D0D] relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -right-32 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-8 text-white text-center">
            Votre liste mail pourrait devenir votre
            <span className="text-[#9B5DE5]">
              {" "}
              meilleure source de revenus
            </span>{" "}
            mais...
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 bg-red-900/10 border border-red-500/20 rounded-xl"
            >
              <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-300 leading-relaxed">{problem}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

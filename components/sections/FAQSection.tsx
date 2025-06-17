"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "Que fait exactement un copywriter ?",
    answer:
      "Un copywriter crée du contenu persuasif qui pousse à l'action : pages de vente, emails, publicités, landing pages... L'objectif est de transformer vos prospects en clients payants grâce au pouvoir des mots.",
  },
  {
    question:
      "Comment puis-je savoir que j'aurai un retour sur investissement ?",
    answer:
      "Chaque projet est basé sur des métriques mesurables : taux de conversion, revenus générés, ROI... Je fournis des rapports détaillés et ma garantie résultat vous protège entièrement.",
  },
  {
    question: "Travaillez-vous avec des grandes ou petites entreprises ?",
    answer:
      "Je travaille principalement avec des entrepreneurs et PME (1M€ à 50M€ de CA) qui veulent scaler rapidement. Mon approche s'adapte à votre taille et vos objectifs.",
  },
  {
    question: "Pourquoi choisir Thibaut comme copywriter ?",
    answer:
      "Contrairement aux autres, je combine copywriting de persuasion + automatisation marketing + stratégie business. Vous n'avez qu'un seul interlocuteur pour tout votre écosystème de vente.",
  },
  {
    question: "Pouvez-vous garantir des résultats ?",
    answer:
      "Oui ! Ma triple garantie couvre les délais, les résultats et votre satisfaction. Si vous n'êtes pas 100% satisfait, vous êtes remboursé intégralement.",
  },
  {
    question: "Qu'est-ce qui est inclus dans le copywriting ?",
    answer:
      "Selon votre besoin : research + avatar client, headlines magnétiques, structure de vente, emails de suivi, optimisations A/B, formation de votre équipe, et suivi des performances.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#0D0D0D] relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
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
              ❓ FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-4">
            VOUS AVEZ DES QUESTIONS,
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              NOUS AVONS DES RÉPONSES.
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Toutes les réponses aux questions les plus fréquentes sur mes
            services de copywriting.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors duration-300">
                  <CardContent className="p-0">
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full text-left p-6 text-white font-semibold text-lg hover:bg-gray-800/30 transition-colors rounded-lg flex justify-between items-center group"
                    >
                      <span className="font-space-grotesk">{faq.question}</span>
                      <div className="ml-4 flex-shrink-0">
                        {openIndex === index ? (
                          <Minus className="w-5 h-5 text-[#9B5DE5] group-hover:scale-110 transition-transform duration-200" />
                        ) : (
                          <Plus className="w-5 h-5 text-[#9B5DE5] group-hover:scale-110 transition-transform duration-200" />
                        )}
                      </div>
                    </button>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-gray-800/50 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

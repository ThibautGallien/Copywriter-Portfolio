"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "Pourquoi prendre un freelance plutôt qu'une agence ?",
    answer:
      "Un freelance s’implique personnellement. Vous avez un seul interlocuteur, disponible, réactif, qui connaît votre dossier dans les moindres détails — pas un compte perdu au milieu de dizaines d’autres.",
  },
  {
    question: "Combien ça coûte ?",
    answer:
      "L’audit est gratuit. Ensuite, le tarif dépend de la complexité du projet. Mais une chose est sûre : chaque euro investi doit vous rapporter au moins deux fois plus. Sinon, je continue à travailler gratuitement.",
  },
  {
    question: "Est-ce que je garde le contrôle sur ce qu'il se passe ?",
    answer:
      "Oui. Vous validez chaque livrable, chaque email, chaque décision stratégique. Vous avez la vision, je m’occupe de l’exécution.",
  },
  {
    question:
      "Et si j’ai une petite liste, est-ce que ça vaut vraiment le coup ?",
    answer:
      "Justement. Une petite liste bien activée peut générer plus qu’une grosse liste mal utilisée. Tout est dans la qualité, pas la taille.",
  },
  {
    question:
      "Est-ce que ça va vraiment fonctionner pour mon type de business ?",
    answer:
      "Si vous avez une offre, des clients, et une audience — même modeste — alors oui, l’email peut devenir un levier puissant pour vous.",
  },
  {
    question: "Et si je ne suis pas à l’aise avec la technique ?",
    answer:
      "Aucun souci. Je gère toute la partie technique : outils, automatisations, intégrations. Vous restez concentré sur votre cœur de métier.",
  },
  {
    question: "Combien de temps avant de voir les premiers résultats ?",
    answer:
      "Dès les premières semaines, vous commencez à voir les premiers effets. Et les résultats s’amplifient au fil des optimisations mensuelles.",
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
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-4">
            VOUS AVEZ ENCORE DES QUESTIONS ?
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              JE VOUS RÉPONDS
            </span>
          </h2>
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

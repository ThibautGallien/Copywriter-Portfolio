"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "Comment vous suivez précisément le CA généré par vos emails ?",
    answer:
      "J'utilise des UTM et pixels de tracking pour mesurer chaque conversion. Vous avez accès à un dashboard où vous voyez en temps réel les revenus générés par chaque email. Transparence totale, pas de zone floue.",
  },
  {
    question: "Et si ma liste est petite (moins de 500 abonnés) ?",
    answer:
      "Parfait ! Une petite liste engagée vaut mieux qu'une grosse liste dormante. J'ai vu des listes de 200 personnes générer plus que des listes de 5000. La taille ne fait pas tout, l'engagement fait tout.",
  },
  {
    question:
      "Vous ne garantissez aucun résultat, comment puis-je vous faire confiance ?",
    answer:
      "Au contraire ! Ma rémunération dépend directement de vos résultats. Si vos emails ne génèrent pas plus de revenus, je ne gagne rien. C'est ma meilleure garantie : mon succès est lié au vôtre.",
  },
  {
    question: "30% ça me semble élevé comme commission...",
    answer:
      "Regardons les chiffres : si je vous fais gagner 2000€/mois supplémentaires, je prends 600€ et vous gardez 1400€. Vous préférez 100% de rien ou 70% de beaucoup plus ? Mon travail se paie sur les résultats, pas sur les promesses.",
  },
  {
    question: "Je n'ai pas le temps de m'occuper de mes emails...",
    answer:
      "C'est exactement pour ça que j'existe ! Vous me donnez accès à vos outils, je m'occupe de tout : stratégie, rédaction, envoi, optimisation. Vous n'avez qu'à regarder les revenus arriver.",
  },
  {
    question: "Comment je sais que vous ne allez pas spammer ma liste ?",
    answer:
      "Spammer votre liste serait détruire ma source de revenus ! Plus votre audience vous fait confiance, plus elle achète, plus je gagne. Mon intérêt est de préserver et renforcer cette confiance, pas de la détruire.",
  },
  {
    question: "Et si on veut arrêter la collaboration ?",
    answer:
      "Vous pouvez arrêter quand vous voulez, sans préavis. Vous gardez tous les emails, séquences et systèmes créés. Je vous forme même pour continuer seul si vous le souhaitez. Pas d'engagement contraignant.",
  },
  {
    question: "Combien de temps avant de voir les premiers résultats ?",
    answer:
      "Généralement 2-3 semaines pour les premières optimisations, 1-2 mois pour voir l'impact complet. Mais chaque situation est différente : une liste très engagée peut réagir en quelques jours.",
  },
];

export default function FAQObjectionsSection() {
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
            Vos questions légitimes
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              (et mes réponses franches)
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Je comprends vos hésitations. Voici les questions que tous mes
            prospects me posent.
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
                      <span className="font-space-grotesk pr-4">
                        {faq.question}
                      </span>
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

        {/* Bottom reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border-amber-500/30 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-[#FFD400] mr-3" />
                <h3 className="text-xl font-bold font-space-grotesk">
                  Une question que je ne couvre pas ?
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Réservez votre audit gratuit. On aura 30 minutes pour parler de
                votre situation spécifique et je répondrai à toutes vos
                questions en détail.
              </p>
              <p className="text-sm text-gray-400">
                Même si on ne travaille pas ensemble, vous repartirez avec des
                conseils actionnables pour votre business.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

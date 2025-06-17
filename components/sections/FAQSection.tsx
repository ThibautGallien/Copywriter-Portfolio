// components/sections/FAQSection.tsx
"use client";

import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            VOUS AVEZ DES QUESTIONS,
            <br />
            NOUS AVONS DES RÉPONSES.
          </h2>

          <div className="space-y-4 mt-12">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-700 rounded-lg">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full text-left p-6 text-white font-semibold text-lg hover:bg-gray-600 transition-colors rounded-lg flex justify-between items-center"
                >
                  {faq.question}
                  <span className="text-2xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-300">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

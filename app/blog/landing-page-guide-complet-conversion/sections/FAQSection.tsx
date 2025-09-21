"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection } from "@/components/blog/BlogComponents";

const faqs = [
  {
    question: "C'est quoi une landing page ?",
    answer:
      "Une landing page est une page web conçue pour un objectif unique : inciter le visiteur à réaliser une action précise, comme s'inscrire, acheter, télécharger ou demander une démo.",
  },
  {
    question: "Quels outils utiliser pour créer une landing page ?",
    answer:
      "WordPress avec Elementor, outils dédiés comme Unbounce ou Leadpages, ou plateformes marketing comme HubSpot qui intègrent directement la gestion des leads.",
  },
  {
    question: "Combien de temps pour créer une landing page efficace ?",
    answer:
      "Quelques heures avec un constructeur visuel et un template, plusieurs jours pour un design sur mesure. Le plus important : tester rapidement et optimiser en continu.",
  },
  {
    question: "Quels KPIs suivre pour mesurer les performances ?",
    answer:
      "Taux de conversion, coût par lead, taux de rebond, temps passé sur la page, et surtout la qualité des leads générés via votre CRM.",
  },
];

export default function FAQSection() {
  return (
    <ArticleSection title="FAQ – Landing Page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <h4 className="font-semibold text-[#9B5DE5] mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-300 text-sm">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </ArticleSection>
  );
}

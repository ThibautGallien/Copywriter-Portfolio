"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection } from "@/components/blog/BlogComponents";

const faqs = [
  {
    question: "Combien de temps faut-il pour apprendre le copywriting ?",
    answer:
      "Les bases s'apprennent en 2 à 3 semaines de pratique intensive. Mais devenir vraiment bon prend 6 à 12 mois de tests réguliers et d'analyses de résultats. L'erreur classique : consommer de la théorie pendant des mois sans jamais écrire une seule ligne. Commence par réécrire tes propres pages de vente, mesure l'impact avec des tests A/B, ajuste en fonction des données. Le copywriting, c'est comme le vélo : tu apprends en pratiquant, pas en lisant des livres.",
  },
  {
    question:
      "Le copywriting fonctionne-t-il pour tous les types de business ?",
    answer:
      "Oui, mais différemment selon ton cycle de vente. Pour un produit e-commerce à 20€, un titre percutant et un CTA clair suffisent souvent. Pour du B2B à 50 000€, tu auras besoin de séquences emails longues et de pages de vente détaillées qui adressent 15 objections. Le principe reste identique : comprendre ce qui bloque ton prospect et lever ces objections avec les bons mots au bon moment. Même les business 'ennuyeux' (assurance, compta, logistique) ont besoin de copywriting. La différence, c'est le ton : plus factuel, moins émotionnel.",
  },
  {
    question: "Faut-il écrire long ou court ?",
    answer:
      "La vraie réponse : aussi long que nécessaire pour convaincre, aussi court que possible pour garder l'attention. J'ai des pages de vente à 12% de conversion avec 3 000 mots et d'autres à 8% avec 300 mots. Tout dépend de la complexité de ton offre, du niveau de confiance initial, et du prix. Règle simple : si ton lecteur pose encore des questions après lecture, c'est trop court. S'il décroche avant la fin, c'est trop long. Teste. Mesure. Ajuste.",
  },
  {
    question: "Peut-on faire du copywriting ET du SEO en même temps ?",
    answer:
      "Non seulement tu peux, mais tu dois. Le SEO t'amène du trafic qualifié. Le copywriting convertit ce trafic en clients. L'erreur classique : écrire pour Google et oublier l'humain. Un article optimisé SEO avec un copy faible génère 10 000 visites mais zéro vente. À l'inverse, un copy parfait sans SEO ne sera jamais lu. La solution : structure SEO solide (titres Hn, mots-clés, maillage interne) + titres orientés conversion + contenu qui répond aux vraies questions de ton audience. Les deux sont complémentaires, pas antagonistes.",
  },
];

export default function FAQSection() {
  return (
    <ArticleSection title="FAQ – Copywriting">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <h4 className="font-semibold text-[#9B5DE5] mb-3 text-lg">
                  {faq.question}
                </h4>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </ArticleSection>
  );
}

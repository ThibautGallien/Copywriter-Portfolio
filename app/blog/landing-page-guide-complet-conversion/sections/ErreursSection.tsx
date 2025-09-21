"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, MistakesList } from "@/components/blog/BlogComponents";

const commonMistakes = [
  {
    title: "Trop de texte ou jargon technique",
    description:
      "Les visiteurs viennent pour une solution, pas pour lire un roman",
  },
  {
    title: "Formulaire trop long",
    description: "Chaque champ supplémentaire augmente les chances d'abandon",
  },
  {
    title: "CTA confus ou multiples",
    description:
      "Un bouton 'envoyer' est trop vague, et trop de CTA créent de l'indécision",
  },
  {
    title: "Page non adaptée au mobile",
    description:
      "Plus de 60% du trafic vient du mobile, c'est une priorité absolue",
  },
  {
    title: "Manque de cohérence avec l'annonce",
    description:
      "Si votre pub promet X mais votre page parle de Y, la confiance s'effondre",
  },
];

export default function ErreursSection() {
  return (
    <ArticleSection id="erreurs-eviter" title="Les erreurs à éviter absolument">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="text-gray-300 leading-relaxed mb-8">
          Même avec la meilleure intention, certaines erreurs peuvent réduire à
          néant l'efficacité d'une landing page. Les éviter, c'est déjà gagner
          en conversions.
        </p>

        <MistakesList mistakes={commonMistakes} />

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <Card className="bg-red-900/20 border border-red-500/30">
            <CardContent className="p-6">
              <h4 className="font-bold text-red-400 mb-3">
                ❌ Mauvaise landing page
              </h4>
              <div className="bg-gray-800/50 rounded p-4 text-sm">
                <p className="font-medium mb-2">
                  Titre : "Bienvenue sur notre site !"
                </p>
                <p className="mb-2">
                  Découvrez nos produits, nos services, nos actualités...
                </p>
                <p className="mb-2">
                  Suivez-nous aussi sur nos réseaux sociaux.
                </p>
                <p>Contactez-nous pour plus d'informations.</p>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                Trop de choix, aucun focus, message dilué
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-900/20 border border-green-500/30">
            <CardContent className="p-6">
              <h4 className="font-bold text-green-400 mb-3">
                ✅ Bonne landing page
              </h4>
              <div className="bg-gray-800/50 rounded p-4 text-sm">
                <p className="font-medium mb-2">
                  Titre : "Doublez vos conversions en 30 jours"
                </p>
                <p className="mb-2">
                  Téléchargez notre guide gratuit de 15 pages.
                </p>
                <p className="mb-2">
                  ✓ Stratégies éprouvées ✓ Exemples concrets
                </p>
                <p>👇 Entrez votre email pour recevoir le guide</p>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                Message clair, bénéfice précis, action simple
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </ArticleSection>
  );
}

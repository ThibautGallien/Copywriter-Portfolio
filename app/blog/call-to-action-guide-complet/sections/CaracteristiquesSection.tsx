"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";
import { CheckCircle, X } from "lucide-react";

const characteristics = [
  {
    title: "Une formulation claire et actionnable",
    description:
      'Votre CTA doit dire exactement ce qu\'il propose. Pas de "Cliquez ici" flou et générique.',
    tips: [
      "Utilisez des verbes d'action : Télécharger, Découvrir, S'inscrire, Demander",
      'Encore mieux : passez à la première personne. "Je télécharge", "Je découvre"',
      "C'est plus engageant et ça renforce l'effet d'appropriation",
    ],
    icon: "📝",
  },
  {
    title: "Mettre en avant le bénéfice utilisateur",
    description:
      "Un bon CTA ne décrit pas seulement l'action. Il met en lumière le gain immédiat.",
    tips: [
      '"Télécharger le PDF" → froid et neutre',
      '"Téléchargez la checklist pour tripler vos taux d\'ouverture" → clair, concret, orienté résultat',
      "C'est ce bénéfice qui déclenche le clic, pas l'intitulé technique",
    ],
    icon: "🎯",
  },
  {
    title: "Une visibilité optimale",
    description:
      "Un CTA invisible, c'est comme une sortie de secours sans panneau lumineux.",
    tips: [
      "Au-dessus de la ligne de flottaison : pour capter ceux qui ne scrollent pas",
      "Dans le corps du texte : quand le lecteur est déjà engagé",
      "En fin de contenu : pour convertir ceux qui vont jusqu'au bout",
      "Si vous avez plusieurs CTA, hiérarchisez : un principal, des secondaires discrets",
    ],
    icon: "👁️",
  },
  {
    title: "Un design qui attire l'œil sans casser la cohérence visuelle",
    description: "Le CTA doit ressortir, pas agresser.",
    tips: [
      "Utilisez un contraste fort avec le fond, sans trahir votre charte graphique",
      "Assurez-vous qu'il soit parfaitement cliquable sur mobile : gros bouton, zone de clic confortable",
      "Un bon design, c'est un CTA qu'on ne peut pas rater… mais qui reste cohérent avec votre univers de marque",
    ],
    icon: "🎨",
  },
  {
    title: "Créer l'urgence ou l'exclusivité",
    description:
      "Un CTA doit parfois donner une raison d'agir maintenant plutôt que plus tard.",
    tips: [
      '"Téléchargez maintenant"',
      "\"Profitez de l'offre jusqu'à ce soir\"",
      '"Places limitées"',
      "Attention : l'urgence factice agace. Mais quand elle est réelle, elle pousse à passer à l'action tout de suite",
    ],
    icon: "⚡",
  },
];

const ctaExamples = [
  {
    type: "Mauvais exemple",
    text: "Cliquez ici",
    reason: "Vague, pas de bénéfice, aucun contexte",
    isGood: false,
  },
  {
    type: "Bon exemple",
    text: "Je télécharge ma checklist gratuite",
    reason: "Première personne, bénéfice clair, action précise",
    isGood: true,
  },
  {
    type: "Mauvais exemple",
    text: "En savoir plus",
    reason: "Générique, ne dit pas ce qu'on va découvrir",
    isGood: false,
  },
  {
    type: "Bon exemple",
    text: "Découvrez comment doubler vos ventes en 30 jours",
    reason: "Bénéfice mesurable, temporalité claire, résultat concret",
    isGood: true,
  },
];

export default function CaracteristiquesSection() {
  return (
    <ArticleSection
      id="caracteristiques"
      title="Les 5 caractéristiques d'un Call to Action efficace"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-12"
      >
        <p className="text-gray-300 leading-relaxed mb-8">
          Un CTA n'a rien de magique. Mais quand il coche les bonnes cases, il
          peut transformer un simple lecteur en client. Voyons les cinq
          ingrédients qui font la différence.
        </p>

        {/* Caractéristiques principales */}
        <div className="space-y-8 mb-12">
          {characteristics.map((char, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{char.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#9B5DE5] mb-3">
                        {char.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {char.description}
                      </p>
                      <div className="space-y-2">
                        {char.tips.map((tip, tipIndex) => (
                          <div
                            key={tipIndex}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-1 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Exemples pratiques */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-[#9B5DE5]">
            Exemples concrets : bon vs mauvais CTA
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {ctaExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`border-2 ${
                    example.isGood
                      ? "bg-green-900/20 border-green-500/30"
                      : "bg-red-900/20 border-red-500/30"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {example.isGood ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <X className="w-5 h-5 text-red-400" />
                      )}
                      <span
                        className={`font-bold ${
                          example.isGood ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {example.type}
                      </span>
                    </div>
                    <div className="bg-gray-800/50 rounded p-3 mb-3">
                      <p className="font-mono text-sm text-white">
                        "{example.text}"
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm">{example.reason}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <Highlight>
          Chaque élément d'une landing page doit répondre à une question :
          <span className="text-[#FFD400] font-bold">
            "Est-ce que cela rapproche le visiteur de l'action attendue ?"
          </span>
        </Highlight>
      </motion.div>
    </ArticleSection>
  );
}

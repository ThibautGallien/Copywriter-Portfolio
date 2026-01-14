"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";
import { CheckCircle, X } from "lucide-react";

// Custom useInView hook
function useInView(ref: any, options = {}) {
  const [isInView, setIsInView] = useState(false);
  const { once = false, margin = "0px" }: any = options;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsInView(false);
        }
      },
      { rootMargin: margin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, once, margin]);

  return isInView;
}

const characteristics = [
  {
    title: "Une formulation claire et actionnable",
    description:
      'Ton CTA doit dire exactement ce qu\'il propose. Pas de "Cliquez ici" flou et générique.',
    tips: [
      "Utilise des verbes d'action : Télécharger, Découvrir, S'inscrire, Demander",
      'Encore mieux : passe à la première personne. "Je télécharge", "Je découvre"',
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
      '"Télécharge la checklist pour tripler tes taux d\'ouverture" → clair, concret, orienté résultat',
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
      "Si tu as plusieurs CTA, hiérarchise : un principal, des secondaires discrets",
    ],
    icon: "👁️",
  },
  {
    title: "Un design qui attire l'œil sans casser la cohérence visuelle",
    description: "Le CTA doit ressortir, pas agresser.",
    tips: [
      "Utilise un contraste fort avec le fond, sans trahir ta charte graphique",
      "Assure-toi qu'il soit parfaitement cliquable sur mobile : gros bouton, zone de clic confortable",
      "Un bon design, c'est un CTA qu'on ne peut pas rater... mais qui reste cohérent avec ton univers de marque",
    ],
    icon: "🎨",
  },
  {
    title: "Créer l'urgence ou l'exclusivité",
    description:
      "Un CTA doit parfois donner une raison d'agir maintenant plutôt que plus tard.",
    tips: [
      '"Télécharge maintenant"',
      "\"Profite de l'offre jusqu'à ce soir\"",
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
    text: "Découvre comment doubler tes ventes en 30 jours",
    reason: "Bénéfice mesurable, temporalité claire, résultat concret",
    isGood: true,
  },
];

// Characteristic Card Component
function CharacteristicCard({ char, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card className="bg-white border-2 border-neutral-200 hover:border-blue-200 transition-all h-full">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="text-4xl flex-shrink-0">{char.icon}</div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {char.title}
                </h3>
                <p className="text-neutral-600 mb-5 leading-relaxed">
                  {char.description}
                </p>

                {/* Tips */}
                <div className="space-y-3 bg-neutral-50 rounded-xl p-5 border border-neutral-100">
                  {char.tips.map((tip: string, tipIndex: number) => (
                    <motion.div
                      key={tipIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + tipIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 text-sm leading-relaxed">
                        {tip}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

// Example Card Component
function ExampleCard({ example, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card
          className={`border-2 h-full ${
            example.isGood
              ? "bg-blue-50 border-blue-200 hover:border-blue-300"
              : "bg-red-50 border-red-200 hover:border-red-300"
          }`}
        >
          <CardContent className="p-6">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              {example.isGood ? (
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center">
                  <X className="w-4 h-4 text-white" />
                </div>
              )}
              <span
                className={`font-bold text-sm ${
                  example.isGood ? "text-blue-700" : "text-red-700"
                }`}
              >
                {example.type}
              </span>
            </div>

            {/* CTA Text */}
            <div className="bg-white rounded-xl p-4 mb-4 border border-neutral-200 shadow-sm">
              <p className="font-semibold text-neutral-900">
                &quot;{example.text}&quot;
              </p>
            </div>

            {/* Reason */}
            <p className="text-neutral-600 text-sm leading-relaxed">
              {example.reason}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function CaracteristiquesSection() {
  return (
    <ArticleSection
      id="caracteristiques"
      title="Les 5 caractéristiques d'un Call to Action efficace"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-8"
      >
        <p className="text-lg text-neutral-600 leading-relaxed mb-10">
          Un CTA n'a rien de magique. Mais quand il coche les bonnes cases, il
          peut transformer un simple lecteur en client. Voyons les cinq
          ingrédients qui font la différence.
        </p>

        {/* Caractéristiques principales */}
        <div className="space-y-6 mb-16">
          {characteristics.map((char, index) => (
            <CharacteristicCard key={index} char={char} index={index} />
          ))}
        </div>

        {/* Exemples pratiques */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-blue-500 rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Exemples concrets : bon vs mauvais CTA
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ctaExamples.map((example, index) => (
              <ExampleCard key={index} example={example} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Highlight>
            Chaque élément d'une landing page doit répondre à une question :{" "}
            <span className="text-blue-600 font-bold">
              &quot;Est-ce que cela rapproche le visiteur de l&apos;action
              attendue ?&quot;
            </span>
          </Highlight>
        </motion.div>
      </motion.div>
    </ArticleSection>
  );
}

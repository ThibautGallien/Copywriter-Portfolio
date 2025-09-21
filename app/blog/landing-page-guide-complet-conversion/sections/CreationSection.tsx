"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";

const creationSteps = [
  {
    step: "1",
    title: "Définir l'objectif précis",
    description:
      "Newsletter, vente, démo, téléchargement ? Un objectif clair guide tous vos choix.",
  },
  {
    step: "2",
    title: "Choisir le bon outil",
    description:
      "WordPress + Elementor, Unbounce, Instapage, ou outils intégrés comme HubSpot.",
  },
  {
    step: "3",
    title: "Rédiger le contenu",
    description:
      "USP, titre, sous-titre, bénéfices, CTA. Gardez le message court et orienté utilisateur.",
  },
  {
    step: "4",
    title: "Designer la page",
    description:
      "Maquette simple, visuels cohérents, hiérarchie visuelle vers le CTA.",
  },
  {
    step: "5",
    title: "Publier et tester",
    description:
      "Vérifiez l'affichage sur tous supports et testez le processus complet.",
  },
  {
    step: "6",
    title: "Optimiser en continu",
    description:
      "Tests A/B, analyse des performances, ajustements basés sur les données.",
  },
];

export default function CreationSection() {
  return (
    <ArticleSection
      id="creation"
      title="Étapes pour créer votre propre Landing Page"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="text-gray-300 leading-relaxed mb-8">
          Passons de la théorie à la pratique : voici la méthode simple et
          efficace pour concevoir une landing page qui convertit.
        </p>

        <div className="space-y-6">
          {creationSteps.map((step, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Highlight>
          Une landing page n'est jamais figée.
          <span className="text-[#FFD400] font-bold">
            {" "}
            Analysez, testez, optimisez. C'est l'amélioration continue qui fait
            la différence.
          </span>
        </Highlight>
      </motion.div>
    </ArticleSection>
  );
}

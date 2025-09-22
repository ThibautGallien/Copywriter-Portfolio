"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";
import { CheckCircle, Target } from "lucide-react";

const checklistItems = [
  {
    category: "Formulation",
    items: [
      "Mon CTA utilise un verbe d'action clair",
      "Il indique exactement ce que va obtenir le visiteur",
      "Le bénéfice est explicite et mesurable",
      'J\'évite les formulations vagues comme "En savoir plus"',
    ],
  },
  {
    category: "Design & Visibilité",
    items: [
      "Mon CTA ressort visuellement du reste de la page",
      "La couleur contraste suffisamment avec le fond",
      "Le bouton est assez gros pour être cliquable sur mobile",
      "Il est placé à un endroit stratégique (au-dessus de la ligne de flottaison ou après engagement)",
    ],
  },
  {
    category: "Cohérence",
    items: [
      "Mon CTA est aligné avec le contenu de la page",
      "Il correspond au niveau de maturité de mon audience",
      "La promesse du CTA est tenue sur la page suivante",
      "Il n'y a pas trop de CTA concurrents sur la même page",
    ],
  },
  {
    category: "Optimisation",
    items: [
      "J'ai testé différentes versions de mon CTA",
      "Je mesure les clics ET les conversions réelles",
      "Je documente ce qui fonctionne pour mes futures campagnes",
      "Je révise régulièrement mes CTA en fonction des performances",
    ],
  },
  {
    category: "Technique",
    items: [
      "Mon CTA fonctionne parfaitement sur mobile",
      "Les liens pointent vers les bonnes pages",
      "Il n'y a pas d'erreur 404 après clic",
      "Le temps de chargement de la page suivante est acceptable",
    ],
  },
];

const scoringGuide = {
  excellent: {
    min: 18,
    color: "text-green-400",
    message: "Excellent ! Vos CTA sont optimisés",
  },
  good: {
    min: 14,
    color: "text-yellow-400",
    message: "Bien, mais quelques améliorations possibles",
  },
  average: {
    min: 10,
    color: "text-orange-400",
    message: "Moyen, des optimisations importantes nécessaires",
  },
  poor: {
    min: 0,
    color: "text-red-400",
    message: "Attention ! Vos CTA ont besoin d'une refonte complète",
  },
};

const quickWins = [
  {
    action: 'Changez "Cliquez ici" par "Je télécharge le guide"',
    impact: "Impact immédiat sur la clarté",
    difficulty: "Facile",
  },
  {
    action: "Augmentez la taille de vos boutons CTA",
    impact: "Meilleure visibilité et clics mobiles",
    difficulty: "Facile",
  },
  {
    action: "Testez une couleur plus contrastée",
    impact: "Peut doubler les clics",
    difficulty: "Facile",
  },
  {
    action: "Ajoutez un bénéfice chiffré dans le CTA",
    impact: "Meilleure conversion",
    difficulty: "Moyen",
  },
  {
    action: "Supprimez les CTA secondaires sur vos landing pages",
    impact: "Focus sur l'action principale",
    difficulty: "Facile",
  },
];

const finalReminder = {
  title: "Rappel important",
  content:
    "Un CTA n'est pas un détail graphique. C'est le levier qui transforme vos lecteurs en prospects, puis vos prospects en clients.",
  action:
    "Bien pensé, il peut multiplier vos conversions sans que vous ayez besoin de plus de trafic.",
};

export default function ChecklistSection() {
  return (
    <ArticleSection
      id="checklist"
      title="Checklist rapide pour créer un CTA qui convertit"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-12"
      >
        <p className="text-gray-300 leading-relaxed mb-8">
          Voici une checklist simple à garder sous la main avant de publier
          n'importe quel CTA. Cochez chaque point pour vous assurer que votre
          CTA a toutes les chances de convertir.
        </p>

        {/* Checklist principale */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/30">
            <CardContent className="p-6">
              <div className="space-y-8">
                {checklistItems.map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-bold text-[#FFD400] mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      {category.category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {category.items.map((item, itemIndex) => (
                        <label
                          key={itemIndex}
                          className="flex items-start gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            className="mt-1 w-4 h-4 text-[#9B5DE5] bg-gray-800 border-gray-600 rounded focus:ring-[#9B5DE5] focus:ring-2"
                          />
                          <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Guide de notation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 p-4 bg-gray-800/50 rounded-lg"
              >
                <h4 className="font-bold text-[#9B5DE5] mb-3">
                  Guide de notation
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className={scoringGuide.excellent.color}>
                      18-20 points
                    </span>
                    <span className="text-gray-300">
                      {scoringGuide.excellent.message}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={scoringGuide.good.color}>
                      14-17 points
                    </span>
                    <span className="text-gray-300">
                      {scoringGuide.good.message}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={scoringGuide.average.color}>
                      10-13 points
                    </span>
                    <span className="text-gray-300">
                      {scoringGuide.average.message}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={scoringGuide.poor.color}>0-9 points</span>
                    <span className="text-gray-300">
                      {scoringGuide.poor.message}
                    </span>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>

        {/* Quick wins */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-[#9B5DE5]">
            5 améliorations rapides à implémenter aujourd'hui
          </h3>
          <div className="space-y-4">
            {quickWins.map((win, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#06D6A0] text-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-2">
                          {win.action}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                          <span className="text-[#06D6A0]">
                            <strong>Impact :</strong> {win.impact}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span className="text-[#FFD400]">
                            <strong>Difficulté :</strong> {win.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rappel final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-r from-[#FFD400]/10 to-[#F59E0B]/10 border-[#FFD400]/30">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-8 h-8 text-[#FFD400] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#FFD400] mb-3">
                {finalReminder.title}
              </h3>
              <p className="text-gray-300 mb-4">{finalReminder.content}</p>
              <p className="text-[#9B5DE5] font-medium">
                {finalReminder.action}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <Highlight>
          Si vous ne cochez pas toutes les cases, votre CTA risque de passer
          inaperçu.
          <span className="text-[#9B5DE5] font-bold">
            {" "}
            Si vous les cochez toutes, vous posez la première brique d'un
            système qui rapporte.
          </span>
        </Highlight>
      </motion.div>
    </ArticleSection>
  );
}

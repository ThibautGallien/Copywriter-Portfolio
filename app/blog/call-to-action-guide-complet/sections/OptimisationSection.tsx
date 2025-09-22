"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";
import { BarChart3, Target, TrendingUp, Eye } from "lucide-react";

const abTestElements = [
  {
    element: "Le libellé",
    examples: [
      '"Je télécharge la checklist" vs "Télécharger la checklist gratuite"',
    ],
    impact: "Peut changer le taux de clic de 15-30%",
    icon: "📝",
  },
  {
    element: "La couleur",
    examples: [
      "Un bouton rouge qui attire l'œil vs un bouton vert plus rassurant",
    ],
    impact: "Différence de 20-40% selon le contexte",
    icon: "🎨",
  },
  {
    element: "La taille",
    examples: ["Petit et discret vs large et impossible à manquer"],
    impact: "Les gros boutons convertissent généralement mieux",
    icon: "📏",
  },
  {
    element: "La position",
    examples: ["En haut de page vs en milieu de contenu"],
    impact: "L'emplacement peut doubler les conversions",
    icon: "📍",
  },
];

const keyMetrics = [
  {
    metric: "CTR (Click-Through Rate)",
    description: "Pour savoir si votre CTA attire l'attention",
    calculation: "Nombre de clics / Nombre d'impressions",
    goodRate: "> 2-3% en général, > 5% excellent",
    icon: Eye,
    color: "from-[#9B5DE5] to-[#7C3AED]",
  },
  {
    metric: "Taux de conversion post-clic",
    description: "Pour vérifier si l'action derrière le bouton est pertinente",
    calculation: "Actions complétées / Clics sur le CTA",
    goodRate: "Varie selon le secteur (10-40%)",
    icon: Target,
    color: "from-[#3A86FF] to-[#0EA5E9]",
  },
  {
    metric: "Scroll depth",
    description:
      "Pour comprendre à quel moment vos visiteurs sont prêts à cliquer",
    calculation: "Pourcentage de page vue avant clic",
    goodRate: "Utile pour placer les CTA au bon endroit",
    icon: TrendingUp,
    color: "from-[#FFD400] to-[#F59E0B]",
  },
];

const practicalExample = {
  scenario: "Test de deux CTA sur une landing page",
  versionA: {
    text: "Je télécharge la checklist",
    result: "Plus de clics",
    conversion: "Moins d'inscriptions confirmées",
  },
  versionB: {
    text: "Télécharger la checklist gratuite",
    result: "Moins de clics",
    conversion: "Plus d'inscriptions confirmées",
  },
  conclusion:
    'Un CTA plus engageant ("Je télécharge") attire peut-être moins, mais filtre mieux les curieux.',
  lesson:
    "Les tests vous montrent ce que vos visiteurs veulent vraiment, pas ce que vous imaginez.",
};

const optimizationTips = [
  "Ne vous contentez pas de regarder le nombre de clics - la conversion réelle compte plus",
  "Testez un seul élément à la fois pour identifier ce qui fonctionne vraiment",
  "Laissez tourner vos tests suffisamment longtemps pour avoir des données significatives",
  "Documentez vos résultats pour créer une base de connaissances",
  "Parfois, un CTA qui convertit moins mais mieux qualifie est plus rentable",
];

export default function OptimisationSection() {
  return (
    <ArticleSection
      id="optimisation"
      title="Comment optimiser vos Call to Action grâce aux tests ?"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-12"
      >
        <p className="text-gray-300 leading-relaxed mb-8">
          Un CTA n'est jamais "parfait" dès le premier essai. Même un bouton qui
          fonctionne déjà bien peut être optimisé pour aller chercher encore
          plus de conversions. La clé, c'est le test.
        </p>

        {/* A/B Testing */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-[#9B5DE5]">
            L'A/B testing : votre meilleur allié
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Le principe est simple : vous créez deux versions de votre CTA et
            vous laissez les chiffres décider.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {abTestElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{element.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#FFD400] mb-2">
                          {element.element}
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="text-gray-400">Exemple :</span>
                            <p className="text-gray-300">
                              {element.examples[0]}
                            </p>
                          </div>
                          <div>
                            <span className="text-gray-400">Impact :</span>
                            <p className="text-[#06D6A0] font-medium">
                              {element.impact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <div className="bg-[#9B5DE5]/10 border border-[#9B5DE5]/30 rounded-lg p-4">
              <p className="text-[#9B5DE5] text-sm text-center font-medium">
                Ces petits changements peuvent parfois doubler vos clics.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Indicateurs clés */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-[#9B5DE5]">
            Les bons indicateurs à suivre
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Ne vous contentez pas de regarder le nombre de clics. Ce qui compte,
            c'est la conversion réelle derrière.
          </p>

          <div className="space-y-6">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <metric.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-[#FFD400] mb-2">
                          {metric.metric}
                        </h4>
                        <p className="text-gray-300 text-sm mb-3">
                          {metric.description}
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 text-xs">
                          <div>
                            <span className="text-gray-400">Calcul :</span>
                            <p className="text-gray-300">
                              {metric.calculation}
                            </p>
                          </div>
                          <div>
                            <span className="text-gray-400">Bon taux :</span>
                            <p className="text-[#06D6A0]">{metric.goodRate}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Exemple pratique */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-[#FFD400]/10 to-[#F59E0B]/10 border-[#FFD400]/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#FFD400] mb-4 flex items-center gap-2">
                <BarChart3 className="w-6 h-6" />
                Exemple pratique
              </h3>
              <p className="text-gray-300 mb-4">{practicalExample.scenario}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-gray-800/50 rounded p-4">
                  <h4 className="font-bold text-[#3A86FF] mb-2">Version A</h4>
                  <p className="text-gray-300 mb-2">
                    "{practicalExample.versionA.text}"
                  </p>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="text-gray-400">Résultat :</span>{" "}
                      {practicalExample.versionA.result}
                    </p>
                    <p>
                      <span className="text-gray-400">Conversion :</span>{" "}
                      {practicalExample.versionA.conversion}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded p-4">
                  <h4 className="font-bold text-[#06D6A0] mb-2">Version B</h4>
                  <p className="text-gray-300 mb-2">
                    "{practicalExample.versionB.text}"
                  </p>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="text-gray-400">Résultat :</span>{" "}
                      {practicalExample.versionB.result}
                    </p>
                    <p>
                      <span className="text-gray-400">Conversion :</span>{" "}
                      {practicalExample.versionB.conversion}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-gray-300 text-sm">
                  <strong>Conclusion :</strong> {practicalExample.conclusion}
                </p>
                <p className="text-[#9B5DE5] text-sm font-medium">
                  {practicalExample.lesson}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Conseils d'optimisation */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-[#9B5DE5]">
            Conseils pour optimiser efficacement
          </h3>
          <div className="space-y-3">
            {optimizationTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-3 bg-gray-900/30 rounded-lg"
              >
                <span className="w-6 h-6 bg-[#9B5DE5] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-gray-300 text-sm">{tip}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <Highlight>
          Et c'est cette boucle d'optimisation continue qui fait la différence
          entre un CTA moyen et un CTA qui rapporte tous les jours.
          <span className="text-[#FFD400] font-bold">
            {" "}
            Les tests vous montrent ce que vos visiteurs veulent vraiment, pas
            ce que vous imaginez.
          </span>
        </Highlight>
      </motion.div>
    </ArticleSection>
  );
}

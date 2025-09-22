"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";

const ctaFormats = [
  {
    type: "Le bouton",
    description: "La forme la plus visible, souvent colorée pour attirer l'œil",
    examples: ["Télécharger le guide", "Je m'inscris"],
  },
  {
    type: "Le lien texte",
    description:
      "Inséré dans un paragraphe, efficace quand il est contextualisé",
    examples: ["En savoir plus", "Découvrir l'offre"],
  },
  {
    type: "L'image cliquable",
    description:
      "Bannière ou visuel qui mène vers une action (utile en e-commerce)",
    examples: ["Bannière promo", "Visuel produit"],
  },
  {
    type: "Le pop-up",
    description: "Une fenêtre qui s'affiche en fonction du comportement",
    examples: ["Exit intent", "Temps passé sur page"],
  },
  {
    type: "Le CTA contextuel",
    description:
      "Intégré directement dans le contenu selon l'intention du lecteur",
    examples: ["Téléchargez la checklist associée", "Voir l'étude de cas"],
  },
];

const tunnelSteps = [
  {
    action: "Il transforme un simple lecteur en abonné",
    icon: "📖→📧",
  },
  {
    action: "Il pousse un prospect à tester un produit ou demander un devis",
    icon: "🤔→🔍",
  },
  {
    action: "Il incite un client hésitant à finaliser son achat",
    icon: "💭→💳",
  },
];

const stats = [
  "Plus de 70 % des sites n'utilisent pas de CTA efficace sur leurs pages clés",
  "Moins de 50 % des sites affichent un CTA visible en moins de 3 secondes",
  "Pourtant, un CTA optimisé peut augmenter de 80 % le taux de clic sur une landing page",
];

export default function DefinitionSection() {
  return (
    <ArticleSection id="definition" title="Qu'est-ce qu'un Call to Action ?">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-12"
      >
        <p className="text-gray-300 leading-relaxed mb-8">
          Un Call to Action (ou CTA) est tout simplement une invitation claire à
          agir. C'est le petit élément qui dit à votre visiteur quoi faire après
          avoir lu votre contenu ou découvert votre offre. Sans CTA, vous
          laissez votre audience dans le flou. Avec un CTA bien conçu, vous la
          guidez vers la prochaine étape de son parcours.
        </p>

        {/* Formats de CTA */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-[#9B5DE5]">
            Les formats les plus courants
          </h3>
          <div className="space-y-4">
            {ctaFormats.map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-[#FFD400] mb-2">
                      {format.type}
                    </h4>
                    <p className="text-gray-300 text-sm mb-3">
                      {format.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {format.examples.map((example, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#3A86FF]/20 text-[#3A86FF] rounded-full text-xs"
                        >
                          "{example}"
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rôle dans le tunnel de conversion */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-[#9B5DE5]">
            Son rôle dans le tunnel de conversion
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Le CTA agit comme un panneau de signalisation dans votre tunnel
            marketing.
          </p>

          <div className="space-y-4 mb-6">
            {tunnelSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-lg"
              >
                <span className="text-2xl">{step.icon}</span>
                <span className="text-gray-300">{step.action}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-300 leading-relaxed">
            Sans CTA, vos efforts pour attirer du trafic restent stériles. Avec
            un CTA, chaque contenu devient un levier de conversion mesurable.
          </p>
        </div>

        {/* Statistiques */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-[#9B5DE5]">
            Quelques chiffres qui parlent
          </h3>
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 bg-red-900/20 border border-red-500/30 rounded-lg"
              >
                <span className="text-red-400 font-bold">•</span>
                <span className="text-gray-300 text-sm">{stat}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <Highlight>
          Un site sans CTA, c'est comme un magasin sans caisse :
          <span className="text-[#FFD400] font-bold">
            vos visiteurs regardent, mais ils repartent sans rien emporter.
          </span>
        </Highlight>
      </motion.div>
    </ArticleSection>
  );
}

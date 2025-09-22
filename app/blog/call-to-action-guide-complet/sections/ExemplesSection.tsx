"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";
import { ShoppingCart, Users, FileText, Briefcase } from "lucide-react";

const b2cExamples = [
  {
    title: 'Amazon : le fameux bouton jaune "Ajouter au panier"',
    description:
      "Simple, direct, impossible à rater. Il ne laisse aucun doute sur l'action attendue.",
    points: [
      "Couleur jaune distinctif qui ressort sur toute la page",
      "Texte ultra-clair sans ambiguïté",
      "Placement stratégique près des informations produit",
      "Taille optimisée pour le mobile et desktop",
    ],
    insight:
      "La simplicité absolue peut être plus efficace que la créativité complexe",
    icon: ShoppingCart,
    color: "from-[#FFD400] to-[#F59E0B]",
  },
  {
    title: 'Netflix : "Essayez gratuitement pendant 30 jours"',
    description:
      "Ici, le CTA réduit le risque perçu et donne une raison immédiate de tester.",
    points: [
      "Suppression de la barrière financière (gratuit)",
      "Durée précise qui rassure (30 jours)",
      "Pas d'engagement mentionné",
      "Promesse claire de ce qu'on obtient",
    ],
    insight:
      "Réduire le risque perçu est souvent plus puissant que vanter les bénéfices",
    icon: Users,
    color: "from-[#E53E3E] to-[#C53030]",
  },
  {
    title: 'Spotify : "Passez à Premium"',
    description:
      "Le verbe d'action est clair, et l'avantage (moins de pubs, meilleure qualité sonore) est sous-entendu dans la promesse.",
    points: [
      "Verbe d'action direct et sans détour",
      "Bénéfice implicite bien compris par les utilisateurs",
      "Contraste visuel fort avec l'interface",
      "Positioning premium qui valorise l'upgrade",
    ],
    insight:
      "Parfois, moins d'explication vaut mieux quand le contexte est clair",
    icon: Users,
    color: "from-[#1DB954] to-[#1ED760]",
  },
];

const b2bExamples = [
  {
    title:
      'Ebook gratuit : "Téléchargez le guide pour doubler vos leads en 30 jours"',
    description: "Un CTA qui vend un bénéfice clair et mesurable.",
    points: [
      "Bénéfice quantifié (doubler)",
      "Temporalité précise (30 jours)",
      "Promesse crédible et atteignable",
      "Valeur immédiate (gratuit)",
    ],
    insight: "Les chiffres et la temporalité rendent la promesse plus crédible",
    icon: FileText,
    color: "from-[#9B5DE5] to-[#7C3AED]",
  },
  {
    title:
      'Webinaire : "Réservez votre place gratuite pour la masterclass de jeudi"',
    description:
      "Ici, l'exclusivité (places limitées, date précise) renforce l'urgence.",
    points: [
      "Exclusivité temporelle (jeudi spécifique)",
      "Notion de rareté (places à réserver)",
      "Positionnement premium (masterclass)",
      "Gratuité qui supprime les freins",
    ],
    insight:
      "L'urgence réelle (date fixe) est plus puissante que l'urgence artificielle",
    icon: Users,
    color: "from-[#3A86FF] to-[#0EA5E9]",
  },
  {
    title: 'Checklist : "Je télécharge ma checklist des 5 erreurs à éviter"',
    description:
      "L'emploi de la première personne rend le CTA plus engageant et personnel.",
    points: [
      "Première personne qui crée l'appropriation",
      "Aspect pratique immédiat (checklist)",
      "Bénéfice négatif puissant (éviter les erreurs)",
      "Nombre précis qui rassure (5 erreurs)",
    ],
    insight:
      "La première personne transforme une action en décision personnelle",
    icon: FileText,
    color: "from-[#06D6A0] to-[#059669]",
  },
  {
    title: 'Diagnostic offert : "Demandez votre audit gratuit en 30 minutes"',
    description:
      "En B2B, la promesse d'un gain rapide et concret rassure et attire.",
    points: [
      "Bénéfice personnalisé (votre audit)",
      "Durée courte qui respecte le temps (30 min)",
      "Valeur élevée perçue (audit professionnel)",
      "Engagement faible pour tester",
    ],
    insight:
      "En B2B, le temps est précieux - le mentionner montre le respect du prospect",
    icon: Briefcase,
    color: "from-[#FF6B6B] to-[#E53E3E]",
  },
];

const commonSuccess = {
  title: "Ce que ces exemples ont en commun",
  points: [
    "Ils ne laissent pas de place à l'interprétation",
    "On sait quoi faire, pourquoi le faire, et quel bénéfice immédiat en tirer",
    "L'action proposée correspond exactement au niveau d'engagement du visiteur",
    "Le langage utilisé correspond au niveau de familiarité avec la marque",
  ],
};

export default function ExemplesSection() {
  return (
    <ArticleSection
      id="exemples"
      title="Exemples concrets de Call to Action qui fonctionnent"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-12"
      >
        <p className="text-gray-300 leading-relaxed mb-8">
          Rien de mieux que des exemples réels pour voir la différence entre un
          CTA qui passe inaperçu et un CTA qui déclenche l'action.
        </p>

        {/* Exemples B2C */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-[#9B5DE5]">
            En B2C : e-commerce et SaaS
          </h3>
          <div className="space-y-6">
            {b2cExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${example.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <example.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-[#FFD400] mb-2">
                          {example.title}
                        </h4>
                        <p className="text-gray-300 mb-4 text-sm">
                          {example.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          {example.points.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-[#06D6A0] rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-gray-400 text-sm">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-gray-800/50 rounded p-3">
                          <p className="text-[#3A86FF] text-sm">
                            <strong>Pourquoi ça marche :</strong>{" "}
                            {example.insight}
                          </p>
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
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <div className="bg-[#06D6A0]/10 border border-[#06D6A0]/30 rounded-lg p-4">
              <p className="text-[#06D6A0] text-sm text-center">
                👉 Ces CTA fonctionnent parce qu'ils sont ultra-visibles,
                orientés bénéfice et liés à une action simple.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Exemples B2B */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-[#9B5DE5]">
            En B2B et pour les infopreneurs
          </h3>
          <div className="space-y-6">
            {b2bExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${example.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <example.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-[#FFD400] mb-2">
                          {example.title}
                        </h4>
                        <p className="text-gray-300 mb-4 text-sm">
                          {example.description}
                        </p>
                        <div className="space-y-2 mb-4">
                          {example.points.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-[#06D6A0] rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-gray-400 text-sm">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-gray-800/50 rounded p-3">
                          <p className="text-[#3A86FF] text-sm">
                            <strong>Pourquoi ça marche :</strong>{" "}
                            {example.insight}
                          </p>
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
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <div className="bg-[#9B5DE5]/10 border border-[#9B5DE5]/30 rounded-lg p-4">
              <p className="text-[#9B5DE5] text-sm text-center">
                👉 Dans ces cas, le CTA ne vend pas directement : il ouvre une
                porte (apprentissage, gain de temps, diagnostic) qui rapproche
                du moment d'achat.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Points communs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-r from-[#FFD400]/10 to-[#F59E0B]/10 border-[#FFD400]/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#FFD400] mb-4 text-center">
                {commonSuccess.title}
              </h3>
              <div className="space-y-3">
                {commonSuccess.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#FFD400] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <Highlight>
          Ces exemples ont un point commun : ils ne laissent pas de place à
          l'interprétation.
          <span className="text-[#FFD400] font-bold">
            {" "}
            On sait quoi faire, pourquoi le faire, et quel bénéfice immédiat en
            tirer.
          </span>
        </Highlight>
      </motion.div>
    </ArticleSection>
  );
}

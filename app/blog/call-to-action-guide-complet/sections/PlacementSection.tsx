"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";
import { Home, Target, FileText, Mail, Zap } from "lucide-react";

const placements = [
  {
    title: "Sur la page d'accueil",
    description:
      "Votre page d'accueil est une vitrine. Chaque visiteur doit savoir, en quelques secondes, quelle est la prochaine étape.",
    strategy:
      "Un CTA clair, placé au-dessus de la ligne de flottaison, peut orienter directement vers l'offre phare, l'inscription à la newsletter ou la réservation d'un appel.",
    tips: [
      "CTA principal visible sans scroll",
      "Message clair sur la proposition de valeur",
      "Action simple et évidente",
    ],
    icon: Home,
    color: "from-[#9B5DE5] to-[#7C3AED]",
  },
  {
    title: "Sur vos landing pages",
    description:
      "Une landing page sans CTA, c'est un cul-de-sac. Ici, votre objectif est simple : une seule action, un seul bouton, répété plusieurs fois au fil de la page.",
    strategy:
      "Pas de distraction, pas d'options multiples. Le CTA devient le fil rouge qui guide la lecture jusqu'à la conversion.",
    tips: [
      "Répétition du même CTA à différents moments",
      "Suppression de tout élément distrayant",
      "Focus sur une seule conversion",
    ],
    icon: Target,
    color: "from-[#3A86FF] to-[#0EA5E9]",
  },
  {
    title: "Dans vos articles de blog",
    description:
      "Le blog attire du trafic, mais sans CTA, il reste un simple espace de lecture. Deux emplacements fonctionnent particulièrement bien.",
    strategy:
      "Au milieu de l'article, quand le lecteur est déjà engagé. À la fin, pour ceux qui vont au bout et sont les plus qualifiés.",
    tips: [
      "CTA contextuel lié au sujet de l'article",
      "Placement naturel dans le flux de lecture",
      "Proposition de valeur complémentaire",
    ],
    icon: FileText,
    color: "from-[#FFD400] to-[#F59E0B]",
  },
  {
    title: "Dans vos emails",
    description:
      "Qu'il soit transactionnel ou marketing, un email sans CTA est une lettre morte.",
    strategy:
      'Dans les emails transactionnels : "Finaliser ma commande", "Mettre à jour mes infos". Dans les newsletters : un seul CTA bien visible, centré, qui capte le clic.',
    tips: [
      "Un email = un message = un CTA",
      "Bouton bien visible et contrasté",
      "Texte d'accompagnement clair",
    ],
    icon: Mail,
    color: "from-[#06D6A0] to-[#059669]",
  },
  {
    title: "Avec des pop-ups intelligents",
    description:
      "Les pop-ups mal utilisés énervent. Mais bien pensés, ils convertissent.",
    strategy:
      "Exit intent : une offre ou une ressource quand l'internaute s'apprête à quitter. Scroll depth : une invitation quand le lecteur a parcouru 50–70 % d'un article.",
    tips: [
      "Timing basé sur le comportement",
      "Valeur immédiate pour l'utilisateur",
      "Facile à fermer pour respecter l'expérience",
    ],
    icon: Zap,
    color: "from-[#FF6B6B] to-[#E53E3E]",
  },
];

const emailRule = {
  title: "La règle d'or pour les emails",
  content: "Un email = un message = un CTA",
  explanation:
    "Multiplier les actions possibles dans un email dilue l'attention et réduit les chances de conversion.",
};

const popupTiming = [
  {
    type: "Exit Intent",
    trigger: "Mouvement de souris vers le haut de la page",
    offer: "Ressource gratuite ou réduction",
    timing: "Juste avant le départ",
  },
  {
    type: "Scroll Depth",
    trigger: "50-70% de l'article lu",
    offer: "Contenu complémentaire",
    timing: "Quand l'engagement est confirmé",
  },
  {
    type: "Time on Page",
    trigger: "Plus de 2-3 minutes sur la page",
    offer: "Aide ou accompagnement",
    timing: "Quand l'intérêt est démontré",
  },
];

export default function PlacementSection() {
  return (
    <ArticleSection
      id="placement"
      title="Où placer vos Call to Action pour maximiser les conversions ?"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-12"
      >
        <p className="text-gray-300 leading-relaxed mb-8">
          Un bon CTA n'est pas seulement une question de mots ou de design.
          C'est aussi une question de timing et d'emplacement. Si vous le cachez
          au mauvais endroit, il ne servira jamais.
        </p>

        {/* Emplacements principaux */}
        <div className="space-y-8 mb-12">
          {placements.map((placement, index) => (
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
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${placement.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <placement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#9B5DE5] mb-3">
                        {placement.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {placement.description}
                      </p>
                      <p className="text-gray-400 text-sm mb-4 italic">
                        <strong>Stratégie :</strong> {placement.strategy}
                      </p>
                      <div className="space-y-1">
                        {placement.tips.map((tip, tipIndex) => (
                          <div
                            key={tipIndex}
                            className="flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-[#FFD400] rounded-full"></span>
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

        {/* Règle spéciale pour les emails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#FFD400] mb-3 text-center">
                {emailRule.title}
              </h3>
              <p className="text-2xl font-bold text-center mb-4 text-white">
                {emailRule.content}
              </p>
              <p className="text-gray-300 text-center">
                {emailRule.explanation}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Timing des pop-ups */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-[#9B5DE5]">
            Le timing parfait pour les pop-ups
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Le secret, c'est de les déclencher au bon moment, pas en forçant la
            main dès la première seconde.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {popupTiming.map((popup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/30 border-gray-800 h-full">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-[#FFD400] mb-3">
                      {popup.type}
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-gray-400">Déclencheur :</span>
                        <p className="text-gray-300">{popup.trigger}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Offre :</span>
                        <p className="text-gray-300">{popup.offer}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Timing :</span>
                        <p className="text-gray-300">{popup.timing}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <Highlight>
          Chaque contenu doit servir à capter un lead ou pousser vers une
          ressource complémentaire.
          <span className="text-[#FFD400] font-bold">
            {" "}
            Sans CTA, votre trafic reste stérile.
          </span>
        </Highlight>
      </motion.div>
    </ArticleSection>
  );
}

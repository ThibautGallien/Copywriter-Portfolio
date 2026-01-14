"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";
import { Home, Target, FileText, Mail, Zap, CheckCircle } from "lucide-react";

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

const placements = [
  {
    title: "Sur la page d'accueil",
    description:
      "Ta page d'accueil est une vitrine. Chaque visiteur doit savoir, en quelques secondes, quelle est la prochaine étape.",
    strategy:
      "Un CTA clair, placé au-dessus de la ligne de flottaison, peut orienter directement vers l'offre phare, l'inscription à la newsletter ou la réservation d'un appel.",
    tips: [
      "CTA principal visible sans scroll",
      "Message clair sur la proposition de valeur",
      "Action simple et évidente",
    ],
    icon: Home,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
  },
  {
    title: "Sur tes landing pages",
    description:
      "Une landing page sans CTA, c'est un cul-de-sac. Ici, ton objectif est simple : une seule action, un seul bouton, répété plusieurs fois au fil de la page.",
    strategy:
      "Pas de distraction, pas d'options multiples. Le CTA devient le fil rouge qui guide la lecture jusqu'à la conversion.",
    tips: [
      "Répétition du même CTA à différents moments",
      "Suppression de tout élément distrayant",
      "Focus sur une seule conversion",
    ],
    icon: Target,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
  },
  {
    title: "Dans tes articles de blog",
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
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-700",
  },
  {
    title: "Dans tes emails",
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
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    textColor: "text-teal-700",
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
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
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
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    type: "Scroll Depth",
    trigger: "50-70% de l'article lu",
    offer: "Contenu complémentaire",
    timing: "Quand l'engagement est confirmé",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    type: "Time on Page",
    trigger: "Plus de 2-3 minutes sur la page",
    offer: "Aide ou accompagnement",
    timing: "Quand l'intérêt est démontré",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
];

// Placement Card Component
function PlacementCard({ placement, index }: any) {
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
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card
          className={`bg-white border-2 ${placement.borderColor} hover:shadow-xl transition-all`}
        >
          <CardContent className="p-6">
            <div className="flex items-start gap-5">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${placement.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
              >
                <placement.icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold ${placement.textColor} mb-3`}>
                  {placement.title}
                </h3>
                <p className="text-neutral-700 mb-4 leading-relaxed">
                  {placement.description}
                </p>
                <div
                  className={`${placement.bgColor} rounded-lg p-4 mb-4 border ${placement.borderColor}`}
                >
                  <p className="text-neutral-700 text-sm">
                    <strong className="font-semibold">Stratégie :</strong>{" "}
                    {placement.strategy}
                  </p>
                </div>
                <div className="space-y-2">
                  {placement.tips.map((tip: string, tipIndex: number) => (
                    <div key={tipIndex} className="flex items-start gap-2">
                      <CheckCircle
                        className={`w-4 h-4 ${placement.textColor} mt-0.5 flex-shrink-0`}
                      />
                      <span className="text-neutral-600 text-sm">{tip}</span>
                    </div>
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

// Popup Timing Card Component
function PopupTimingCard({ popup, index }: any) {
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
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card
          className={`bg-white border-2 ${popup.borderColor} h-full hover:shadow-lg transition-all`}
        >
          <CardContent className="p-6">
            <div
              className={`inline-block px-4 py-2 rounded-xl bg-gradient-to-r ${popup.color} text-white font-bold text-lg mb-4 shadow-md`}
            >
              {popup.type}
            </div>
            <div className="space-y-4">
              <div
                className={`${popup.bgColor} rounded-lg p-3 border ${popup.borderColor}`}
              >
                <span className="text-neutral-600 text-xs font-semibold uppercase tracking-wide">
                  Déclencheur
                </span>
                <p className="text-neutral-700 font-medium mt-1 text-sm">
                  {popup.trigger}
                </p>
              </div>
              <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-200">
                <span className="text-neutral-600 text-xs font-semibold uppercase tracking-wide">
                  Offre
                </span>
                <p className="text-neutral-700 font-medium mt-1 text-sm">
                  {popup.offer}
                </p>
              </div>
              <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-200">
                <span className="text-neutral-600 text-xs font-semibold uppercase tracking-wide">
                  Timing
                </span>
                <p className="text-neutral-700 font-medium mt-1 text-sm">
                  {popup.timing}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function PlacementSection() {
  return (
    <ArticleSection
      id="placement"
      title="Où placer tes Call to Action pour maximiser les conversions ?"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-8"
      >
        <p className="text-lg text-neutral-700 leading-relaxed mb-12">
          Un bon CTA n'est pas seulement une question de mots ou de design.
          C'est aussi une question de timing et d'emplacement. Si tu le caches
          au mauvais endroit, il ne servira jamais.
        </p>

        {/* Emplacements principaux */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-1 w-12 bg-blue-500 rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Les <span className="text-blue-600">emplacements</span>{" "}
              stratégiques
            </h3>
          </div>

          <div className="space-y-8">
            {placements.map((placement, index) => (
              <PlacementCard key={index} placement={placement} index={index} />
            ))}
          </div>
        </div>

        {/* Règle spéciale pour les emails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200 overflow-hidden relative">
            <CardContent className="p-8 text-center relative z-10">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-teal-100 rounded-full blur-3xl opacity-50 -z-10" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />

              <div className="inline-block px-4 py-2 rounded-full bg-teal-600 text-white text-sm font-bold mb-4">
                {emailRule.title}
              </div>

              <p className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
                {emailRule.content}
              </p>

              <p className="text-neutral-700 max-w-2xl mx-auto leading-relaxed">
                {emailRule.explanation}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Timing des pop-ups */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-amber-500 rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Le timing <span className="text-amber-600">parfait</span> pour les
              pop-ups
            </h3>
          </div>

          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Le secret, c'est de les déclencher au bon moment, pas en forçant la
            main dès la première seconde.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {popupTiming.map((popup, index) => (
              <PopupTimingCard key={index} popup={popup} index={index} />
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
            Chaque contenu doit servir à capter un lead ou pousser vers une
            ressource complémentaire.
            <span className="text-blue-600 font-bold">
              {" "}
              Sans CTA, ton trafic reste stérile.
            </span>
          </Highlight>
        </motion.div>
      </motion.div>
    </ArticleSection>
  );
}

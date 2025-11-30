"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";
import {
  ShoppingCart,
  Users,
  FileText,
  Briefcase,
  Sparkles,
} from "lucide-react";

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
    color: "from-amber-400 to-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
  },
  {
    title: 'Netflix : "Essaye gratuitement pendant 30 jours"',
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
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    textColor: "text-red-700",
  },
  {
    title: 'Spotify : "Passe à Premium"',
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
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    textColor: "text-green-700",
  },
];

const b2bExamples = [
  {
    title:
      'Ebook gratuit : "Télécharge le guide pour doubler tes leads en 30 jours"',
    description: "Un CTA qui vend un bénéfice clair et mesurable.",
    points: [
      "Bénéfice quantifié (doubler)",
      "Temporalité précise (30 jours)",
      "Promesse crédible et atteignable",
      "Valeur immédiate (gratuit)",
    ],
    insight: "Les chiffres et la temporalité rendent la promesse plus crédible",
    icon: FileText,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-700",
  },
  {
    title:
      'Webinaire : "Réserve ta place gratuite pour la masterclass de jeudi"',
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
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
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
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    textColor: "text-teal-700",
  },
  {
    title: 'Diagnostic offert : "Demande ton audit gratuit en 30 minutes"',
    description:
      "En B2B, la promesse d'un gain rapide et concret rassure et attire.",
    points: [
      "Bénéfice personnalisé (ton audit)",
      "Durée courte qui respecte le temps (30 min)",
      "Valeur élevée perçue (audit professionnel)",
      "Engagement faible pour tester",
    ],
    insight:
      "En B2B, le temps est précieux - le mentionner montre le respect du prospect",
    icon: Briefcase,
    color: "from-rose-500 to-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    textColor: "text-rose-700",
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

// Example Card Component
function ExampleCard({ example, index }: any) {
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
          className={`bg-white border-2 ${example.borderColor} hover:shadow-xl transition-all`}
        >
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              {/* Icon Badge */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${example.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
              >
                <example.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className={`text-lg font-bold ${example.textColor} mb-3`}>
                  {example.title}
                </h4>
                <p className="text-neutral-600 mb-5 text-sm leading-relaxed">
                  {example.description}
                </p>

                {/* Points */}
                <div
                  className={`space-y-2 mb-5 ${example.bgColor} rounded-xl p-4 border ${example.borderColor}`}
                >
                  {example.points.map((point: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${example.color} rounded-full mt-2 flex-shrink-0`}
                      ></div>
                      <span className="text-neutral-700 text-sm leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Insight */}
                <div className="bg-neutral-50 rounded-xl p-4 border-l-4 border-emerald-500">
                  <p className="text-neutral-900 text-sm">
                    <span className="font-semibold text-emerald-700">
                      💡 Pourquoi ça marche :
                    </span>{" "}
                    {example.insight}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function ExemplesSection() {
  return (
    <ArticleSection
      id="exemples"
      title="Exemples concrets de Call to Action qui fonctionnent"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-8"
      >
        <p className="text-lg text-neutral-700 leading-relaxed mb-12">
          Rien de mieux que des exemples réels pour voir la différence entre un
          CTA qui passe inaperçu et un CTA qui déclenche l'action.
        </p>

        {/* Exemples B2C */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-emerald-500 rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
              En B2C :{" "}
              <span className="text-emerald-600">e-commerce et SaaS</span>
            </h3>
          </div>

          <div className="space-y-6">
            {b2cExamples.map((example, index) => (
              <ExampleCard key={index} example={example} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl p-5">
              <p className="text-emerald-800 font-medium text-center flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Ces CTA fonctionnent parce qu'ils sont ultra-visibles, orientés
                bénéfice et liés à une action simple.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Exemples B2B */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-purple-500 rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
              En B2B et pour les{" "}
              <span className="text-purple-600">infopreneurs</span>
            </h3>
          </div>

          <div className="space-y-6">
            {b2bExamples.map((example, index) => (
              <ExampleCard key={index} example={example} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-5">
              <p className="text-purple-800 font-medium text-center flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Dans ces cas, le CTA ne vend pas directement : il ouvre une
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
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 overflow-hidden relative">
            <CardContent className="p-8 relative z-10">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-50 -z-10" />

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-2xl mb-3">
                  <Sparkles className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  {commonSuccess.title}
                </h3>
              </div>

              <div className="space-y-4 max-w-2xl mx-auto">
                {commonSuccess.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white/80 rounded-xl p-4"
                  >
                    <div className="w-6 h-6 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-neutral-700 leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Highlight>
            Ces exemples ont un point commun : ils ne laissent pas de place à
            l'interprétation.
            <span className="text-emerald-600 font-bold">
              {" "}
              On sait quoi faire, pourquoi le faire, et quel bénéfice immédiat
              en tirer.
            </span>
          </Highlight>
        </motion.div>
      </motion.div>
    </ArticleSection>
  );
}

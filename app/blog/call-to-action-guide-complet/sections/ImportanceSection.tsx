"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArticleSection,
  BenefitsList,
  Highlight,
} from "@/components/blog/BlogComponents";
import { ArrowRight, TrendingUp } from "lucide-react";

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

const parcoursBenefits = [
  {
    title: "Découverte → CTA vers un contenu gratuit",
    description: "Article, checklist, guide pour capter l'attention initiale",
    color: "emerald",
  },
  {
    title: "Évaluation → CTA pour tester, comparer",
    description: "Demander plus d'infos, essai gratuit, démonstration",
    color: "blue",
  },
  {
    title: "Décision → CTA clair vers l'achat",
    description: "Inscription, prise de rendez-vous, finalisation d'achat",
    color: "purple",
  },
];

const impactBenefits = [
  {
    title: "Transformer un lecteur en lead qualifié",
    description:
      "Un bon CTA filtre les curieux des véritables intéressés. Quand quelqu'un laisse son email, réserve un diagnostic ou télécharge un guide, tu sais que ce n'est plus un simple lecteur : c'est un lead qualifié.",
  },
  {
    title: "Impact direct sur tes conversions",
    description:
      "Un CTA n'est pas une décoration : c'est un levier de performance mesurable. Un bouton bien pensé peut doubler tes inscriptions, tripler tes téléchargements ou réduire l'abandon panier.",
  },
];

const ctaAdaptation = [
  {
    phase: "En phase de découverte",
    strategy: 'Privilégie un CTA "soft"',
    examples: ["Guide gratuit", "Checklist", "Article approfondi"],
    color: "from-blue-400 to-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
  },
  {
    phase: "En phase avancée",
    strategy: "Propose un CTA plus engageant",
    examples: ["Appel découverte", "Offre d'essai", "Audit gratuit"],
    color: "from-blue-400 to-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
  },
  {
    phase: "En infopreneuriat",
    strategy: "CTA pour nurturer ET vendre",
    examples: ["Newsletter", "Ressources gratuites", "Session de coaching"],
    color: "from-amber-400 to-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
  },
];

const colorMap: any = {
  emerald: {
    border: "border-blue-500",
    text: "text-blue-700",
    bg: "bg-blue-50",
  },
  blue: {
    border: "border-blue-500",
    text: "text-blue-700",
    bg: "bg-blue-50",
  },
  purple: {
    border: "border-purple-500",
    text: "text-purple-700",
    bg: "bg-purple-50",
  },
};

// Parcours Benefit Card
function ParcoursBenefitCard({ benefit, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const colors = colorMap[benefit.color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`p-5 ${colors.bg} rounded-xl border-l-4 ${colors.border}`}
      >
        <h4 className={`font-bold ${colors.text} mb-2 flex items-center gap-2`}>
          {benefit.title.split("→")[0]}
          <ArrowRight className="w-4 h-4" />
        </h4>
        <p className="text-neutral-600 text-sm leading-relaxed">
          {benefit.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

// Adaptation Phase Card
function AdaptationPhaseCard({ phase, index }: any) {
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
          className={`bg-white border-2 ${phase.borderColor} h-full hover:shadow-lg transition-all`}
        >
          <CardContent className="p-6">
            <div
              className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${phase.color} flex items-center justify-center mb-4 shadow-lg`}
            >
              <span className="text-white font-bold text-xl">{index + 1}</span>
            </div>
            <h4 className="font-bold text-neutral-900 mb-2 text-lg">
              {phase.phase}
            </h4>
            <p className={`${phase.textColor} text-sm font-semibold mb-4`}>
              {phase.strategy}
            </p>
            <div className="flex flex-wrap gap-2">
              {phase.examples.map((example: string, idx: number) => (
                <span
                  key={idx}
                  className={`inline-block px-3 py-1.5 ${phase.bgColor} ${phase.textColor} rounded-full text-xs font-medium`}
                >
                  {example}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function ImportanceSection() {
  return (
    <ArticleSection
      id="importance"
      title="Pourquoi un Call to Action est indispensable en marketing digital ?"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-8"
      >
        {/* Faire avancer le prospect */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-blue-500 rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Faire avancer le prospect dans son{" "}
              <span className="text-blue-600">parcours d'achat</span>
            </h3>
          </div>

          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Le CTA agit comme un guide discret mais décisif. À chaque étape du
            parcours :
          </p>

          <div className="space-y-4 mb-8">
            {parcoursBenefits.map((benefit, index) => (
              <ParcoursBenefitCard
                key={index}
                benefit={benefit}
                index={index}
              />
            ))}
          </div>

          <p className="text-neutral-900 leading-relaxed font-semibold bg-neutral-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
            Chaque clic rapproche le prospect de l'étape suivante.
          </p>
        </div>

        {/* Impact benefits */}
        <div className="mb-16">
          <BenefitsList
            benefits={impactBenefits}
            title="Les bénéfices concrets d'un CTA efficace"
            cardClassName="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200"
          />
        </div>

        {/* ROI Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200 overflow-hidden relative">
            <CardContent className="p-8 relative z-10">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-50 -z-10" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">
                    Derrière chaque CTA optimisé, ce sont des revenus en plus
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Un bouton bien pensé génère des résultats mesurables sans
                    trafic supplémentaire. C'est de l'optimisation pure : même
                    audience, meilleurs résultats.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Adaptation */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-blue-500 rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Adapter le CTA en B2B et pour les{" "}
              <span className="text-blue-600">infopreneurs</span>
            </h3>
          </div>

          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Tous les prospects n'ont pas le même degré de maturité. C'est là
            qu'intervient l'art du CTA adapté :
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {ctaAdaptation.map((phase, index) => (
              <AdaptationPhaseCard key={index} phase={phase} index={index} />
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
            Un CTA peut autant servir à nurturer la relation qu'à vendre
            directement.
            <span className="text-blue-600 font-bold">
              {" "}
              La clé : adapter l'intensité à la maturité de ton prospect.
            </span>
          </Highlight>
        </motion.div>
      </motion.div>
    </ArticleSection>
  );
}

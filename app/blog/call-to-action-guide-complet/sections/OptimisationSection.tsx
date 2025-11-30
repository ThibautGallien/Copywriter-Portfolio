"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";
import { BarChart3, Target, TrendingUp, Eye } from "lucide-react";

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
    description: "Pour savoir si ton CTA attire l'attention",
    calculation: "Nombre de clics / Nombre d'impressions",
    goodRate: "> 2-3% en général, > 5% excellent",
    icon: Eye,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-700",
  },
  {
    metric: "Taux de conversion post-clic",
    description: "Pour vérifier si l'action derrière le bouton est pertinente",
    calculation: "Actions complétées / Clics sur le CTA",
    goodRate: "Varie selon le secteur (10-40%)",
    icon: Target,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
  },
  {
    metric: "Scroll depth",
    description:
      "Pour comprendre à quel moment tes visiteurs sont prêts à cliquer",
    calculation: "Pourcentage de page vue avant clic",
    goodRate: "Utile pour placer les CTA au bon endroit",
    icon: TrendingUp,
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
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
    "Les tests te montrent ce que tes visiteurs veulent vraiment, pas ce que tu imagines.",
};

const optimizationTips = [
  "Ne te contente pas de regarder le nombre de clics - la conversion réelle compte plus",
  "Teste un seul élément à la fois pour identifier ce qui fonctionne vraiment",
  "Laisse tourner tes tests suffisamment longtemps pour avoir des données significatives",
  "Documente tes résultats pour créer une base de connaissances",
  "Parfois, un CTA qui convertit moins mais mieux qualifie est plus rentable",
];

// AB Test Element Card
function ABTestCard({ element, index }: any) {
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
        <Card className="bg-white border-2 border-neutral-200 hover:border-emerald-200 transition-all h-full">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">{element.icon}</span>
              <div className="flex-1">
                <h4 className="font-bold text-neutral-900 mb-3 text-lg">
                  {element.element}
                </h4>
                <div className="space-y-3">
                  <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-200">
                    <span className="text-neutral-500 text-xs font-semibold uppercase tracking-wide">
                      Exemple
                    </span>
                    <p className="text-neutral-700 text-sm mt-1">
                      {element.examples[0]}
                    </p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                    <span className="text-emerald-700 text-xs font-semibold uppercase tracking-wide">
                      Impact
                    </span>
                    <p className="text-emerald-700 text-sm font-semibold mt-1">
                      {element.impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

// Metric Card Component
function MetricCard({ metric, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
      >
        <Card
          className={`bg-white border-2 ${metric.borderColor} hover:shadow-lg transition-all`}
        >
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${metric.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
              >
                <metric.icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h4 className={`text-lg font-bold ${metric.textColor} mb-2`}>
                  {metric.metric}
                </h4>
                <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                  {metric.description}
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-200">
                    <span className="text-neutral-500 text-xs font-semibold">
                      Calcul
                    </span>
                    <p className="text-neutral-700 text-sm mt-1">
                      {metric.calculation}
                    </p>
                  </div>
                  <div
                    className={`${metric.bgColor} rounded-lg p-3 border ${metric.borderColor}`}
                  >
                    <span
                      className={`${metric.textColor} text-xs font-semibold`}
                    >
                      Bon taux
                    </span>
                    <p
                      className={`${metric.textColor} text-sm font-semibold mt-1`}
                    >
                      {metric.goodRate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function OptimisationSection() {
  return (
    <ArticleSection
      id="optimisation"
      title="Comment optimiser tes Call to Action grâce aux tests ?"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-8"
      >
        <p className="text-lg text-neutral-700 leading-relaxed mb-12">
          Un CTA n'est jamais "parfait" dès le premier essai. Même un bouton qui
          fonctionne déjà bien peut être optimisé pour aller chercher encore
          plus de conversions. La clé, c'est le test.
        </p>

        {/* A/B Testing */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-emerald-500 rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
              L'A/B testing : ton{" "}
              <span className="text-emerald-600">meilleur allié</span>
            </h3>
          </div>

          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Le principe est simple : tu crées deux versions de ton CTA et tu
            laisses les chiffres décider.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {abTestElements.map((element, index) => (
              <ABTestCard key={index} element={element} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5 text-center">
              <p className="text-emerald-800 font-semibold">
                💡 Ces petits changements peuvent parfois doubler tes clics.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Indicateurs clés */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-blue-500 rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Les bons <span className="text-blue-600">indicateurs</span> à
              suivre
            </h3>
          </div>

          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Ne te contente pas de regarder le nombre de clics. Ce qui compte,
            c'est la conversion réelle derrière.
          </p>

          <div className="space-y-6">
            {keyMetrics.map((metric, index) => (
              <MetricCard key={index} metric={metric} index={index} />
            ))}
          </div>
        </div>

        {/* Exemple pratique */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 overflow-hidden relative">
            <CardContent className="p-8 relative z-10">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-50 -z-10" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-600 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  Exemple pratique
                </h3>
              </div>

              <p className="text-neutral-700 mb-6 text-lg">
                {practicalExample.scenario}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-5 border-2 border-blue-200">
                  <h4 className="font-bold text-blue-700 mb-3 text-lg">
                    Version A
                  </h4>
                  <p className="text-neutral-900 mb-4 font-medium">
                    &quot;{practicalExample.versionA.text}&quot;
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-neutral-700">
                      <span className="font-semibold">Résultat :</span>{" "}
                      {practicalExample.versionA.result}
                    </p>
                    <p className="text-neutral-700">
                      <span className="font-semibold">Conversion :</span>{" "}
                      {practicalExample.versionA.conversion}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border-2 border-emerald-200">
                  <h4 className="font-bold text-emerald-700 mb-3 text-lg">
                    Version B
                  </h4>
                  <p className="text-neutral-900 mb-4 font-medium">
                    &quot;{practicalExample.versionB.text}&quot;
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-neutral-700">
                      <span className="font-semibold">Résultat :</span>{" "}
                      {practicalExample.versionB.result}
                    </p>
                    <p className="text-neutral-700">
                      <span className="font-semibold">Conversion :</span>{" "}
                      {practicalExample.versionB.conversion}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 space-y-3">
                <p className="text-neutral-900">
                  <strong className="font-bold">Conclusion :</strong>{" "}
                  {practicalExample.conclusion}
                </p>
                <p className="text-emerald-700 font-semibold">
                  💡 {practicalExample.lesson}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Conseils d'optimisation */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-purple-500 rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Conseils pour optimiser{" "}
              <span className="text-purple-600">efficacement</span>
            </h3>
          </div>

          <div className="space-y-3">
            {optimizationTips.map((tip, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-50px" });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl border border-purple-200"
                >
                  <div className="w-7 h-7 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-neutral-700 leading-relaxed">
                    {tip}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Highlight>
            Et c'est cette boucle d'optimisation continue qui fait la différence
            entre un CTA moyen et un CTA qui rapporte tous les jours.
            <span className="text-emerald-600 font-bold">
              {" "}
              Les tests te montrent ce que tes visiteurs veulent vraiment, pas
              ce que tu imagines.
            </span>
          </Highlight>
        </motion.div>
      </motion.div>
    </ArticleSection>
  );
}

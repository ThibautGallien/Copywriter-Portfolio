"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";
import { CheckCircle, Target, Zap } from "lucide-react";

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
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    message: "Excellent ! Tes CTA sont optimisés",
  },
  good: {
    min: 14,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    message: "Bien, mais quelques améliorations possibles",
  },
  average: {
    min: 10,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    message: "Moyen, des optimisations importantes nécessaires",
  },
  poor: {
    min: 0,
    color: "text-red-600",
    bgColor: "bg-red-50",
    message: "Attention ! Tes CTA ont besoin d'une refonte complète",
  },
};

const quickWins = [
  {
    action: 'Change "Cliquez ici" par "Je télécharge le guide"',
    impact: "Impact immédiat sur la clarté",
    difficulty: "Facile",
  },
  {
    action: "Augmente la taille de tes boutons CTA",
    impact: "Meilleure visibilité et clics mobiles",
    difficulty: "Facile",
  },
  {
    action: "Teste une couleur plus contrastée",
    impact: "Peut doubler les clics",
    difficulty: "Facile",
  },
  {
    action: "Ajoute un bénéfice chiffré dans le CTA",
    impact: "Meilleure conversion",
    difficulty: "Moyen",
  },
  {
    action: "Supprime les CTA secondaires sur tes landing pages",
    impact: "Focus sur l'action principale",
    difficulty: "Facile",
  },
];

const finalReminder = {
  title: "Rappel important",
  content:
    "Un CTA n'est pas un détail graphique. C'est le levier qui transforme tes lecteurs en prospects, puis tes prospects en clients.",
  action:
    "Bien pensé, il peut multiplier tes conversions sans que tu aies besoin de plus de trafic.",
};

// Checklist Category Component
function ChecklistCategory({ category, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-emerald-600 flex items-center justify-center">
            <Target className="w-4 h-4 text-white" />
          </div>
          {category.category}
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {category.items.map((item: string, itemIndex: number) => (
            <motion.label
              key={itemIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
              className="flex items-start gap-3 cursor-pointer group p-3 rounded-xl hover:bg-emerald-50 transition-colors"
            >
              <input
                type="checkbox"
                className="mt-0.5 w-5 h-5 text-emerald-600 bg-white border-2 border-neutral-300 rounded focus:ring-emerald-500 focus:ring-2 cursor-pointer"
              />
              <span className="text-neutral-700 text-sm leading-relaxed group-hover:text-neutral-900 transition-colors">
                {item}
              </span>
            </motion.label>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Quick Win Card Component
function QuickWinCard({ win, index }: any) {
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
        <Card className="bg-white border-2 border-neutral-200 hover:border-emerald-200 transition-all">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              {/* Number Badge */}
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="font-bold text-neutral-900 mb-3">
                  {win.action}
                </h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                  <div className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                    <Zap className="w-3.5 h-3.5" />
                    <span className="font-medium">{win.impact}</span>
                  </div>
                  <span className="hidden sm:block text-neutral-300">•</span>
                  <div className="inline-flex items-center gap-1.5 text-neutral-600">
                    <span className="font-medium">Difficulté :</span>
                    <span>{win.difficulty}</span>
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

export default function ChecklistSection() {
  return (
    <ArticleSection
      id="checklist"
      title="Checklist rapide pour créer un CTA qui convertit"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-8"
      >
        <p className="text-lg text-neutral-600 leading-relaxed mb-10">
          Voici une checklist simple à garder sous la main avant de publier
          n'importe quel CTA. Coche chaque point pour t'assurer que ton CTA a
          toutes les chances de convertir.
        </p>

        {/* Checklist principale */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200">
            <CardContent className="p-8">
              <div className="space-y-6">
                {checklistItems.map((category, categoryIndex) => (
                  <ChecklistCategory
                    key={categoryIndex}
                    category={category}
                    index={categoryIndex}
                  />
                ))}
              </div>

              {/* Guide de notation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8 p-6 bg-neutral-50 rounded-xl border border-neutral-200"
              >
                <h4 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  Guide de notation
                </h4>
                <div className="space-y-3">
                  {Object.entries(scoringGuide).map(([key, guide]: any) => (
                    <div
                      key={key}
                      className={`flex items-center justify-between p-3 rounded-lg ${guide.bgColor}`}
                    >
                      <span className={`font-bold text-sm ${guide.color}`}>
                        {guide.min === 18
                          ? "18-20 points"
                          : guide.min === 14
                          ? "14-17 points"
                          : guide.min === 10
                          ? "10-13 points"
                          : "0-9 points"}
                      </span>
                      <span className="text-neutral-700 text-sm font-medium">
                        {guide.message}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>

        {/* Quick wins */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-emerald-500 rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
              5 améliorations rapides à implémenter{" "}
              <span className="text-emerald-600">aujourd'hui</span>
            </h3>
          </div>

          <div className="space-y-4">
            {quickWins.map((win, index) => (
              <QuickWinCard key={index} win={win} index={index} />
            ))}
          </div>
        </div>

        {/* Rappel final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Card className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 overflow-hidden relative">
            <CardContent className="p-8 text-center relative z-10">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full blur-3xl opacity-50 -z-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-50 -z-10" />

              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                {finalReminder.title}
              </h3>
              <p className="text-neutral-700 mb-4 leading-relaxed max-w-2xl mx-auto">
                {finalReminder.content}
              </p>
              <p className="text-emerald-700 font-semibold">
                {finalReminder.action}
              </p>
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
            Si tu ne coches pas toutes les cases, ton CTA risque de passer
            inaperçu.
            <span className="text-emerald-600 font-bold">
              {" "}
              Si tu les coches toutes, tu poses la première brique d'un système
              qui rapporte.
            </span>
          </Highlight>
        </motion.div>
      </motion.div>
    </ArticleSection>
  );
}

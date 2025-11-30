"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";
import { MousePointer2, Link2, Image, Zap, FileText } from "lucide-react";

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

const ctaFormats = [
  {
    type: "Le bouton",
    description: "La forme la plus visible, souvent colorée pour attirer l'œil",
    examples: ["Télécharger le guide", "Je m'inscris"],
    icon: MousePointer2,
    color: "emerald",
  },
  {
    type: "Le lien texte",
    description:
      "Inséré dans un paragraphe, efficace quand il est contextualisé",
    examples: ["En savoir plus", "Découvrir l'offre"],
    icon: Link2,
    color: "blue",
  },
  {
    type: "L'image cliquable",
    description:
      "Bannière ou visuel qui mène vers une action (utile en e-commerce)",
    examples: ["Bannière promo", "Visuel produit"],
    icon: Image,
    color: "purple",
  },
  {
    type: "Le pop-up",
    description: "Une fenêtre qui s'affiche en fonction du comportement",
    examples: ["Exit intent", "Temps passé sur page"],
    icon: Zap,
    color: "amber",
  },
  {
    type: "Le CTA contextuel",
    description:
      "Intégré directement dans le contenu selon l'intention du lecteur",
    examples: ["Télécharge la checklist associée", "Voir l'étude de cas"],
    icon: FileText,
    color: "teal",
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

const colorMap: any = {
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-700",
    icon: "text-emerald-600",
    badge: "bg-emerald-100 text-emerald-700",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
    icon: "text-blue-600",
    badge: "bg-blue-100 text-blue-700",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-700",
    icon: "text-purple-600",
    badge: "bg-purple-100 text-purple-700",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-700",
    icon: "text-amber-600",
    badge: "bg-amber-100 text-amber-700",
  },
  teal: {
    bg: "bg-teal-50",
    border: "border-teal-200",
    text: "text-teal-700",
    icon: "text-teal-600",
    badge: "bg-teal-100 text-teal-700",
  },
};

// Format Card Component
function FormatCard({ format, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const colors = colorMap[format.color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card
          className={`bg-white border-2 ${colors.border} hover:shadow-lg transition-all`}
        >
          <CardContent className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className={`${colors.bg} p-3 rounded-xl flex-shrink-0`}>
                <format.icon className={`w-6 h-6 ${colors.icon}`} />
              </div>
              <div className="flex-1">
                <h4 className={`text-lg font-bold ${colors.text} mb-2`}>
                  {format.type}
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {format.description}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {format.examples.map((example: string, idx: number) => (
                <span
                  key={idx}
                  className={`px-3 py-1.5 ${colors.badge} rounded-full text-xs font-medium`}
                >
                  &quot;{example}&quot;
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

// Tunnel Step Component
function TunnelStep({ step, index }: any) {
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
        className="flex items-center gap-4 p-5 bg-gradient-to-r from-emerald-50 to-white rounded-xl border-2 border-emerald-100 hover:border-emerald-200 transition-all"
      >
        <span className="text-3xl flex-shrink-0">{step.icon}</span>
        <span className="text-neutral-700 font-medium leading-relaxed">
          {step.action}
        </span>
      </motion.div>
    </motion.div>
  );
}

// Stat Card Component
function StatCard({ stat, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-start gap-4 p-5 bg-red-50 border-2 border-red-200 rounded-xl">
        <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-white text-xs font-bold">!</span>
        </div>
        <span className="text-neutral-700 leading-relaxed">{stat}</span>
      </div>
    </motion.div>
  );
}

export default function DefinitionSection() {
  return (
    <ArticleSection id="definition" title="Qu'est-ce qu'un Call to Action ?">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-8"
      >
        <p className="text-lg text-neutral-700 leading-relaxed mb-12">
          Un Call to Action (ou CTA) est tout simplement une invitation claire à
          agir. C'est le petit élément qui dit à ton visiteur quoi faire après
          avoir lu ton contenu ou découvert ton offre. Sans CTA, tu laisses ton
          audience dans le flou. Avec un CTA bien conçu, tu la guides vers la
          prochaine étape de son parcours.
        </p>

        {/* Formats de CTA */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-emerald-500 rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Les formats les plus courants
            </h3>
          </div>
          <div className="space-y-4">
            {ctaFormats.map((format, index) => (
              <FormatCard key={index} format={format} index={index} />
            ))}
          </div>
        </div>

        {/* Rôle dans le tunnel de conversion */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-emerald-500 rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Son rôle dans le tunnel de conversion
            </h3>
          </div>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Le CTA agit comme un panneau de signalisation dans ton tunnel
            marketing.
          </p>

          <div className="space-y-4 mb-8">
            {tunnelSteps.map((step, index) => (
              <TunnelStep key={index} step={step} index={index} />
            ))}
          </div>

          <p className="text-neutral-700 leading-relaxed bg-neutral-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            Sans CTA, tes efforts pour attirer du trafic restent stériles. Avec
            un CTA, chaque contenu devient un levier de conversion mesurable.
          </p>
        </div>

        {/* Statistiques */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-red-500 rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Quelques chiffres qui{" "}
              <span className="text-red-600">parlent</span>
            </h3>
          </div>
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
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
            Un site sans CTA, c'est comme un magasin sans caisse :{" "}
            <span className="text-emerald-600 font-bold">
              tes visiteurs regardent, mais ils repartent sans rien emporter.
            </span>
          </Highlight>
        </motion.div>
      </motion.div>
    </ArticleSection>
  );
}

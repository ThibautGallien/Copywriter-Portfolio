"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CheckCircle, Target, TrendingUp, Zap } from "lucide-react";
import { ArticleSection } from "@/components/blog/BlogComponents";

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

const keyPrinciples = [
  {
    principle: "Un verbe d'action clair",
    description: "Dis exactement quoi faire",
    icon: Target,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    principle: "Un bénéfice explicite",
    description: "Montre ce que l'utilisateur gagne en cliquant",
    icon: TrendingUp,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    principle: "Un contraste visuel",
    description: "Le bouton doit sauter aux yeux sans dénaturer ta charte",
    icon: Zap,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    principle: "Un positionnement stratégique",
    description: "Visible là où le lecteur est prêt à agir",
    icon: CheckCircle,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
];

const finalRules = [
  {
    number: "1",
    rule: "1 page = 1 objectif = 1 action",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    number: "2",
    rule: "Clarté + persuasion + simplicité = conversion",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "3",
    rule: "Teste, mesure, optimise en continu",
    color: "from-amber-500 to-amber-600",
  },
];

const ctaSuccess = {
  title: "Ton CTA n'est pas un détail technique",
  subtitle: "C'est ton vendeur digital le plus efficace. Traite-le comme tel.",
  action:
    "Commence simplement : un verbe d'action clair, un bénéfice visible, un design qui ressort. Le reste viendra avec tes tests.",
};

// Principle Card Component
function PrincipleCard({ item, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors"
    >
      <div className={`${item.bgColor} p-2 rounded-lg flex-shrink-0`}>
        <item.icon className={`w-5 h-5 ${item.color}`} />
      </div>
      <div>
        <span className="font-semibold text-neutral-900 block mb-1">
          {item.principle}
        </span>
        <span className="text-neutral-600 text-sm">{item.description}</span>
      </div>
    </motion.div>
  );
}

// Rule Card Component
function RuleCard({ rule, index }: any) {
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
        className="flex items-center gap-4 p-5 bg-white rounded-xl border-2 border-neutral-200 hover:border-emerald-200 transition-all"
      >
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-r ${rule.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg`}
        >
          {rule.number}
        </div>
        <span className="text-neutral-900 font-semibold">{rule.rule}</span>
      </motion.div>
    </motion.div>
  );
}

export default function ConclusionSection() {
  return (
    <ArticleSection title="Conclusion – Un bon Call to Action peut transformer tes ventes">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-8"
      >
        <div className="space-y-6 text-neutral-700 leading-relaxed text-lg mb-12">
          <p>
            Le CTA n'est pas un détail graphique. C'est le levier qui transforme
            tes lecteurs en prospects, puis tes prospects en clients.
          </p>

          <p>
            Bien pensé, il peut multiplier tes conversions sans que tu aies
            besoin de plus de trafic. Mais pour ça, il doit être testé, optimisé
            et aligné avec la promesse de ton contenu.
          </p>

          <p className="font-medium text-neutral-900">
            Si tes CTA ne rapportent rien aujourd'hui, ce n'est pas ton offre
            qui est en cause. C'est la façon dont tu guides tes visiteurs. Et
            ça, ça se corrige.
          </p>
        </div>

        {/* Checklist récapitulative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="my-12"
        >
          <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-8 border-2 border-neutral-200">
            <h3 className="text-2xl font-bold text-center mb-8 text-neutral-900">
              Checklist finale pour un CTA qui convertit
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {keyPrinciples.map((item, index) => (
                <PrincipleCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Règles fondamentales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="my-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-emerald-500 rounded-full" />
            <h3 className="text-2xl font-bold text-neutral-900">
              Retiens ces principes simples
            </h3>
          </div>
          <div className="space-y-4">
            {finalRules.map((rule, index) => (
              <RuleCard key={index} rule={rule} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Message final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="my-12"
        >
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-10 border-2 border-emerald-200 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-50 -z-10" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-neutral-900">
                {ctaSuccess.title}
              </h3>
              <p className="text-xl font-bold text-emerald-700 mb-6">
                {ctaSuccess.subtitle}
              </p>
              <p className="text-neutral-700 max-w-2xl mx-auto text-lg leading-relaxed">
                {ctaSuccess.action}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to action final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 rounded-2xl p-8 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full blur-3xl opacity-50 -z-10" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 rounded-full px-4 py-2 mb-4">
                <Zap className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-semibold text-amber-700">
                  Prêt à optimiser tes CTA ?
                </span>
              </div>
              <p className="text-amber-900 font-semibold text-lg mb-3">
                Tu veux voir comment un audit rapide de tes CTA pourrait déjà
                augmenter tes conversions ?
              </p>
              <p className="text-neutral-600">
                Postule pour un audit gratuit et je t'envoie mes recommandations
                personnalisées pour identifier où tu perds de l'argent.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </ArticleSection>
  );
}

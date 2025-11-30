"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArticleSection,
  MistakesList,
  Highlight,
} from "@/components/blog/BlogComponents";
import { X, AlertTriangle, CheckCircle } from "lucide-react";

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

const commonMistakes = [
  {
    title: "Multiplier les CTA concurrents sur une même page",
    description:
      "Proposer dix actions différentes, c'est comme crier sur un visiteur depuis toutes les directions. Résultat : il ne choisit rien. Chaque page doit avoir un objectif principal et donc un CTA principal, éventuellement accompagné de versions secondaires plus discrètes.",
  },
  {
    title: "Utiliser des formulations vagues",
    description:
      'Un "Cliquez ici" n\'incite personne. C\'est flou, impersonnel, et ça ne dit pas pourquoi cliquer. Ton CTA doit indiquer l\'action et le bénéfice. Par exemple, "Je réserve ma place gratuite" parle beaucoup plus que "Cliquez ici".',
  },
  {
    title: "Mal aligner le CTA avec la promesse de la page",
    description:
      "Un visiteur qui lit un article pour comprendre comment augmenter son trafic ne s'attend pas à tomber sur un CTA \"Achète notre formation premium\". C'est hors-sujet et ça casse la confiance. Ton CTA doit être cohérent avec le contenu qui précède.",
  },
  {
    title: "Miser sur un design joli mais illisible",
    description:
      "Un bouton pastel trop discret. Un texte blanc sur fond clair. Un design travaillé mais qui ne se voit pas. Si on ne repère pas le CTA en un clin d'œil, il ne sert à rien. Le style ne doit jamais prendre le dessus sur la lisibilité et la clarté.",
  },
];

const beforeAfterExamples = [
  {
    context: "Page d'accueil d'un site de coaching",
    before: {
      title: "Mauvais exemple",
      content:
        "Bienvenue sur notre site ! Découvre nos produits, nos services, nos actualités... Suis-nous aussi sur nos réseaux sociaux. Contacte-nous pour plus d'informations.",
      problems: [
        "Trop de choix",
        "Aucun focus",
        "Message dilué",
        "Pas de bénéfice clair",
      ],
    },
    after: {
      title: "Bon exemple",
      content:
        "Double tes conversions en 30 jours. Télécharge notre guide gratuit de 15 pages. ✓ Stratégies éprouvées ✓ Exemples concrets 👇 Entre ton email pour recevoir le guide",
      benefits: [
        "Message clair",
        "Bénéfice précis",
        "Action simple",
        "Valeur immédiate",
      ],
    },
  },
];

const designMistakes = [
  {
    mistake: "Bouton trop petit",
    problem: "Difficile à cliquer, surtout sur mobile",
    solution: "Minimum 44px de hauteur pour les boutons mobiles",
  },
  {
    mistake: "Contraste insuffisant",
    problem: "Le CTA se fond dans le design",
    solution: "Couleur qui ressort nettement du fond",
  },
  {
    mistake: "Texte trop long",
    problem: "Dilue le message principal",
    solution: "Maximum 2-4 mots pour l'action principale",
  },
  {
    mistake: "Placement incohérent",
    problem: "CTA au mauvais moment du parcours",
    solution: "Aligner le CTA avec l'intention du visiteur",
  },
];

const warningMessage = {
  title: "Un CTA raté n'est pas juste une opportunité manquée",
  subtitle: "C'est un prospect qui s'échappe",
  description:
    "Chaque visiteur qui repart sans agir représente un investissement marketing perdu et un potentiel client qui ne reviendra peut-être jamais.",
};

// Design Mistake Card Component
function DesignMistakeCard({ item, index }: any) {
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
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card className="bg-white border-2 border-neutral-200 hover:border-red-200 transition-all h-full">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <X className="w-5 h-5 text-red-600" />
              </div>
              <h4 className="font-bold text-neutral-900 flex-1">
                {item.mistake}
              </h4>
            </div>
            <div className="space-y-3">
              <div className="bg-red-50 rounded-lg p-3 border border-red-100">
                <p className="text-red-800 text-sm">
                  <strong className="font-semibold">Problème :</strong>{" "}
                  {item.problem}
                </p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-100">
                <p className="text-emerald-800 text-sm">
                  <strong className="font-semibold">Solution :</strong>{" "}
                  {item.solution}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function ErreursSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <ArticleSection
      id="erreurs"
      title="Erreurs fréquentes à éviter avec tes Call to Action"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-8"
      >
        <p className="text-lg text-neutral-700 leading-relaxed mb-12">
          Un CTA peut sembler simple à créer, mais la majorité des sites se
          tirent une balle dans le pied avec des erreurs basiques. En voici
          quatre à éviter absolument.
        </p>

        {/* Erreurs principales */}
        <div className="mb-16">
          <MistakesList mistakes={commonMistakes} />
        </div>

        {/* Exemple avant/après */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-emerald-500 rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Exemple concret : avant vs après
            </h3>
          </div>

          {beforeAfterExamples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-neutral-500 text-sm mb-6 italic bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                <strong className="text-neutral-900">Contexte :</strong>{" "}
                {example.context}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Mauvais exemple */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="bg-red-50 border-2 border-red-200 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                          <X className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="font-bold text-red-700">
                          {example.before.title}
                        </h4>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-sm mb-4 border border-red-100 shadow-sm">
                        <p className="text-neutral-700">
                          {example.before.content}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-red-700 text-xs font-semibold uppercase tracking-wide">
                          Problèmes :
                        </p>
                        {example.before.problems.map((problem, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                            <span className="text-red-700 text-sm">
                              {problem}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Bon exemple */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="bg-emerald-50 border-2 border-emerald-200 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <h4 className="font-bold text-emerald-700">
                          {example.after.title}
                        </h4>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-sm mb-4 border border-emerald-100 shadow-sm">
                        <p className="text-neutral-700">
                          {example.after.content}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-emerald-700 text-xs font-semibold uppercase tracking-wide">
                          Pourquoi ça marche :
                        </p>
                        {example.after.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                            <span className="text-emerald-700 text-sm">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Erreurs de design */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-red-500 rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Erreurs de design <span className="text-red-600">courantes</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {designMistakes.map((item, index) => (
              <DesignMistakeCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Message d'avertissement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 overflow-hidden relative">
            <CardContent className="p-8 text-center relative z-10">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-50 -z-10" />

              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">
                {warningMessage.title}
              </h3>
              <p className="text-amber-900 font-semibold text-lg mb-4">
                {warningMessage.subtitle}
              </p>
              <p className="text-neutral-700 max-w-2xl mx-auto leading-relaxed">
                {warningMessage.description}
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
            Un CTA raté, ce n'est pas juste une opportunité manquée :{" "}
            <span className="text-red-600 font-bold">
              c'est un prospect qui s'échappe.
            </span>
          </Highlight>
        </motion.div>
      </motion.div>
    </ArticleSection>
  );
}

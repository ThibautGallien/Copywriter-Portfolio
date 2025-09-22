"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArticleSection,
  MistakesList,
  Highlight,
} from "@/components/blog/BlogComponents";
import { X, AlertTriangle } from "lucide-react";

const commonMistakes = [
  {
    title: "Multiplier les CTA concurrents sur une même page",
    description:
      "Proposer dix actions différentes, c'est comme crier sur un visiteur depuis toutes les directions. Résultat : il ne choisit rien. Chaque page doit avoir un objectif principal et donc un CTA principal, éventuellement accompagné de versions secondaires plus discrètes.",
  },
  {
    title: "Utiliser des formulations vagues",
    description:
      'Un "Cliquez ici" n\'incite personne. C\'est flou, impersonnel, et ça ne dit pas pourquoi cliquer. Votre CTA doit indiquer l\'action et le bénéfice. Par exemple, "Je réserve ma place gratuite" parle beaucoup plus que "Cliquez ici".',
  },
  {
    title: "Mal aligner le CTA avec la promesse de la page",
    description:
      "Un visiteur qui lit un article pour comprendre comment augmenter son trafic ne s'attend pas à tomber sur un CTA \"Achetez notre formation premium\". C'est hors-sujet et ça casse la confiance. Votre CTA doit être cohérent avec le contenu qui précède.",
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
      title: "❌ Mauvais exemple",
      content:
        "Bienvenue sur notre site ! Découvrez nos produits, nos services, nos actualités... Suivez-nous aussi sur nos réseaux sociaux. Contactez-nous pour plus d'informations.",
      problems: [
        "Trop de choix",
        "Aucun focus",
        "Message dilué",
        "Pas de bénéfice clair",
      ],
    },
    after: {
      title: "✅ Bon exemple",
      content:
        "Doublez vos conversions en 30 jours. Téléchargez notre guide gratuit de 15 pages. ✓ Stratégies éprouvées ✓ Exemples concrets 👇 Entrez votre email pour recevoir le guide",
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

export default function ErreursSection() {
  return (
    <ArticleSection
      id="erreurs"
      title="Erreurs fréquentes à éviter avec vos Call to Action"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-12"
      >
        <p className="text-gray-300 leading-relaxed mb-8">
          Un CTA peut sembler simple à créer, mais la majorité des sites se
          tirent une balle dans le pied avec des erreurs basiques. En voici
          quatre à éviter absolument.
        </p>

        {/* Erreurs principales */}
        <div className="mb-12">
          <MistakesList mistakes={commonMistakes} />
        </div>

        {/* Exemple avant/après */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-[#9B5DE5]">
            Exemple concret : avant vs après
          </h3>

          {beforeAfterExamples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-gray-400 text-sm mb-4 italic">
                Contexte : {example.context}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Mauvais exemple */}
                <Card className="bg-red-900/20 border border-red-500/30">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                      <X className="w-5 h-5" />
                      {example.before.title}
                    </h4>
                    <div className="bg-gray-800/50 rounded p-4 text-sm mb-4">
                      <p className="text-gray-300">{example.before.content}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-red-300 text-xs font-medium">
                        Problèmes :
                      </p>
                      {example.before.problems.map((problem, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                          <span className="text-red-300 text-xs">
                            {problem}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Bon exemple */}
                <Card className="bg-green-900/20 border border-green-500/30">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-green-400 mb-3">
                      {example.after.title}
                    </h4>
                    <div className="bg-gray-800/50 rounded p-4 text-sm mb-4">
                      <p className="text-gray-300">{example.after.content}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-green-300 text-xs font-medium">
                        Pourquoi ça marche :
                      </p>
                      {example.after.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                          <span className="text-green-300 text-xs">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Erreurs de design */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold font-space-grotesk mb-6 text-[#9B5DE5]">
            Erreurs de design courantes
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {designMistakes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 h-full">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                      <X className="w-4 h-4" />
                      {item.mistake}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong>Problème :</strong> {item.problem}
                    </p>
                    <p className="text-[#06D6A0] text-sm">
                      <strong>Solution :</strong> {item.solution}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Message d'avertissement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border-amber-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-amber-500 mr-3" />
                <h3 className="text-xl font-bold text-amber-300">
                  {warningMessage.title}
                </h3>
              </div>
              <p className="text-amber-200 font-medium text-center mb-3">
                {warningMessage.subtitle}
              </p>
              <p className="text-gray-300 text-center text-sm">
                {warningMessage.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <Highlight>
          Un CTA raté, ce n'est pas juste une opportunité manquée :
          <span className="text-[#FFD400] font-bold">
            {" "}
            c'est un prospect qui s'échappe.
          </span>
        </Highlight>
      </motion.div>
    </ArticleSection>
  );
}

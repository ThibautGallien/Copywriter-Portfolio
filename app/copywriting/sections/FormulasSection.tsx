/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";

const aidaExample = [
  { label: "Attention", text: "Tu perds 2 300€/mois à cause de ça" },
  {
    label: "Intérêt",
    text: "Ton taux de conversion est bloqué à 1,8%. La moyenne de ton secteur ? 4,2%.",
  },
  {
    label: "Désir",
    text: "Imagine doubler tes revenus sans dépenser 1€ de plus en pub.",
  },
  { label: "Action", text: "Réserve ton audit gratuit maintenant →" },
];

const pasExample = [
  {
    label: "Problem",
    text: "Tu passes 6h/semaine à faire ta compta manuellement.",
  },
  {
    label: "Agitate",
    text: "C'est 24h par mois. 288h par an. 36 journées de travail perdues à remplir des tableaux Excel au lieu de développer ton business.",
  },
  {
    label: "Solve",
    text: "Notre logiciel automatise 90% de tes tâches comptables. 6h → 45 minutes.",
  },
];

export default function FormulasSection() {
  return (
    <ArticleSection
      id="formulas"
      title="Les 3 formules de copywriting qui fonctionnent vraiment (et pourquoi)"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="text-neutral-600 leading-relaxed mb-8">
          Parlons formules. AIDA, PAS, BAB. Tu les as déjà vues 50 fois. Mais
          voilà ce que personne ne t'explique : pourquoi elles marchent.
        </p>

        <h3 className="text-2xl font-bold text-emerald-600 mb-4">
          AIDA : la base incontournable
        </h3>

        <p className="text-neutral-600 leading-relaxed mb-6">
          AIDA = Attention, Intérêt, Désir, Action. C'est la progression
          naturelle de décision d'achat. Pourquoi ça marche ? Parce que ça suit
          le chemin neurologique de décision. Le cerveau humain fonctionne comme
          ça depuis 200 000 ans. Tu peux pas le hacker. Tu peux juste
          l'accompagner.
        </p>

        <div className="bg-white rounded-2xl p-6 border border-neutral-200 mb-8">
          <h4 className="font-bold text-emerald-600 mb-4">Exemple email</h4>
          <div className="space-y-3">
            {aidaExample.map((item, index) => (
              <div
                key={index}
                className="bg-neutral-50 rounded-xl p-3 border border-neutral-200"
              >
                <span className="text-emerald-600 font-semibold text-sm">
                  {item.label} :
                </span>
                <p className="text-neutral-600 text-sm mt-1">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-emerald-600 mb-4">
          PAS : pour les problèmes douloureux
        </h3>

        <p className="text-neutral-600 leading-relaxed mb-6">
          PAS = Problem, Agitate, Solve. Tu identifies un problème. Tu
          l'amplifies (tu "agites" la douleur). Puis tu apportes la solution.
          C'est brutal. Ça exploite le biais d'aversion à la perte, documenté
          par Kahneman et Tversky en 1979. On est 2,5x plus motivés à éviter une
          perte qu'à gagner un bénéfice équivalent.
        </p>

        <div className="bg-white rounded-2xl p-6 border border-neutral-200 mb-8">
          <h4 className="font-bold text-emerald-600 mb-4">
            Exemple page de vente (logiciel de compta)
          </h4>
          <div className="space-y-3">
            {pasExample.map((item, index) => (
              <div
                key={index}
                className="bg-neutral-50 rounded-xl p-3 border border-neutral-200"
              >
                <span className="text-blue-600 font-semibold text-sm">
                  {item.label} :
                </span>
                <p className="text-neutral-600 text-sm mt-1">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>

        <Highlight>
          La différence entre AIDA et PAS ? AIDA part du positif (opportunité).
          PAS part du négatif (douleur).
          <span className="text-emerald-600 font-bold">
            {" "}
            Utilise PAS pour les problèmes vraiment douloureux (santé, argent,
            temps perdu). AIDA pour les opportunités de gain.
          </span>
        </Highlight>

        <h3 className="text-2xl font-bold text-emerald-600 mb-4 mt-8">
          La vérité sur la créativité en copywriting
        </h3>

        <p className="text-neutral-600 leading-relaxed mb-6">
          Maintenant, parlons de l'angle controversé. Tout le monde te dit que
          le bon copywriting, c'est être créatif. Trouver l'accroche qui claque.
          Le jeu de mots génial.
        </p>

        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-6">
          <h4 className="font-bold text-red-600 mb-3">
            C'est faux dans 80% des cas.
          </h4>
          <p className="text-neutral-600">
            Les copies qui convertissent le mieux sont souvent ennuyeuses.
            "Comment perdre 5kg en 30 jours sans régime drastique". C'est
            prévisible. C'est banal. Et pourtant, ce type de titre convertit
            systématiquement mieux que les versions "créatives" avec métaphores
            poétiques.
          </p>
        </div>

        <p className="text-neutral-600 leading-relaxed">
          Pourquoi ? Parce que la créativité sert ton ego, pas ton client. Ton
          client veut savoir vite si c'est pour lui.{" "}
          <strong className="text-emerald-600">
            La clarté bat la créativité 8 fois sur 10.
          </strong>
        </p>
      </motion.div>
    </ArticleSection>
  );
}

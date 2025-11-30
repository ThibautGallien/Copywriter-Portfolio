/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";

export default function DefinitionSection() {
  return (
    <ArticleSection
      id="definition"
      title="C'est quoi le copywriting (et ce que ce n'est PAS)"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-emerald-600 mb-4">
          La définition qui change tout
        </h3>

        <p className="text-neutral-600 leading-relaxed mb-6">
          Le copywriting, c'est l'écriture publicitaire persuasive. Pas
          l'écriture "jolie" ou "intelligente". L'écriture qui vend. Chaque mot
          a un job : pousser ton lecteur vers une action spécifique. Cliquer.
          Acheter. S'inscrire. Télécharger.
        </p>

        <p className="text-neutral-600 leading-relaxed mb-8">
          La nuance est critique. Un article de blog peut être brillant, bien
          écrit, optimisé SEO. Mais si personne ne clique sur ton CTA à la fin,
          c'est pas du copywriting. C'est de la rédaction de contenu. Les deux
          ont leur place. Mais confondre les deux, c'est perdre de l'argent.
        </p>

        <h3 className="text-2xl font-bold text-emerald-600 mb-4">
          Copywriting vs rédaction web : la confusion mortelle
        </h3>

        <p className="text-neutral-600 leading-relaxed mb-8">
          La confusion vient de là : les deux utilisent des mots. Mais
          l'intention est radicalement différente.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-blue-200 transition-colors"
          >
            <h4 className="font-bold text-blue-600 mb-3">Rédaction Web</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                • <strong className="text-neutral-900">Objectif :</strong>{" "}
                Informer, éduquer
              </li>
              <li>
                • <strong className="text-neutral-900">KPI :</strong> Trafic,
                temps sur page, SEO
              </li>
              <li>
                • <strong className="text-neutral-900">Style :</strong> Neutre,
                pédagogique
              </li>
              <li>
                • <strong className="text-neutral-900">Temporalité :</strong>{" "}
                Long terme
              </li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-emerald-200 transition-colors"
          >
            <h4 className="font-bold text-emerald-600 mb-3">Copywriting</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                • <strong className="text-neutral-900">Objectif :</strong>{" "}
                Convertir, vendre
              </li>
              <li>
                • <strong className="text-neutral-900">KPI :</strong> Taux de
                conversion, CA
              </li>
              <li>
                • <strong className="text-neutral-900">Style :</strong>{" "}
                Persuasif, émotionnel
              </li>
              <li>
                • <strong className="text-neutral-900">Temporalité :</strong>{" "}
                Court terme, immédiat
              </li>
            </ul>
          </motion.div>
        </div>

        <Highlight>
          Un bon rédacteur web n'est pas forcément un bon copywriter. Et
          vice-versa.
          <span className="text-emerald-600 font-bold">
            {" "}
            Les deux compétences sont complémentaires dans une stratégie
            marketing complète.
          </span>
        </Highlight>

        <h3 className="text-2xl font-bold text-emerald-600 mb-4 mt-8">
          Copywriter : métier ou compétence ?
        </h3>

        <p className="text-neutral-600 leading-relaxed mb-6">
          Tu peux être copywriter à temps plein (freelance ou agence) ou
          l'appliquer à ton business sans devenir expert. La différence ? Le
          copywriter écrit pour 15 clients différents dans 15 secteurs. Toi, tu
          écris juste pour TON business.
        </p>

        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-200 rounded-2xl p-6">
          <p className="text-neutral-600">
            Voilà ce que personne ne te dit : tu n'as pas besoin de devenir
            copywriter pro pour booster tes conversions. Tu as besoin de
            maîtriser{" "}
            <strong className="text-emerald-700">
              20% des techniques pour obtenir 80% des résultats
            </strong>
            .
          </p>
        </div>
      </motion.div>
    </ArticleSection>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";

export default function DefinitionSection() {
  return (
    <ArticleSection
      id="definition"
      title="C'est quoi une landing page (et pourquoi 80% sont mal foutues)"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg mb-6 text-neutral-700">
          Une landing page, c&apos;est une page web avec{" "}
          <strong className="text-neutral-900">un seul objectif</strong> :
          transformer un visiteur en lead ou en client.
        </p>

        <p className="mb-6 text-neutral-700">
          Contrairement à ta page d&apos;accueil qui propose 15 liens, 8
          services et 3 CTA différents, une landing page ne laisse{" "}
          <strong className="text-neutral-900">que 2 choix</strong> au visiteur
          :
        </p>

        <ol className="list-decimal list-inside mb-6 space-y-2 text-neutral-700">
          <li>
            Faire l&apos;action que tu veux (s&apos;inscrire, acheter,
            télécharger)
          </li>
          <li>Partir</li>
        </ol>

        <p className="mb-8 text-neutral-700">
          Pas de menu. Pas de sidebar. Pas de &quot;En savoir plus sur
          nous&quot;. Juste{" "}
          <strong className="text-neutral-900">toi → offre → action</strong>.
        </p>

        {/* IMAGE PLACEHOLDER */}
        <div className="my-8 bg-neutral-100 rounded-2xl p-8 text-center border-2 border-dashed border-neutral-300">
          <div className="text-neutral-400 mb-4">📸 IMAGE PLACEHOLDER</div>
          <p className="text-sm text-neutral-500">
            Illustration : Landing page (focus CTA) vs Page d&apos;accueil (menu
            + liens)
            <br />
            Dimensions recommandées : 1200x600px
            <br />
            Fichier : /public/images/landing-page-vs-homepage.jpg
          </p>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-blue-600">
          Landing page vs Page d&apos;accueil
        </h3>

        {/* Tableau comparatif */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-neutral-100">
                <th className="border border-neutral-300 p-3 text-left text-neutral-900">
                  Critère
                </th>
                <th className="border border-neutral-300 p-3 text-left text-neutral-900">
                  Page d&apos;accueil
                </th>
                <th className="border border-neutral-300 p-3 text-left text-neutral-900">
                  Landing page
                </th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr>
                <td className="border border-neutral-300 p-3">
                  <strong className="text-neutral-900">Objectif</strong>
                </td>
                <td className="border border-neutral-300 p-3">
                  Présenter l&apos;entreprise
                </td>
                <td className="border border-neutral-300 p-3 bg-blue-50">
                  Convertir sur 1 action
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-300 p-3">
                  <strong className="text-neutral-900">Navigation</strong>
                </td>
                <td className="border border-neutral-300 p-3">
                  Menu complet, 10+ liens
                </td>
                <td className="border border-neutral-300 p-3 bg-blue-50">
                  0 ou 1 lien
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-300 p-3">
                  <strong className="text-neutral-900">CTA</strong>
                </td>
                <td className="border border-neutral-300 p-3">
                  3-5 CTA différents
                </td>
                <td className="border border-neutral-300 p-3 bg-blue-50">
                  1 CTA répété 3-4 fois
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-300 p-3">
                  <strong className="text-neutral-900">
                    Taux de conversion
                  </strong>
                </td>
                <td className="border border-neutral-300 p-3">
                  1-3% en moyenne
                </td>
                <td className="border border-neutral-300 p-3 bg-blue-50">
                  5-15% si bien conçue
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-300 p-3">
                  <strong className="text-neutral-900">Durée de vie</strong>
                </td>
                <td className="border border-neutral-300 p-3">Permanente</td>
                <td className="border border-neutral-300 p-3 bg-blue-50">
                  Temporaire (campagne)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-blue-600">
          Exemple concret
        </h3>

        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-4">
          <p className="font-bold mb-2 text-neutral-900">
            ❌ Page d&apos;accueil
          </p>
          <p className="text-neutral-700 mb-4">
            &quot;Bienvenue chez XYZ. Découvrez nos services, notre équipe, nos
            valeurs, nos clients...&quot;
          </p>
          <p className="text-sm text-neutral-600">
            → Résultat : Le visiteur ne sait pas quoi faire, il explore et
            repart.
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-6">
          <p className="font-bold mb-2 text-neutral-900">✅ Landing page</p>
          <p className="text-neutral-700 mb-4">
            &quot;Télécharge notre checklist 47 points pour auditer ton site en
            15 minutes. Entre ton email.&quot;
          </p>
          <p className="text-sm text-neutral-600">
            → Résultat : Le visiteur sait exactement ce qu&apos;il va recevoir
            et comment l&apos;obtenir.
          </p>
        </div>

        <Highlight>
          La différence entre une landing page à 2% et une à 15% ? Souvent,
          c&apos;est juste 5 éléments mal placés.
        </Highlight>
      </motion.div>
    </ArticleSection>
  );
}

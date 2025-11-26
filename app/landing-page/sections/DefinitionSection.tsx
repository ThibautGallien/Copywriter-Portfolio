"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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
        <p className="text-lg mb-6">
          Une landing page, c&apos;est une page web avec{" "}
          <strong>un seul objectif</strong> : transformer un visiteur en lead ou
          en client.
        </p>

        <p className="mb-6">
          Contrairement à ta page d&apos;accueil qui propose 15 liens, 8
          services et 3 CTA différents, une landing page ne laisse{" "}
          <strong>que 2 choix</strong> au visiteur :
        </p>

        <ol className="list-decimal list-inside mb-6 space-y-2">
          <li>
            Faire l&apos;action que tu veux (s&apos;inscrire, acheter,
            télécharger)
          </li>
          <li>Partir</li>
        </ol>

        <p className="mb-8">
          Pas de menu. Pas de sidebar. Pas de &quot;En savoir plus sur
          nous&quot;. Juste <strong>toi → offre → action</strong>.
        </p>

        {/* IMAGE PLACEHOLDER : Illustration landing page vs page d'accueil */}
        <div className="my-8 bg-gray-800/50 rounded-lg p-8 text-center">
          <div className="text-gray-400 mb-4">📸 IMAGE PLACEHOLDER</div>
          <p className="text-sm text-gray-500">
            Illustration : Landing page (focus CTA) vs Page d&apos;accueil (menu
            + liens)
            <br />
            Dimensions recommandées : 1200x600px
            <br />
            Fichier : /public/images/landing-page-vs-homepage.jpg
          </p>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-[#9B5DE5]">
          Landing page vs Page d&apos;accueil
        </h3>

        {/* Tableau comparatif */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-700 p-3 text-left">
                  Critère
                </th>
                <th className="border border-gray-700 p-3 text-left">
                  Page d&apos;accueil
                </th>
                <th className="border border-gray-700 p-3 text-left">
                  Landing page
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 p-3">
                  <strong>Objectif</strong>
                </td>
                <td className="border border-gray-700 p-3">
                  Présenter l&apos;entreprise
                </td>
                <td className="border border-gray-700 p-3 bg-green-900/20">
                  Convertir sur 1 action
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-3">
                  <strong>Navigation</strong>
                </td>
                <td className="border border-gray-700 p-3">
                  Menu complet, 10+ liens
                </td>
                <td className="border border-gray-700 p-3 bg-green-900/20">
                  0 ou 1 lien
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-3">
                  <strong>CTA</strong>
                </td>
                <td className="border border-gray-700 p-3">
                  3-5 CTA différents
                </td>
                <td className="border border-gray-700 p-3 bg-green-900/20">
                  1 CTA répété 3-4 fois
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-3">
                  <strong>Taux de conversion</strong>
                </td>
                <td className="border border-gray-700 p-3">1-3% en moyenne</td>
                <td className="border border-gray-700 p-3 bg-green-900/20">
                  5-15% si bien conçue
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-3">
                  <strong>Durée de vie</strong>
                </td>
                <td className="border border-gray-700 p-3">Permanente</td>
                <td className="border border-gray-700 p-3 bg-green-900/20">
                  Temporaire (campagne)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-[#9B5DE5]">
          Exemple concret
        </h3>

        <Card className="bg-red-900/20 border-red-500/50 mb-4">
          <CardContent className="p-6">
            <p className="font-bold mb-2">❌ Page d&apos;accueil</p>
            <p className="text-gray-300 mb-4">
              &quot;Bienvenue chez XYZ. Découvrez nos services, notre équipe,
              nos valeurs, nos clients...&quot;
            </p>
            <p className="text-sm text-gray-400">
              → Résultat : Le visiteur ne sait pas quoi faire, il explore et
              repart.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-green-900/20 border-green-500/50 mb-6">
          <CardContent className="p-6">
            <p className="font-bold mb-2">✅ Landing page</p>
            <p className="text-gray-300 mb-4">
              &quot;Télécharge notre checklist 47 points pour auditer ton site
              en 15 minutes. Entre ton email.&quot;
            </p>
            <p className="text-sm text-gray-400">
              → Résultat : Le visiteur sait exactement ce qu&apos;il va recevoir
              et comment l&apos;obtenir.
            </p>
          </CardContent>
        </Card>

        <Highlight>
          La différence entre une landing page à 2% et une à 15% ? Souvent,
          c&apos;est juste 5 éléments mal placés.
        </Highlight>
      </motion.div>
    </ArticleSection>
  );
}

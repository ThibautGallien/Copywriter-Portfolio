"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection } from "@/components/blog/BlogComponents";

export default function TypesSection() {
  return (
    <ArticleSection
      id="types"
      title="Les 4 types de landing pages (et quand les utiliser)"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-8">
          {/* Type #1 */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9B5DE5] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                  1
                </span>
                <h3 className="text-2xl font-bold">Lead Magnet</h3>
              </div>

              <p className="text-green-400 font-bold mb-4">
                Conversion moyenne : 15-25%
              </p>

              <div className="mb-4">
                <p className="font-bold mb-2">Objectif</p>
                <p className="text-gray-300">
                  Collecter email contre contenu gratuit
                </p>
              </div>

              <div className="mb-4">
                <p className="font-bold mb-2">Cas d&apos;usage</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Ebook / guide gratuit</li>
                  <li>Webinaire</li>
                  <li>Checklist / template</li>
                  <li>Essai gratuit SaaS</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-bold mb-2">Éléments clés</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Formulaire 2-3 champs max</li>
                  <li>Aperçu du contenu (sommaire, screenshots)</li>
                  <li>Preuve sociale (&quot;Téléchargé 12 400+ fois&quot;)</li>
                </ul>
              </div>

              <p className="text-sm text-gray-400">
                <strong>Benchmark</strong> : Taux de conversion moyen 18,7%
                selon Unbounce (2024).
              </p>
            </CardContent>
          </Card>

          {/* Type #2 */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9B5DE5] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                  2
                </span>
                <h3 className="text-2xl font-bold">Vente e-commerce</h3>
              </div>

              <p className="text-green-400 font-bold mb-4">
                Conversion moyenne : 3-8%
              </p>

              <div className="mb-4">
                <p className="font-bold mb-2">Objectif</p>
                <p className="text-gray-300">Vendre un produit spécifique</p>
              </div>

              <div className="mb-4">
                <p className="font-bold mb-2">Cas d&apos;usage</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Lancement nouveau produit</li>
                  <li>Promotion flash</li>
                  <li>Pré-commande</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-bold mb-2">Éléments clés</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Photos produit haute qualité (6-8 angles)</li>
                  <li>Urgence (&quot;Offre expire dans 4h&quot;)</li>
                  <li>Avis clients avec photos</li>
                  <li>Garanties (livraison gratuite, retour 30j)</li>
                </ul>
              </div>

              <p className="text-sm text-gray-400">
                <strong>Benchmark</strong> : Taux de conversion moyen 4,2% selon
                Shopify (2024).
              </p>
            </CardContent>
          </Card>

          {/* Type #3 */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9B5DE5] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                  3
                </span>
                <h3 className="text-2xl font-bold">Démo B2B</h3>
              </div>

              <p className="text-green-400 font-bold mb-4">
                Conversion moyenne : 5-12%
              </p>

              <div className="mb-4">
                <p className="font-bold mb-2">Objectif</p>
                <p className="text-gray-300">Obtenir un RDV qualifié</p>
              </div>

              <div className="mb-4">
                <p className="font-bold mb-2">Cas d&apos;usage</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>SaaS B2B</li>
                  <li>Services haut de gamme</li>
                  <li>Solutions entreprise</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-bold mb-2">Éléments clés</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Vidéo démo 60-90 secondes</li>
                  <li>Logos clients</li>
                  <li>ROI chiffré (&quot;Économisez 40h/mois&quot;)</li>
                  <li>Formulaire qualifiant (5-7 champs OK en B2B)</li>
                </ul>
              </div>

              <p className="text-sm text-gray-400">
                <strong>Benchmark</strong> : Taux de conversion moyen 8,4% selon
                HubSpot (2024).
              </p>
            </CardContent>
          </Card>

          {/* Type #4 */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#9B5DE5] text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                  4
                </span>
                <h3 className="text-2xl font-bold">Événement</h3>
              </div>

              <p className="text-green-400 font-bold mb-4">
                Conversion moyenne : 20-40%
              </p>

              <div className="mb-4">
                <p className="font-bold mb-2">Objectif</p>
                <p className="text-gray-300">Inscrire des participants</p>
              </div>

              <div className="mb-4">
                <p className="font-bold mb-2">Cas d&apos;usage</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Webinaire</li>
                  <li>Conférence</li>
                  <li>Atelier</li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-bold mb-2">Éléments clés</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>Date, heure, lieu très visibles</li>
                  <li>Programme détaillé</li>
                  <li>Intervenants avec photos + bios</li>
                  <li>Compteur de places restantes</li>
                </ul>
              </div>

              <p className="text-sm text-gray-400">
                <strong>Benchmark</strong> : Taux de conversion moyen 28,3% pour
                événements gratuits, 12,1% pour payants (Eventbrite, 2024).
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tableau récapitulatif */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-6 text-[#9B5DE5]">
            Comment choisir ?
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800">
                  <th className="border border-gray-700 p-3 text-left">
                    Objectif
                  </th>
                  <th className="border border-gray-700 p-3 text-left">Type</th>
                  <th className="border border-gray-700 p-3 text-left">
                    Formulaire
                  </th>
                  <th className="border border-gray-700 p-3 text-left">
                    Taux moyen
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-700 p-3">
                    Collecter emails
                  </td>
                  <td className="border border-gray-700 p-3">Lead magnet</td>
                  <td className="border border-gray-700 p-3">2-3 champs</td>
                  <td className="border border-gray-700 p-3 text-green-400 font-bold">
                    18,7%
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-3">
                    Vendre &lt;100€
                  </td>
                  <td className="border border-gray-700 p-3">E-commerce</td>
                  <td className="border border-gray-700 p-3">
                    0 (direct achat)
                  </td>
                  <td className="border border-gray-700 p-3 text-green-400 font-bold">
                    4,2%
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-3">
                    Inscrire événement
                  </td>
                  <td className="border border-gray-700 p-3">Événement</td>
                  <td className="border border-gray-700 p-3">3-4 champs</td>
                  <td className="border border-gray-700 p-3 text-green-400 font-bold">
                    28,3%
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-3">
                    Vendre &gt;1000€
                  </td>
                  <td className="border border-gray-700 p-3">Démo B2B</td>
                  <td className="border border-gray-700 p-3">5-7 champs</td>
                  <td className="border border-gray-700 p-3 text-green-400 font-bold">
                    8,4%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </ArticleSection>
  );
}

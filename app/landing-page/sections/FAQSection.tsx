"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection } from "@/components/blog/BlogComponents";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "C'est quoi une landing page ?",
      answer: (
        <>
          <p className="mb-4">
            Une landing page est une page web avec{" "}
            <strong>un seul objectif</strong> : transformer un visiteur en lead
            ou en client.
          </p>
          <p className="mb-4">
            Contrairement à une page d&apos;accueil qui propose 15 liens et 3
            CTA différents, une landing page ne laisse que 2 choix : faire
            l&apos;action demandée (s&apos;inscrire, acheter, télécharger) ou
            partir.
          </p>
          <p className="mb-4">
            Pas de menu, pas de sidebar, pas de distraction.
          </p>
          <p className="text-sm text-gray-400">
            <strong>Taux de conversion moyen</strong> : 1,75% pour les landing
            pages moyennes, 11,45% pour les 10% meilleures (source : Unbounce,
            analyse de 44 000 pages).
          </p>
        </>
      ),
    },
    {
      question: "Quel est le taux de conversion moyen d'une landing page ?",
      answer: (
        <>
          <p className="mb-4">
            Le taux de conversion moyen d&apos;une landing page est de{" "}
            <strong>2,35%</strong> tous secteurs confondus (source : Unbounce
            2024, analyse de 44 000 landing pages).
          </p>
          <p className="mb-4">
            Les 10% meilleures atteignent <strong>11,45%</strong>.
          </p>
          <p className="mb-4 font-bold">Par type :</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              Lead magnet (ebook, guide) :{" "}
              <strong className="text-green-400">18,7%</strong> en moyenne
            </li>
            <li>
              E-commerce (vente produit) :{" "}
              <strong className="text-green-400">4,2%</strong> en moyenne
            </li>
            <li>
              Démo B2B (prise de RDV) :{" "}
              <strong className="text-green-400">8,4%</strong> en moyenne
            </li>
            <li>
              Événement gratuit :{" "}
              <strong className="text-green-400">28,3%</strong> en moyenne
            </li>
          </ul>
          <p className="text-sm text-gray-400">
            La différence ? 8 éléments clés que 90% des entreprises oublient.
          </p>
        </>
      ),
    },
    {
      question: "Combien coûte la création d'une landing page ?",
      answer: (
        <>
          <p className="mb-4 font-bold">
            Le coût varie selon l&apos;approche :
          </p>

          <div className="mb-4">
            <p className="font-bold text-[#9B5DE5] mb-2">DIY gratuit</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>WordPress + Elementor (si tu as déjà WordPress)</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-bold text-[#9B5DE5] mb-2">Outils no-code</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Unbounce : 90€/mois</li>
              <li>Leadpages : 37€/mois</li>
              <li>Systeme.io : gratuit jusqu&apos;à 2000 contacts</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-bold text-[#9B5DE5] mb-2">Freelance/agence</p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Landing page template personnalisé : 800-1 500€</li>
              <li>
                Landing page sur mesure (design custom + copywriting) : 2 000-3
                500€
              </li>
              <li>
                Landing page premium (design + copy + A/B testing + optimisation
                3 mois) : 4 000-8 000€
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-400">
            <strong>Mon conseil</strong> : Commence avec un template Unbounce à
            90€/mois pour tester rapidement. Investis dans du custom quand tu
            génères 50+ leads/mois.
          </p>
        </>
      ),
    },
    {
      question: "Landing page vs page d'accueil : quelle différence ?",
      answer: (
        <>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-800">
                  <th className="border border-gray-700 p-2 text-left">
                    Critère
                  </th>
                  <th className="border border-gray-700 p-2 text-left">
                    Page d&apos;accueil
                  </th>
                  <th className="border border-gray-700 p-2 text-left">
                    Landing page
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-700 p-2">
                    <strong>Objectif</strong>
                  </td>
                  <td className="border border-gray-700 p-2">
                    Présenter l&apos;entreprise
                  </td>
                  <td className="border border-gray-700 p-2 bg-green-900/20">
                    Convertir sur 1 action
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-2">
                    <strong>Navigation</strong>
                  </td>
                  <td className="border border-gray-700 p-2">
                    Menu complet, 10+ liens
                  </td>
                  <td className="border border-gray-700 p-2 bg-green-900/20">
                    0 ou 1 lien
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-2">
                    <strong>CTA</strong>
                  </td>
                  <td className="border border-gray-700 p-2">
                    3-5 CTA différents
                  </td>
                  <td className="border border-gray-700 p-2 bg-green-900/20">
                    1 CTA répété 3-4 fois
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-2">
                    <strong>Conversion</strong>
                  </td>
                  <td className="border border-gray-700 p-2">
                    1-3% en moyenne
                  </td>
                  <td className="border border-gray-700 p-2 bg-green-900/20">
                    5-15% si bien conçue
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-2">
                    <strong>Durée de vie</strong>
                  </td>
                  <td className="border border-gray-700 p-2">Permanente</td>
                  <td className="border border-gray-700 p-2 bg-green-900/20">
                    Temporaire (campagne)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-400">
            <strong>Résultat</strong> : Landing pages avec 1 CTA convertissent
            266% mieux que celles avec 2+ CTA (étude HubSpot, 5 000 pages).
          </p>
        </>
      ),
    },
  ];

  return (
    <ArticleSection id="faq" title="FAQ – Landing Page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* VIDEO PLACEHOLDER */}
        <div className="mb-8 bg-gray-800/50 rounded-lg p-8 text-center border-2 border-dashed border-gray-700">
          <div className="text-gray-400 mb-4 text-2xl">
            🎥 VIDEO PLACEHOLDER
          </div>
          <p className="text-sm text-gray-500 mb-2">
            <strong>À venir</strong> : Vidéo FAQ complète (5-8 minutes)
          </p>
          <p className="text-sm text-gray-500">
            Réponses vidéo aux 4 questions les plus posées sur les landing pages
            <br />
            Format : Face caméra ou screen recording avec annotations
            <br />
            Dimensions recommandées : 1920x1080px (16:9)
            <br />
            Impact : +40% temps sur page, signal engagement fort pour Google
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-0">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                >
                  <h3 className="text-lg font-bold pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#9B5DE5] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </ArticleSection>
  );
}

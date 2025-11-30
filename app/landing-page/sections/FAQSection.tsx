"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ArticleSection } from "@/components/blog/BlogComponents";

const faqs = [
  {
    question: "Combien coûte la création d'une landing page ?",
    answer: (
      <>
        <p className="mb-4">
          <strong className="text-neutral-900">Version freelance</strong> : 800€
          - 3 000€
        </p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>
              <strong className="text-neutral-900">800€ - 1 500€</strong> :
              Template personnalisé (Webflow, WordPress, Framer)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>
              <strong className="text-neutral-900">1 500€ - 3 000€</strong> :
              Design sur-mesure + copywriting optimisé
            </span>
          </li>
        </ul>
        <p className="mb-4">
          <strong className="text-neutral-900">Version agence</strong> : 3 000€
          - 15 000€
        </p>
        <p className="text-sm text-neutral-600">
          <strong className="text-neutral-900">Mon conseil</strong> : Commence
          avec un template à 800€. Si tu convertis à 5%+, investis dans du
          sur-mesure.
        </p>
      </>
    ),
  },
  {
    question: "Puis-je créer ma landing page moi-même ?",
    answer: (
      <>
        <p className="mb-4">
          <strong className="text-neutral-900">Oui</strong>, avec des outils
          no-code :
        </p>
        <div className="space-y-4 mb-4">
          <div className="bg-neutral-50 border border-neutral-200 p-4 rounded-xl">
            <p className="font-bold mb-2 text-neutral-900">Unbounce</p>
            <p className="text-sm text-neutral-600 mb-2">
              Le plus simple. Templates optimisés. A/B testing intégré.
            </p>
            <p className="text-sm">
              <strong className="text-neutral-900">Prix</strong> : 90€/mois
            </p>
          </div>
          <div className="bg-neutral-50 border border-neutral-200 p-4 rounded-xl">
            <p className="font-bold mb-2 text-neutral-900">Webflow</p>
            <p className="text-sm text-neutral-600 mb-2">
              Plus technique. Flexibilité totale. Nécessite quelques heures
              d&apos;apprentissage.
            </p>
            <p className="text-sm">
              <strong className="text-neutral-900">Prix</strong> : 14€/mois
            </p>
          </div>
          <div className="bg-neutral-50 border border-neutral-200 p-4 rounded-xl">
            <p className="font-bold mb-2 text-neutral-900">Framer</p>
            <p className="text-sm text-neutral-600 mb-2">
              Design moderne. Animations fluides. Courbe d&apos;apprentissage
              moyenne.
            </p>
            <p className="text-sm">
              <strong className="text-neutral-900">Prix</strong> : 5€/mois (plan
              Basique)
            </p>
          </div>
        </div>
        <p className="text-sm text-neutral-600">
          <strong className="text-neutral-900">Mais</strong> : Le copywriting
          reste la partie la plus critique. Si ton titre ne parle pas au client,
          même le plus beau design ne convertira pas.
        </p>
      </>
    ),
  },
  {
    question:
      "Quelle différence entre une landing page et une page d'accueil ?",
    answer: (
      <>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-neutral-100">
                <th className="border border-neutral-300 p-3 text-left text-neutral-900">
                  Critère
                </th>
                <th className="border border-neutral-300 p-3 text-left text-neutral-900">
                  Landing Page
                </th>
                <th className="border border-neutral-300 p-3 text-left text-neutral-900">
                  Page d&apos;accueil
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-neutral-300 p-3 font-bold text-neutral-900">
                  Objectif
                </td>
                <td className="border border-neutral-300 p-3 bg-emerald-50 text-neutral-700">
                  1 seul : conversion (lead, vente, inscription)
                </td>
                <td className="border border-neutral-300 p-3 text-neutral-700">
                  Multiple : présenter l&apos;entreprise, naviguer vers
                  plusieurs pages
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-300 p-3 font-bold text-neutral-900">
                  Navigation
                </td>
                <td className="border border-neutral-300 p-3 bg-emerald-50 text-neutral-700">
                  Réduite ou absente (pas de menu)
                </td>
                <td className="border border-neutral-300 p-3 text-neutral-700">
                  Complète (menu, footer avec liens)
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-300 p-3 font-bold text-neutral-900">
                  CTA
                </td>
                <td className="border border-neutral-300 p-3 bg-emerald-50 text-neutral-700">
                  1 seul CTA répété
                </td>
                <td className="border border-neutral-300 p-3 text-neutral-700">
                  Plusieurs CTA différents
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-300 p-3 font-bold text-neutral-900">
                  Contenu
                </td>
                <td className="border border-neutral-300 p-3 bg-emerald-50 text-neutral-700">
                  Focalisé sur 1 offre/produit
                </td>
                <td className="border border-neutral-300 p-3 text-neutral-700">
                  Vue d&apos;ensemble de toute l&apos;offre
                </td>
              </tr>
              <tr>
                <td className="border border-neutral-300 p-3 font-bold text-neutral-900">
                  Trafic
                </td>
                <td className="border border-neutral-300 p-3 bg-emerald-50 text-neutral-700">
                  Pub Google/Facebook, email, campagne spécifique
                </td>
                <td className="border border-neutral-300 p-3 text-neutral-700">
                  SEO, trafic organique, entrée principale du site
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-neutral-600">
          <strong className="text-neutral-900">Résultat</strong> : Landing page
          convertit 5-10x mieux qu&apos;une page d&apos;accueil classique.
        </p>
      </>
    ),
  },
  {
    question: "Combien de temps pour voir des résultats ?",
    answer: (
      <>
        <p className="mb-4 text-neutral-700">
          <strong className="text-neutral-900">
            Phase 1 - Lancement (Semaine 1)
          </strong>
        </p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
            <span className="text-neutral-700">
              Premiers résultats en 24-48h avec du trafic payant
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
            <span className="text-neutral-700">
              <strong className="text-neutral-900">Minimum</strong> : 100
              visiteurs pour avoir une première idée
            </span>
          </li>
        </ul>

        <p className="mb-4 text-neutral-700">
          <strong className="text-neutral-900">
            Phase 2 - Optimisation (Semaines 2-4)
          </strong>
        </p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
            <span className="text-neutral-700">
              Tests A/B sur le titre, CTA, formulaire
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
            <span className="text-neutral-700">
              <strong className="text-neutral-900">Objectif</strong> : +20-30%
              conversion en 1 mois
            </span>
          </li>
        </ul>

        <p className="mb-4 text-neutral-700">
          <strong className="text-neutral-900">
            Phase 3 - Stabilisation (Mois 2-3)
          </strong>
        </p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
            <span className="text-neutral-700">Taux de conversion stable</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
            <span className="text-neutral-700">
              Focus sur l&apos;augmentation du trafic qualifié
            </span>
          </li>
        </ul>

        <div className="bg-emerald-50 border-2 border-emerald-200 p-4 rounded-xl">
          <p className="font-bold mb-2 text-neutral-900">Règle d&apos;or</p>
          <p className="text-neutral-700">
            Si après 500 visiteurs ton taux de conversion est sous 2%, le
            problème est structurel (titre, offre, formulaire). Pas besoin
            d&apos;attendre 3 mois.
          </p>
        </div>
      </>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ArticleSection id="faq" title="Questions fréquentes">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg mb-8 text-neutral-700">
          Les 4 questions que mes clients me posent avant de démarrer une
          landing page.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border-2 border-neutral-200 overflow-hidden hover:border-emerald-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="text-lg font-bold text-neutral-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-emerald-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-neutral-700">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-12 bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-neutral-900">
            Une autre question ?
          </h3>
          <p className="mb-6 text-neutral-700">
            Écris-moi directement. Je réponds sous 24h.
          </p>
          <a
            href="http://thibautgallien.fr/contact"
            className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-700 transition-colors"
          >
            Contacte-moi
          </a>
        </div>
      </motion.div>
    </ArticleSection>
  );
}

"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection } from "@/components/blog/BlogComponents";

// Custom useInView hook
function useInView(
  ref: React.RefObject<Element>,
  options: { once?: boolean; margin?: string } = {}
) {
  const [isInView, setIsInView] = useState(false);
  const { once = false, margin = "0px" } = options;

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

// Type Card Component
function TypeCard({
  number,
  title,
  conversion,
  objective,
  useCases,
  keyElements,
  benchmark,
  delay = 0,
}: {
  number: string;
  title: string;
  conversion: string;
  objective: string;
  useCases: string[];
  keyElements: string[];
  benchmark: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card className="bg-white border-2 border-neutral-200 hover:border-blue-200 transition-all">
          <CardContent className="p-8">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: delay + 0.1,
                }}
                className="bg-blue-600 text-white rounded-2xl w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0"
              >
                {number}
              </motion.div>
              <h3 className="text-2xl font-bold text-neutral-900">{title}</h3>
            </div>

            {/* Conversion Rate Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span className="font-bold text-blue-700">
                Conversion moyenne : {conversion}
              </span>
            </div>

            {/* Objective */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                Objectif
              </p>
              <p className="text-neutral-900 font-medium">{objective}</p>
            </div>

            {/* Use Cases */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                Cas d&apos;usage
              </p>
              <ul className="space-y-2">
                {useCases.map((useCase, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: delay + 0.2 + index * 0.05 }}
                    className="flex items-center gap-2 text-neutral-700"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                    {useCase}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Key Elements */}
            <div className="mb-6 bg-neutral-50 rounded-xl p-5 border border-neutral-100">
              <p className="text-sm font-semibold text-neutral-900 mb-3">
                Éléments clés
              </p>
              <ul className="space-y-2">
                {keyElements.map((element, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: delay + 0.3 + index * 0.05 }}
                    className="flex items-start gap-3 text-neutral-700"
                  >
                    <svg
                      className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{element}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Benchmark */}
            <div className="pt-4 border-t border-neutral-200">
              <p className="text-sm text-neutral-500">
                <strong className="text-neutral-900">Benchmark :</strong>{" "}
                {benchmark}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function TypesSection() {
  const types = [
    {
      number: "1",
      title: "Lead Magnet",
      conversion: "15-25%",
      objective: "Collecter email contre contenu gratuit",
      useCases: [
        "Ebook / guide gratuit",
        "Webinaire",
        "Checklist / template",
        "Essai gratuit SaaS",
      ],
      keyElements: [
        "Formulaire 2-3 champs max",
        "Aperçu du contenu (sommaire, screenshots)",
        'Preuve sociale ("Téléchargé 12 400+ fois")',
      ],
      benchmark: "Taux de conversion moyen 18,7% selon Unbounce (2024).",
    },
    {
      number: "2",
      title: "Vente e-commerce",
      conversion: "3-8%",
      objective: "Vendre un produit spécifique",
      useCases: [
        "Lancement nouveau produit",
        "Promotion flash",
        "Pré-commande",
      ],
      keyElements: [
        "Photos produit haute qualité (6-8 angles)",
        'Urgence ("Offre expire dans 4h")',
        "Avis clients avec photos",
        "Garanties (livraison gratuite, retour 30j)",
      ],
      benchmark: "Taux de conversion moyen 4,2% selon Shopify (2024).",
    },
    {
      number: "3",
      title: "Démo B2B",
      conversion: "5-12%",
      objective: "Obtenir un RDV qualifié",
      useCases: ["SaaS B2B", "Services haut de gamme", "Solutions entreprise"],
      keyElements: [
        "Vidéo démo 60-90 secondes",
        "Logos clients",
        'ROI chiffré ("Économisez 40h/mois")',
        "Formulaire qualifiant (5-7 champs OK en B2B)",
      ],
      benchmark: "Taux de conversion moyen 8,4% selon HubSpot (2024).",
    },
    {
      number: "4",
      title: "Événement",
      conversion: "20-40%",
      objective: "Inscrire des participants",
      useCases: ["Webinaire", "Conférence", "Atelier"],
      keyElements: [
        "Date, heure, lieu très visibles",
        "Programme détaillé",
        "Intervenants avec photos + bios",
        "Compteur de places restantes",
      ],
      benchmark:
        "Taux de conversion moyen 28,3% pour événements gratuits, 12,1% pour payants (Eventbrite, 2024).",
    },
  ];

  const tableData = [
    {
      objective: "Collecter emails",
      type: "Lead magnet",
      form: "2-3 champs",
      rate: "18,7%",
    },
    {
      objective: "Vendre <100€",
      type: "E-commerce",
      form: "0 (direct achat)",
      rate: "4,2%",
    },
    {
      objective: "Inscrire événement",
      type: "Événement",
      form: "3-4 champs",
      rate: "28,3%",
    },
    {
      objective: "Vendre >1000€",
      type: "Démo B2B",
      form: "5-7 champs",
      rate: "8,4%",
    },
  ];

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
        <div className="space-y-6">
          {types.map((type, index) => (
            <TypeCard key={index} {...type} delay={index * 0.1} />
          ))}
        </div>

        {/* Tableau récapitulatif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-neutral-900 mb-8">
            Comment <span className="text-blue-600">choisir</span> ?
          </h3>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-neutral-200">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-900">
                  <th className="text-left p-5 text-white font-semibold">
                    Objectif
                  </th>
                  <th className="text-left p-5 text-white font-semibold">
                    Type
                  </th>
                  <th className="text-left p-5 text-white font-semibold">
                    Formulaire
                  </th>
                  <th className="text-left p-5 text-white font-semibold">
                    Taux moyen
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {tableData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-neutral-200 last:border-b-0 hover:bg-neutral-50 transition-colors"
                  >
                    <td className="p-5 text-neutral-900 font-medium">
                      {row.objective}
                    </td>
                    <td className="p-5 text-neutral-700">{row.type}</td>
                    <td className="p-5 text-neutral-700">{row.form}</td>
                    <td className="p-5">
                      <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-full">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                        {row.rate}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {tableData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white border-2 border-neutral-200 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-neutral-900">
                    {row.objective}
                  </h4>
                  <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 font-bold text-sm px-3 py-1 rounded-full">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                    {row.rate}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Type :</span>
                    <span className="text-neutral-900 font-medium">
                      {row.type}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Formulaire :</span>
                    <span className="text-neutral-900 font-medium">
                      {row.form}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </ArticleSection>
  );
}

/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Mail,
  Search,
} from "lucide-react";
import Link from "next/link";

function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    icon: BarChart3,
    title: "Analyse de Données",
    subtitle: "Trouve où ton business perd de l'argent",
    description:
      "J'analyse ton funnel de A à Z (tracking, pages, emails, ads) pour identifier les 2-3 problèmes qui plombent tes conversions. Tu reçois un diagnostic clair avec un plan d'action priorisé par impact.",
    features: [
      "Audit complet du funnel de vente",
      "Identification des fuites de conversion",
      "Plan d'action priorisé par impact",
      "Setup tracking (GA4, Clarity, pixels)",
    ],
    href: "/services/analyse-data",
    color: "blue",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    subtitle: "Transforme ta liste en machine à revenus",
    description:
      "Je crée et optimise tes séquences email pour maximiser tes conversions : welcome series, séquences de vente, newsletters, segmentation. Des emails qui convertissent, pas qui finissent en spam.",
    features: [
      "Stratégie email complète",
      "Séquences automatisées (welcome, vente, relance)",
      "Segmentation et personnalisation",
      "Optimisation des taux d'ouverture et de clic",
    ],
    href: "/services/email-marketing",
    color: "emerald",
  },
  {
    icon: Search,
    title: "SEO",
    subtitle: "Rends ton site visible sur Google",
    description:
      "J'optimise ton site existant pour qu'il remonte dans les résultats Google. Recherche de mots-clés, optimisation on-page, SEO technique, stratégie de contenu. Du trafic organique qualifié, sans payer de pub.",
    features: [
      "Audit SEO technique complet",
      "Recherche de mots-clés stratégique",
      "Optimisation on-page",
      "Stratégie de contenu SEO",
    ],
    href: "/services/seo",
    color: "purple",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; lightBg: string }> = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    border: "hover:border-blue-300",
    lightBg: "bg-blue-50",
  },
  emerald: {
    bg: "bg-emerald-100",
    text: "text-emerald-600",
    border: "hover:border-emerald-300",
    lightBg: "bg-emerald-50",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
    border: "hover:border-purple-300",
    lightBg: "bg-purple-50",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              Comment je peux t'aider
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Trois expertises complémentaires pour faire grandir ton business en ligne
            </p>
          </FadeIn>
        </div>
      </section>

      {/* LES SERVICES */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colors = colorMap[service.color];
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`h-full p-8 bg-white border-2 border-neutral-200 rounded-2xl ${colors.border} hover:shadow-xl transition-all flex flex-col`}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}
                      >
                        <service.icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-neutral-900">
                          {service.title}
                        </h3>
                        <p className="text-sm text-neutral-500">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8 flex-grow">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${colors.bg} mt-2 flex-shrink-0`}
                          />
                          <span className="text-sm text-neutral-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={service.href}
                      className={`flex items-center justify-center gap-2 w-full py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-xl text-center transition-colors`}
                    >
                      Découvrir cette offre
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* POURQUOI MOI */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Pourquoi bosser avec moi ?
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-12">
                Je ne suis pas une agence. Je suis un freelance qui bosse en direct avec toi.
                Pas d'intermédiaire, pas de bullshit, juste des résultats.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Approche data-driven",
                    description:
                      "Chaque décision est basée sur tes données réelles. Pas de devinettes, pas d'intuitions. Des faits.",
                  },
                  {
                    title: "Vision globale",
                    description:
                      "Je comprends comment data, emails et SEO interagissent. Pas de silo, une stratégie cohérente.",
                  },
                  {
                    title: "Résultats concrets",
                    description:
                      "Des livrables clairs, des actions précises, des métriques mesurables. Tu sais exactement ce que tu obtiens.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-white rounded-xl border border-neutral-200"
                  >
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="p-12 bg-white border-2 border-blue-200 rounded-2xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  Tu ne sais pas par où commencer ?
                </h2>
                <p className="text-xl text-neutral-600 mb-8">
                  On prend 30 minutes pour en discuter. Je te dis quel service
                  correspond le mieux à ta situation actuelle.
                </p>

                <Link
                  href="https://calendly.com/hello-thibautgallien/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full text-lg transition-colors shadow-xl"
                >
                  Réserver un appel gratuit
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <p className="text-sm text-neutral-500 mt-6">
                  Aucune obligation. Juste une discussion honnête sur ton projet.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

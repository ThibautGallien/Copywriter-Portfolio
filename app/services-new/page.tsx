/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  X,
  Shield,
  AlertTriangle,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";

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

// Simple fade in animation wrapper
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Service Card Component
function ServiceCard({
  badge,
  title,
  subtitle,
  price,
  priceDetail,
  deliverables,
  ctaText,
  ctaLink,
  variant = "outline",
  featured = false,
}: {
  badge: string;
  title: string;
  subtitle: string;
  price: string;
  priceDetail?: string;
  deliverables: string[];
  ctaText: string;
  ctaLink: string;
  variant?: "outline" | "primary";
  featured?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`rounded-2xl p-8 border-2 relative ${
        variant === "primary"
          ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-emerald-100/50"
          : "border-neutral-200 bg-white"
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-4 py-2 bg-emerald-600 text-white text-sm font-bold rounded-full shadow-lg">
            <Target className="w-4 h-4" />
            RECOMMANDÉ
          </span>
        </div>
      )}

      <div className="text-sm font-semibold text-emerald-600 mb-2">{badge}</div>
      <h3 className="text-2xl font-bold text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-600 mb-6">{subtitle}</p>

      <div className="mb-6">
        <div className="text-5xl font-bold text-neutral-900">{price}</div>
        {priceDetail && (
          <p className="text-sm text-neutral-500 mt-2">{priceDetail}</p>
        )}
      </div>

      <div className="space-y-3 mb-8">
        {deliverables.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span className="text-neutral-700">{item}</span>
          </div>
        ))}
      </div>

      <motion.a
        href={ctaLink}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-4 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 ${
          variant === "primary"
            ? "bg-emerald-600 text-white hover:bg-emerald-500"
            : "border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
        }`}
      >
        {ctaText}
        <ArrowRight className="w-5 h-5" />
      </motion.a>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-6 py-20">
        {/* HERO */}
        <section className="max-w-5xl mx-auto mb-24">
          <FadeIn>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6"
              >
                <Zap className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700">
                  Services d'Optimisation Funnel
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 leading-[1.1] mb-6">
                Je trouve où tu perds de l'argent.
                <br />
                <span className="text-emerald-600">Et je te montre comment le récupérer.</span>
              </h1>

              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Ton funnel fuit. Pas parce que ton offre est nulle, mais parce que <strong>3 à 5 endroits précis</strong> te coûtent 30-50% de tes revenus potentiels.
                <br />
                <span className="text-neutral-900 font-semibold">Je les trouve. En 48h.</span>
              </p>
            </div>
          </FadeIn>
        </section>

        {/* LES 2 OFFRES */}
        <section className="max-w-6xl mx-auto mb-24">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 text-center">
              2 Niveaux d'Intervention
            </h2>
            <p className="text-center text-neutral-600 mb-16 max-w-2xl mx-auto">
              Du gratuit (pour qualifier) à l'audit complet (pour maximiser). Choisis selon ton niveau de maturité.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* OFFRE 1 : MINI-AUDIT FLASH */}
              <ServiceCard
                badge="OFFRE #1 - LEAD MAGNET"
                title="Mini-Audit Flash"
                subtitle="Pour ceux qui veulent savoir où ça coince"
                price="GRATUIT"
                priceDetail="Limité à 10 places/mois"
                deliverables={[
                  "1 Loom vidéo de 15 minutes",
                  "Analyse rapide du funnel",
                  "2-3 problèmes évidents identifiés",
                  "Recommandations quick wins",
                ]}
                ctaText="Postuler pour un Mini-Audit"
                ctaLink="/mini-audit-gratuit"
                variant="outline"
              />

              {/* OFFRE 2 : AUDIT COMPLET */}
              <ServiceCard
                badge="OFFRE #2 - AUDIT COMPLET"
                title="The Business Problem Audit"
                subtitle="Pour ceux qui veulent un plan d'action clair"
                price="497€"
                priceDetail="Prix pilot - 5 premières places • Puis 997€"
                deliverables={[
                  "Loom vidéo 30-45min (walkthrough complet)",
                  "Document Notion structuré (problèmes, ROI, plan)",
                  "Call Q&A de 30 minutes",
                  "Garantie Clarté Absolue - 7 jours",
                ]}
                ctaText="Commander l'Audit"
                ctaLink="/contact"
                variant="primary"
                featured={true}
              />
            </div>
          </FadeIn>
        </section>

        {/* CRITÈRES D'ÉLIGIBILITÉ */}
        <section className="max-w-5xl mx-auto mb-24">
          <FadeIn>
            <div className="bg-neutral-50 border-2 border-neutral-200 rounded-2xl p-10">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 text-center">
                ⚠️ Critères d'Éligibilité
              </h2>
              <p className="text-center text-neutral-600 mb-8">
                Je ne travaille pas avec tout le monde. Voici les critères minimum :
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">
                      CA minimum : 5K€/mois
                    </h4>
                    <p className="text-sm text-neutral-600">
                      En dessous, pas assez de data. Tu dois d'abord valider ton offre.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">
                      Funnel actif avec trafic
                    </h4>
                    <p className="text-sm text-neutral-600">
                      500+ visiteurs/mois minimum. Pas juste une idée.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">
                      Accès Analytics/CRM fournis
                    </h4>
                    <p className="text-sm text-neutral-600">
                      Si tes data sont le bordel, je refuse. Je ne peux pas deviner.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">
                      Prêt à implémenter
                    </h4>
                    <p className="text-sm text-neutral-600">
                      Je te donne le plan. Tu dois être prêt à agir. Pas de collectors d'audits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* CALCULATEUR DE ROI */}
        <section className="max-w-5xl mx-auto mb-24">
          <FadeIn>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 text-center">
                "Est-ce que 497€ c'est cher ?"
              </h2>

              <p className="text-xl text-center text-neutral-700 mb-8 font-semibold">
                Faisons le calcul de l'inaction.
              </p>

              <div className="bg-white rounded-xl p-6 mb-6 border border-red-200">
                <div className="space-y-4 text-neutral-700">
                  <p className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    Si tu fais <strong>20 000€ / mois</strong> de CA.
                  </p>
                  <p className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    Et que ton funnel a une fuite de conversion de{" "}
                    <strong>20%</strong> (moyenne basse constatée).
                  </p>
                  <p className="flex items-start gap-2 text-red-600 font-semibold text-lg">
                    <X className="w-5 h-5 mt-1 flex-shrink-0" />
                    Tu perds <strong>4 000€ TOUS LES MOIS</strong>.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-red-100 border border-red-300 rounded-xl p-6 text-center">
                  <div className="text-sm text-red-700 mb-2">Attendre 1 mois</div>
                  <div className="text-3xl font-bold text-red-600">-4 000€</div>
                </div>
                <div className="bg-red-100 border border-red-300 rounded-xl p-6 text-center">
                  <div className="text-sm text-red-700 mb-2">Attendre 3 mois</div>
                  <div className="text-3xl font-bold text-red-600">-12 000€</div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-neutral-700">
                  Mon intervention coûte <strong className="text-neutral-900">497€</strong>
                </p>
                <p className="text-2xl font-bold text-emerald-600">
                  Mon service ne te coûte rien.
                  <br />
                  C'est l'inaction qui te ruine.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* CTA FINAL */}
        <section className="max-w-4xl mx-auto">
          <FadeIn>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-2xl p-10 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Prêt à arrêter de perdre de l'argent ?
              </h2>
              <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                Commence par un Mini-Audit Flash gratuit. Je te montre en 15 minutes où ton funnel fuit.
              </p>
              <motion.a
                href="/mini-audit-gratuit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-full text-lg hover:bg-emerald-500 transition-colors shadow-lg"
              >
                Postuler pour un Mini-Audit Gratuit
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <p className="text-sm text-neutral-500 mt-4">Réponse sous 24h</p>
            </motion.div>
          </FadeIn>
        </section>
      </main>
    </div>
  );
}

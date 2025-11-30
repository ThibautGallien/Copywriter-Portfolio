/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  X,
  Clock,
  FileText,
  Code,
  BarChart3,
  MessageSquare,
  Shield,
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
  badgeColor = "default",
  title,
  subtitle,
  price,
  originalPrice,
  duration,
  included,
  notIncluded,
  guarantee,
  ctaText,
  ctaLink,
  ctaVariant = "primary",
  highlighted = false,
  topBadge,
  bottomNote,
}: {
  badge: string;
  badgeColor?: "default" | "gradient";
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  duration: string;
  included: string[];
  notIncluded?: string[];
  guarantee: string;
  ctaText: string;
  ctaLink: string;
  ctaVariant?: "primary" | "outline";
  highlighted?: boolean;
  topBadge?: string;
  bottomNote?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative rounded-3xl p-8 h-full flex flex-col ${
        highlighted
          ? "bg-neutral-900 text-white border-2 border-emerald-500"
          : "bg-white border-2 border-neutral-200"
      }`}
    >
      {topBadge && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-sm font-bold px-6 py-2 rounded-full whitespace-nowrap"
        >
          <span className="flex items-center gap-1.5">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              ★
            </motion.span>
            {topBadge}
          </span>
        </motion.div>
      )}

      <div className="mb-6">
        <div
          className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
            badgeColor === "gradient"
              ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
              : highlighted
              ? "bg-neutral-800 text-neutral-300"
              : "bg-neutral-100 text-neutral-700"
          }`}
        >
          {badge}
        </div>
        <h3
          className={`text-3xl font-bold mb-2 ${
            highlighted ? "text-white" : "text-neutral-900"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mb-4 ${
            highlighted ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          {subtitle}
        </p>
        <div className="mb-4">
          {originalPrice && (
            <div className="mb-2">
              <span
                className={`text-2xl line-through mr-2 ${
                  highlighted ? "text-neutral-600" : "text-neutral-400"
                }`}
              >
                {originalPrice}
              </span>
              <div className="inline-block bg-emerald-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
                3 PLACES GRATUITES
              </div>
            </div>
          )}
          <div
            className={`text-4xl font-bold ${
              highlighted ? "text-emerald-400" : "text-emerald-600"
            }`}
          >
            {price}
          </div>
        </div>
        <p
          className={`text-sm ${
            highlighted ? "text-neutral-500" : "text-neutral-500"
          }`}
        >
          {duration}
        </p>
      </div>

      <div className="space-y-4 mb-6 flex-grow">
        <h4
          className={`font-semibold text-sm uppercase tracking-wide ${
            highlighted ? "text-white" : "text-neutral-900"
          }`}
        >
          Ce que tu reçois
        </h4>
        {included.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex items-start gap-3"
          >
            <CheckCircle
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                highlighted ? "text-emerald-400" : "text-emerald-600"
              }`}
            />
            <span
              className={`text-sm ${
                highlighted ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              {item}
            </span>
          </motion.div>
        ))}

        {notIncluded && notIncluded.length > 0 && (
          <div
            className={`pt-4 border-t ${
              highlighted ? "border-neutral-800" : "border-neutral-200"
            }`}
          >
            <h4
              className={`font-semibold text-sm uppercase tracking-wide mb-3 ${
                highlighted ? "text-white" : "text-neutral-900"
              }`}
            >
              {highlighted
                ? "Ce que je ne fais pas"
                : "Ce que tu ne reçois pas"}
            </h4>
            {notIncluded.map((item, index) => (
              <div key={index} className="flex items-start gap-3 mb-2">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span
                  className={`text-sm ${
                    highlighted ? "text-neutral-500" : "text-neutral-600"
                  }`}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-4 mt-auto">
        <div
          className={`rounded-xl p-4 border ${
            highlighted
              ? "bg-neutral-800/50 border-emerald-500/30"
              : "bg-emerald-50 border-emerald-100"
          }`}
        >
          <div className="flex items-start gap-2">
            <Shield
              className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                highlighted ? "text-emerald-400" : "text-emerald-600"
              }`}
            />
            <p
              className={`text-xs ${
                highlighted ? "text-neutral-400" : "text-neutral-700"
              }`}
            >
              <strong
                className={highlighted ? "text-white" : "text-neutral-900"}
              >
                Garantie :
              </strong>{" "}
              {guarantee}
            </p>
          </div>
        </div>

        <motion.a
          href={ctaLink}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 ${
            ctaVariant === "primary"
              ? highlighted
                ? "bg-emerald-500 text-white hover:bg-emerald-400"
                : "bg-neutral-900 text-white hover:bg-neutral-800"
              : "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
          }`}
        >
          {ctaText}
          <motion.div animate={{ x: isHovered ? 4 : 0 }}>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.a>

        {bottomNote && (
          <p className="text-xs text-center text-neutral-500">{bottomNote}</p>
        )}
      </div>
    </motion.div>
  );
}

// Feature Card Component
function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex items-start gap-4"
    >
      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-emerald-600" />
      </div>
      <div>
        <h4 className="font-semibold text-neutral-900 mb-1">{title}</h4>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
    </motion.div>
  );
}

// Process Step Component
function ProcessStep({
  phase,
  title,
  duration,
  icon: Icon,
  description,
  index,
}: {
  phase: string;
  title: string;
  duration: string;
  icon: React.ElementType;
  description: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-emerald-200 transition-colors"
    >
      <div className="flex items-start gap-6">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 200,
            delay: index * 0.1 + 0.2,
          }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0"
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        <div className="flex-grow">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="text-sm text-emerald-600 font-semibold mb-1">
                {phase}
              </div>
              <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
            </div>
            <div className="text-sm text-neutral-500 whitespace-nowrap ml-4 bg-neutral-100 px-3 py-1 rounded-full">
              {duration}
            </div>
          </div>
          <p className="text-neutral-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// FAQ Item Component
function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-emerald-200 transition-colors"
    >
      <h3 className="font-bold text-neutral-900 mb-3">{question}</h3>
      <p className="text-neutral-600 leading-relaxed">{answer}</p>
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
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6 cursor-default"
              >
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-emerald-500 rounded-full"
                />
                <span className="text-sm font-medium text-emerald-700">
                  2 offres disponibles
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 leading-[1.1] mb-6">
                Mes Services
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-4">
                Deux façons de trouver où tu perds de l'argent
              </p>
              <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
                Tu choisis : diagnostic seul (tu implémentes) ou offre complète
                (je m'occupe de tout).
              </p>
            </div>
          </FadeIn>
        </section>

        {/* TABLEAU COMPARATIF */}
        <section className="max-w-6xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            {/* OFFRE 1 */}
            <FadeIn delay={0.1}>
              <ServiceCard
                badge="DONE WITH YOU"
                title="Diagnostic Complet"
                subtitle="Tu implémentes, je guide"
                price="800€"
                duration="Délai : 48-72h après réception des accès"
                included={[
                  "Analyse complète de ton funnel (ads, landing, emails, checkout)",
                  "Rapport PDF 5-8 pages avec screenshots annotés",
                  "Vidéo Loom 10-15 min où je décortique tout à l'oral",
                  "Estimation chiffrée de combien chaque leak te coûte",
                  "Plan d'action priorisé (étape 1, 2, 3...)",
                  "Google Sheets avec les KPI à tracker",
                ]}
                notIncluded={[
                  "L'implémentation (tu te débrouilles)",
                  "Le suivi post-implémentation",
                ]}
                guarantee="Si je ne trouve pas au moins 2 problèmes majeurs (= chacun te coûte 300€+/mois), je te rembourse intégralement."
                ctaText="Commander le Diagnostic"
                ctaLink="/contact"
                ctaVariant="outline"
                bottomNote="Option d'upgrade : +1300€ pour l'implémentation après"
              />
            </FadeIn>

            {/* OFFRE 2 */}
            <FadeIn delay={0.2}>
              <ServiceCard
                badge="DONE FOR YOU"
                badgeColor="gradient"
                title="Optimisation Complète"
                subtitle="Je m'occupe de tout"
                price="2000€"
                originalPrice="2000€"
                duration="Durée : 3 semaines implémentation + 60 jours tracking"
                included={[
                  "Tout ce qui est dans l'Audit Seul",
                  "+ Call de validation (30 min)",
                  "+ Implémentation complète (je fixe tout)",
                  "+ Tracking rigoureux pendant 60 jours",
                  "+ Ajustements illimités si ça ne marche pas",
                ]}
                notIncluded={[
                  "Dev complexe (intégrations custom)",
                  "Créas graphiques ultra-avancées",
                  "Refonte totale de l'offre",
                ]}
                guarantee="Si après 60 jours, mes fixes n'ont rien amélioré, je reprends tout de zéro et on continue 30 jours de plus."
                ctaText="Postuler pour une place gratuite"
                ctaLink="/gratuit"
                ctaVariant="primary"
                highlighted={true}
                topBadge="RECOMMANDÉ"
                bottomNote="3 places gratuites en échange d'un témoignage + case study"
              />
            </FadeIn>
          </div>

          {/* Économie si pris en bundle */}
          <FadeIn delay={0.3}>
            <div className="mt-8 text-center">
              <div className="inline-block bg-neutral-50 border border-neutral-200 rounded-2xl p-6">
                <p className="text-neutral-700 mb-2">
                  <span className="text-neutral-900 font-semibold">
                    Astuce :
                  </span>{" "}
                  Si tu prends d'abord le Diagnostic (800€) puis tu veux
                  l'implémentation après...
                </p>
                <p className="text-neutral-600 text-sm">
                  Tu payeras{" "}
                  <span className="line-through">800€ + 1500€ = 2300€</span>
                </p>
                <p className="text-emerald-600 font-semibold text-lg mt-2">
                  En prenant l'offre complète directement : 2000€ (économie de
                  300€)
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* DÉTAILS OFFRE 1 */}
        <section className="max-w-5xl mx-auto mb-24">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-8 text-center">
              Diagnostic Complet : Pour Qui ?
            </h2>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200 mb-8">
              <h3 className="font-bold text-xl text-neutral-900 mb-6">
                Idéal pour :
              </h3>
              <div className="space-y-3">
                {[
                  "Les entrepreneurs qui ont déjà une équipe (dev, copywriter)",
                  "Ceux qui veulent garder le contrôle de l'implémentation",
                  "Ceux qui veulent tester ma méthode avant d'aller plus loin",
                  "Ceux qui ont un budget limité mais veulent des recommandations expertes",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200">
              <h3 className="font-bold text-xl text-neutral-900 mb-6">
                Ce que contient ton rapport :
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  icon={FileText}
                  title="Rapport PDF détaillé"
                  description="5-8 pages avec screenshots annotés, chiffres précis"
                />
                <FeatureCard
                  icon={MessageSquare}
                  title="Vidéo Loom explicative"
                  description="10-15 min où je décortique tout à l'oral"
                />
                <FeatureCard
                  icon={BarChart3}
                  title="Google Sheets KPI"
                  description="Tous les métriques à tracker pour mesurer l'impact"
                />
                <FeatureCard
                  icon={Clock}
                  title="Plan d'action priorisé"
                  description="Quoi fixer en premier, deuxième, troisième..."
                />
              </div>
            </div>

            <div className="text-center mt-8">
              <motion.a
                href="/contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-all"
              >
                Commander le Diagnostic (800€)
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </FadeIn>
        </section>

        {/* DÉTAILS OFFRE 2 */}
        <section className="max-w-5xl mx-auto mb-24">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-8 text-center">
              Optimisation Complète : Comment Ça Marche ?
            </h2>

            <div className="space-y-6 mb-12">
              <ProcessStep
                phase="Phase 1"
                title="Diagnostic Complet"
                duration="48-72h"
                icon={FileText}
                description="Analyse complète de ton funnel + rapport détaillé"
                index={0}
              />
              <ProcessStep
                phase="Phase 2"
                title="Validation + Priorisation"
                duration="Call 30 min"
                icon={MessageSquare}
                description="On décide ensemble ce qu'on fixe en priorité"
                index={1}
              />
              <ProcessStep
                phase="Phase 3"
                title="Implémentation"
                duration="3 semaines"
                icon={Code}
                description="Je fixe tout ce qu'on a validé (copy, structure, automatisations)"
                index={2}
              />
              <ProcessStep
                phase="Phase 4"
                title="Tracking"
                duration="60 jours"
                icon={BarChart3}
                description="Suivi hebdomadaire + ajustements si nécessaire"
                index={3}
              />
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-3xl p-8 border border-emerald-200 mb-8">
              <h3 className="font-bold text-xl text-neutral-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
                Idéal pour :
              </h3>
              <div className="space-y-3">
                {[
                  "Les solopreneurs qui n'ont pas d'équipe",
                  "Ceux qui veulent déléguer complètement",
                  "Ceux qui veulent des résultats garantis",
                  "Ceux qui n'ont pas le temps d'implémenter eux-mêmes",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <motion.a
                href="/gratuit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full bg-emerald-600 text-white hover:bg-emerald-500 transition-all"
              >
                Postuler pour une place gratuite
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <p className="text-sm text-neutral-500 mt-4">
                3 places gratuites (valeur 2000€) en échange d'un témoignage +
                case study
              </p>
            </div>
          </FadeIn>
        </section>

        {/* POURQUOI 2 OFFRES */}
        <section className="max-w-5xl mx-auto mb-24">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Pourquoi 2 Offres ?
            </h2>

            <div className="bg-white rounded-3xl p-8 border border-neutral-200">
              <div className="space-y-6 text-neutral-700 leading-relaxed">
                <p>
                  <span className="text-neutral-900 font-semibold">
                    Parce que tout le monde n'est pas prêt pour le "Done For
                    You".
                  </span>
                </p>
                <p>
                  Certains entrepreneurs ont déjà une équipe et veulent juste un
                  diagnostic expert pour savoir quoi fixer.
                </p>
                <p>
                  D'autres n'ont pas le temps ou les compétences pour
                  implémenter et préfèrent déléguer complètement.
                </p>
                <p className="text-emerald-600 font-semibold">
                  Les deux approches fonctionnent. C'est juste une question de
                  préférence et de situation.
                </p>
                <p>
                  Et si tu prends d'abord le Diagnostic et que tu te rends
                  compte que tu veux que je m'occupe de l'implémentation après ?
                  Pas de problème, tu peux upgrader pour +1300€.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* FAQ */}
        <section className="max-w-5xl mx-auto mb-24">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              Questions Fréquentes
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "Quelle offre choisir ?",
                  answer:
                    "Diagnostic Complet si tu as déjà une équipe ou si tu veux garder le contrôle de l'implémentation. Optimisation Complète si tu veux déléguer complètement et avoir un suivi sur 60 jours.",
                },
                {
                  question: "Puis-je upgrader après le Diagnostic ?",
                  answer:
                    "Oui. Si tu prends d'abord le Diagnostic (800€) et que tu veux ensuite l'implémentation, tu payes +1300€. Total = 2100€ (vs 2000€ si pris directement).",
                },
                {
                  question: "Comment fonctionnent les 3 places gratuites ?",
                  answer:
                    "Les 3 premières personnes sélectionnées pour l'Optimisation Complète ne paient rien (valeur 2000€). En échange, je demande un témoignage + les résultats chiffrés pour créer un case study. Après les 3 premiers, l'offre devient payante (2000€).",
                },
                {
                  question:
                    "Que se passe-t-il si j'implémente mal les recommandations du Diagnostic ?",
                  answer:
                    "C'est le risque du 'Done With You'. Tu reçois des recommandations ultra-précises, mais c'est toi qui implémentes. Si tu veux être sûr que ça soit bien fait, prends l'Optimisation Complète où je m'occupe de tout.",
                },
                {
                  question:
                    "Puis-je avoir un call de suivi après le Diagnostic ?",
                  answer:
                    "Pas inclus dans l'offre Diagnostic Complet. Mais tu peux ajouter un call de validation post-implémentation (+200€) où je vérifie que tu as bien tout appliqué.",
                },
                {
                  question: "Combien de temps pour voir des résultats ?",
                  answer:
                    "Diagnostic : tu reçois tout en 48-72h. Optimisation Complète : premiers résultats visibles après 3-4 semaines (fin de l'implémentation), résultats consolidés après 60 jours de tracking.",
                },
              ].map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  index={index}
                />
              ))}
            </div>
          </FadeIn>
        </section>

        {/* CTA FINAL */}
        <section className="max-w-5xl mx-auto mb-24">
          <FadeIn>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-3xl p-8 md:p-12 text-center border border-emerald-200">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Prêt à Trouver Où Tu Perds de l'Argent ?
              </h2>

              <p className="text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
                Choisis l'offre qui te correspond et passons à l'action.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all"
                >
                  Diagnostic Complet (800€)
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="/gratuit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full bg-emerald-600 text-white hover:bg-emerald-500 transition-all"
                >
                  Optimisation Complète (Gratuit)
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>

              <p className="text-sm text-neutral-600 mt-6">
                Tu hésites encore ?{" "}
                <Link
                  href="/contact"
                  className="text-emerald-600 hover:underline font-medium"
                >
                  Contacte-moi
                </Link>{" "}
                et on en discute.
              </p>
            </div>
          </FadeIn>
        </section>
      </main>
    </div>
  );
}

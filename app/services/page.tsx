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
} from "lucide-react";

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

// Comparison Table Row Component
function ComparisonRow({
  feature,
  diagnostic,
  optimization,
  index,
}: {
  feature: string;
  diagnostic: React.ReactNode;
  optimization: React.ReactNode;
  index: number;
}) {
  return (
    <motion.tr
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors"
    >
      <td className="py-4 px-4 text-neutral-700 font-medium">{feature}</td>
      <td className="py-4 px-4 text-center">{diagnostic}</td>
      <td className="py-4 px-4 text-center bg-emerald-50/50">{optimization}</td>
    </motion.tr>
  );
}

// Week Detail Component
function WeekDetail({
  week,
  title,
  tasks,
  note,
  index,
}: {
  week: string;
  title: string;
  tasks: { title: string; description: string }[];
  note?: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 border-2 border-neutral-200 hover:border-emerald-200 transition-colors"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold">
          {week}
        </div>
        <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
      </div>

      <div className="space-y-4 mb-4">
        {tasks.map((task, idx) => (
          <div key={idx}>
            <h4 className="font-semibold text-neutral-900 mb-1">
              {task.title}
            </h4>
            <p className="text-sm text-neutral-600">{task.description}</p>
          </div>
        ))}
      </div>

      {note && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm text-amber-800">
            <strong className="font-semibold">Note :</strong> {note}
          </p>
        </div>
      )}
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

// Service Card Component
function ServiceCard({
  option,
  title,
  subtitle,
  price,
  ctaText,
  ctaLink,
  variant = "outline",
}: {
  option: string;
  title: string;
  subtitle: string;
  price: string;
  ctaText: string;
  ctaLink: string;
  variant?: "outline" | "primary";
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`rounded-2xl p-8 border-2 ${
        variant === "primary"
          ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-emerald-100/50"
          : "border-neutral-200 bg-white"
      }`}
    >
      <div className="text-sm font-semibold text-emerald-600 mb-2">
        {option}
      </div>
      <h3 className="text-2xl font-bold text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-600 mb-6">{subtitle}</p>
      <div className="text-4xl font-bold text-neutral-900 mb-6">{price}</div>
      <motion.a
        href={ctaLink}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 ${
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
              <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 leading-[1.1] mb-6">
                Services & Tarifs
              </h1>

              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Deux niveaux d'intervention. Un seul objectif : stopper les
                fuites de cash.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* TABLEAU COMPARATIF */}
        <section className="max-w-5xl mx-auto mb-24">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Le Comparatif
              <span className="text-emerald-600"> (Le Choix Logique)</span>
            </h2>

            <div className="bg-white rounded-2xl border-2 border-neutral-200 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-neutral-50 border-b-2 border-neutral-200">
                    <th className="py-4 px-4 text-left text-neutral-900 font-bold">
                      Fonctionnalité
                    </th>
                    <th className="py-4 px-4 text-center text-neutral-900 font-bold">
                      01. DIAGNOSTIC
                      <div className="text-sm font-semibold text-emerald-600 mt-1">
                        800€
                      </div>
                    </th>
                    <th className="py-4 px-4 text-center text-neutral-900 font-bold bg-emerald-50">
                      02. OPTIMISATION
                      <div className="text-sm font-semibold text-emerald-600 mt-1">
                        2 000€
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <ComparisonRow
                    feature="Analyse Data & Funnel"
                    diagnostic={
                      <CheckCircle className="w-6 h-6 text-emerald-600 mx-auto" />
                    }
                    optimization={
                      <CheckCircle className="w-6 h-6 text-emerald-600 mx-auto" />
                    }
                    index={0}
                  />
                  <ComparisonRow
                    feature="Rapport des Fuites (PDF)"
                    diagnostic={
                      <CheckCircle className="w-6 h-6 text-emerald-600 mx-auto" />
                    }
                    optimization={
                      <CheckCircle className="w-6 h-6 text-emerald-600 mx-auto" />
                    }
                    index={1}
                  />
                  <ComparisonRow
                    feature="Plan d'Action Priorisé"
                    diagnostic={
                      <CheckCircle className="w-6 h-6 text-emerald-600 mx-auto" />
                    }
                    optimization={
                      <CheckCircle className="w-6 h-6 text-emerald-600 mx-auto" />
                    }
                    index={2}
                  />
                  <ComparisonRow
                    feature="Rédaction (Copywriting)"
                    diagnostic={
                      <span className="text-sm text-neutral-500 font-medium">
                        Vous le faites
                      </span>
                    }
                    optimization={
                      <span className="text-sm text-emerald-600 font-semibold">
                        Je le fais
                      </span>
                    }
                    index={3}
                  />
                  <ComparisonRow
                    feature="Design / UX Tweak"
                    diagnostic={
                      <span className="text-sm text-neutral-500 font-medium">
                        Vous le faites
                      </span>
                    }
                    optimization={
                      <span className="text-sm text-emerald-600 font-semibold">
                        Je le fais
                      </span>
                    }
                    index={4}
                  />
                  <ComparisonRow
                    feature="Implémentation Technique"
                    diagnostic={
                      <span className="text-sm text-neutral-500 font-medium">
                        Vous le faites
                      </span>
                    }
                    optimization={
                      <span className="text-sm text-emerald-600 font-semibold">
                        Je le fais
                      </span>
                    }
                    index={5}
                  />
                  <ComparisonRow
                    feature="Suivi & Tracking (30j)"
                    diagnostic={<X className="w-6 h-6 text-red-500 mx-auto" />}
                    optimization={
                      <CheckCircle className="w-6 h-6 text-emerald-600 mx-auto" />
                    }
                    index={6}
                  />
                  <ComparisonRow
                    feature="Garantie de Résultat"
                    diagnostic={
                      <span className="text-xs text-amber-600 font-medium flex items-center justify-center gap-1">
                        <AlertTriangle className="w-4 h-4" />
                        Remboursement Audit
                      </span>
                    }
                    optimization={
                      <span className="text-xs text-emerald-600 font-semibold flex items-center justify-center gap-1">
                        <Shield className="w-4 h-4" />
                        Remboursement + Travail
                      </span>
                    }
                    index={7}
                  />
                </tbody>
              </table>
            </div>
          </FadeIn>
        </section>

        {/* DÉTAIL DE L'OFFRE */}
        <section className="max-w-5xl mx-auto mb-24">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 text-center">
              Le Détail
              <span className="text-emerald-600">
                {" "}
                (Ce que je fais VRAIMENT)
              </span>
            </h2>
            <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
              Voici exactement comment je vais passer les 3 prochaines semaines
              sur votre business.
            </p>

            <div className="space-y-6">
              <WeekDetail
                week="S1"
                title="L'Audit & La Stratégie"
                tasks={[
                  {
                    title: "Data Mining",
                    description:
                      "Analyse profonde de vos Analytics/CRM pour isoler les points de friction (Drop-off points).",
                  },
                  {
                    title: "User Testing",
                    description:
                      "Je parcours votre funnel comme un client lambda. Si je ne comprends pas, que j'ai des objections où remarque des incohérences, je n'achète pas. Et votre client non plus.",
                  },
                  {
                    title: "Matrice d'Impact",
                    description:
                      "Je liste tous les problèmes, on en garde 3. Ceux qui rapportent le plus, le plus vite.",
                  },
                ]}
                index={0}
              />

              <WeekDetail
                week="S2"
                title="La Chirurgie (Copy & UX)"
                tasks={[
                  {
                    title: "Refonte des Hooks",
                    description:
                      "Réécriture des titres (Ads/Landing/Pages) pour augmenter la congruence et baisser le coût par lead.",
                  },
                  {
                    title: "Simplification du Checkout",
                    description:
                      "Suppression des champs inutiles, ajout de réassurance au moment critique du paiement.",
                  },
                  {
                    title: "Séquençage Email",
                    description:
                      "Réécriture des mails qui sous-performent et ajout des mails manquants dans les workflows.",
                  },
                  {
                    title: "Optimisation des Upsells",
                    description:
                      "J'optimise les upsells ou propose des offres complémentaires pour maximiser la LTV.",
                  },
                  {
                    title: "Réécriture de la page de vente",
                    description:
                      "Je test des variations du lead (300 premiers mots) et la formulation de l'offre pour améliorer la conversion.",
                  },
                ]}
                note="Je n'ajoute pas de 'design joli'. Je supprime ce qui distrait la vente."
                index={1}
              />

              <WeekDetail
                week="S3"
                title="La Mise en Ligne & Le Tracking"
                tasks={[
                  {
                    title: "Intégration",
                    description:
                      "Je modifie moi-même les éléments dans votre outil (Systeme.io, ClickFunnels, Shopify, etc.).",
                  },
                  {
                    title: "Setup Tracking",
                    description:
                      "Mise en place d'un tableau de bord simplifié pour surveiller les 3 métriques clés.",
                  },
                  {
                    title: "Lancement",
                    description:
                      "On ouvre les vannes et on regarde les chiffres monter.",
                  },
                ]}
                index={2}
              />
            </div>
          </FadeIn>
        </section>

        {/* CALCULATEUR DE ROI */}
        <section className="max-w-5xl mx-auto mb-24">
          <FadeIn>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 text-center">
                "Est-ce que 2 000€ c'est cher ?"
              </h2>

              <p className="text-xl text-center text-neutral-700 mb-8 font-semibold">
                Faisons le calcul de l'inaction.
              </p>

              <div className="bg-white rounded-xl p-6 mb-6 border border-red-200">
                <div className="space-y-4 text-neutral-700">
                  <p className="flex items-start gap-2">
                    <TrendingUp className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    Si vous faites <strong>20 000€ / mois</strong> de CA.
                  </p>
                  <p className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    Et que votre funnel a une fuite de conversion de{" "}
                    <strong>20%</strong> (moyenne basse constatée).
                  </p>
                  <p className="flex items-start gap-2 text-red-600 font-semibold text-lg">
                    <X className="w-5 h-5 mt-1 flex-shrink-0" />
                    Vous perdez <strong>4 000€ TOUS LES MOIS</strong>.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-red-100 border border-red-300 rounded-xl p-6 text-center">
                  <div className="text-sm text-red-700 mb-2">
                    Attendre 1 mois
                  </div>
                  <div className="text-3xl font-bold text-red-600">-4 000€</div>
                </div>
                <div className="bg-red-100 border border-red-300 rounded-xl p-6 text-center">
                  <div className="text-sm text-red-700 mb-2">
                    Attendre 3 mois
                  </div>
                  <div className="text-3xl font-bold text-red-600">
                    -12 000€
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-neutral-700">
                  Mon intervention coûte{" "}
                  <strong className="text-neutral-900">2 000€</strong>
                </p>
                <p className="text-neutral-600 text-sm">
                  (ou 0€/1000€ si vous postulez maintenant)
                </p>
                <p className="text-2xl font-bold text-emerald-600">
                  Mon service ne vous coûte rien.
                  <br />
                  C'est l'inaction qui vous ruine.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* FAQ ANTI-OBJECTIONS */}
        <section className="max-w-5xl mx-auto mb-24">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 text-center">
              FAQ
            </h2>
            <p className="text-center text-neutral-600 mb-12">
              Les vraies questions que vous vous posez.
            </p>

            <div className="space-y-6">
              <FAQItem
                question="J'ai peur que tu casses mon site ou mon image de marque."
                answer="Je ne touche pas au code source complexe ni à l'identité visuelle (logo, couleurs). Je travaille sur le texte, l'offre et la structure de votre business. Avant chaque mise en ligne, vous validez les changements lors d'un call de 30 min. Rien n'est publié sans votre accord."
                index={0}
              />
              <FAQItem
                question="Est-ce que c'est juste ChatGPT qui fait le travail ?"
                answer="L'IA m'aide à analyser les données (pour aller plus vite), me donner des idées et faire des recherches. JE prends les décisions, créé le rapport, implémente et décide de ce qui est le plus pertinent pour votre business. La psychologie de vente, la compréhension de votre avatar et la stratégie sont 100% humaines et basées sur 5 ans d'expérience."
                index={1}
              />
              <FAQItem
                question="J'ai déjà une équipe marketing, pourquoi te payer toi ?"
                answer="Votre équipe a le nez dans le guidon. Elle est biaisée parce qu'elle a créé le funnel. Moi, j'apporte un regard neuf, chirurgical et impitoyable sur ce qui ne va pas. Je ne remplace pas votre équipe, je lui donne les clés pour mieux performer."
                index={2}
              />
              <FAQItem
                question="Je n'ai pas le temps de gérer un freelance."
                answer="C'est pour ça que l'offre est 'Done For You'. J'ai besoin de : 1h pour les accès, 30 min pour valider le plan, 30 min pour la restitution. C'est tout. Je suis autonome."
                index={3}
              />
              <FAQItem
                question="Il y a un contrat au moins ? Je ne veux pas que tu voles mes données."
                answer="Oui, un contrat clair est signé avant toute collaboration pour protéger vos données et définir les responsabilités de chacun."
                index={4}
              />
            </div>
          </FadeIn>
        </section>

        {/* TARIFICATION ACTUELLE */}
        <section className="max-w-5xl mx-auto mb-24">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              Tarification Actuelle
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ServiceCard
                option="OPTION A"
                title="Le Diagnostic"
                subtitle="Pour ceux qui veulent savoir, mais faire eux-mêmes."
                price="800€"
                ctaText="Commander le Diagnostic"
                ctaLink="/contact"
                variant="outline"
              />

              <ServiceCard
                option="OPTION B"
                title="L'Optimisation"
                subtitle="Pour ceux qui veulent le résultat, sans l'effort."
                price="2 000€"
                ctaText="Postuler pour une Place Spéciale"
                ctaLink="/gratuit"
                variant="primary"
              />
            </div>

            {/* OFFRE SPÉCIALE */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-2xl p-8"
            >
              <div className="text-center mb-6">
                <div className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-lg mb-4">
                  ⚠️ CANDIDATURES OUVERTES POUR ÉTUDE DE CAS
                </div>
                <p className="text-neutral-700 text-lg">
                  Je cherche mes premières études de cas concrètes.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl p-6 border-2 border-emerald-500">
                  <div className="text-center mb-4">
                    <div className="text-sm font-semibold text-emerald-600 mb-2">
                      Place 1
                    </div>
                    <div className="text-3xl font-bold text-emerald-600 mb-2">
                      100% GRATUIT
                    </div>
                    <p className="text-sm text-neutral-600">
                      En échange de témoignage vidéo + Data
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-blue-500">
                  <div className="text-center mb-4">
                    <div className="text-sm font-semibold text-blue-600 mb-2">
                      Places 2 & 3
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      -50% (1 000€)
                    </div>
                    <p className="text-sm text-neutral-600">
                      En échange de témoignage écrit + Data (avant-après)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-neutral-200 mb-6">
                <h4 className="font-bold text-neutral-900 mb-3">
                  Conditions :
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    Faire &gt;5k€/mois
                  </li>
                  <li className="flex items-start gap-2 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    Avoir du trafic actif
                  </li>
                  <li className="flex items-start gap-2 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    Avoir de la data (Analytics/CRM/Pixel)
                  </li>
                  <li className="flex items-start gap-2 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    Avoir validé l'offre (fait plusieurs ventes)
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2">
                      Garantie :
                    </h4>
                    <p className="text-sm text-neutral-700">
                      Si après 30 jours de tracking post-fix, la conversion n'a
                      pas augmenté : je retravaille gratuitement ou je rembourse
                      la moitié.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <motion.a
                  href="/gratuit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 text-white font-bold rounded-xl hover:bg-neutral-800 transition-colors"
                >
                  Postuler pour une Place Spéciale
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <p className="text-sm text-neutral-600 mt-4">
                  Réponse sous 24h.
                </p>
              </div>
            </motion.div>
          </FadeIn>
        </section>
      </main>
    </div>
  );
}

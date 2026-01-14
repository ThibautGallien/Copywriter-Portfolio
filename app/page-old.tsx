/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Target,
  Zap,
  Users,
  BarChart3,
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

// Animated counter
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return { count, ref };
}

// Fade in animation
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

// Metric Card
function MetricCard({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const { count, ref } = useCounter(value, 1500);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4 }}
      className="text-center p-6 rounded-2xl bg-white border-2 border-neutral-200"
    >
      <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-neutral-600 font-medium">{label}</div>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* HERO */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border-2 border-red-200 rounded-full mb-8"
              >
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span className="text-sm font-bold text-red-700">
                  TON FUNNEL FUIT. JE SAIS OÙ.
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-neutral-900 leading-[1.1] mb-8">
                Je ne devine pas.
                <br />
                <span className="text-emerald-600">Je sais.</span>
              </h1>

              <p className="text-xl md:text-2xl text-neutral-700 max-w-4xl mx-auto leading-relaxed mb-4">
                Tu perds <strong className="text-red-600">30 à 50%</strong> de tes revenus potentiels dans{" "}
                <strong>3 à 5 endroits précis</strong> de ton funnel.
              </p>

              <p className="text-2xl md:text-3xl font-bold text-neutral-900 mb-12">
                Je les trouve. En 48h. Toujours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="/mini-audit-gratuit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-5 bg-emerald-600 text-white font-bold rounded-full text-lg hover:bg-emerald-500 transition-colors shadow-xl flex items-center gap-2"
                >
                  Mini-Audit Gratuit (10 places/mois)
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="/services-new"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-5 border-2 border-neutral-900 text-neutral-900 font-bold rounded-full text-lg hover:bg-neutral-900 hover:text-white transition-colors"
                >
                  Voir mes offres
                </motion.a>
              </div>

              <p className="text-sm text-neutral-500 mt-6">
                Ex-CM @Tugan.ai • 127+ funnels analysés • Data {'>'} Opinions
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SOCIAL PROOF STATS */}
      <section className="container mx-auto px-6 py-16">
        <FadeIn delay={0.2}>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <MetricCard value={127} label="Funnels analysés" suffix="+" />
              <MetricCard value={94} label="Ont le même problème" suffix="%" />
              <MetricCard value={8} label="K€/mois perdus en moyenne" suffix="" />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* LE PROBLÈME */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6">
                Le Syndrome du Funnel Troué
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed">
                Tu génères du trafic. Tu as une offre. Mais l'argent se barre quelque part.
                <br />
                <strong className="text-neutral-900">Et tu ne sais pas où.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Problème 1 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-8 bg-red-50 border-2 border-red-200 rounded-2xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      "Je bosse comme un fou mais mes revenus stagnent"
                    </h3>
                    <p className="text-neutral-700">
                      Tu publies, tu crées, tu marketises... mais les résultats ne suivent pas.
                      L'impression d'être sur un hamster wheel.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Problème 2 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-8 bg-red-50 border-2 border-red-200 rounded-2xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      "Je ne sais pas où je perds de l'argent"
                    </h3>
                    <p className="text-neutral-700">
                      Angoisse permanente de laisser du cash sur la table. Sentiment
                      d'incompétence : "Je devrais savoir ça..."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Problème 3 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-8 bg-red-50 border-2 border-red-200 rounded-2xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      "J'ai tout essayé, rien ne marche"
                    </h3>
                    <p className="text-neutral-700">
                      Lassitude des "nouvelles tactiques". Méfiance envers les gourous.
                      Besoin de quelqu'un qui SAIT.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Problème 4 */}
              <motion.div
                whileHover={{ y: -4 }}
                className="p-8 bg-red-50 border-2 border-red-200 rounded-2xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      "Certains mois marchent, d'autres non"
                    </h3>
                    <p className="text-neutral-700">
                      Pas de baseline. Pas de tracking propre. Décisions au feeling, pas à
                      la data. Résultat : imprévisible.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* LA SOLUTION */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-3xl p-10 md:p-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6">
                  La Solution : Data {'>'} Opinions
                </h2>
                <p className="text-xl text-neutral-700 leading-relaxed">
                  Je ne te vends pas de rêve.
                  <br />
                  <strong className="text-neutral-900">
                    Je te montre les chiffres qui prouvent où tu perds de l'argent.
                  </strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-emerald-600">1</span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    J'analyse ton funnel
                  </h3>
                  <p className="text-neutral-600">
                    Google Analytics, CRM, tracking. Je plonge dans la data. Pas de
                    feeling.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-emerald-600">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Je trouve les fuites
                  </h3>
                  <p className="text-neutral-600">
                    3 à 5 problèmes précis. Pas 50. Ceux qui te coûtent vraiment cher.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-emerald-600">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Tu récupères ton argent
                  </h3>
                  <p className="text-neutral-600">
                    Plan d'action priorisé. Tu sais quoi faire, dans quel ordre, et
                    pourquoi.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* POURQUOI MOI */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6">
                Pourquoi J'ai Toujours Raison
              </h2>
              <p className="text-xl text-neutral-600">
                Parce que j'ai déjà vu ton problème. 127 fois.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-6 bg-white border-2 border-neutral-200 rounded-2xl"
              >
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Ex-CM chez Tugan.ai
                  </h3>
                  <p className="text-neutral-700">
                    1 an à contacter 50 personnes/jour pour des sponsos. J'ai vu
                    l'envers du décor. Je sais ce qui convertit vraiment vs. ce qu'on
                    croit qui convertit.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-6 bg-white border-2 border-neutral-200 rounded-2xl"
              >
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    127+ funnels analysés
                  </h3>
                  <p className="text-neutral-700">
                    J'ai tout vu. E-commerce, infoproduits, coaching, SaaS. 94% ont le
                    même problème. Et 94% ne le voient pas. Moi si.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-6 bg-white border-2 border-neutral-200 rounded-2xl"
              >
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Je refuse les clients mal fit
                  </h3>
                  <p className="text-neutral-700">
                    Si ton problème c'est ton offre (pas ton funnel), je te le dis et je
                    refuse la mission. Je ne prends pas l'argent des gens pour rien.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-6 bg-white border-2 border-neutral-200 rounded-2xl"
              >
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Garantie Clarté Absolue
                  </h3>
                  <p className="text-neutral-700">
                    Si après l'audit tu ne comprends pas clairement où tu perds de
                    l'argent et comment le récupérer, je te rembourse. 7 jours. Sans
                    question.
                  </p>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* LE COÛT DE L'INACTION */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-3xl p-10 md:p-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6">
                  Le Coût de l'Inaction
                </h2>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-red-200 mb-8">
                <div className="text-center space-y-6">
                  <p className="text-xl text-neutral-700">
                    Si tu fais <strong>20K€/mois</strong> de CA.
                  </p>
                  <p className="text-xl text-neutral-700">
                    Et que ton funnel a une fuite de conversion de{" "}
                    <strong className="text-red-600">20%</strong> (moyenne basse).
                  </p>
                  <div className="pt-4 border-t-2 border-red-200">
                    <p className="text-3xl font-bold text-red-600 mb-2">
                      Tu perds 4 000€ TOUS LES MOIS
                    </p>
                    <p className="text-neutral-600">Sans même le savoir.</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-red-100 border-2 border-red-300 rounded-xl p-6 text-center">
                  <div className="text-sm text-red-700 mb-2">Attendre 1 mois</div>
                  <div className="text-4xl font-bold text-red-600">-4K€</div>
                </div>
                <div className="bg-red-100 border-2 border-red-300 rounded-xl p-6 text-center">
                  <div className="text-sm text-red-700 mb-2">Attendre 3 mois</div>
                  <div className="text-4xl font-bold text-red-600">-12K€</div>
                </div>
                <div className="bg-red-100 border-2 border-red-300 rounded-xl p-6 text-center">
                  <div className="text-sm text-red-700 mb-2">Attendre 6 mois</div>
                  <div className="text-4xl font-bold text-red-600">-24K€</div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold text-neutral-900 mb-4">
                  Mon audit coûte 497€.
                </p>
                <p className="text-3xl font-bold text-emerald-600">
                  Ce n'est pas une dépense. C'est un investissement.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-3xl p-10 md:p-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6">
                Prêt à Arrêter de Perdre de l'Argent ?
              </h2>
              <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Commence par un <strong>Mini-Audit Flash gratuit</strong>.
                <br />
                Je te montre en 15 minutes où ton funnel fuit.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/mini-audit-gratuit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-5 bg-emerald-600 text-white font-bold rounded-full text-lg hover:bg-emerald-500 transition-colors shadow-xl flex items-center justify-center gap-2"
                >
                  Postuler pour un Mini-Audit Gratuit
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="/services-new"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-5 border-2 border-neutral-900 text-neutral-900 font-bold rounded-full text-lg hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  Voir toutes mes offres
                </motion.a>
              </div>

              <p className="text-sm text-neutral-500 mt-8">
                Limité à 10 places/mois • Réponse sous 24h • Aucune vente forcée
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Target,
  TrendingDown,
  Search,
  Lightbulb,
  BarChart3,
  Mail,
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO - Focus problème */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center">
              {/* Badge subtil */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-8"
              >
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  Optimisation de funnels basée sur la data
                </span>
              </motion.div>

              {/* Titre centré sur le problème */}
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 leading-tight mb-6">
                Tu sens que ton funnel
                <br />
                <span className="text-blue-600">perd des clients en route</span>
              </h1>

              <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-8">
                Mais tu ne sais pas exactement <strong>où</strong> ni <strong>pourquoi</strong>.
                <br />
                Les visiteurs arrivent, mais trop peu achètent.
              </p>

              {/* Sous-titre rassurant */}
              <p className="text-lg text-neutral-700 mb-12">
                C'est normal. Et c'est réparable.
              </p>

              {/* CTA principal */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="https://calendly.com/hello-thibautgallien/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full text-lg hover:bg-blue-500 transition-colors shadow-lg flex items-center gap-2"
                >
                  Discutons de ton funnel (gratuit)
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="#comment-ca-marche"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-neutral-300 text-neutral-700 font-semibold rounded-full text-lg hover:border-neutral-400 transition-colors"
                >
                  Comprendre l'approche
                </motion.a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* LE PROBLÈME (empathie) */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
                Le problème que tu rencontres probablement
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: TrendingDown,
                    title: "Trafic qui n'aboutit pas",
                    description:
                      "Tu dépenses en pub ou en SEO, mais le taux de conversion est décevant. Quelque chose bloque entre l'arrivée et l'achat.",
                  },
                  {
                    icon: Search,
                    title: "Tu ne sais pas où chercher",
                    description:
                      "Google Analytics te donne des chiffres, mais tu ne sais pas quoi en faire. Où est le vrai problème ?",
                  },
                  {
                    icon: Mail,
                    title: "Emails qui convertissent peu",
                    description:
                      "Tes emails s'ouvrent, mais peu de clics. Ou pire : les gens cliquent mais n'achètent pas derrière.",
                  },
                  {
                    icon: Target,
                    title: "Optimisations au hasard",
                    description:
                      "Tu testes des trucs (couleur de bouton, titre...) mais sans vraiment savoir si ça vaut le coup. C'est frustrant.",
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
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl text-center">
                <p className="text-lg text-neutral-700">
                  <strong>Bonne nouvelle :</strong> Ces problèmes ont des solutions concrètes.
                  <br />
                  Et elles ne demandent pas de refaire tout ton funnel.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section id="comment-ca-marche" className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-6">
                Voilà comment je travaille
              </h2>
              <p className="text-xl text-neutral-600 text-center mb-16">
                Approche simple, basée sur tes données réelles
              </p>

              <div className="space-y-12">
                {[
                  {
                    number: "1",
                    title: "J'analyse tes données",
                    description:
                      "Google Analytics, Clarity (heatmaps), tes campagnes pub, tes emails. Je regarde où les gens bloquent, où ils partent, ce qu'ils ne cliquent pas.",
                    icon: BarChart3,
                  },
                  {
                    number: "2",
                    title: "Je trouve les 2-3 vrais problèmes",
                    description:
                      "Pas une liste de 50 trucs à changer. Les 2-3 endroits qui, si on les corrige, vont vraiment impacter tes résultats. Priorisé par impact.",
                    icon: Search,
                  },
                  {
                    number: "3",
                    title: "Je te montre comment corriger",
                    description:
                      "Tu reçois un plan d'action clair avec des exemples concrets. Soit tu le fais toi-même, soit je peux m'en occuper. À toi de choisir.",
                    icon: Lightbulb,
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon className="w-6 h-6 text-blue-600" />
                        <h3 className="text-2xl font-bold text-neutral-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-lg text-neutral-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* POURQUOI MOI */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
                Pourquoi cette approche ?
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  À la base, je voulais juste faire de l'email marketing. Mais j'étais constamment frustré :
                  mes emails marchaient bien, mais si la landing page derrière était nulle, ou si les pubs
                  touchaient mal, tout s'écroulait.
                </p>

                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  J'avais deux options :
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-neutral-700">
                      <strong>Option 1 :</strong> Proposer de tout faire (emails, pages, pubs, etc.).
                      Trop cher, trop long en solo.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-lg text-neutral-700">
                      <strong>Option 2 :</strong> T'aider à comprendre ce qui déconne dans ton funnel,
                      te donner un plan d'action basé sur tes vraies données, et te laisser choisir si
                      tu veux le faire toi-même ou que je m'en charge.
                    </span>
                  </li>
                </ul>

                <p className="text-lg text-neutral-700 leading-relaxed">
                  J'ai choisi l'option 2. Parce que le vrai problème, c'est jamais "je n'ai pas assez
                  d'outils". C'est "je ne sais pas où regarder en premier".
                </p>
              </div>

              <div className="mt-12 p-8 bg-white border-2 border-blue-200 rounded-xl">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Mon parcours en bref
                </h3>
                <ul className="space-y-3 text-neutral-700">
                  <li>→ Marketing depuis 2020 (infoproduits, e-commerce, SEO)</li>
                  <li>→ Ex-Community Manager chez Tugan.ai (1 an)</li>
                  <li>
                    → Actuellement Responsable E-commerce (email, SEO, SEA, CRO, analytics)
                  </li>
                  <li>→ 127+ funnels analysés</li>
                </ul>
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
              <div className="p-12 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  Parlons de ton funnel
                </h2>
                <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                  On prend 30 minutes. Tu me montres ton funnel, je te dis où je vois des fuites.
                  Pas de pitch, pas de pression. Juste une discussion honnête.
                </p>

                <motion.a
                  href="https://calendly.com/hello-thibautgallien/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full text-lg transition-colors shadow-xl"
                >
                  Réserver 30 minutes (gratuit)
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <p className="text-sm text-neutral-500 mt-6">
                  Pas de carte bancaire. Pas d'engagement. Juste une vraie discussion.
                </p>
              </div>

              {/* FAQ rapide */}
              <div className="mt-16 space-y-6">
                <h3 className="text-2xl font-bold text-neutral-900 text-center mb-8">
                  Questions fréquentes
                </h3>

                {[
                  {
                    q: "C'est vraiment gratuit ?",
                    a: "Oui. L'appel de 30 min est gratuit. Si après on décide de bosser ensemble, là on parle tarifs. Mais la première discussion, c'est cadeau.",
                  },
                  {
                    q: "Je dois avoir combien de trafic minimum ?",
                    a: "Au moins 500 visiteurs/mois et un minimum de 5K€ de CA mensuel. En dessous, c'est trop tôt pour optimiser (mieux vaut focus sur l'acquisition).",
                  },
                  {
                    q: "Tu fais quoi exactement ?",
                    a: "Deux options : (1) Diagnostic complet avec plan d'action (tu implémentes), ou (2) Optimisation complète où je gère tout pendant 60 jours.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-neutral-50 rounded-xl"
                  >
                    <h4 className="font-bold text-lg text-neutral-900 mb-2">
                      {faq.q}
                    </h4>
                    <p className="text-neutral-600 leading-relaxed">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

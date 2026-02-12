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
      {/* HERO */}
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
                  Data, Email Marketing & SEO
                </span>
              </motion.div>

              {/* Titre */}
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 leading-tight mb-6">
                Ton business en ligne mérite de
                <br />
                <span className="text-blue-600">mieux performer</span>
              </h1>

              <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-8">
                J'aide les business en ligne à <strong>trouver où ils perdent de l'argent</strong>,
                à <strong>convertir leur liste email</strong> et à <strong>devenir visibles sur Google</strong>.
              </p>

              {/* Sous-titre rassurant */}
              <p className="text-lg text-neutral-700 mb-12">
                Pas de bullshit. Des données, des actions concrètes et des résultats mesurables.
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
                  Discutons de ton projet (gratuit)
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-neutral-300 text-neutral-700 font-semibold rounded-full text-lg hover:border-neutral-400 transition-colors"
                >
                  Voir mes services
                </motion.a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MES 3 SERVICES */}
      <section id="services" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-4">
                3 façons de faire grandir ton business
              </h2>
              <p className="text-xl text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
                Des expertises complémentaires pour couvrir tes vrais besoins
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: BarChart3,
                    title: "Analyse de Données",
                    description:
                      "Je trouve où ton funnel perd des clients et de l'argent. Diagnostic data-driven, plan d'action priorisé, résultats mesurables.",
                    features: [
                      "Audit complet du funnel",
                      "Identification des fuites",
                      "Plan d'action par impact",
                    ],
                    href: "/services/analyse-data",
                    color: "blue",
                    bgColor: "bg-blue-100",
                    textColor: "text-blue-600",
                    borderColor: "border-blue-200",
                    hoverBorder: "hover:border-blue-300",
                  },
                  {
                    icon: Mail,
                    title: "Email Marketing",
                    description:
                      "Je transforme ta liste email en source de revenus. Séquences automatisées, newsletters qui convertissent, segmentation intelligente.",
                    features: [
                      "Séquences automatisées",
                      "Newsletters qui vendent",
                      "Segmentation avancée",
                    ],
                    href: "/services/email-marketing",
                    color: "emerald",
                    bgColor: "bg-emerald-100",
                    textColor: "text-emerald-600",
                    borderColor: "border-emerald-200",
                    hoverBorder: "hover:border-emerald-300",
                  },
                  {
                    icon: Search,
                    title: "SEO",
                    description:
                      "Je rends ton site visible sur Google. Référencement naturel, optimisation technique, stratégie de contenu. Du trafic gratuit et durable.",
                    features: [
                      "Audit SEO technique",
                      "Optimisation on-page",
                      "Stratégie de contenu",
                    ],
                    href: "/services/seo",
                    color: "purple",
                    bgColor: "bg-purple-100",
                    textColor: "text-purple-600",
                    borderColor: "border-purple-200",
                    hoverBorder: "hover:border-purple-300",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      className={`h-full p-6 bg-white rounded-xl border-2 ${service.borderColor} ${service.hoverBorder} hover:shadow-lg transition-all flex flex-col`}
                    >
                      <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                        <service.icon className={`w-6 h-6 ${service.textColor}`} />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6 flex-grow">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                            <CheckCircle className={`w-4 h-4 ${service.textColor} flex-shrink-0`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={service.href}
                        className="flex items-center justify-center gap-2 w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-xl transition-colors"
                      >
                        En savoir plus
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* LE PROBLÈME */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
                Les problèmes que tu rencontres probablement
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: TrendingDown,
                    title: "Tu perds des clients sans savoir où",
                    description:
                      "Du trafic arrive mais trop peu achètent. Quelque chose bloque dans ton funnel, et tes données Analytics ne t'aident pas à trouver quoi.",
                  },
                  {
                    icon: Mail,
                    title: "Ta liste email ne rapporte rien",
                    description:
                      "Des centaines (ou milliers) d'abonnés, mais peu de ventes. Pas de séquences, pas de stratégie, des emails improvisés.",
                  },
                  {
                    icon: Search,
                    title: "Ton site est invisible sur Google",
                    description:
                      "Tes concurrents apparaissent en premier. Tu dépends de la pub payante pour avoir du trafic. Le jour où tu coupes, plus rien.",
                  },
                  {
                    icon: Target,
                    title: "Tu optimises au hasard",
                    description:
                      "Tu testes des trucs sans stratégie. Couleur de bouton, nouvel email, nouveau contenu... mais sans savoir si ça vaut vraiment le coup.",
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
                  Et c'est exactement ce que je fais.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section id="comment-ca-marche" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-6">
                Comment je travaille
              </h2>
              <p className="text-xl text-neutral-600 text-center mb-16">
                Une approche simple, quel que soit le service
              </p>

              <div className="space-y-12">
                {[
                  {
                    number: "1",
                    title: "On discute de ta situation",
                    description:
                      "Appel de 30 minutes gratuit. Tu me montres ton business, tes chiffres, tes problèmes. On identifie ensemble ce qui a le plus d'impact.",
                    icon: Lightbulb,
                  },
                  {
                    number: "2",
                    title: "J'analyse et je propose",
                    description:
                      "Je plonge dans tes données (analytics, emails, SEO). Je trouve les vrais problèmes et je te propose un plan d'action clair, priorisé par impact.",
                    icon: BarChart3,
                  },
                  {
                    number: "3",
                    title: "On passe à l'action",
                    description:
                      "Soit tu implémentes avec mon guide, soit je m'en charge. Dans les deux cas : des résultats mesurables et un suivi régulier.",
                    icon: Target,
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-12">
                Pourquoi me faire confiance ?
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  J'ai commencé dans le marketing digital en 2020. D'abord l'email marketing,
                  puis le SEO, puis l'analyse de données. J'ai vite compris que ces trois
                  disciplines sont indissociables : un bon email ne sert à rien si ta page
                  ne convertit pas, et un bon SEO ne sert à rien si ton funnel perd des clients.
                </p>

                <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                  Aujourd'hui, je combine ces trois expertises pour offrir une vision globale.
                  Pas de silo. Une stratégie cohérente où data, emails et SEO travaillent ensemble.
                </p>
              </div>

              <div className="mt-12 p-8 bg-white border-2 border-blue-200 rounded-xl">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Mon parcours en bref
                </h3>
                <ul className="space-y-3 text-neutral-700">
                  <li>→ Marketing digital depuis 2020 (email, SEO, data, e-commerce)</li>
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
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="p-12 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  Parlons de ton business
                </h2>
                <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                  On prend 30 minutes. Tu me montres ta situation, je te dis comment
                  je peux t'aider. Pas de pitch, pas de pression. Juste une discussion honnête.
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
                    q: "Par quel service commencer ?",
                    a: "Ça dépend de ta situation. Si tu as du trafic mais peu de ventes → analyse de données. Si tu as une liste email qui dort → email marketing. Si tu veux du trafic gratuit → SEO. On en discute pendant l'appel.",
                  },
                  {
                    q: "Tu fais quoi exactement ?",
                    a: "Trois services : (1) Analyse de données pour trouver où tu perds de l'argent, (2) Email marketing pour convertir ta liste en revenus, (3) SEO pour devenir visible sur Google. Chaque service a des formules adaptées.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-white rounded-xl"
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

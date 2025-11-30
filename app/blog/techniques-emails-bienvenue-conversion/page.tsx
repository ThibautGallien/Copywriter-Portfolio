"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}) {
  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Button component
function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full transition-all";
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-500",
    secondary: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
    outline:
      "border-2 border-neutral-200 text-neutral-700 hover:border-neutral-300",
  };

  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}

const articleMeta = {
  title:
    "Email de bienvenue : le guide complet pour convertir vos nouveaux abonnés",
  publishedAt: "2024-06-25",
  estimatedReadingTime: 8,
  author: "Thibaut Gallien",
  categories: ["Email Marketing", "Conversion"],
};

const tableOfContents = [
  {
    id: "pourquoi-important",
    title: "Pourquoi l'email de bienvenue est votre atout le plus rentable",
  },
  {
    id: "erreurs-frequentes",
    title: "Les erreurs qui détruisent vos emails de bienvenue",
  },
  {
    id: "structure-efficace",
    title: "La structure d'un email de bienvenue qui marche",
  },
  { id: "sequence-complete", title: "La séquence de bienvenue (3 à 5 emails)" },
  { id: "bonnes-pratiques", title: "Bonnes pratiques & optimisation" },
  { id: "exemples-inspirants", title: "Exemples inspirants" },
  { id: "conversion", title: "Email de bienvenue & conversion" },
  { id: "checklist", title: "Checklist pratique" },
];

const keyPoints = [
  {
    title: "Taux d'ouverture supérieur à 50%",
    description:
      "L'email de bienvenue a le plus haut taux d'ouverture de tous vos emails",
  },
  {
    title: "ROI de 30 à 40€ par euro investi",
    description: "L'email marketing reste le canal le plus rentable",
  },
  {
    title: "Premier contact décisif",
    description:
      "Votre première impression conditionne toute la relation client",
  },
];

const commonMistakes = [
  "Vendre direct sans avoir dit bonjour",
  "Envoyer trop tard (plus de 24h après l'inscription)",
  "Multiplier les objectifs dans un seul email",
  "Zéro personnalisation",
  "Pas de désinscription claire",
];

const emailStructure = [
  {
    title: "Objet & pré-header",
    description: "Soyez direct et engageant, pas racoleur",
    example: "Bienvenue [Prénom] ! Voici ton guide offert",
  },
  {
    title: "Introduction",
    description: "Remerciez et rappelez le contexte",
    example: "Tu viens de t'inscrire pour recevoir [bonus, ebook, newsletter]",
  },
  {
    title: "Corps",
    description: "Une seule idée = une seule action",
    example: "Partagez votre mission en 2 phrases max",
  },
  {
    title: "CTA",
    description: "Un seul appel à l'action, bien visible",
    example: "Télécharge ton guide ici",
  },
  {
    title: "P.S. malin",
    description: "Zone la plus lue après l'objet",
    example: "Rappeler d'ajouter votre adresse aux contacts",
  },
];

const sequenceEmails = [
  {
    title: "Email 1 → Livraison + accueil",
    description: "Délivrez la promesse immédiatement (ebook, checklist, vidéo)",
    timing: "Immédiat",
  },
  {
    title: "Email 2 → Storytelling / valeurs",
    description: "Partagez votre histoire ou la mission de votre marque",
    timing: "J+1",
  },
  {
    title: "Email 3 → Contenu utile",
    description: "Donnez un conseil concret, rapide à appliquer",
    timing: "J+3",
  },
  {
    title: "Email 4 → Introduction subtile de l'offre",
    description: "Transition naturelle vers votre produit/service",
    timing: "J+5",
  },
  {
    title: "Email 5 → Lever les freins",
    description: "Répondez aux objections et partagez des preuves",
    timing: "J+7",
  },
];

const checklistItems = [
  "Mon email part immédiatement après l'inscription",
  "L'objet est clair, engageant, sans clickbait",
  "Le pré-header complète l'objet au lieu de le répéter",
  "Je remercie mon abonné et je rappelle le contexte",
  "Je tiens ma promesse dès le premier mail",
  "Mon email suit la règle d'or : 1 idée = 1 action",
  "J'ai inséré un seul CTA bien visible",
  "Le design est simple et lisible",
  "Mon texte est personnalisé",
  "J'ai inclus un P.S. malin",
  "Le lien de désinscription est visible et conforme RGPD",
  "Mon email est optimisé pour mobile",
  "J'ai prévu une suite (séquence de 3 à 5 emails)",
];

export default function EmailBienvenuePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back to blog */}
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center text-neutral-500 hover:text-emerald-600 transition-colors mb-8"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Retour au blog
            </Link>
          </FadeIn>

          {/* Article Header */}
          <FadeIn delay={0.1}>
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-6">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {new Date(articleMeta.publishedAt).toLocaleDateString(
                    "fr-FR"
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {articleMeta.estimatedReadingTime} min de lecture
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  {articleMeta.author}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                {articleMeta.title}
              </h1>

              <div className="flex gap-2 mb-8">
                {articleMeta.categories.map((category) => (
                  <span
                    key={category}
                    className="px-4 py-1.5 text-sm font-medium bg-emerald-50 text-emerald-600 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <p className="text-xl text-neutral-600 leading-relaxed">
                Vous croyez qu'un email de bienvenue, c'est juste un petit
                "merci de t'être inscrit" ? Faux. Mal fait, il flingue votre
                première impression et votre abonné disparaît aussitôt. Bien
                fait, il pose les fondations d'une relation qui peut vous
                rapporter pendant des mois.
              </p>
            </header>
          </FadeIn>

          {/* Key Points */}
          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="bg-neutral-50 rounded-2xl p-6 text-center cursor-default"
                >
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Table of Contents */}
          <FadeIn delay={0.3}>
            <div className="bg-emerald-50 rounded-2xl p-8 mb-12 border border-emerald-100">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">
                Sommaire
              </h2>
              <nav className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.id}`}
                    className="block text-neutral-700 hover:text-emerald-600 transition-colors py-1"
                  >
                    {index + 1}. {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </FadeIn>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            {/* Section 1: Pourquoi important */}
            <section id="pourquoi-important" className="mb-16">
              <FadeIn>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Pourquoi l'email de bienvenue est votre atout le plus rentable
                </h2>

                <p className="text-neutral-700 leading-relaxed mb-6">
                  Un chiffre pour commencer : l'email de bienvenue affiche en
                  moyenne un taux d'ouverture supérieur à 50%. Autrement dit, un
                  lecteur sur deux ouvre ce message. Comparez ça à vos
                  newsletters classiques qui dépassent rarement les 20%…
                </p>

                <p className="text-neutral-700 leading-relaxed mb-8">
                  Et l'email marketing dans son ensemble ? Chaque euro investi
                  rapporte en moyenne 30 à 40€. C'est simple : il n'existe pas
                  de canal plus rentable. Et c'est malheureusement le plus
                  sous-évalué.
                </p>

                <div className="bg-neutral-50 rounded-2xl p-8 mb-8 border border-neutral-200">
                  <h3 className="text-xl font-bold text-neutral-900 mb-6">
                    Les bénéfices concrets d'un email de bienvenue
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0"
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
                      <span className="text-neutral-700">
                        <strong className="text-neutral-900">
                          Première impression :
                        </strong>{" "}
                        c'est votre "bonjour", votre poignet tendu pour serrer
                        la main
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0"
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
                      <span className="text-neutral-700">
                        <strong className="text-neutral-900">
                          Confiance :
                        </strong>{" "}
                        vous expliquez pourquoi il reçoit ce mail et tenez votre
                        promesse
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0"
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
                      <span className="text-neutral-700">
                        <strong className="text-neutral-900">
                          Engagement :
                        </strong>{" "}
                        vous orientez vers une action simple dès le départ
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0"
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
                      <span className="text-neutral-700">
                        <strong className="text-neutral-900">
                          Délivrabilité :
                        </strong>{" "}
                        améliore vos chances d'atterrir dans la boîte principale
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-8">
                  <p className="text-center text-neutral-700">
                    La séquence de bienvenue n'est pas une perte de temps. C'est
                    même l'inverse :{" "}
                    <span className="font-bold text-emerald-600">
                      l'email de bienvenue est le seul moment où votre lecteur
                      attend votre message
                    </span>
                    .
                  </p>
                </div>
              </FadeIn>
            </section>

            {/* Section 2: Erreurs fréquentes */}
            <section id="erreurs-frequentes" className="mb-16">
              <FadeIn>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Les erreurs qui détruisent vos emails de bienvenue
                </h2>

                <p className="text-neutral-700 leading-relaxed mb-8">
                  Votre email de bienvenue n'est pas "un détail technique".
                  C'est votre premier rendez-vous avec votre abonné. Et
                  pourtant, 80% des business le sabotent.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-2">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    Les erreurs les plus fréquentes
                  </h3>
                  <ul className="space-y-3">
                    {commonMistakes.map((mistake, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-red-600 font-bold text-xl">
                          ×
                        </span>
                        <span className="text-neutral-700">{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                    <h4 className="font-bold text-red-600 mb-4">
                      ❌ Mauvais email
                    </h4>
                    <div className="bg-white rounded-xl p-4 text-sm mb-4">
                      <p className="font-medium text-neutral-900 mb-2">
                        Objet : Bienvenue ! -10% sur ta première commande
                      </p>
                      <p className="text-neutral-600 mb-2">
                        Merci pour ton inscription.
                      </p>
                      <p className="text-neutral-600 mb-2">
                        Clique ici pour profiter de ton offre.
                      </p>
                      <p className="text-neutral-600">
                        Découvre aussi nos produits, nos best-sellers, nos
                        réseaux sociaux.
                      </p>
                    </div>
                    <p className="text-sm text-neutral-500">
                      Trop de liens, aucune explication, aucune valeur
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <h4 className="font-bold text-green-600 mb-4">
                      ✅ Bon email
                    </h4>
                    <div className="bg-white rounded-xl p-4 text-sm mb-4">
                      <p className="font-medium text-neutral-900 mb-2">
                        Objet : Bienvenue [Prénom] !
                      </p>
                      <p className="text-neutral-600 mb-2">
                        Merci d'avoir rejoint [Nom de la marque].
                      </p>
                      <p className="text-neutral-600 mb-2">
                        Dans ce premier email, tu trouveras [ton bonus].
                      </p>
                      <p className="text-neutral-600 mb-2">
                        Dans les prochains jours, je vais te montrer [valeur].
                      </p>
                      <p className="text-neutral-600">
                        Aujourd'hui, je te propose : [CTA unique].
                      </p>
                    </div>
                    <p className="text-sm text-neutral-500">
                      Clair, simple, personnalisé
                    </p>
                  </div>
                </div>
              </FadeIn>
            </section>

            {/* Section 3: Structure efficace */}
            <section id="structure-efficace" className="mb-16">
              <FadeIn>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  La structure d'un email de bienvenue qui marche
                </h2>

                <p className="text-neutral-700 leading-relaxed mb-8">
                  Un bon email de bienvenue, c'est comme une conversation
                  réussie : vous dites bonjour, vous expliquez pourquoi vous
                  êtes là, vous donnez de la valeur, puis vous proposez une
                  suite claire.
                </p>

                <div className="space-y-6 mb-8">
                  {emailStructure.map((section, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -2 }}
                      className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200"
                    >
                      <h3 className="text-lg font-bold text-emerald-600 mb-3">
                        {section.title}
                      </h3>
                      <p className="text-neutral-700 mb-3">
                        {section.description}
                      </p>
                      <div className="bg-white rounded-xl p-4 text-sm text-neutral-600 border border-neutral-200">
                        <strong className="text-neutral-900">Exemple :</strong>{" "}
                        {section.example}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
                  <p className="text-center text-neutral-700">
                    Un bon email de bienvenue, ce n'est pas un patchwork.
                    <span className="font-bold text-emerald-600">
                      {" "}
                      C'est une flèche : un seul message, une seule direction.
                    </span>
                  </p>
                </div>
              </FadeIn>
            </section>

            {/* Section 4: Séquence complète */}
            <section id="sequence-complete" className="mb-16">
              <FadeIn>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  La séquence de bienvenue (3 à 5 emails)
                </h2>

                <p className="text-neutral-700 leading-relaxed mb-8">
                  Un seul email, c'est bien. Une séquence de bienvenue, c'est
                  mieux : vous guidez votre abonné pas à pas, vous construisez
                  la relation, vous préparez la vente.
                </p>

                <p className="text-lg font-medium text-emerald-600 mb-8">
                  Durée idéale : 5 à 7 jours. Court pour garder l'attention,
                  assez long pour installer la confiance.
                </p>

                <div className="space-y-6">
                  {sequenceEmails.map((email, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -2 }}
                      className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-neutral-900">
                              {email.title}
                            </h3>
                            <span className="text-xs bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full font-medium">
                              {email.timing}
                            </span>
                          </div>
                          <p className="text-neutral-700">
                            {email.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>
            </section>

            {/* Section 5: Bonnes pratiques */}
            <section id="bonnes-pratiques" className="mb-16">
              <FadeIn>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Bonnes pratiques & optimisation
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200"
                  >
                    <h3 className="text-xl font-bold text-emerald-600 mb-4">
                      Personnalisation
                    </h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Appelez votre lecteur par son prénom</li>
                      <li>• Adaptez le contenu selon le segment</li>
                      <li>
                        • Observez son comportement pour personnaliser la suite
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200"
                  >
                    <h3 className="text-xl font-bold text-emerald-600 mb-4">
                      Design simple
                    </h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Pas besoin d'un template bling-bling</li>
                      <li>• Texte clair, espacé, facile à lire sur mobile</li>
                      <li>• Une flèche, pas une armoire Ikea mal construite</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200"
                  >
                    <h3 className="text-xl font-bold text-emerald-600 mb-4">
                      Tests A/B
                    </h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Testez vos objets d'email</li>
                      <li>• Variez le timing (immédiat vs +1h, +1 jour)</li>
                      <li>
                        • Expérimentez avec le CTA : texte, emplacement, ton
                      </li>
                      <li>• Gardez les gagnants, supprimez les perdants</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200"
                  >
                    <h3 className="text-xl font-bold text-emerald-600 mb-4">
                      RGPD & Délivrabilité
                    </h3>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Lien de désinscription visible et propre</li>
                      <li>• Double opt-in recommandé</li>
                      <li>• Encouragez l'ajout aux contacts</li>
                      <li>• Collecte avec un vrai consentement</li>
                    </ul>
                  </motion.div>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mt-8">
                  <p className="text-center text-neutral-700">
                    <span className="font-bold text-emerald-600">
                      Plus vous respectez votre lecteur, plus vos emails sont
                      lus.
                    </span>
                    <br />
                    Et plus ils sont lus, plus la relation se développe. Et plus
                    la relation se développe, plus il dépense.
                  </p>
                </div>
              </FadeIn>
            </section>

            {/* Section 6: Exemples inspirants */}
            <section id="exemples-inspirants" className="mb-16">
              <FadeIn>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Exemples inspirants
                </h2>

                <p className="text-neutral-700 leading-relaxed mb-8">
                  Les bonnes pratiques, c'est utile. Mais rien ne vaut des
                  exemples concrets pour visualiser ce qu'un bon email de
                  bienvenue peut donner.
                </p>

                <div className="space-y-8">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200"
                  >
                    <h3 className="text-xl font-bold text-emerald-600 mb-4">
                      Cabaïa (e-commerce)
                    </h3>
                    <div className="bg-white rounded-xl p-4 mb-4 border border-neutral-200">
                      <p className="font-medium text-neutral-900 mb-2">
                        Objet : "Bienvenue dans la famille Cabaïa 🎒"
                      </p>
                      <p className="text-sm text-neutral-600 mb-2">Corps :</p>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Ton fun, identité de marque forte</li>
                        <li>
                          • Mise en avant de la promesse (sacs colorés, garantie
                          à vie)
                        </li>
                        <li>• CTA unique : découvrir la collection</li>
                      </ul>
                    </div>
                    <p className="text-sm text-neutral-600">
                      ➡️ Exemple parfait d'email qui crée un lien émotionnel
                      immédiat avec son univers
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200"
                  >
                    <h3 className="text-xl font-bold text-emerald-600 mb-4">
                      HubSpot (SaaS)
                    </h3>
                    <div className="bg-white rounded-xl p-4 mb-4 border border-neutral-200">
                      <p className="font-medium text-neutral-900 mb-2">
                        Objet : "Bienvenue sur HubSpot — vos premiers pas"
                      </p>
                      <p className="text-sm text-neutral-600 mb-2">Corps :</p>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Clair, pédagogique, orienté onboarding</li>
                        <li>• Délivre immédiatement des ressources utiles</li>
                        <li>• CTA : "Connectez-vous à votre compte"</li>
                      </ul>
                    </div>
                    <p className="text-sm text-neutral-600">
                      ➡️ Exemple B2B : valeur immédiate + guidage concret vers
                      l'utilisation du produit
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200"
                  >
                    <h3 className="text-xl font-bold text-emerald-600 mb-4">
                      Coach fictif (infopreneur)
                    </h3>
                    <div className="bg-white rounded-xl p-4 mb-4 border border-neutral-200">
                      <p className="font-medium text-neutral-900 mb-2">
                        Objet : "Bienvenue ! Voici ta checklist anti-erreurs"
                      </p>
                      <p className="text-sm text-neutral-600 mb-2">Corps :</p>
                      <ul className="text-sm text-neutral-700 space-y-1">
                        <li>• Remerciement personnalisé</li>
                        <li>• Livraison du lead magnet promis</li>
                        <li>• Histoire courte pour créer du lien</li>
                        <li>• P.S. : invitation à répondre pour engagement</li>
                      </ul>
                    </div>
                    <p className="text-sm text-neutral-600">
                      ➡️ Exemple simple, humain, qui montre de l'expertise sans
                      vendre trop tôt
                    </p>
                  </motion.div>
                </div>
              </FadeIn>
            </section>

            {/* Section 7: Conversion */}
            <section id="conversion" className="mb-16">
              <FadeIn>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Email de bienvenue & conversion
                </h2>

                <p className="text-neutral-700 leading-relaxed mb-8">
                  Un email de bienvenue n'est pas une page de vente déguisée.
                  Mais ce n'est pas non plus une lettre d'amour sans suite.
                  L'équilibre se joue ici : créer de la confiance tout en
                  préparant la conversion.
                </p>

                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 mb-8">
                  <h3 className="text-xl font-bold text-emerald-600 mb-4">
                    Comment orienter doucement vers l'achat
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-emerald-600 font-bold text-lg">
                        1.
                      </span>
                      <span className="text-neutral-700">
                        Commencez par livrer de la valeur (bonus, conseil,
                        ressource)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-emerald-600 font-bold text-lg">
                        2.
                      </span>
                      <span className="text-neutral-700">
                        Glissez des signaux subtils : "Si tu veux aller plus
                        loin…"
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-emerald-600 font-bold text-lg">
                        3.
                      </span>
                      <span className="text-neutral-700">
                        Introduisez votre offre comme une suite logique, pas une
                        rupture
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <h4 className="font-bold text-green-600 mb-3">
                      ✅ Stratégie "donner avant de demander"
                    </h4>
                    <ul className="space-y-2 text-neutral-700 text-sm">
                      <li>• Donnez d'abord : un outil pratique, une astuce</li>
                      <li>• Montrez que vous pouvez aider avant d'être payé</li>
                      <li>
                        • Résultat : quand vous proposez votre produit, il est
                        déjà convaincu
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                    <h4 className="font-bold text-red-600 mb-3">
                      ❌ Ce qu'il faut éviter
                    </h4>
                    <ul className="space-y-2 text-neutral-700 text-sm">
                      <li>
                        • Si votre premier mail vend direct → vous tuez la
                        confiance
                      </li>
                      <li>
                        • Si vous ne mettez jamais de CTA → vous perdez des
                        ventes
                      </li>
                      <li>
                        • L'équilibre : commencer par un cadeau, mener vers une
                        offre
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </section>

            {/* Section 8: Checklist */}
            <section id="checklist" className="mb-16">
              <FadeIn>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Checklist pratique
                </h2>

                <p className="text-neutral-700 leading-relaxed mb-8">
                  Avant d'appuyer sur "envoyer", passez votre email de bienvenue
                  au crash test. Cochez chaque point ci-dessous :
                </p>

                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {checklistItems.map((item, index) => (
                      <label
                        key={index}
                        className="flex items-start gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="mt-1 w-4 h-4 accent-emerald-600"
                        />
                        <span className="text-neutral-700 text-sm">{item}</span>
                      </label>
                    ))}
                  </div>

                  <div className="bg-white border border-emerald-200 rounded-xl p-6">
                    <p className="text-center text-neutral-700">
                      Si vous ne cochez pas toutes les cases, votre email de
                      bienvenue risque de passer inaperçu.
                      <br />
                      <span className="font-bold text-emerald-600">
                        Si vous les cochez toutes, vous posez la première brique
                        d'un système qui rapporte.
                      </span>
                    </p>
                  </div>
                </div>
              </FadeIn>
            </section>

            {/* Conclusion */}
            <section className="mb-16">
              <FadeIn>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  Conclusion
                </h2>

                <div className="space-y-6 text-neutral-700 leading-relaxed">
                  <p>
                    Un bon email de bienvenue, ce n'est pas sorcier. Retenez
                    juste deux règles simples :
                  </p>

                  <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                          1
                        </span>
                        <span>
                          <strong className="text-neutral-900">
                            1 email = 1 idée = 1 action
                          </strong>
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                          2
                        </span>
                        <span>
                          <strong className="text-neutral-900">
                            Une séquence bien pensée = confiance + revenus
                            récurrents
                          </strong>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-xl font-medium text-center">
                    Votre email de bienvenue n'est pas un "bonus".
                    <br />
                    <span className="text-emerald-600 font-bold">
                      C'est la fondation de votre système. Ne le ratez pas.
                    </span>
                  </p>
                </div>
              </FadeIn>
            </section>
          </article>

          {/* CTA Section */}
          <FadeIn>
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 text-center mb-16"
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                📩 Vous voulez savoir si votre séquence actuelle tient la route
                ?
              </h3>
              <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
                Réservez votre diagnostic gratuit et je vous montre comment
                transformer vos emails en machine à revenus prévisibles.
              </p>
              <Button href="https://calendly.com/hello-thibautgallien/30min">
                Réserver mon diagnostic gratuit
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </motion.div>
          </FadeIn>

          {/* Navigation */}
          <FadeIn>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-neutral-200 pt-8">
              <Link
                href="/blog"
                className="flex items-center text-neutral-500 hover:text-emerald-600 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Retour au blog
              </Link>

              <div className="flex gap-4">
                <Button href="/contact" variant="secondary">
                  Me contacter
                </Button>
                <Button href="/services">
                  Mes services
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </div>
  );
}

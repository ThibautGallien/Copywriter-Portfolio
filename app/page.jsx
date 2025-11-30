"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// Custom useInView hook (remplace celui de framer-motion pour éviter les erreurs)
function useInView(ref, options = {}) {
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

// ============================================
// FONTS À AJOUTER :
// Google Fonts: Sora (headings) + Inter (body)
// <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
// ============================================

// Animated counter hook
function useCounter(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startOnView || !isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration, startOnView]);

  return { count, ref };
}

// Simple fade in animation wrapper
function FadeIn({ children, delay = 0, className = "", direction = "up" }) {
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

// Animated metric card
function MetricCard({ value, suffix = "", label, highlight = false }) {
  const numericValue = parseInt(value);
  const { count, ref } = useCounter(numericValue, 1500);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`text-center p-6 rounded-2xl cursor-default ${
        highlight ? "bg-emerald-50 border border-emerald-100" : "bg-neutral-50"
      }`}
    >
      <div
        className={`text-3xl md:text-4xl font-bold mb-2 ${
          highlight ? "text-emerald-600" : "text-neutral-900"
        }`}
      >
        {count}
        {suffix}
      </div>
      <div className="text-sm text-neutral-500">{label}</div>
    </motion.div>
  );
}

// Process step with progress indicator
function ProcessStep({ number, title, description, duration, isLast = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="flex gap-6">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.1,
          }}
          className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg relative z-10"
        >
          {number}
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ originY: 0 }}
            className="w-0.5 h-full bg-emerald-200 mt-2"
          />
        )}
      </div>
      <div className="flex-1 pb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
            <span className="text-xs bg-neutral-100 text-neutral-500 px-2 py-1 rounded-full">
              {duration}
            </span>
          </div>
          <p className="text-neutral-600 leading-relaxed">{description}</p>
        </motion.div>
      </div>
    </div>
  );
}

// Offer card with level badge
function OfferCard({
  level,
  title,
  subtitle,
  price,
  originalPrice,
  features,
  cta,
  highlighted = false,
  badge,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative rounded-3xl p-8 ${
        highlighted
          ? "bg-neutral-900 text-white"
          : "bg-white border-2 border-neutral-200"
      }`}
    >
      {badge && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute -top-4 left-8 bg-emerald-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full"
        >
          <span className="flex items-center gap-1.5">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
            {badge}
          </span>
        </motion.div>
      )}

      {/* Level indicator */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
            highlighted
              ? "bg-emerald-500 text-white"
              : "bg-emerald-100 text-emerald-600"
          }`}
        >
          {level}
        </div>
        <div>
          <p
            className={`text-sm font-medium ${
              highlighted ? "text-emerald-400" : "text-emerald-600"
            }`}
          >
            {subtitle}
          </p>
          <h3
            className={`text-xl font-bold ${
              highlighted ? "text-white" : "text-neutral-900"
            }`}
          >
            {title}
          </h3>
        </div>
      </div>

      <div className="mb-6">
        {originalPrice && (
          <span
            className={`text-lg line-through mr-2 ${
              highlighted ? "text-neutral-500" : "text-neutral-400"
            }`}
          >
            {originalPrice}
          </span>
        )}
        <span
          className={`text-4xl font-bold ${
            highlighted ? "text-white" : "text-neutral-900"
          }`}
        >
          {price}
        </span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-3"
          >
            <svg
              className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                highlighted ? "text-emerald-400" : "text-emerald-600"
              }`}
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
            <span
              className={highlighted ? "text-neutral-300" : "text-neutral-600"}
            >
              {feature}
            </span>
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-4 px-6 rounded-xl font-semibold transition-colors ${
          highlighted
            ? "bg-emerald-500 text-white hover:bg-emerald-400"
            : "bg-neutral-900 text-white hover:bg-neutral-800"
        }`}
      >
        <span className="flex items-center justify-center gap-2">
          {cta}
          <motion.svg
            animate={{ x: isHovered ? 4 : 0 }}
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
          </motion.svg>
        </span>
      </motion.button>
    </motion.div>
  );
}

// Blog card with hover effect
function BlogCard({ title, excerpt, tag, slug }) {
  return (
    <motion.a
      href={`/blog/${slug}`}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group block"
    >
      <div className="bg-neutral-50 rounded-2xl p-6 h-full transition-colors group-hover:bg-emerald-50 border border-transparent group-hover:border-emerald-100">
        <span className="inline-block text-xs font-semibold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full mb-4">
          {tag}
        </span>
        <h3 className="text-lg font-semibold text-neutral-900 mb-3 group-hover:text-emerald-700 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-neutral-500 leading-relaxed mb-4">
          {excerpt}
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600">
          Lire l'article
          <motion.svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </motion.svg>
        </span>
      </div>
    </motion.a>
  );
}

// Checklist item with animation
function ChecklistItem({ children, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="flex items-center gap-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 300,
          delay: index * 0.1 + 0.1,
        }}
        className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0"
      >
        <svg
          className="w-4 h-4 text-emerald-600"
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
      </motion.div>
      <span className="text-neutral-700">{children}</span>
    </motion.li>
  );
}

// Scroll indicator
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-xs text-neutral-400 uppercase tracking-wider">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-5 h-8 rounded-full border-2 border-neutral-300 flex justify-center pt-1.5"
      >
        <motion.div className="w-1 h-1.5 bg-neutral-400 rounded-full" />
      </motion.div>
    </motion.div>
  );
}

// Progress bar for sections
function SectionProgress({ sections }) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2">
      {sections.map((section, index) => (
        <motion.a
          key={section.id}
          href={`#${section.id}`}
          whileHover={{ scale: 1.2 }}
          className="group flex items-center gap-3"
        >
          <span
            className={`text-xs font-medium transition-opacity ${
              activeSection === index
                ? "opacity-100 text-emerald-600"
                : "opacity-0 group-hover:opacity-100 text-neutral-400"
            }`}
          >
            {section.label}
          </span>
          <div
            className={`w-2 h-2 rounded-full transition-all ${
              activeSection === index
                ? "bg-emerald-500 scale-125"
                : "bg-neutral-300 group-hover:bg-neutral-400"
            }`}
          />
        </motion.a>
      ))}
    </div>
  );
}

// Newsletter modal
function NewsletterModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  if (!isOpen) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-white rounded-3xl p-8 max-w-md w-full relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors text-neutral-400"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            Reçois mes meilleurs tips
          </h2>
          <p className="text-neutral-500 mb-6">
            1 email par semaine. Actionnable. Pas de spam.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Prénom"
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-500 transition-colors"
            >
              S'inscrire
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
}

// Main button component with animation
function Button({ children, href, variant = "primary", className = "" }) {
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

// Main page
export default function HomePage() {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const sections = [
    { id: "hero", label: "Accueil" },
    { id: "problem", label: "Problème" },
    { id: "process", label: "Méthode" },
    { id: "qualification", label: "Pour qui" },
    { id: "offers", label: "Offres" },
    { id: "blog", label: "Blog" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SectionProgress sections={sections} />

      <main>
        {/* ============================================ */}
        {/* HERO */}
        {/* ============================================ */}
        <section
          id="hero"
          className="relative pt-32 pb-20 md:pt-40 md:pb-32 min-h-screen flex flex-col justify-center"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <FadeIn>
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
                    3 places disponibles
                  </span>
                </motion.div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 leading-[1.1] mb-6">
                  J'augmente le CA des business en ligne en trouvant où ils{" "}
                  <span className="text-emerald-600 relative">
                    perdent de l'argent
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="absolute -bottom-2 left-0 w-full h-3 text-emerald-200"
                      viewBox="0 0 200 10"
                      fill="none"
                    >
                      <motion.path
                        d="M0 5 Q50 0 100 5 T200 5"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-8 max-w-2xl">
                  Analyse data → Diagnostic précis → Fixes concrets → Résultats
                  mesurables.
                  <br />
                  <span className="font-medium text-neutral-900">
                    5 ans d'expérience. 0 bullshit.
                  </span>
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/services">
                    Postuler pour un audit gratuit
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
                  <Button href="#process" variant="secondary">
                    Voir comment ça marche
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Metrics */}
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                <MetricCard value="100" suffix="+" label="Funnels analysés" />
                <MetricCard value="5" suffix=" ans" label="D'expérience" />
                <MetricCard
                  value="30"
                  suffix="%"
                  label="Taux de conversion max"
                  highlight
                />
                <MetricCard
                  value="45"
                  suffix="%"
                  label="Open rate email"
                  highlight
                />
              </div>
            </FadeIn>
          </div>

          <ScrollIndicator />
        </section>

        {/* ============================================ */}
        {/* PROBLEM */}
        {/* ============================================ */}
        <section id="problem" className="py-20 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-block text-sm font-semibold text-red-600 bg-red-50 px-4 py-1.5 rounded-full mb-6 cursor-default"
                >
                  Le problème
                </motion.span>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
                  Tu as du trafic, une offre qui fonctionne...
                  <br />
                  <span className="text-red-600">mais ton CA stagne.</span>
                </h2>
                <div className="text-lg text-neutral-600 leading-relaxed space-y-4">
                  <p>
                    Quelque part entre tes ads et ta page de remerciement, tu
                    perds trop de monde. Et tu ne sais pas exactement où.
                  </p>
                  <p>
                    Tu balances{" "}
                    <span className="font-semibold text-neutral-900">
                      500-2000€/mois en pub
                    </span>{" "}
                    pour des résultats qui ne suivent pas.
                  </p>
                  <p className="font-medium text-neutral-900">
                    Tu sens qu'il y a un problème. Impossible de mettre le doigt
                    dessus.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ============================================ */}
        {/* PROCESS */}
        {/* ============================================ */}
        <section id="process" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-block text-sm font-semibold text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full mb-6 cursor-default"
                >
                  La méthode
                </motion.span>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                  Comment je fixe ça
                </h2>
              </div>
            </FadeIn>

            <div className="max-w-2xl mx-auto">
              <ProcessStep
                number="1"
                title="J'analyse ta data"
                duration="6-8h"
                description="Je passe 6 à 8 heures à décortiquer ton funnel complet : ads, landing pages, emails, checkout, page de vente, upsells. Je trouve les 2-3 fuites majeures."
              />
              <ProcessStep
                number="2"
                title="Je fixe"
                duration="3 semaines"
                description="J'implémente les changements nécessaires : copy, structure, automatisations. On se met d'accord sur les priorités, puis j'exécute."
              />
              <ProcessStep
                number="3"
                title="On mesure"
                duration="60 jours"
                description="Tracking rigoureux pendant 60 jours. On compare avant/après tous les 15 jours. Si ça ne marche pas comme prévu, je corrige."
                isLast
              />
            </div>

            <FadeIn delay={0.4}>
              <p className="text-center text-lg font-medium text-emerald-600 mt-12">
                Pas de théorie. Pas d'intuition. Juste des chiffres.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ============================================ */}
        {/* QUALIFICATION */}
        {/* ============================================ */}
        <section id="qualification" className="py-20 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-block text-sm font-semibold text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full mb-6 cursor-default"
                  >
                    C'est pour toi ?
                  </motion.span>
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                    On travaille ensemble si...
                  </h2>
                </div>

                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm"
                >
                  <ul className="space-y-4">
                    {[
                      "Tu fais minimum 5k€/mois de CA",
                      "Tu as déjà des clients (offre validée)",
                      "Tu as du trafic mais ton CA stagne",
                      "Tu veux des résultats mesurables, pas du blabla",
                      "Tu es prêt à implémenter mes recommandations",
                    ].map((item, i) => (
                      <ChecklistItem key={i} index={i}>
                        {item}
                      </ChecklistItem>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-neutral-100 text-center">
                    <p className="text-sm text-neutral-500">
                      Infopreneurs • SaaS • E-commerce • Coaching
                    </p>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ============================================ */}
        {/* OFFERS */}
        {/* ============================================ */}
        <section id="offers" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-block text-sm font-semibold text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full mb-6 cursor-default"
                >
                  Les offres
                </motion.span>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                  Deux façons de travailler ensemble
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <FadeIn delay={0.1}>
                <OfferCard
                  level="01"
                  subtitle="Niveau 1"
                  title="Diagnostic Complet"
                  price="800€"
                  features={[
                    "Analyse complète de ton funnel (6-8h)",
                    "Rapport détaillé de 5-8 pages",
                    "Call de restitution de 30min",
                    "Roadmap de fixes priorisée",
                  ]}
                  cta="Commander le diagnostic"
                />
              </FadeIn>

              <FadeIn delay={0.2}>
                <OfferCard
                  level="02"
                  subtitle="Niveau 2"
                  title="Audit + Implémentation"
                  price="0€"
                  originalPrice="2000€"
                  features={[
                    "Tout le diagnostic niveau 1",
                    "Implémentation des fixes (3 semaines)",
                    "Tracking des résultats sur 60 jours",
                    "Ajustements inclus si nécessaire",
                  ]}
                  cta="Postuler maintenant"
                  highlighted
                  badge="3 places gratuites"
                />
              </FadeIn>
            </div>

            <FadeIn delay={0.3}>
              <div className="max-w-2xl mx-auto mt-12 p-6 bg-neutral-50 rounded-2xl text-center">
                <p className="text-neutral-600">
                  <span className="font-semibold text-neutral-900">
                    Pourquoi gratuit ?
                  </span>{" "}
                  Je n'ai pas encore de case study client. Je veux prouver mes
                  résultats. En échange : un témoignage et une étude de cas avec
                  tes vrais chiffres.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ============================================ */}
        {/* PROOF / ABOUT */}
        {/* ============================================ */}
        <section className="py-20 bg-neutral-900 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pourquoi me faire confiance ?
                </h2>
                <div className="text-lg text-neutral-300 leading-relaxed space-y-4">
                  <p>
                    J'ai réussi des trucs. J'ai foiré des trucs. J'ai appris des
                    deux.
                  </p>
                  <p>
                    Landing page qui convertit à{" "}
                    <span className="text-emerald-400 font-semibold">30%</span>.
                    Emails qui ouvrent à{" "}
                    <span className="text-emerald-400 font-semibold">45%</span>{" "}
                    sur liste froide. 100+ funnels analysés en 5 ans.
                  </p>
                  <p className="text-white font-medium">
                    Pas de PowerPoint. Pas de PDF de 150 pages.
                    <br />
                    Juste de l'implémentation.
                  </p>
                </div>
                <motion.a
                  href="/about"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 mt-8 text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
                >
                  En savoir plus sur mon parcours
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
                </motion.a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ============================================ */}
        {/* BLOG */}
        {/* ============================================ */}
        <section id="blog" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                  Pas encore prêt ?
                </h2>
                <p className="text-neutral-500">Explore le blog</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              <FadeIn delay={0.1}>
                <BlogCard
                  title="Comment J'ai Doublé Le Taux De Conversion D'Une Landing Page"
                  excerpt="L'histoire d'un audit qui a révélé 3 leaks majeurs et comment je les ai corrigés en 2 semaines."
                  tag="Case study"
                  slug="doubler-taux-conversion"
                />
              </FadeIn>
              <FadeIn delay={0.2}>
                <BlogCard
                  title="Les 5 Erreurs Qui Tuent Ton Funnel"
                  excerpt="Si tu perds de l'argent sur ton funnel, il y a de fortes chances que tu fasses au moins une de ces erreurs."
                  tag="Stratégie"
                  slug="5-erreurs-funnel"
                />
              </FadeIn>
              <FadeIn delay={0.3}>
                <BlogCard
                  title="Pourquoi Tes Emails Ne Convertissent Pas"
                  excerpt="Spoiler : ce n'est pas ton taux d'ouverture le problème. C'est ce qui vient après."
                  tag="Email"
                  slug="emails-conversion"
                />
              </FadeIn>
            </div>

            <FadeIn delay={0.4}>
              <div className="text-center mt-10">
                <Button href="/blog" variant="outline">
                  Voir tous les articles
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
            </FadeIn>
          </div>
        </section>

        {/* ============================================ */}
        {/* NEWSLETTER */}
        {/* ============================================ */}
        <section className="py-20 bg-neutral-900 text-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left side - Branding */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-6"
                    >
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-emerald-400">
                        Newsletter hebdo
                      </span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      The Leak Report
                      <span className="text-emerald-400">.</span>
                    </h2>

                    <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                      Chaque semaine, je dissèque un funnel, une stratégie ou
                      une erreur qui coûte cher. Tu repars avec un truc
                      actionnable.
                    </p>

                    {/* What you'll get */}
                    <div className="space-y-3">
                      {[
                        "Analyses de vrais funnels (ce qui marche, ce qui foire)",
                        "Templates et frameworks que j'utilise",
                        "Erreurs à éviter (souvent les miennes)",
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-3 h-3 text-emerald-400"
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
                          </div>
                          <span className="text-neutral-400 text-sm">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right side - Form */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-neutral-800/50 border border-neutral-700 rounded-2xl p-8"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-white">
                          Rejoins +500 marketeurs
                        </p>
                        <p className="text-sm text-neutral-500">
                          Gratuit, pour toujours
                        </p>
                      </div>
                    </div>

                    <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Prénom"
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2"
                      >
                        Recevoir The Leak Report
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
                      </motion.button>
                    </form>

                    <p className="text-xs text-neutral-500 text-center mt-4">
                      Pas de spam. Désabonne-toi en 1 clic.
                    </p>
                  </motion.div>
                </div>

                {/* Social proof */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mt-12 pt-8 border-t border-neutral-800"
                >
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-neutral-500">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-semibold">
                        45%
                      </span>
                      <span>taux d'ouverture moyen</span>
                    </div>
                    <div className="hidden md:block w-1 h-1 bg-neutral-700 rounded-full" />
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-semibold">1x</span>
                      <span>par semaine, le mardi</span>
                    </div>
                    <div className="hidden md:block w-1 h-1 bg-neutral-700 rounded-full" />
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-semibold">
                        5 min
                      </span>
                      <span>de lecture max</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  );
}

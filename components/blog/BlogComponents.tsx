"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  CheckCircle,
  AlertTriangle,
  X,
} from "lucide-react";
import Link from "next/link";

// Types
interface ArticleMeta {
  title: string;
  publishedAt: string;
  estimatedReadingTime: number;
  author: string;
  categories: string[];
  categoryColors: string[];
}

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface KeyPoint {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface Mistake {
  title: string;
  description: string;
}

interface Example {
  title: string;
  description: string;
  points: string[];
  insight: string;
}

// Header d'article
export function ArticleHeader({
  meta,
  excerpt,
}: {
  meta: ArticleMeta;
  excerpt: string;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <Link
          href="/blog"
          className="inline-flex items-center text-neutral-500 hover:text-blue-600 transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour au blog
        </Link>
      </motion.div>

      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(meta.publishedAt).toLocaleDateString("fr-FR")}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {meta.estimatedReadingTime} min de lecture
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {meta.author}
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold font-sora mb-6 leading-tight text-neutral-900">
          {meta.title}
        </h1>

        <div className="flex gap-2 mb-8">
          {meta.categories.map((category, idx) => (
            <span
              key={category}
              className="px-3 py-1 text-sm rounded-full border font-medium"
              style={{
                backgroundColor: `${meta.categoryColors[idx]}20`,
                borderColor: `${meta.categoryColors[idx]}40`,
                color: meta.categoryColors[idx],
              }}
            >
              {category}
            </span>
          ))}
        </div>

        <p className="text-xl text-neutral-600 leading-relaxed">{excerpt}</p>
      </motion.header>
    </>
  );
}

// Points clés
export function KeyPointsSection({ points }: { points: KeyPoint[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {points.map((point, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-blue-200 transition-colors text-center"
          >
            <point.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2 text-neutral-900">
              {point.title}
            </h3>
            <p className="text-sm text-neutral-600">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Table des matières
export function TableOfContents({ items }: { items: TableOfContentsItem[] }) {
  return (
    <div className="py-12">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold font-sora mb-4 text-neutral-900">
          Sommaire
        </h2>
        <nav className="space-y-2">
          {items.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              className="block text-neutral-600 hover:text-blue-600 transition-colors duration-300 py-1 font-medium"
            >
              {index + 1}. {item.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

// Section avec titre
export function ArticleSection({
  id,
  title,
  children,
  className = "",
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-12 ${className}`}>
      <h2 className="text-3xl font-bold font-sora mb-6 text-neutral-900">
        {title}
      </h2>
      {children}
    </section>
  );
}

// Liste de bénéfices
export function BenefitsList({
  benefits,
  title,
  cardClassName = "bg-white border border-neutral-200",
}: {
  benefits: Benefit[];
  title?: string;
  cardClassName?: string;
}) {
  return (
    <div className={`${cardClassName} rounded-2xl p-6`}>
      {title && (
        <h3 className="text-xl font-bold text-blue-600 mb-4">{title}</h3>
      )}
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-neutral-600">
              <strong className="text-neutral-900">{benefit.title}:</strong>{" "}
              {benefit.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Liste d'erreurs
export function MistakesList({
  mistakes,
  title = "Les erreurs les plus fréquentes",
}: {
  mistakes: Mistake[];
  title?: string;
}) {
  return (
    <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
        <AlertTriangle className="w-6 h-6" />
        {title}
      </h3>
      <ul className="space-y-3">
        {mistakes.map((mistake, index) => (
          <li key={index} className="flex items-start gap-3">
            <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <strong className="text-red-700">{mistake.title}:</strong>
              <span className="text-neutral-600"> {mistake.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exemple détaillé
export function DetailedExample({ example }: { example: Example }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-neutral-200">
      <h3 className="text-xl font-bold text-blue-600 mb-4">
        {example.title}
      </h3>
      <p className="text-neutral-600 mb-4">{example.description}</p>

      <h4 className="font-semibold text-amber-600 mb-3">Points forts :</h4>
      <ul className="space-y-2 mb-4">
        {example.points.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
            <span className="text-sm text-neutral-600">{point}</span>
          </li>
        ))}
      </ul>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <strong className="text-blue-700">Pourquoi ça marche :</strong>
        <p className="text-sm text-neutral-600 mt-1">{example.insight}</p>
      </div>
    </div>
  );
}

// Highlight
export function Highlight({
  children,
  color = "from-blue-50 to-blue-100",
  borderColor = "border-blue-200",
}: {
  children: React.ReactNode;
  color?: string;
  borderColor?: string;
}) {
  return (
    <div
      className={`bg-gradient-to-br ${color} border-2 ${borderColor} rounded-2xl p-6 my-8`}
    >
      <p className="text-center font-medium text-neutral-600">{children}</p>
    </div>
  );
}

// Navigation bas d'article
export function ArticleNavigation() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-neutral-200 pt-8 mt-16">
      <Link
        href="/blog"
        className="flex items-center text-neutral-500 hover:text-blue-600 transition-colors duration-300"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour au blog
      </Link>

      <div className="flex gap-4">
        <Link
          href="/contact"
          className="px-6 py-2.5 border-2 border-neutral-200 text-neutral-700 rounded-full hover:border-blue-200 hover:text-blue-600 transition-colors font-medium"
        >
          Me contacter
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors font-medium"
        >
          Mes services
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

// CTA milieu d'article
export function ArticleCTA({
  title = "Envie d'aller plus loin ?",
  description = "Découvrez comment je peux vous aider à transformer vos visiteurs en clients.",
  buttonText = "Réserver ma consultation gratuite",
  buttonLink = "/contact",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}) {
  return (
    <div className="py-12">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold font-sora mb-4 text-neutral-900">
          {title}
        </h2>
        <p className="text-neutral-600 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
          {description}
        </p>
        <Link
          href={buttonLink}
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors font-semibold text-sm sm:text-base"
        >
          <span className="hidden xs:inline">{buttonText}</span>
          <span className="xs:hidden">Discuter du projet</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        </Link>
      </div>
    </div>
  );
}

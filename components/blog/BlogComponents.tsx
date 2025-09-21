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
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
          className="inline-flex items-center text-gray-400 hover:text-[#9B5DE5] transition-colors duration-300"
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
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
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

        <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 leading-tight">
          {meta.title}
        </h1>

        <div className="flex gap-2 mb-8">
          {meta.categories.map((category, idx) => (
            <span
              key={category}
              className="px-3 py-1 text-sm rounded-full border"
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

        <p className="text-xl text-gray-300 leading-relaxed">{excerpt}</p>
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
          <Card key={index} className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6 text-center">
              <point.icon className="w-8 h-8 text-[#9B5DE5] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">{point.title}</h3>
              <p className="text-sm text-gray-400">{point.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}

// Table des matières
export function TableOfContents({ items }: { items: TableOfContentsItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/20">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold font-space-grotesk mb-4">
            Sommaire
          </h2>
          <nav className="space-y-2">
            {items.map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className="block text-gray-300 hover:text-[#9B5DE5] transition-colors duration-300 py-1"
              >
                {index + 1}. {item.title}
              </a>
            ))}
          </nav>
        </CardContent>
      </Card>
    </motion.div>
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
      <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-white">
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
  cardClassName = "bg-gray-900/50 border-gray-800",
}: {
  benefits: Benefit[];
  title?: string;
  cardClassName?: string;
}) {
  return (
    <Card className={cardClassName}>
      <CardContent className="p-6">
        {title && (
          <h3 className="text-xl font-bold text-[#FFD400] mb-4">{title}</h3>
        )}
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#9B5DE5] mt-0.5 flex-shrink-0" />
              <div>
                <strong>{benefit.title}:</strong> {benefit.description}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
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
    <Card className="bg-red-900/20 border border-red-500/30">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" />
          {title}
        </h3>
        <ul className="space-y-3">
          {mistakes.map((mistake, index) => (
            <li key={index} className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-red-300">{mistake.title}:</strong>
                <span className="text-gray-300"> {mistake.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

// Exemple détaillé
export function DetailedExample({ example }: { example: Example }) {
  return (
    <Card className="bg-gray-900/50 border-gray-800">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-[#9B5DE5] mb-4">
          {example.title}
        </h3>
        <p className="text-gray-300 mb-4">{example.description}</p>

        <h4 className="font-semibold text-[#FFD400] mb-3">Points forts :</h4>
        <ul className="space-y-2 mb-4">
          {example.points.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-1 flex-shrink-0" />
              <span className="text-sm text-gray-300">{point}</span>
            </li>
          ))}
        </ul>

        <div className="bg-gray-800/50 rounded p-3">
          <strong className="text-[#3A86FF]">Pourquoi ça marche :</strong>
          <p className="text-sm text-gray-400 mt-1">{example.insight}</p>
        </div>
      </CardContent>
    </Card>
  );
}

// Highlight
export function Highlight({
  children,
  color = "from-[#9B5DE5]/20 to-[#3A86FF]/20",
  borderColor = "border-[#9B5DE5]/30",
}: {
  children: React.ReactNode;
  color?: string;
  borderColor?: string;
}) {
  return (
    <div
      className={`bg-gradient-to-r ${color} border ${borderColor} rounded-xl p-6 my-8`}
    >
      <p className="text-center font-medium">{children}</p>
    </div>
  );
}

// Navigation bas d'article
export function ArticleNavigation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex justify-between items-center border-t border-gray-800 pt-8 mt-16"
    >
      <Link
        href="/blog"
        className="flex items-center text-gray-400 hover:text-[#9B5DE5] transition-colors duration-300"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour au blog
      </Link>

      <div className="flex gap-4">
        <Button
          asChild
          variant="outline"
          className="border-gray-700 hover:border-[#9B5DE5] hover:text-[#9B5DE5]"
        >
          <Link href="/contact">Me contacter</Link>
        </Button>
        <Button
          asChild
          className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90"
        >
          <Link href="/services">
            Mes services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </motion.div>
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/20">
        <CardContent className="p-4 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk mb-4">
            {title}
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            {description}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity w-full sm:w-auto px-3 sm:px-6 text-sm sm:text-base break-words"
          >
            <Link
              href={buttonLink}
              className="inline-flex items-center justify-center"
            >
              <span className="hidden xs:inline">{buttonText}</span>
              <span className="xs:hidden">Discuter du projet</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";

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

// Step Card Component
function StepCard({
  number,
  title,
  description,
  children,
  delay = 0,
}: {
  number: string | number;
  title: string;
  description: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card className="bg-neutral-50 border-neutral-200 hover:border-blue-200 transition-colors">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              {/* Number Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: delay + 0.1,
                }}
                className="bg-blue-600 text-white rounded-2xl w-14 h-14 flex items-center justify-center text-2xl font-bold flex-shrink-0"
              >
                {number}
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  {title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {description}
                </p>
                {children}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

// Info Box Component
function InfoBox({
  title,
  children,
  variant = "default",
}: {
  title?: string;
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger";
}) {
  const variants = {
    default: "bg-neutral-100 border-neutral-200",
    success: "bg-blue-50 border-blue-200",
    warning: "bg-amber-50 border-amber-200",
    danger: "bg-red-50 border-red-200",
  };

  return (
    <div className={`${variants[variant]} border rounded-xl p-5 mb-4`}>
      {title && (
        <p className="font-bold text-neutral-900 mb-2 flex items-center gap-2">
          {variant === "danger" && "⚠️"}
          {title}
        </p>
      )}
      <div className="text-neutral-700">{children}</div>
    </div>
  );
}

// Comparison Component
function Comparison({ bad, good }: { bad: string; good: string }) {
  return (
    <div className="space-y-3 mb-4">
      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <p className="text-red-600 font-bold mb-2 flex items-center gap-2">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          Mauvais
        </p>
        <p className="text-neutral-600">&quot;{bad}&quot;</p>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-blue-600 font-bold mb-2 flex items-center gap-2">
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
              d="M5 13l4 4L19 7"
            />
          </svg>
          Bon
        </p>
        <p className="text-neutral-900">&quot;{good}&quot;</p>
      </div>
    </div>
  );
}

// Tool Card Component
function ToolCard({
  title,
  tools,
}: {
  title: string;
  tools: Array<{ name: string; description: string }>;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="bg-white border-neutral-200 h-full">
        <CardContent className="p-6">
          <h4 className="font-bold text-lg text-neutral-900 mb-4">{title}</h4>
          <ul className="space-y-4">
            {tools.map((tool, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-neutral-900">{tool.name}</p>
                  <p className="text-sm text-neutral-500">{tool.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function StepsSection() {
  return (
    <ArticleSection
      id="steps"
      title="Comment créer ta landing page en 6 étapes"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg text-neutral-600 leading-relaxed mb-10">
          Voici la méthode que j&apos;utilise pour créer une landing page qui
          convertit à 10%+.
        </p>

        <div className="space-y-6">
          {/* Étape 1 */}
          <StepCard
            number="1"
            title="Définir l'objectif unique"
            description="Choisis UN seul objectif : génération de leads, vente, inscription événement, ou démo."
            delay={0}
          >
            <InfoBox title="Règle d'or" variant="success">
              <p className="font-medium">
                Une landing page = 1 objectif = 1 CTA
              </p>
            </InfoBox>
            <p className="text-sm text-neutral-500">
              Les landing pages avec 1 CTA convertissent 266% mieux que celles
              avec 2+ CTA (HubSpot).
            </p>
          </StepCard>

          {/* Étape 2 */}
          <StepCard
            number="2"
            title="Rédiger un titre bénéfice"
            description="Écris un titre qui vend un bénéfice, pas une fonctionnalité."
            delay={0.1}
          >
            <Comparison
              bad="Notre plateforme CRM moderne"
              good="Gère 500+ leads sans perdre une vente"
            />
            <p className="text-sm text-neutral-500">
              Changer un titre peut améliorer la conversion de 30-90%
              (ConversionXL).
            </p>
          </StepCard>

          {/* Étape 3 */}
          <StepCard
            number="3"
            title="Créer un formulaire court"
            description="Pour du lead gen, limite à 3 champs maximum (prénom, email, téléphone)."
            delay={0.2}
          >
            <InfoBox title="Données Unbounce">
              <div className="space-y-1">
                <p>
                  • 3 champs ={" "}
                  <span className="font-semibold text-blue-600">
                    10,4% conversion
                  </span>
                </p>
                <p>
                  • 5 champs ={" "}
                  <span className="font-semibold text-neutral-900">
                    6,2% conversion
                  </span>
                </p>
                <p>
                  • 7+ champs ={" "}
                  <span className="font-semibold text-red-600">
                    3,1% conversion
                  </span>
                </p>
              </div>
            </InfoBox>
            <p className="text-sm text-neutral-500">
              Demande le minimum pour démarrer la conversation. Le reste, tu le
              demandes après.
            </p>
          </StepCard>

          {/* Étape 4 */}
          <StepCard
            number="4"
            title="Ajouter la preuve sociale"
            description="Intègre chiffres d'autorité, logos clients, ou témoignages avec photo."
            delay={0.3}
          >
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
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
                <p className="text-neutral-700">
                  <strong className="text-neutral-900">Chiffres</strong> :
                  &quot;Utilisé par 150 000+ entreprises&quot;
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
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
                <p className="text-neutral-700">
                  <strong className="text-neutral-900">Logos</strong> : 6-8
                  entreprises connues
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
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
                <p className="text-neutral-700">
                  <strong className="text-neutral-900">Témoignages</strong> :
                  Avec photo = +34% conversion
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-500">
              Logos augmentent confiance de 42% selon Nielsen.
            </p>
          </StepCard>

          {/* Étape 5 */}
          <StepCard
            number="5"
            title="Optimiser pour mobile"
            description="67% du trafic landing page vient du mobile. Teste ta page sur mobile AVANT de lancer."
            delay={0.4}
          >
            <InfoBox title="⚠️ Attention" variant="danger">
              <p>
                Chaque seconde de chargement supplémentaire = -7% de conversion
                (Google Speed Report).
              </p>
            </InfoBox>
            <p className="text-sm text-neutral-500">
              Outils de test : Google PageSpeed Insights, GTmetrix
            </p>
          </StepCard>

          {/* Étape 6 */}
          <StepCard
            number="6"
            title="Tester et itérer"
            description="Lance des tests A/B sur titre, CTA, visuels, formulaire."
            delay={0.5}
          >
            <InfoBox title="Éléments à tester en priorité">
              <div className="space-y-1">
                <p>• Titre principal</p>
                <p>
                  • Texte CTA (&quot;Télécharger&quot; vs &quot;Recevoir&quot;)
                </p>
                <p>• Couleur bouton CTA</p>
                <p>• Nombre de champs formulaire</p>
                <p>• Vidéo vs image statique</p>
              </div>
            </InfoBox>
            <p className="text-sm text-neutral-500">
              Les CTA spécifiques augmentent la conversion de 21% en moyenne
              (WordStream, 3 000 tests).
            </p>
          </StepCard>
        </div>

        {/* Outils recommandés */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-neutral-900 mb-8">
            Outils pour créer ta{" "}
            <span className="text-blue-600">landing page</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <ToolCard
              title="Solutions no-code (débutants)"
              tools={[
                {
                  name: "Unbounce",
                  description: "90€/mois • Drag & drop • A/B testing",
                },
                {
                  name: "Leadpages",
                  description: "37€/mois • Templates optimisés",
                },
                {
                  name: "Systeme.io",
                  description: "Gratuit jusqu'à 2000 contacts",
                },
              ]}
            />

            <ToolCard
              title="Solutions WordPress (intermédiaires)"
              tools={[
                {
                  name: "Elementor Pro",
                  description: "49$/an • Constructeur visuel",
                },
                {
                  name: "Thrive Architect",
                  description: "299$/an • Focus conversion",
                },
                {
                  name: "Divi Builder",
                  description: "89$/an • 2000+ templates",
                },
              ]}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <Highlight>
            Une landing page, ce n&apos;est jamais &quot;fini&quot;. Les
            meilleures convertissent à 15%+ après 6-12 mois d&apos;optimisation
            continue.
          </Highlight>
        </motion.div>
      </motion.div>
    </ArticleSection>
  );
}

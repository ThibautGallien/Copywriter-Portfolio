"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Zap, Lightbulb } from "lucide-react";
import { toast } from "sonner";
import { trackContactForm } from "@/lib/analytics";

// --- Données du formulaire ---
const businessTypes = [
  "Coaching / Conseil",
  "Formation en ligne",
  "E-commerce",
  "Affiliation",
  "SaaS",
  "Autre",
];

const caRanges = [
  "Moins de 5K€/mois",
  "5K€ - 10K€/mois",
  "10K€ - 20K€/mois",
  "20K€ - 50K€/mois",
  "Plus de 50K€/mois",
];

const trafficRanges = [
  "Moins de 500",
  "500 - 1000",
  "1000 - 5000",
  "5000 - 10000",
  "Plus de 10000",
];

const budgetOptions = [
  "Je cherche l'audit gratuit (3 places disponibles)",
  "500€ - 1000€",
  "1000€ - 2000€",
  "2000€ - 5000€",
  "Plus de 5000€",
  "Flexible selon recommandations",
];

const analyticsOptions = [
  "Oui, Google Analytics + outils publicitaires",
  "Oui, mais je ne sais pas les lire",
  "Non, je n'ai rien mis en place",
  "Je ne sais pas",
];

// --- Type du formulaire ---
type FormData = {
  name: string;
  email: string;
  company: string;
  businessType: string;
  caMonthly: string;
  trafficMonthly: string;
  problem: string;
  budget: string;
  analyticsAccess: string;
  newsletter: boolean;
};

// Composant FadeIn
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// --- Composant principal ---
export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    businessType: "",
    caMonthly: "",
    trafficMonthly: "",
    problem: "",
    budget: "",
    analyticsAccess: "",
    newsletter: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Gère les changements de Select
  const handleSelectChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Gère les changements des autres inputs
  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Validation côté client pour les champs obligatoires
  const isFormValid = () => {
    const requiredFields: (keyof FormData)[] = [
      "name",
      "email",
      "businessType",
      "caMonthly",
      "trafficMonthly",
      "problem",
      "budget",
      "analyticsAccess",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        return false;
      }
    }
    return true;
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!isFormValid()) {
      toast.warning("Veuillez remplir tous les champs obligatoires (*).");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Track la conversion dans Google Analytics
        trackContactForm({
          form_location: "contact_page",
          form_type: "contact",
          service_interest: formData.businessType,
        });

        toast.success("Demande envoyée avec succès !", {
          description:
            "J'ai bien reçu ton brief. Je te réponds sous 24h. Surveille ta boîte mail ! 📧",
        });

        // Réinitialisation du formulaire
        setFormData({
          name: "",
          email: "",
          company: "",
          businessType: "",
          caMonthly: "",
          trafficMonthly: "",
          problem: "",
          budget: "",
          analyticsAccess: "",
          newsletter: false,
        });
      } else {
        console.error("Erreur API:", result.error || "Réponse non OK");
        toast.error("Erreur lors de l'envoi de ta demande", {
          description:
            result.error ||
            "Une erreur serveur est survenue. Veuillez réessayer.",
        });
      }
    } catch (error) {
      console.error("Erreur de fetch:", error);
      toast.error("Erreur de connexion", {
        description: "Impossible de joindre le serveur. Vérifie ta connexion.",
      });
    }

    setIsSubmitting(false);
  };

  // --- Rendu JSX ---
  return (
    <div className="relative pt-24 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-sora mb-6 leading-[1.1] text-neutral-900">
            <span className="text-emerald-600">Ton Business. Ma Méthode.</span>
            <br />
            Des Résultats Mesurables.
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Raconte-moi où tu en es : je te guide pour trouver où tu perds de
            l'argent et comment le récupérer. Même si tu ne sais pas exactement
            ce qui cloche.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* --- Colonne gauche --- */}
          <FadeIn delay={0.1} className="space-y-6">
            {/* Réponse Garantie */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200"
            >
              <h3 className="font-semibold font-sora mb-4 text-emerald-700 flex items-center gap-2">
                <Zap className="w-5 h-5" /> Réponse Garantie
              </h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Réponse sous 24h maximum</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Analyse gratuite de ta situation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Conseils personnalisés (même si on ne bosse pas ensemble)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Transparence totale sur ce que je peux ou ne peux pas faire
                    pour toi
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Approche Honnête */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200"
            >
              <h3 className="font-semibold font-sora mb-4 text-amber-700 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" /> Approche Honnête
              </h3>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-lg font-bold text-amber-600 flex-shrink-0">
                    •
                  </span>
                  <span>
                    Si je peux t'aider, je te le dis. Si je ne peux pas, je
                    t'oriente vers quelqu'un d'autre.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg font-bold text-amber-600 flex-shrink-0">
                    •
                  </span>
                  <span>
                    Pas de bullshit, pas de vente forcée. Juste une conversation
                    pour voir si ça fait sens.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lg font-bold text-amber-600 flex-shrink-0">
                    •
                  </span>
                  <span>
                    Je ne devine pas, j'analyse : tout est mesurable, tout est
                    trackable.
                  </span>
                </li>
              </ul>
            </motion.div>
          </FadeIn>

          {/* --- Formulaire --- */}
          <FadeIn delay={0.2} className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-neutral-200 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold font-sora text-neutral-900 mb-2">
                  Briefe-moi ta situation
                </h2>
                <p className="text-neutral-600">
                  Plus tu es précis, plus je peux t'aider efficacement.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nom / Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Nom / Prénom *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Ton nom"
                      required
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-emerald-500 focus:outline-none text-neutral-900 placeholder-neutral-400 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="ton@email.com"
                      required
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-emerald-500 focus:outline-none text-neutral-900 placeholder-neutral-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Entreprise / Type de business */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Entreprise / Projet
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      placeholder="Nom de ton projet/entreprise"
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-emerald-500 focus:outline-none text-neutral-900 placeholder-neutral-400 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="businessType"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Type de business *
                    </label>
                    <select
                      id="businessType"
                      value={formData.businessType}
                      onChange={(e) =>
                        handleSelectChange("businessType", e.target.value)
                      }
                      required
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-emerald-500 focus:outline-none text-neutral-900 transition-colors"
                    >
                      <option value="">Choisis ton secteur</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* CA / Trafic */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="caMonthly"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Chiffre d'affaires mensuel actuel *
                    </label>
                    <select
                      id="caMonthly"
                      value={formData.caMonthly}
                      onChange={(e) =>
                        handleSelectChange("caMonthly", e.target.value)
                      }
                      required
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-emerald-500 focus:outline-none text-neutral-900 transition-colors"
                    >
                      <option value="">Ton CA/mois</option>
                      {caRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="trafficMonthly"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Nombre de visiteurs/mois approximatif *
                    </label>
                    <select
                      id="trafficMonthly"
                      value={formData.trafficMonthly}
                      onChange={(e) =>
                        handleSelectChange("trafficMonthly", e.target.value)
                      }
                      required
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-emerald-500 focus:outline-none text-neutral-900 transition-colors"
                    >
                      <option value="">Ton trafic/mois</option>
                      {trafficRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Problématique */}
                <div className="space-y-2">
                  <label
                    htmlFor="problem"
                    className="text-sm font-medium text-neutral-700"
                  >
                    Ta problématique actuelle * (sois précis)
                  </label>
                  <textarea
                    id="problem"
                    value={formData.problem}
                    onChange={(e) =>
                      handleInputChange("problem", e.target.value)
                    }
                    placeholder={`Ex: "Mon taux d'abandon panier est de 70%" ou "Je ne sais pas où je perds de l'argent exactement"`}
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-emerald-500 focus:outline-none text-neutral-900 placeholder-neutral-400 resize-none transition-colors"
                  />
                </div>

                {/* Budget / Analytics */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="budget"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Budget envisagé *
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) =>
                        handleSelectChange("budget", e.target.value)
                      }
                      required
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-emerald-500 focus:outline-none text-neutral-900 transition-colors"
                    >
                      <option value="">Ton budget estimé</option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="analyticsAccess"
                      className="text-sm font-medium text-neutral-700"
                    >
                      As-tu accès à tes analytics ? *
                    </label>
                    <select
                      id="analyticsAccess"
                      value={formData.analyticsAccess}
                      onChange={(e) =>
                        handleSelectChange("analyticsAccess", e.target.value)
                      }
                      required
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-emerald-500 focus:outline-none text-neutral-900 transition-colors"
                    >
                      <option value="">Accès aux données</option>
                      {analyticsOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="flex items-start space-x-3 pt-4">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={(e) =>
                      handleInputChange("newsletter", e.target.checked)
                    }
                    className="w-5 h-5 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500 focus:ring-offset-0 mt-0.5"
                  />
                  <label
                    htmlFor="newsletter"
                    className="text-sm text-neutral-600 cursor-pointer leading-relaxed"
                  >
                    Je veux recevoir tes conseils marketing (max 1
                    email/semaine, promis !)
                  </label>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      Envoi en cours...
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Zap,
  BarChart,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

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
  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Validation côté client pour les champs obligatoires (en plus de l'attribut required)
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
        // Gérer les erreurs de la route API
        console.error("Erreur API:", result.error || "Réponse non OK");
        toast.error("Erreur lors de l'envoi de ta demande", {
          description: result.error || "Une erreur serveur est survenue. Veuillez réessayer.",
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
    <div className="relative pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -left-64 w-96 h-96 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-32 -right-64 w-96 h-96 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              Ton Business. Ma Méthode.
            </span>
            <br />
            Des Résultats Mesurables.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Raconte-moi où tu en es : je te guide pour trouver où tu perds de
            l'argent et comment le récupérer. Même si tu ne sais pas exactement ce
            qui cloche.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* --- Colonne gauche --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Réponse Garantie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-2xl p-6 border border-gray-800"
            >
              <h3 className="font-semibold font-space-grotesk mb-3 text-[#FFD400] flex items-center gap-2">
                <Zap className="w-5 h-5" /> Réponse Garantie
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9B5DE5]" />
                  Réponse sous 24h maximum
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9B5DE5]" />
                  Analyse gratuite de ta situation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9B5DE5]" />
                  Conseils personnalisés (même si on ne bosse pas ensemble)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9B5DE5]" />
                  Transparence totale sur ce que je peux ou ne peux pas faire pour toi
                </li>
              </ul>
            </motion.div>

            {/* Approche Honnête */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-[#FFD400]/10 to-[#FF9900]/10 rounded-2xl p-6 border border-gray-800"
            >
              <h3 className="font-semibold font-space-grotesk mb-3 text-[#FFD400] flex items-center gap-2">
                <Lightbulb className="w-5 h-5" /> Approche Honnête
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-base font-bold text-[#FFD400]">•</span>
                  Si je peux t'aider, je te le dis. Si je ne peux pas, je t'oriente
                  vers quelqu'un d'autre.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-base font-bold text-[#FFD400]">•</span>
                  Pas de bullshit, pas de vente forcée. Juste une conversation pour
                  voir si ça fait sens.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-base font-bold text-[#FFD400]">•</span>
                  Je ne devine pas, j'analyse : tout est mesurable, tout est
                  trackable.
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* --- Formulaire --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-space-grotesk">
                  Briefe-moi ta situation
                </CardTitle>
                <CardDescription>
                  Plus tu es précis, plus je peux t'aider efficacement.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nom / Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom / Prénom *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Ton nom"
                        required
                        className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="ton@email.com"
                        required
                        className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5]"
                      />
                    </div>
                  </div>

                  {/* Entreprise / Type de business */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Entreprise / Projet</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        placeholder="Nom de ton projet/entreprise"
                        className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessType">Type de business *</Label>
                      <Select
                        value={formData.businessType}
                        onValueChange={(value) =>
                          handleSelectChange("businessType", value)
                        }
                        required
                      >
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5]">
                          <SelectValue placeholder="Choisis ton secteur" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {businessTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* CA / Trafic */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="caMonthly">
                        Chiffre d'affaires mensuel actuel *
                      </Label>
                      <Select
                        value={formData.caMonthly}
                        onValueChange={(value) =>
                          handleSelectChange("caMonthly", value)
                        }
                        required
                      >
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5]">
                          <SelectValue placeholder="Ton CA/mois" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {caRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="trafficMonthly">
                        Nombre de visiteurs/mois approximatif *
                      </Label>
                      <Select
                        value={formData.trafficMonthly}
                        onValueChange={(value) =>
                          handleSelectChange("trafficMonthly", value)
                        }
                        required
                      >
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5]">
                          <SelectValue placeholder="Ton trafic/mois" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {trafficRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Problématique */}
                  <div className="space-y-2">
                    <Label htmlFor="problem">
                      Ta problématique actuelle * (sois précis)
                    </Label>
                    <Textarea
                      id="problem"
                      value={formData.problem}
                      onChange={(e) =>
                        handleInputChange("problem", e.target.value)
                      }
                      placeholder={`Ex: "Mon taux d'abandon panier est de 70%" ou "Je ne sais pas où je perds de l'argent exactement"`}
                      rows={4}
                      required
                      className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5] resize-none"
                    />
                  </div>

                  {/* Budget / Analytics */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget envisagé *</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          handleSelectChange("budget", value)
                        }
                        required
                      >
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5]">
                          <SelectValue placeholder="Ton budget estimé" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {budgetOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="analyticsAccess">
                        As-tu accès à tes analytics ? *
                      </Label>
                      <Select
                        value={formData.analyticsAccess}
                        onValueChange={(value) =>
                          handleSelectChange("analyticsAccess", value)
                        }
                        required
                      >
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5]">
                          <SelectValue placeholder="Accès aux données" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {analyticsOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="flex items-start space-x-2 pt-4">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) =>
                        handleInputChange("newsletter", checked as boolean)
                      }
                      className="border-gray-700 data-[state=checked]:bg-[#9B5DE5] data-[state=checked]:border-[#9B5DE5] mt-1"
                    />
                    <Label
                      htmlFor="newsletter"
                      className="text-sm text-gray-300 cursor-pointer leading-relaxed"
                    >
                      Je veux recevoir tes conseils marketing (max 1 email/semaine,
                      promis !)
                    </Label>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#FFD400] to-[#FF9900] text-black hover:opacity-90 transition-opacity font-bold"
                  >
                    {isSubmitting ? (
                      <>
                        Envoi en cours...
                        <div className="w-4 h-4 ml-2 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      </>
                    ) : (
                      <>
                        Envoyer ma demande
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
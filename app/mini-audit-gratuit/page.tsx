/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  CheckCircle,
  AlertTriangle,
  Clock,
  Target,
  TrendingUp,
  Shield,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function MiniAuditPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    monthlyRevenue: "",
    traffic: "",
    analyticsAccess: "",
    mainGoal: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: "Candidature Mini-Audit Flash Gratuit",
        }),
      });

      if (response.ok) {
        toast({
          title: "Candidature envoyée !",
          description: "Je te réponds sous 24h. Check tes emails.",
        });

        setFormData({
          name: "",
          email: "",
          website: "",
          monthlyRevenue: "",
          traffic: "",
          analyticsAccess: "",
          mainGoal: "",
        });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Réessaye ou contacte-moi directement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
            <Target className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">
              Mini-Audit Flash - 100% Gratuit
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 leading-tight mb-6">
            Je trouve où tu perds de l'argent.
            <br />
            <span className="text-emerald-600">En 15 minutes. Gratuitement.</span>
          </h1>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Un Loom vidéo où je te montre les <strong>2-3 problèmes évidents</strong> de ton funnel et ce que tu peux fixer immédiatement.
          </p>
        </motion.div>

        {/* Ce que tu obtiens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-10 mb-16"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Ce que tu obtiens (gratuitement)
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-2">
                  1 Loom vidéo de 15 minutes
                </h3>
                <p className="text-sm text-neutral-600">
                  Je parcours ton funnel et te montre exactement où ça coince.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-2">
                  2-3 problèmes identifiés
                </h3>
                <p className="text-sm text-neutral-600">
                  Les fuites les plus évidentes. Celles qui te coûtent le plus cher.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-2">
                  Recommandations quick wins
                </h3>
                <p className="text-sm text-neutral-600">
                  Les actions immédiates pour améliorer ta conversion rapidement.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-2">
                  Aucune vente forcée
                </h3>
                <p className="text-sm text-neutral-600">
                  Si je vois que tu n'as pas besoin de moi, je te le dis clairement.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Critères d'éligibilité */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-10 mb-16"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-6 text-center">
            <AlertTriangle className="w-8 h-8 text-amber-600 inline-block mb-1" /> Critères d'Éligibilité
          </h2>

          <p className="text-center text-neutral-600 mb-8">
            Je ne peux pas aider tout le monde. Voici les critères minimum :
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-neutral-900 mb-1">
                  CA minimum : 5K€/mois
                </h4>
                <p className="text-sm text-neutral-600">
                  En dessous, tu dois d'abord valider ton offre. Pas assez de data.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-neutral-900 mb-1">
                  Funnel actif avec du trafic
                </h4>
                <p className="text-sm text-neutral-600">
                  Pas juste une idée. Tu dois avoir des visiteurs réguliers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-neutral-900 mb-1">
                  Accès Google Analytics fourni
                </h4>
                <p className="text-sm text-neutral-600">
                  Je ne devine pas. Si tu n'as pas de tracking, je refuse.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-neutral-900 mb-1">
                  Prêt à donner un témoignage
                </h4>
                <p className="text-sm text-neutral-600">
                  Si l'audit t'a été utile, je te demande un témoignage en échange.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white border-2 border-neutral-200 rounded-2xl p-10"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Postule pour une des 10 places
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-900 mb-2">
                  Prénom & Nom *
                </label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-900 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12"
                  placeholder="john@exemple.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-900 mb-2">
                URL de ton site/funnel *
              </label>
              <Input
                type="url"
                required
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="h-12"
                placeholder="https://tonsite.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-900 mb-2">
                  CA mensuel moyen *
                </label>
                <Input
                  type="text"
                  required
                  value={formData.monthlyRevenue}
                  onChange={(e) =>
                    setFormData({ ...formData, monthlyRevenue: e.target.value })
                  }
                  className="h-12"
                  placeholder="Ex: 8K€/mois"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-900 mb-2">
                  Trafic mensuel (visiteurs) *
                </label>
                <Input
                  type="text"
                  required
                  value={formData.traffic}
                  onChange={(e) => setFormData({ ...formData, traffic: e.target.value })}
                  className="h-12"
                  placeholder="Ex: 2000 visiteurs/mois"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-900 mb-2">
                As-tu Google Analytics installé ? *
              </label>
              <Input
                type="text"
                required
                value={formData.analyticsAccess}
                onChange={(e) =>
                  setFormData({ ...formData, analyticsAccess: e.target.value })
                }
                className="h-12"
                placeholder="Oui / Non / Autre outil (précise lequel)"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-900 mb-2">
                Quel est ton objectif principal ? *
              </label>
              <Textarea
                required
                value={formData.mainGoal}
                onChange={(e) => setFormData({ ...formData, mainGoal: e.target.value })}
                className="min-h-[120px]"
                placeholder="Ex: Améliorer ma conversion de 2% à 5%, comprendre pourquoi je perds des clients au checkout, etc."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 text-lg font-bold bg-emerald-600 hover:bg-emerald-500 text-white"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma candidature"}
            </Button>

            <p className="text-sm text-center text-neutral-500">
              Réponse sous 24h. Si tu es sélectionné, je te contacte pour planifier l'audit.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

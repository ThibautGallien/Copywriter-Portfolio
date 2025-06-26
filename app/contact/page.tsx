"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
    newsletter: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Envoi vers l'API route qui gère Telegram
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(
          "Message envoyé avec succès ! Je vous réponds sous 24h.",
          {
            description: "Surveillez votre boîte mail 📧",
          }
        );

        // Reset du formulaire
        setFormData({
          name: "",
          email: "",
          company: "",
          budget: "",
          message: "",
          newsletter: false,
        });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      toast.error("Erreur lors de l'envoi du message", {
        description: "Veuillez réessayer ou me contacter directement.",
      });
    }

    setIsSubmitting(false);
  };

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
            Votre projet. Ma méthode.
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              Des emails qui vendent.
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Racontez-moi où vous en êtes : je vous guide pour transformer vos
            mots en séquences qui vendent, même avec une petite liste.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Quick Info Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold font-space-grotesk mb-6">
              Pourquoi me
              <span className="text-[#9B5DE5]"> contacter ?</span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-2xl p-6 border border-gray-800"
            >
              <h3 className="font-semibold font-space-grotesk mb-3 text-[#FFD400]">
                ⚡ Réponse Garantie
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9B5DE5]" />
                  Réponse sous 24h maximum
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9B5DE5]" />
                  Devis gratuit et détaillé
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9B5DE5]" />
                  Conseils personnalisés
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9B5DE5]" />
                  ROI x2 minimum garanti
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-space-grotesk">
                  Briefez-moi votre projet
                </CardTitle>
                <CardDescription>
                  Plus vous êtes précis, plus je peux vous aider efficacement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom / Prénom *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Votre nom"
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
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="votre@email.com"
                        required
                        className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Entreprise / Projet</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      placeholder="Nom de votre entreprise ou projet"
                      className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget envisagé</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        handleInputChange("budget", value)
                      }
                    >
                      <SelectTrigger className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5]">
                        <SelectValue placeholder="Votre budget" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="500-1000">500€ - 1000€</SelectItem>
                        <SelectItem value="1000-2500">1000€ - 2500€</SelectItem>
                        <SelectItem value="2500-5000">2500€ - 5000€</SelectItem>
                        <SelectItem value="5000+">Plus de 5000€</SelectItem>
                        <SelectItem value="flexible">
                          Flexible selon recommandations
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Décrivez votre projet *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Parlez-moi de votre projet, vos objectifs, votre audience cible, vos défis actuels... Plus vous êtes précis, mieux je peux vous aider !"
                      rows={6}
                      required
                      className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5] resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) =>
                        handleInputChange("newsletter", checked as boolean)
                      }
                      className="border-gray-700 data-[state=checked]:bg-[#9B5DE5] data-[state=checked]:border-[#9B5DE5]"
                    />
                    <Label
                      htmlFor="newsletter"
                      className="text-sm text-gray-300"
                    >
                      Je veux recevoir vos conseils copywriting (max 1
                      email/semaine, promis !)
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
                  >
                    {isSubmitting ? (
                      <>
                        Envoi en cours...
                        <div className="w-4 h-4 ml-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </>
                    ) : (
                      <>
                        Envoyer mon brief
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-3xl p-8 md:p-12 border border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk mb-4">
              Questions fréquentes
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
              <div>
                <h3 className="font-semibold text-[#FFD400] mb-2">
                  💰 Comment se passent les paiements ?
                </h3>
                <p className="text-sm text-gray-300">
                  50% à la commande, 50% à la livraison. Facture en bonne et due
                  forme, paiement par virement ou Stripe.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#FFD400] mb-2">
                  ⏱️ Combien de révisions incluses ?
                </h3>
                <p className="text-sm text-gray-300">
                  Illimitée. C'est dans ma garantie satisfaction. Mais plus on
                  fera de modifications, moins je passerai de temps à optimiser
                  les résultats.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#FFD400] mb-2">
                  📈 Garantissez-vous les résultats ?
                </h3>
                <p className="text-sm text-gray-300">
                  Oui ! ROI x2 minimum garanti dans les 60 jours. Si ce n'est
                  pas le cas, je continue à travailler gratuitement jusqu'à
                  l'obtenir.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#FFD400] mb-2">
                  🤝 Travaillez-vous en exclusivité ?
                </h3>
                <p className="text-sm text-gray-300">
                  Je ne prends qu'un nombre limité de clients pour garantir un
                  accompagnement de qualité et des résultats concrets. Donc la
                  probabilité d'avoir un de vos concurrent direct est très
                  faible. Toutefons, je peux mettre en place un contrat
                  d'exclusivité contre une majoration des services.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#FFD400] mb-2">
                  ⚡ Combien de temps pour voir les résultats ?
                </h3>
                <p className="text-sm text-gray-300">
                  Dès les premières semaines, vous commencez à voir les premiers
                  effets. Les résultats s'amplifient avec les optimisations
                  mensuelles.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#FFD400] mb-2">
                  🔧 Et si je ne suis pas à l'aise avec la technique ?
                </h3>
                <p className="text-sm text-gray-300">
                  Aucun souci ! Je gère toute la partie technique : outils,
                  automatisations, intégrations. Vous restez concentré sur votre
                  cœur de métier.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

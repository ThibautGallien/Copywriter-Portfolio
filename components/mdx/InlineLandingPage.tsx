"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, CheckCircle, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function InlineLandingPage({
  title,
  description,
  leadMagnet,
  ctaText = "Télécharger gratuitement",
  icon = "download",
  variant = "default",
}: {
  title: string;
  description: string;
  leadMagnet: string;
  ctaText?: string;
  icon?: "download" | "sparkles" | "check";
  variant?: "default" | "premium" | "urgent";
}) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const icons = {
    download: Download,
    sparkles: Sparkles,
    check: CheckCircle,
  };

  const Icon = icons[icon];

  const variants = {
    default: {
      bg: "bg-gradient-to-br from-blue-50 to-white",
      border: "border-blue-200",
      button: "bg-blue-600 hover:bg-blue-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    premium: {
      bg: "bg-gradient-to-br from-amber-50 to-orange-50",
      border: "border-amber-200",
      button: "bg-amber-600 hover:bg-amber-500",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    urgent: {
      bg: "bg-gradient-to-br from-red-50 to-orange-50",
      border: "border-red-200",
      button: "bg-red-600 hover:bg-red-500",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
  };

  const style = variants[variant];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          leadMagnet,
          source: "inline-lp",
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "C'est envoyé !",
          description: "Check ton email dans 2 minutes.",
        });
      } else {
        throw new Error("Erreur");
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Réessaye ou contacte-moi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`my-10 p-8 ${style.bg} border-2 ${style.border} rounded-2xl text-center`}
      >
        <div className={`w-16 h-16 ${style.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
          <CheckCircle className={`w-8 h-8 ${style.iconColor}`} />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-2">
          C'est dans ta boîte !
        </h3>
        <p className="text-neutral-600">
          Vérifie tes emails (et les spams si tu ne vois rien).
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`my-10 p-8 ${style.bg} border-2 ${style.border} rounded-2xl`}
    >
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Icon */}
        <div className={`flex-shrink-0 w-16 h-16 ${style.iconBg} rounded-xl flex items-center justify-center`}>
          <Icon className={`w-8 h-8 ${style.iconColor}`} />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-neutral-900 mb-2">{title}</h3>
          <p className="text-neutral-600">{description}</p>
        </div>

        {/* Form */}
        <div className="w-full md:w-auto md:min-w-[300px]">
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              required
              placeholder="ton@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-center md:text-left"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`w-full h-12 ${style.button} text-white font-bold`}
            >
              {isSubmitting ? "Envoi..." : ctaText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </form>
          <p className="text-xs text-neutral-500 mt-2 text-center">
            Pas de spam. Promis.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Variante compacte (pour milieu d'article)
export function InlineLandingPageCompact({
  text,
  leadMagnet,
  ctaText = "Télécharger",
}: {
  text: string;
  leadMagnet: string;
  ctaText?: string;
}) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          leadMagnet,
          source: "inline-lp-compact",
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "C'est envoyé !",
          description: "Check ton email.",
        });
      } else {
        throw new Error("Erreur");
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Réessaye.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="my-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl text-center"
      >
        <p className="text-blue-700 font-semibold flex items-center justify-center gap-2">
          <CheckCircle className="w-5 h-5" />
          Envoyé ! Check tes emails.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="my-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl"
    >
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center">
        <p className="text-sm font-semibold text-neutral-900 flex-shrink-0">
          {text}
        </p>
        <Input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-10 flex-1"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-10 bg-blue-600 hover:bg-blue-500 text-white font-semibold whitespace-nowrap"
        >
          {isSubmitting ? "..." : ctaText}
        </Button>
      </form>
    </motion.div>
  );
}

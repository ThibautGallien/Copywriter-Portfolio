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
      bg: "rgba(59, 130, 246, 0.04)",
      border: "1px solid rgba(59, 130, 246, 0.15)",
      button: "var(--accent-blue)",
      iconBg: "rgba(59, 130, 246, 0.1)",
      iconColor: "var(--accent-blue)",
    },
    premium: {
      bg: "rgba(245, 158, 11, 0.04)",
      border: "1px solid rgba(245, 158, 11, 0.15)",
      button: "#D97706",
      iconBg: "rgba(245, 158, 11, 0.1)",
      iconColor: "#F59E0B",
    },
    urgent: {
      bg: "rgba(239, 68, 68, 0.04)",
      border: "1px solid rgba(239, 68, 68, 0.15)",
      button: "#DC2626",
      iconBg: "rgba(239, 68, 68, 0.1)",
      iconColor: "#EF4444",
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
        className="my-10 p-8 rounded-xl text-center"
        style={{ background: style.bg, border: style.border }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: style.iconBg }}
        >
          <CheckCircle className="w-8 h-8" style={{ color: style.iconColor }} />
        </div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
          C&apos;est dans ta boîte !
        </h3>
        <p style={{ color: "var(--text-muted)" }}>
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
      className="my-10 p-8 rounded-xl"
      style={{ background: style.bg, border: style.border }}
    >
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Icon */}
        <div
          className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center"
          style={{ background: style.iconBg }}
        >
          <Icon className="w-8 h-8" style={{ color: style.iconColor }} />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>{title}</h3>
          <p style={{ color: "var(--text-muted)" }}>{description}</p>
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
              className="w-full h-12 text-white font-bold"
              style={{ background: style.button }}
            >
              {isSubmitting ? "Envoi..." : ctaText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </form>
          <p className="text-xs mt-2 text-center" style={{ color: "var(--text-dim)" }}>
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
        className="my-6 p-4 rounded-xl text-center"
        style={{
          background: "rgba(59, 130, 246, 0.06)",
          border: "1px solid rgba(59, 130, 246, 0.15)",
        }}
      >
        <p className="font-semibold flex items-center justify-center gap-2" style={{ color: "var(--accent-blue)" }}>
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
      className="my-6 p-4 rounded-xl"
      style={{
        background: "rgba(59, 130, 246, 0.06)",
        border: "1px solid rgba(59, 130, 246, 0.15)",
      }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center">
        <p className="text-sm font-semibold flex-shrink-0" style={{ color: "var(--text)" }}>
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
          className="h-10 text-white font-semibold whitespace-nowrap"
          style={{ background: "var(--accent-blue)" }}
        >
          {isSubmitting ? "..." : ctaText}
        </Button>
      </form>
    </motion.div>
  );
}

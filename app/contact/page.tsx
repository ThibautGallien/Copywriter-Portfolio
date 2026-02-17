"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { trackContactForm } from "@/lib/analytics";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message envoye !", {
          description: "Je reviens vers toi sous 24h.",
        });
        trackContactForm("success", "contact-page");
        setFormData({ name: "", email: "", company: "", message: "", service: "" });
      } else {
        throw new Error("Erreur");
      }
    } catch {
      toast.error("Erreur lors de l'envoi", {
        description: "Reessaye ou contacte-moi directement par email.",
      });
      trackContactForm("error", "contact-page");
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* ══════ HERO ══════ */}
      <section style={{ paddingTop: 120, paddingBottom: 40 }}>
        <div className="container-main">
          <span className="section-number">Contact</span>
          <h1 style={{ marginBottom: 16 }}>
            Parlons de
            <span className="gradient-text"> ton projet</span>
          </h1>
          <p style={{ maxWidth: 520, fontSize: 19 }}>
            Un appel de 30 minutes pour analyser ta situation et identifier les quick wins. Ou envoie-moi un message directement.
          </p>
        </div>
      </section>

      <div className="section-divider-accent" />

      {/* ══════ CONTENT ══════ */}
      <section className="section-alt" style={{ padding: "60px 0 80px" }}>
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 48,
            }}
            className="contact-grid"
          >
            {/* Left: Calendly + info */}
            <div>
              <span className="section-number">01. Appel decouverte</span>
              <h3 style={{ marginBottom: 16, fontSize: 20 }}>Reserver un creneau</h3>
              <p style={{ marginBottom: 24, fontSize: 17 }}>
                30 minutes. Je regarde ton site en live, j&apos;identifie 3 quick wins et je te dis si on est un bon fit. Zero engagement.
              </p>
              <Link
                href="https://calendly.com/hello-thibautgallien/30min"
                className="btn-primary"
                style={{ marginBottom: 32, display: "inline-flex" }}
              >
                Reserver sur Calendly
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </Link>

              {/* Calendly embed */}
              <div
                className="card"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  height: 480,
                }}
              >
                <iframe
                  src="https://calendly.com/hello-thibautgallien/30min?hide_gdpr_banner=1&background_color=0a0a0b&text_color=ededef&primary_color=3b82f6"
                  width="100%"
                  height="100%"
                  style={{ border: "none", minHeight: 480 }}
                  title="Calendly — Reserver un appel"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <span className="section-number">02. Message direct</span>
              <h3 style={{ marginBottom: 24, fontSize: 20 }}>Envoyer un message</h3>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <label className="form-label" htmlFor="name">Nom</label>
                  <input
                    className="form-input"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ton nom"
                    required
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    className="form-input"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ton@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="company">Entreprise (optionnel)</label>
                  <input
                    className="form-input"
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nom de ta boite"
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="service">Service qui t&apos;interesse</label>
                  <select
                    className="form-input"
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{ appearance: "none" }}
                  >
                    <option value="">Selectionner...</option>
                    <option value="seo-local">SEO Local</option>
                    <option value="seo-growth">SEO Growth</option>
                    <option value="email">Email Marketing</option>
                    <option value="data">Data &amp; Analytics</option>
                    <option value="autre">Autre / Pas sur</option>
                  </select>
                </div>

                <div>
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    className="form-input"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Parle-moi de ton projet, tes objectifs, tes challenges..."
                    required
                    rows={5}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                  style={{
                    justifyContent: "center",
                    opacity: isSubmitting ? 0.6 : 1,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 769px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}} />
    </>
  );
}

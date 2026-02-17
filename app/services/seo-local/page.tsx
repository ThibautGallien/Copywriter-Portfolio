"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("revealed"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const included = [
  "Audit SEO local complet de ton site",
  "Optimisation Google Business Profile",
  "Citations locales (annuaires, directories)",
  "Contenu geolocalise optimise",
  "Gestion et reponse aux avis Google",
  "Suivi des positions locales",
  "Rapport mensuel detaille",
  "Appel de suivi mensuel",
];

const results = [
  { metric: "Top 3", label: "sur les requetes locales en 3-6 mois" },
  { metric: "+200%", label: "de trafic local en moyenne" },
  { metric: "15+", label: "avis Google par mois" },
  { metric: "ROI", label: "mesurable des le 2e mois" },
];

export default function SeoLocalPage() {
  const revealValue = useReveal();
  const revealResults = useReveal();
  const revealFaq = useReveal();

  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="dot-grid" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container-main">
          <Link
            href="/services"
            style={{
              fontSize: 13,
              color: "var(--text-dim)",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 32,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Retour aux services
          </Link>

          <span
            className="mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.15em",
              color: "var(--accent-blue)",
              textTransform: "uppercase",
              marginBottom: 16,
              display: "block",
            }}
          >
            SEO Local
          </span>

          <h1 style={{ marginBottom: 16 }}>
            Domine Google dans
            <span className="gradient-text"> ta ville</span>
          </h1>
          <p style={{ maxWidth: 540, fontSize: 17, marginBottom: 36 }}>
            Tes clients cherchent tes services sur Google. Si tu n&apos;es pas dans le top 3 du pack local, tu laisses de l&apos;argent sur la table. Chaque jour.
          </p>

          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <div className="card" style={{ padding: "24px 32px", display: "inline-block" }}>
              <span className="price-tag gradient-text">349&euro;</span>
              <span className="price-period">/mois</span>
              <span style={{ display: "block", fontSize: 13, color: "var(--text-dim)", marginTop: 4 }}>
                Sans engagement — resultats mesurables
              </span>
            </div>
            <Link
              href="https://calendly.com/hello-thibautgallien/30min"
              className="btn-primary"
            >
              Reserver un appel
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════ VALUE STACKING ══════ */}
      <section ref={revealValue} className="reveal" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">01. Ce qui est inclus</span>
          <h2 style={{ marginBottom: 48 }}>
            Tout ce qu&apos;il faut pour
            <span className="gradient-text"> dominer localement</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 16,
            }}
          >
            {included.map((item, i) => (
              <div
                key={i}
                className="card"
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent-blue)"
                  strokeWidth="2"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span style={{ fontSize: 14, color: "var(--text)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════ RESULTS ══════ */}
      <section ref={revealResults} className="reveal" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">02. Resultats attendus</span>
          <h2 style={{ marginBottom: 48 }}>
            Ce que ca change
            <span className="gradient-text"> concretement</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 24,
            }}
          >
            {results.map((r, i) => (
              <div key={i} className="card" style={{ padding: 24 }}>
                <div className="stat-value" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", marginBottom: 8 }}>
                  {r.metric}
                </div>
                <p style={{ fontSize: 14 }}>{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════ FAQ ══════ */}
      <section ref={revealFaq} className="reveal" style={{ padding: "80px 0" }}>
        <div className="container-main" style={{ maxWidth: 700 }}>
          <span className="section-number">03. Questions frequentes</span>
          <h2 style={{ marginBottom: 48 }}>
            FAQ
          </h2>

          {[
            {
              q: "Combien de temps avant de voir des resultats ?",
              a: "Les premiers changements sont visibles en 2-4 semaines (Google Business Profile). Pour le positionnement organique local, compte 2-3 mois pour des resultats significatifs.",
            },
            {
              q: "Je dois m'engager combien de temps ?",
              a: "Aucun engagement. Tu peux arreter quand tu veux. Mais le SEO est un investissement long terme — les clients qui restent 6+ mois voient les meilleurs ROI.",
            },
            {
              q: "Ca marche pour quel type de business ?",
              a: "Tout business avec une zone de chalandise : restaurant, artisan, cabinet medical, agence, commerce. Si tes clients te cherchent sur Google + une ville, c'est fait pour toi.",
            },
            {
              q: "Tu t'occupes de tout ou je dois faire des choses ?",
              a: "Je fais 95% du boulot. Je te demanderai juste de valider du contenu et de m'envoyer des photos de temps en temps. Rien de chronophage.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                padding: "24px 0",
              }}
            >
              <h4 style={{ marginBottom: 8, fontSize: 16 }}>{faq.q}</h4>
              <p style={{ fontSize: 15 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════ CTA ══════ */}
      <section style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container-main" style={{ maxWidth: 600 }}>
          <h2 style={{ marginBottom: 16 }}>
            Pret a dominer le
            <span className="gradient-text"> pack local</span> ?
          </h2>
          <p style={{ marginBottom: 32, fontSize: 17 }}>
            30 minutes pour analyser ta situation locale et voir si on est un bon fit.
          </p>
          <Link
            href="https://calendly.com/hello-thibautgallien/30min"
            className="btn-primary"
          >
            Reserver un appel
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

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

const services = [
  {
    tag: "SERVICE PRINCIPAL",
    title: "SEO Local",
    desc: "Tu veux que les clients de ta zone te trouvent sur Google. Optimisation Google Business Profile, citations locales, contenu geolocalise, avis. Resultats des le premier mois.",
    price: "349",
    period: "/mois",
    href: "/services/seo-local",
    featured: true,
  },
  {
    tag: "CROISSANCE",
    title: "SEO Growth",
    desc: "Strategie SEO complete pour scaler ton trafic organique. Audit technique, strategie de contenu, link building, suivi des positions. Pour les business qui veulent dominer leur marche.",
    price: "897",
    period: " audit + 1200/mois",
    href: "/services/seo-growth",
    featured: false,
  },
  {
    tag: "CONVERSION",
    title: "Email Marketing",
    desc: "Sequences automatisees, welcome series, newsletters, segmentation avancee. Je transforme ta liste email en source de revenus previsibles et recurrents.",
    price: "700",
    period: " setup",
    href: "/contact",
    featured: false,
  },
  {
    tag: "OPTIMISATION",
    title: "Data & Analytics",
    desc: "Tracking propre, dashboards actionables, attribution multi-touch. Les chiffres qui te disent exactement ou investir et ou couper. Fini les decisions au feeling.",
    price: "800",
    period: " diagnostic",
    href: "/contact",
    featured: false,
  },
];

export default function ServicesPage() {
  const revealGrid = useReveal();
  const revealCta = useReveal();

  return (
    <>
      {/* ══════ HERO ══════ */}
      <section style={{ paddingTop: 120, paddingBottom: 60 }}>
        <div className="container-main">
          <span className="section-number">Services</span>
          <h1 style={{ marginBottom: 16 }}>
            Des services concus pour
            <span className="gradient-text"> ta croissance</span>
          </h1>
          <p style={{ maxWidth: 560, fontSize: 17 }}>
            Chaque offre est un levier. SEO pour attirer du trafic qualifie, email pour convertir, data pour optimiser. Tu choisis ce dont tu as besoin, je m&apos;occupe du reste.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════ BENTO SERVICES ══════ */}
      <section ref={revealGrid} className="reveal" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <div className="bento-grid">
            {services.map((s, i) => (
              <div
                key={i}
                className="card bento-item"
                style={{
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span
                    className="mono"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.15em",
                      color: s.featured ? "var(--accent-blue)" : "var(--text-muted)",
                      textTransform: "uppercase",
                      marginBottom: 16,
                      display: "block",
                    }}
                  >
                    {s.tag}
                  </span>
                  <h3 style={{ marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 15, marginBottom: 24 }}>{s.desc}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 16,
                  }}
                >
                  <div>
                    <span className="price-tag gradient-text">{s.price}&euro;</span>
                    <span className="price-period">{s.period}</span>
                  </div>
                  <Link
                    href={s.href}
                    className={s.featured ? "btn-primary" : "btn-secondary"}
                    style={{ padding: "8px 18px", fontSize: 13 }}
                  >
                    {s.featured ? "Decouvrir l'offre" : "En savoir plus"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════ CTA ══════ */}
      <section ref={revealCta} className="reveal" style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container-main" style={{ maxWidth: 600 }}>
          <span className="section-number">Prochaine etape</span>
          <h2 style={{ marginBottom: 16 }}>
            Pas sur de ce qu&apos;il te faut ?
          </h2>
          <p style={{ marginBottom: 32, fontSize: 17 }}>
            On en parle 30 minutes. Je regarde ton site, j&apos;identifie les quick wins et je te recommande le service adapte. Zero engagement.
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

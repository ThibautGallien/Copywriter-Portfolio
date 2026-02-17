"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ═══════════════════════════════════════
   HOMEPAGE — thibautgallien.fr
   ═══════════════════════════════════════ */

function useCountUp(target: number, duration = 2000) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("revealed");
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ── Arrow icon reusable ──
function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function HomePage() {
  const revealProblem = useReveal();
  const revealServices = useReveal();
  const revealProcess = useReveal();
  const revealWho = useReveal();
  const revealCta = useReveal();

  const stat1 = useCountUp(47, 2000);
  const stat2 = useCountUp(340, 2000);
  const stat3 = useCountUp(98, 2000);

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section
        className="dot-grid"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 100,
          paddingBottom: 60,
        }}
      >
        <div className="container-main">
          <div className="hero-layout">
            {/* Left — text */}
            <div style={{ animation: "fadeInUp 0.6s ease both" }}>
              <span
                className="mono"
                style={{
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  marginBottom: 24,
                  display: "block",
                }}
              >
                Consultant Croissance Digitale
              </span>

              <h1 style={{ marginBottom: 8, lineHeight: 1.1 }}>
                Je rends ton business
              </h1>
              <h1
                className="gradient-text"
                style={{ marginBottom: 28, lineHeight: 1.1 }}
              >
                visible sur Google
              </h1>

              <p
                style={{
                  fontSize: 19,
                  lineHeight: 1.7,
                  color: "var(--text-muted)",
                  maxWidth: 580,
                  marginBottom: 20,
                }}
              >
                Tu as un bon produit mais pas assez de trafic ? Je t&apos;aide a attirer des visiteurs qualifies
                grace au SEO, a les convertir avec l&apos;email marketing, et a piloter ta croissance avec la data.
              </p>
              <p
                style={{
                  fontSize: 17,
                  color: "var(--text-dim)",
                  maxWidth: 520,
                  marginBottom: 40,
                }}
              >
                Concretement : plus de monde sur ton site, plus de leads, plus de CA. Mesurable, previsible, durable.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link
                  href="https://calendly.com/hello-thibautgallien/30min"
                  className="btn-primary"
                >
                  Reserver un appel decouverte
                  <ArrowIcon />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Decouvrir mes services
                </Link>
              </div>
            </div>

            {/* Right — photo */}
            <div
              className="hero-photo"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                animation: "fadeIn 0.8s ease 0.3s both",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 380,
                }}
              >
                {/* Glow behind photo */}
                <div
                  style={{
                    position: "absolute",
                    inset: -2,
                    borderRadius: 12,
                    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))",
                    filter: "blur(24px)",
                    opacity: 0.5,
                    zIndex: 0,
                  }}
                />
                {/* Photo container */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    borderRadius: 10,
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 8px 40px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <Image
                    src="/profile-pic.webp"
                    alt="Thibaut Gallien — Consultant Croissance Digitale"
                    width={380}
                    height={380}
                    sizes="(max-width: 960px) 280px, 380px"
                    priority
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>
                {/* Small floating badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                    background: "rgba(20, 20, 22, 0.95)",
                    border: "1px solid rgba(59, 130, 246, 0.2)",
                    borderRadius: 6,
                    padding: "8px 16px",
                    backdropFilter: "blur(12px)",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ fontSize: 13, color: "var(--accent-blue)", fontWeight: 600 }}>Thibaut Gallien</span>
                  <span style={{ fontSize: 13, color: "var(--text-dim)", marginLeft: 8 }}>SEO &middot; Email &middot; Data</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero metrics */}
          <div style={{ marginTop: 64 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: 16,
              }}
            >
              <div className="card" style={{ padding: "24px 20px" }}>
                <div className="stat-value" style={{ fontSize: "2rem" }} ref={stat1.ref}>
                  {stat1.value}+
                </div>
                <div className="stat-label">projets accompagnes</div>
              </div>
              <div className="card" style={{ padding: "24px 20px" }}>
                <div className="stat-value" style={{ fontSize: "2rem" }}>
                  +{stat2.value}%
                </div>
                <div className="stat-label">de trafic organique en moyenne</div>
              </div>
              <div className="card" style={{ padding: "24px 20px" }}>
                <div className="stat-value" style={{ fontSize: "2rem" }}>
                  {stat3.value}%
                </div>
                <div className="stat-label">de clients satisfaits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-accent" />

      {/* ═══════ LE PROBLEME ═══════ */}
      <section ref={revealProblem} className="reveal section-alt" style={{ padding: "100px 0" }}>
        <div className="container-main">
          <span className="section-number">01. Le constat</span>
          <h2 style={{ marginBottom: 16, maxWidth: 600 }}>
            Tu perds des clients chaque jour
            <span className="gradient-text"> sans le savoir</span>
          </h2>
          <p style={{ maxWidth: 600, marginBottom: 48 }}>
            Tes concurrents apparaissent en premier sur Google. Tes visiteurs repartent sans acheter.
            Tu envoies des emails que personne n&apos;ouvre. Et tu prends tes decisions marketing au feeling,
            pas a la data.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {[
              {
                icon: "01",
                title: "Invisible sur Google",
                desc: "Tu n'apparais pas quand tes clients potentiels cherchent ce que tu proposes. Tu es en page 2, 3... ou nulle part. Le trafic va chez tes concurrents.",
              },
              {
                icon: "02",
                title: "Du trafic sans conversion",
                desc: "Tu as des visiteurs, mais ils ne deviennent pas clients. Pas de sequence email, pas de nurturing, pas de strategie pour les transformer en acheteurs.",
              },
              {
                icon: "03",
                title: "Des decisions a l'aveugle",
                desc: "Tu ne sais pas quel canal rapporte le plus, quel contenu convertit, combien te coute un lead. Sans data, tu gaspilles du budget.",
              },
            ].map((item, i) => (
              <div key={i} className="card card-accent-blue" style={{ padding: 28 }}>
                <span
                  className="mono"
                  style={{
                    fontSize: 13,
                    color: "var(--accent-blue)",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: 14,
                  }}
                >
                  {item.icon}
                </span>
                <h4 style={{ marginBottom: 10 }}>{item.title}</h4>
                <p style={{ fontSize: 16, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ MES SERVICES — DETAIL ═══════ */}
      <section ref={revealServices} className="reveal" style={{ padding: "100px 0" }}>
        <div className="container-main">
          <span className="section-number">02. Ce que je fais pour toi</span>
          <h2 style={{ marginBottom: 16 }}>
            Trois leviers pour ta
            <span className="gradient-text"> croissance</span>
          </h2>
          <p style={{ maxWidth: 580, marginBottom: 56 }}>
            Chaque service repond a un probleme precis. Tu peux les prendre individuellement ou les combiner
            pour creer un systeme d&apos;acquisition complet.
          </p>

          {/* ── SERVICE 1 : SEO ── */}
          <div style={{ marginBottom: 64 }}>
            <div
              className="card card-accent-blue"
              style={{
                padding: 36,
                borderColor: "rgba(59, 130, 246, 0.2)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }} className="service-detail-grid">
                <div>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      color: "var(--accent-blue)",
                      textTransform: "uppercase",
                      marginBottom: 20,
                      display: "inline-block",
                      padding: "4px 12px",
                      background: "rgba(59, 130, 246, 0.1)",
                      borderRadius: 4,
                    }}
                  >
                    Service principal — SEO
                  </span>
                  <h3 style={{ marginBottom: 14 }}>
                    Referencement naturel : etre trouve par ceux qui cherchent
                  </h3>
                  <p style={{ fontSize: 17, lineHeight: 1.75, marginBottom: 20 }}>
                    Le SEO, c&apos;est faire en sorte que ton site apparaisse en haut de Google quand quelqu&apos;un
                    cherche ce que tu proposes. Pas de pub payante, pas de dependance — du trafic gratuit,
                    qualifie, qui arrive tous les jours.
                  </p>
                  <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 28, color: "var(--text-dim)" }}>
                    <strong style={{ color: "var(--accent-blue)" }}>Concretement :</strong> j&apos;audite ton site, je trouve les mots-cles sur
                    lesquels tu dois te positionner, j&apos;optimise tes pages et je cree du contenu qui attire du trafic.
                    Chaque mois, tu vois tes positions monter et ton trafic augmenter.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                    <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>Ce que tu recois :</p>
                    {[
                      "Audit technique complet de ton site (indexation, vitesse, architecture)",
                      "Recherche de mots-cles : les requetes que tes clients tapent sur Google",
                      "Optimisation de tes pages existantes pour qu'elles rankent",
                      "Creation de contenu SEO (articles, pages) chaque mois",
                      "Rapport mensuel avec tes positions, ton trafic, tes leads",
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" style={{ marginTop: 3, flexShrink: 0 }}>
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span style={{ fontSize: 16, color: "var(--text-muted)" }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                    <Link href="/services/seo-local" className="btn-primary">
                      SEO Local — a partir de 349&euro;/mois
                    </Link>
                    <Link href="/services/seo-growth" className="btn-secondary">
                      SEO Growth — audit + accompagnement
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── SERVICE 2 & 3 : Email + Data ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 16,
            }}
          >
            {/* Email Marketing */}
            <div className="card card-accent-violet" style={{ padding: 32 }}>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "var(--accent-violet)",
                  textTransform: "uppercase",
                  marginBottom: 20,
                  display: "inline-block",
                  padding: "4px 12px",
                  background: "rgba(139, 92, 246, 0.1)",
                  borderRadius: 4,
                }}
              >
                Email Marketing
              </span>
              <h3 style={{ marginBottom: 14 }}>Transformer ta liste en revenus</h3>
              <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>
                Tu as des abonnes ou des contacts mais tu ne leur ecris pas (ou mal). L&apos;email marketing,
                c&apos;est le canal avec le meilleur ROI : pour chaque euro investi, il en rapporte 36 en moyenne.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 24, color: "var(--text-dim)" }}>
                <strong style={{ color: "var(--accent-violet)" }}>Concretement :</strong> je cree tes sequences automatisees
                (bienvenue, vente, relance), j&apos;ecris tes newsletters, je segmente ta liste pour
                envoyer le bon message a la bonne personne. Tu generes des ventes meme quand tu dors.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
                {[
                  "Sequences automatisees (welcome, vente, relance panier)",
                  "Newsletters regulieres qui engagent et convertissent",
                  "Segmentation de ta liste par comportement",
                  "A/B testing et optimisation continue",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-violet)" strokeWidth="2.5" style={{ marginTop: 4, flexShrink: 0 }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span style={{ fontSize: 15, color: "var(--text-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-secondary">
                En savoir plus
              </Link>
            </div>

            {/* Data & Analytics */}
            <div className="card card-accent-green" style={{ padding: 32 }}>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "#28C840",
                  textTransform: "uppercase",
                  marginBottom: 20,
                  display: "inline-block",
                  padding: "4px 12px",
                  background: "rgba(40, 200, 64, 0.08)",
                  borderRadius: 4,
                }}
              >
                Data &amp; Analytics
              </span>
              <h3 style={{ marginBottom: 14 }}>Prendre des decisions basees sur les chiffres</h3>
              <p style={{ fontSize: 16, lineHeight: 1.75, marginBottom: 16 }}>
                Tu investis dans du marketing mais tu ne sais pas ce qui marche vraiment ?
                La data te donne les reponses. Quel canal rapporte le plus, quel contenu convertit,
                ou tu perds tes visiteurs.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 24, color: "var(--text-dim)" }}>
                <strong style={{ color: "#28C840" }}>Concretement :</strong> j&apos;installe un tracking propre
                sur ton site, je cree des dashboards clairs, et je t&apos;explique ou investir ton budget
                pour un maximum de retour. Fini les decisions au feeling.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
                {[
                  "Tracking GA4 / GTM configure proprement",
                  "Dashboards visuels avec tes KPIs",
                  "Attribution : savoir d'ou viennent tes ventes",
                  "Audit de funnel : ou tu perds tes visiteurs",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#28C840" strokeWidth="2.5" style={{ marginTop: 4, flexShrink: 0 }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span style={{ fontSize: 15, color: "var(--text-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-secondary">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ PROCESS ═══════ */}
      <section ref={revealProcess} className="reveal section-alt" style={{ padding: "100px 0" }}>
        <div className="container-main">
          <span className="section-number">03. Comment ca se passe</span>
          <h2 style={{ marginBottom: 16 }}>
            Un process simple et
            <span className="gradient-text"> transparent</span>
          </h2>
          <p style={{ maxWidth: 540, marginBottom: 48 }}>
            Pas de bullshit, pas de jargon. Voici exactement ce qui se passe quand on travaille ensemble.
          </p>

          <div className="timeline">
            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
                01
              </span>
              <h4 style={{ marginBottom: 8 }}>Appel decouverte (30 min)</h4>
              <p style={{ fontSize: 16, lineHeight: 1.7 }}>
                On parle de ton business, tes objectifs, tes blocages. Je regarde ton site en live et
                j&apos;identifie les 3 premiers quick wins. Gratuit, sans engagement.
              </p>
            </div>

            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
                02
              </span>
              <h4 style={{ marginBottom: 8 }}>Audit &amp; plan d&apos;action</h4>
              <p style={{ fontSize: 16, lineHeight: 1.7 }}>
                Analyse complete de ta situation. Tu recois un document avec les problemes identifies,
                les opportunites, et un plan d&apos;action priorise par impact. Tu sais exactement quoi faire.
              </p>
            </div>

            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
                03
              </span>
              <h4 style={{ marginBottom: 8 }}>Execution &amp; implementation</h4>
              <p style={{ fontSize: 16, lineHeight: 1.7 }}>
                C&apos;est moi qui fais le boulot. Optimisations techniques, creation de contenu, mise en place
                des sequences email, tracking. Tu valides, je deploy.
              </p>
            </div>

            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
                04
              </span>
              <h4 style={{ marginBottom: 8 }}>Suivi &amp; optimisation</h4>
              <p style={{ fontSize: 16, lineHeight: 1.7 }}>
                Chaque mois : rapport detaille, call de suivi, ajustements. On double ce qui marche,
                on coupe ce qui ne marche pas. Ta croissance est pilotee par la data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ POUR QUI ═══════ */}
      <section ref={revealWho} className="reveal" style={{ padding: "100px 0" }}>
        <div className="container-main">
          <span className="section-number">04. Pour qui</span>
          <h2 style={{ marginBottom: 16 }}>
            C&apos;est fait pour toi si...
          </h2>
          <p style={{ maxWidth: 520, marginBottom: 48 }}>
            Je travaille avec des entrepreneurs et des entreprises qui ont un vrai produit
            et qui veulent accelerer leur croissance en ligne.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
            className="who-grid"
          >
            {/* Green flags */}
            <div className="card card-accent-green" style={{ padding: 32 }}>
              <h4 style={{ marginBottom: 20, color: "#28C840" }}>Ca match</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Tu as un business en ligne (e-commerce, SaaS, coaching, formation, services)",
                  "Tu veux plus de trafic qualifie sans dependre de la pub",
                  "Tu es pret a investir sur le long terme (le SEO n'est pas un hack overnight)",
                  "Tu veux des resultats mesurables, pas des promesses vagues",
                  "Tu as deja un produit/service qui marche — il te manque la visibilite",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#28C840" strokeWidth="2.5" style={{ marginTop: 2, flexShrink: 0 }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Red flags */}
            <div className="card" style={{ padding: 32, borderTop: "2px solid #FF5F57" }}>
              <h4 style={{ marginBottom: 20, color: "#FF5F57" }}>Ca ne match pas</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Tu cherches des resultats en 1 semaine (le SEO prend 3-6 mois)",
                  "Tu veux juste des likes ou des vues (je travaille sur le CA)",
                  "Tu n'as pas encore de produit ou de marche valide",
                  "Tu veux une solution 100% automatisee sans implication",
                  "Ton budget marketing est inferieur a 300€/mois",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF5F57" strokeWidth="2.5" style={{ marginTop: 2, flexShrink: 0 }}>
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    <span style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-accent" />

      {/* ═══════ FINAL CTA ═══════ */}
      <section ref={revealCta} className="reveal section-cta" style={{ padding: "100px 0", textAlign: "center" }}>
        <div className="container-main" style={{ maxWidth: 640 }}>
          <span className="section-number">05. Prochaine etape</span>
          <h2 style={{ marginBottom: 16 }}>
            On en parle ?
          </h2>
          <p style={{ marginBottom: 12, fontSize: 17 }}>
            Appel decouverte de 30 minutes, gratuit, sans engagement.
          </p>
          <p style={{ marginBottom: 36, fontSize: 15, color: "var(--text-dim)" }}>
            Je regarde ton site en live, j&apos;identifie tes opportunites, et je te dis honnetement
            si je peux t&apos;aider. Pas de pitch commercial, juste des faits.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="https://calendly.com/hello-thibautgallien/30min"
              className="btn-primary"
            >
              Reserver un appel decouverte
              <ArrowIcon />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Envoyer un message
            </Link>
          </div>
        </div>
      </section>

      {/* ── Responsive ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 960px) {
          .hero-layout {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .hero-photo {
            order: -1;
            max-width: 280px;
            margin: 0 auto;
          }
        }
        @media (min-width: 769px) {
          .service-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .who-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </>
  );
}

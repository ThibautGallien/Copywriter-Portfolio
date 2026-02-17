"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
          <div style={{ maxWidth: 720, animation: "fadeInUp 0.6s ease both" }}>
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
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--text-muted)",
                maxWidth: 560,
                marginBottom: 20,
              }}
            >
              Tu as un bon produit mais pas assez de trafic ? Je t&apos;aide a attirer des visiteurs qualifies
              grace au SEO, a les convertir avec l&apos;email marketing, et a piloter ta croissance avec la data.
            </p>
            <p
              style={{
                fontSize: 15,
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

          {/* Hero metrics — right side on desktop */}
          <div className="hero-metrics" style={{ marginTop: 64 }}>
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

      <div className="section-divider" />

      {/* ═══════ LE PROBLEME ═══════ */}
      <section ref={revealProblem} className="reveal" style={{ padding: "100px 0" }}>
        <div className="container-main">
          <span className="section-number">01. Le constat</span>
          <h2 style={{ marginBottom: 16, maxWidth: 600 }}>
            Tu perds des clients chaque jour
            <span className="gradient-text"> sans le savoir</span>
          </h2>
          <p style={{ maxWidth: 600, marginBottom: 48, fontSize: 16 }}>
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
              <div key={i} className="card" style={{ padding: 28 }}>
                <span
                  className="mono"
                  style={{
                    fontSize: 12,
                    color: "var(--accent-blue)",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: 14,
                  }}
                >
                  {item.icon}
                </span>
                <h4 style={{ marginBottom: 8, fontSize: 17 }}>{item.title}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
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
          <p style={{ maxWidth: 580, marginBottom: 56, fontSize: 16 }}>
            Chaque service repond a un probleme precis. Tu peux les prendre individuellement ou les combiner
            pour creer un systeme d&apos;acquisition complet.
          </p>

          {/* ── SERVICE 1 : SEO ── */}
          <div style={{ marginBottom: 64 }}>
            <div
              className="card"
              style={{
                padding: 36,
                borderColor: "rgba(59, 130, 246, 0.15)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }} className="service-detail-grid">
                <div>
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
                    Service principal — SEO
                  </span>
                  <h3 style={{ marginBottom: 12, fontSize: 22 }}>
                    Referencement naturel : etre trouve par ceux qui cherchent
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
                    Le SEO, c&apos;est faire en sorte que ton site apparaisse en haut de Google quand quelqu&apos;un
                    cherche ce que tu proposes. Pas de pub payante, pas de dependance — du trafic gratuit,
                    qualifie, qui arrive tous les jours.
                  </p>
                  <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 24, color: "var(--text-dim)" }}>
                    <strong style={{ color: "var(--text)" }}>Concretement :</strong> j&apos;audite ton site, je trouve les mots-cles sur
                    lesquels tu dois te positionner, j&apos;optimise tes pages et je cree du contenu qui attire du trafic.
                    Chaque mois, tu vois tes positions monter et ton trafic augmenter.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>Ce que tu recois :</p>
                    {[
                      "Audit technique complet de ton site (indexation, vitesse, architecture)",
                      "Recherche de mots-cles : les requetes que tes clients tapent sur Google",
                      "Optimisation de tes pages existantes pour qu'elles rankent",
                      "Creation de contenu SEO (articles, pages) chaque mois",
                      "Rapport mensuel avec tes positions, ton trafic, tes leads",
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" style={{ marginTop: 3, flexShrink: 0 }}>
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                    <Link href="/services/seo-local" className="btn-primary" style={{ fontSize: 13 }}>
                      SEO Local — a partir de 349&euro;/mois
                    </Link>
                    <Link href="/services/seo-growth" className="btn-secondary" style={{ fontSize: 13 }}>
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
            <div className="card" style={{ padding: 32 }}>
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  marginBottom: 16,
                  display: "block",
                }}
              >
                Email Marketing
              </span>
              <h3 style={{ marginBottom: 12, fontSize: 19 }}>Transformer ta liste en revenus</h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 16 }}>
                Tu as des abonnes ou des contacts mais tu ne leur ecris pas (ou mal). L&apos;email marketing,
                c&apos;est le canal avec le meilleur ROI : pour chaque euro investi, il en rapporte 36 en moyenne.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 20, color: "var(--text-dim)" }}>
                <strong style={{ color: "var(--text)" }}>Concretement :</strong> je cree tes sequences automatisees
                (bienvenue, vente, relance), j&apos;ecris tes newsletters, je segmente ta liste pour
                envoyer le bon message a la bonne personne. Tu generes des ventes meme quand tu dors.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 24 }}>
                {[
                  "Sequences automatisees (welcome, vente, relance panier)",
                  "Newsletters regulieres qui engagent et convertissent",
                  "Segmentation de ta liste par comportement",
                  "A/B testing et optimisation continue",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" style={{ marginTop: 4, flexShrink: 0 }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-secondary" style={{ fontSize: 13 }}>
                En savoir plus
              </Link>
            </div>

            {/* Data & Analytics */}
            <div className="card" style={{ padding: 32 }}>
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  marginBottom: 16,
                  display: "block",
                }}
              >
                Data &amp; Analytics
              </span>
              <h3 style={{ marginBottom: 12, fontSize: 19 }}>Prendre des decisions basees sur les chiffres</h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 16 }}>
                Tu investis dans du marketing mais tu ne sais pas ce qui marche vraiment ?
                La data te donne les reponses. Quel canal rapporte le plus, quel contenu convertit,
                ou tu perds tes visiteurs.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 20, color: "var(--text-dim)" }}>
                <strong style={{ color: "var(--text)" }}>Concretement :</strong> j&apos;installe un tracking propre
                sur ton site, je cree des dashboards clairs, et je t&apos;explique ou investir ton budget
                pour un maximum de retour. Fini les decisions au feeling.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 24 }}>
                {[
                  "Tracking GA4 / GTM configure proprement",
                  "Dashboards visuels avec tes KPIs",
                  "Attribution : savoir d'ou viennent tes ventes",
                  "Audit de funnel : ou tu perds tes visiteurs",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" style={{ marginTop: 4, flexShrink: 0 }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn-secondary" style={{ fontSize: 13 }}>
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ PROCESS ═══════ */}
      <section ref={revealProcess} className="reveal" style={{ padding: "100px 0" }}>
        <div className="container-main">
          <span className="section-number">03. Comment ca se passe</span>
          <h2 style={{ marginBottom: 16 }}>
            Un process simple et
            <span className="gradient-text"> transparent</span>
          </h2>
          <p style={{ maxWidth: 540, marginBottom: 48, fontSize: 16 }}>
            Pas de bullshit, pas de jargon. Voici exactement ce qui se passe quand on travaille ensemble.
          </p>

          <div className="timeline">
            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
                01
              </span>
              <h4 style={{ marginBottom: 8 }}>Appel decouverte (30 min)</h4>
              <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                On parle de ton business, tes objectifs, tes blocages. Je regarde ton site en live et
                j&apos;identifie les 3 premiers quick wins. Gratuit, sans engagement.
              </p>
            </div>

            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
                02
              </span>
              <h4 style={{ marginBottom: 8 }}>Audit &amp; plan d&apos;action</h4>
              <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                Analyse complete de ta situation. Tu recois un document avec les problemes identifies,
                les opportunites, et un plan d&apos;action priorise par impact. Tu sais exactement quoi faire.
              </p>
            </div>

            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
                03
              </span>
              <h4 style={{ marginBottom: 8 }}>Execution &amp; implementation</h4>
              <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                C&apos;est moi qui fais le boulot. Optimisations techniques, creation de contenu, mise en place
                des sequences email, tracking. Tu valides, je deploy.
              </p>
            </div>

            <div className="timeline-step">
              <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
                04
              </span>
              <h4 style={{ marginBottom: 8 }}>Suivi &amp; optimisation</h4>
              <p style={{ fontSize: 14, lineHeight: 1.6 }}>
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
          <p style={{ maxWidth: 520, marginBottom: 48, fontSize: 16 }}>
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
            <div className="card" style={{ padding: 28 }}>
              <h4 style={{ marginBottom: 20, fontSize: 16, color: "#28C840" }}>Ca match</h4>
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
                    <span style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Red flags */}
            <div className="card" style={{ padding: 28 }}>
              <h4 style={{ marginBottom: 20, fontSize: 16, color: "#FF5F57" }}>Ca ne match pas</h4>
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
                    <span style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ FINAL CTA ═══════ */}
      <section ref={revealCta} className="reveal" style={{ padding: "100px 0", textAlign: "center" }}>
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

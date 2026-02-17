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

export default function SeoLocalPage() {
  const revealWhy = useReveal();
  const revealWhat = useReveal();
  const revealHow = useReveal();
  const revealWho = useReveal();
  const revealFaq = useReveal();

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="dot-grid" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container-main">
          <Link
            href="/services"
            style={{ fontSize: 13, color: "var(--text-dim)", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 32, transition: "color 0.2s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Retour aux services
          </Link>

          <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--accent-blue)", textTransform: "uppercase", marginBottom: 16, display: "block" }}>
            SEO Local — 349&euro;/mois
          </span>

          <h1 style={{ marginBottom: 16 }}>
            Deviens le numero 1 sur Google
            <span className="gradient-text"> dans ta ville</span>
          </h1>
          <p style={{ maxWidth: 580, fontSize: 17, lineHeight: 1.7, marginBottom: 16 }}>
            Quand un client potentiel tape &quot;plombier Lyon&quot;, &quot;restaurant italien Bordeaux&quot; ou &quot;coach sportif Paris&quot;
            sur Google, est-ce que ton entreprise apparait ? Si tu n&apos;es pas dans les 3 premiers resultats du pack local,
            tu perds des clients tous les jours au profit de tes concurrents.
          </p>
          <p style={{ maxWidth: 560, fontSize: 15, lineHeight: 1.7, color: "var(--text-dim)", marginBottom: 36 }}>
            Le SEO local, c&apos;est l&apos;ensemble des techniques pour faire apparaitre ton business en haut des resultats
            Google quand quelqu&apos;un cherche un service dans ta zone geographique. C&apos;est le levier le plus rentable
            pour les business physiques ou locaux.
          </p>

          <div style={{ display: "flex", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div className="card" style={{ padding: "24px 32px" }}>
              <span className="price-tag gradient-text">349&euro;</span>
              <span className="price-period">/mois</span>
              <span style={{ display: "block", fontSize: 13, color: "var(--text-dim)", marginTop: 4 }}>
                Sans engagement — tu peux arreter quand tu veux
              </span>
            </div>
            <Link href="https://calendly.com/hello-thibautgallien/30min" className="btn-primary" style={{ marginTop: 8 }}>
              Reserver un appel decouverte
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider-accent" />

      {/* ═══════ POURQUOI LE SEO LOCAL ═══════ */}
      <section ref={revealWhy} className="reveal section-alt" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">01. Pourquoi c&apos;est important</span>
          <h2 style={{ marginBottom: 16 }}>
            46% des recherches Google ont une
            <span className="gradient-text"> intention locale</span>
          </h2>
          <p style={{ maxWidth: 600, fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            Presque la moitie des gens qui utilisent Google cherchent quelque chose pres de chez eux.
            Et 76% de ces personnes visitent un commerce dans les 24h. Si tu n&apos;apparais pas,
            c&apos;est ton concurrent qui recupere le client.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
            {[
              { stat: "46%", label: "des recherches Google sont locales" },
              { stat: "76%", label: "visitent un commerce dans les 24h" },
              { stat: "28%", label: "de ces recherches menent a un achat" },
              { stat: "0€", label: "de cout par clic (contrairement aux pubs)" },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: 24, textAlign: "center" }}>
                <div className="stat-value" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: 6 }}>{item.stat}</div>
                <p style={{ fontSize: 13 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ CE QUE TU RECOIS ═══════ */}
      <section ref={revealWhat} className="reveal" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">02. Ce que tu recois chaque mois</span>
          <h2 style={{ marginBottom: 16 }}>
            Un accompagnement complet,
            <span className="gradient-text"> pas juste des rapports</span>
          </h2>
          <p style={{ maxWidth: 600, fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            Je ne me contente pas de te donner des recommandations. Je fais le travail pour toi,
            je mesure les resultats, et je t&apos;explique clairement ce qui avance.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: 700 }}>
            {[
              {
                title: "Optimisation Google Business Profile",
                desc: "Ta fiche Google est souvent le premier contact qu'un client a avec ton business. Je l'optimise a fond : description, categories, photos, posts reguliers, attributs. L'objectif : apparaitre dans le pack local (les 3 premiers resultats avec la carte).",
              },
              {
                title: "Citations locales & annuaires",
                desc: "Ton business doit etre present sur les bons annuaires avec des informations coherentes (nom, adresse, telephone). Je cree et optimise tes fiches sur les annuaires pertinents pour renforcer ta credibilite aux yeux de Google.",
              },
              {
                title: "Contenu geolocalise",
                desc: "Je cree des pages et du contenu optimise pour tes mots-cles locaux. Par exemple : \"plombier urgence Lyon 3\", \"restaurant italien Bordeaux centre\". Chaque page cible une requete specifique que tes clients tapent.",
              },
              {
                title: "Strategie d'avis Google",
                desc: "Les avis sont un des facteurs les plus importants en SEO local. Je t'aide a obtenir plus d'avis, je reponds aux avis existants de facon strategique, et je mets en place un systeme pour en generer regulierement.",
              },
              {
                title: "Suivi & rapport mensuel",
                desc: "Chaque mois, tu recois un rapport clair : tes positions sur Google, l'evolution de ton trafic, le nombre d'appels et de demandes de direction recus via ta fiche. On fait un point ensemble pour ajuster la strategie.",
              },
            ].map((item, i) => (
              <div key={i} style={{ padding: "24px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span className="mono" style={{ fontSize: 12, color: "var(--accent-blue)", letterSpacing: "0.1em", marginTop: 2, flexShrink: 0 }}>0{i + 1}</span>
                  <div>
                    <h4 style={{ marginBottom: 6, fontSize: 16 }}>{item.title}</h4>
                    <p style={{ fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ POUR QUI ═══════ */}
      <section ref={revealWho} className="reveal section-alt" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">03. Pour qui</span>
          <h2 style={{ marginBottom: 16 }}>
            C&apos;est fait pour toi si...
          </h2>
          <p style={{ maxWidth: 560, fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
            Le SEO local fonctionne pour tout business qui a une zone de chalandise, c&apos;est-a-dire
            des clients qui te cherchent dans une ville ou une region specifique.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {[
              "Restaurants, bars, cafes",
              "Artisans (plombier, electricien, serrurier...)",
              "Cabinets medicaux et para-medicaux",
              "Agences immobilieres",
              "Coachs et consultants locaux",
              "Commerces de proximite",
              "Salons de coiffure, esthetique, bien-etre",
              "Garages et concessionnaires auto",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", padding: "10px 0" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" style={{ flexShrink: 0 }}>
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ FAQ ═══════ */}
      <section ref={revealFaq} className="reveal" style={{ padding: "80px 0" }}>
        <div className="container-main" style={{ maxWidth: 700 }}>
          <span className="section-number">04. Questions frequentes</span>
          <h2 style={{ marginBottom: 48 }}>FAQ</h2>

          {[
            {
              q: "Combien de temps avant de voir des resultats ?",
              a: "Les premieres ameliorations sur Google Business Profile sont visibles en 2-4 semaines (meilleur classement dans le pack local, plus d'affichages). Pour le positionnement organique, compte 2-3 mois pour des resultats significatifs. Le SEO est un investissement cumulatif : chaque mois renforce le precedent.",
            },
            {
              q: "Pourquoi 349€/mois ? C'est quoi le ROI ?",
              a: "Un seul nouveau client par mois suffit generalement a rentabiliser l'investissement. Si ton panier moyen est de 200€+, tu es rentable des le premier client ramene par Google. Et contrairement a la pub, le trafic SEO ne s'arrete pas quand tu arrete de payer — il continue a fonctionner.",
            },
            {
              q: "Je dois m'engager combien de temps ?",
              a: "Aucun engagement. Tu peux arreter quand tu veux. Cela dit, les clients qui restent 6+ mois voient les meilleurs resultats car le SEO est cumulatif. Je te recommande de t'engager au moins 3 mois pour juger des resultats.",
            },
            {
              q: "Tu t'occupes de tout ou je dois faire des choses ?",
              a: "Je fais 95% du boulot. Je te demanderai de valider du contenu (tu connais ton metier mieux que moi) et de m'envoyer des photos de temps en temps. Compte 30 minutes max de ton temps par mois.",
            },
            {
              q: "C'est quoi la difference avec Google Ads ?",
              a: "Google Ads, tu paies pour chaque clic. Le jour ou tu arretes de payer, tu disparais. Le SEO construit ta visibilite durablement : une fois positionne, le trafic arrive gratuitement. L'ideal est de combiner les deux, mais le SEO est l'investissement le plus rentable a moyen terme.",
            },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "24px 0" }}>
              <h4 style={{ marginBottom: 8, fontSize: 16 }}>{faq.q}</h4>
              <p style={{ fontSize: 15, lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider-accent" />

      {/* ═══════ CTA ═══════ */}
      <section className="section-cta" style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container-main" style={{ maxWidth: 600 }}>
          <h2 style={{ marginBottom: 16 }}>
            Pret a dominer le
            <span className="gradient-text"> pack local</span> ?
          </h2>
          <p style={{ marginBottom: 12, fontSize: 17 }}>
            30 minutes pour analyser ta situation locale.
          </p>
          <p style={{ marginBottom: 32, fontSize: 15, color: "var(--text-dim)" }}>
            Je regarde ta fiche Google, tes positions actuelles, et je te dis honnetement
            ce qui est possible pour ton business. Gratuit, sans engagement.
          </p>
          <Link href="https://calendly.com/hello-thibautgallien/30min" className="btn-primary">
            Reserver un appel decouverte
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}

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

export default function SeoGrowthPage() {
  const revealWhy = useReveal();
  const revealFormulas = useReveal();
  const revealProcess = useReveal();
  const revealFaq = useReveal();

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="dot-grid" style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container-main">
          <Link
            href="/services"
            style={{ fontSize: 15, color: "var(--text-dim)", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 32, transition: "color 0.2s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Retour aux services
          </Link>

          <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--accent-violet)", textTransform: "uppercase", marginBottom: 16, display: "block" }}>
            SEO Growth
          </span>

          <h1 style={{ marginBottom: 16 }}>
            Fais de Google ton premier
            <span className="gradient-text"> canal d&apos;acquisition</span>
          </h1>
          <p style={{ maxWidth: 600, fontSize: 19, lineHeight: 1.7, marginBottom: 16 }}>
            Tu veux que des centaines (ou des milliers) de personnes decouvrent ton business chaque mois
            via Google, sans payer de pub ? C&apos;est exactement ce que fait le SEO Growth :
            une strategie complete pour positionner ton site sur les requetes qui ramenent du business.
          </p>
          <p style={{ maxWidth: 560, fontSize: 17, lineHeight: 1.7, color: "var(--text-dim)", marginBottom: 36 }}>
            Contrairement au SEO local (qui cible une zone geographique), le SEO Growth attaque des requetes
            nationales ou thematiques : &quot;meilleur CRM pour freelances&quot;, &quot;comment creer une formation en ligne&quot;, etc.
            L&apos;objectif : devenir une reference dans ton domaine et generer du trafic qualifie en continu.
          </p>
        </div>
      </section>

      <div className="section-divider-accent" />

      {/* ═══════ POURQUOI LE SEO ═══════ */}
      <section ref={revealWhy} className="reveal section-alt" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">01. Pourquoi miser sur le SEO</span>
          <h2 style={{ marginBottom: 16 }}>
            Le canal le plus rentable sur le
            <span className="gradient-text"> long terme</span>
          </h2>
          <p style={{ maxWidth: 620, fontSize: 17, lineHeight: 1.7, marginBottom: 16 }}>
            La pub payante (Google Ads, Facebook Ads), tu paies a chaque clic. Le jour ou tu coupes le budget,
            le trafic tombe a zero. Le SEO fonctionne differemment : tu investis dans du contenu et de l&apos;optimisation
            qui continuent a generer du trafic pendant des mois, voire des annees.
          </p>
          <p style={{ maxWidth: 600, fontSize: 17, lineHeight: 1.7, marginBottom: 40, color: "var(--text-dim)" }}>
            Un article bien positionne peut t&apos;amener 500+ visiteurs par mois. Pendant 2 ans. Sans depenser un centime
            de plus. C&apos;est pour ca que les entreprises qui investissent en SEO ont un cout d&apos;acquisition client
            3 a 5 fois inferieur a celles qui dependent de la pub.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {[
              { title: "Trafic cumulatif", desc: "Chaque contenu publie s'ajoute aux precedents. Ton trafic croit de mois en mois, il ne repart pas de zero." },
              { title: "Cout d'acquisition faible", desc: "Une fois positionne, le trafic est gratuit. Pas de cout par clic, pas de budget pub a maintenir." },
              { title: "Leads ultra qualifies", desc: "Les gens qui te trouvent via Google cherchent activement ce que tu proposes. Ils sont deja dans une intention d'achat." },
            ].map((item, i) => (
              <div key={i} className="card card-accent-violet" style={{ padding: 24 }}>
                <h4 style={{ marginBottom: 8, fontSize: 17 }}>{item.title}</h4>
                <p style={{ fontSize: 16, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ 2 FORMULAS ═══════ */}
      <section ref={revealFormulas} className="reveal" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">02. Deux formules</span>
          <h2 style={{ marginBottom: 16 }}>
            Choisis la formule adaptee a
            <span className="gradient-text"> ton besoin</span>
          </h2>
          <p style={{ maxWidth: 560, marginBottom: 48, fontSize: 17, lineHeight: 1.7 }}>
            Tu veux juste savoir ou tu en es et quoi faire ? Prends l&apos;audit.
            Tu veux que je m&apos;occupe de tout de A a Z ? Prends l&apos;accompagnement.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
            {/* Audit */}
            <div className="card card-accent-blue" style={{ padding: 32 }}>
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--accent-blue)", textTransform: "uppercase", marginBottom: 20, display: "block" }}>
                Formule 1
              </span>
              <h3 style={{ marginBottom: 8 }}>Audit SEO Complet</h3>
              <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 16 }}>
                Un diagnostic exhaustif de ton site avec un plan d&apos;action priorise.
                Tu sais exactement quoi faire, dans quel ordre, et pourquoi.
                Ideal si tu as une equipe pour executer ou si tu veux valider une strategie.
              </p>

              <div style={{ marginBottom: 24 }}>
                <span className="price-tag gradient-text">897&euro;</span>
                <span className="price-period"> — prestation one-shot</span>
              </div>

              <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 10 }}>Tu recois :</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                {[
                  { title: "Audit technique", desc: "Core Web Vitals, indexation, crawl, architecture du site" },
                  { title: "Recherche de mots-cles", desc: "Les requetes que tes clients tapent + volumes + difficulte + opportunites" },
                  { title: "Analyse concurrentielle", desc: "Ce que font tes concurrents, ou ils sont forts, ou tu peux les depasser" },
                  { title: "Audit de contenu", desc: "Ce qui marche deja, ce qu'il faut optimiser, ce qu'il faut creer" },
                  { title: "Plan d'action priorise", desc: "Document detaille avec les actions classees par impact et effort" },
                  { title: "Call de restitution (1h)", desc: "Je te presente les resultats et reponds a toutes tes questions" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" style={{ marginTop: 3, flexShrink: 0 }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <div>
                      <span style={{ fontSize: 16, color: "var(--text)", fontWeight: 500 }}>{item.title}</span>
                      <span style={{ fontSize: 15, color: "var(--text-dim)" }}> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="https://calendly.com/hello-thibautgallien/30min" className="btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
                Demander un audit
              </Link>
            </div>

            {/* Accompagnement */}
            <div className="card card-accent-violet" style={{ padding: 32, borderColor: "rgba(139, 92, 246, 0.2)" }}>
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--accent-violet)", textTransform: "uppercase", marginBottom: 20, display: "block" }}>
                Formule 2 — Recommandee
              </span>
              <h3 style={{ marginBottom: 8 }}>Accompagnement SEO Mensuel</h3>
              <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 16 }}>
                Je prends en charge ta strategie SEO de A a Z. Tu n&apos;as rien a faire sauf valider
                le contenu et regarder ton trafic monter. Ideal si tu veux deleguer completement
                et te concentrer sur ton coeur de metier.
              </p>

              <div style={{ marginBottom: 24 }}>
                <span className="price-tag gradient-text">1200&euro;</span>
                <span className="price-period">/mois</span>
              </div>

              <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", marginBottom: 10 }}>Tout ce qui est dans l&apos;audit, plus :</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                {[
                  { title: "Implementation technique", desc: "Je corrige les problemes identifies et optimise en continu" },
                  { title: "4 contenus SEO / mois", desc: "Articles, pages, guides — du contenu optimise qui attire du trafic" },
                  { title: "Link building", desc: "Acquisition de liens de qualite pour renforcer l'autorite de ton site" },
                  { title: "Suivi des positions", desc: "Monitoring quotidien de tes mots-cles cibles" },
                  { title: "Rapport + call mensuel", desc: "Un point complet chaque mois pour ajuster la strategie" },
                  { title: "Dashboard temps reel", desc: "Acces a un tableau de bord avec tes metrics a tout moment" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-violet)" strokeWidth="2.5" style={{ marginTop: 3, flexShrink: 0 }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <div>
                      <span style={{ fontSize: 16, color: "var(--text)", fontWeight: 500 }}>{item.title}</span>
                      <span style={{ fontSize: 15, color: "var(--text-dim)" }}> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="https://calendly.com/hello-thibautgallien/30min" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Reserver un appel decouverte
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ PROCESS ═══════ */}
      <section ref={revealProcess} className="reveal section-alt" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <span className="section-number">03. Comment ca se passe concretement</span>
          <h2 style={{ marginBottom: 48 }}>
            Le process, etape par
            <span className="gradient-text"> etape</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: 700 }}>
            {[
              {
                step: "01",
                title: "Appel decouverte (gratuit)",
                desc: "On parle de ton business, tes objectifs, ton marche. Je regarde rapidement ton site et tes positions actuelles. Si le SEO est le bon levier pour toi, on passe a la suite. Sinon, je te le dis honnêtement.",
              },
              {
                step: "02",
                title: "Audit complet (semaine 1-2)",
                desc: "Analyse technique de ton site, recherche de mots-cles, etude de ta concurrence, audit de contenu. Tu recois un document detaille avec tout ce que j'ai trouve et un plan d'action priorise.",
              },
              {
                step: "03",
                title: "Implementation (mois 1-2)",
                desc: "Je corrige les problemes techniques, j'optimise tes pages existantes, et je commence a creer du contenu. Les premieres ameliorations sont souvent visibles des ce stade.",
              },
              {
                step: "04",
                title: "Croissance (mois 3+)",
                desc: "Le moteur tourne. Chaque mois : nouveau contenu, nouveaux liens, optimisations. Ton trafic croit progressivement. On ajuste la strategie en fonction des resultats — on pousse ce qui marche, on arrete ce qui ne marche pas.",
              },
            ].map((item, i) => (
              <div key={i} style={{ padding: "24px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span className="mono" style={{ fontSize: 15, color: "var(--accent-violet)", letterSpacing: "0.1em", marginTop: 2, flexShrink: 0 }}>{item.step}</span>
                  <div>
                    <h4 style={{ marginBottom: 6, fontSize: 16 }}>{item.title}</h4>
                    <p style={{ fontSize: 16, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════ FAQ ═══════ */}
      <section ref={revealFaq} className="reveal" style={{ padding: "80px 0" }}>
        <div className="container-main" style={{ maxWidth: 700 }}>
          <span className="section-number">04. FAQ</span>
          <h2 style={{ marginBottom: 48 }}>Questions frequentes</h2>

          {[
            {
              q: "Combien de temps pour voir des resultats ?",
              a: "Les premieres ameliorations techniques sont visibles en quelques semaines. Pour les gains de positions et de trafic, compte 3-6 mois selon la concurrence de ton marche. Le SEO est un marathon, pas un sprint — mais les resultats sont durables.",
            },
            {
              q: "C'est quoi la difference avec le SEO local ?",
              a: "Le SEO local cible des requetes geographiques (\"plombier Paris\", \"restaurant Lyon\"). Le SEO Growth cible des requetes thematiques nationales (\"comment creer un funnel de vente\", \"meilleur outil de facturation\"). Si tes clients sont partout en France, c'est le Growth qu'il te faut.",
            },
            {
              q: "Tu ecris le contenu toi-meme ?",
              a: "Oui, je gere la strategie editoriale et la redaction. Chaque article est optimise pour le SEO et ecrit pour convertir, pas juste pour rankier. Tu valides avant publication — tu connais ton sujet mieux que moi, donc ton input est precieux.",
            },
            {
              q: "Est-ce que 1200€/mois c'est rentable ?",
              a: "Fais le calcul : si tu generes 1000 visiteurs qualifies par mois grace au SEO, et que ton taux de conversion est de 2%, ca fait 20 leads. Avec un panier moyen de 200€, ca fait 4000€ de CA genere. Et ce trafic continue a arriver meme apres la prestation.",
            },
            {
              q: "Je peux commencer par l'audit et passer a l'accompagnement apres ?",
              a: "Absolument. C'est meme ce que je recommande si tu hesites. L'audit te donne une vision claire de ta situation et de ton potentiel. Si les opportunites sont la, on passe a l'accompagnement.",
            },
          ].map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "24px 0" }}>
              <h4 style={{ marginBottom: 8, fontSize: 18 }}>{faq.q}</h4>
              <p style={{ fontSize: 16, lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider-accent" />

      {/* ═══════ CTA ═══════ */}
      <section className="section-cta" style={{ padding: "80px 0", textAlign: "center" }}>
        <div className="container-main" style={{ maxWidth: 600 }}>
          <h2 style={{ marginBottom: 16 }}>
            Pret a faire de Google ton meilleur
            <span className="gradient-text"> commercial</span> ?
          </h2>
          <p style={{ marginBottom: 12, fontSize: 17 }}>
            On analyse ton potentiel SEO ensemble.
          </p>
          <p style={{ marginBottom: 32, fontSize: 17, color: "var(--text-dim)" }}>
            30 minutes pour voir ou tu en es, quelles sont tes opportunites, et combien de trafic
            tu pourrais generer. Gratuit, sans engagement.
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

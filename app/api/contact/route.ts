import { NextRequest, NextResponse } from "next/server";

// Force dynamic rendering for this API route
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      company,
      businessType,
      caMonthly,
      trafficMonthly,
      problem, // Renommé de 'message' à 'problem'
      budget,
      analyticsAccess,
      newsletter,
    } = body;

    // Validation basique (on utilise 'problem' au lieu de 'message')
    if (
      !name ||
      !email ||
      !problem ||
      !businessType ||
      !caMonthly ||
      !trafficMonthly ||
      !budget ||
      !analyticsAccess
    ) {
      return NextResponse.json(
        {
          error:
            "Tous les champs obligatoires du formulaire de contact sont requis.",
        },
        { status: 400 }
      );
    }

    // Construction du message pour Telegram avec tous les détails
    const telegramMessage = `
🔥 NOUVEAU BRIEF DE CONTACT 🔥

👤 **Nom/Prénom :** ${name}
📧 **Email :** ${email}
${company ? `🏢 **Entreprise/Projet :** ${company}` : ""}
---
📈 **INFO BUSINESS**
⚙️ **Type de Business :** ${businessType}
💶 **CA Mensuel Actuel :** ${caMonthly}
📊 **Trafic Mensuel :** ${trafficMonthly}
🔗 **Accès Analytics :** ${analyticsAccess}
---
🎯 **LA PROBLÉMATIQUE**
${problem}
---
💰 **BUDGET & NEWSLETTER**
💸 **Budget Envisagé :** ${budget}
📧 **Newsletter :** ${newsletter ? "Oui, inscrit" : "Non, pas inscrit"}

---
⏰ **Reçu le :** ${new Date().toLocaleString("fr-FR")}
    `;

    // Si les variables Telegram ne sont pas configurées, on log juste
    if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
      console.log("📝 Message reçu (Telegram non configuré):", telegramMessage);
      return NextResponse.json({
        success: true,
        message: "Message reçu (Telegram non configuré)",
      });
    }

    // Envoi vers Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      console.error("Erreur Telegram:", errorText);
      // On continue quand même pour ne pas bloquer l'utilisateur
      console.log("📝 Message reçu (erreur Telegram):", telegramMessage);
      return NextResponse.json({
        success: true,
        message: "Message reçu (erreur Telegram)",
      });
    }

    console.log("✅ Message envoyé vers Telegram avec succès");
    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès",
    });
  } catch (error) {
    console.error("Erreur API contact:", error);
    return NextResponse.json(
      { error: "Erreur serveur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}

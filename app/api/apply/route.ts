import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // LOG 1: Voir ce qui est reçu
    console.log("📦 Body reçu:", body);

    const {
      firstName,
      email,
      telegram,
      websiteUrl,
      monthlyRevenue,
      monthlyVisitors,
      problemArea,
      videoTestimonyCommitment,
    } = body;

    // LOG 2: Vérifier chaque champ obligatoire
    console.log("✅ Validation des champs:");
    console.log(
      "- firstName:",
      firstName,
      "->",
      !firstName ? "❌ MANQUANT" : "✅"
    );
    console.log("- email:", email, "->", !email ? "❌ MANQUANT" : "✅");
    console.log(
      "- websiteUrl:",
      websiteUrl,
      "->",
      !websiteUrl ? "❌ MANQUANT" : "✅"
    );
    console.log(
      "- monthlyRevenue:",
      monthlyRevenue,
      "->",
      !monthlyRevenue ? "❌ MANQUANT" : "✅"
    );
    console.log(
      "- monthlyVisitors:",
      monthlyVisitors,
      "->",
      !monthlyVisitors ? "❌ MANQUANT" : "✅"
    );
    console.log(
      "- problemArea:",
      problemArea,
      "->",
      !problemArea ? "❌ MANQUANT" : "✅"
    );
    console.log(
      "- videoTestimonyCommitment:",
      videoTestimonyCommitment,
      "->",
      !videoTestimonyCommitment ? "❌ MANQUANT" : "✅"
    );

    // Validation
    if (
      !firstName ||
      !email ||
      !websiteUrl ||
      !monthlyRevenue ||
      !monthlyVisitors ||
      !problemArea ||
      !videoTestimonyCommitment
    ) {
      console.error("❌ Validation échouée - champs manquants");
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    console.log("✅ Validation réussie, préparation du message Telegram");

    // Formater le message pour Telegram
    const message = `
🚀 <b>NOUVELLE CANDIDATURE</b>

👤 <b>Contact</b>
- Prénom : ${firstName}
- Email : ${email}
- Telegram : ${telegram || "Non fourni"}
- Site : ${websiteUrl}

💰 <b>Business</b>
- CA mensuel : ${monthlyRevenue}
- Visiteurs/mois : ${monthlyVisitors}

⚠️ <b>Problème principal</b>
${problemArea}

🎥 <b>Engagement témoignage vidéo</b>
${videoTestimonyCommitment === "oui" ? "✅ OUI" : "❌ NON"}
    `.trim();

    console.log("📤 Envoi vers Telegram...");

    // Envoyer vers Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      console.error("❌ Erreur Telegram:", errorText);
      throw new Error("Erreur lors de l'envoi vers Telegram");
    }

    console.log("✅ Message envoyé sur Telegram avec succès");

    return NextResponse.json(
      { message: "Candidature envoyée avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Erreur lors du traitement de la candidature:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de la candidature" },
      { status: 500 }
    );
  }
}

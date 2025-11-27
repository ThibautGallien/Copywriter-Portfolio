import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      firstName,
      email,
      telegram,
      websiteUrl,
      monthlyRevenue,
      monthlyVisitors,
      businessType,
      currentFunnel,
      problemArea,
      whyApplying,
    } = body;

    // Validation
    if (
      !firstName ||
      !email ||
      !websiteUrl ||
      !monthlyRevenue ||
      !monthlyVisitors ||
      !businessType ||
      !currentFunnel ||
      !problemArea ||
      !whyApplying
    ) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

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
- Type : ${businessType}

🔍 <b>Funnel actuel</b>
${currentFunnel}

⚠️ <b>Problème perçu</b>
${problemArea}

💬 <b>Pourquoi il postule</b>
${whyApplying}
    `.trim();

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
      throw new Error("Erreur lors de l'envoi vers Telegram");
    }

    return NextResponse.json(
      { message: "Candidature envoyée avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors du traitement de la candidature:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de la candidature" },
      { status: 500 }
    );
  }
}

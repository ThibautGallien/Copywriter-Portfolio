import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, leadMagnet, source } = body;

    // Validation
    if (!email || !leadMagnet) {
      return NextResponse.json(
        { error: "Email et lead magnet requis" },
        { status: 400 }
      );
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    // TODO: Intégrer avec ton service d'email
    // Options possibles :
    // 1. SendGrid
    // 2. Mailchimp
    // 3. ConvertKit
    // 4. Brevo (ex-Sendinblue)
    // 5. Resend

    // Pour l'instant, log en console (remplacer par vraie intégration)
    console.log("📧 Nouveau lead magnet:", {
      email,
      leadMagnet,
      source,
      timestamp: new Date().toISOString(),
    });

    // Exemple d'intégration SendGrid (décommenter et configurer)
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: email,
      from: 'contact@thibautgallien.com',
      subject: `Voici ton ${leadMagnet}`,
      html: `
        <p>Salut,</p>
        <p>Comme promis, voici ton lead magnet : <strong>${leadMagnet}</strong></p>
        <p>Tu peux le télécharger ici : [LIEN]</p>
        <p>Thibaut</p>
      `,
    };

    await sgMail.send(msg);
    */

    // Exemple d'intégration ConvertKit (décommenter et configurer)
    /*
    const response = await fetch('https://api.convertkit.com/v3/forms/[FORM_ID]/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: process.env.CONVERTKIT_API_KEY,
        email: email,
        tags: [leadMagnet, source],
      }),
    });
    */

    // Réponse succès
    return NextResponse.json(
      {
        success: true,
        message: "Lead magnet envoyé avec succès"
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Erreur API lead-magnet:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

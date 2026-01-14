import { NextRequest, NextResponse } from "next/server";
import { validateAntiBot, getClientIp } from "@/lib/anti-bot";

export const dynamic = "force-dynamic";

/**
 * Gère l'inscription à la newsletter via l'API Brevo (Sendinblue).
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, _honeypot, _timestamp } = body;

    // Protection anti-bot
    const clientIp = getClientIp(request);
    const antiBotCheck = validateAntiBot(_honeypot, _timestamp, clientIp);

    if (!antiBotCheck.valid) {
      return NextResponse.json(
        { error: antiBotCheck.error },
        { status: 429 }
      );
    }

    // 1. Validation basique
    if (!email) {
      return NextResponse.json({ error: "Email requis" }, { status: 400 });
    }

    // 2. Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    // 3. Vérification de la clé API Brevo
    if (!process.env.BREVO_API_KEY) {
      console.error("Clé API Brevo manquante");
      return NextResponse.json(
        { error: "Configuration Brevo manquante" },
        { status: 500 }
      );
    }

    // 4. Appel à l'API Brevo pour ajouter le contact
    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          FIRSTNAME: name || "",
        },
        listIds: [parseInt(process.env.BREVO_NEWSLETTER_LIST_ID || "3")],
        updateEnabled: true,
      }),
    });

    if (brevoResponse.ok) {
      console.log("✅ Contact ajouté à Brevo avec succès");
      return NextResponse.json({
        success: true,
        message: "Inscription réussie !",
      });
    } else {
      const errorData = await brevoResponse.json();
      console.error("❌ Erreur Brevo:", errorData);

      // 5. Gestion du cas 'déjà inscrit' (Brevo renvoie une erreur 'duplicate_parameter')
      if (errorData.code === "duplicate_parameter") {
        return NextResponse.json({
          success: true,
          message: "Vous êtes déjà inscrit !",
        });
      }

      throw new Error(`Erreur lors de l'ajout à Brevo: ${errorData.message}`);
    }
  } catch (error) {
    console.error("Erreur API newsletter:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'inscription à la newsletter" },
      { status: 500 }
    );
  }
}
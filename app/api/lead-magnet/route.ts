import { NextRequest, NextResponse } from "next/server";
import { validateAntiBot, getClientIp } from "@/lib/anti-bot";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, leadMagnet, source, name, _honeypot, _timestamp } = body;

    // Protection anti-bot
    const clientIp = getClientIp(request);
    const antiBotCheck = validateAntiBot(_honeypot, _timestamp, clientIp);

    if (!antiBotCheck.valid) {
      return NextResponse.json(
        { error: antiBotCheck.error },
        { status: 429 }
      );
    }

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

    // Vérification de la clé API Brevo
    if (!process.env.BREVO_API_KEY) {
      console.error("Clé API Brevo manquante");
      return NextResponse.json(
        { error: "Configuration Brevo manquante" },
        { status: 500 }
      );
    }

    // Appel à l'API Brevo pour ajouter le contact et envoyer l'email
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
          LEAD_MAGNET: leadMagnet,
          SOURCE: source || "website",
        },
        listIds: [parseInt(process.env.BREVO_LEAD_MAGNET_LIST_ID || "4")],
        updateEnabled: true,
      }),
    });

    if (brevoResponse.ok || brevoResponse.status === 400) {
      const errorData = brevoResponse.ok ? null : await brevoResponse.json();

      // Si le contact existe déjà, ce n'est pas grave
      if (errorData?.code === "duplicate_parameter") {
        console.log("Contact déjà existant, mise à jour effectuée");
      }

      // Envoyer l'email transactionnel via Brevo
      const emailResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: {
            name: "Thibaut Gallien",
            email: process.env.BREVO_SENDER_EMAIL || "hello@thibautgallien.com",
          },
          to: [{ email: email, name: name || "" }],
          templateId: parseInt(process.env.BREVO_LEAD_MAGNET_TEMPLATE_ID || "1"),
          params: {
            FIRSTNAME: name || "là",
            LEAD_MAGNET: leadMagnet,
          },
        }),
      });

      if (!emailResponse.ok) {
        console.error("Erreur envoi email Brevo:", await emailResponse.text());
      }

      console.log("✅ Lead magnet envoyé avec succès");
      return NextResponse.json({
        success: true,
        message: "Lead magnet envoyé avec succès",
      });
    } else {
      const errorData = await brevoResponse.json();
      console.error("❌ Erreur Brevo:", errorData);
      throw new Error(`Erreur lors de l'ajout à Brevo: ${errorData.message}`);
    }
  } catch (error) {
    console.error("Erreur API lead-magnet:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du lead magnet" },
      { status: 500 }
    );
  }
}

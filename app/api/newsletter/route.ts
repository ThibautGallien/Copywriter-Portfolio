import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    // Validation basique
    if (!email) {
      return NextResponse.json({ error: "Email requis" }, { status: 400 });
    }

    // Vérification de la clé API Brevo
    if (!process.env.BREVO_API_KEY) {
      console.error("Clé API Brevo manquante");
      return NextResponse.json(
        { error: "Configuration Brevo manquante" },
        { status: 500 }
      );
    }

    // Appel à l'API Brevo pour ajouter le contact
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
        listIds: [3], // ID de ta liste (tu peux le modifier)
        updateEnabled: true, // Met à jour si le contact existe déjà
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

      // Si le contact existe déjà, on considère que c'est un succès
      if (errorData.code === "duplicate_parameter") {
        return NextResponse.json({
          success: true,
          message: "Vous êtes déjà inscrit !",
        });
      }

      throw new Error("Erreur lors de l'ajout à Brevo");
    }
  } catch (error) {
    console.error("Erreur API newsletter:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'inscription à la newsletter" },
      { status: 500 }
    );
  }
}

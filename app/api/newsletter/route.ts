import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Gère l'inscription à la newsletter via l'API Brevo (Sendinblue).
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    // 1. Validation basique
    if (!email) {
      return NextResponse.json({ error: "Email requis" }, { status: 400 });
    }

    // 2. Vérification de la clé API Brevo
    if (!process.env.BREVO_API_KEY) {
      console.error("Clé API Brevo manquante");
      return NextResponse.json(
        { error: "Configuration Brevo manquante" },
        { status: 500 }
      );
    }

    // 3. Appel à l'API Brevo pour ajouter le contact
    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // IMPORTANT: Utiliser la clé API Brevo (Sendinblue)
        "api-key": process.env.BREVO_API_KEY, 
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          FIRSTNAME: name || "", // Ajoute le prénom comme attribut
        },
        listIds: [3], // ID de ta liste Brevo (à modifier si besoin)
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

      // 4. Gestion du cas 'déjà inscrit' (Brevo renvoie une erreur 'duplicate_parameter')
      if (errorData.code === "duplicate_parameter") {
        return NextResponse.json({
          success: true,
          message: "Vous êtes déjà inscrit !",
        });
      }

      // Projeter une erreur pour le bloc catch
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
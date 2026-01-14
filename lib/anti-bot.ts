/**
 * Protection anti-bot pour les formulaires
 */

// Rate limiting simple en mémoire (pour production, utiliser Redis ou Vercel KV)
const ipRequestCounts = new Map<string, { count: number; resetTime: number }>();

/**
 * Vérifie si une IP dépasse le rate limit
 */
export function checkRateLimit(ip: string, maxRequests = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const record = ipRequestCounts.get(ip);

  if (!record || now > record.resetTime) {
    // Nouvelle fenêtre
    ipRequestCounts.set(ip, {
      count: 1,
      resetTime: now + windowMs,
    });
    return true;
  }

  if (record.count >= maxRequests) {
    return false; // Rate limit dépassé
  }

  record.count++;
  return true;
}

/**
 * Vérifie le champ honeypot (doit être vide)
 */
export function checkHoneypot(honeypotValue: string | undefined): boolean {
  return !honeypotValue || honeypotValue.trim() === "";
}

/**
 * Vérifie un timestamp de soumission (le formulaire doit prendre au moins X secondes)
 */
export function checkSubmissionTime(
  timestamp: string | undefined,
  minSeconds = 2
): boolean {
  if (!timestamp) return false;

  try {
    const submittedTime = parseInt(timestamp, 10);
    const now = Date.now();
    const elapsedSeconds = (now - submittedTime) / 1000;

    // Le formulaire doit prendre au moins minSeconds secondes
    return elapsedSeconds >= minSeconds;
  } catch {
    return false;
  }
}

/**
 * Extrait l'IP de la requête
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}

/**
 * Validation complète anti-bot
 */
export function validateAntiBot(
  honeypot: string | undefined,
  timestamp: string | undefined,
  ip: string
): { valid: boolean; error?: string } {
  // 1. Vérifier le honeypot
  if (!checkHoneypot(honeypot)) {
    console.warn(`🤖 Bot détecté (honeypot) - IP: ${ip}`);
    return { valid: false, error: "Validation échouée" };
  }

  // 2. Vérifier le temps de soumission
  if (!checkSubmissionTime(timestamp)) {
    console.warn(`🤖 Bot détecté (temps) - IP: ${ip}`);
    return { valid: false, error: "Validation échouée" };
  }

  // 3. Vérifier le rate limit
  if (!checkRateLimit(ip)) {
    console.warn(`⚠️ Rate limit dépassé - IP: ${ip}`);
    return { valid: false, error: "Trop de requêtes. Réessayez dans quelques instants." };
  }

  return { valid: true };
}

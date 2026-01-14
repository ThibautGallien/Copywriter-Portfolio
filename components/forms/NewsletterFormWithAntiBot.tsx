"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterFormWithAntiBot() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formTimestamp, setFormTimestamp] = useState<number>(0);

  // Enregistrer le timestamp quand le formulaire est affiché
  useEffect(() => {
    setFormTimestamp(Date.now());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          _honeypot: "", // Ce champ doit rester vide
          _timestamp: formTimestamp.toString(), // Timestamp pour vérifier le temps de soumission
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ " + data.message);
        setEmail("");
        setName("");
      } else {
        setMessage("❌ " + (data.error || "Une erreur est survenue"));
      }
    } catch (error) {
      setMessage("❌ Erreur lors de l'inscription");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Champ honeypot - invisible pour les humains, mais les bots vont le remplir */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        style={{
          position: "absolute",
          left: "-5000px",
          height: "0",
          width: "0",
          opacity: 0,
        }}
        aria-hidden="true"
      />

      <div className="flex flex-col gap-3">
        <Input
          type="text"
          placeholder="Ton prénom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full"
        />
        <Input
          type="email"
          placeholder="Ton email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full"
        />
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Inscription..." : "M'inscrire à la newsletter"}
        </Button>
      </div>

      {message && (
        <p
          className={`text-sm ${
            message.startsWith("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

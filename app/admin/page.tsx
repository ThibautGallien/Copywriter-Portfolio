"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
 FileText,
  Download,
  Eye,
  Sparkles,
} from "lucide-react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [categories, setCategories] = useState("");
  const [readingTime, setReadingTime] = useState("5");
  const [featured, setFeatured] = useState(false);
  const [keywords, setKeywords] = useState("");
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState("");

  // Vérifier si déjà authentifié (session)
  useEffect(() => {
    const auth = sessionStorage.getItem("admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Mot de passe simple (à changer dans .env)
    const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "changeme123";

    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin_auth", "true");
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Mot de passe incorrect");
    }
  };

  // Écran de connexion
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-6">
        <Card className="p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">
              🔐 Admin
            </h1>
            <p className="text-neutral-600">
              Accès restreint - Mot de passe requis
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez le mot de passe"
                required
              />
            </div>

            {authError && (
              <p className="text-sm text-red-600">{authError}</p>
            )}

            <Button type="submit" className="w-full">
              Se connecter
            </Button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm">
            <p className="font-semibold mb-2">💡 Configuration</p>
            <p className="text-neutral-600">
              Pour définir le mot de passe, ajoute dans ton <code className="bg-white px-2 py-1 rounded">.env</code> :
            </p>
            <pre className="mt-2 bg-white p-2 rounded text-xs">
              NEXT_PUBLIC_ADMIN_PASSWORD=ton_mot_de_passe
            </pre>
          </div>
        </Card>
      </div>
    );
  }

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const generateMDX = () => {
    const slug = generateSlug(title);
    const today = new Date().toISOString().split("T")[0];
    const categoriesArray = categories
      .split(",")
      .map((c) => `"${c.trim()}"`)
      .join(", ");
    const keywordsArray = keywords
      .split(",")
      .map((k) => `"${k.trim()}"`)
      .join(", ");

    const mdx = `---
title: "${title}"
publishedAt: "${today}"
excerpt: "${excerpt}"
author: "Thibaut Gallien"
categories: [${categoriesArray}]
estimatedReadingTime: ${readingTime}
featured: ${featured}
metaTitle: "${title}"
metaDescription: "${excerpt}"
keywords: [${keywordsArray}]
---

${content || `
## Introduction

Commence ton article ici...

## Section 1

Ton contenu ici...

<Example good>
**Bon exemple :**
Montre ce qu'il faut faire
</Example>

<Callout type="info">
💡 **Astuce :** Information importante
</Callout>

## Conclusion

Termine avec un CTA...
`}
`;

    setPreview(mdx);
    return { slug, mdx };
  };

  const downloadMDX = () => {
    const { slug, mdx } = generateMDX();
    const blob = new Blob([mdx], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${slug}.mdx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-neutral-900 mb-2 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-emerald-600" />
            Admin - Créer un article
          </h1>
          <p className="text-neutral-600">
            Remplis le formulaire et télécharge le fichier MDX à placer dans <code className="text-sm bg-neutral-200 px-2 py-1 rounded">content/blog/</code>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulaire */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-emerald-600" />
              Informations de l'article
            </h2>

            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Titre *</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Call to Action : Guide complet"
                />
              </div>

              <div>
                <Label htmlFor="excerpt">Description courte *</Label>
                <Textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Découvre comment créer des CTA qui convertissent..."
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="categories">Catégories *</Label>
                  <Input
                    id="categories"
                    value={categories}
                    onChange={(e) => setCategories(e.target.value)}
                    placeholder="Copywriting, Conversion"
                  />
                  <p className="text-xs text-neutral-500 mt-1">
                    Séparées par des virgules
                  </p>
                </div>

                <div>
                  <Label htmlFor="readingTime">Temps de lecture (min)</Label>
                  <Input
                    id="readingTime"
                    type="number"
                    value={readingTime}
                    onChange={(e) => setReadingTime(e.target.value)}
                    placeholder="5"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="keywords">Mots-clés SEO</Label>
                <Input
                  id="keywords"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="cta, call to action, conversion"
                />
                <p className="text-xs text-neutral-500 mt-1">
                  Séparés par des virgules
                </p>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="w-4 h-4"
                />
                <Label htmlFor="featured" className="cursor-pointer">
                  Article à la une
                </Label>
              </div>

              <div>
                <Label htmlFor="content">Contenu (optionnel)</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Si vide, un template sera généré..."
                  rows={8}
                  className="font-mono text-sm"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={() => generateMDX()}
                  variant="outline"
                  className="flex-1"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Prévisualiser
                </Button>
                <Button
                  onClick={downloadMDX}
                  disabled={!title || !excerpt || !categories}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger MDX
                </Button>
              </div>
            </div>
          </Card>

          {/* Prévisualisation */}
          <Card className="p-6 bg-neutral-900 text-neutral-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Eye className="w-6 h-6 text-emerald-400" />
              Prévisualisation
            </h2>

            {preview ? (
              <pre className="text-xs overflow-auto whitespace-pre-wrap break-words">
                {preview}
              </pre>
            ) : (
              <div className="text-center py-12 text-neutral-400">
                Clique sur "Prévisualiser" pour voir le résultat
              </div>
            )}
          </Card>
        </div>

        {/* Instructions */}
        <Card className="mt-8 p-6 bg-blue-50 border-blue-200">
          <h3 className="font-bold text-lg mb-3">📝 Prochaines étapes</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Télécharge le fichier MDX généré</li>
            <li>
              Place-le dans le dossier <code className="bg-white px-2 py-1 rounded">content/blog/</code>
            </li>
            <li>
              Commit et push : <code className="bg-white px-2 py-1 rounded">git add . && git commit -m "Nouvel article" && git push</code>
            </li>
            <li>Vercel déploiera automatiquement ton article</li>
            <li>
              Ton article sera accessible sur{" "}
              <code className="bg-white px-2 py-1 rounded">
                /blog/ton-slug
              </code>
            </li>
          </ol>
        </Card>
      </div>
    </div>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Thibaut - Copywriter Freelance | Style Narratif Unique',
  description: 'Copywriter freelance spécialisé dans la création de landing pages, newsletters et séquences emails avec un style narratif inspiré des mangas. Transformez vos mots en conversions.',
  keywords: 'copywriter, freelance, landing page, newsletter, email marketing, storytelling, conversion',
  authors: [{ name: 'Thibaut' }],
  creator: 'Thibaut',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'Thibaut - Copywriter Freelance | Style Narratif Unique',
    description: 'Copywriter freelance spécialisé dans la création de landing pages, newsletters et séquences emails avec un style narratif inspiré des mangas.',
    siteName: 'Thibaut Copywriter',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thibaut - Copywriter Freelance | Style Narratif Unique',
    description: 'Copywriter freelance spécialisé dans la création de landing pages, newsletters et séquences emails avec un style narratif inspiré des mangas.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-inter bg-[#0D0D0D] text-white antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
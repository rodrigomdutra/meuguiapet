import type { Metadata } from 'next';
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import './globals.css';

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: {
    default: "meuguia.pet | Conteúdo Pet Brasileiro com Validação Científica",
    template: "%s | meuguia.pet",
  },
  description:
    "A primeira plataforma de conteúdo pet genuinamente brasileira, com validação científica e contextualização local.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://meuguia.pet",
    siteName: "meuguia.pet",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "meuguia.pet - Conteúdo Pet Brasileiro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "meuguia.pet | Conteúdo Pet Brasileiro com Validação Científica",
    description:
      "A primeira plataforma de conteúdo pet genuinamente brasileira, com validação científica e contextualização local.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${sourceSans.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
} 
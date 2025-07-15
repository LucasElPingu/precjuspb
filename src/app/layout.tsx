import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRECJUSPB – Transforme seu precatório em dinheiro",
  description:
    "Na PRECJUSPB, você transforma seu precatório em dinheiro com segurança, agilidade e total transparência. João Pessoa - PB.",
  keywords: [
    "precatório",
    "precatórios",
    "compra de precatórios",
    "transformar precatório em dinheiro",
    "PRECJUSPB",
    "João Pessoa",
    "Paraíba",
    "PB",
    "segurança",
    "agilidade",
    "transparência",
  ],
  authors: [{ name: "PRECJUSPB" }],
  creator: "PRECJUSPB",
  publisher: "PRECJUSPB",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://precjuspb.com.br",
    siteName: "PRECJUSPB",
    title: "PRECJUSPB – Transforme seu precatório em dinheiro",
    description:
      "Na PRECJUSPB, você transforma seu precatório em dinheiro com segurança, agilidade e total transparência. João Pessoa - PB.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PRECJUSPB - Transforme seu precatório em dinheiro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRECJUSPB – Transforme seu precatório em dinheiro",
    description:
      "Na PRECJUSPB, você transforma seu precatório em dinheiro com segurança, agilidade e total transparência. João Pessoa - PB.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://precjuspb.com.br",
  },
  other: {
    "google-site-verification": "adicionar-codigo-verification-aqui",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PRECJUSPB",
              url: "https://precjuspb.com.br",
              logo: "https://precjuspb.com.br/logo.png",
              description:
                "Na PRECJUSPB, você transforma seu precatório em dinheiro com segurança, agilidade e total transparência.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Acrísio Borges, 287, Brisamar",
                addressLocality: "João Pessoa",
                addressRegion: "PB",
                postalCode: "58033-180",
                addressCountry: "BR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-83-3142-9255",
                contactType: "customer service",
                email: "precjuspb@precjuspb.com.br",
              },
              sameAs: ["https://wa.me/558331429255"],
            }),
          }}
        />
      </body>
    </html>
  );
}

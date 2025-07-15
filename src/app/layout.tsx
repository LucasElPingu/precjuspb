import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
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

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
        url: "/images/image1.png", // alterado para image1.png
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
    images: ["/images/image1.png"], // alterado
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
      <head>
        {/* Favicons e ícones */}
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/icon-144.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/icon-32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/images/icon-48.png" />
      </head>

      <body className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>

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
              logo: "https://precjuspb.com.br/images/icon-144.png",
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

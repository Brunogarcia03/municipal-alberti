import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

import { Montserrat } from "next/font/google";

import Header from "@/components/Header";
import LenisScrollProvider from "@/providers/lenis-provider";

const montserrat = Montserrat({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Municipalidad de Alberti | Sitio Oficial",
  description:
    "Sitio oficial de la Municipalidad de Alberti. Información, trámites, transparencia y noticias del gobierno local.",
  keywords: [
    "Municipalidad de Alberti",
    "Alberti Buenos Aires",
    "Gobierno local",
    "Transparencia municipal",
    "Trámites online Alberti",
  ],
  openGraph: {
    title: "Municipalidad de Alberti | Sitio Oficial",
    description:
      "Conocé las últimas noticias, trámites y programas de la Municipalidad de Alberti.",
    url: "https://municipioalberti.gob.ar",
    siteName: "Municipalidad de Alberti",
    images: [
      {
        url: "https://res.cloudinary.com/dshbxjhtw/image/upload/v1759753348/municipalidadalberti_df6e9e03fb.jpg",
        width: 1200,
        height: 630,
        alt: "Municipalidad de Alberti",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dshbxjhtw/image/upload/v1759754224/ICON_f25199ec4c.png"
          type="image/png"
        />
      </head>
      <body
        className={`${montserrat.className} antialiased text-white overflow-x-hidden bg-white`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GovernmentOrganization",
              name: "Municipalidad de Alberti",
              url: process.env.NEXT_PUBLIC_FRONTEND_URL,
              logo: "https://res.cloudinary.com/dshbxjhtw/image/upload/v1759754224/ICON_f25199ec4c.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Alberti, Buenos Aires, Argentina",
              },
            }),
          }}
        />
        <LenisScrollProvider>
          <Header />
          {children}
        </LenisScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}

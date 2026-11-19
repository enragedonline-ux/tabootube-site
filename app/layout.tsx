import type { Metadata } from "next";
import { Inter, Lilita_One } from "next/font/google";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const TITLE = "TabooTube – What Is TabooTube? Is It Safe? How It Works [2026 Guide]";
const DESCRIPTION =
  "What is TabooTube? Is it safe? How it works, how to use it, and how it compares to RedTube, EroMe, Tube8 and HCLips. Info guide — no videos hosted.";
const KEYWORDS = [
  "tabootube",
  "taboo tube",
  "is tabootube safe",
  "tabootube download",
  "what is tabootube",
  "how tabootube works",
  "tabootube alternatives",
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
  metadataBase: new URL(SITE_URL),
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/` },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description: DESCRIPTION,
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <html lang="en" className={`${inter.variable} ${lilita.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}

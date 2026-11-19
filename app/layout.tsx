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

const TITLE = "TabooTube – What It Is, How It Works, Is It Safe? [2026 Guide]";
const DESCRIPTION =
  "TabooTube explained: what it is, how it works, whether it is safe, and how it compares to other platforms. An independent informational guide — no videos are hosted on this site.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
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

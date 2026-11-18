import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy – TabooTube",
  description:
    "Privacy Policy for TabooTube: what information this site collects, how it is used, and how to contact us.",
  alternates: { canonical: `${SITE_URL}/privacy-policy/` },
  openGraph: {
    title: "Privacy Policy – TabooTube",
    description:
      "Privacy Policy for TabooTube: what information this site collects, how it is used, and how to contact us.",
    url: `${SITE_URL}/privacy-policy/`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy – TabooTube",
    description:
      "Privacy Policy for TabooTube: what information this site collects, how it is used, and how to contact us.",
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="date-line">Last updated: 18 November 2026</p>
      <p>
        TabooTube is an informational guide. This Privacy Policy explains what
        information this website collects and how it is used.
      </p>
      <h2>Information we collect</h2>
      <p>
        We do not ask you to create an account, and we do not collect personal
        information such as your name, address, or payment details. Like most
        websites, our hosting provider may keep standard server logs, which can
        include your IP address, browser type, the pages you visit, and the time
        of your visit. These logs are used only to keep the site running and to
        understand general traffic patterns.
      </p>
      <h2>Cookies and tracking</h2>
      <p>
        This site does not use cookies for tracking or advertising. We do not
        run analytics that identify individual visitors, and we do not sell or
        share personal information with third parties.
      </p>
      <h2>Links to other websites</h2>
      <p>
        This site may link to other websites for reference. We are not
        responsible for the content or privacy practices of those sites, and we
        encourage you to read their privacy policies when you visit them.
      </p>
      <h2>Contact</h2>
      <p>
        If you contact us by email, we will use your email address only to
        reply to your message. We do not add your address to a mailing list.
        You can reach us at{" "}
        <a href="mailto:enraged.online@gmail.com">enraged.online@gmail.com</a>.
      </p>
      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will
        be posted on this page with an updated date.
      </p>
    </>
  );
}

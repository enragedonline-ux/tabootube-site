import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us – TabooTube",
  description:
    "Contact TabooTube: questions, corrections, or takedown requests. Reach us by email.",
  alternates: { canonical: `${SITE_URL}/contact-us/` },
  openGraph: {
    title: "Contact Us – TabooTube",
    description:
      "Contact TabooTube: questions, corrections, or takedown requests. Reach us by email.",
    url: `${SITE_URL}/contact-us/`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Us – TabooTube",
    description:
      "Contact TabooTube: questions, corrections, or takedown requests. Reach us by email.",
  },
};

export default function ContactUs() {
  return (
    <>
      <h1>Contact Us</h1>
      <p>
        Have a question about a guide, spotted something that needs correcting,
        or need to raise a copyright concern? You can reach us by email.
      </p>
      <p>
        Email:{" "}
        <a href="mailto:enraged.online@gmail.com">enraged.online@gmail.com</a>
      </p>
      <p>
        Please include the URL of the page your message is about, so we can
        find it quickly. We aim to reply within a few working days.
      </p>
    </>
  );
}

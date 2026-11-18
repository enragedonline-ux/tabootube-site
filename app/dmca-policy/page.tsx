import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "DMCA Policy – TabooTube",
  description:
    "DMCA Policy for TabooTube: how to submit a copyright takedown notice and how we handle valid requests.",
  alternates: { canonical: `${SITE_URL}/dmca-policy/` },
  openGraph: {
    title: "DMCA Policy – TabooTube",
    description:
      "DMCA Policy for TabooTube: how to submit a copyright takedown notice and how we handle valid requests.",
    url: `${SITE_URL}/dmca-policy/`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "DMCA Policy – TabooTube",
    description:
      "DMCA Policy for TabooTube: how to submit a copyright takedown notice and how we handle valid requests.",
  },
};

export default function DmcaPolicy() {
  return (
    <>
      <h1>DMCA Policy</h1>
      <p className="date-line">Last updated: 18 November 2026</p>
      <p>
        TabooTube is an informational guide. No videos are hosted, stored,
        uploaded, streamed, or distributed on this site, and we do not host any
        third-party content. Even so, we respect intellectual property rights
        and will respond to valid copyright complaints under the Digital
        Millennium Copyright Act (DMCA).
      </p>
      <h2>How to submit a takedown notice</h2>
      <p>
        If you believe that content on this site infringes your copyright,
        please send a written notice to{" "}
        <a href="mailto:enraged.online@gmail.com">enraged.online@gmail.com</a>{" "}
        with the following information:
      </p>
      <ul>
        <li>
          Identification of the copyrighted work you believe has been
          infringed, or a representative list of works if several are involved.
        </li>
        <li>
          The exact URL of the page on this site where the material appears.
        </li>
        <li>
          Your full name, mailing address, telephone number, and email address.
        </li>
        <li>
          A statement that you have a good-faith belief that the use of the
          material is not authorised by the copyright owner, its agent, or the
          law.
        </li>
        <li>
          A statement that the information in your notice is accurate and,
          under penalty of perjury, that you are the copyright owner or are
          authorised to act on the copyright owner&apos;s behalf.
        </li>
        <li>Your physical or electronic signature.</li>
      </ul>
      <h2>How we handle notices</h2>
      <p>
        We will review each notice promptly. If a notice is valid and complete,
        we will remove or disable access to the material in question and, where
        appropriate, notify the person who provided it. A person whose material
        was removed may submit a counter-notice with the information required by
        the DMCA if they believe the removal was a mistake.
      </p>
      <h2>Repeat infringers</h2>
      <p>
        We do not tolerate repeat infringement. Accounts or contributors who
        repeatedly provide infringing material may have their access to the site
        terminated, in line with the DMCA&apos;s repeat-infringer policy.
      </p>
      <p>
        Please note that false or bad-faith notices can carry legal
        consequences. If you are unsure whether material infringes your
        copyright, consider seeking legal advice before submitting a notice.
      </p>
    </>
  );
}

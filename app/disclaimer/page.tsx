import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer – TabooTube",
  description:
    "Disclaimer for TabooTube: this site is an informational guide only. No videos are hosted, stored, uploaded, streamed, or distributed here.",
  alternates: { canonical: `${SITE_URL}/disclaimer/` },
  openGraph: {
    title: "Disclaimer – TabooTube",
    description:
      "Disclaimer for TabooTube: this site is an informational guide only. No videos are hosted, stored, uploaded, streamed, or distributed here.",
    url: `${SITE_URL}/disclaimer/`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Disclaimer – TabooTube",
    description:
      "Disclaimer for TabooTube: this site is an informational guide only. No videos are hosted, stored, uploaded, streamed, or distributed here.",
  },
};

export default function Disclaimer() {
  return (
    <>
      <h1>Disclaimer</h1>
      <p className="date-line">Last updated: 18 November 2026</p>
      <p>
        TabooTube is an informational and educational guide. The content on
        this site is provided for general information only and should not be
        taken as legal, professional, or technical advice.
      </p>
      <h2>No videos are hosted on this site</h2>
      <p>
        No videos are hosted, stored, uploaded, streamed, or distributed on
        this site. We do not operate a video platform, we do not host video
        files, and we do not provide access to video content. Any references to
        third-party platforms on this site are for information and comparison
        only.
      </p>
      <h2>No affiliation</h2>
      <p>
        This site is not affiliated with, endorsed by, or connected to any
        platform mentioned in its guides, including any site with a similar or
        identical name. All trademarks and names mentioned belong to their
        respective owners and are used only to identify the subject being
        discussed.
      </p>
      <h2>Accuracy</h2>
      <p>
        We aim to keep the information on this site accurate and up to date,
        but we make no guarantees about its completeness or accuracy. Platforms
        change their features, policies, and availability over time, and
        information that was correct when written may become outdated.
      </p>
      <h2>Your responsibility</h2>
      <p>
        You are responsible for following the laws of your country or region,
        including laws about online content, age restrictions, and copyright.
        This site does not encourage or enable any activity that would break
        those laws, and we are not responsible for how you use information from
        this site.
      </p>
      <h2>External links</h2>
      <p>
        This site may link to external websites. We do not control those sites
        and are not responsible for their content, policies, or availability.
      </p>
    </>
  );
}

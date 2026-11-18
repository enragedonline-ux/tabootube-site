import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "TabooTube Blog – Guides and Comparisons",
  description:
    "Guides and comparisons about TabooTube: what it is, how it works, whether it is safe, and how it compares to other platforms.",
  alternates: { canonical: `${SITE_URL}/blog/` },
  openGraph: {
    title: "TabooTube Blog – Guides and Comparisons",
    description:
      "Guides and comparisons about TabooTube: what it is, how it works, whether it is safe, and how it compares to other platforms.",
    url: `${SITE_URL}/blog/`,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "TabooTube Blog – Guides and Comparisons",
    description:
      "Guides and comparisons about TabooTube: what it is, how it works, whether it is safe, and how it compares to other platforms.",
  },
};

export default async function BlogIndex() {
  return (
    <>
      <h1>TabooTube Blog</h1>
      <p className="lead">
        Guides and comparisons about TabooTube — what it is, how it works,
        whether it is safe, and how it compares to other platforms.
      </p>
      <ul className="card-list">
        {POSTS.map((p) => (
          <li key={p.slug}>
            <a href={`/blog/${p.slug}/`}>{p.title}</a>
            <p className="date-line" style={{ margin: "4px 0 0" }}>
              {p.dateLabel}
            </p>
            <p>{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

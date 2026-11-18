import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { POSTS, POST_BY_SLUG } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = POST_BY_SLUG.get(slug);
  if (!p) return { title: "TabooTube Blog" };
  const url = `${SITE_URL}/blog/${p.slug}/`;
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: url },
    openGraph: {
      title: p.title,
      description: p.description,
      url,
      siteName: SITE_NAME,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: p.title,
      description: p.description,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const p = POST_BY_SLUG.get(slug);
  if (!p) notFound();
  const url = `${SITE_URL}/blog/${p.slug}/`;
  const firstPara = p.sections[0]?.paragraphs[0] ?? p.excerpt;
  const related = POSTS.filter((o) => o.slug !== p.slug).slice(0, 3);
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": url,
        url,
        headline: p.title,
        description: p.description,
        datePublished: p.date,
        author: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/` },
        publisher: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/` },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
          { "@type": "ListItem", position: 3, name: p.title, item: url },
        ],
      },
    ],
  };
  if (p.faqs && p.faqs.length > 0) {
    (jsonLd["@graph"] as unknown[]).push({
      "@type": "FAQPage",
      mainEntity: p.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>{p.title}</h1>
      <p className="date-line">
        {p.dateLabel} · {SITE_NAME}
      </p>
      <p>
        <strong>{firstPara}</strong>
      </p>
      {p.sections.map((s, i) => (
        <section className="block" key={s.heading} aria-label={s.heading}>
          <h2>{s.heading}</h2>
          {(i === 0 ? s.paragraphs.slice(1) : s.paragraphs).map((para, j) => (
            <p key={j}>{para}</p>
          ))}
          {s.bullets && s.bullets.length > 0 && (
            <ul>
              {s.bullets.map((b, k) => (
                <li key={k}>{b}</li>
              ))}
            </ul>
          )}
          {s.table && (
            <table>
              <thead>
                <tr>
                  {s.table.headers.map((h, k) => (
                    <th key={k}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {s.table.rows.map((row, r) => (
                  <tr key={r}>
                    {row.map((cell, c) => (
                      <td key={c}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      ))}
      {p.faqs && p.faqs.length > 0 && (
        <section className="block" aria-label="Frequently Asked Questions">
          <h2>Frequently Asked Questions</h2>
          {p.faqs.map((f) => (
            <div className="faq-item" key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </section>
      )}
      <section className="block" aria-label="Related pages">
        <h2>Related Pages</h2>
        <p className="lead">
          <a href="/">TabooTube guide</a> · <a href="/blog/">All blog posts</a>
          {related.map((r) => (
            <span key={r.slug}>
              {" · "}
              <a href={`/blog/${r.slug}/`}>{r.title}</a>
            </span>
          ))}
        </p>
        {p.sources.length > 0 && (
          <p className="lead">
            Sources:{" "}
            {p.sources.map((s, i) => (
              <span key={s.url}>
                {i > 0 ? " · " : ""}
                <a href={s.url}>{s.label}</a>
              </span>
            ))}
          </p>
        )}
      </section>
    </>
  );
}

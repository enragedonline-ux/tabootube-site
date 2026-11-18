import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { PILLAR } from "@/lib/pillar";
import { POSTS } from "@/lib/posts";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: PILLAR.title,
    description: PILLAR.description,
    alternates: { canonical: `${SITE_URL}/` },
    openGraph: {
      title: PILLAR.title,
      description: PILLAR.description,
      url: `${SITE_URL}/`,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: `${SITE_URL}/hero.svg`,
          width: 1200,
          height: 630,
          alt: "TabooTube — video streaming illustration",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: PILLAR.title,
      description: PILLAR.description,
      images: [`${SITE_URL}/hero.svg`],
    },
  };
}

export default async function Home() {
  const url = `${SITE_URL}/`;
  const heroImage = `${SITE_URL}/hero.svg`;
  const slug = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": url,
        url,
        headline: PILLAR.title,
        description: PILLAR.description,
        image: heroImage,
        datePublished: "2026-11-18",
        author: { "@type": "Organization", name: SITE_NAME, url },
        publisher: { "@type": "Organization", name: SITE_NAME, url },
        mainEntityOfPage: url,
      },
      {
        "@type": "FAQPage",
        mainEntity: PILLAR.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="hero">
        <img
          src="/hero.svg"
          alt="TabooTube — video streaming illustration"
          className="hero-img"
          width={1200}
          height={630}
        />
        <h1>{PILLAR.h1}</h1>
        {PILLAR.intro.length > 0 && (
          <p className="lead">{PILLAR.intro[0]}</p>
        )}
      </header>
      {PILLAR.intro.slice(1).map((para, i) => (
        <p key={i}>{para}</p>
      ))}
      {PILLAR.sections.map((s) => (
        <section className="block" key={s.heading} aria-label={s.heading}>
          <h2 id={slug(s.heading)}>{s.heading}</h2>
          {s.paragraphs.map((para, j) => (
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
      {PILLAR.faqs.length > 0 && (
        <section className="block" aria-label="Frequently Asked Questions">
          <h2>Frequently Asked Questions</h2>
          {PILLAR.faqs.map((f) => (
            <div className="faq-item" key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </section>
      )}
      <section className="block" aria-label="Related guides">
        <h2>Related guides</h2>
        <ul className="card-list">
          {POSTS.map((p) => (
            <li key={p.slug}>
              <a href={`/blog/${p.slug}/`}>{p.title}</a>
              <p>{p.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

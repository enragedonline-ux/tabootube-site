import type { ReactNode } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/blog/tabootube/", label: "TabooTube" },
  { href: "/#what-is-tabootube", label: "What Is TabooTube?" },
  {
    href: "/blog/tabootube-how-it-works-and-why-its-unique/",
    label: "How It Works?",
  },
  { href: "/blog/faqs-about-tabootube/", label: "FAQs" },
  { href: "/contact-us/", label: "Contact Us" },
  { href: "/blog/", label: "Blog" },
];

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
    </svg>
  );
}

const FOOTER_LINKS = [
  { href: "/blog/", label: "Blog" },
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/dmca-policy/", label: "DMCA Policy" },
  { href: "/disclaimer/", label: "Disclaimer" },
  { href: "/contact-us/", label: "Contact Us" },
];

export default function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="topbar">
        <div className="marquee" aria-label="About this site">
          <div className="marquee-track">
            <span>
              TabooTube is an independent informational website — not
              affiliated with any video platform. All content is for
              information and education only.&nbsp;&nbsp;•&nbsp;&nbsp;
            </span>
            <span aria-hidden="true">
              TabooTube is an independent informational website — not
              affiliated with any video platform. All content is for
              information and education only.&nbsp;&nbsp;•&nbsp;&nbsp;
            </span>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="header-inner">
          <a className="brand" href="/" aria-label="TabooTube home">
            TabooTube
          </a>
          <nav className="nav" aria-label="Main navigation">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
            <a
              href="/blog/"
              className="nav-search"
              aria-label="Search all guides"
            >
              <SearchIcon />
            </a>
          </nav>
        </div>
      </header>
      <main className="wrap" id="top">
        {children}
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <nav className="footer-nav" aria-label="Footer navigation">
            {FOOTER_LINKS.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <p className="footer-note">
            TabooTube is an informational guide. No videos are hosted on this
            site.
          </p>
          <p className="footer-note">© 2026 TabooTube. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

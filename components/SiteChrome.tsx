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

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.7 3H21l-7.3 8.3L22.2 21h-6.7l-5.2-6.3L4.4 21H1l7.8-8.9L1.5 3h6.9l4.7 5.7L17.7 3zm-1.2 16h1.9L6.9 4.9H4.9L16.5 19z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
        <div className="topbar-inner">
          <span className="topbar-text">TabooTube Official ✅</span>
          <span className="topbar-social">
            <a href="#" aria-label="TabooTube on Facebook">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="TabooTube on X">
              <XIcon />
            </a>
            <a href="#" aria-label="TabooTube on Instagram">
              <InstagramIcon />
            </a>
          </span>
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

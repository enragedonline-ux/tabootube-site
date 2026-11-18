import type { ReactNode } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/blog/", label: "Blog" },
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/contact-us/", label: "Contact" },
];

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

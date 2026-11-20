"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "tt-popup-dismissed";

export default function PopupBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // storage unavailable — still show once per load
    }
    const t = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  const close = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    setOpen(false);
  };

  return (
    <div
      className="popup-overlay"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="TabooTube 2027 guide"
    >
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={close} aria-label="Close">
          ×
        </button>
        <h2 className="popup-title">TabooTube in 2027: What&rsquo;s New?</h2>
        <p className="popup-text">
          Is TabooTube still safe in 2027? See what&rsquo;s changed and what to
          expect next.
        </p>
        <a
          className="popup-cta"
          href="/blog/tabootube-in-2027-whats-new-is-it-safe/"
        >
          Read the 2027 Guide
        </a>
      </div>
    </div>
  );
}

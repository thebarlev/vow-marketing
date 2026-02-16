"use client";
import * as React from "react";
import Image from "next/image";

const CONSENT_KEY = "vow_cookie_consent";
const CONSENT_TIMESTAMP_KEY = "vow_cookie_consent_ts";

type ConsentValue = "accepted" | "rejected";

export function CookieBanner() {
  const [mounted, setMounted] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    try {
      const consent = localStorage.getItem(CONSENT_KEY) as ConsentValue | null;
      const ts = localStorage.getItem(CONSENT_TIMESTAMP_KEY);
      if (!consent || !ts) setVisible(true);
      else setVisible(false);
    } catch {
      setVisible(true);
    }
  }, []);

  const setConsent = (value: ConsentValue) => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
      localStorage.setItem(CONSENT_TIMESTAMP_KEY, String(Date.now()));
    } catch {
      // ignore
    }
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  if (!mounted) return null;
  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-4 sm:px-6"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="mx-auto flex max-w-[1200px] items-start gap-4 sm:items-center">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="flex-shrink-0 text-black hover:text-gray-700 transition-colors cursor-pointer"
          aria-label="סגור הודעת עוגיות"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start gap-3 text-right">
            {/* Cookie Icon */}
            <Image
              src="/cookies.svg"
              alt="cookies"
              width={40}
              height={40}
              className="flex-shrink-0"
            />
            
            {/* Text Content */}
            <div className="flex flex-col gap-1">
              <h3 className="text-[20px] font-semibold text-[#FF6B35] leading-tight">
                כל הקליקים על המשולחן
              </h3>
              <p className="text-[20px] text-gray-700 leading-snug">
                אנחנו משתמשים בעוגיות (cookies) כדי לשפר את חווית הגלישה באתר. המשך גלישה באתר = הסכמה מצדך. רוצה לדעת יותר?{" "}
                <a href="/privacy" className="link-orange">
                  לחץ כאן
                </a>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              className="btn-secondary w-[100px]"
              onClick={() => setConsent("rejected")}
            >
              דחה
            </button>
            <button
              type="button"
              className="btn-primary w-[100px]"
              onClick={() => setConsent("accepted")}
            >
              מאשר
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
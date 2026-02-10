"use client";
import { useState, useEffect } from "react";
import Image from "next/image"

const CONSENT_KEY = 'cookies_consent';
const CONSENT_TIMESTAMP_KEY = 'cookies_consent_timestamp';
const CONSENT_DURATION_MS = 365 * 24 * 60 * 60 * 1000; // 12 חודשים

export function CookieBanner() {
  // Start with null to avoid hydration mismatch, check localStorage after mount
  const [visible, setVisible] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user already gave consent
    const consent = localStorage.getItem(CONSENT_KEY);
    const timestamp = localStorage.getItem(CONSENT_TIMESTAMP_KEY);

    if (consent && timestamp) {
      const consentDate = parseInt(timestamp, 10);
      const now = Date.now();
      
      // Check if consent is still valid (within 12 months)
      if (now - consentDate < CONSENT_DURATION_MS) {
        setVisible(false);
        return;
      }
    }

    // No valid consent found, show banner
    setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    localStorage.setItem(CONSENT_TIMESTAMP_KEY, Date.now().toString());
    setVisible(false);
    
    // כאן אפשר לטעון trackers/analytics אם צריך
    console.log('Cookies accepted');
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    localStorage.setItem(CONSENT_TIMESTAMP_KEY, Date.now().toString());
    setVisible(false);
    
    // כאן אפשר לחסום trackers לא חיוניים
    console.log('Cookies rejected');
  };

  // Don't render anything until we've checked localStorage (avoids hydration mismatch)
  if (visible === null || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-md px-6 py-4 rtl border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        
        {/* Icon + Text */}
        <div className="flex items-start gap-3 flex-1">
          <Image
            src="/cookies.svg"
            alt="cookies"
            width={50}
            height={50}
            className="max-w-[30px] h-auto shrink-0"
            priority
          />
          <div className="text-right">
            <h4 className="font-bold text-[#F27021] text-lg">כל הקלפים על השולחן</h4>
            <p className="text-gray-700 text-sm leading-relaxed mt-1">
              אנחנו משתמשים בעוגיות (cookies) כדי להציג לך תכנים רלוונטיים. המשך גלישה באתר = הסכמה מצדך. רוצה לדעת יותר?{" "}
              <a href="/privacy" className="underline text-blue-600">לחץ כאן</a>
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 items-center shrink-0">
          <button
            onClick={handleAccept}
            className="bg-[#5389BB] hover:bg-[#4678A5] text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            אני מסכים
          </button>
          <button
            onClick={handleReject}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors"
          >
            סירוב
          </button>
          <button
            onClick={handleReject}
            className="text-gray-500 hover:text-black font-bold text-xl p-2"
            aria-label="סגור"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

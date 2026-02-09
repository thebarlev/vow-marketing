"use client";
import { useState } from "react";
import Image from "next/image"

export function CookieBanner() {
  // Lazy initializer reads localStorage only once, during first render
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
     
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white shadow-md px-6 py-3 flex items-start justify-between rtl">
      
      {/* Left: site icon */}
      <div className="flex items-start gap-3">
        <Image
                          src="/cookies.svg"
                          alt="cookies"
          width={50}
          height={50}
                          className="max-w-[30px] h-auto"
                          priority
                        />
      </div>

      {/* Center/Right: Text */}
      <div className="flex-1 text-right mr-3">
        <h4 className="font-bold text-[#F27021] text-lg">כל הקלפים על השולחן</h4>
        <p className="text-gray-700 text-sm leading-relaxed mt-1 text-right sm:max-w-[25%]">
  אנחנו משתמשים בעוגיות (cookies) כדי להציג לך תכנים רלוונטיים. המשך גלישה באתר = הסכמה מצדך. רוצה לדעת יותר?{" "}
  <a href="#" className="underline text-blue-600">לחץ כאן</a>
</p>
      </div>

      {/* Right: Close button */}
      <button
        onClick={handleClose}
        className="text-gray-500 hover:text-black font-bold text-xl"
      >
        ✕
      </button>
    </div>
  );
}

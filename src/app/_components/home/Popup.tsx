import { useState } from "react";

export type PopupProps = {
  title: string;
  description: string;
  toptext?: string;
  onClose: () => void;
};

export function Popup({ title, description, toptext, onClose }: PopupProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 👉 call API here
    setIsSuccess(true);
  };

  return (
    // Overlay
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#000000D6] px-4"
      onClick={onClose}
    >
      {/* Popup */}
      <div
        className="relative w-full max-w-[637px] rounded-xl bg-white p-10 text-right max-h-[calc(100vh-80px)] overflow-y-auto hide-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {!isSuccess ? (
          <>
            {toptext && (
              <div className="mb-3 text-center">
                <span className="inline-block rounded bg-[#F5F5F5] px-4 py-2 text-[20px] font-bold text-[#5389BB]">
                  {toptext}
                </span>
              </div>
            )}

            <h2 className="mb-1 text-center text-[50px] font-bold">
              {title}
            </h2>

            <h6 className="mb-4 px-2 py-1 text-center text-[26px] font-semibold text-[#747474]">
              {description}
            </h6>

            <form
              className="mx-auto max-w-[336px] space-y-4"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="mb-1 block text-[20px] font-semibold">
                  שם פרטי
                </label>
                <input className="w-full rounded border px-3 py-3" />
              </div>

              <div>
                <label className="mb-1 block text-[20px] font-semibold">
                  שם משפחה
                </label>
                <input className="w-full rounded border px-3 py-3" />
              </div>

              <div>
                <label className="mb-1 block text-[20px] font-semibold">
                  דוא"ל
                </label>
                <input className="w-full rounded border px-3 py-3" />
              </div>

              <div>
                <label className="mb-1 block text-[20px] font-semibold">
                  נייד
                </label>
                <input className="w-full rounded border px-3 py-3" />
              </div>

              <button className="mt-2 w-full rounded bg-black py-3 text-[20px] text-white cursor-pointer">
                הרשמה
              </button>
            </form>
          </>
        ) : (
          /* ✅ SUCCESS STATE */
          <div className="mx-auto max-w-[520px] space-y-6 text-center">
            <h2 className="text-[40px] font-bold">
              ההרשמה התקבלה בהצלחה
            </h2>

            <p className="text-[22px] font-semibold text-[#5389BB]">
              המכסה לפיילוט (100 עסקים) התמלאה.
            </p>

            <p className="text-[22px] font-semibold leading-relaxed text-[#747474]">
              אנחנו נפתח בקרוב אפשרות הצטרפות נוספת,
              <br />
              וניצור איתך קשר בהקדם כדי לעדכן ולהזמין אותך.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mx-auto w-full mt-6 block rounded bg-black px-10 py-3 text-[20px] text-white"
            >
              סגירה
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
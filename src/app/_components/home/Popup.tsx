export type PopupProps = {
  title: string;
  description: string;
  toptext?: string;
  onClose: () => void;
};

export function Popup({ title, description, toptext, onClose }: PopupProps) {
  return (
    // Overlay (outside click closes)
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#000000D6] px-4"
      onClick={onClose}
    >
      {/* Popup box (inside click does NOT close) */}
      <div
        className="relative w-full max-w-[637px] rounded-xl bg-white p-10 mb-3 text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {toptext && (
          <div className="text-center mb-3">
            <span className="rounded bg-[#F5F5F5] px-4 py-2 text-[20px] text-[#5389BB] inline-block mx-auto font-bold">
              {toptext}
            </span>
          </div>
        )}

        <h2 className="text-[50px] font-bold mb-1 text-center">
          {title}
        </h2>

        <h6 className="mb-4 px-2 py-1 text-[26px] text-[#747474] font-semibold text-center">
          {description}
        </h6>

        <form className="space-y-4 max-w-[336px] mx-auto">
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

          <button className="mt-2 w-full text-[20px] rounded bg-black py-2 text-white">
            הרשמה
          </button>
        </form>
      </div>
    </div>
  );
}
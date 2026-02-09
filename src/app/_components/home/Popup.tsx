export type PopupProps = {
  title: string;
  description: string;
  onClose: () => void;
};

export function Popup({ title, description, onClose }: PopupProps) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-[360px] rounded-xl bg-white p-6 text-right">
        <button
          onClick={onClose}
          className="absolute left-3 top-3 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        <span className="inline-block mb-2 rounded bg-blue-100 px-2 py-1 text-xs text-blue-600">
          {description}
        </span>

        <h2 className="text-xl font-bold mb-4">
          {title}
        </h2>

        <form className="space-y-3">
          <input className="w-full rounded border px-3 py-2 text-sm" placeholder="שם פרטי" />
          <input className="w-full rounded border px-3 py-2 text-sm" placeholder="שם משפחה" />
          <input className="w-full rounded border px-3 py-2 text-sm" placeholder='דוא"ל' />
          <input className="w-full rounded border px-3 py-2 text-sm" placeholder="נייד" />

          <button className="mt-2 w-full rounded bg-black py-2 text-white">
            הרשמה
          </button>
        </form>
      </div>
    </div>
  );
}
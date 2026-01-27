"use client";

import { useLanguage } from "./LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2 bg-black/40 p-1 rounded-lg border border-[#3e5c4e] backdrop-blur-sm">
      <button
        onClick={() => setLanguage("th")}
        className={`px-3 py-1 rounded transition-colors font-mali font-bold ${
          language === "th" ? "bg-[#d97706] text-white" : "text-[#8ba394] hover:text-white"
        }`}
      >
        TH
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded transition-colors font-mali font-bold ${
          language === "en" ? "bg-[#d97706] text-white" : "text-[#8ba394] hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}

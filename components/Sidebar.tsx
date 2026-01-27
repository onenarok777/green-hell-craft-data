"use client";

import { CraftingItem } from "./types";
import { useState } from "react";

interface SidebarProps {
  items: CraftingItem[];
  selectedItem: CraftingItem | null;
  onSelect: (item: CraftingItem) => void;
}

import { useLanguage } from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { t } from "@/utils/dictionaries";

export default function Sidebar({ items, selectedItem, onSelect }: SidebarProps) {
  const [search, setSearch] = useState("");
  const { language, dict } = useLanguage();

  const filteredItems = items.filter((item) => {
    const translatedName = t(item.item, language);
    return (
      item.item.toLowerCase().includes(search.toLowerCase()) ||
      translatedName.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="w-full md:w-1/3 lg:w-1/4 h-screen bg-[#141b17]/90 backdrop-blur-sm border-r border-[#3e5c4e]/30 flex flex-col overflow-hidden shadow-2xl z-20">
      <div className="p-6 bg-[#0d110f]/80 border-b border-[#3e5c4e]/20 flex flex-col gap-5 shadow-lg">
        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#d8c8b0] font-mali tracking-wide drop-shadow-sm">{dict.craftingGuide}</h2>
            <LanguageSwitcher />
        </div>
        <div className="relative group">
            <input
              type="text"
              placeholder={dict.searchPlaceholder}
              className="w-full bg-[#0a0f0d] text-[#d8c8b0] border border-[#3e5c4e]/50 rounded-lg px-4 py-2.5 outline-none focus:border-[#d97706]/70 focus:ring-1 focus:ring-[#d97706]/30 placeholder-opacity-40 placeholder-[#8ba394] font-mali transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#d97706]/5 to-transparent pointer-events-none"></div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] bg-repeat">
        {filteredItems.map((item) => (
          <button
            key={item.item}
            onClick={() => onSelect(item)}
            className={`w-full text-left p-3 rounded-xl transition-all duration-300 font-mali flex items-center gap-4 group/item ${
              selectedItem?.item === item.item
                ? "bg-[#d97706] text-white shadow-[0_4px_12px_rgba(217,119,6,0.4)] scale-[1.02] border border-white/20"
                : "text-[#8ba394] hover:bg-[#1a2520]/60 hover:text-[#d8c8b0] border border-transparent hover:border-[#3e5c4e]/30"
            }`}
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center p-1.5 border-2 transition-transform group-hover/item:scale-105 ${
              selectedItem?.item === item.item ? "border-white/40 bg-white/10" : "border-[#3e5c4e]/50 bg-[#0d110f]/80"
            }`}>
              <img 
                src={item.image} 
                alt={item.item} 
                className={`w-full h-full object-contain ${selectedItem?.item === item.item ? "filter brightness-125" : "filter brightness-90 group-hover/item:brightness-110"}`}
              />
            </div>
            <div className="flex flex-col overflow-hidden">
                <span className="truncate font-bold text-lg leading-tight">{t(item.item, language)}</span>
                <span className={`text-xs opacity-60 uppercase tracking-tighter transition-opacity ${selectedItem?.item === item.item ? "opacity-90" : "group-hover/item:opacity-80"}`}>
                   {item.item}
                </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

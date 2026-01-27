"use client";

import { CraftingItem } from "./types";
import { useState } from "react";

interface SidebarProps {
  items: CraftingItem[];
  selectedItem: CraftingItem | null;
  onSelect: (item: CraftingItem) => void;
}

export default function Sidebar({ items, selectedItem, onSelect }: SidebarProps) {
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full md:w-1/3 lg:w-1/4 h-screen bg-[#1a2520]/80 backdrop-blur-md border-r border-[#3e5c4e]/50 flex flex-col overflow-hidden">
      <div className="p-4 bg-[#0d110f]/60 border-b border-[#3e5c4e]/50">
        <h2 className="text-2xl font-bold text-[#d8c8b0] mb-4">Crafting Guide</h2>
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-[#1a2520] text-[#e0e0e0] border border-[#3e5c4e] rounded px-3 py-2 outline-none focus:border-[#d97706] placeholder-opacity-50 placeholder-gray-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {filteredItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onSelect(item)}
            className={`w-full text-left px-4 py-3 rounded transition-all duration-200 flex items-center gap-3 ${
              selectedItem?.item === item.item
                ? "bg-[#2c4a3b] text-[#d97706] font-bold border-l-4 border-[#d97706]"
                : "hover:bg-[#23352a] text-[#d4d4d4] border-l-4 border-transparent"
            }`}
          >
            {/* Small thumbnail if needed, or just text */}
            <span className="truncate">{item.item}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

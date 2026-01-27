"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import RecipeDetail from "./RecipeDetail";
import { CraftingItem } from "./types";

interface CraftingLayoutProps {
  items: CraftingItem[];
}

import { LanguageProvider } from "./LanguageContext";

export default function CraftingLayout({ items }: CraftingLayoutProps) {
  return (
    <LanguageProvider>
      <CraftingLayoutContent items={items} />
    </LanguageProvider>
  );
}

function CraftingLayoutContent({ items }: CraftingLayoutProps) {
  const [selectedItem, setSelectedItem] = useState<CraftingItem | null>(null);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-transparent text-[#e0e0e0] font-sans">
      <Sidebar 
        items={items} 
        selectedItem={selectedItem} 
        onSelect={setSelectedItem} 
      />
      <RecipeDetail item={selectedItem} />
    </div>
  );
}

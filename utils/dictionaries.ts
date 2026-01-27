export type Language = "en" | "th";

export type Dictionary = {
  searchPlaceholder: string;
  craftingGuide: string;
  selectItem: string;
  selectItemDesc: string;
  ingredients: string;
  amount: string;
  craftButton: string;
  gatherTip: string;
  opensInMenu: string;
};

export const dictionaries: Record<Language, Dictionary> = {
  en: {
    // ... UI translations
    searchPlaceholder: "Search...",
    craftingGuide: "Crafting Guide",
    selectItem: "Select an Item",
    selectItemDesc: "Choose an item from the sidebar to view its crafting recipe.",
    ingredients: "Ingredients",
    amount: "Amount",
    craftButton: "CRAFT",
    gatherTip: "*Gather all ingredients to craft this item",
    opensInMenu: "Opens in Crafting Menu",
  },
  th: {
    // ... UI translations
    searchPlaceholder: "ค้นหา...",
    craftingGuide: "คู่มือการคราฟ",
    selectItem: "เลือกไอเทม",
    selectItemDesc: "เลือกไอเทมจากรายการด้านซ้ายเพื่อดูวิธีผสม",
    ingredients: "ส่วนผสม",
    amount: "จำนวน",
    craftButton: "สร้าง",
    gatherTip: "*รวบรวมส่วนผสมทั้งหมดเพื่อสร้างไอเทมนี้",
    opensInMenu: "เปิดในเมนูคราฟ",
  },
};

export const itemTranslations: Record<string, Record<Language, string>> = {
  "Armadillo Armor": { en: "Armadillo Armor", th: "เกราะตัวนิ่ม" },
  "Armor Mold": { en: "Armor Mold", th: "แม่พิมพ์เกราะ" },
  "Arrow": { en: "Arrow", th: "ลูกธนู" },
  "Arrow Mold": { en: "Arrow Mold", th: "แม่พิมพ์ลูกธนู" },
  "Ash Dressing": { en: "Ash Dressing", th: "ผ้าพันแผลเถ้า" },
  "Axe": { en: "Axe", th: "ขวาน" },
  "Axe Mold": { en: "Axe Mold", th: "แม่พิมพ์ขวาน" },
  "Aztec": { en: "Aztec", th: "ขวานแอซเท็ก" },
  "Bamboo": { en: "Bamboo", th: "ไม้ไผ่" },
  "Bamboo Armor": { en: "Bamboo Armor", th: "เกราะไม้ไผ่" },
  "Bamboo Bow": { en: "Bamboo Bow", th: "ธนูไม้ไผ่" },
  "Bamboo Spear": { en: "Bamboo Spear", th: "หอกไม้ไผ่" },
  "Blade Axe": { en: "Blade Axe", th: "ขวานใบมีด" },
  "Blade Mold": { en: "Blade Mold", th: "แม่พิมพ์ใบมีด" },
  "Bone Armor": { en: "Bone Armor", th: "เกราะกระดูก" },
  "Bone Axe": { en: "Bone Axe", th: "ขวานกระดูก" },
  "Bone Hook": { en: "Bone Hook", th: "เบ็ดกระดูก" },
  "Bone Knife": { en: "Bone Knife", th: "มีดกระดูก" },
  "Bone Spear": { en: "Bone Spear", th: "หอกกระดูก" },
  "Bow": { en: "Bow", th: "ธนู" },
  "Coconut Bidon": { en: "Coconut Bidon", th: "กระติกมะพร้าว" },
  "Fire Bow": { en: "Fire Bow", th: "ธนูจุดไฟ" },
  "Fish Hook": { en: "Fish Hook", th: "เบ็ดตกปลา" },
  "Fishing Rod": { en: "Fishing Rod", th: "เบ็ดตกปลา" },
  "Four Pronged": { en: "Four Pronged", th: "หอกสี่แฉก" },
  "Goliath Dressing": { en: "Goliath Dressing", th: "ผ้าพันแผลแมงมุม" },
  "Hand Drill": { en: "Hand Drill", th: "เครื่องจุดไฟมือหมุน" },
  "Heavy Stone Axe": { en: "Heavy Stone Axe", th: "ขวานหินหนัก" },
  "Honey Dressing": { en: "Honey Dressing", th: "ผ้าพันแผลน้ำผึ้ง" },
  "Leaf Armor": { en: "Leaf Armor", th: "เกราะใบไม้" },
  "Leaf Bandage": { en: "Leaf Bandage", th: "ผ้าพันแผลใบไม้" },
  "Lily Dressing": { en: "Lily Dressing", th: "ผ้าพันแผลลิลลี่" },
  "Metal Armor": { en: "Metal Armor", th: "เกราะเหล็ก" },
  "Metal Arrow": { en: "Metal Arrow", th: "ลูกธนูเหล็ก" },
  "Metal Axe": { en: "Metal Axe", th: "ขวานเหล็ก" },
  "Metal Blade": { en: "Metal Blade", th: "ใบมีดเหล็ก" },
  "Metal Pickaxe": { en: "Metal Pickaxe", th: "อีเตอร์เหล็ก" },
  "Metal Spear": { en: "Metal Spear", th: "หอกเหล็ก" },
  "Obsidian Axe": { en: "Obsidian Axe", th: "ขวานออบซิเดียน" },
  "Obsidian Blade": { en: "Obsidian Blade", th: "ใบมีดออบซิเดียน" },
  "Obsidian Spear": { en: "Obsidian Spear", th: "หอกออบซิเดียน" },
  "Poison Dart": { en: "Poison Dart", th: "ลูกดอกพิษ" },
  "Stick Armor": { en: "Stick Armor", th: "เกราะไม้" },
  "Stick Blade": { en: "Stick Blade", th: "ใบมีดไม้" },
  "Stone Axe": { en: "Stone Axe", th: "ขวานหิน" },
  "Stone Blade": { en: "Stone Blade", th: "ใบมีดหิน" },
  "Stone Pickaxe": { en: "Stone Pickaxe", th: "อีเตอร์หิน" },
  "Stone Spear": { en: "Stone Spear", th: "หอกหิน" },
  "Tobacco Dressing": { en: "Tobacco Dressing", th: "ผ้าพันแผลยาสูบ" },
  "Torch": { en: "Torch", th: "คบไฟ" },
  "Tribal Firestarter": { en: "Tribal Firestarter", th: "เครื่องจุดไฟเผ่า" },
  "Unfinished": { en: "Unfinished", th: "ยังไม่เสร็จ" },
  "Weak Spear": { en: "Weak Spear", th: "หอกธรรมดา" },
  "Weak Torch": { en: "Weak Torch", th: "คบไฟธรรมดา" },

  // Ingredients
  "Armadillo Shell": { en: "Armadillo Shell", th: "กระดองตัวนิ่ม" },
  "Ash": { en: "Ash", th: "เถ้า" },
  "Bamboo Stick": { en: "Bamboo Stick", th: "ไม้ไผ่" },
  "Banana Leaf": { en: "Banana Leaf", th: "ใบกล้วย" },
  "Big Stone": { en: "Big Stone", th: "หินก้อนใหญ่" },
  "Bone Needle": { en: "Bone Needle", th: "เข็มกระดูก" },
  "Brazil Nut Shell": { en: "Brazil Nut Shell", th: "เปลือกถั่วบราซิล" },
  "Coconut": { en: "Coconut", th: "มะพร้าว" },
  "Empty Mold": { en: "Empty Mold", th: "แม่พิมพ์เปล่า" },
  "Feather": { en: "Feather", th: "ขนนก" },
  "Fiber": { en: "Fiber", th: "เส้นใย" },
  "Fish Bone": { en: "Fish Bone", th: "ก้างปลา" },
  "Frog Stretcher": { en: "Frog Stretcher", th: "เครื่องถ่างกบ" },
  "Goliath Birdeater Ash": { en: "Goliath Birdeater Ash", th: "เถ้าแมงมุมยักษ์" },
  "Honeycomb": { en: "Honeycomb", th: "รังผึ้ง" },
  "Long Bamboo": { en: "Long Bamboo", th: "ไม้ไผ่ยาว" },
  "Long Stick": { en: "Long Stick", th: "ไม้ยาว" },
  "Melted Iron Ore": { en: "Melted Iron Ore", th: "แร่เหล็กหลอม" },
  "Metal Armor Cast": { en: "Metal Armor Cast", th: "แม่พิมพ์เกราะเหล็ก" },
  "Metal Arrowhead": { en: "Metal Arrowhead", th: "หัวลูกธนูเหล็ก" },
  "Molineria Leaf": { en: "Molineria Leaf", th: "ใบโมลิเนเรีย" },
  "Obsidian Stone": { en: "Obsidian Stone", th: "หินออบซิเดียน" },
  "Plank": { en: "Plank", th: "แผ่นไม้" },
  "Plantain Lily Leaf": { en: "Plantain Lily Leaf", th: "ใบลิลลี่" },
  "Rope": { en: "Rope", th: "เชือก" },
  "Small Stick": { en: "Small Stick", th: "ไม้เล็ก" },
  "Small Stone": { en: "Small Stone", th: "หินเล็ก" },
  "Stick": { en: "Stick", th: "ไม้" },
  "Tobacco Leaf": { en: "Tobacco Leaf", th: "ใบยาสูบ" },
  "Wood Resin": { en: "Wood Resin", th: "ยางไม้" },
};

export const t = (name: string, lang: Language): string => {
  return itemTranslations[name]?.[lang] || name;
};

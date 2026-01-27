import CraftingLayout from "@/components/CraftingLayout";
import { CraftingItem } from "@/components/types";
import path from "path";
import { promises as fs } from "fs";

async function getCraftingData(): Promise<CraftingItem[]> {
  const filePath = path.join(process.cwd(), "public", "assets", "crafting_data.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents);
}

export default async function Home() {
  const items = await getCraftingData();

  return (
    <main className="min-h-screen">
      <CraftingLayout items={items} />
    </main>
  );
}

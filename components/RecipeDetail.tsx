import { CraftingItem, Ingredient } from "./types";
import { useLanguage } from "./LanguageContext";
import { t } from "@/utils/dictionaries";

interface RecipeDetailProps {
  item: CraftingItem | null;
}

export default function RecipeDetail({ item }: RecipeDetailProps) {
  const { language, dict } = useLanguage();

  if (!item) {
    return (
      <div className="flex-1 flex items-center justify-center p-10 text-[#5c7a68] font-mali">
        <div className="text-center bg-black/40 p-8 rounded-xl backdrop-blur-sm border border-[#3e5c4e]/30">
          <h2 className="text-3xl font-bold mb-2">{dict.selectItem}</h2>
          <p>{dict.selectItemDesc}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 h-screen relative flex items-center justify-center p-6 md:p-12 overflow-hidden">
      
      {/* Main Content Container (Floating) */}
      <div className="relative w-full max-w-6xl animate-in fade-in zoom-in-95 duration-700 flex flex-col items-center">
        
        {/* Content Layer */}
        <div className="relative z-10 w-full flex flex-col items-center p-4">
            
            {/* Header Section */}
            <div className="w-full mb-12 md:mb-20 relative flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl font-bold text-[#f0e6d2] font-mali text-center tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                  {t(item.item, language)}
                </h1>
                <div className="w-32 h-1 bg-[#d97706] mt-4 rounded-full shadow-[0_0_10px_rgba(217,119,6,0.5)]"></div>
            </div>

            {/* Main Crafting Workspace */}
            <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-24">
                
                {/* Ingredients Row */}
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 bg-black/40 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm shadow-2xl">
                    {item.ingredients.map((ing: Ingredient, idx: number) => (
                        <div key={idx} className="flex items-center">
                            {/* Ingredient Item */}
                            <div className="flex flex-col items-center gap-4 group">
                                <div className="relative">
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-[#1a2520]/60 rounded-full border-2 border-[#5c7a68] flex items-center justify-center p-4 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:border-[#d97706]">
                                        <img 
                                            src={ing.image} 
                                            alt={ing.name} 
                                            className="w-full h-full object-contain drop-shadow-md"
                                        />
                                    </div>
                                    {/* Quantity Badge */}
                                    <div className="absolute -top-2 -right-2 bg-[#d97706] text-white w-8 h-8 flex items-center justify-center rounded-full font-bold font-mali shadow-lg border border-black/20">
                                        {ing.amount}
                                    </div>
                                </div>
                                <span className="text-[#d8c8b0] font-bold text-lg font-mali text-center drop-shadow-md group-hover:text-white transition-colors">
                                    {t(ing.name, language)}
                                </span>
                            </div>

                            {/* Plus Icon */}
                            {idx < item.ingredients.length - 1 && (
                                <div className="ml-8 md:ml-12 text-4xl text-[#8ba394] font-bold font-mali opacity-60">
                                    +
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Arrow */}
                <div className="hidden xl:block text-6xl text-[#d97706] font-bold font-mali opacity-80 animate-pulse">
                    ⟶
                </div>
                <div className="xl:hidden text-6xl text-[#d97706] font-bold font-mali opacity-80 animate-pulse transform rotate-90 my-4">
                    ⟶
                </div>

                {/* Final Product Section */}
                <div className="flex flex-col items-center gap-6 group">
                    <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-[#d97706]/20 blur-3xl rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-duration-500"></div>
                        
                        <div className="w-48 h-48 md:w-60 md:h-60 bg-gradient-to-br from-[#d97706]/20 to-black/40 rounded-[2rem] border-2 border-[#d97706]/50 flex items-center justify-center p-6 shadow-2xl backdrop-blur-md transition-transform duration-500 group-hover:scale-105 group-hover:border-[#d97706]">
                            <img 
                                src={item.image} 
                                alt={item.item} 
                                className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-10"
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer Tip */}
            <div className="mt-20 px-6 py-3 bg-black/30 rounded-full border border-white/5 backdrop-blur-md">
                <p className="text-[#8ba394] italic font-mali text-center text-lg">
                    {dict.gatherTip}
                </p>
            </div>

        </div>

      </div>
    </div>
  );
}

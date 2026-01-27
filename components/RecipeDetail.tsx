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
    <div className="flex-1 h-screen relative flex items-center justify-center p-6 md:p-16 overflow-hidden">
      
      {/* Journal Page Container */}
      <div className="relative w-full max-w-5xl h-[85vh] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] animate-in fade-in zoom-in-95 duration-700 flex flex-col items-center">
        
        {/* Parchment Background */}
        <div className="absolute inset-0 z-0">
           <img 
             src="/assets/journal_paper.png" 
             alt="Journal Page" 
             className="w-full h-full object-cover rounded-sm shadow-inner brightness-105 contrast-105"
           />
           {/* Vignette effect for depth */}
           <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col items-center p-12 md:p-20 overflow-y-auto custom-scrollbar">
            
            {/* Hand-drawn Header */}
            <div className="w-full mb-12 relative">
                <h1 className="text-4xl md:text-6xl font-black text-[#3d2b1f] font-mali text-center tracking-tight">
                {t(item.item, language)}
                </h1>
                <div className="w-48 h-1.5 bg-[#3d2b1f]/30 mx-auto mt-2 rounded-full transform -rotate-1"></div>
            </div>

            {/* Main Crafting Display */}
            <div className="flex-1 w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
                
                {/* Ingredients Container */}
                <div className="flex flex-wrap items-center justify-center gap-8 bg-[#3d2b1f]/5 p-8 rounded-3xl border-2 border-dashed border-[#3d2b1f]/20 backdrop-blur-[1px]">
                    {item.ingredients.map((ing: Ingredient, idx: number) => (
                        <div key={idx} className="flex items-center">
                            {/* Sketchy Slot */}
                            <div className="flex flex-col items-center gap-3 group">
                                <div className="relative">
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-[#fffdf0]/40 rounded-2xl border-2 border-[#3d2b1f]/40 flex items-center justify-center p-4 shadow-sm group-hover:scale-105 transition-all duration-300">
                                        <img 
                                            src={ing.image} 
                                            alt={ing.name} 
                                            className="w-full h-full object-contain filter drop-shadow-md brightness-90 contrast-110"
                                        />
                                    </div>
                                    {/* Handwritten Multiplier */}
                                    <div className="absolute -top-3 -right-3 bg-[#e6d5b8] text-[#3d2b1f] border-2 border-[#3d2b1f]/40 px-3 py-1 rounded-lg font-bold font-mali shadow-md text-lg rotate-3">
                                        x{ing.amount}
                                    </div>
                                </div>
                                <span className="text-[#3d2b1f] font-black text-lg font-mali text-center max-w-[120px] leading-tight">
                                    {t(ing.name, language)}
                                </span>
                            </div>

                            {/* Stylized Plus */}
                            {idx < item.ingredients.length - 1 && (
                                <div className="ml-8 text-4xl text-[#3d2b1f]/40 font-black font-mali opacity-50">
                                    +
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Hand-drawn Arrow */}
                <div className="flex flex-col items-center gap-2">
                    <div className="text-6xl text-[#3d2b1f]/60 font-black font-mali transform rotate-90 md:rotate-0 animate-pulse">
                        ⟶
                    </div>
                </div>

                {/* Result Section */}
                <div className="flex flex-col items-center gap-6 group">
                    <div className="relative">
                        {/* Glow effect for result */}
                        <div className="absolute inset-0 bg-[#d97706]/10 blur-2xl rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div className="w-40 h-40 md:w-56 md:h-56 bg-[#f7ebd4] rounded-full border-4 border-[#3d2b1f]/50 flex items-center justify-center p-6 shadow-xl relative overflow-hidden transition-transform group-hover:scale-110">
                            {/* Texture overlay for result bubble */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-mathematics.png')] opacity-10"></div>
                            <img 
                                src={item.image} 
                                alt={item.item} 
                                className="w-full h-full object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)] z-10"
                            />
                        </div>
                    </div>
                    <span className="text-3xl md:text-4xl font-black text-[#2c1a1a] font-mali text-center drop-shadow-sm">
                        {t(item.item, language)}
                    </span>
                </div>

            </div>

            {/* Note at bottom */}
            <div className="mt-12 w-full max-w-2xl py-6 px-10 border-t-2 border-[#3d2b1f]/10 flex items-center justify-center gap-4">
                <span className="text-3xl text-[#3d2b1f]/30 font-mali italic">“</span>
                <p className="text-[#3d2b1f]/70 italic font-mali text-center text-lg leading-relaxed">
                    {dict.gatherTip}
                </p>
                <span className="text-3xl text-[#3d2b1f]/30 font-mali italic transform rotate-180">“</span>
            </div>

        </div>

      </div>
    </div>
  );
}

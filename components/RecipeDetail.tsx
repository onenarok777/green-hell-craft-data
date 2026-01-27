import { CraftingItem } from "./types";

interface RecipeDetailProps {
  item: CraftingItem | null;
}

export default function RecipeDetail({ item }: RecipeDetailProps) {
  if (!item) {
    return (
      <div className="flex-1 flex items-center justify-center p-10 text-[#5c7a68]">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Select an Item</h2>
          <p>Choose an item from the sidebar to view its crafting recipe.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 h-screen relative flex flex-col items-center justify-center p-8">
      
      {/* Title */}
      <h1 className="text-5xl font-bold text-[#d8c8b0] mb-16 drop-shadow-md font-mali text-center">
        {item.item}
      </h1>

      {/* Crafting Equation Container */}
      <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-8 animate-in fade-in duration-700">
        
        {/* Ingredients Group */}
        <div className="flex flex-wrap items-center justify-center gap-4 bg-black/30 p-6 rounded-2xl backdrop-blur-sm border border-[#3e5c4e]/50">
          {item.ingredients.map((ing, idx) => (
            <div key={idx} className="flex items-center">
              {/* Ingredient Card */}
              <div className="flex flex-col items-center gap-2 group">
                <div className="w-24 h-24 bg-[#0f1a15]/80 rounded-full border-2 border-[#5c7a68] flex items-center justify-center p-2 shadow-lg transition-transform group-hover:scale-110">
                  <img 
                    src={ing.image} 
                    alt={ing.name} 
                    className="w-full h-full object-contain drop-shadow"
                  />
                </div>
                <div className="text-center">
                  <span className="block text-[#d8c8b0] font-bold text-lg">{ing.name}</span>
                  <span className="block text-[#8ba394] text-sm font-mali">Amount: {ing.amount}</span>
                </div>
              </div>

              {/* Plus Sign (if not last) */}
              {idx < item.ingredients.length - 1 && (
                <div className="mx-2 text-4xl text-[#d97706] font-bold font-mali drop-shadow-sm">
                  +
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Arrow / Equals */}
        <div className="text-6xl text-[#d97706] font-bold font-mali rotate-90 xl:rotate-0 drop-shadow-md px-4">
          →
        </div>

        {/* Result Item */}
        <div className="flex flex-col items-center gap-4 bg-[#d97706]/10 p-8 rounded-3xl border-2 border-[#d97706]/50 shadow-2xl relative overflow-hidden">
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
          
          <div className="w-40 h-40 flex items-center justify-center">
             <img 
              src={item.image} 
              alt={item.item} 
              className="w-full h-full object-contain drop-shadow-2xl filter brightness-110"
            />
          </div>
          <div className="text-center z-10">
             <span className="block text-white font-bold text-2xl tracking-wide">{item.item}</span>
             <button className="mt-4 bg-[#d97706] hover:bg-[#b45309] text-black font-bold py-2 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 font-mali">
               CRAFT
             </button>
          </div>
        </div>

      </div>
      
      {/* Instruction Tip */}
      <p className="mt-16 text-[#8ba394]/70 italic font-mali">
        *Gather all ingredients to craft this item
      </p>

    </div>
  );
}

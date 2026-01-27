export interface Ingredient {
  name: string;
  amount: string;
  image: string;
}

export interface CraftingItem {
  item: string;
  image: string;
  ingredients: Ingredient[];
}

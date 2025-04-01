
export interface Recipe {
  id: string;
  title: string;
  image: string;
  country: string;
  cuisine: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: Ingredient[];
  instructions: string[];
  ratings?: number;
}

export interface Ingredient {
  name: string;
  amount: string;
  unit: string;
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  image: string;
  description: string;
}

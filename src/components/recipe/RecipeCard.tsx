
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Clock, Utensils, Star, BookOpen } from 'lucide-react';
import { Recipe } from '@/types';
import { Badge } from '@/components/ui/badge';
import { recipes } from '@/data/recipes';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const totalTime = recipe.prepTime + recipe.cookTime;
  
  // Count recipes from the same country
  const recipeCount = recipes.filter(r => 
    r.country.toLowerCase() === recipe.country.toLowerCase()
  ).length;
  
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-full text-xs font-medium">
            {recipe.country}
          </div>
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              <span>{recipeCount} recipes</span>
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-bold text-lg mb-2 line-clamp-2 text-foodify-dark">{recipe.title}</h3>
          
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <div className="mr-4 flex items-center">
              <Clock className="h-4 w-4 mr-1 text-foodify-primary" />
              <span>{totalTime} min</span>
            </div>
            <div className="flex items-center">
              <Utensils className="h-4 w-4 mr-1 text-foodify-primary" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 flex items-center justify-between border-t">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
            <span className="text-sm font-medium">{recipe.ratings}</span>
          </div>
          <span className="text-foodify-primary text-sm font-medium">View Recipe</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RecipeCard;

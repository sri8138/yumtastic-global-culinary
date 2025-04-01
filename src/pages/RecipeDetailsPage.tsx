
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, ChefHat, Heart, Share2, Bookmark, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';
import { Recipe } from '@/types';
import { recipes } from '@/data/recipes';

const RecipeDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchRecipe = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        const foundRecipe = recipes.find(recipe => recipe.id === id);
        setRecipe(foundRecipe);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 w-2/3 bg-gray-200 rounded mb-6"></div>
            <div className="h-64 bg-gray-200 rounded mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="h-40 bg-gray-200 rounded"></div>
              <div className="h-40 bg-gray-200 rounded"></div>
              <div className="h-40 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!recipe) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Recipe Not Found</h1>
          <p className="text-gray-600 mb-6">The recipe you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Recipe Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foodify-dark">{recipe.title}</h1>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="outline" className="flex items-center gap-1 text-sm py-1">
              <div className="text-foodify-primary font-bold">{recipe.country}</div>
            </Badge>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
              <span className="text-sm font-medium">{recipe.ratings}/5</span>
            </div>
          </div>
        </div>

        {/* Recipe Image */}
        <div className="relative mb-8 rounded-xl overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute top-4 right-4 flex space-x-2">
            <Button size="icon" variant="secondary" className="rounded-full bg-white shadow-md">
              <Heart className="h-5 w-5 text-foodify-secondary" />
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full bg-white shadow-md">
              <Bookmark className="h-5 w-5 text-foodify-dark" />
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full bg-white shadow-md">
              <Share2 className="h-5 w-5 text-foodify-dark" />
            </Button>
          </div>
        </div>

        {/* Recipe Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-foodify-neutral p-4 rounded-lg flex items-center justify-center">
            <Clock className="h-6 w-6 text-foodify-primary mr-3" />
            <div>
              <p className="text-sm text-gray-600">Prep Time</p>
              <p className="font-semibold">{recipe.prepTime} min</p>
            </div>
          </div>
          <div className="bg-foodify-neutral p-4 rounded-lg flex items-center justify-center">
            <Clock className="h-6 w-6 text-foodify-primary mr-3" />
            <div>
              <p className="text-sm text-gray-600">Cook Time</p>
              <p className="font-semibold">{recipe.cookTime} min</p>
            </div>
          </div>
          <div className="bg-foodify-neutral p-4 rounded-lg flex items-center justify-center">
            <Users className="h-6 w-6 text-foodify-primary mr-3" />
            <div>
              <p className="text-sm text-gray-600">Servings</p>
              <p className="font-semibold">{recipe.servings}</p>
            </div>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-4 flex items-center text-foodify-dark">
                <ChefHat className="h-5 w-5 mr-2 text-foodify-primary" />
                Ingredients
              </h2>
              <Separator className="mb-4" />
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-foodify-primary mt-2 mr-3"></div>
                    <span>
                      <span className="font-medium">{ingredient.amount} {ingredient.unit}</span> {ingredient.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4 text-foodify-dark">Instructions</h2>
              <Separator className="mb-4" />
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-foodify-primary text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <p className="pt-1">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RecipeDetailsPage;

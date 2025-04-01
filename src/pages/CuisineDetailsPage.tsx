
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import RecipeCard from '@/components/recipe/RecipeCard';
import { Country } from '@/types';
import { countries } from '@/data/countries';
import { recipes } from '@/data/recipes';

const CuisineDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [country, setCountry] = useState<Country | undefined>();
  const [cuisineRecipes, setCuisineRecipes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchData = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const foundCountry = countries.find(c => c.id === id);
        setCountry(foundCountry);
        
        if (foundCountry) {
          const relatedRecipes = recipes.filter(recipe => 
            recipe.country.toLowerCase() === foundCountry.name.toLowerCase()
          );
          setCuisineRecipes(relatedRecipes);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 w-2/3 bg-gray-200 rounded mb-6"></div>
            <div className="h-60 bg-gray-200 rounded mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="h-60 bg-gray-200 rounded"></div>
              <div className="h-60 bg-gray-200 rounded"></div>
              <div className="h-60 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!country) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Cuisine Not Found</h1>
          <p className="text-gray-600 mb-6">The cuisine you're looking for doesn't exist or has been removed.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative h-[300px] mb-10 rounded-xl overflow-hidden">
          <img 
            src={country.image} 
            alt={country.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2 flex items-center">
              {country.flag} {country.name} Cuisine
            </h1>
            <p className="max-w-2xl text-white/90">
              {country.description}
            </p>
          </div>
        </div>
        
        {/* Recipes Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-6">
            Popular {country.name} Recipes
          </h2>
          
          {cuisineRecipes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cuisineRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-foodify-neutral rounded-lg">
              <h3 className="text-xl font-medium mb-2">No recipes found</h3>
              <p className="text-gray-600">We're working on adding {country.name} recipes. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CuisineDetailsPage;


import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import RecipeCard from '@/components/recipe/RecipeCard';
import { recipes } from '@/data/recipes';

const PopularPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sort recipes by rating (highest first)
  const sortedRecipes = [...recipes].sort((a, b) => {
    return (b.ratings || 0) - (a.ratings || 0);
  });
  
  const filteredRecipes = sortedRecipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Popular <span className="text-foodify-primary">Recipes</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our community's favorite recipes from around the world, 
            rated and reviewed by food enthusiasts like you.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search" 
            placeholder="Search recipes or cuisines..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Recipes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
        
        {filteredRecipes.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium mb-2">No recipes found</h3>
            <p className="text-gray-600">Try adjusting your search query</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PopularPage;

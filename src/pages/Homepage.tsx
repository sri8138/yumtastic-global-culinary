
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import RecipeCard from '@/components/recipe/RecipeCard';
import CountryCard from '@/components/recipe/CountryCard';
import { recipes } from '@/data/recipes';
import { countries } from '@/data/countries';

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const featuredRecipes = recipes.slice(0, 4);
  const popularCuisines = countries.slice(0, 4);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would redirect to search results page
    console.log("Searching for:", searchQuery);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-foodify-dark text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Various foods on a table" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover <span className="text-foodify-primary">Delicious</span> Recipes From Around The World
            </h1>
            <p className="text-lg mb-8">
              Explore recipes with detailed ingredients, measurements, and step-by-step instructions.
            </p>
            
            <form onSubmit={handleSearch} className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
              <Input
                type="search"
                placeholder="Search for recipes, ingredients, cuisines..."
                className="pl-10 bg-white text-black rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            
            <div className="flex flex-wrap gap-3">
              <Link to="/cuisines">
                <Button className="bg-foodify-primary hover:bg-foodify-primary/90">
                  Explore Cuisines
                </Button>
              </Link>
              <Link to="/popular">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Popular Recipes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Recipes */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Recipes</h2>
          <Link to="/popular" className="text-foodify-primary hover:underline flex items-center">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
      
      {/* World Cuisines */}
      <section className="bg-foodify-neutral py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Explore World Cuisines</h2>
            <Link to="/cuisines" className="text-foodify-primary hover:underline flex items-center">
              View all <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {popularCuisines.map((country) => (
              <CountryCard key={country.id} country={country} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to start your culinary journey?
          </h2>
          <p className="text-gray-600 mb-8">
            Create an account to save your favorite recipes, create custom collections, and share your cooking adventures.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/signup">
              <Button className="bg-foodify-primary hover:bg-foodify-primary/90">
                Sign Up for Free
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline">
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage;

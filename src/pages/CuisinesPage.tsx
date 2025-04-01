
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import CountryCard from '@/components/recipe/CountryCard';
import { countries } from '@/data/countries';

const CuisinesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Explore <span className="text-foodify-primary">Global</span> Cuisines
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover and explore cuisines from around the world, each with its unique flavors, 
            techniques, and traditional recipes.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search" 
            placeholder="Search cuisines..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCountries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
        
        {filteredCountries.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium mb-2">No cuisines found</h3>
            <p className="text-gray-600">Try adjusting your search query</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CuisinesPage;


import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Country } from '@/types';

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Link to={`/cuisine/${country.id}`}>
      <Card className="overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-1">
        <div className="relative h-36 overflow-hidden">
          <img 
            src={country.image} 
            alt={country.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-3 text-white">
            <span className="text-xl mr-2">{country.flag}</span>
            <span className="font-bold text-lg">{country.name}</span>
          </div>
        </div>
        
        <CardContent className="p-4">
          <p className="text-sm text-gray-600 line-clamp-2">{country.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CountryCard;

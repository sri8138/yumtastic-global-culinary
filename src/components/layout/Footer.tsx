
import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foodify-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-foodify-primary" />
              <span className="text-2xl font-bold">
                <span className="text-foodify-primary">Food</span>ify
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Discover delicious recipes from around the world with detailed instructions and measurements.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cuisines" className="text-gray-300 hover:text-foodify-primary text-sm">
                  Cuisines
                </Link>
              </li>
              <li>
                <Link to="/popular" className="text-gray-300 hover:text-foodify-primary text-sm">
                  Popular Recipes
                </Link>
              </li>
              <li>
                <Link to="/latest" className="text-gray-300 hover:text-foodify-primary text-sm">
                  Latest Additions
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-foodify-primary text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-foodify-primary text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-foodify-primary text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-foodify-primary text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-foodify-primary text-sm">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-foodify-primary text-sm">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-foodify-primary text-sm">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-foodify-primary text-sm">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {currentYear} Foodify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

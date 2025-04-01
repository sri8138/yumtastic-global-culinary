
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Search, 
  ChefHat, 
  User
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Will be replaced with real auth state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-foodify-primary" />
            <span className="text-2xl font-bold text-foodify-dark">
              <span className="text-foodify-primary">Food</span>ify
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-foodify-dark hover:text-foodify-primary font-medium">
              Home
            </Link>
            <Link to="/cuisines" className="text-foodify-dark hover:text-foodify-primary font-medium">
              Cuisines
            </Link>
            <Link to="/popular" className="text-foodify-dark hover:text-foodify-primary font-medium">
              Popular
            </Link>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search recipes..."
                className="w-[200px] pl-9 rounded-full bg-muted"
              />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {isLoggedIn ? (
              <Button variant="ghost" className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Button>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Log in</Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-foodify-primary hover:bg-foodify-primary/90">Sign up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="text-foodify-dark"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 space-y-3">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search recipes..."
                className="w-full pl-9 rounded-full bg-muted"
              />
            </div>
            <Link 
              to="/" 
              className="block py-2 text-foodify-dark hover:text-foodify-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/cuisines" 
              className="block py-2 text-foodify-dark hover:text-foodify-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Cuisines
            </Link>
            <Link 
              to="/popular" 
              className="block py-2 text-foodify-dark hover:text-foodify-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Popular
            </Link>
            <div className="pt-2 border-t border-gray-100 flex flex-col space-y-2">
              {isLoggedIn ? (
                <Button className="flex items-center justify-center space-x-2 bg-foodify-primary hover:bg-foodify-primary/90">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Button>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full" variant="outline">Log in</Button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-foodify-primary hover:bg-foodify-primary/90">Sign up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

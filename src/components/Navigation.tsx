
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Categories', path: '/categories' },
    { name: 'Contact', path: '/contact' }
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="backdrop-blur-md border-b border-navy-200 sticky top-0 z-50 bg-white/95 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-serif font-bold text-2xl text-navy-800 hover:text-navy-900 transition-colors"
          >
            honestly, harshita
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-sans font-medium transition-all duration-200 px-3 py-2 rounded-lg ${
                  isActive(item.path)
                    ? 'text-navy-800 bg-navy-100'
                    : 'text-gray-700 hover:text-navy-700 hover:bg-cream-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-navy-700 transition-colors p-2 rounded-lg hover:bg-cream-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-in">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-white/95 border-t border-navy-200 backdrop-blur-sm">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive(item.path)
                      ? 'text-navy-800 bg-navy-100'
                      : 'text-gray-700 hover:text-navy-700 hover:bg-cream-100'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

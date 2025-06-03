import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Journal',
    path: '/journal'
  }, {
    name: 'Categories',
    path: '/categories'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="backdrop-blur-md border-b border-navy-200 sticky top-0 z-50 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 bg-gray-100">
          {/* Logo */}
          <Link to="/" className="font-mono font-bold text-xl text-navy-800 hover:text-navy-900 transition-colors">
            honestly, harshita
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`font-grotesk font-medium transition-colors duration-200 ${isActive(item.path) ? 'text-navy-800 border-b-2 border-navy-600' : 'text-gray-700 hover:text-navy-700'}`}>
                {item.name}
              </Link>)}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-navy-700 transition-colors">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden animate-slide-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-navy-200">
              {navItems.map(item => <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.path) ? 'text-navy-800 bg-navy-50' : 'text-gray-700 hover:text-navy-700 hover:bg-navy-50'}`}>
                  {item.name}
                </Link>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;
import React, { useState, useEffect } from 'react';
import { Menu, X, Users, ChevronDown } from 'lucide-react';
import Container from './Container';
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white text-gray-700' : 'bg-transparent text-white'
      }`}
    >
      <Container>
        <div className="flex items-center py-[3px] justify-between">
          <div className="flex items-center">
            <Users className={`h-8 w-8 ${isScrolled ? 'text-blue-700' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>SHK + Haustechnik Community</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#vorteile" className={`hover:text-blue-700 font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Vorteile</a>
            <a href="#testimoinals" className={`hover:text-blue-700 font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Erfahrungen</a>
            <a href="#faq" className={`hover:text-blue-700 font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>FAQ</a>
            <Button variant="primary" onClick={() => window.location.href = 'https://netzwerk.shk-community.de'}>Mitglied werden</Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'} focus:outline-none`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3 bg-blue-900 rounded-lg mt-2">
            <a
              href="#vorteile"
              className="block py-2 px-4 text-white hover:bg-blue-800 rounded"
              onClick={toggleMenu}
            >
              Vorteile
            </a>
            <a
              href="#testimoinals"
              className="block py-2 px-4 text-white hover:bg-blue-800 rounded"
              onClick={toggleMenu}
            >
              Erfahrungen
            </a>
            <a
              href="#faq"
              className="block py-2 px-4 text-white hover:bg-blue-800 rounded"
              onClick={toggleMenu}
            >
              FAQ
            </a>
            <div className="pt-2 px-4">
              <Button 
                variant="primary" 
                className="w-full"
                onClick={() => window.location.href = 'https://netzwerk.shk-community.de'}
              >
                Mitglied werden
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
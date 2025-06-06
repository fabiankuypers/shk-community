import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import Container from './Container';
import Button from './Button';
import PaymentModal from './PaymentModal';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

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

  const handleCTAClick = () => {
    setIsPaymentModalOpen(true);
  };

  return (
    <>
      <header
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white text-gray-700 shadow-md' : 'bg-transparent text-white'
        }`}
      >
        <Container>
          <div className="flex items-center py-3 justify-between">
            {/* Logo - Hidden on mobile */}
            <div className="hidden md:flex items-center">
              <Users className={`h-8 w-8 ${isScrolled ? 'text-blue-700' : 'text-white'}`} />
              <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                SHK + Haustechnik Community
              </span>
            </div>

            {/* Mobile Logo - Centered */}
            <div className="md:hidden flex-1 flex justify-center">
              <div className="flex items-center">
                <Users className={`h-6 w-6 ${isScrolled ? 'text-blue-700' : 'text-white'}`} />
                <span className={`ml-2 text-lg font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                  SHK Community
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#vorteile" className={`hover:text-blue-700 font-medium transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                Vorteile
              </a>
              <a href="#testimoinals" className={`hover:text-blue-700 font-medium transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                Erfahrungen
              </a>
              <a href="#faq" className={`hover:text-blue-700 font-medium transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                FAQ
              </a>
              <Button variant="primary" onClick={handleCTAClick} animate={true}>
                Mitglied werden
              </Button>
            </nav>

            {/* Mobile CTA Button */}
            <div className="md:hidden">
              <Button 
                variant="primary" 
                size="sm"
                onClick={handleCTAClick}
                className="text-sm px-3 py-2"
              >
                Beitreten
              </Button>
            </div>
          </div>
        </Container>
      </header>

      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)} 
      />
    </>
  );
};

export default Header;
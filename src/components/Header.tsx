import React, { useState, useEffect } from 'react';
import { Users, ArrowLeft } from 'lucide-react';
import Container from './Container';
import Button from './Button';
import PaymentModal from './PaymentModal';

type HeaderProps = {
  showBackButton?: boolean;
  backButtonText?: string;
};

const Header: React.FC<HeaderProps> = ({ 
  showBackButton = false, 
  backButtonText = "Zurück zur Startseite" 
}) => {
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

  const handleBackClick = () => {
    window.location.href = '/';
  };

  return (
    <>
      <header
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white text-gray-700 shadow-md' : 'bg-white text-gray-700 shadow-md'
        }`}
      >
        <Container>
          <div className="flex items-center py-3 justify-between">
            {/* Back Button or Logo - Desktop */}
            <div className="hidden md:flex items-center">
              {showBackButton ? (
                <button
                  onClick={handleBackClick}
                  className="flex items-center text-blue-700 hover:text-blue-900 transition-colors group"
                >
                  <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-medium">{backButtonText}</span>
                </button>
              ) : (
                <>
                  <Users className="h-8 w-8 text-blue-700" />
                  <span className="ml-2 text-xl font-bold text-blue-900">
                    SHK + Haustechnik Community
                  </span>
                </>
              )}
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex items-center justify-between w-full">
              {showBackButton ? (
                <>
                  {/* Back Button - Mobile */}
                  <button
                    onClick={handleBackClick}
                    className="flex items-center text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5 mr-1" />
                    <span className="text-sm font-medium">Zurück</span>
                  </button>
                  
                  {/* Logo - Mobile Center */}
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-blue-700" />
                    <span className="ml-2 text-lg font-bold text-blue-900">
                      SHK Community
                    </span>
                  </div>
                  
                  {/* CTA Button - Mobile */}
                  <Button 
                    variant="primary" 
                    size="sm"
                    onClick={handleCTAClick}
                    className="text-sm px-3 py-2"
                  >
                    Beitreten
                  </Button>
                </>
              ) : (
                <>
                  {/* Regular mobile layout for homepage */}
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center">
                      <Users className="h-6 w-6 text-blue-700" />
                      <span className="ml-2 text-lg font-bold text-blue-900">
                        SHK Community
                      </span>
                    </div>
                  </div>
                  <Button 
                    variant="primary" 
                    size="sm"
                    onClick={handleCTAClick}
                    className="text-sm px-3 py-2"
                  >
                    Beitreten
                  </Button>
                </>
              )}
            </div>

            {/* Desktop Navigation */}
            {!showBackButton && (
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#vorteile" className="hover:text-blue-700 font-medium transition-colors text-gray-700">
                  Vorteile
                </a>
                <a href="#testimoinals" className="hover:text-blue-700 font-medium transition-colors text-gray-700">
                  Erfahrungen
                </a>
                <a href="#faq" className="hover:text-blue-700 font-medium transition-colors text-gray-700">
                  FAQ
                </a>
                <Button variant="primary" onClick={handleCTAClick} animate={true}>
                  Mitglied werden
                </Button>
              </nav>
            )}

            {/* CTA Button for subpages - Desktop */}
            {showBackButton && (
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="primary" onClick={handleCTAClick} animate={true}>
                  Mitglied werden
                </Button>
              </div>
            )}
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
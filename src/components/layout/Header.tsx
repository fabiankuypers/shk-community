import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users, ArrowLeft } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import PaymentModal from '../modals/PaymentModal';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
          isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-md'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-3">
            {/* Logo / Back Button */}
            <div className="flex items-center">
              {!isHomePage ? (
                <Link
                  to="/"
                  className="flex items-center text-blue-700 hover:text-blue-900 transition-colors group mr-4"
                >
                  <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-medium hidden md:inline">Zurück zur Startseite</span>
                  <span className="font-medium md:hidden">Zurück</span>
                </Link>
              ) : null}
              
              <Link to="/" className="flex items-center">
                <Users className="h-8 w-8 text-blue-700" />
                <span className="ml-2 text-xl font-bold text-blue-900 hidden sm:inline">
                  SHK + Haustechnik Community
                </span>
                <span className="ml-2 text-lg font-bold text-blue-900 sm:hidden">
                  SHK Community
                </span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-4">
              {isHomePage && (
                <div className="hidden md:flex items-center space-x-6 mr-4">
                  <a href="#vorteile" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
                    Vorteile
                  </a>
                  <a href="#testimonials" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
                    Erfahrungen
                  </a>
                  <a href="#faq" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
                    FAQ
                  </a>
                </div>
              )}
              
              <Button 
                variant="primary" 
                onClick={handleCTAClick}
                animate={isHomePage}
                size={isHomePage ? "md" : "sm"}
              >
                Mitglied werden
              </Button>
            </nav>
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
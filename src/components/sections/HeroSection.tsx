import React, { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import PaymentModal from '../modals/PaymentModal';

const HeroSection: React.FC = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleCTAClick = () => {
    setIsPaymentModalOpen(true);
  };

  return (
    <>
      <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 -top-96 w-96 h-96 rounded-full bg-orange-500"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-blue-400"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Die Austauschplattform für moderne SHK- und Elektrobetriebe
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Von anderen lernen, statt teuer zu experimentieren – in der Community für moderne SHK- und Elektro-Unternehmen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={handleCTAClick}
                animate={true}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-lg font-semibold">Jetzt Mitglied werden</span>
                <span className="text-sm font-normal opacity-80">3 Monate kostenfrei – danach 9 €/Monat</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 focus:ring-white" 
                onClick={() => {
                  const element = document.getElementById('vorteile');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Mehr erfahren
              </Button>
            </div>
          </div>
        </Container>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;
import React, { useState } from 'react';
import Container from './Container';
import Button from './Button';
import PaymentModal from './PaymentModal';

const CTASection: React.FC = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleCTAClick = () => {
    setIsPaymentModalOpen(true);
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Bereit, Teil unserer Community zu werden?</h2>
            <p className="text-xl mb-8">
              Tauschen Sie sich mit Gleichgesinnten aus der SHK- und Elektrobranche aus und profitieren Sie von geprüften Lösungen für Ihr Unternehmen.
            </p>
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
          </div>
        </Container>
      </section>

      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)} 
      />
    </>
  );
};

export default CTASection;
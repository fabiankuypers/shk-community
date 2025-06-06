import React from 'react';
import Button from './Button';

const CtaSectionMini: React.FC = () => {
  return (
    <div className="flex justify-center mb-16">
      <Button
        variant="primary"
        size="lg"
        onClick={() => (window.location.href = 'https://netzwerk.shk-community.de')}
        className="flex flex-col items-center gap-1"
      >
        <span className="text-lg font-semibold">Jetzt Mitglied werden</span>
        <span className="text-sm font-normal opacity-80">
          3 Monate kostenfrei – danach 9 €/Monat
        </span>
      </Button>
    </div>
  );
};

export default CtaSectionMini;
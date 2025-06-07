import React from 'react';
import { X } from 'lucide-react';

type PaymentModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[95vh] flex flex-col">
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
          <h2 className="text-xl font-semibold text-gray-900">Mitgliedschaft abschließen</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        {/* Content - Scrollable */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src="https://link.ai-marketing24.com/payment-link/6842a4790263aeebee7806f9"
            className="w-full h-full border-0"
            title="Mitgliedschaft Payment"
            style={{ minHeight: '600px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
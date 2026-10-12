import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CLINICAL_INFO } from '../data/content';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const [showHelper, setShowHelper] = useState(true);

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${CLINICAL_INFO.whatsappUrl}?text=Ol%C3%A1%2C%20Michele!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20agendamento%20de%20sess%C3%B5es%20de%20psicoterapia.`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-300"
    >
      {showHelper && (
        <div className="hidden md:flex bg-white py-2 px-3.5 rounded-full border border-[#c3c8c0]/60 shadow-md text-[#1d1b17] font-sans text-xs font-medium items-center gap-2 relative group">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
          <button
            type="button"
            onClick={onOpenBooking}
            className="hover:text-[#485e4a] transition-colors cursor-pointer text-left"
          >
            Precisa de ajuda para agendar?
          </button>
          <button
            type="button"
            onClick={() => setShowHelper(false)}
            aria-label="Fechar dica"
            className="text-[#737972] hover:text-[#1d1b17] ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={handleWhatsApp}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        title={`Falar no WhatsApp (${CLINICAL_INFO.phoneDisplay})`}
        aria-label="Abrir conversa no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </aside>
  );
};

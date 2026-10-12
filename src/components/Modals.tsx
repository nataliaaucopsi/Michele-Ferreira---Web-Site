import React, { useState } from 'react';
import { X, MessageCircle, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { ReflectionArticle, Specialty, CLINICAL_INFO } from '../data/content';

interface ModalsProps {
  bookingOpen: boolean;
  onCloseBooking: () => void;
  selectedArticle: ReflectionArticle | null;
  onCloseArticle: () => void;
  selectedSpecialty: Specialty | null;
  onCloseSpecialty: () => void;
  ethicsModal: { isOpen: boolean; title: string; content: string };
  onCloseEthics: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  bookingOpen,
  onCloseBooking,
  selectedArticle,
  onCloseArticle,
  selectedSpecialty,
  onCloseSpecialty,
  ethicsModal,
  onCloseEthics,
}) => {
  // Booking Form State
  const [patientName, setPatientName] = useState('');
  const [patientContact, setPatientContact] = useState('');
  const [patientShift, setPatientShift] = useState('tarde');
  const [patientModality, setPatientModality] = useState('Online');
  const [patientTopic, setPatientTopic] = useState('');

  const submitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá, Michele! Gostaria de agendar uma primeira sessão de psicoterapia.`;
    if (patientName.trim()) {
      text = `Olá, Michele! Meu nome é ${patientName.trim()}.\nModalidade: ${patientModality}\nMelhor período: ${patientShift}`;
      if (patientContact.trim()) {
        text += `\nContato: ${patientContact.trim()}`;
      }
      if (patientTopic.trim()) {
        text += `\nTema principal: ${patientTopic.trim()}`;
      }
    }
    const url = `https://wa.me/${CLINICAL_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onCloseBooking();
  };

  return (
    <>
      {/* 1. AGENDAR CONSULTA MODAL */}
      {bookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#c3c8c0]/60 shadow-xl relative animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={onCloseBooking}
              className="absolute top-5 right-5 p-2 rounded-full text-[#434842] hover:bg-[#f2ede6] transition-colors cursor-pointer"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#d0e5d8] flex items-center justify-center text-[#485e4a]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs text-[#485e4a] font-medium tracking-wide">
                  PRIMEIRO PASSO
                </span>
                <h3 className="font-serif text-2xl text-[#1d1b17] font-medium leading-none">
                  Agendar Primeira Conversa
                </h3>
              </div>
            </div>

            <p className="font-sans text-sm text-[#434842] mb-6 leading-relaxed">
              Preencha os campos abaixo para iniciar seu atendimento diretamente pelo WhatsApp ({CLINICAL_INFO.phoneDisplay}) de forma prática, acolhedora e confidencial.
            </p>

            <form onSubmit={submitBooking} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1d1b17] mb-1">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Como deseja ser chamado(a)?"
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#c3c8c0] bg-[#fef9f1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#485e4a]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1d1b17] mb-1">
                    Modalidade
                  </label>
                  <select
                    value={patientModality}
                    onChange={(e) => setPatientModality(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#c3c8c0] bg-[#fef9f1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#485e4a]"
                  >
                    <option value="Online">Online (Videochamada)</option>
                    <option value="Presencial">Presencial (Consultório)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1d1b17] mb-1">
                    Turno de Preferência
                  </label>
                  <select
                    value={patientShift}
                    onChange={(e) => setPatientShift(e.target.value)}
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#c3c8c0] bg-[#fef9f1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#485e4a]"
                  >
                    <option value="Manhã (08h às 12h)">Manhã</option>
                    <option value="Tarde (13h às 18h)">Tarde</option>
                    <option value="Noite (18h às 21h)">Noite</option>
                    <option value="Horário flexível">Flexível</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d1b17] mb-1">
                  Motivo da busca ou dúvida (opcional)
                </label>
                <input
                  type="text"
                  value={patientTopic}
                  onChange={(e) => setPatientTopic(e.target.value)}
                  placeholder="Ex: Ansiedade, mudança de país, sobrecarga..."
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#c3c8c0] bg-[#fef9f1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#485e4a]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 rounded-lg font-sans text-sm font-semibold transition-all shadow-sm cursor-pointer active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Prosseguir para o WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-xs text-[#434842]/80 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#485e4a]" />
                <span>Sigilo e ética em consonância com o CFP.</span>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. LEITURA COMPLETA DO ARTIGO REFLEXÕES */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 border border-[#c3c8c0]/60 shadow-xl relative animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={onCloseArticle}
              className="absolute top-6 right-6 p-2 rounded-full text-[#434842] hover:bg-[#f2ede6] transition-colors cursor-pointer"
              aria-label="Fechar artigo"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 font-mono text-xs text-[#485e4a] mb-3">
              <span>{selectedArticle.category}</span>
              <span>·</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#1d1b17] font-medium mb-4 leading-tight">
              {selectedArticle.title}
            </h3>

            <div className="font-sans text-xs text-[#434842] pb-6 mb-6 border-b border-[#c3c8c0]/40">
              {selectedArticle.author}
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#1d1b17]/90 font-serif leading-relaxed">
              {selectedArticle.fullContent.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#c3c8c0]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-sans text-xs text-[#434842]">
                Identificou-se com essa reflexão?
              </span>
              <button
                onClick={() => {
                  onCloseArticle();
                  const text = `Olá, Michele! Li o seu texto sobre "${selectedArticle.title}" e gostaria de conversar a respeito.`;
                  window.open(`https://wa.me/${CLINICAL_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
                }}
                className="inline-flex items-center gap-2 bg-[#607762] hover:bg-[#506358] text-white px-5 py-2.5 rounded-lg text-xs font-semibold cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Conversar com a psicóloga</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. MODAL DE ESPECIALIDADE CLÍNICA */}
      {selectedSpecialty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#c3c8c0]/60 shadow-xl relative animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={onCloseSpecialty}
              className="absolute top-5 right-5 p-2 rounded-full text-[#434842] hover:bg-[#f2ede6] transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-mono text-xs text-[#485e4a] font-medium tracking-wider uppercase block mb-1">
              Abordagem Clínica
            </span>

            <h3 className="font-serif text-3xl text-[#1d1b17] font-medium mb-3">
              {selectedSpecialty.title}
            </h3>

            <p className="font-sans text-sm text-[#434842] font-medium mb-4 italic text-[#607762]">
              {selectedSpecialty.description}
            </p>

            <div className="p-4 rounded-xl bg-[#f8f3ec] border border-[#c3c8c0]/40 text-sm text-[#1d1b17] leading-relaxed mb-6 font-sans">
              {selectedSpecialty.detailedText}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onCloseSpecialty();
                  const text = `Olá, Michele! Gostaria de falar sobre acompanhamento psicológico para ${selectedSpecialty.title}.`;
                  window.open(`https://wa.me/${CLINICAL_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar para este tema</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. MODAL DE ÉTICA E TERMOS */}
      {ethicsModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#c3c8c0]/60 shadow-xl relative animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={onCloseEthics}
              className="absolute top-5 right-5 p-2 rounded-full text-[#434842] hover:bg-[#f2ede6] transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-10 h-10 rounded-full bg-[#d0e5d8] flex items-center justify-center text-[#485e4a] mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>

            <h3 className="font-serif text-2xl text-[#1d1b17] font-medium mb-4 leading-snug">
              {ethicsModal.title}
            </h3>

            <p className="font-sans text-sm text-[#434842] leading-relaxed mb-6 whitespace-pre-line">
              {ethicsModal.content}
            </p>

            <button
              onClick={onCloseEthics}
              className="w-full bg-[#607762] hover:bg-[#506358] text-white py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer"
            >
              Compreendido
            </button>
          </div>
        </div>
      )}
    </>
  );
};

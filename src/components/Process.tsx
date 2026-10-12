import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ProcessProps {
  onOpenBooking: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      badge: 'ETAPA 01',
      title: 'Primeiro Contato',
      description: 'Conversa inicial via WhatsApp para entender suas necessidades, esclarecer dúvidas pontuais e combinar o melhor horário para início.',
    },
    {
      badge: 'ETAPA 02',
      title: 'Acolhimento & Escuta',
      description: 'Sessões semanais de 50 minutos em ambiente seguro, confidencial e sem julgamentos, onde você pode expor livremente o que sente.',
    },
    {
      badge: 'ETAPA 03',
      title: 'Construção Conjunta',
      description: 'Reflexões e intervenções respeitando seu tempo e suas descobertas singulares, explorando as raízes de padrões e repetições.',
    },
    {
      badge: 'ETAPA 04',
      title: 'Autonomia & Sentido',
      description: 'Desenvolvimento de recursos internos sólidos para lidar com os desafios da vida, ressignificar trajetórias e fortalecer a própria voz.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f8f3ec]/40 border-b border-[#c3c8c0]/30" id="como-funciona">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs text-[#485e4a] tracking-widest uppercase block mb-3 font-semibold">
            O Caminho Terapêutico
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1d1b17] mb-4 font-normal">
            Como funciona o processo
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#485e4a] mb-3 leading-relaxed">
            &ldquo;Não existe uma fórmula pronta. O processo é construído a partir daquilo que você traz para cada encontro.&rdquo;
          </p>
        </div>

        {/* 4 Step Process Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-white p-8 rounded-xl border border-[#c3c8c0]/50 shadow-2xs hover:border-[#485e4a]/40 transition-all duration-200"
            >
              <div className="font-mono text-xs text-[#485e4a] bg-[#d0e5d8]/50 px-3 py-1 rounded-full w-fit mb-5 font-semibold tracking-wider">
                {step.badge}
              </div>
              <h3 className="font-serif text-xl sm:text-[22px] text-[#1d1b17] mb-3 font-medium">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-[#434842] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-[#607762] hover:bg-[#506358] text-[#fef9f1] px-7 py-3.5 rounded-lg transition-all duration-200 text-sm font-semibold shadow-sm cursor-pointer active:scale-[0.98]"
          >
            <span>Tirar dúvidas sobre a primeira sessão</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

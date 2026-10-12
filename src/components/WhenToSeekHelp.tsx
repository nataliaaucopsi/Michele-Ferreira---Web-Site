import React from 'react';
import { BatteryWarning, ShieldAlert, Cloud, Split } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const WhenToSeekHelp: React.FC = () => {
  const cards = [
    {
      icon: BatteryWarning,
      title: 'Sobrecarga e cansaço constante',
      description: 'Sensação de estar sempre no limite, dificuldade para desacelerar a mente ou desconectar das obrigações diárias.',
      footerTag: 'Espaço para respirar',
    },
    {
      icon: ShieldAlert,
      title: 'Dificuldade em impor limites',
      description: 'Dizer "sim" querendo dizer "não", medo constante de desagradar e culpa excessiva ao priorizar as próprias necessidades.',
      footerTag: 'Afirmação e clareza',
    },
    {
      icon: Cloud,
      title: 'Angústia persistente ou vazio',
      description: 'Uma sensação difusa de desânimo, falta de sentido aparente ou momentos em que sentimentos pesados parecem não passar.',
      footerTag: 'Escuta sem julgamentos',
    },
    {
      icon: Split,
      title: 'Transições e mudanças de vida',
      description: 'Términos de relacionamento, mudança de carreira, luto ou o desafio de construir uma vida em uma nova cidade ou país.',
      footerTag: 'Novo direcionamento',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f8f3ec]/60 border-b border-[#c3c8c0]/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs text-[#485e4a] tracking-widest uppercase block mb-3 font-semibold">
            Quando Procurar Ajuda
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1d1b17] mb-4 font-normal">
            Você não precisa esperar tudo ficar insustentável.
          </h2>
          <p className="font-sans text-base text-[#434842] font-normal leading-relaxed">
            O processo terapêutico acolhe diferentes momentos da existência e ajuda você a olhar para suas vivências com mais clareza, paciência e serenidade.
          </p>
        </FadeIn>

        {/* 4 Pillars Grid with Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.1} duration={0.5} className="h-full">
                <div
                  className="h-full bg-white p-8 rounded-xl border border-[#c3c8c0]/50 hover:border-[#485e4a]/60 hover:shadow-md transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col justify-between group shadow-2xs"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-[#f2ede6] flex items-center justify-center text-[#485e4a] mb-6 group-hover:bg-[#485e4a] group-hover:text-[#fef9f1] transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-[22px] text-[#1d1b17] mb-3 leading-snug font-medium group-hover:text-[#485e4a] transition-colors duration-200">
                      {card.title}
                    </h3>
                    <p className="font-sans text-sm text-[#434842] leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#c3c8c0]/30 flex items-center text-[#485e4a] font-sans text-xs font-semibold">
                    <span>{card.footerTag}</span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

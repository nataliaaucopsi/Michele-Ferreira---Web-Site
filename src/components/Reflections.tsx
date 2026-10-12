import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { REFLECTIONS, ReflectionArticle } from '../data/content';
import { FadeIn } from './FadeIn';

interface ReflectionsProps {
  onSelectArticle: (article: ReflectionArticle) => void;
}

export const Reflections: React.FC<ReflectionsProps> = ({ onSelectArticle }) => {
  return (
    <section className="py-20 md:py-28 bg-[#f8f3ec]/50 border-b border-[#c3c8c0]/30" id="reflexoes">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs text-[#485e4a] tracking-widest uppercase block mb-3 font-semibold">
              Reflexões Clínicas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1d1b17] font-normal">
              Pausas para pensar e sentir
            </h2>
          </div>
          <p className="font-sans text-base text-[#434842] max-w-md">
            Pequenos artigos e apontamentos sobre a vida emocional cotidiana para nutrir sua reflexão antes ou durante a terapia.
          </p>
        </FadeIn>

        {/* 3 Articles Grid with Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REFLECTIONS.map((article, idx) => (
            <FadeIn key={article.id} delay={idx * 0.12} duration={0.5} className="h-full">
              <article
                onClick={() => onSelectArticle(article)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectArticle(article);
                  }
                }}
                className="h-full bg-white rounded-xl overflow-hidden border border-[#c3c8c0]/50 hover:shadow-md hover:border-[#485e4a]/50 transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer group text-left"
              >
                <div className="p-8">
                  <div className="flex items-center gap-2 text-[#434842] mb-4 font-mono text-xs">
                    <span>{article.category}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#1d1b17] mb-3 leading-snug font-medium group-hover:text-[#485e4a] transition-colors">
                    {article.title}
                  </h3>

                  <p className="font-sans text-sm text-[#434842] leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="px-8 pb-8 pt-4 border-t border-[#c3c8c0]/20 flex items-center justify-between text-[#434842] font-sans text-xs">
                  <span className="font-medium">{article.author}</span>
                  <span className="p-1 rounded-full bg-[#f8f3ec] group-hover:bg-[#d0e5d8] transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-[#485e4a] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

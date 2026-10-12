import React, { useState, useEffect, useRef } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { TESTIMONIALS, CLINICAL_INFO } from '../data/content';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive items per view: 1 on mobile (< 768px), 2 on tablet (< 1024px), 3 on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalReviews = TESTIMONIALS.length; // 10
  const maxIndex = Math.max(0, totalReviews - itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Autoplay functionality with smooth pause on hover
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, maxIndex]);

  return (
    <section 
      className="py-20 md:py-28 bg-[#fef9f1] border-b border-[#c3c8c0]/30 overflow-hidden" 
      id="avaliacoes"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <a
              href={CLINICAL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d0e5d8]/40 border border-[#c3c8c0]/40 mb-4 shadow-2xs hover:bg-[#d0e5d8] transition-colors group cursor-pointer"
            >
              <div className="flex text-[#F59E0B] gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#F59E0B]" />
                ))}
              </div>
              <span className="font-sans text-xs font-semibold text-[#1d1b17] tracking-wide">
                5.0 · 35 avaliações no Google
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-[#485e4a] opacity-70 group-hover:opacity-100 transition-opacity ml-0.5" />
            </a>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1d1b17] font-normal">
              Relatos de quem encontrou acolhimento
            </h2>
            <p className="font-sans text-base text-[#434842] mt-2">
              Trechos e avaliações reais de pacientes atendidos pela psicóloga Michele.
            </p>
          </div>

          {/* Carousel Arrow Controls & Play/Pause */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="font-mono text-xs text-[#485e4a] font-medium hidden sm:inline-block mr-2">
              {String(currentIndex + 1).padStart(2, '0')} / {String(totalReviews).padStart(2, '0')}
            </span>

            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? "Retomar rotação automática" : "Pausar rotação automática"}
              className="w-10 h-10 rounded-full border border-[#c3c8c0]/60 bg-white hover:bg-[#f8f3ec] text-[#485e4a] flex items-center justify-center transition-colors cursor-pointer"
              aria-label={isPaused ? "Play" : "Pause"}
            >
              {isPaused ? <Play className="w-4 h-4 ml-0.5" /> : <Pause className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={prevSlide}
              className="w-11 h-11 rounded-full border border-[#c3c8c0]/60 bg-white hover:bg-[#f8f3ec] text-[#485e4a] flex items-center justify-center transition-all duration-150 cursor-pointer hover:border-[#485e4a] active:scale-95 shadow-2xs"
              aria-label="Avaliação anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="w-11 h-11 rounded-full border border-[#c3c8c0]/60 bg-white hover:bg-[#f8f3ec] text-[#485e4a] flex items-center justify-center transition-all duration-150 cursor-pointer hover:border-[#485e4a] active:scale-95 shadow-2xs"
              aria-label="Próxima avaliação"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport & Sliding Track */}
        <div className="relative overflow-hidden py-2">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={item.id}
                className="shrink-0 px-3 flex"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="w-full bg-[#f8f3ec] p-8 rounded-2xl border border-[#c3c8c0]/50 flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-[#485e4a]/40 transition-all duration-200 text-left relative group">
                  <div>
                    {/* Header with Stars and Counter */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex text-[#F59E0B] gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-[#F59E0B]" />
                        ))}
                      </div>
                      <span className="font-mono text-[11px] text-[#737972]">
                        #{String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Review Quote */}
                    <p className="font-serif italic text-lg sm:text-[19px] text-[#1d1b17] mb-6 leading-relaxed">
                      {item.quote}
                    </p>
                  </div>

                  {/* Footer with Author only */}
                  <div className="pt-4 border-t border-[#c3c8c0]/30">
                    <span className="font-sans text-sm font-semibold text-[#1d1b17] block">
                      {item.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === dotIdx
                  ? 'w-8 bg-[#485e4a]'
                  : 'w-2 bg-[#c3c8c0] hover:bg-[#737972]'
              }`}
              aria-label={`Ir para grupo ${dotIdx + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA to View All */}
        <div className="mt-10 text-center">
          <a
            href={CLINICAL_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#485e4a] hover:text-[#3b4d3c] hover:underline"
          >
            <span>Ver perfil e todas as avaliações</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

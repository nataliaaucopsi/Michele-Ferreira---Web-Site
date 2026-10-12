import React, { useState } from 'react';
import { Calendar, ArrowRight, ShieldCheck, Globe, Brain, Camera, Check, X } from 'lucide-react';
import { CLINICAL_INFO } from '../data/content';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [imageSrc, setImageSrc] = useState('/michele-ferreira-enhanced.webp');
  const [customPhotoModalOpen, setCustomPhotoModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    // Cascade fallbacks
    if (imageSrc === '/michele-ferreira-enhanced.webp') {
      setImageSrc('/michele-ferreira.webp');
    } else if (imageSrc === '/michele-ferreira.webp') {
      setImageSrc('https://s3-sa-east-1.amazonaws.com/psymeet-social/media/psicologos/michele-ferreira-de-souza.webp');
    } else {
      setImageError(true);
    }
  };

  const handleApplyCustomPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      setImageSrc(inputUrl.trim());
      setImageError(false);
      setCustomPhotoModalOpen(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setImageSrc(reader.result);
          setImageError(false);
          setCustomPhotoModalOpen(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#c3c8c0]/30 bg-[#fef9f1]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Editorial Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Regulatory Tag / Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ece7e1] border border-[#c3c8c0]/50 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#607762] animate-pulse"></span>
            <span className="font-mono text-xs text-[#434842] tracking-wider font-medium">
              ATENDIMENTO ONLINE &amp; PRESENCIAL · {CLINICAL_INFO.crp}
            </span>
          </div>

          {/* Marquee Editorial Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-[#1d1b17] leading-[1.15] tracking-tight text-balance">
            Para quem deseja se ouvir com mais{' '}
            <span className="italic text-[#607762] font-serif font-normal">gentileza</span>.
          </h1>

          {/* Proposition Subtitle */}
          <p className="font-sans text-lg sm:text-xl text-[#434842] max-w-xl font-normal leading-relaxed">
            Um espaço seguro de escuta, acolhimento e reflexão para compreender o que você vive, reconhecer suas possibilidades e construir novos sentidos para a própria história.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2.5 bg-[#607762] hover:bg-[#506358] text-[#fef9f1] px-7 py-3.5 rounded-lg transition-all duration-200 text-sm font-semibold shadow-sm cursor-pointer active:scale-[0.98] group"
            >
              <Calendar className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
              <span>Agendar Primeira Conversa</span>
            </button>

            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#ece7e1] text-[#485e4a] px-6 py-3.5 rounded-lg border border-[#c3c8c0] transition-colors duration-200 text-sm font-semibold"
            >
              <span>Conhecer Minha Abordagem</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Ethical Trust Anchors */}
          <div className="pt-6 flex flex-wrap items-center gap-4 text-[#434842]/90 border-t border-[#c3c8c0]/40 w-full text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#485e4a]" />
              <span className="font-medium">Ambiente Sigiloso e Ético</span>
            </div>
            <span className="text-[#c3c8c0]">·</span>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#485e4a]" />
              <span className="font-medium">Brasileiros no Mundo Todo</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Portrait Card (Fotografia Profissional em Alta Qualidade) */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Background botanical glow frame */}
            <div className="absolute -inset-3 bg-[#d0e5d8]/40 rounded-2xl -rotate-1 transform -z-10 pointer-events-none"></div>

            <div className="rounded-2xl overflow-hidden bg-white border border-[#c3c8c0]/60 shadow-md relative group">
              {!imageError ? (
                <div className="relative w-full h-[470px] md:h-[500px] overflow-hidden bg-[#ded9d3]">
                  {/* High Quality Photography Portrait with Professional Lighting Treatment */}
                  <img
                    alt="Michele Ferreira - Psicóloga Clínica"
                    className="w-full h-full object-cover object-center scale-[1.01] hover:scale-[1.03] transition-transform duration-700 contrast-[1.05] brightness-[1.02] saturate-[1.04]"
                    src={imageSrc}
                    onError={handleImageError}
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />

                  {/* Soft Professional Studio Light Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10 pointer-events-none"></div>

                  {/* Subtle Studio Glow on Edge */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 pointer-events-none"></div>
                </div>
              ) : (
                /* Editorial Fallback Portrait Illustration */
                <div className="w-full h-[470px] md:h-[500px] bg-gradient-to-b from-[#f2ede6] to-[#ece7e1] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                  <div className="w-28 h-28 rounded-full bg-[#d0e5d8] flex items-center justify-center text-[#485e4a] mb-6 shadow-inner border border-[#607762]/20">
                    <Brain className="w-14 h-14" />
                  </div>
                  <span className="font-serif text-3xl text-[#1d1b17] font-medium mb-2">
                    Michele Ferreira
                  </span>
                  <p className="font-sans text-sm text-[#434842] max-w-xs leading-relaxed">
                    Psicóloga Clínica graduada pela UNIP. Atendimento humanizado e escuta ética.
                  </p>
                  <div className="mt-4 px-3 py-1 rounded-full bg-white/80 border border-[#c3c8c0]/50 font-mono text-xs text-[#485e4a]">
                    {CLINICAL_INFO.crp}
                  </div>
                </div>
              )}

              {/* Botão sutil para trocar/atualizar foto caso a profissional deseje */}
              <button
                type="button"
                onClick={() => setCustomPhotoModalOpen(true)}
                title="Alterar ou atualizar foto profissional"
                className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-md text-[#485e4a] hover:bg-white hover:text-[#1d1b17] transition-all opacity-0 group-hover:opacity-100 shadow-sm cursor-pointer z-10"
                aria-label="Atualizar foto"
              >
                <Camera className="w-4 h-4" />
              </button>

              {/* Bottom Floating Identity Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#c3c8c0]/60 shadow-sm z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-xl sm:text-[22px] font-medium text-[#1d1b17] leading-tight">
                      Michele Ferreira
                    </h4>
                    <p className="font-sans text-xs text-[#434842] mt-0.5 font-medium">
                      Psicóloga Clínica · Pós-graduanda em Neuropsicologia
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#d0e5d8]/70 flex items-center justify-center text-[#485e4a] shrink-0">
                    <Brain className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para trocar/atualizar foto caso a psicóloga deseje anexar seu ensaio */}
      {customPhotoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl max-w-md w-full p-6 border border-[#c3c8c0]/60 shadow-xl relative animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setCustomPhotoModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#434842] hover:bg-[#f2ede6] transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#d0e5d8] flex items-center justify-center text-[#485e4a]">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-[#1d1b17]">
                  Atualizar Foto Profissional
                </h3>
                <p className="font-sans text-xs text-[#434842]">
                  Insira o link ou envie o arquivo do seu ensaio fotográfico
                </p>
              </div>
            </div>

            <form onSubmit={handleApplyCustomPhoto} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1d1b17] mb-1">
                  URL da Fotografia
                </label>
                <input
                  type="url"
                  placeholder="https://exemplo.com/minha-foto-estudio.jpg"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#c3c8c0] bg-[#fef9f1] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#485e4a]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d1b17] mb-1">
                  Ou faça upload do seu computador
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="w-full text-xs file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#607762] file:text-white hover:file:bg-[#506358] text-[#434842] cursor-pointer"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="submit"
                  disabled={!inputUrl.trim()}
                  className="flex-1 bg-[#607762] disabled:opacity-50 hover:bg-[#506358] text-white py-2.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  Aplicar Foto
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setImageSrc('/michele-ferreira-enhanced.webp');
                    setImageError(false);
                    setCustomPhotoModalOpen(false);
                  }}
                  className="px-4 py-2.5 rounded-lg border border-[#c3c8c0] text-xs font-medium text-[#434842] hover:bg-[#f8f3ec]"
                >
                  Restaurar Original
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

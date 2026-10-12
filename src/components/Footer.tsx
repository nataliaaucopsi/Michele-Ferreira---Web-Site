import React from 'react';
import { CLINICAL_INFO } from '../data/content';

interface FooterProps {
  onOpenEthicsModal?: (title: string, content: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const devWhatsAppMessage = encodeURIComponent(
    'Olá, Karen! Gostei muito do design do site e tenho interesse em saber mais para poder criar o meu próprio site.'
  );
  const devWhatsAppUrl = `https://wa.me/5512997622096?text=${devWhatsAppMessage}`;

  return (
    <footer className="bg-[#f8f3ec] border-t border-[#c3c8c0]/50 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Logo in Footer */}
        <div className="flex items-center gap-2 mb-1">
          <span className="font-serif text-2xl text-[#485e4a] font-medium">
            {CLINICAL_INFO.name} · {CLINICAL_INFO.role}
          </span>
        </div>
        <p className="font-mono text-xs text-[#737972] tracking-wider">
          {CLINICAL_INFO.crp}
        </p>

        {/* Footer Bottom Bar with Copyright and Developer Credit (Centralizado) */}
        <div className="footer-bottom">
          <p>&copy; 2026 {CLINICAL_INFO.name}. Todos os direitos reservados.</p>
          <span className="hidden sm:inline opacity-40 select-none" aria-hidden="true">·</span>
          <p>
            Desenvolvido por{' '}
            <a
              href={devWhatsAppUrl}
              className="dev-link"
              target="_blank"
              rel="noopener noreferrer"
              title="Falar com Karen Silva no WhatsApp sobre criação de sites"
            >
              Karen Silva
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fef9f1]/90 backdrop-blur-md border-b border-[#e7e2db]/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo & Professional Badge */}
        <a 
          href="#" 
          className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#485e4a] rounded-lg"
        >
          <div>
            <span className="font-serif text-2xl sm:text-[26px] text-[#485e4a] tracking-tight block leading-none font-medium group-hover:text-[#3b4d3c] transition-colors">
              Michele Ferreira
            </span>
            <span className="font-sans text-xs text-[#434842] tracking-wider block mt-1">
              Psicóloga Clínica
            </span>
          </div>
          <span className="hidden lg:inline-flex ml-2 px-2.5 py-0.5 rounded-full bg-[#ece7e1] text-[#485e4a] font-mono text-xs border border-[#c3c8c0]/50 tracking-wider">
            CRP 06/209038
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#434842]">
          <a href="#sobre-mim" className="hover:text-[#485e4a] transition-colors duration-150">
            Sobre Mim
          </a>
          <a href="#como-funciona" className="hover:text-[#485e4a] transition-colors duration-150">
            Como Funciona
          </a>
          <a href="#especialidades" className="hover:text-[#485e4a] transition-colors duration-150">
            Especialidades
          </a>
          <a href="#reflexoes" className="hover:text-[#485e4a] transition-colors duration-150">
            Reflexões
          </a>
          <a href="#duvidas" className="hover:text-[#485e4a] transition-colors duration-150">
            Dúvidas
          </a>
        </nav>

        {/* Trailing Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 bg-[#607762] hover:bg-[#506358] text-[#fef9f1] px-5 py-2.5 rounded-lg transition-all duration-200 shadow-sm text-sm font-semibold cursor-pointer active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Agendar Consulta</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#434842] hover:text-[#485e4a] hover:bg-[#f2ede6] transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fef9f1] border-b border-[#e7e2db] px-6 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#e7e2db]">
            <span className="font-mono text-xs text-[#485e4a] font-medium">
              CRP 06/209038 · Atendimento Online
            </span>
          </div>
          <nav className="flex flex-col space-y-3 font-medium text-base text-[#434842]">
            <a 
              href="#sobre-mim" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#485e4a] transition-colors"
            >
              Sobre Mim
            </a>
            <a 
              href="#como-funciona" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#485e4a] transition-colors"
            >
              Como Funciona
            </a>
            <a 
              href="#especialidades" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#485e4a] transition-colors"
            >
              Especialidades
            </a>
            <a 
              href="#reflexoes" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#485e4a] transition-colors"
            >
              Reflexões Clínicas
            </a>
            <a 
              href="#duvidas" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#485e4a] transition-colors"
            >
              Dúvidas Frequentes
            </a>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#607762] hover:bg-[#506358] text-[#fef9f1] py-3 rounded-lg text-sm font-semibold transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar Consulta</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

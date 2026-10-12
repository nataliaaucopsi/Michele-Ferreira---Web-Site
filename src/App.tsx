/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhenToSeekHelp } from './components/WhenToSeekHelp';
import { AboutMe } from './components/AboutMe';
import { Process } from './components/Process';
import { Specialties } from './components/Specialties';
import { Reflections } from './components/Reflections';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Modals } from './components/Modals';
import { ReflectionArticle, Specialty } from './data/content';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<ReflectionArticle | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);
  const [ethicsModal, setEthicsModal] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
  }>({
    isOpen: false,
    title: '',
    content: '',
  });

  const handleOpenBooking = () => {
    setBookingOpen(true);
  };

  const handleOpenEthicsModal = (title: string, content: string) => {
    setEthicsModal({
      isOpen: true,
      title,
      content,
    });
  };

  return (
    <div className="min-h-screen bg-[#fef9f1] text-[#1d1b17] flex flex-col font-sans selection:bg-[#d0e5d8] selection:text-[#0b2010]">
      {/* 1. Header (Navegação Fixa) */}
      <Header onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. Seção Quando Procurar Ajuda */}
        <WhenToSeekHelp />

        {/* 4. Seção Sobre Mim (com Tabs Interativas) */}
        <AboutMe />

        {/* 5. Seção Como Funciona o Processo (4 Etapas) */}
        <Process onOpenBooking={handleOpenBooking} />

        {/* 6. Seção Especialidades Clínicas (9 Áreas de Cuidado) */}
        <Specialties onSelectSpecialty={(spec) => setSelectedSpecialty(spec)} />

        {/* 7. Seção Reflexões Clínicas (Artigos com Leitura Completa) */}
        <Reflections onSelectArticle={(art) => setSelectedArticle(art)} />

        {/* 8. Seção Avaliações do Google (5.0 Estrelas) */}
        <Testimonials />

        {/* 9. Seção Dúvidas Frequentes (FAQ Accordion) */}
        <Faq />

        {/* 10. Seção Contato & Canais Diretos */}
        <Contact />
      </main>

      {/* 11. Widget Flutuante de WhatsApp */}
      <FloatingWhatsApp onOpenBooking={handleOpenBooking} />

      {/* 12. Rodapé com Diretrizes do CFP */}
      <Footer onOpenEthicsModal={handleOpenEthicsModal} />

      {/* Modais Interativos (Agendamento, Leitura de Artigo, Detalhes de Especialidade, Termos Éticos) */}
      <Modals
        bookingOpen={bookingOpen}
        onCloseBooking={() => setBookingOpen(false)}
        selectedArticle={selectedArticle}
        onCloseArticle={() => setSelectedArticle(null)}
        selectedSpecialty={selectedSpecialty}
        onCloseSpecialty={() => setSelectedSpecialty(null)}
        ethicsModal={ethicsModal}
        onCloseEthics={() => setEthicsModal({ isOpen: false, title: '', content: '' })}
      />
    </div>
  );
}

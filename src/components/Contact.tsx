import React, { useState } from 'react';
import { MessageCircle, Mail, User, Instagram, MapPin, Send, Check, Phone } from 'lucide-react';
import { CLINICAL_INFO } from '../data/content';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [preferredShift, setPreferredShift] = useState('tarde');
  const [modality, setModality] = useState('online');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleWhatsAppDirect = () => {
    let text = 'Olá, Michele! Gostaria de informações sobre o agendamento de psicoterapia.';
    if (name.trim()) {
      text = `Olá, Michele! Meu nome é ${name.trim()}. Gostaria de agendar uma primeira conversa de psicoterapia (${modality === 'online' ? 'Online' : 'Presencial'}, preferência no período da ${preferredShift}).`;
      if (message.trim()) {
        text += `\n\nMinha mensagem: "${message.trim()}"`;
      }
    }
    const url = `https://wa.me/${CLINICAL_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CLINICAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CLINICAL_INFO.phoneDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section className="py-20 md:py-28 bg-[#fef9f1]" id="contato">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl border border-[#c3c8c0]/60 p-8 md:p-14 lg:p-16 relative overflow-hidden shadow-2xs">
          {/* Subtle Botanical Glow Accent */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-[#d0e5d8]/20 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
            {/* Left Column: Proposition & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs text-[#485e4a] tracking-widest uppercase block font-semibold">
                Vamos Conversar?
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#1d1b17] leading-tight font-normal">
                Dê o primeiro passo em direção ao seu bem-estar emocional.
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#434842] leading-relaxed">
                Estou à disposição para responder qualquer dúvida sobre as sessões ou para encontrar um horário conveniente para você.
              </p>

              {/* Direct Buttons from Layout */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-4 rounded-lg font-sans text-sm font-semibold shadow-sm transition-all duration-200 cursor-pointer active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Falar no WhatsApp: {CLINICAL_INFO.phoneDisplay}</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${CLINICAL_INFO.email}`}
                    className="inline-flex items-center justify-center gap-2.5 bg-[#f2ede6] hover:bg-[#ece7e1] text-[#1d1b17] px-6 py-4 rounded-lg border border-[#c3c8c0]/60 font-sans text-sm font-semibold transition-colors duration-200 flex-1 sm:flex-initial"
                  >
                    <Mail className="w-4 h-4 text-[#485e4a]" />
                    <span>{CLINICAL_INFO.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copiar e-mail"
                    className="p-4 rounded-lg bg-[#f2ede6] hover:bg-[#ece7e1] border border-[#c3c8c0]/60 text-[#485e4a] transition-colors cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Mail className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Quick Inquiry Assistant */}
              <div className="mt-8 p-6 rounded-xl bg-[#f8f3ec] border border-[#c3c8c0]/40 space-y-4">
                <h4 className="font-serif text-lg font-medium text-[#1d1b17]">
                  Mensagem rápida para o WhatsApp:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#434842] mb-1">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Como prefere ser chamado(a)?"
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#c3c8c0] bg-white focus:outline-none focus:ring-2 focus:ring-[#485e4a] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#434842] mb-1">
                      Período de Preferência
                    </label>
                    <select
                      value={preferredShift}
                      onChange={(e) => setPreferredShift(e.target.value)}
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#c3c8c0] bg-white focus:outline-none focus:ring-2 focus:ring-[#485e4a] focus:border-transparent"
                    >
                      <option value="manhã">Manhã (08h às 12h)</option>
                      <option value="tarde">Tarde (13h às 18h)</option>
                      <option value="noite">Noite (18h às 21h)</option>
                      <option value="flexível">Horário Flexível</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#434842] mb-1">
                    Dúvida ou tema que deseja compartilhar (opcional)
                  </label>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ex: Gostaria de saber disponibilidades de horários..."
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-[#c3c8c0] bg-white focus:outline-none focus:ring-2 focus:ring-[#485e4a] focus:border-transparent"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full flex items-center justify-center gap-2 bg-[#607762] hover:bg-[#506358] text-[#fef9f1] py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar mensagem personalizada</span>
                </button>
              </div>
            </div>

            {/* Right Column: Contact Details Card */}
            <div className="lg:col-span-5 bg-[#f8f3ec] p-8 rounded-xl border border-[#c3c8c0]/40 space-y-6 w-full">
              <h4 className="font-serif text-2xl text-[#1d1b17] font-medium">
                Informações de Contato
              </h4>

              <div className="space-y-5">
                {/* Contact Item 1: Responsável */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f2ede6] flex items-center justify-center text-[#485e4a] shrink-0 mt-0.5">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans text-xs text-[#434842] block">
                      Psicóloga Responsável
                    </span>
                    <span className="font-sans text-sm font-semibold text-[#1d1b17]">
                      {CLINICAL_INFO.name} · {CLINICAL_INFO.crp}
                    </span>
                  </div>
                </div>

                {/* Contact Item 2: WhatsApp Direto */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f2ede6] flex items-center justify-center text-[#485e4a] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="font-sans text-xs text-[#434842] block">
                      WhatsApp Direto
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={`https://wa.me/${CLINICAL_INFO.whatsappUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm font-semibold text-[#485e4a] hover:underline"
                      >
                        {CLINICAL_INFO.phoneDisplay}
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        title="Copiar número"
                        className="text-xs text-[#737972] hover:text-[#1d1b17] p-1 rounded"
                      >
                        {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : 'Copiar'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Contact Item 3: Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f2ede6] flex items-center justify-center text-[#485e4a] shrink-0 mt-0.5">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans text-xs text-[#434842] block">
                      Instagram Profissional
                    </span>
                    <a
                      href={CLINICAL_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm font-semibold text-[#485e4a] hover:underline"
                    >
                      {CLINICAL_INFO.instagram}
                    </a>
                  </div>
                </div>

                {/* Contact Item 4: Modalidades */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f2ede6] flex items-center justify-center text-[#485e4a] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans text-xs text-[#434842] block">
                      Modalidades
                    </span>
                    <span className="font-sans text-sm text-[#1d1b17]">
                      Online em todo o mundo · Presencial
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#c3c8c0]/30 text-xs font-mono text-[#434842]/80">
                Atendimento mediante agendamento prévio.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Award, GraduationCap, CheckCircle2, Clock, ChevronRight, BookOpen, Users, Compass } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const AboutMe: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'trabalho' | 'exterior' | 'publico'>('trabalho');

  return (
    <section className="py-20 md:py-28 bg-[#fef9f1] border-b border-[#c3c8c0]/30" id="sobre-mim">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Editorial Quote & Philosophy */}
          <FadeIn className="lg:col-span-5 space-y-5">
            <span className="font-mono text-xs text-[#485e4a] tracking-widest uppercase block font-semibold">
              Sobre Mim
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1d1b17] leading-tight font-normal">
              Olá! É um prazer ter você por aqui!
            </h2>

            <p className="font-sans text-base text-[#1d1b17] font-medium leading-relaxed">
              Sou psicóloga clínica e pós-graduanda em Neuropsicologia dos Transtornos Mentais.
            </p>

            <p className="font-serif italic text-lg sm:text-xl text-[#607762] leading-relaxed">
              &ldquo;Acredito na psicoterapia como um espaço seguro de escuta, acolhimento e reflexão, favorecendo autoconhecimento, autonomia e novos sentidos para as experiências vividas.&rdquo;
            </p>

            <p className="font-sans text-sm sm:text-base text-[#434842] leading-relaxed">
              Atendo adolescentes, adultos e idosos, acolhendo demandas como ansiedade, depressão, luto, autoestima, relacionamentos, questões profissionais, crises existenciais e processos de autoconhecimento. Também tenho experiência no atendimento a brasileiros que vivem no exterior.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#434842] leading-relaxed">
              Meu trabalho é pautado em uma escuta atenta e humanizada, considerando cada pessoa em sua singularidade e contexto de vida.
            </p>

            {/* Credential Cards */}
            <div className="pt-2 flex flex-col gap-3">
              <div className="flex items-center gap-3.5 p-3.5 rounded-lg bg-[#f8f3ec] border border-[#c3c8c0]/40">
                <div className="w-10 h-10 rounded-lg bg-[#d0e5d8] flex items-center justify-center text-[#485e4a] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-[#1d1b17] font-sans text-sm font-semibold">
                    Registro Profissional Ativo
                  </strong>
                  <span className="text-[#434842] font-mono text-xs">
                    Conselho Regional de Psicologia: CRP 06/209038
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-lg bg-[#f8f3ec] border border-[#c3c8c0]/40">
                <div className="w-10 h-10 rounded-lg bg-[#d0e5d8] flex items-center justify-center text-[#485e4a] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-[#1d1b17] font-sans text-sm font-semibold">
                    Formação Acadêmica &amp; Especialização
                  </strong>
                  <span className="text-[#434842] font-sans text-xs block">
                    Graduação em Psicologia · UNIP
                  </span>
                  <span className="text-[#607762] font-sans text-xs font-medium block">
                    Pós-graduanda em Neuropsicologia dos Transtornos Mentais
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Interactive Thematic Tabs */}
          <FadeIn delay={0.15} className="lg:col-span-7 bg-white p-8 md:p-10 rounded-xl border border-[#c3c8c0]/50 shadow-2xs">
            {/* Tab Navigation */}
            <div className="flex border-b border-[#c3c8c0]/40 gap-6 mb-8 overflow-x-auto pb-2">
              <button
                type="button"
                onClick={() => setActiveTab('trabalho')}
                className={`font-serif text-lg sm:text-xl pb-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'trabalho'
                    ? 'border-[#485e4a] text-[#485e4a] font-medium'
                    : 'border-transparent text-[#434842] hover:text-[#485e4a]'
                }`}
              >
                Sobre o meu trabalho
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('exterior')}
                className={`font-serif text-lg sm:text-xl pb-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'exterior'
                    ? 'border-[#485e4a] text-[#485e4a] font-medium'
                    : 'border-transparent text-[#434842] hover:text-[#485e4a]'
                }`}
              >
                Atendimento no Exterior
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('publico')}
                className={`font-serif text-lg sm:text-xl pb-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'publico'
                    ? 'border-[#485e4a] text-[#485e4a] font-medium'
                    : 'border-transparent text-[#434842] hover:text-[#485e4a]'
                }`}
              >
                Para quem é a terapia?
              </button>
            </div>

            {/* Tab 1 Content: Sobre o meu trabalho (COM DESTAQUE EM ABORDAGEM E PÚBLICO) */}
            {activeTab === 'trabalho' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* DESTAQUES SOLICITADOS: Abordagem & Atendimento */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#f8f3ec] border border-[#d0e5d8] shadow-2xs">
                    <div className="flex items-center gap-2.5 text-[#485e4a] mb-1.5">
                      <Compass className="w-5 h-5 shrink-0" />
                      <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                        Abordagem Clínica
                      </span>
                    </div>
                    <div className="font-serif text-xl sm:text-2xl text-[#1d1b17] font-medium">
                      Fenomenológica-Existencial
                    </div>
                    <p className="font-sans text-xs text-[#434842] mt-1">
                      Compreensão do sujeito a partir do modo como vivencia e dá sentido ao seu próprio existir.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#f8f3ec] border border-[#d0e5d8] shadow-2xs">
                    <div className="flex items-center gap-2.5 text-[#485e4a] mb-1.5">
                      <Users className="w-5 h-5 shrink-0" />
                      <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                        Atendimento Para
                      </span>
                    </div>
                    <div className="font-serif text-xl sm:text-2xl text-[#1d1b17] font-medium">
                      Adultos, Idosos e Adolescentes
                    </div>
                    <p className="font-sans text-xs text-[#434842] mt-1">
                      Espaço adaptado com sensibilidade às particularidades de cada ciclo e momento de vida.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-[#1d1b17] font-medium mb-3">
                    Um encontro genuíno com espaço para você ser quem é.
                  </h3>
                  <p className="font-sans text-base text-[#434842] leading-relaxed">
                    Minha prática clínica parte de uma escuta atenta e humanizada, considerando cada pessoa em sua singularidade e contexto de vida. A terapia é construída em conjunto, respeitando seu tempo, sua história e aquilo que faz sentido para você.
                  </p>
                  <p className="font-sans text-base text-[#434842] leading-relaxed mt-3">
                    Longe de fórmulas prontas ou receitas comportamentais, o processo terapêutico favorece o autoconhecimento, a autonomia e novos sentidos para as experiências vividas.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#c3c8c0]/30">
                  <div className="flex items-center gap-2.5 text-[#1d1b17]">
                    <CheckCircle2 className="w-5 h-5 text-[#485e4a] shrink-0" />
                    <span className="font-sans text-sm">Escuta empática, ética e sigilosa</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#1d1b17]">
                    <CheckCircle2 className="w-5 h-5 text-[#485e4a] shrink-0" />
                    <span className="font-sans text-sm">Respeito à singularidade de sua história</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2 Content: Atendimento no Exterior */}
            {activeTab === 'exterior' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="font-serif text-2xl text-[#1d1b17] font-medium mb-2">
                  Acolhimento para brasileiros pelo mundo.
                </h3>
                <p className="font-sans text-base text-[#434842] leading-relaxed">
                  Também realizo atendimentos a brasileiros que vivem no exterior, acolhendo as particularidades emocionais e de adaptação que podem surgir nessa experiência.
                </p>
                <p className="font-sans text-base text-[#434842] leading-relaxed">
                  Viver em outra cultura frequentemente desperta sentimentos de desraizamento, solidão, saudade e barreiras idiomáticas no cuidado com a saúde mental. Falar em sua língua materna com quem compreende as nuances culturais do Brasil faz toda a diferença.
                </p>
                <div className="p-4 rounded-lg bg-[#f8f3ec] border border-[#c3c8c0]/40 mt-4 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#485e4a] shrink-0" />
                  <p className="font-sans text-sm text-[#434842]">
                    Fuso horário adaptável para residentes na Europa, Américas, Reino Unido e Oceania.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3 Content: Para quem é a terapia? */}
            {activeTab === 'publico' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h3 className="font-serif text-2xl text-[#1d1b17] font-medium mb-2">
                  Para quem deseja reencontrar a própria rota.
                </h3>
                <p className="font-sans text-base text-[#434842] leading-relaxed">
                  Para quem deseja compreender melhor o que está vivendo, desenvolver novas formas de lidar com suas experiências e encontrar mais autonomia para fazer escolhas alinhadas à própria vida.
                </p>
                <ul className="space-y-3 pt-2 text-[#434842]">
                  <li className="flex items-start gap-2.5">
                    <ChevronRight className="w-5 h-5 text-[#485e4a] shrink-0 mt-0.5" />
                    <span className="font-sans text-sm">
                      Pessoas em momentos de transição profissional ou términos afetivos.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight className="w-5 h-5 text-[#485e4a] shrink-0 mt-0.5" />
                    <span className="font-sans text-sm">
                      Quem sente ansiedade, angústia ou cobrança interna desmedida.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight className="w-5 h-5 text-[#485e4a] shrink-0 mt-0.5" />
                    <span className="font-sans text-sm">
                      Indivíduos em busca de fortalecimento de autoestima e autoconhecimento genuíno.
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

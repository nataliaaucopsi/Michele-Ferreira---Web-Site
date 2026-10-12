import React from 'react';
import { 
  Wind, 
  CloudRain, 
  Shield, 
  Compass, 
  Activity, 
  HeartHandshake, 
  Users, 
  Heart, 
  Link as LinkIcon, 
  Droplets,
  Sparkles
} from 'lucide-react';
import { SPECIALTIES, Specialty } from '../data/content';
import { FadeIn } from './FadeIn';

interface SpecialtiesProps {
  onSelectSpecialty: (specialty: Specialty) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onSelectSpecialty }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wind': return Wind;
      case 'CloudRain': return CloudRain;
      case 'Shield': return Shield;
      case 'Compass': return Compass;
      case 'Activity': return Activity;
      case 'HeartHandshake': return HeartHandshake;
      case 'Users': return Users;
      case 'Heart': return Heart;
      case 'Link': return LinkIcon;
      case 'Droplets': return Droplets;
      default: return Sparkles;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#fef9f1] border-b border-[#c3c8c0]/30" id="especialidades">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs text-[#485e4a] tracking-widest uppercase block mb-3 font-semibold">
            Áreas de Cuidado
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1d1b17] mb-4 font-normal">
            Especialidades Clínicas
          </h2>
          <p className="font-sans text-base text-[#434842]">
            Cada pessoa carrega uma bagagem única. Os temas abaixo representam as principais demandas acolhidas no consultório.
          </p>
        </FadeIn>

        {/* 10 Cards Grid with Scroll Reveal and Smooth Elevation/Zoom on Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map((spec, idx) => {
            const Icon = getIcon(spec.iconName);
            return (
              <FadeIn
                key={spec.id}
                delay={(idx % 3) * 0.1}
                duration={0.5}
                className="h-full"
              >
                <div
                  onClick={() => onSelectSpecialty(spec)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectSpecialty(spec);
                    }
                  }}
                  className="h-full bg-[#f8f3ec] p-6 rounded-xl border border-[#c3c8c0]/40 hover:border-[#485e4a]/70 hover:bg-white transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.025] hover:shadow-xl hover:shadow-[#485e4a]/12 cursor-pointer group text-left shadow-2xs flex flex-col justify-between will-change-transform"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#d0e5d8]/70 flex items-center justify-center text-[#485e4a] mb-4 group-hover:bg-[#485e4a] group-hover:text-[#fef9f1] group-hover:scale-110 transition-all duration-300 shadow-2xs">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-105" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-[22px] text-[#1d1b17] mb-2 font-medium group-hover:text-[#485e4a] transition-colors duration-200">
                      {spec.title}
                    </h3>
                    <p className="font-sans text-sm text-[#434842] leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-[#c3c8c0]/30 flex items-center justify-between text-xs font-medium text-[#485e4a] group-hover:translate-x-1 transition-transform duration-200">
                    <span>Saiba como a terapia atua</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1 font-semibold">→</span>
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

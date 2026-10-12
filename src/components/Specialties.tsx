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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs text-[#485e4a] tracking-widest uppercase block mb-3 font-semibold">
            Áreas de Cuidado
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1d1b17] mb-4 font-normal">
            Especialidades Clínicas
          </h2>
          <p className="font-sans text-base text-[#434842]">
            Cada pessoa carrega uma bagagem única. Os temas abaixo representam as principais demandas acolhidas no consultório.
          </p>
        </div>

        {/* 10 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map((spec) => {
            const Icon = getIcon(spec.iconName);
            return (
              <div
                key={spec.id}
                onClick={() => onSelectSpecialty(spec)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectSpecialty(spec);
                  }
                }}
                className="bg-[#f8f3ec] p-6 rounded-xl border border-[#c3c8c0]/40 hover:border-[#485e4a]/60 hover:bg-white transition-all duration-200 cursor-pointer group text-left shadow-2xs hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#d0e5d8]/70 flex items-center justify-center text-[#485e4a] mb-4 group-hover:bg-[#485e4a] group-hover:text-[#fef9f1] transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-[22px] text-[#1d1b17] mb-2 font-medium">
                    {spec.title}
                  </h3>
                  <p className="font-sans text-sm text-[#434842] leading-relaxed">
                    {spec.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#c3c8c0]/30 flex items-center justify-between text-xs font-medium text-[#485e4a] group-hover:translate-x-0.5 transition-transform">
                  <span>Saiba como a terapia atua</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { FadeIn } from './FadeIn';
import { MapPoint } from '../types';
import { useLanguage } from '../LanguageContext';

const POINTS: MapPoint[] = [
  { id: 1, top: '40%', left: '20%', label: 'Resort Hub', type: 'leisure' },
  { id: 2, top: '30%', left: '50%', label: 'Private Lots', type: 'essential' },
  { id: 3, top: '60%', left: '70%', label: 'Nature Trail', type: 'leisure' },
  { id: 4, top: '55%', left: '30%', label: 'Helipad', type: 'transport' },
  { id: 5, top: '25%', left: '80%', label: 'Security Gate', type: 'essential' },
];

export const Masterplan: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="masterplan" className="relative py-24 bg-misty-green-dark">
      {/* Gradient overlays for seamless blending */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-misty-green-dark to-transparent pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-misty-green-dark to-transparent pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl text-white mb-4">
            {t('masterplan_title_1')}<br />
            {t('masterplan_title_2')}
          </h2>
          <p className="font-sans text-stone-400 max-w-2xl mx-auto">
            {t('masterplan_subtitle')}
          </p>
        </FadeIn>

        {/* Map Container */}
        <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] bg-stone-900 overflow-hidden group">
          <img
            src="./images/4 master map.png"
            alt="Drone View Masterplan"
            className="w-full h-full object-cover opacity-60 transition-transform duration-[3s] group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-misty-green-dark/80 via-transparent to-transparent"></div>

          {/* Pins */}
          {POINTS.map((point) => (
            <div
              key={point.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group/pin"
              style={{ top: point.top, left: point.left }}
            >
              <div className="relative">
                <div className="w-3 h-3 bg-white rounded-full relative z-10 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover/pin:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <div className="bg-misty-green-dark/90 backdrop-blur border border-stone-700 px-4 py-2 whitespace-nowrap">
                    <span className="text-xs font-sans tracking-widest text-gold-accent uppercase block">{point.type}</span>
                    <span className="text-sm font-serif text-white">{point.label}</span>
                  </div>
                  <div className="w-px h-4 bg-white/50 mx-auto"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { FadeIn } from './FadeIn';

interface CardData {
  id: string;
  titleKey: string;
  descKey: string;
  image: string;
}

const CARDS: CardData[] = [
  {
    id: 'family',
    titleKey: 'card_family_title',
    descKey: 'card_family_desc',
    image: '/images/Card1.png',
  },
  {
    id: 'heritage',
    titleKey: 'card_heritage_title',
    descKey: 'card_heritage_desc',
    image: '/images/Card2.png',
  },
  {
    id: 'prosperity',
    titleKey: 'card_prosperity_title',
    descKey: 'card_prosperity_desc',
    image: '/images/Card3.png',
  },
];

export const SanctuaryCards: React.FC = () => {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative py-24 md:py-32 bg-forest-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <FadeIn direction="up">
          <h2 className="font-display text-3xl md:text-5xl text-white text-center mb-16 leading-relaxed">
            {t('sanctuary_heading' as any)}
          </h2>
        </FadeIn>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CARDS.map((card, index) => (
            <FadeIn key={card.id} direction="up" delay={index * 150}>
              <div
                className="relative h-[400px] md:h-[500px] group cursor-pointer overflow-hidden rounded-lg"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image - Always visible */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                    hoveredCard === card.id ? 'scale-110' : 'scale-100'
                  }`}
                  style={{ backgroundImage: `url("${card.image}")` }}
                />

                {/* Dark Overlay - Darker by default, lighter on hover */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    hoveredCard === card.id
                      ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'
                      : 'bg-gradient-to-t from-black/90 via-black/60 to-black/30'
                  }`}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  {/* Title - Always visible */}
                  <h3
                    className={`font-display text-2xl md:text-3xl text-white mb-4 transition-all duration-500 ${
                      hoveredCard === card.id
                        ? 'translate-y-0'
                        : 'translate-y-4'
                    }`}
                  >
                    {t(card.titleKey as any)}
                  </h3>

                  {/* Description - Only visible on hover */}
                  <p
                    className={`font-sans text-sm md:text-base text-stone-300 leading-relaxed transition-all duration-500 ${
                      hoveredCard === card.id
                        ? 'opacity-100 translate-y-0 max-h-40'
                        : 'opacity-0 translate-y-4 max-h-0'
                    }`}
                  >
                    {t(card.descKey as any)}
                  </p>
                </div>

                {/* Decorative Border - Only on hover */}
                <div
                  className={`absolute inset-4 border border-gold-accent/40 transition-all duration-500 ${
                    hoveredCard === card.id
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                  }`}
                />

                {/* Gold accent line at bottom */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gold-accent transition-all duration-500 ${
                    hoveredCard === card.id ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

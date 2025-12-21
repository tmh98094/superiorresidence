import React from 'react';
import { FadeIn } from './FadeIn';
import { Shield, Trees, MapPin, UserCheck, Video } from 'lucide-react';
import { Icon } from '@iconify/react';
import { useLanguage } from '../LanguageContext';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  const FEATURES = [
    { id: '1', icon: Trees, title: t('feature_1_title'), description: t('feature_1_desc'), isIconify: false },
    { id: '2', icon: UserCheck, title: t('feature_2_title'), description: t('feature_2_desc'), isIconify: false },
    { id: '3', icon: MapPin, title: t('feature_3_title'), description: t('feature_3_desc'), isIconify: false },
    { id: '4', icon: Video, title: t('feature_4_title'), description: t('feature_4_desc'), isIconify: false },
    { id: '5', icon: Shield, title: t('feature_5_title'), description: t('feature_5_desc'), isIconify: false },
    { id: '6', icon: 'hugeicons:car-parking-02', title: t('feature_6_title'), description: t('feature_6_desc'), isIconify: true },
  ];

  return (
    <section id="homes" className="bg-forest-dark py-24 border-y border-stone-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="font-display text-3xl md:text-4xl text-stone-200">
            {t('features_title_1')}<br />
            {t('features_title_2')}
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {FEATURES.map((feature, idx) => (
            <FadeIn key={feature.id} delay={idx * 100} className="flex flex-col items-center text-center group cursor-default">
              <div className="w-16 h-16 rounded-full border border-stone-700 flex items-center justify-center mb-4 group-hover:border-gold-accent group-hover:bg-gold-accent/10 transition-all duration-500">
                {feature.isIconify ? (
                  <Icon icon={feature.icon as string} className="text-stone-400 group-hover:text-gold-accent transition-colors" width={24} height={24} />
                ) : (
                  <feature.icon className="text-stone-400 group-hover:text-gold-accent transition-colors" size={24} strokeWidth={1} />
                )}
              </div>
              <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-stone-300 mb-2">{feature.title}</h4>
              <p className="font-serif text-stone-500 text-sm italic">{feature.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
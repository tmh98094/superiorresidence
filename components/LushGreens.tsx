import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

export const LushGreens: React.FC = () => {
  const { t } = useLanguage();
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background with Fallback */}
      {!videoError ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/2 concept.png"
          onError={() => setVideoError(true)}
        >
          <source src="/videos/lushgreens.mp4.mp4" type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/2 concept.png")' }}
        />
      )}

      {/* Fallback image always present but hidden when video works */}
      <img
        src="/images/2 concept.png"
        alt="Lush Greens"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-6 max-w-4xl">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white leading-relaxed tracking-wide">
            {t('lushgreens_text')}
          </h2>
        </div>
      </div>
    </section>
  );
};

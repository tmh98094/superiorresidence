import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // List of all images to preload
  const imagesToPreload = [
    '/images/1 hero.png',
    '/images/2 concept.png',
    '/images/3 location.png',
    '/images/texture leaf.png',
    '/images/Card1.png',
    '/images/Card2.png',
    '/images/Card3.png',
    '/images/Card4.png',
  ];

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = imagesToPreload.length;

    const updateProgress = () => {
      loadedCount++;
      const currentProgress = Math.round((loadedCount / totalImages) * 100);
      setProgress(currentProgress);

      if (loadedCount === totalImages) {
        // Wait a moment before fading out
        setTimeout(() => {
          setIsComplete(true);
          // Wait for fade out animation before calling onLoadComplete
          setTimeout(() => {
            onLoadComplete();
          }, 500);
        }, 300);
      }
    };

    // Preload all images
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress; // Still count as loaded even if error
      img.src = src;
    });
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-forest-black flex flex-col items-center justify-center transition-opacity duration-500 ${
        isComplete ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo */}
      <div className="mb-12">
        <div className="flex flex-col items-center">
          <img
            src="/images/logo1.png"
            alt="Superior Residence"
            className="w-32 h-auto mb-4"
          />
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 md:w-80">
        {/* Progress Bar Background */}
        <div className="h-[1px] bg-stone-800 relative overflow-hidden">
          {/* Progress Bar Fill */}
          <div
            className="h-full bg-gold-accent transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="mt-4 text-center">
          <span className="font-sans text-xs tracking-[0.3em] text-stone-400">
            {progress}%
          </span>
        </div>
      </div>

      {/* Loading Text */}
      <div className="mt-8">
        <p className="font-sans text-[0.6rem] tracking-[0.4em] text-stone-600 uppercase">
          Loading Experience
        </p>
      </div>
    </div>
  );
};

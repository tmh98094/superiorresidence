import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Images to preload
  const imagesToPreload = [
    '/images/1 hero.webp',
    '/images/logo1.webp',
    '/images/3 location.webp',
    '/images/texture leaf.webp',
  ];

  // Fonts to wait for
  const fontsToLoad = [
    'Cinzel',
    'Cormorant Garamond',
    'Montserrat',
    'Optima',
    'Ma Shan Zheng',
  ];

  useEffect(() => {
    let loadedItems = 0;
    const totalItems = imagesToPreload.length + fontsToLoad.length;

    const updateProgress = () => {
      loadedItems++;
      const currentProgress = Math.round((loadedItems / totalItems) * 100);
      setProgress(currentProgress);

      if (loadedItems >= totalItems) {
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

    // Preload images
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress;
      img.src = src;
    });

    // Wait for fonts to load
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        // Check each font
        fontsToLoad.forEach((fontName) => {
          document.fonts.check(`16px "${fontName}"`)
            ? updateProgress()
            : setTimeout(updateProgress, 100); // Fallback if font not found
        });
      });
    } else {
      // Fallback for browsers without font loading API
      fontsToLoad.forEach(() => {
        setTimeout(updateProgress, 500);
      });
    }

    // Safety timeout - complete after 5 seconds max
    const safetyTimeout = setTimeout(() => {
      if (!isComplete) {
        setProgress(100);
        setIsComplete(true);
        setTimeout(onLoadComplete, 500);
      }
    }, 5000);

    return () => clearTimeout(safetyTimeout);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-forest-black flex flex-col items-center justify-center transition-opacity duration-500 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
    >
      {/* Logo - Cropped to remove padding */}
      <div className="mb-12">
        <div className="flex flex-col items-center">
          <div className="w-[30rem] h-56 relative overflow-hidden flex items-center justify-center">
            <img
              src="/images/logo1.webp"
              alt="Superior Residence"
              className="w-full h-[80%] object-contain"
            />
          </div>
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

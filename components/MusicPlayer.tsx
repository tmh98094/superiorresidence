import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }

    // Auto-play on first user interaction (click, touch, scroll)
    const startMusic = () => {
      if (!hasStarted && audioRef.current) {
        audioRef.current.play().then(() => {
          setHasStarted(true);
        }).catch(console.error);
      }
    };

    window.addEventListener('click', startMusic, { once: true });
    window.addEventListener('touchstart', startMusic, { once: true });
    window.addEventListener('scroll', startMusic, { once: true });

    return () => {
      window.removeEventListener('click', startMusic);
      window.removeEventListener('touchstart', startMusic);
      window.removeEventListener('scroll', startMusic);
    };
  }, [hasStarted]);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
        if (!hasStarted) {
          audioRef.current.play().then(() => setHasStarted(true)).catch(console.error);
        }
        setIsMuted(false);
      } else {
        audioRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/background-music.mp3" preload="auto" />
      <button
        onClick={toggleMute}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-stone-800/80 hover:bg-stone-700 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 border border-stone-600"
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
        title={isMuted ? 'Play music' : 'Mute music'}
      >
        {isMuted ? (
          <VolumeX size={20} className="text-stone-400" />
        ) : (
          <Volume2 size={20} className="text-gold-accent" />
        )}
      </button>
    </>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setIsMuted(false);
        }).catch(console.error);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
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

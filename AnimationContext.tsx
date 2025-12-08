import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface AnimationState {
  introComplete: boolean;
  logoInHeader: boolean;
  showNavItems: boolean;
  showHeroText: boolean;
}

interface AnimationContextType {
  state: AnimationState;
  setIntroComplete: () => void;
  setLogoInHeader: () => void;
  setShowNavItems: () => void;
  setShowHeroText: () => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AnimationState>({
    introComplete: false,
    logoInHeader: false,
    showNavItems: false,
    showHeroText: false,
  });

  const setIntroComplete = useCallback(() => {
    setState((prev) => ({ ...prev, introComplete: true }));
  }, []);

  const setLogoInHeader = useCallback(() => {
    setState((prev) => ({ ...prev, logoInHeader: true }));
  }, []);

  const setShowNavItems = useCallback(() => {
    setState((prev) => ({ ...prev, showNavItems: true }));
  }, []);

  const setShowHeroText = useCallback(() => {
    setState((prev) => ({ ...prev, showHeroText: true }));
  }, []);

  return (
    <AnimationContext.Provider
      value={{
        state,
        setIntroComplete,
        setLogoInHeader,
        setShowNavItems,
        setShowHeroText,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = (): AnimationContextType => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type FontOption = 'option1' | 'option2';

interface FontContextType {
  fontOption: FontOption;
  toggleFont: () => void;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

export const FontProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fontOption, setFontOption] = useState<FontOption>(() => {
    const saved = localStorage.getItem('fontOption');
    return (saved as FontOption) || 'option1';
  });

  useEffect(() => {
    localStorage.setItem('fontOption', fontOption);
    
    // Apply font class to body
    if (fontOption === 'option1') {
      document.body.classList.remove('font-option-2');
      document.body.classList.add('font-option-1');
    } else {
      document.body.classList.remove('font-option-1');
      document.body.classList.add('font-option-2');
    }
  }, [fontOption]);

  const toggleFont = () => {
    setFontOption((prev) => (prev === 'option1' ? 'option2' : 'option1'));
  };

  return (
    <FontContext.Provider value={{ fontOption, toggleFont }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = (): FontContextType => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error('useFont must be used within a FontProvider');
  }
  return context;
};

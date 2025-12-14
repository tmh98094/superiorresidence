import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ChineseFontOption = 'noto-serif' | 'zcool-xiaowei' | 'ma-shan-zheng' | 'noto-sans';

interface ChineseFontContextType {
  chineseFontOption: ChineseFontOption;
  toggleChineseFont: () => void;
  getChineseFontName: () => string;
}

const ChineseFontContext = createContext<ChineseFontContextType | undefined>(undefined);

export const ChineseFontProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [chineseFontOption, setChineseFontOption] = useState<ChineseFontOption>(() => {
    const saved = localStorage.getItem('chineseFontOption');
    return (saved as ChineseFontOption) || 'ma-shan-zheng';
  });

  useEffect(() => {
    localStorage.setItem('chineseFontOption', chineseFontOption);
    
    // Apply Chinese font class to body
    document.body.classList.remove('chinese-noto-serif', 'chinese-zcool-xiaowei', 'chinese-ma-shan-zheng', 'chinese-noto-sans');
    document.body.classList.add(`chinese-${chineseFontOption}`);
  }, [chineseFontOption]);

  const toggleChineseFont = () => {
    const fonts: ChineseFontOption[] = ['noto-serif', 'zcool-xiaowei', 'ma-shan-zheng', 'noto-sans'];
    const currentIndex = fonts.indexOf(chineseFontOption);
    const nextIndex = (currentIndex + 1) % fonts.length;
    setChineseFontOption(fonts[nextIndex]);
  };

  const getChineseFontName = () => {
    const names = {
      'noto-serif': 'Noto Serif SC',
      'zcool-xiaowei': 'ZCOOL XiaoWei',
      'ma-shan-zheng': 'Ma Shan Zheng',
      'noto-sans': 'Noto Sans SC'
    };
    return names[chineseFontOption];
  };

  return (
    <ChineseFontContext.Provider value={{ chineseFontOption, toggleChineseFont, getChineseFontName }}>
      {children}
    </ChineseFontContext.Provider>
  );
};

export const useChineseFont = (): ChineseFontContextType => {
  const context = useContext(ChineseFontContext);
  if (!context) {
    throw new Error('useChineseFont must be used within a ChineseFontProvider');
  }
  return context;
};
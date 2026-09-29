import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { content, type Content, type Language } from './content';

const STORAGE_KEY = 'resume-language';

interface LanguageContextValue {
  language: Language;
  t: Content;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

// Saved choice for this browser session first, then the browser language, then English
function getInitialLanguage(): Language {
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'pt') return saved;
  } catch {
    // sessionStorage can be unavailable (private mode, blocked storage)
  }
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore: the page still works, the choice just isn't remembered
    }
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en-US';
    document.title = content[language].meta.title;
  }, [language]);

  const value: LanguageContextValue = {
    language,
    t: content[language],
    setLanguage,
    toggleLanguage: () => setLanguage((current) => (current === 'en' ? 'pt' : 'en')),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}

export type Lang = 'en' | 'ru' | 'tr' | 'ar' | 'he';

export const languages: Record<Lang, { label: string; dir: 'ltr' | 'rtl'; path: string }> = {
  en: { label: 'English', dir: 'ltr', path: '/' },
  ru: { label: 'Русский', dir: 'ltr', path: '/ru/' },
  tr: { label: 'Türkçe', dir: 'ltr', path: '/tr/' },
  ar: { label: 'العربية', dir: 'rtl', path: '/ar/' },
  he: { label: 'עברית', dir: 'rtl', path: '/he/' },
};

export const allLangs = Object.keys(languages) as Lang[];
export const isRTL = (lang: Lang) => languages[lang].dir === 'rtl';

import en from '../../content/en/home.json';
import ru from '../../content/ru/home.json';
import tr from '../../content/tr/home.json';
import ar from '../../content/ar/home.json';
import he from '../../content/he/home.json';

export type Copy = typeof en;

export function getCopy(lang: 'en' | 'ru' | 'tr' | 'ar' | 'he'): Copy {
  switch (lang) {
    case 'ru': return ru as Copy;
    case 'tr': return tr as Copy;
    case 'ar': return ar as Copy;
    case 'he': return he as Copy;
    default: return en as Copy;
  }
}

export interface Languages {
  en: LanguageItem;
  ar: LanguageItem;
  fr: LanguageItem;
  it: LanguageItem;
  de: LanguageItem;
  es: LanguageItem;
}

interface LanguageItem {
  name: string;
  flag: string;
}

export interface Testimonial {
  name: string;
  content: string;
}

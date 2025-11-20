import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export const useSEO = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const t = translations[language];
    
    // Update Title
    document.title = t.meta.title;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t.meta.description);
    }

    // Update Open Graph Title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t.meta.title);
    }

    // Update Open Graph Description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t.meta.description);
    }

    // Update Twitter Title
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', t.meta.title);
    }

    // Update Twitter Description
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', t.meta.description);
    }

    // Update HTML Lang Attribute
    document.documentElement.lang = language;

  }, [language]);
};


import { useState, useEffect } from 'react';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true, // Always true, can't be disabled
  analytics: false,
  marketing: false,
};

export const useCookies = () => {
  const [hasAccepted, setHasAccepted] = useState<boolean | null>(null);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    const cookiePreferences = localStorage.getItem('cookiePreferences');

    if (cookieConsent) {
      setHasAccepted(cookieConsent === 'accepted');
      if (cookiePreferences) {
        try {
          setPreferences(JSON.parse(cookiePreferences));
        } catch (error) {
          console.error('Error parsing cookie preferences:', error);
        }
      }
    }
  }, []);

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    setHasAccepted(true);
    setPreferences(allAccepted);
    
    // Initialize analytics if accepted
    if (allAccepted.analytics) {
      initializeAnalytics();
    }
  };

  const rejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyNecessary));
    setHasAccepted(false);
    setPreferences(onlyNecessary);
  };

  const savePreferences = (newPreferences: CookiePreferences) => {
    const updatedPreferences = { ...newPreferences, necessary: true };
    
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify(updatedPreferences));
    setHasAccepted(true);
    setPreferences(updatedPreferences);
    
    // Initialize analytics if accepted
    if (updatedPreferences.analytics) {
      initializeAnalytics();
    }
  };

  const initializeAnalytics = () => {
    // Here you would initialize your analytics tools (Google Analytics, etc.)
    console.log('Analytics initialized');
  };

  return {
    hasAccepted,
    preferences,
    acceptAll,
    rejectAll,
    savePreferences,
  };
};

import { useState, useEffect } from 'react';
import { Settings } from '@/types/quiz';

const SETTINGS_KEY = 'infoquiz_settings';

const defaultSettings: Settings = {
  soundEnabled: true,
  darkMode: true,
  termsAccepted: false,
};

export const useSettings = () => {
  const [settings, setSettings] = useState<Settings>(() => {
    const stored = localStorage.getItem(SETTINGS_KEY);
    if (stored) {
      return { ...defaultSettings, ...JSON.parse(stored) };
    }
    return defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    
    // Apply dark mode
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings]);

  const updateSetting = <K extends keyof Settings>(key: K, value: Settings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const acceptTerms = () => {
    updateSetting('termsAccepted', true);
  };

  return {
    settings,
    updateSetting,
    acceptTerms,
  };
};

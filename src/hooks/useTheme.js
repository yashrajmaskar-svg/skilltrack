import { useState, useEffect, useCallback } from 'react';
import { getTheme, setTheme as saveTheme } from '../services/localStorage';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    return getTheme() === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setIsDark(prev => {
      const newDark = !prev;
      saveTheme(newDark ? 'dark' : 'light');
      return newDark;
    });
  }, []);

  return { isDark, toggleTheme };
};

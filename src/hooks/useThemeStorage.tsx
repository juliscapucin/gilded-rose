'use client';

import { useEffect, useState } from 'react';

import { getTheme, updateTheme } from '@/utils';

export default function useThemeStorage() {
 const [theme, setTheme] = useState<string | null>(null);

 // Get theme from session storage on mount
 useEffect(() => {
  const newTheme = getTheme();
  if (newTheme) setTheme(newTheme);
 }, []);

 // Update theme in session storage on change
 useEffect(() => {
  if (!theme) return;
  updateTheme(theme);
 }, [theme]);

 return { theme, setTheme };
}

'use client';

import { useEffect } from 'react';

import { styled } from 'styled-components';
import { useThemeStorage } from '@/hooks';

const StyledThemeSwitcher = styled.button`
 font-size: var(--text-medium);
 color: ${({ theme }) => theme.colors.secondary};
`;

export default function ThemeSwitcher() {
 const { theme, setTheme } = useThemeStorage();

 const handleThemeChange = () => {
  theme === 'dark' ? setTheme('light') : setTheme('dark');
  location.reload();
 };

 useEffect(() => {
  let theme = sessionStorage.getItem('theme');
  if (!theme) theme = 'dark';
  theme === 'dark' ? setTheme('dark') : setTheme('light');
 }, []);

 return (
  <StyledThemeSwitcher onClick={(e) => handleThemeChange()}>
   Theme: {theme ? theme : 'dark'}
  </StyledThemeSwitcher>
 );
}

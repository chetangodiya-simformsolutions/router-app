import React, { createContext, useContext, useMemo } from 'react';
import { DARK_THEME_COLORS, LIGHT_THEME_COLORS } from './tokens';
import { useResolvedTheme } from './useResolvedTheme';
import type { ResolvedTheme, ThemeColors, ThemePreference } from '../types/theme';

type ThemeContextValue = {
  preference: ThemePreference;
  resolved: ResolvedTheme;
  colors: ThemeColors;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider = ({
  preference,
  children,
}: {
  preference: ThemePreference;
  children: React.ReactNode;
}) => {
  const resolved = useResolvedTheme(preference);

  const value = useMemo<ThemeContextValue>(() => {
    return {
      preference,
      resolved,
      colors: resolved === 'dark' ? DARK_THEME_COLORS : LIGHT_THEME_COLORS,
    };
  }, [preference, resolved]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }

  return context;
};

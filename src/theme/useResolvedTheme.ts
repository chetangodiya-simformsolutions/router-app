import { useColorScheme } from 'react-native';
import type { ResolvedTheme, ThemePreference } from '../types/theme';

export const resolveTheme = (
  preference: ThemePreference,
  deviceScheme: 'light' | 'dark' | null,
): ResolvedTheme => {
  if (preference === 'system') {
    return deviceScheme === 'dark' ? 'dark' : 'light';
  }

  return preference;
};

export const useResolvedTheme = (preference: ThemePreference): ResolvedTheme => {
  const deviceScheme = useColorScheme();
  return resolveTheme(preference, deviceScheme);
};

import { STORAGE_KEYS } from './keys';
import { safeGetItem, safeSetItem } from './persistence';
import type { ThemePreference } from '../types/theme';

const isThemePreference = (value: unknown): value is ThemePreference => {
  return value === 'light' || value === 'dark' || value === 'system';
};

export const getThemePreference = async (): Promise<ThemePreference> => {
  const value = await safeGetItem<unknown>(STORAGE_KEYS.themePreference, 'system');
  return isThemePreference(value) ? value : 'system';
};

export const setThemePreference = async (value: ThemePreference): Promise<void> => {
  await safeSetItem(STORAGE_KEYS.themePreference, value);
};

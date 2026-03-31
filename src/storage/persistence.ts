import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

const readRaw = async (key: string): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    return await SecureStore.getItemAsync(key);
  }
};

const writeRaw = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
    return;
  } catch {
    await SecureStore.setItemAsync(key, value);
  }
};

export const safeParseJSON = <T>(raw: string | null, fallback: T): T => {
  if (!raw) {
    return fallback;
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
};

export const safeGetItem = async <T>(key: string, fallback: T): Promise<T> => {
  try {
    const raw = await readRaw(key);
    return safeParseJSON<T>(raw, fallback);
  } catch {
    return fallback;
  }
};

export const safeSetItem = async <T>(key: string, value: T): Promise<void> => {
  try {
    await writeRaw(key, JSON.stringify(value));
  } catch (error) {
    throw new Error(`Failed to persist key "${key}": ${String(error)}`);
  }
};

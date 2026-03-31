import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AppProvider, useAppContext } from '../state/AppContext';
import { ThemeProvider, useTheme } from '../theme/ThemeContext';

const AppShell = () => {
  const { themePreference, isReady } = useAppContext();

  if (!isReady) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ThemeProvider preference={themePreference}>
      <ThemedStack />
    </ThemeProvider>
  );
};

const ThemedStack = () => {
  const { resolved } = useTheme();

  return (
    <>
      <StatusBar style={resolved === 'dark' ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
};

export default function RootLayout() {
  return (
    <AppProvider>
      <AppShell />
    </AppProvider>
  );
}

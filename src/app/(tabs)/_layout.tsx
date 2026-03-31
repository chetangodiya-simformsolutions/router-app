import { Tabs } from 'expo-router';
import React from 'react';
import { useTheme } from '../../theme/ThemeContext';

export default function TabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: colors.secondary },
        headerTintColor: colors.text,
        tabBarStyle: { backgroundColor: colors.secondary, borderTopColor: colors.border },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
      }}
    >
      <Tabs.Screen name="todos" options={{ title: 'Todos' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  );
}

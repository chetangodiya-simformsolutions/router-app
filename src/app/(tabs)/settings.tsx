import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { CompletedHistoryList } from '../../components/settings/CompletedHistoryList';
import { ThemeSelector } from '../../components/settings/ThemeSelector';
import { useAppContext } from '../../state/AppContext';
import { useTheme } from '../../theme/ThemeContext';

export default function SettingsScreen() {
  const { colors } = useTheme();
  const { themePreference, changeTheme, completedTodos } = useAppContext();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        <ThemeSelector value={themePreference} onChange={(value) => void changeTheme(value)} />
        <CompletedHistoryList data={completedTodos} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    padding: 16,
    gap: 14,
  },
});

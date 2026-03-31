import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

type Props = {
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

export const isValidDateOnly = (value: string): boolean => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
};

export const DueDateField = ({ value, onChange, error }: Props) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: colors.text }]}>Due Date (YYYY-MM-DD)</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="2026-04-01"
        autoCapitalize="none"
        autoCorrect={false}
        style={[
          styles.input,
          {
            color: colors.text,
            borderColor: error ? '#B00020' : colors.border,
            backgroundColor: colors.secondary,
          },
        ]}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  label: {
    fontWeight: '600',
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  error: {
    color: '#B00020',
    fontSize: 12,
  },
});

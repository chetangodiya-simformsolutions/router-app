import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import type { ThemePreference } from '../../types/theme';

type Props = {
  value: ThemePreference;
  onChange: (value: ThemePreference) => void;
};

const options: { label: string; value: ThemePreference }[] = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'Device Default', value: 'system' },
];

export const ThemeSelector = ({ value, onChange }: Props) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { borderColor: colors.border, backgroundColor: colors.muted }]}>
      <Text style={[styles.heading, { color: colors.text }]}>Theme</Text>
      <View style={styles.row}>
        {options.map((option) => {
          const selected = option.value === value;
          return (
            <Pressable
              key={option.value}
              onPress={() => onChange(option.value)}
              style={[
                styles.option,
                {
                  borderColor: selected ? colors.primary : colors.border,
                  backgroundColor: colors.secondary,
                },
              ]}
            >
              <Text style={[styles.optionText, { color: colors.text }]}>{option.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    gap: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  option: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  optionText: {
    fontWeight: '600',
  },
});

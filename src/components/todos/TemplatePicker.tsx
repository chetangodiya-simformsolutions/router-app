import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TODO_TEMPLATES } from '../../constants/todoTemplates';
import { useTheme } from '../../theme/ThemeContext';

type Props = {
  selectedTemplateId: string | null;
  onSelect: (id: string | null) => void;
};

export const TemplatePicker = ({ selectedTemplateId, onSelect }: Props) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: colors.text }]}>Template (optional)</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <Pressable
          onPress={() => onSelect(null)}
          style={[
            styles.pill,
            {
              borderColor: selectedTemplateId === null ? colors.primary : colors.border,
              backgroundColor: colors.secondary,
            },
          ]}
        >
          <Text style={[styles.pillText, { color: colors.text }]}>Manual</Text>
        </Pressable>
        {TODO_TEMPLATES.map((template) => {
          const selected = template.id === selectedTemplateId;
          return (
            <Pressable
              key={template.id}
              onPress={() => onSelect(template.id)}
              style={[
                styles.pill,
                {
                  borderColor: selected ? colors.primary : colors.border,
                  backgroundColor: colors.secondary,
                },
              ]}
            >
              <Text style={[styles.pillText, { color: colors.text }]}>{template.name}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  scroll: {
    gap: 8,
    paddingBottom: 4,
  },
  pill: {
    borderWidth: 1,
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  pillText: {
    fontSize: 13,
    fontWeight: '600',
  },
});

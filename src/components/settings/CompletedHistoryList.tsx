import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import type { CompletedHistoryRecord } from '../../types/todo';

type Props = {
  data: CompletedHistoryRecord[];
};

export const CompletedHistoryList = ({ data }: Props) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { borderColor: colors.border, backgroundColor: colors.muted }]}>
      <Text style={[styles.heading, { color: colors.text }]}>Completed History</Text>
      {data.length === 0 ? (
        <Text style={[styles.empty, { color: colors.text }]}>No completed todos yet.</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={[styles.separator, { backgroundColor: colors.border }]} />}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={[styles.title, { color: colors.text }]}>{item.title}</Text>
              <Text style={[styles.meta, { color: colors.text }]}>Completed: {item.completedAt.slice(0, 10)}</Text>
              <Text style={[styles.meta, { color: colors.text }]}>Due: {item.dueDate}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    minHeight: 200,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  empty: {
    fontSize: 14,
  },
  item: {
    paddingVertical: 8,
    gap: 2,
  },
  title: {
    fontWeight: '700',
    fontSize: 15,
  },
  meta: {
    fontSize: 12,
  },
  separator: {
    height: 1,
  },
});

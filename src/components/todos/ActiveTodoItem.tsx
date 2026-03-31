import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { TodoItem } from '../../types/todo';
import { useTheme } from '../../theme/ThemeContext';

type Props = {
  todo: TodoItem;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
};

export const ActiveTodoItem = ({ todo, onComplete, onDelete }: Props) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.secondary, borderColor: colors.border }]}>
      <View style={styles.row}>
        <Text style={[styles.title, { color: colors.text }]}>{todo.title}</Text>
        <Text style={[styles.date, { color: colors.text }]}>Due: {todo.dueDate}</Text>
      </View>
      {todo.details ? <Text style={[styles.details, { color: colors.text }]}>{todo.details}</Text> : null}
      <View style={styles.actions}>
        <Pressable
          onPress={() => onComplete(todo.id)}
          style={[styles.button, { backgroundColor: colors.primary }]}
        >
          <Text style={styles.buttonText}>Complete</Text>
        </Pressable>
        <Pressable onPress={() => onDelete(todo.id)} style={[styles.button, styles.deleteButton]}>
          <Text style={styles.buttonText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
  },
  date: {
    fontSize: 12,
    fontWeight: '500',
  },
  details: {
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  deleteButton: {
    backgroundColor: '#B00020',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

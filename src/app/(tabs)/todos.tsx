import React from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ActiveTodoItem } from '../../components/todos/ActiveTodoItem';
import { TodoForm } from '../../components/todos/TodoForm';
import { useAppContext } from '../../state/AppContext';
import { useTheme } from '../../theme/ThemeContext';

export default function TodosScreen() {
  const { colors } = useTheme();
  const { activeTodos, addTodo, removeTodo, markTodoCompleted } = useAppContext();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <FlatList
        data={activeTodos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        ListHeaderComponent={<TodoForm onSubmit={addTodo} />}
        ListEmptyComponent={
          <Text style={[styles.empty, { color: colors.text }]}>No active todos. Create your first one.</Text>
        }
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <ActiveTodoItem
            todo={item}
            onComplete={(id) => {
              markTodoCompleted(id).catch(() => {
                Alert.alert('Could not mark todo complete.');
              });
            }}
            onDelete={(id) => {
              removeTodo(id).catch(() => {
                Alert.alert('Could not delete todo.');
              });
            }}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    padding: 16,
    gap: 10,
  },
  empty: {
    marginTop: 18,
    fontSize: 14,
  },
});

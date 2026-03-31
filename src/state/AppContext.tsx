import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  completeTodo,
  createTodo,
  deleteTodo,
  getActiveTodos,
  getCompletedTodos,
} from '../storage/todoRepository';
import { getThemePreference, setThemePreference } from '../storage/themeStorage';
import type { CompletedHistoryRecord, TodoDraft, TodoItem } from '../types/todo';
import type { ThemePreference } from '../types/theme';

type AppContextValue = {
  activeTodos: TodoItem[];
  completedTodos: CompletedHistoryRecord[];
  themePreference: ThemePreference;
  isReady: boolean;
  addTodo: (draft: TodoDraft) => Promise<void>;
  removeTodo: (id: string) => Promise<void>;
  markTodoCompleted: (id: string) => Promise<void>;
  changeTheme: (preference: ThemePreference) => Promise<void>;
  reload: () => Promise<void>;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTodos, setActiveTodos] = useState<TodoItem[]>([]);
  const [completedTodos, setCompletedTodos] = useState<CompletedHistoryRecord[]>([]);
  const [themePreference, setThemeState] = useState<ThemePreference>('system');
  const [isReady, setIsReady] = useState(false);

  const reload = useCallback(async () => {
    const [active, completed, preference] = await Promise.all([
      getActiveTodos(),
      getCompletedTodos(),
      getThemePreference(),
    ]);

    setActiveTodos(active);
    setCompletedTodos(completed);
    setThemeState(preference);
  }, []);

  useEffect(() => {
    reload().finally(() => setIsReady(true));
  }, [reload]);

  const addTodo = useCallback(async (draft: TodoDraft) => {
    const created = await createTodo(draft);
    setActiveTodos((prev) => [created, ...prev]);
  }, []);

  const removeTodo = useCallback(async (id: string) => {
    await deleteTodo(id);
    setActiveTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const markTodoCompleted = useCallback(async (id: string) => {
    const target = activeTodos.find((todo) => todo.id === id);
    await completeTodo(id);

    if (!target) {
      return;
    }

    setActiveTodos((prev) => prev.filter((todo) => todo.id !== id));
    setCompletedTodos((prev) => [
      {
        ...target,
        status: 'completed',
        completedAt: new Date().toISOString(),
      },
      ...prev,
    ]);
  }, [activeTodos]);

  const changeTheme = useCallback(async (preference: ThemePreference) => {
    await setThemePreference(preference);
    setThemeState(preference);
  }, []);

  const value = useMemo<AppContextValue>(
    () => ({
      activeTodos,
      completedTodos,
      themePreference,
      isReady,
      addTodo,
      removeTodo,
      markTodoCompleted,
      changeTheme,
      reload,
    }),
    [activeTodos, completedTodos, themePreference, isReady, addTodo, removeTodo, markTodoCompleted, changeTheme, reload],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextValue => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }

  return context;
};

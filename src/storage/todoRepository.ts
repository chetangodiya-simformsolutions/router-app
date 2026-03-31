import { STORAGE_KEYS } from './keys';
import { safeGetItem, safeSetItem } from './persistence';
import { restoreTodos } from './todoMigrations';
import type { CompletedHistoryRecord, TodoDraft, TodoItem } from '../types/todo';

const todayDateOnly = (): string => new Date().toISOString().slice(0, 10);

const coerceTodoArray = (value: unknown): TodoItem[] => {
  if (Array.isArray(value)) {
    return value as TodoItem[];
  }

  if (value && typeof value === 'object') {
    const legacyItems = (value as { items?: unknown }).items;
    if (Array.isArray(legacyItems)) {
      return legacyItems as TodoItem[];
    }

    const legacyTodos = (value as { todos?: unknown }).todos;
    if (Array.isArray(legacyTodos)) {
      return legacyTodos as TodoItem[];
    }
  }

  return [];
};

const buildTodo = (draft: TodoDraft): TodoItem => ({
  id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
  title: draft.title.trim(),
  details: draft.details?.trim() || undefined,
  dueDate: draft.dueDate,
  status: 'active',
  createdAt: new Date().toISOString(),
  templateId: draft.templateId ?? null,
});

export const getActiveTodos = async (): Promise<TodoItem[]> => {
  const raw = await safeGetItem<unknown>(STORAGE_KEYS.activeTodos, []);
  const items = coerceTodoArray(raw);
  return restoreTodos(items.filter((item) => item.status !== 'completed'));
};

export const getCompletedTodos = async (): Promise<CompletedHistoryRecord[]> => {
  const raw = await safeGetItem<unknown>(STORAGE_KEYS.completedTodos, []);
  const items = coerceTodoArray(raw);
  return restoreTodos(items).map((item) => ({
    ...item,
    status: 'completed',
    completedAt: item.completedAt ?? item.createdAt,
  })) as CompletedHistoryRecord[];
};

export const createTodo = async (draft: TodoDraft): Promise<TodoItem> => {
  const next = buildTodo({ ...draft, dueDate: draft.dueDate || todayDateOnly() });
  const active = await getActiveTodos();
  await safeSetItem(STORAGE_KEYS.activeTodos, [next, ...active]);
  return next;
};

export const deleteTodo = async (id: string): Promise<void> => {
  const active = await getActiveTodos();
  const filtered = active.filter((item) => item.id !== id);
  await safeSetItem(STORAGE_KEYS.activeTodos, filtered);
};

export const completeTodo = async (id: string): Promise<void> => {
  const active = await getActiveTodos();
  const completed = await getCompletedTodos();
  const target = active.find((item) => item.id === id);

  if (!target) {
    return;
  }

  const nextActive = active.filter((item) => item.id !== id);
  const nextCompleted: CompletedHistoryRecord = {
    ...target,
    status: 'completed',
    completedAt: new Date().toISOString(),
  };

  await Promise.all([
    safeSetItem(STORAGE_KEYS.activeTodos, nextActive),
    safeSetItem(STORAGE_KEYS.completedTodos, [nextCompleted, ...completed]),
  ]);
};

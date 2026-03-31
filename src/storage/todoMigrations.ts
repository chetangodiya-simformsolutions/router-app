import { getTemplateById } from '../constants/todoTemplates';
import type { TodoItem } from '../types/todo';

const todayDateOnly = (): string => new Date().toISOString().slice(0, 10);

const toDateOnly = (value: unknown): string => {
  if (typeof value !== 'string' || value.length < 10) {
    return todayDateOnly();
  }

  return value.slice(0, 10);
};

const toIsoStringOrNow = (value: unknown): string => {
  if (typeof value === 'string' && value.length > 0) {
    return value;
  }

  return new Date().toISOString();
};

const toNonEmptyTitle = (value: unknown): string => {
  if (typeof value === 'string' && value.trim().length > 0) {
    return value.trim();
  }

  return 'Untitled todo';
};

export const normalizeTodoRecord = (todo: TodoItem): TodoItem => {
  const templateId = todo.templateId && getTemplateById(todo.templateId) ? todo.templateId : null;

  return {
    ...todo,
    title: toNonEmptyTitle(todo.title),
    dueDate: toDateOnly(todo.dueDate),
    createdAt: toIsoStringOrNow(todo.createdAt),
    completedAt: todo.completedAt ? toIsoStringOrNow(todo.completedAt) : undefined,
    templateId,
  };
};

export const restoreTodos = (items: TodoItem[]): TodoItem[] => {
  return items.map((item) => normalizeTodoRecord(item));
};

export type TodoStatus = 'active' | 'completed';

export type TodoItem = {
  id: string;
  title: string;
  details?: string;
  dueDate: string; // Date-only YYYY-MM-DD
  status: TodoStatus;
  createdAt: string;
  completedAt?: string;
  templateId?: string | null;
};

export type CompletedHistoryRecord = TodoItem & {
  status: 'completed';
  completedAt: string;
};

export type TodoTemplate = {
  id: string;
  name: string;
  title: string;
  details?: string;
  defaultDueOffsetDays?: number;
};

export type TodoDraft = {
  title: string;
  details?: string;
  dueDate: string;
  templateId?: string | null;
};

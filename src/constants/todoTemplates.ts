import type { TodoTemplate } from '../types/todo';

export const TODO_TEMPLATES: TodoTemplate[] = [
  {
    id: 'shopping',
    name: 'Shopping List',
    title: 'Buy groceries',
    details: 'Milk, eggs, vegetables, and fruits',
    defaultDueOffsetDays: 1,
  },
  {
    id: 'work-followup',
    name: 'Work Follow-up',
    title: 'Follow up on open tasks',
    details: 'Review pending action items with team',
    defaultDueOffsetDays: 2,
  },
  {
    id: 'fitness',
    name: 'Fitness Session',
    title: 'Complete workout',
    details: '30 minutes cardio + stretch',
    defaultDueOffsetDays: 0,
  },
];

export const getTemplateById = (id?: string | null): TodoTemplate | undefined => {
  if (!id) {
    return undefined;
  }

  return TODO_TEMPLATES.find((template) => template.id === id);
};

export const isValidTemplatePayload = (template: Partial<TodoTemplate>): boolean => {
  return Boolean(template.id && template.name && template.title);
};

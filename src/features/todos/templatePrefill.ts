import { getTemplateById } from '../../constants/todoTemplates';
import type { TodoDraft } from '../../types/todo';

const addDays = (offsetDays: number): string => {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().slice(0, 10);
};

export const applyTemplatePrefill = (templateId: string | null, current: TodoDraft): TodoDraft => {
  if (!templateId) {
    return { ...current, templateId: null };
  }

  const template = getTemplateById(templateId);
  if (!template) {
    return { ...current, templateId: null };
  }

  return {
    title: template.title,
    details: template.details,
    dueDate: addDays(template.defaultDueOffsetDays ?? 0),
    templateId: template.id,
  };
};

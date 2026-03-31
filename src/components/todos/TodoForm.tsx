import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { DueDateField, isValidDateOnly } from './DueDateField';
import { TemplatePicker } from './TemplatePicker';
import { applyTemplatePrefill } from '../../features/todos/templatePrefill';
import { useTheme } from '../../theme/ThemeContext';
import type { TodoDraft } from '../../types/todo';

type Props = {
  onSubmit: (draft: TodoDraft) => Promise<void>;
};

const today = () => new Date().toISOString().slice(0, 10);

const defaultDraft: TodoDraft = {
  title: '',
  details: '',
  dueDate: today(),
  templateId: null,
};

export const TodoForm = ({ onSubmit }: Props) => {
  const { colors } = useTheme();
  const [draft, setDraft] = useState<TodoDraft>(defaultDraft);
  const [titleError, setTitleError] = useState<string>('');
  const [dueDateError, setDueDateError] = useState<string>('');
  const [submitError, setSubmitError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = useMemo(() => Boolean(draft.title.trim()) && isValidDateOnly(draft.dueDate), [draft]);

  const onTemplateChange = (templateId: string | null) => {
    const prefilled = applyTemplatePrefill(templateId, draft);
    setDraft(prefilled);
    setTitleError('');
    setDueDateError('');
    setSubmitError('');
  };

  const submit = async () => {
    const title = draft.title.trim();
    const dateValid = isValidDateOnly(draft.dueDate);

    setTitleError(title ? '' : 'Title is required.');
    setDueDateError(dateValid ? '' : 'Enter a valid date in YYYY-MM-DD format.');

    if (!title || !dateValid) {
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError('');
      await onSubmit({
        ...draft,
        title,
        details: draft.details?.trim(),
        templateId: draft.templateId ?? null,
      });

      setDraft(defaultDraft);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Could not save todo. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.muted, borderColor: colors.border }]}>
      <Text style={[styles.heading, { color: colors.text }]}>Create Todo</Text>
      <TemplatePicker selectedTemplateId={draft.templateId ?? null} onSelect={onTemplateChange} />

      <View style={styles.field}>
        <Text style={[styles.label, { color: colors.text }]}>Title</Text>
        <TextInput
          value={draft.title}
          onChangeText={(title) => {
            setDraft((prev) => ({ ...prev, title }));
            if (title.trim()) {
              setTitleError('');
            }
            setSubmitError('');
          }}
          placeholder="Enter task title"
          style={[styles.input, { color: colors.text, borderColor: titleError ? '#B00020' : colors.border }]}
        />
        {titleError ? <Text style={styles.error}>{titleError}</Text> : null}
      </View>

      <View style={styles.field}>
        <Text style={[styles.label, { color: colors.text }]}>Details (optional)</Text>
        <TextInput
          value={draft.details}
          onChangeText={(details) => {
            setDraft((prev) => ({ ...prev, details }));
            setSubmitError('');
          }}
          placeholder="Add extra context"
          multiline
          style={[
            styles.input,
            styles.multiline,
            {
              color: colors.text,
              borderColor: colors.border,
            },
          ]}
        />
      </View>

      <DueDateField
        value={draft.dueDate}
        onChange={(dueDate) => {
          setDraft((prev) => ({ ...prev, dueDate }));
          if (isValidDateOnly(dueDate)) {
            setDueDateError('');
          }
          setSubmitError('');
        }}
        error={dueDateError}
      />

      {submitError ? <Text style={styles.error}>{submitError}</Text> : null}

      <Pressable
        onPress={submit}
        disabled={isSubmitting}
        style={[
          styles.submit,
          { backgroundColor: canSubmit ? colors.primary : '#A0A0A0' },
          isSubmitting ? styles.submitDisabled : null,
        ]}
      >
        <Text style={styles.submitText}>{isSubmitting ? 'Saving...' : 'Save Todo'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    gap: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
  },
  field: {
    gap: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
  multiline: {
    minHeight: 70,
    textAlignVertical: 'top',
  },
  error: {
    color: '#B00020',
    fontSize: 12,
  },
  submit: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  submitDisabled: {
    opacity: 0.75,
  },
  submitText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});

export type ValidationState = 'default' | 'error' | 'success';

export function getValidationMessage(state: ValidationState, message?: string): string {
  if (!message || state === 'default') return '';
  return message;
}
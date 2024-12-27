import { useState, useCallback } from 'react';
import type { ValidationState } from '../components/types';

export function useInputState(initialValue = '') {
  const [value, setValue] = useState(initialValue);
  const [state, setState] = useState<ValidationState>('default');
  const [error, setError] = useState<string>('');

  const validate = useCallback((newValue: string) => {
    if (!newValue) {
      setState('error');
      setError('This field is required');
      return false;
    }
    setState('success');
    setError('');
    return true;
  }, []);

  return {
    value,
    setValue,
    state,
    setState,
    error,
    setError,
    validate
  };
}
import { useState, useCallback } from 'react';

export function useButtonState(initialDisabled = false) {
  const [isDisabled, setIsDisabled] = useState(initialDisabled);

  const toggleDisabled = useCallback(() => {
    setIsDisabled(prev => !prev);
  }, []);

  return {
    isDisabled,
    setIsDisabled,
    toggleDisabled
  };
}
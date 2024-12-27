import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useInputState } from '../useInputState';

describe('useInputState', () => {
  it('initializes with default state', () => {
    const { result } = renderHook(() => useInputState());
    expect(result.current.value).toBe('');
    expect(result.current.state).toBe('default');
    expect(result.current.error).toBe('');
  });

  it('initializes with custom value', () => {
    const { result } = renderHook(() => useInputState('test'));
    expect(result.current.value).toBe('test');
  });

  it('validates empty value', () => {
    const { result } = renderHook(() => useInputState());
    act(() => {
      const isValid = result.current.validate('');
      expect(isValid).toBe(false);
      expect(result.current.state).toBe('error');
      expect(result.current.error).toBe('This field is required');
    });
  });

  it('validates non-empty value', () => {
    const { result } = renderHook(() => useInputState());
    act(() => {
      const isValid = result.current.validate('test');
      expect(isValid).toBe(true);
      expect(result.current.state).toBe('success');
      expect(result.current.error).toBe('');
    });
  });
});
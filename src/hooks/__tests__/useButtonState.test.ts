import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useButtonState } from '../useButtonState';

describe('useButtonState', () => {
  it('initializes with default state', () => {
    const { result } = renderHook(() => useButtonState());
    expect(result.current.isDisabled).toBe(false);
  });

  it('initializes with custom state', () => {
    const { result } = renderHook(() => useButtonState(true));
    expect(result.current.isDisabled).toBe(true);
  });

  it('toggles disabled state', () => {
    const { result } = renderHook(() => useButtonState());
    act(() => {
      result.current.toggleDisabled();
    });
    expect(result.current.isDisabled).toBe(true);
  });

  it('sets disabled state directly', () => {
    const { result } = renderHook(() => useButtonState());
    act(() => {
      result.current.setIsDisabled(true);
    });
    expect(result.current.isDisabled).toBe(true);
  });
});
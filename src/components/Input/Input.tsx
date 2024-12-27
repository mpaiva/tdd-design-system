import React, { forwardRef } from 'react';
import type { ValidationState } from '../types';
import { getInputStyles } from '../../utils/styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  state?: ValidationState;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  state = 'default',
  className = '',
  ...props
}, ref) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`${getInputStyles(state)} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';
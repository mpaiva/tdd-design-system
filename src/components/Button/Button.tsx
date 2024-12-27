import React from 'react';
import type { ButtonVariant } from '../types';
import { getButtonStyles } from '../../utils/styles';

interface ButtonProps {
  variant?: ButtonVariant;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export function Button({ 
  variant = 'primary', 
  disabled = false, 
  children, 
  onClick,
  className = ''
}: ButtonProps) {
  return (
    <button
      className={`${getButtonStyles(variant)} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
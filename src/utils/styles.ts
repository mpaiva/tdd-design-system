import type { ButtonVariant, ValidationState } from '../components/types';

export const getButtonStyles = (variant: ButtonVariant) => {
  const baseStyles = 'font-medium px-4 py-2 rounded transition-all duration-200';
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-100'
  };

  return `${baseStyles} ${variantStyles[variant]}`;
};

export const getInputStyles = (state: ValidationState) => {
  const baseStyles = 'w-full px-3 py-2 border rounded-md transition-all duration-200 focus:outline-none';
  const stateStyles = {
    default: 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200',
    error: 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200',
    success: 'border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-200'
  };

  return `${baseStyles} ${stateStyles[state]}`;
};
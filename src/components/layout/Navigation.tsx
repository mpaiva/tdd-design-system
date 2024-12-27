import React from 'react';
import { Menu } from 'lucide-react';
import { NavigationButtons } from './NavigationButtons';

export function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-5 w-5 text-gray-500" />
            <span className="ml-2 text-lg font-semibold text-gray-900">Design System</span>
          </div>
          <NavigationButtons />
        </div>
      </div>
    </nav>
  );
}
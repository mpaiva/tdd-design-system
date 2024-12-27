import React from 'react';
import { Home, Settings, User } from 'lucide-react';
import { Button } from '../react-wrappers';
import { CoverageReportButton } from './CoverageReportButton';

export function NavigationButtons() {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="secondary">
        <span className="flex items-center">
          <Home className="h-4 w-4 mr-2" />
          Home
        </span>
      </Button>
      <CoverageReportButton />
      <Button variant="secondary">
        <span className="flex items-center">
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </span>
      </Button>
      <Button variant="primary">
        <span className="flex items-center">
          <User className="h-4 w-4 mr-2" />
          Profile
        </span>
      </Button>
    </div>
  );
}
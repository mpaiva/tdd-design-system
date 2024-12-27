import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from '../react-wrappers';

export function CoverageReportButton() {
  const handleClick = () => {
    window.open('/coverage/index.html', '_blank');
  };

  return (
    <Button 
      variant="secondary" 
      onClick={handleClick}
      data-testid="coverage-button"
    >
      <span className="flex items-center">
        <FileText className="h-4 w-4 mr-2" />
        Coverage Report
      </span>
    </Button>
  );
}
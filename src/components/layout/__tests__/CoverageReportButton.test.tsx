import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '../../../test/test-utils';
import { CoverageReportButton } from '../CoverageReportButton';

describe('CoverageReportButton', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<CoverageReportButton />);
    const button = screen.getByTestId('coverage-button');
    expect(button).toBeInTheDocument();
    expect(screen.getByText('Coverage Report')).toBeInTheDocument();
  });

  it('opens coverage report in new tab when clicked', () => {
    render(<CoverageReportButton />);
    const button = screen.getByTestId('coverage-button');
    fireEvent.click(button);
    expect(window.open).toHaveBeenCalledWith('/coverage/index.html', '_blank');
  });
});
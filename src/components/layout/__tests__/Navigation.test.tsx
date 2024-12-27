import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../test/test-utils';
import { Navigation } from '../Navigation';

describe('Navigation', () => {
  it('renders correctly', () => {
    render(<Navigation />);
    expect(screen.getByText('Design System')).toBeInTheDocument();
  });

  it('renders navigation buttons', () => {
    render(<Navigation />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });
});
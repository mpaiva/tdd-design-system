import React, { PropsWithChildren } from 'react';
import { render, RenderOptions } from '@testing-library/react';

// Custom wrapper to provide any necessary providers/context
function Wrapper({ children }: PropsWithChildren<{}>) {
  return <>{children}</>;
}

function customRender(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, { wrapper: Wrapper, ...options });
}

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };
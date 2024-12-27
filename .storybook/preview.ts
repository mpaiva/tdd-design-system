import ResizeObserver from 'resize-observer-polyfill';
import type { Preview } from '@storybook/web-components';

// Ensure ResizeObserver is available
if (!window.ResizeObserver) {
  window.ResizeObserver = ResizeObserver;
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      // Improve docs performance
      inlineStories: false,
      iframeHeight: '200px',
    },
    // Reduce unnecessary re-renders
    layout: 'centered',
    backgrounds: {
      disable: true,
      grid: {
        disable: true
      }
    }
  },
};

export default preview;
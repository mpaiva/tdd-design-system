import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// Mock window.open
global.window.open = vi.fn();

// Mock web components
customElements.define('ds-button', 
  class extends HTMLElement {
    static get observedAttributes() {
      return ['variant', 'disabled'];
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.render();
    }

    render() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
          <button><slot></slot></button>
        `;
      }
    }
  }
);

// Cleanup after each test
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
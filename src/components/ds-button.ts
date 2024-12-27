import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { colors } from '../tokens/colors';

@customElement('ds-button')
export class DsButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      font-family: system-ui, sans-serif;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Primary variant */
    button.primary {
      background-color: ${colors.primary[600]};
      color: white;
    }

    button.primary:hover:not(:disabled) {
      background-color: ${colors.primary[700]};
    }

    /* Secondary variant */
    button.secondary {
      background-color: ${colors.neutral[200]};
      color: ${colors.neutral[900]};
    }

    button.secondary:hover:not(:disabled) {
      background-color: ${colors.neutral[300]};
    }
  `;

  @property({ type: String }) variant: 'primary' | 'secondary' = 'primary';
  @property({ type: Boolean }) disabled = false;

  render() {
    return html`
      <button
        class=${this.variant}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(e: Event) {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('ds-click', {
        bubbles: true,
        composed: true,
        detail: { originalEvent: e }
      }));
    }
  }
}
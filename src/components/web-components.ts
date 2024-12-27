// Register web components
import { DsButton } from './ds-button/ds-button';
import { DsInput } from './ds-input/ds-input';

// Ensure components aren't already defined before defining them
if (!customElements.get('ds-button')) {
  customElements.define('ds-button', DsButton);
}

if (!customElements.get('ds-input')) {
  customElements.define('ds-input', DsInput);
}
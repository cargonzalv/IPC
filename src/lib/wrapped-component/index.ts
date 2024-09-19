import ConektaCheckoutComponents from 'lib/ConektaCheckoutComponents';
import { WebComponentAdapter } from 'lib/WebComponentAdapter';

export const initConektaCheckoutComponents = () => {
  customElements.define('conekta-iframe', WebComponentAdapter);

  if (window) (window as any).WrappedConektaCheckoutComponents = ConektaCheckoutComponents;
};

initConektaCheckoutComponents();

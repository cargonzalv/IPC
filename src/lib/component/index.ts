import ConektaCheckoutComponents from 'lib/ConektaCheckoutComponents';
import { WebComponentAdapter } from 'lib/WebComponentAdapter';

const initConektaCheckoutComponents = () => {
  customElements.define('conekta-iframe', WebComponentAdapter);

  if (window) (window as any).ConektaCheckoutComponents = ConektaCheckoutComponents;
};

initConektaCheckoutComponents();

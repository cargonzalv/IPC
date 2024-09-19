import ConektaCheckoutComponentsWrapper from 'lib/wrapper/WrapperConektaCheckoutComponents';

const initWrapperConektaCheckoutComponents = () => {
  if (window) (window as any).ConektaCheckoutComponents = ConektaCheckoutComponentsWrapper;
};

initWrapperConektaCheckoutComponents();

interface ComponentInitializer {
  Card: (iframeProps: any) => void;
  SelfHosted: (iframeProps: any) => void;
  Integration: (iframeProps: any) => void;
}

export interface CustomWindow extends Window {
  DigitalFemsaCheckoutComponents: ComponentInitializer;
  WrappedConektaCheckoutComponents: ComponentInitializer;
}

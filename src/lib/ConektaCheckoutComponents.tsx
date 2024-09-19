import { ConektaSource } from 'common/constants';
import { IframeBackwardsCompatibleType, IframeCallbacks, IframeConfig } from 'interface';

const removeUndefinedProps = (obj: object) =>
  obj ? Object.fromEntries(Object.entries(obj).filter(([k, v]) => v !== undefined)) : {};

class ConektaCheckoutComponents {
  static checkBackwardCompatibility({
    locale,
    targetIFrame,
    checkoutRequestId,
    publicKey,
    useExternalSubmit,
    onCreateTokenSucceeded,
    onCreateTokenError,
    onFinalizePayment,
    onErrorPayment,
    onGetInfoSuccess,
    onEventListener,
    preRedirect,
    onUpdateSubmitTrigger,
    config: configInProps,
    callbacks: callbacksInProps,
    options: optionsIprops,
  }: IframeBackwardsCompatibleType): {
    config: IframeConfig;
    callbacks: IframeCallbacks;
    options: any;
  } {
    const oldVersionConfigProps: IframeConfig = {
      locale,
      targetIFrame,
      checkoutRequestId,
      publicKey,
      useExternalSubmit,
    };

    const oldVersionCallbackProps: IframeCallbacks = {
      onCreateTokenSucceeded,
      onCreateTokenError,
      onFinalizePayment,
      onErrorPayment,
      onGetInfoSuccess,
      onEventListener,
      preRedirect,
      onUpdateSubmitTrigger,
    };

    const config: IframeConfig = { ...oldVersionConfigProps, ...removeUndefinedProps(configInProps) };
    const callbacks: IframeCallbacks = { ...oldVersionCallbackProps, ...removeUndefinedProps(callbacksInProps) };

    const { styles } = optionsIprops || {};
    const textColor = styles?.letters?.paymentMethods?.color;

    const options = {
      button: {},
      paymentMethodInformation: {},
      colorPrimary: styles?.colors?.primary,
      colorText: textColor,
      colorLabel: textColor,
      ...optionsIprops,
    };

    // En iframe se necesitaba que al identificador del elemento donde se montaría el iframe se le agregara al inicio un #, esto ya no es necesario
    return {
      config: {
        ...config,
        locale: config.locale ? config.locale.toLowerCase() : 'es',
        targetIFrame: config.targetIFrame.startsWith('#') ? config.targetIFrame.substring(1) : config.targetIFrame,
      },
      callbacks,
      options,
    };
  }

  static mountComponent(
    iframeProps: IframeBackwardsCompatibleType,
    isIntegration: boolean = true,
    conektaSource: ConektaSource = ConektaSource.COMPONENT,
  ) {
    const { config, callbacks, options } = this.checkBackwardCompatibility(iframeProps);
    const el: any = document.createElement('conekta-iframe') as any;
    el.config = config;
    el.callbacks = callbacks;
    el.options = options;
    el.integration = isIntegration;
    el.conektaSource = conektaSource;
    el.isSelfHosted = iframeProps.isSelfHosted;
    el.preloadedState = iframeProps.preloadedState;
    el.isPlayground = iframeProps.isPlayground;
    el.playgroundConfig = iframeProps.playgroundConfig;
    sessionStorage.setItem('conektaSource', conektaSource);
    const target: HTMLElement = document.getElementById(config.targetIFrame)!;
    target.appendChild(el);
  }

  static Integration(iframeProps: IframeBackwardsCompatibleType) {
    this.mountComponent(iframeProps, true, ConektaSource.COMPONENT);
  }

  static Card(iframeProps: IframeBackwardsCompatibleType) {
    this.mountComponent(iframeProps, false, ConektaSource.COMPONENT_TOKENIZER);
  }

  static SelfHosted(iframeProps: IframeBackwardsCompatibleType) {
    this.mountComponent(iframeProps, false, iframeProps.conektaSource as ConektaSource);
  }
}

export default ConektaCheckoutComponents;

import { getCheckoutById } from 'app/pages/frames/http/checkoutService';
import { CheckoutRequest } from 'common/interface';
import { IframeBackwardsCompatibleType } from 'interface';

const entryPointPath = '/lib/component-static.min.js';
const CONEKTA_COMPONENT_URL = `${import.meta.env.VITE_CONEKTA_COMPONENT_URL}${
  import.meta.env.PACKAGE_VERSION
}${entryPointPath}`;

class ConektaCheckoutComponentsWrapper {
  static checkBackwardCompatibility({ checkoutRequestId, config: configInProps }: IframeBackwardsCompatibleType) {
    return checkoutRequestId || configInProps?.checkoutRequestId;
  }

  // se creó un archivo de configuración de vite que compila el entrypoint del wrapper y agrega este objeto al window global
  // generará exactamente el mismo archivo component-static.js en la misma ubicación para que sea retrocompatible pero este será el wrapper;
  // la config de vite que compila component ahora almacena el build un nivel de carpeta más abajo (carpeta lib)
  // desde el wrapper se carga esta url si el checkout es de conekta, si no, se carga la url de femsa
  static async mountComponent(
    iframeProps: IframeBackwardsCompatibleType,
    isTokenizer: boolean,
    isSelfHosted?: boolean,
  ) {
    const checkoutRequestId = this.checkBackwardCompatibility(iframeProps);
    const loadFemsaScript = await this.shouldLoadFemsaScript(isTokenizer, checkoutRequestId, isSelfHosted);
    const scriptUrl = loadFemsaScript ? import.meta.env.VITE_DIGITAL_FEMSA_COMPONENT_URL : CONEKTA_COMPONENT_URL;
    await this.loadScript(scriptUrl, () => {
      const checkoutComponentsHandler = loadFemsaScript
        ? (window as any).DigitalFemsaCheckoutComponents
        : (window as any).WrappedConektaCheckoutComponents;
      if (isTokenizer) {
        checkoutComponentsHandler.Card(iframeProps);
      } else if (isSelfHosted) {
        checkoutComponentsHandler.SelfHosted(iframeProps);
      } else {
        checkoutComponentsHandler.Integration(iframeProps);
      }
    });
    // consulto el flag femsaMigrated usando vanilla para saber si es migrado o no, si es migrado, uso el script de femsa, si no, uso el script de conekta
    // y paso los args de esta función al script
    // ej: window.DigitalFemsaCheckoutComponents.Card({config, callbacks, options}) o window.WrappedConektaCheckoutComponents.Card({config, callbacks, options})
  }

  static async shouldLoadFemsaScript(isTokenizer: boolean, checkoutRequestId: string, isSelfHosted: boolean = false) {
    const isFemsaEnabled = !!import.meta.env.VITE_ENABLE_FEMSA_WRAPPER;
    if (!isFemsaEnabled || isTokenizer || isSelfHosted) {
      return false;
    }
    try {
      const checkoutRequest: CheckoutRequest = await getCheckoutById(checkoutRequestId);
      return checkoutRequest.femsaMigrated;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  static async Integration(iframeProps: IframeBackwardsCompatibleType) {
    await this.mountComponent(iframeProps, false);
  }

  static async Card(iframeProps: IframeBackwardsCompatibleType) {
    await this.mountComponent(iframeProps, true);
  }

  static async SelfHosted(iframeProps: IframeBackwardsCompatibleType) {
    await this.mountComponent(iframeProps, false, true);
  }

  static loadScript(url: string, callback: () => void) {
    const script = document.createElement('script');
    script.src = url;

    script.onload = () => {
      callback();
    };

    script.onerror = () => {
      console.error(`Error loading script from ${url}`);
    };

    document.head.appendChild(script);
  }
}

export default ConektaCheckoutComponentsWrapper;

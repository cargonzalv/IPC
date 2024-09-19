import ConektaCheckoutComponentsWrapper from './WrapperConektaCheckoutComponents';
import { IframeBackwardsCompatibleType, IframeConfig } from 'interface';
import {
  conektaCheckoutComponentsHandler,
  digitalFemsaCheckoutComponentsHandler,
  migratedKey,
} from 'util/test/constants';
import {
  ID_CHECKOUT_INTERNAL_ERROR,
  ID_CHECKOUT_MIGRATED,
  ID_CHECKOUT_NO_MIGRATED,
} from 'util/test/mocks/checkout';

const femsaComponentUrl = 'https://assets.stg.digitalfemsa.io/component/4.1.2-stg-PAY22-2297.0/component-static.min.js';
const conektaComponentUrl = 'https://assets.stg.conekta.io/component/1.0.0/lib/component-static.min.js';

const iframeCompanyMigratedConfig: IframeBackwardsCompatibleType = {
  publicKey: migratedKey,
  checkoutRequestId: ID_CHECKOUT_MIGRATED,
  locale: 'es',
  targetIFrame: 'iframe',
} as IframeBackwardsCompatibleType;
const iframeConfigNoMigrated: IframeBackwardsCompatibleType = {
  ...iframeCompanyMigratedConfig,
  publicKey: '789',
  checkoutRequestId: ID_CHECKOUT_NO_MIGRATED,
};

describe('ConektaCheckoutComponentsWrapper', () => {
  beforeAll(() => {
    document.createElement = jest.fn(
      () =>
        ({
          src: '',
          onload: jest.fn(),
          onerror: jest.fn(),
        } as unknown as HTMLScriptElement),
    );
    document.head.appendChild = jest.fn();
  });

  afterAll(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('should load componentUrl when the integration is Tokenizer and the company is already migrated', async () => {
    // this behavior is correct because we will not block the loading of the js, the request to /tokens will fail
    const loadScriptSpy = jest.spyOn(ConektaCheckoutComponentsWrapper, 'loadScript');

    await ConektaCheckoutComponentsWrapper.Card(iframeCompanyMigratedConfig);
    const callback = loadScriptSpy.mock.calls[0][1];
    callback();

    expect(loadScriptSpy).toHaveBeenCalledWith(conektaComponentUrl, expect.any(Function));
    expect(conektaCheckoutComponentsHandler.Integration).not.toHaveBeenCalled();
    expect(conektaCheckoutComponentsHandler.Card).toHaveBeenCalledWith(iframeCompanyMigratedConfig);
    expect(conektaCheckoutComponentsHandler.SelfHosted).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.Integration).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.Card).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.SelfHosted).not.toHaveBeenCalled();
  });

  it('should load componentUrl when the integration is Tokenizer and the company is not migrated', async () => {
    const loadScriptSpy = jest.spyOn(ConektaCheckoutComponentsWrapper, 'loadScript');

    await ConektaCheckoutComponentsWrapper.Card(iframeConfigNoMigrated);

    // here we simulate the script loading
    const callback = loadScriptSpy.mock.calls[0][1];
    callback();

    expect(loadScriptSpy).toHaveBeenCalledWith(conektaComponentUrl, expect.any(Function));
    expect(conektaCheckoutComponentsHandler.Integration).not.toHaveBeenCalled();
    expect(conektaCheckoutComponentsHandler.Card).toHaveBeenCalledWith(iframeConfigNoMigrated);
    expect(conektaCheckoutComponentsHandler.SelfHosted).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.Integration).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.Card).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.SelfHosted).not.toHaveBeenCalled();
  });

  it('should load conektaComponentUrl when femsaMigrated is false and the integration is not Tokenizer', async () => {
    const loadScriptSpy = jest.spyOn(ConektaCheckoutComponentsWrapper, 'loadScript');

    await ConektaCheckoutComponentsWrapper.Integration(iframeConfigNoMigrated);
    // here we simulate the script loading
    const callback = loadScriptSpy.mock.calls[0][1];
    callback();

    expect(loadScriptSpy).toHaveBeenCalledWith(conektaComponentUrl, expect.any(Function));
    expect(conektaCheckoutComponentsHandler.Integration).toHaveBeenCalledWith(iframeConfigNoMigrated);
    expect(conektaCheckoutComponentsHandler.Card).not.toHaveBeenCalled();
    expect(conektaCheckoutComponentsHandler.SelfHosted).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.Integration).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.Card).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.SelfHosted).not.toHaveBeenCalled();
  });

  it('should load conektaComponentUrl when with old config options', async () => {
    const loadScriptSpy = jest.spyOn(ConektaCheckoutComponentsWrapper, 'loadScript');
    const oldConfig: IframeConfig = { publicKey: '789', checkoutRequestId: ID_CHECKOUT_NO_MIGRATED } as IframeConfig;
    const oldIframeConfig = {
      ...iframeCompanyMigratedConfig,
      publicKey: undefined as any,
      checkoutRequestId: '',
      config: oldConfig,
    };
    await ConektaCheckoutComponentsWrapper.Integration(oldIframeConfig);
    const callback = loadScriptSpy.mock.calls[0][1];
    callback();

    expect(loadScriptSpy).toHaveBeenCalledWith(conektaComponentUrl, expect.any(Function));
    expect(conektaCheckoutComponentsHandler.Integration).toHaveBeenCalledWith(oldIframeConfig);
    expect(conektaCheckoutComponentsHandler.Card).not.toHaveBeenCalled();
    expect(conektaCheckoutComponentsHandler.SelfHosted).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.Integration).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.Card).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.SelfHosted).not.toHaveBeenCalled();
  });

  it('should load femsaComponentUrl when femsaMigrated is true and the integration is not Tokenizer', async () => {
    const loadScriptSpy = jest.spyOn(ConektaCheckoutComponentsWrapper, 'loadScript');

    await ConektaCheckoutComponentsWrapper.Integration(iframeCompanyMigratedConfig);
    const callback = loadScriptSpy.mock.calls[0][1];
    callback();

    expect(loadScriptSpy).toHaveBeenCalledWith(femsaComponentUrl, expect.any(Function));
    expect(conektaCheckoutComponentsHandler.Integration).not.toHaveBeenCalled();
    expect(conektaCheckoutComponentsHandler.Card).not.toHaveBeenCalled();
    expect(conektaCheckoutComponentsHandler.SelfHosted).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.Integration).toHaveBeenCalledWith(iframeCompanyMigratedConfig);
    expect(digitalFemsaCheckoutComponentsHandler.Card).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.SelfHosted).not.toHaveBeenCalled();
  });

  it('should load conektaComponentUrl when integration is selfHosted', async () => {
    const loadScriptSpy = jest.spyOn(ConektaCheckoutComponentsWrapper, 'loadScript');

    await ConektaCheckoutComponentsWrapper.SelfHosted(iframeConfigNoMigrated);

    const callback = loadScriptSpy.mock.calls[0][1];
    callback();

    expect(loadScriptSpy).toHaveBeenCalledWith(conektaComponentUrl, expect.any(Function));
    expect(conektaCheckoutComponentsHandler.Integration).not.toHaveBeenCalled();
    expect(conektaCheckoutComponentsHandler.Card).not.toHaveBeenCalled();
    expect(conektaCheckoutComponentsHandler.SelfHosted).toHaveBeenCalledWith(iframeConfigNoMigrated);
    expect(digitalFemsaCheckoutComponentsHandler.Integration).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.Card).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.SelfHosted).not.toHaveBeenCalled();
  });

  it('should load conekta script when the server returns error 500', async () => {
    const loadScriptSpy = jest.spyOn(ConektaCheckoutComponentsWrapper, 'loadScript');

    const errorIframeConfig: IframeBackwardsCompatibleType = {
      ...iframeCompanyMigratedConfig,
      checkoutRequestId: ID_CHECKOUT_INTERNAL_ERROR,
    };

    await ConektaCheckoutComponentsWrapper.Integration(errorIframeConfig);
    const callback = loadScriptSpy.mock.calls[0][1];
    callback();

    expect(loadScriptSpy).toHaveBeenCalledWith(conektaComponentUrl, expect.any(Function));
    expect(conektaCheckoutComponentsHandler.Integration).toHaveBeenCalledWith(errorIframeConfig);
    expect(conektaCheckoutComponentsHandler.Card).not.toHaveBeenCalled();
    expect(conektaCheckoutComponentsHandler.SelfHosted).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.Integration).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.Card).not.toHaveBeenCalled();
    expect(digitalFemsaCheckoutComponentsHandler.SelfHosted).not.toHaveBeenCalled();
  });

  describe('loadScript function', () => {
    const mockCallback = jest.fn();

    beforeAll(() => {
      console.error = jest.fn();
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should log an error message if the script fails to load', () => {
      ConektaCheckoutComponentsWrapper.loadScript(conektaComponentUrl, mockCallback);
      const scriptElement = (document.createElement as any).mock.results[0].value;

      scriptElement.onerror?.();

      expect(document.head.appendChild).toHaveBeenCalledWith(scriptElement);
      expect(console.error).toHaveBeenCalledWith(`Error loading script from ${conektaComponentUrl}`);
    });
  });
});

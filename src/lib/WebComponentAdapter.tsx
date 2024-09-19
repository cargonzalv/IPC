import { IframeCallbacks, IframeConfig, PlaygroundConfig } from 'interface';
import ReactDOM from 'react-dom/client';
import App from '../App';

export class WebComponentAdapter extends HTMLElement {
  private _config: IframeConfig = {
    checkoutRequestId: '',
    locale: 'es',
    publicKey: '',
    targetIFrame: '',
  };

  private _callbacks: IframeCallbacks = {};
  private _options: any = {};
  private _integration: boolean = false;
  private _isSelfHosted: boolean = false;
  private _isPlayground: boolean = false;
  private _playgroundConfig: PlaygroundConfig | undefined = undefined;
  private _conektaSource: string = '';
  private _preloadedState: any = {};
  private reactRoot: any = null;

  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['options'];
  }

  connectedCallback() {
    this.reactRoot = ReactDOM.createRoot(this);
    this.renderReact();
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    if (oldValue !== newValue && name === 'options') {
      this._options = JSON.parse(newValue);
      this.renderReact();
    }
  }

  renderReact() {
    this.reactRoot.render(
      <App
        config={this.config}
        callbacks={this.callbacks}
        options={this.options}
        integration={this.integration}
        isSelfHosted={this.isSelfHosted}
        isPlayground={this.isPlayground}
        conektaSource={this.conektaSource}
        preloadedState={this.preloadedState}
        playgroundConfig={this.playgroundConfig}
      />,
    );
  }

  get config(): IframeConfig {
    return this._config;
  }
  set config(config: IframeConfig) {
    this._config = config;
  }

  get callbacks(): IframeCallbacks {
    return this._callbacks;
  }
  set callbacks(callbacks: IframeCallbacks) {
    this._callbacks = callbacks;
  }

  get options(): any {
    return this._options;
  }
  set options(options: any) {
    this._options = options;
    this.setAttribute('options', JSON.stringify(options));
  }

  get integration(): boolean {
    return this._integration;
  }
  set integration(integration: boolean) {
    this._integration = integration;
  }

  get isSelfHosted(): boolean {
    return this._isSelfHosted;
  }
  set isSelfHosted(isSelfHosted: boolean) {
    this._isSelfHosted = isSelfHosted;
  }

  get isPlayground(): boolean {
    return this._isPlayground;
  }
  set isPlayground(isPlayground: boolean) {
    this._isPlayground = isPlayground;
  }

  get playgroundConfig(): PlaygroundConfig | undefined {
    return this._playgroundConfig;
  }
  set playgroundConfig(playgroundConfig: PlaygroundConfig | undefined) {
    this._playgroundConfig = playgroundConfig;
  }

  get conektaSource(): string {
    return this._conektaSource;
  }
  set conektaSource(conektaSource: string) {
    this._conektaSource = conektaSource;
  }

  get preloadedState(): any {
    return this._preloadedState;
  }
  set preloadedState(preloadedState: any) {
    this._preloadedState = preloadedState;
  }
}

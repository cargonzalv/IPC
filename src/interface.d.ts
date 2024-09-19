import { IPerformanceMeasure } from 'app/pages/frames/pages/helpers';

export interface IframeConfig {
  locale: string;
  checkoutRequestId: string;
  publicKey: string;
  targetIFrame: string;
  whiteLabel?: boolean;
  useExternalSubmit?: boolean;
}

export interface IframeCallbacks {
  onCreateTokenSucceeded?: (token: string) => void;
  onCreateTokenError?: (error: string) => void;
  onFinalizePayment?: (order: any) => void;
  onErrorPayment?: (error: string) => void;
  onGetInfoSuccess?: (performanceMeasure: IPerformanceMeasure) => void;
  onEventListener?: (payload: { name: string; value: any }) => void;
  preRedirect?: (urlRedirect: string) => Promise<boolean>;
  onUpdateSubmitTrigger?: (triggerSubmitFromExternalFunction: (args: any) => void) => void;
}

export interface IFrame {
  integration?: boolean;
  isSelfHosted?: boolean;
  preloadedState?: any;
  conektaSource: string;
  config: IframeConfig;
  callbacks: IframeCallbacks;
  options: any;
  container?: React.RefObject<HTMLDivElement>;
  isPlayground?: boolean;
  playgroundConfig?: PlaygroundConfig;
}

interface PlaygroundConfig {
  provider: string;
}

export type IframeBackwardsCompatibleType = IFrame & IframeCallbacks & IframeConfig;

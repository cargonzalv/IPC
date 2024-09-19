import { ConektaSource } from 'common/constants';
import { IFrame } from 'interface';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const INITIAL_CONFIG: IFrame = {
  config: {
    checkoutRequestId: '',
    locale: 'es',
    publicKey: '',
    targetIFrame: 'root',
  },
  callbacks: {},
  options: {},
  conektaSource: ConektaSource.COMPONENT,
};

interface ConfigState {
  iframe: IFrame;
  setIframe: (newIframe: IFrame) => void;
}

const useConfigStore = create<ConfigState>()(
  devtools(
    (set) => ({
      iframe: INITIAL_CONFIG,
      setIframe: (newIframe) => set({ iframe: newIframe }, false, 'setIframe'),
    }),
    {
      name: 'Component/Config',
    },
  ),
);

const useConfigContext = () => {
  const iframe = useConfigStore((state) => state.iframe);
  const setIframe = useConfigStore((state) => state.setIframe);
  return { iframe, setIframe };
};

export { useConfigContext };

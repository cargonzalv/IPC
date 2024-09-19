import { CustomWindow } from 'global';
import { setupServer } from 'msw/node';
import { conektaCheckoutComponentsHandler, digitalFemsaCheckoutComponentsHandler } from './constants';
import { handlers } from './handlers';
import '@testing-library/jest-dom';

declare var window: CustomWindow;

jest.mock('i18next', () => ({
  use: jest.fn(),
  init: jest.fn(),
  language: 'es',
}));

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  Trans: ({ i18nKey }: any) => i18nKey,
  I18nextProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

jest.mock('@datadog/browser-logs', () => ({
  datadogLogs: {
    init: jest.fn(),
    logger: {
      info: jest.fn(),
    },
  },
}));

jest.mock('app/pages/frames/helpers/fingerprint', () => ({
  Fingerprint: {
    init: jest.fn(),
    getVisitorId: () => 'randomVisitorID',
    x64Hash128: () => 'KAD1123ASDASD',
  },
}));

jest.mock('app/util/analytics', () => ({
  sendDataToDataLayer: jest.fn(),
  getGAClientId: () => 'GA-123456',
}));

jest.mock('react-ga4', () => ({
  __esModule: true,
  default: {
    initialize: jest.fn(),
    gtag: jest.fn(),
  },
}));

export const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
  window.DigitalFemsaCheckoutComponents = digitalFemsaCheckoutComponentsHandler;
  window.WrappedConektaCheckoutComponents = conektaCheckoutComponentsHandler;
});

beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  server.resetHandlers();
  jest.restoreAllMocks();
});

afterAll(() => {
  server.close();
});

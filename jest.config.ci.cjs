module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: 'ts-jest-mock-import-meta',
              options: {
                metaObjectReplacement: {
                url: 'https://www.url.com',
                  env: {
                    VITE_BASE_URL: 'https://pay.stg.conekta.io/',
                    VITE_ASSETS_URL: 'https://assets.conekta.com/component/**/assets/',
                    VITE_CHECKOUT_BACKEND: 'https://services.stg.conekta.io/checkout-bff',
                    VITE_HOSTED_PAYMENT_URL_SECONDS_TO_REDIRECT: 4,
                    VITE_DD_RUM_APP_ID: 'test_dd_rum_app_id',
                    VITE_DD_RUM_CLIENT_TOKEN: 'test_dd_rum_client_token',
                    VITE_DD_LOGS_CLIENT_TOKEN: 'test_dd_logs_client_token',
                    VITE_DD_SERVICE: 'ct-checkout-fe',
                    VITE_GOOGLE_ANALYTICS_ID: 'test_google_analytics_id',
                    VITE_GOOGLE_TAG_MANAGER_ID: 'test_google_tag_manager_id',
                    VITE_CONEKTA_URL: 'https://api.stg.conekta.io/',
                    VITE_CONEKTA_VERSION: 'v2.0.0',
                    VITE_CONEKTA_API: '0.3.0',
                    VITE_CONEKTA_BUILD: '2.0.17',
                    VITE_THREE_DS_FRONT_URL: 'https://3ds-pay.stg.conekta.io',
                    VITE_ENABLE_FEMSA_WRAPPER: true,
                    VITE_DIGITAL_FEMSA_COMPONENT_URL:
                      'https://assets.stg.digitalfemsa.io/component/4.1.2-stg-PAY22-2297.0/component-static.min.js',
                    VITE_CONEKTA_COMPONENT_URL: 'https://assets.stg.conekta.io/component/',
                    PACKAGE_VERSION: '1.0.0',
                  },
                },
              },
            },
          ],
        },
      },
    ],
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '<rootDir>/src/util/test/setupTestsAfterEnv.tsx'],
  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^common/(.*)$': '<rootDir>/src/common/$1',
    '^util/(.*)$': '<rootDir>/src/util/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss)$': '<rootDir>/src/util/test/styleMock.ts',
  },
  maxWorkers: 1,
  coveragePathIgnorePatterns: ['/node_modules/', '\\.test\\.(ts|tsx)$', 'src/util/test'],
};

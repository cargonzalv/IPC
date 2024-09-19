import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteCompression from 'vite-plugin-compression';
import EnvironmentVariables from 'vite-plugin-environment';
import { resolve } from 'path';

const packageJson = require('./package.json');
const version = packageJson.version;

export default defineConfig({
  base: '',
  plugins: [react(), tsconfigPaths(), viteCompression(), EnvironmentVariables(['NODE_ENV'])],
  build: {
    outDir: `dist/${version}/playground`,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return;
        }
        warn(warning);
      },
    },
  },
});

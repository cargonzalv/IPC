import { UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import viteCompression from 'vite-plugin-compression';
import EnvironmentVariables from 'vite-plugin-environment';

const packageJson = require('./package.json');
const version = packageJson.version;

function createViteConfig(entry: string, outDirSuffix = ''): UserConfig {
  return {
    plugins: [react(), tsconfigPaths(), viteCompression(), EnvironmentVariables(['NODE_ENV'])],
    base: '',
    build: {
      lib: {
        entry,
        name: 'component',
        fileName: 'component',
        formats: ['es', 'cjs', 'umd'],
      },
      outDir: `dist/${version}${outDirSuffix}`,
      cssCodeSplit: false,
      rollupOptions: {
        output: [
          {
            entryFileNames: `component-static.min.js`,
            assetFileNames: `[name].[ext]`,
            format: 'umd',
            esModule: true,
            exports: 'named',
            name: 'component',
          },
          {
            entryFileNames: `assets/component.min.js`,
            assetFileNames: `assets/[name].[ext]`,
            format: 'es',
            esModule: true,
            exports: 'named',
            name: 'component',
          },
        ],
        onwarn(warning, warn) {
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
            return;
          }
          warn(warning);
        },
      },
    },
    define: {
      'import.meta.env.PACKAGE_VERSION': JSON.stringify(version),
    },
  };
}

export default createViteConfig;

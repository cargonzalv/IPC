import { defineConfig } from 'vite';

const createViteConfig = require('./buildUtil').default;

export default defineConfig(createViteConfig('src/lib/wrapper/index.ts'));

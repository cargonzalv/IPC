const dotenv = require('dotenv');
const path = require('path');
const { execSync } = require('child_process');

const env = process.env.NODE_ENV || 'development';

const envFileMap = {
  prod: '.env.production',
  staging: '.env.staging',
  default: '.env',
};

const currentEnv = envFileMap[env] || envFileMap.default;
const envConfig = dotenv.config({ path: path.resolve(__dirname, currentEnv) });

let scriptsToRun = [`npm run build-playground:${env}`];
if (envConfig.parsed?.VITE_ENABLE_FEMSA_WRAPPER === 'true') {
  scriptsToRun.unshift(`npm run build-wrapped-component:${env}`);
  scriptsToRun.unshift(`npm run build-wrapper:${env}`);
} else {
  scriptsToRun.unshift(`npm run build-component:${env}`);
}

try {
  scriptsToRun.forEach((scriptToRun) => {
    execSync(scriptToRun, { stdio: 'inherit' });
  });
} catch (error) {
  console.error('Error al ejecutar el script:', error);
}

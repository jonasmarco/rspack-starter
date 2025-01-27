import {
  AppConfig,
  TargetEnvConfig,
} from '@app/types/Config';

const env = process.env.APP_ENV || 'development';
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const cookieName = 'app';

const config: TargetEnvConfig = {
  development: {
    path: '/',
    baseUrl: `http://${host}:${port}`,
    endpoint: '',
  },
  uat: {
    path: '/front/rspack/',
    baseUrl: 'https://opensource.do.fillet.dev',
    endpoint: '',
  },
  production: {
    path: '/',
    baseUrl: '',
    endpoint: '',
  },
};

export default {
  ...config[env],
  env,
  host,
  port,
  cookieName,
} as AppConfig;

import {AppConfig, TargetEnvConfig} from '@app/types/Config';

const env = process.env.APP_ENV || 'development';
const node = process.env.NODE_ENV || 'development';
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;
const type = process.env.BUILD_TYPE || 'web';

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
    path: '/front/rspack/',
    baseUrl: 'https://opensource.fillet',
    endpoint: '',
  },
};

export default {
  ...config[env],
  env,
  node,
  host,
  port,
  type,
  cookieName,
} as AppConfig;

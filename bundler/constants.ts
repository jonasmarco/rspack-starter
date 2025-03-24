import appConfig from '../src/config/App';

// Description: This file contains the constants used in the bundler.
export const defines: Record<string, string> = {
  'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV || 'development'),
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  'process.env.HOST': JSON.stringify(process.env.HOST || 'localhost'),
  'process.env.PORT': JSON.stringify(process.env.PORT || 4000),
  'process.env.BUILD_TYPE': JSON.stringify(process.env.BUILD_TYPE || 'web'),
};

// Target browsers, veja: https://github.com/browserslist/browserslist
export const targets = ['chrome >= 87', 'edge >= 88', 'firefox >= 78', 'safari >= 14'];

// Verify if the build is for web
export const isWeb = appConfig.type === 'web';

// Verify if the build is for development
export const isDev = appConfig.node === 'development';

// Entry point
export const entry = {main: './src/main.tsx'};

// Environment
export const isUat = appConfig.env === 'uat';

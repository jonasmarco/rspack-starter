import * as path from 'path';

import appConfig from '../src/config/App';

export const output = {
  path: path.resolve(
    __dirname,
    `../dist/${appConfig.env === 'uat' ? 'uat' : 'production'}`,
  ),
  filename: 'assets/[name].[contenthash].js',
  chunkFilename: 'assets/[name].[contenthash].chunk.js',
  assetModuleFilename: 'assets/[name].[hash][ext][query]',
  publicPath: `${appConfig.baseUrl}${appConfig.path}`,
};

export const outputLib = {
  path: path.resolve(__dirname, '../dist/lib'),
  filename: 'final.js',
  library: {
    name: 'MyLib',
    type: 'umd',
  },
  globalObject: 'this',
};

export const buildType = appConfig.type;

export const entry =
  buildType === 'web' ? {main: './src/main.tsx'} : {main: './src/index.tsx'};

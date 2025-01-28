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

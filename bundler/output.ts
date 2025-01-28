import * as path from 'path';

import { isDev } from './constants';

export const output = {
  path: path.resolve(__dirname, `../dist/${isDev ? 'uat' : 'production'}`),
  filename: 'assets/[name].[contenthash].js',
  chunkFilename: 'assets/[name].[contenthash].chunk.js',
  assetModuleFilename: 'assets/[name].[hash][ext][query]',
};

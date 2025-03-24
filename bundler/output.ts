import * as path from 'path';

import appConfig from '../src/config/App';
import {isUat} from './constants';

export const output = {
  path: path.resolve(__dirname, `../dist/${isUat ? 'uat' : 'production'}`),
  filename: 'assets/[name].[contenthash].js',
  chunkFilename: 'assets/[name].[contenthash].chunk.js',
  assetModuleFilename: 'assets/[name].[hash][ext][query]',
  publicPath: `${appConfig.baseUrl}${appConfig.path}`,
};

export const outputLib = {
  path: path.resolve(__dirname, '../dist/lib'),
  filename: 'final.js',
  asyncChunks: false,
  chunkFormat: 'module',
  clean: true,
  library: {
    name: 'MyLib',
    type: 'umd',
  },
};

import * as path from 'path';

import appConfig from '../src/config/App';
import {isUat, isWeb} from './constants';

export const output = {
  path: path.resolve(__dirname, `../dist/${!isWeb ? 'lib' : isUat ? 'uat' : 'production'}`),
  filename: isWeb ? 'assets/[name].[contenthash].js' : 'final.js',
  chunkFilename: 'assets/[name].[contenthash].chunk.js',
  assetModuleFilename: 'assets/[name].[hash][ext][query]',
  publicPath: `${appConfig.baseUrl}${appConfig.path}`,
  clean: true,
};

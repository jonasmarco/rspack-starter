import * as path from 'path';

import { isDev } from './constants';

export const output = {
  path: path.resolve(__dirname, `../dist/${isDev ? 'uat' : 'production'}`),
  filename: '[name].[contenthash].js',
};

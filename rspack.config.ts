import { defineConfig } from '@rspack/cli';

import * as path from 'path';

import { isDev } from './bundler/constants';
import { devServer } from './bundler/devServer';
import { optimization } from './bundler/optimization';
import {
  buildType,
  entry,
  output,
  outputLib,
} from './bundler/output';
import plugins from './bundler/plugins';
import { rules } from './bundler/rules';

const isWeb = buildType === 'web';

export default defineConfig({
  context: __dirname,
  entry,
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.jsx'],
    tsConfig: path.resolve(__dirname, './tsconfig.json'),
  },
  module: {
    rules,
  },
  plugins,
  optimization: isWeb
    ? optimization
    : {...optimization, splitChunks: false, runtimeChunk: false},
  devServer: isWeb ? devServer : undefined,
  mode: isDev ? 'development' : 'production',
  devtool: isWeb ? (isDev ? 'inline-source-map' : 'source-map') : false,
  experiments: {
    css: isWeb,
  },
  output: isWeb ? output : outputLib,
  target: 'web',
});

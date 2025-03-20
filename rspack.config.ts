import {defineConfig} from '@rspack/cli';

import * as path from 'path';

import {entry, isDev, isWeb} from './bundler/constants';
import {devServer} from './bundler/devServer';
import {webOptimization} from './bundler/optimization';
import {output, outputLib} from './bundler/output';
import plugins from './bundler/plugins';
import {rules} from './bundler/rules';

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
  optimization: isWeb ? webOptimization : {...webOptimization, splitChunks: false, runtimeChunk: false},
  devServer: isWeb ? devServer : undefined,
  mode: isDev ? 'development' : 'production',
  devtool: isWeb ? (isDev ? 'inline-source-map' : 'source-map') : false,
  output: isWeb ? output : outputLib,
  target: 'web',
  externalsType: isWeb ? 'var' : 'umd',
  experiments: {
    css: isWeb,
  },
});

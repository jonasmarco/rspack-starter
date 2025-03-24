import {defineConfig} from '@rspack/cli';

import * as path from 'path';

import {entry, isDev} from './bundler/constants';
import {devServer} from './bundler/devServer';
import {webOptimization} from './bundler/optimization';
import {output} from './bundler/output';
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
  optimization: webOptimization,
  devServer: devServer,
  mode: isDev ? 'development' : 'production',
  devtool: 'inline-source-map',
  output: output,
  target: 'web',
  experiments: {
    css: true,
  },
});

import {defineConfig} from '@rspack/cli';

import * as path from 'path';

import {isDev} from './bundler/constants';
import {devServer} from './bundler/devServer';
import {optimization} from './bundler/optimization';
import {buildType, entry, output, outputLib} from './bundler/output';
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
  optimization,
  devServer: buildType === 'web' ? devServer : undefined,
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'inline-source-map' : 'source-map',
  experiments: {
    css: true,
  },
  output: buildType === 'web' ? output : outputLib,
  target: 'web',
});

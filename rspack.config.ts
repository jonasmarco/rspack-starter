import { defineConfig } from '@rspack/cli';

import * as path from 'path';

import { isDev } from './bundler/constants';
import { devServer } from './bundler/devServer';
import { optimization } from './bundler/optimization';
import { output } from './bundler/output';
import plugins from './bundler/plugins';
import { rules } from './bundler/rules';

export default defineConfig({
  context: __dirname,
  entry: {
    main: './src/main.tsx',
  },
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.jsx'],
    tsConfig: path.resolve(__dirname, './tsconfig.json'),
  },
  module: {
    rules,
  },
  plugins,
  optimization,
  devServer,
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'inline-source-map' : 'source-map',
  experiments: {
    css: true,
  },
  output,
  target: 'web',
});

import { defineConfig } from '@rspack/cli';
import { HtmlRspackPluginOptions, rspack } from '@rspack/core';
import * as RefreshPlugin from '@rspack/plugin-react-refresh';

import * as path from 'path';

const isDev = process.env.NODE_ENV === 'development';

const config: HtmlRspackPluginOptions = {
  template: './index.html',
  filename: 'index.html',
  title: 'Fillet.JS',
  favicon: 'fillet.svg',
  scriptLoading: 'defer',
  inject: true,
  hash: true,
  minify: true,
  sri: 'sha384',
};

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ['chrome >= 87', 'edge >= 88', 'firefox >= 78', 'safari >= 14'];

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
    rules: [
      {
        test: /\.(png?|jpg?|gif?|svg?)$/,
        type: 'asset',
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                    development: isDev,
                    refresh: isDev,
                  },
                },
              },
              env: { targets },
            },
          },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: 'sass-loader',
            options: {
              api: 'modern-compiler',
              implementation: require.resolve('sass-embedded'),
              additionalData: '@use "./src/stylesheets/includes/index" as *;',
            },
          },
        ],
        type: 'css',
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin(config),
    isDev ? new RefreshPlugin() : null,
  ].filter(Boolean),
  optimization: {
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin(),
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets },
      }),
    ],
  },
  experiments: {
    css: true,
  },
});

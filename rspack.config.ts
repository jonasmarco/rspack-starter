import { defineConfig } from '@rspack/cli';
import {
  DefinePlugin,
  HtmlRspackPluginOptions,
  rspack,
} from '@rspack/core';
import * as RefreshPlugin from '@rspack/plugin-react-refresh';

import * as path from 'path';

import appConfig from './src/config/App';

const isDev = process.env.NODE_ENV === 'development';

const config: HtmlRspackPluginOptions = {
  template: './index.html',
  filename: 'index.html',
  title: 'Fillet.JS',
  favicon: 'fillet.svg',
  scriptLoading: 'defer',
  inject: true,
  hash: true,
  minify: isDev,
  sri: 'sha384',
};

const defines: Record<string, string> = {
  'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV || 'development'),
  'process.env.HOST': JSON.stringify(process.env.HOST || 'localhost'),
  'process.env.PORT': JSON.stringify(process.env.PORT || 4000),
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
      // jsx, tsx
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
      // styles
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: 'sass-loader',
            options: {
              api: 'modern-compiler',
              implementation: require.resolve('sass-embedded'),
              additionalData: '@use "./src/stylesheets/includes/index" as *;',
              sourceMap: isDev,
            },
          },
        ],
        type: 'css',
      },
      // images
      {
        test: /\.(jpe?g|png|gif|svg|webp)/i,
        type: 'asset/resource',
      },
      // videos
      {
        test: /\.(mp4|webm)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
      },
      // fonts
      {
        test: /(\.woff|\.woff2|\.svg|.eot|\.ttf)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin(config),
    isDev ? new RefreshPlugin() : null,
    new DefinePlugin(defines),
  ].filter(Boolean),
  optimization: {
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin(),
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets },
      }),
    ],
  },
  devServer: {
    compress: true,
    historyApiFallback: {
      index: appConfig.path,
    },
    port: appConfig.port,
    hot: true,
    open: true,
    static: path.join(process.cwd(), 'public'),
  },
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'inline-source-map' : 'source-map',
  experiments: {
    css: true,
  },
  output: {
    path: path.resolve(__dirname, `dist/${isDev ? 'uat' : 'production'}`),
    filename: '[name].[contenthash].js',
  },
  target: 'web',
});

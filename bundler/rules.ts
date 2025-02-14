import {
  isDev,
  targets,
} from './constants';
import { buildType } from './output';

const isWeb = buildType === 'web';

export const rules = [
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
          env: {targets},
        },
      },
    ],
  },
  // styles
  isWeb
    ? {
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
      }
    : {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              api: 'modern-compiler',
              implementation: require.resolve('sass-embedded'),
              additionalData: '@use "./src/stylesheets/includes/index" as *;',
              sourceMap: false,
            },
          },
        ],
      },
  // images
  {
    test: /\.(jpe?g|png|gif|svg|webp)/i,
    type: isWeb ? 'asset/resource' : 'asset/inline',
  },
  // videos
  {
    test: /\.(mp4|webm)(\?v=\d+\.\d+\.\d+)?$/,
    type: isWeb ? 'asset/resource' : 'asset/inline',
  },
  // fonts
  {
    test: /(\.woff|\.woff2|\.eot|\.ttf)(\?v=\d+\.\d+\.\d+)?$/,
    type: isWeb ? 'asset/resource' : 'asset/inline',
  },
  // other assets
  {
    test: /\.(pdf|xml|csv|docx?)$/i,
    type: isWeb ? 'asset/resource' : 'asset/inline',
  },
];

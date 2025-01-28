import {
  isDev,
  targets,
} from './constants';

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
];

export const isDev = process.env.NODE_ENV === 'development';

export const defines: Record<string, string> = {
  'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV || 'development'),
  'process.env.HOST': JSON.stringify(process.env.HOST || 'localhost'),
  'process.env.PORT': JSON.stringify(process.env.PORT || 4000),
};

// Target browsers, veja: https://github.com/browserslist/browserslist
export const targets = [
  'chrome >= 87',
  'edge >= 88',
  'firefox >= 78',
  'safari >= 14',
];

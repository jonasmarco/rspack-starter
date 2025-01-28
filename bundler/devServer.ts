import * as path from 'path';

import appConfig from '../src/config/App';

export const devServer = {
  compress: true,
  historyApiFallback: {
    index: appConfig.path,
  },
  port: appConfig.port,
  hot: true,
  open: true,
  static: path.join(process.cwd(), 'public'),
};

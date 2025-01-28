import { rspack } from '@rspack/core';

import { targets } from './constants';

export const optimization = {
  minimizer: [
    new rspack.SwcJsMinimizerRspackPlugin(),
    new rspack.LightningCssMinimizerRspackPlugin({
      minimizerOptions: {targets},
    }),
  ],
};

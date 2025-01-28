import { HtmlRspackPluginOptions } from '@rspack/core';

import appConfig from '../src/config/App';

const htmlPluginConfig: HtmlRspackPluginOptions = {
  template: './index.html',
  filename: 'index.html',
  title: 'Fillet.JS',
  favicon: 'fillet.svg',
  scriptLoading: 'defer',
  inject: true,
  hash: true,
  minify: appConfig.env === 'production',
  sri: 'sha384',
};

export default htmlPluginConfig;

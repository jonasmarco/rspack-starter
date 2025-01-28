import { HtmlRspackPluginOptions } from '@rspack/core';

import { isDev } from './constants';

const htmlPluginConfig: HtmlRspackPluginOptions = {
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

export default htmlPluginConfig;

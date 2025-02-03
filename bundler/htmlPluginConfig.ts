import {HtmlRspackPluginOptions} from '@rspack/core';

import appConfig from '../src/config/App';

const htmlPluginConfig: HtmlRspackPluginOptions = {
  template: './index.html',
  filename: 'index.html',
  title: 'Fillet.JS',
  favicon: 'favicon.svg',
  scriptLoading: 'defer',
  inject: true,
  hash: true,
  minify: appConfig.env === 'production',
};

export default htmlPluginConfig;

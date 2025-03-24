import {HtmlRspackPluginOptions} from '@rspack/core';

import {isUat} from './constants';

const htmlPluginConfig: HtmlRspackPluginOptions = {
  template: './index.html',
  filename: 'index.html',
  title: 'Fillet.JS',
  favicon: 'favicon.svg',
  scriptLoading: 'defer',
  inject: true,
  hash: true,
  minify: !isUat,
};

export default htmlPluginConfig;

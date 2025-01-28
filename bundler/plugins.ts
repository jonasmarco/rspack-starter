import {
  DefinePlugin,
  rspack,
} from '@rspack/core';
import * as RefreshPlugin from '@rspack/plugin-react-refresh';

import {
  defines,
  isDev,
} from './constants';
import htmlPluginConfig from './htmlPluginConfig';

const plugins = [
  new rspack.HtmlRspackPlugin(htmlPluginConfig),
  isDev ? new RefreshPlugin() : null,
  new DefinePlugin(defines),
].filter(Boolean);

export default plugins;

import {
  DefinePlugin,
  rspack,
} from '@rspack/core';
import * as RefreshPlugin from '@rspack/plugin-react-refresh';

import { codeInspectorPlugin } from 'code-inspector-plugin';

import {
  defines,
  isDev,
} from './constants';
import htmlPluginConfig from './htmlPluginConfig';

const plugins = [
  new rspack.HtmlRspackPlugin(htmlPluginConfig),
  isDev ? new RefreshPlugin() : null,
  new DefinePlugin(defines),
  codeInspectorPlugin({
    bundler: 'rspack',
  }),
].filter(Boolean);

export default plugins;

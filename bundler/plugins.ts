import {DefinePlugin, rspack} from '@rspack/core';
import * as RefreshPlugin from '@rspack/plugin-react-refresh';

import {codeInspectorPlugin} from 'code-inspector-plugin';

import {defines, isDev} from './constants';
import htmlPluginConfig from './htmlPluginConfig';
import {buildType} from './output';

const plugins = [
  buildType === 'web' ? new rspack.HtmlRspackPlugin(htmlPluginConfig) : null,
  isDev ? new RefreshPlugin() : null,
  new DefinePlugin(defines),
  codeInspectorPlugin({
    bundler: 'rspack',
  }),
].filter(Boolean);

export default plugins;

/* craco.config.js */
// 修改默认配置
const CracoLessPlugin = require('craco-less');
const webpack = require('webpack');

module.exports = {
  babel: {
    plugins: [
      // 配置 Babel 插件
    ],
  },
  webpack: {
    plugins: [
      new webpack.DefinePlugin({
        // 配置 webpack 插件
      }),
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@theme-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
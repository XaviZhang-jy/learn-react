/* craco.config.js */
// 修改默认配置
const CracoLessPlugin = require('craco-less');
const webpack = require('webpack');
const path = require('path');

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
    configure: (webpackConfig, { env, paths }) => {
      // 添加路径别名配置
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        '@': path.resolve(__dirname, 'src'), // 将 @ 映射到项目的 'src' 目录
      };

      return webpackConfig;
    },
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
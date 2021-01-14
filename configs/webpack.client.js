const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/client.js'),
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader', // @babel/core -> preset-env
          options: {
            presets: ['@babel/preset-env'], // 插件的集合
          },
        },
        exclude: /node_modules/, // 表示node_modules的下的文件不需要查找
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false, // 注意为了配套使用vue-style-loader
            },
          },
        ], // 从右向左执行
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new VueLoaderPlugin(),
  ],
}

const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  target: 'node',
  entry: path.resolve(__dirname, '../src/server.js'),
  output: {
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/template.html'),
      filename: 'server.html',
      excludeChunks: ['server'],
      minify: false,
      // 默认的名字叫index.html
    }),
  ],
})

const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/server.js'),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/template.html'),
    }),
  ],
})

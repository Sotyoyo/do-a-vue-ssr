const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  entry: {
    client: path.resolve(__dirname, '../src/client.js'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'client.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
  },
})

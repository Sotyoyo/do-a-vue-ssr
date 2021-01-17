const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  target: 'node',
  entry: {
    server: path.resolve(__dirname, '../src/server.js'),
  },
  output: {
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/template.html'),
      filename: 'server.html',
      excludeChunks: ['server'],
    }),
  ],
})

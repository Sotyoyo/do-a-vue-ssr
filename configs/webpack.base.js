const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js', // 默认就是main, 默认是dist目录
    path: path.resolve(__dirname, '../dist'),
  },
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
  plugins: [new VueLoaderPlugin()],
}

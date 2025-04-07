const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const glob = require('glob');
const { emitWarning } = require('process');

const htmlFiles = glob.sync('./src/*.html');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
            options: {
              emitWarning: true
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    ...htmlFiles.map((file) => new HtmlWebpackPlugin({
      template: file,
      filename: path.basename(file),
    })),
    new MiniCssExtractPlugin({
      filename: 'assets/css/styles.css',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    compress: true,
    port: 9000,
  },
};

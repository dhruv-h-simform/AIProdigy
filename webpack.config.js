const path = require('path');
const webpack = require('webpack');
const appDirectory = path.resolve(__dirname, './');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { presets } = require(`${appDirectory}/babel.config.js`);

const babelLoaderConfiguration = {
  test: /\.(js|ts|tsx)$/,
  include: [
    path.resolve(appDirectory, 'index.web.js'),
    path.resolve(appDirectory, 'app'),
  ],
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: presets,
      plugins: ['react-native-web'],
    },
  },
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};
const fontLoaderConfiguration = {
  test: /\.(woff(2)?|ttf|eot|wav)(\?v=\d+\.\d+\.\d+)?$/,
  type: 'asset/resource',
  generator: {
    filename: 'assets/fonts/[hash][ext][query]',
  },
};

const isDev = process.env.NODE_ENV !== 'production';
module.exports = {
  entry: [path.resolve(appDirectory, 'index.web.js')],
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      fontLoaderConfiguration,
    ],
  },
  output: {
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, 'dist'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ['.web.tsx', '.web.ts', '.web.js', '.js', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: appDirectory + '/public/index.html',
    }),
    new webpack.DefinePlugin({
      __DEV__: isDev || true,
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
      'process.env.JEST_WORKER_ID': JSON.stringify(
        process.env.JEST_WORKER_ID || 'development',
      ),
    }),
  ],
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
    },
    hot: true,
    port: '3000',
  },
};

import path from 'path';
import { merge } from 'webpack-merge';
import { Configuration as webpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import baseConfig from './webpack.base';

interface IConfiguration extends webpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const host = 'localhost';
const port = '8080';

const devConfig: IConfiguration = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    host,
    port,
    open: true,
    compress: false,
    hot: true,
    historyApiFallback: true,
    setupExitSignals: true,
    static: {
      directory: path.join(__dirname, '../public'),
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
});

export default devConfig;

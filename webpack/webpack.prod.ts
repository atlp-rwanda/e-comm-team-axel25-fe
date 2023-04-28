import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import CopyPlugin from 'copy-webpack-plugin';
import baseConfig from './webpack.base';

const prodConfig: Configuration = merge(baseConfig, {
  mode: 'production',

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, '../static'),
          to: path.join(__dirname, '../dist/static'),
          filter: (sources) => !sources.includes('index.html'),
        },
        {
          from: path.join(__dirname, '../_redirects'),
          to: path.join(__dirname, '../dist'),
        },
      ],
    }),
  ],
});

export default prodConfig;

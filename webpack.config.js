const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    target: 'node', // Target Node.js environment
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.js', // Entry point of your Express API
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    externals: [nodeExternals()], // Don't bundle node_modules
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js'] // Resolve JavaScript files
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development')
      }),
      // Automatically restarts server when files change
      new NodemonPlugin({
        watch: path.resolve('./dist'), // Watch compiled files
        script: './dist/bundle.js', // Entry script for Nodemon
        ignore: ['node_modules']
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    optimization: {
      minimize: isProduction // Enable minimization in production
    }
  };
};

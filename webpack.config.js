const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[hash:8].js',
    publicPath: '/'
  },
  resolve: {
      modules: [
          path.join(__dirname, 'src'),
          'node_modules',
      ],
      extensions: [
          '.js',
          '.vue',
          '.css',
          '.scss'
      ],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[local]_[chunkhash:base64:8]'
            }
          },
          {
            loader: 'postcss-loader', // Run postcss actions
            options: {
              plugins: () => ([
                require('autoprefixer')
              ])
            }
          },
          'sass-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Smoothroll',
      template: __dirname + '/src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  devServer: {
    historyApiFallback: true,
    port: 8080
  }
};

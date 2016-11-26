import HTMLwebpackPlugin from 'html-webpack-plugin'
import autoprefixer from 'autoprefixer'
import CWP from 'clean-webpack-plugin'
import path from 'path'
import webpack from 'webpack'

const entries = [
  'babel-polyfill',
  'react-hot-loader/patch',
  'webpack-hot-middleware/client',
  './app/index.jsx',
]

export default {
  browser: {
    entry: entries,
    resolve: {
      alias: {
        'bootstrap-global': path.resolve(__dirname, '../../app/globals/styles/bootstrap/index.scss'),
      },
      extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.scss', '.html', '.ejs'],
    },
    node: {
      fs: 'empty',
    },
    module: {
      rules: [
        {
          test: /\.global\.scss$/,
          loaders: [
            'style-loader',
            'css-loader?sourceMap',
            'sass-loader?sourceMap',
            'sass-resources-loader',
            'postcss-loader',
          ],
        },
        {
          test: /^((?!\.global).)*\.scss/,
          loaders: [
            'style-loader',
            'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[hash:base64:15]',
            'sass-loader',
            'sass-resources-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.jpe?g$|\.gif$|\.png$|\.ico$|\.svg$/,
          loader: 'file-loader?name=../img/[name].[ext]',
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          loader: 'url-loader',
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    output: {
      path: path.resolve('./build/assets/'),
      filename: 'bundle.js',
      publicPath: '/assets/',
    },
    plugins: [
      new HTMLwebpackPlugin({
        filename: '../index.html',
        template: './app/views/index.ejs',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            autoprefixer(),
          ],
          sassResources: [
            './app/globals/styles/_variables.scss',
            './app/globals/styles/_colors.scss',
          ],
          context: path.resolve(__dirname, '../../'),
        },
      }),
      new CWP(['build'], {
        root: path.resolve(__dirname, '../../'),
      }),
    ],
  },
  server: {
    entry: './server/',
    resolve: {
      extensions: ['.js'],
    },
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: /^[a-z\-0-9]+$/,
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    output: {
      path: './',
      filename: 'server.js',
      libraryTarget: 'commonjs2',
    },
    plugins: [
      new CWP(['server.js'], {
        root: path.resolve(__dirname, '../../'),
      }),
    ],
  },
}

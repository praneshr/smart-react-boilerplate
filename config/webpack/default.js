import HTMLwebpackPlugin from 'html-webpack-plugin'
import autoprefixer from 'autoprefixer'
import path from 'path'
import webpack from 'webpack'
const entries = [
  'react-hot-loader/patch',
  'webpack-hot-middleware/client',
  './app/',
]


export default {
  browser: {
    entry: entries,
    resolve: {
      extensions: ['.webpack.js', '.web.js', '.js', '.jsx', '.scss', '.html', '.ejs'],
    },
    node: {
      fs: 'empty',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          loaders: [
            'style-loader',
            'css-loader?modules&importLoaders=1&localIdentName=[path][name]__[local]__[hash:base64:10]',
            'sass-loader',
            'sass-resources-loader',
            'import-glob-loader',
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
        }
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
            './app/constants/_style-variables.scss',
          ],
          context: path.resolve(__dirname, '../../')
        }
      })
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
  },
}

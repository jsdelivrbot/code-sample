import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import path from 'path'

import {
  HTML_INDEX_PATH,
  TEST_HTML_INDEX_PATH,
} from 'constants/webpackConstants'

import { TESTING, PROD } from 'constants/envConstants'

const getPlugins = ({ dirname, currentEnvironment }) => {
  const htmlIndex = currentEnvironment === TESTING ? TEST_HTML_INDEX_PATH : HTML_INDEX_PATH
  const isProduction = currentEnvironment === PROD

  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.resolve(dirname, htmlIndex),
    inject: 'body',
  })

  const extractTextPlugin = new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true,
    disable: !isProduction,
  })

  const vendorChunk = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: '[name].js',
    minChunks (module) {
      const context = module.context
      const isNodeModules = context && module.context.indexOf('node_modules') !== -1

      return isNodeModules
    },
  })

  const ignoreLocales = new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)

  return [
    htmlWebpackPlugin,
    vendorChunk,
    extractTextPlugin,
    // new BundleAnalyzerPlugin(),
    ignoreLocales,
  ]
}

export default getPlugins

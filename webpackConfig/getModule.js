import ExtractTextPlugin from 'extract-text-webpack-plugin'
import path from 'path'
import { PROD } from 'constants/envConstants'

const getModule = ({ dirname, currentEnvironment, publicPath }) => {
  const isProd = currentEnvironment === PROD

  const babelRule = {
    test: /\.js?$/,
    use: [{
      loader: 'babel-loader',
      options: {
        presets: [ 'es2015', 'react', 'stage-0' ],
        plugins: [],
        babelrc: false,
      },
    }],
    include: path.join(dirname, '..'),
    // need to include node_modules for builds to reduce build size at the cost of speed
    exclude: isProd ? undefined : /node_modules/,
  }

  const jsonRule = {
    test: /\.json$/,
    use: 'json-loader',
  }

  const sassLoader = {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      includePaths: [path.join(dirname, '/styleGuide')],
    },
  }

  const fileRule = {
    test: /\.(png|jpg|jpeg|gif)$/,
    use: {
      loader: 'file-loader',
      options: {
        publicPath,
      },
    },
  }

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: true,
    },
  }

  const scssRule = {
    test: /\.(scss|css)$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [cssLoader, sassLoader],
    }),
  }

  const transformRule = { /* hack to use es5 source map */
    test: /\.js$/,
    loader: 'transform-loader/cacheable?envify',
    enforce: 'post',
  }

  const rules = [
    babelRule,
    jsonRule,
    fileRule,
    scssRule,
    transformRule,
  ]

  return { rules }
}

export default getModule

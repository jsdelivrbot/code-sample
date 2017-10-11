import path from 'path'
import getModule from './webpackConfig/getModule'
import getResolve from './webpackConfig/getResolve'
import getFlags from './webpackConfig/getFlags'
import getPlugins from './webpackConfig/getPlugins'
import getIndexPath from './webpackConfig/getIndexPath'
import getOutput from './webpackConfig/getOutput'
import { PROD } from 'constants/envConstants'

// Handle console title
const isPort = process.argv.indexOf('--port')

if (isPort > -1) {
  const port = process.argv[isPort + 1]
  const consoleTitle = String.fromCharCode(27) + ']0;' + port + String.fromCharCode(7)

  process.stdout.write(consoleTitle)
}

const configs = (env) => {
  const { currentEnvironment } = getFlags({ env })
  const dirname = __dirname
  const publicPath = currentEnvironment === PROD ? '/v2/' : '/'
  const context = path.resolve(__dirname, '')
  const module = getModule({ dirname, currentEnvironment, publicPath })
  const resolve = getResolve({ path, dirname, currentEnvironment })
  const indexPath = getIndexPath({ currentEnvironment })
  const devtool = currentEnvironment === PROD ? false : 'cheap-module-eval-source-map'
  const plugins = getPlugins({ dirname, currentEnvironment })
  const output = getOutput({ dirname, publicPath })

  const devServer = {
    historyApiFallback: true,
    clientLogLevel: 'error',
    disableHostCheck: true,
    hot: true, // enable HMR on the server
  }

  const entry = {
    index: ['babel-polyfill', indexPath],
  }

  const node = { // Prevent `Module not found` errors
    fs: 'empty',
    child_process: 'empty',
  }

  return {
    entry,
    output,
    context,
    devtool,
    module,
    resolve,
    plugins,
    devServer,
    node,
  }
}

export default configs

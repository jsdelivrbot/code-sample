import path from 'path'

const getOutput = ({ dirname, publicPath }) => {
  return {
    path: path.join(dirname, '/dist' + publicPath),
    publicPath: publicPath || '/',
    filename: '[name].js',
  }
}

export default getOutput

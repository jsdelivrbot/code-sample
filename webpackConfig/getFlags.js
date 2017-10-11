import { DEVELOPMENT } from 'constants/webpackConstants'

const getFlags = ({ env = DEVELOPMENT } = {}) => {
  const isBuilding = process.argv.indexOf('--build') > -1

  return {
    isBuilding,
    currentEnvironment: env || process.env.ENV,
  }
}

export default getFlags

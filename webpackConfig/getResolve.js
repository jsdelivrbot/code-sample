import path from 'path'

const getResolve = ({ dirname, currentEnvironment }) => {
  const configsPath = path.join(dirname, '/configs', currentEnvironment.toLowerCase())
  const utilitiesPath = path.join(dirname, '/utilities')
  const constantsPath = path.join(dirname, '/constants')
  const apisPath = path.join(dirname, '/apis')
  const stateLayerPath = path.join(dirname, '/stateLayer')
  const componentsPath = path.join(dirname, '/components')
  const styleGuidePath = path.join(dirname, '/styleGuide')
  const orchestrationPath = path.join(dirname, '/orchestration')

  const alias = {
    configs: configsPath,
    utilities: utilitiesPath,
    constants: constantsPath,
    apis: apisPath,
    components: componentsPath,
    stateLayer: stateLayerPath,
    styleGuide: styleGuidePath,
    orchestration: orchestrationPath,
  }

  const extensions = [
    '.js',
  ]

  const resolve = {
    modules: [
      path.join(dirname, '/node_modules/'),
      'node_modules',
    ],
    alias,
    extensions,
  }

  return resolve
}

export default getResolve

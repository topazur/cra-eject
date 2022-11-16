const fs = require('fs')

const paths = require('../paths')
const createEnvironmentHash = require('../utils/persistentCache/createEnvironmentHash')

const createWpCacheConfig = (arg) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isEnvProduction, isEnvDevelopment, env } = arg

  return {
    type: 'filesystem',
    version: createEnvironmentHash(env.raw),
    cacheDirectory: paths.appWebpackCache,
    store: 'pack',
    buildDependencies: {
      defaultWebpack: ['webpack/lib/'],
      // config: [__filename], // <rootDir>/config/webpack.config.js
      config: [paths.appWebpackConfig], // FIXED: use absolute path
      tsconfig: [paths.appTsConfig, paths.appJsConfig].filter(f =>
        fs.existsSync(f),
      ),
    },
  }
}

module.exports = createWpCacheConfig

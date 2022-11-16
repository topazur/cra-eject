const paths = require('./paths')
const { shouldUseSourceMap } = require('./utils/variable')
const getClientEnvironment = require('./env')
const {
  createWpOutputConfig,
  createWpCacheConfig,
  createWpOptimizationConfig,
  createWpResolveConfig,
  createWpModuleConfig,
  createWpPluginsConfig,
  webpackDevServerConfig,
} = require('./conf')

// This is the production and development configuration.
// It is focused on developer experience, fast rebuilds, and a minimal bundle.
module.exports = function (webpackEnv) {
  // mode is 'development' or 'production'
  const isEnvDevelopment = webpackEnv === 'development'
  const isEnvProduction = webpackEnv === 'production'

  // Variable used for enabling profiling in Production
  // passed into alias object. Uses a flag if passed into the build command
  const isEnvProductionProfile
    = isEnvProduction && process.argv.includes('--profile')

  // We will provide `paths.publicUrlOrPath` to our app
  // as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
  // Omit trailing slash as %PUBLIC_URL%/xyz looks better than %PUBLIC_URL%xyz.
  // Get environment variables to inject into our app.
  const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1))

  return {
    target: ['browserslist'],
    // Webpack noise constrained to errors and warnings
    stats: 'errors-warnings',
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    // Stop compilation early in production
    bail: isEnvProduction,
    devtool: isEnvProduction
      ? shouldUseSourceMap
        ? 'source-map'
        : false
      : isEnvDevelopment && 'cheap-module-source-map',
    // These are the "entry points" to our application.
    // This means they will be the "root" imports that are included in JS bundle.
    entry: paths.appIndexJs,
    output: createWpOutputConfig({ isEnvProduction, isEnvDevelopment, env }),
    cache: createWpCacheConfig({ isEnvProduction, isEnvDevelopment, env }),
    optimization: createWpOptimizationConfig({ isEnvProduction, isEnvDevelopment, env, isEnvProductionProfile }),
    resolve: createWpResolveConfig({ isEnvProductionProfile }),
    module: createWpModuleConfig({ isEnvProduction, isEnvDevelopment, env }),
    plugins: createWpPluginsConfig({ isEnvProduction, isEnvDevelopment, env }),
    devServer: webpackDevServerConfig,
    // Turn off performance processing because we utilize
    // our own hints via the FileSizeReporter
    performance: false,
    infrastructureLogging: { level: 'none' },
  }
}

const babelJest = require('babel-jest').default

const judgeJsxRuntime = require('./utils/jsx-runtime')

const hasJsxRuntime = judgeJsxRuntime()

module.exports = babelJest.createTransformer({
  presets: [
    [
      require.resolve('babel-preset-react-app'),
      {
        runtime: hasJsxRuntime ? 'automatic' : 'classic',
      },
    ],
  ],
  babelrc: false,
  configFile: false,
})

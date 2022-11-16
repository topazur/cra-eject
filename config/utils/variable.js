const fs = require('fs')

const paths = require('../paths')

// Source maps are resource heavy and can cause out of memory issue for large source files.
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false'
module.exports.shouldUseSourceMap = shouldUseSourceMap

// Some apps do not need the benefits of saving a web request, so not inlining the chunk
// makes for a smoother build process.
const shouldInlineRuntimeChunk = process.env.INLINE_RUNTIME_CHUNK !== 'false'
module.exports.shouldInlineRuntimeChunk = shouldInlineRuntimeChunk

// ESLint
const emitErrorsAsWarnings = process.env.ESLINT_NO_DEV_ERRORS === 'true'
module.exports.emitErrorsAsWarnings = emitErrorsAsWarnings

// ESlint
const disableESLintPlugin = process.env.DISABLE_ESLINT_PLUGIN === 'true'
module.exports.disableESLintPlugin = disableESLintPlugin

// Check if TypeScript is setup
const useTypeScript = fs.existsSync(paths.appTsConfig)
module.exports.useTypeScript = useTypeScript

// 是否打开编译产物分析
const shouldBuildAnalyzer = process.env.BUILD_ANALYZER === 'true'
module.exports.shouldBuildAnalyzer = shouldBuildAnalyzer

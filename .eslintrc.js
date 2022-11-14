/**
 * @desc 优先级: .eslintrc.js > .eslintrc.yaml > .eslintrc.yml > .eslintrc.json > .eslintrc > package.json
 *
 * @desc "off" 或 0 - 关闭规则
 * @desc "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
 * @desc "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 *
 * @desc Globals - 配置额外的全局变量("writable" 以允许重写变量，或 "readonly" 不允许重写变量)
 */
module.exports = {
  extends: ['react-app', 'react-app/jest', '@antfu/eslint-config-react'],
  env: {
    jest: true,
  },
  globals: {
    // var1: 'writable',
    // var2: 'readonly',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-unused-vars': 1,
    // curly braces in object
    'curly': ['error', 'multi-line', 'consistent'],
    // [import/order](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md)
    'import/order': ['error',
      {
        'groups': ['builtin', 'external', ['internal', 'parent', 'sibling', 'index'], 'unknown', 'object', 'type'],
        'newlines-between': 'always',
        'pathGroupsExcludedImportTypes': ['builtin'],
        'warnOnUnassignedImports': false,
      },
    ],
  },
}

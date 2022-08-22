module.exports = {
  extends: ['plugin:react/recommended', 'eslint:recommended'],
  rules: {
    'max-statements-per-line': ['error'],
    eqeqeq: ['error'],
    'no-unused-vars': ['error'],
    'no-redeclare': ['warn'],
    'no-fallthrough': ['warn'],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: ['2018'],
    sourceType: 'module',
    allowImportExportEverywhere: true,
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  ignorePatterns: ['public/'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
}

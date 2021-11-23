module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['prettier', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.ts'] }],
    'no-unused-vars': ['off', { args: 'all', argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': ['off', { args: 'all', argsIgnorePattern: '^_' }],
    'import/no-unresolved': 'off', // temporarily we activate this rule but as soon as possible we update it with the path (@src)
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'latest',
    },
  },
};

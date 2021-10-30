module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.ts'] }]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
    react: {
      version: 'latest'
    }
  }
};

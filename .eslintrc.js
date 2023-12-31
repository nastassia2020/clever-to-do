module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
    rules: {
      'new-cap': 'error',
      'no-invalid-this': 'error',
      'no-unused-expressions': 'error',
      'object-curly-spacing': 'error',
      semi: 'error',
    },
  },
  plugins: ['react', 'prettier', 'react-hooks', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react/no-access-state-in-setstate': 1,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'import/no-named-as-default': 0,
    curly: ['error', 'all'],
    'react/display-name': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/function-component-definition': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-curly-newline': 0,
    'react/require-default-props': 0,
    'no-return-assign': 0,
    'react/jsx-no-constructed-context-values': 0,
    'react/destructuring-assignment': 0,
    'object-shorthand': 0,
    'import/prefer-default-export': 0,
    'default-case': 0,
    'consistent-return': 0,
    'default-param-last': 0,
    'no-param-reassign': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-alert': 0,
    'react/no-unescaped-entities': 0,
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};

const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'prettier',
  ],
  plugins: ['prettier', 'react-hooks', '@typescript-eslint'],
  env: {
    jest: true,
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        pathGroups: [
          {
            pattern: '{api,app,assets,common,hooks,store,styles,types,utils}{**,**/**}',
            group: 'internal',
          },
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/naming-convention': 0,
    'react/prop-types': 0,
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 0,
    'no-underscore-dangle': 0,
    'no-nested-ternary': 1,
    'no-use-before-define': 0,
    'no-unused-expressions': 0,
    'global-require': 0,
    'allowTernary': 0,
    'no-multi-assign': 0,
    'no-restricted-syntax': 0,
    'no-continue': 0,
    'no-param-reassign': 0,
    'no-restricted-globals': 0,
    'class-methods-use-this': 0,
    'default-case': 0,
    'func-names': [1, 'always', { generators: 'as-needed' }],
    'prefer-const': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'max-lines': ['error', 200],
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-dynamic-require': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-props-no-spreading': 0,
    'react/button-has-type': 0,
    'react/destructuring-assignment': 0,
    'react/prefer-stateless-function': 0,
    'react/static-property-placement': 0,
    'react/sort-comp': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-extra-boolean-cast': 0,
  },
  globals: {
    window: true,
    document: true,
    jest: true,
  },
  // "@typescript-eslint/no-use-before-define": 0,
  // "@typescript-eslint/ban-ts-ignore": 0,
  // "@typescript-eslint/explicit-function-return-type": 0,
  // "@typescript-eslint/indent": 0,
  // "@typescript-eslint/no-explicit-any": "error"
};

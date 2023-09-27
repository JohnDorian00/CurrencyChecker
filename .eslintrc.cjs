/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:prettier/recommended',
    'prettier'
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': 'off',
    'no-undef': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-useless-template-attributes': 'off',
    'prefer-arrow-callback': 'off',
    'unicorn/no-array-instanceof': 'off',
    'unicorn/prefer-exponentiation-operator': 'off',
    'unicorn/prefer-starts-ends-with': 'off',
    'unicorn/prefer-text-content': 'off',
    'import/no-named-as-default-member': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'max-len': [
      'warn',
      {
        code: 120,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ]
  }
}

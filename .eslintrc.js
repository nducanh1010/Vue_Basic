module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: ['plugin:vue/essential', 'plugin:vue/recommended', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
      parser: 'babel-eslint',
    },
    rules: {
    //   'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //   'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'vue/no-unused-components': 'warn',
      'no-unused-vars': 'warn',
      'prettier/prettier': 'off',
      'vue/attributes-order': [
        'warn',
        {
          alphabetical: true,
        },
      ],
    },
    overrides: [
      {
        files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
        env: {
          jest: true,
        },
      },
    ],
  };
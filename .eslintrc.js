module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:i18next/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json']
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks'
    ],
    rules: {
        'react/jsx-max-props-per-line': [2, { maximum: 1 }],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        '@typescript-eslint/indent': [2, 4],
        indent: [2, 4],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/button-has-type': 'error',
        semi: ['error', 'always'],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }],
        '@typescript-eslint/consistent-type-assertions': 'off',
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'max-len': ['error', { code: 120, ignoreComments: true }],
        'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'proportional-always', beforeClosing: 'proportional-always' }],
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        '@typescript-eslint/ban-ts-comment': 'off'
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}', './.eslintrc.js'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off'
            }
        }
    ]
};

module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:i18next/recommended',
        'prettier',
        'plugin:storybook/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'fsd-architecture-check',
        'unused-imports',
        'import',
    ],
    rules: {
        'react/jsx-max-props-per-line': [
            'error',
            {
                maximum: 3,
            },
        ],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
        'unused-imports/no-unused-imports': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/button-has-type': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'to'],
            },
        ],
        '@typescript-eslint/consistent-type-assertions': 'off',
        'react/display-name': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-tag-spacing': [
            'error',
            {
                beforeSelfClosing: 'proportional-always',
                beforeClosing: 'proportional-always',
            },
        ],
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': [
            'error',
            {
                ignoreConditionalTests: true,
            },
        ],
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        'fsd-architecture-check/path-check': [
            'error',
            {
                alias: '@',
            },
        ],
        'fsd-architecture-check/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider'],
            },
        ],
        'fsd-architecture-check/public-api-imports': [
            'error',
            {
                alias: '@',
                testFiles: ['**/*.test.*', '**/*.stories.*', '**/StoreDecorator.tsx'],
            },
        ],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@/**',
                        group: 'external',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}', './.eslintrc.js'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
        {
            files: [
                '**/StoreDecorator/**/*.{ts,tsx}',
                '**/StyleDecorator/**/*.{ts,tsx}',
                '**/ThemeDecorator/**/*.{ts,tsx}',
            ],
            rules: {
                'fsd-architecture-check/layer-imports': 'off',
            },
        },
    ],
};

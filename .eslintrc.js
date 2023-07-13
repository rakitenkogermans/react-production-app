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
        'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
        // 'react/jsx-indent': [2, 4],
        // 'react/jsx-indent-props': [2, 4],
        // 'react/jsx-first-prop-new-line': ['error', 'multiline'],
        // '@typescript-eslint/indent': [2, 4],
        // indent: [2, 4],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
        'unused-imports/no-unused-imports': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/button-has-type': 'error',
        // semi: ['error', 'always'],
        // '@typescript-eslint/semi': ['error', 'always'],
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
        // 'max-len': ['error', { code: 120, ignoreComments: true }],
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
        // 'comma-dangle': ['error', {
        //     arrays: 'always-multiline',
        //     objects: 'always-multiline',
        //     imports: 'always-multiline',
        //     exports: 'always-multiline',
        //     functions: 'never',
        // }],
        // '@typescript-eslint/comma-dangle': ['error', {
        //     arrays: 'always-multiline',
        //     objects: 'always-multiline',
        //     imports: 'always-multiline',
        //     exports: 'always-multiline',
        //     functions: 'never',
        // }],
        // 'array-bracket-spacing': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': [
            'error',
            {
                ignoreConditionalTests: true,
            },
        ],
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        'fsd-architecture-check/path-check': ['error', { alias: '@' }],
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
    ],
};

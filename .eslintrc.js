module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    settings: {
        react: {
            version: "detect",
        },
        'import/resolver': {
            'typescript': {},
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'fsd-imports-checker',
        'unused-imports',
        'import',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        'fsd-imports-checker/relative-path-checker': ['error', { alias: '@' }],
        'fsd-imports-checker/imports-between-layers': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'fsd-imports-checker/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/*.stories.*',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'import/order': [
            'error',
            {
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'builtin',
                        position: 'before',
                    },
                    {
                        pattern: '@/**',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: './**.module.*',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: false,
                },
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'max-len': 'off',
            },
        },
    ],
};

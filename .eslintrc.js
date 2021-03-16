module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/*.{test,spec}.{j,t}s?(x)',
                '**/tests/**/*.{test,spec}.{j,t}s?(x)',
            ],
            env: {
                jest: true,
                es6: true,
            },
        },
    ],
}

module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': 'airbnb',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': ['react'],
    'rules': {
        'react/jsx-indent-props': [ 0 ],
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'react/jsx-indent': [ 0 ],
        'import/no-unresolved': [ 0 ],
        'class-methods-use-this': [ 0 ],
        'linebreak-style': [ 0 ],
        'indent': ['error', 4],
        'no-unused-vars': ['warn', { 'varsIgnorePattern': '\w*[A-Z]\w*' }],
    }
};

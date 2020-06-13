const path = require('path');
const PnpWebpackPlugin = require('pnp-webpack-plugin');

module.exports = {
    mode: 'production',
    resolve: {
        plugins: [
            PnpWebpackPlugin
        ]
    },
    resolveLoader: {
        plugins: [
            PnpWebpackPlugin.moduleLoader(module)
        ]
    },
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}
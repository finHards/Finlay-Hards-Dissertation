const path = require('path');

module.exports = {
    //entry point for all my javascript and sass
    entry: './src/index.js',

    output: {
        //once built using npx webpack sends the output to the dist folder as bundle.js
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'

    },

    module: {
        rules: [
            
        {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        },
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }

        }
    
        ]
    },

    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },

    mode: 'development',
    devtool: 'inline-source-map',

};
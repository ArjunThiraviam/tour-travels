const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: "./app/assets/scripts/app.js",
    output: {
        path: __dirname + "/app/temp/scripts",
        filename: "App.js"
    },
    module: {
        rules: [
            {                
                test: /\.js$/,
                exclude: path.join(__dirname, '/(node_modules)/'),
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/preset-env']
                    }
                }]
            }
        ]
    }
}
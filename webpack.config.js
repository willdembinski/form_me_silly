var path = require('path');
var webpack = require('webpack');
module.exports = {
    inline:true,
    hot: true,
    entry: [
        './src/index.js'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                loaders:[
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'resolve-url',
                    'sass?sourceMap'
                ]
            }
        ]
    },
    resolve: {
        alias: {
           src: __dirname + '/src',
           components: __dirname + '/src/components',
           SettingsComponents: __dirname + '/src/components/SettingsComponents',
           SettingsTypes: __dirname + '/src/components/SettingsComponents/Types',
           actions: __dirname + '/src/actions',
           containers: __dirname + '/src/containers',
           reducers: __dirname + '/src/reducers',
           modules: __dirname + '/src/modules'
               }
    },
    output: {
        path:__dirname + '/dist/',
        publicPath: 'http://localhost:8080/',
        filename: 'bundle.js'
    },
};

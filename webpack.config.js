var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    target: 'node',
    entry: [
        './test/test.spec.js'
    ],
    output: {
        path: path.join(__dirname, 'tmp'),
        filename: 'js/bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.scss', '.less'],
        alias: {
            styles: path.join(__dirname, 'app/common/styles'),
            actions: path.join(__dirname, 'app/common/actions'),
            components: path.join(__dirname, 'app/common/components'),
            reducers: path.join(__dirname, 'app/common/reducers'),
            selectors: path.join(__dirname, 'app/common/selectors'),
            services: path.join(__dirname, 'app/services'),
            utils: path.join(__dirname, 'app/common/utils'),
            features: path.join(__dirname, 'app/features'),
            images: path.join(__dirname, 'public/images')
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    compact: false,
                    stage: 0
                },
                exclude: /node_modules/,
                include: [path.join(__dirname, 'app'), path.join(__dirname, 'test')]
            },
            {
                test: /\.(scss|less|json)$/,
                loader: 'null'
            }
        ]
    }
};

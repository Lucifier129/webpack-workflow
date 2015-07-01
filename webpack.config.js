var webpack = require('webpack')
var path = require('path')

module.exports = {
    cache: false,
    watch: true,
    entry: './src/app',
    output: {
        filename: 'bigger.js',
        library: 'App',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.BannerPlugin('LastModifyTime:' + new Date().toLocaleString(), {
            entryOnly: true
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                optional: ['runtime'],
                stage: 0
            }
        }]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.jsx', '.es6', '.json'],
        root: path.join(__dirname, 'src'),
        modulesDirectories: ['node_modules']
    }
}

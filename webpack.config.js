const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: {
		'app': './src/app.js',
	},
	output: {
		filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: '[name].js.map'
	},
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({ 
            $: 'jquery',
            'window.jQuery': 'jquery',
            jQuery: 'jquery',
        })
    ],
};
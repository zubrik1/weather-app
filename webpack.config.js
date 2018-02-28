const path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: './js/index.js',
	devServer: {
		historyApiFallback: true
	},
	output: {
		path: path.resolve(__dirname),
		filename: 'build.js'
	},
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: { 
						presets: [ 'env' ]
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
};

  

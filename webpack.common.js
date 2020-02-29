const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {libraryName} = require('./properties');

module.exports = {
	module: {
		entry: {
			[libraryName]: './src/lib/index.ts',
			demo: './src/index.ts'
		},
		rules: [
			{
				test: /\.tsx?$/,
				enforce: 'pre',
				use: [
					{
						options: {
							eslintPath: require.resolve('eslint'),
			
						},
						loader: require.resolve('eslint-loader'),
					},
				],
				exclude: /node_modules/,
			},
			{
				test: /\.?[wW]orker\.tsx?$/,
				use: {
					loader: 'worker-loader',
					options: {inline: true, fallback: false}
				}
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		],
	},
	resolve: {
		extensions: ['.mjs', '.js', '.tsx', '.ts'],
	},
	devServer: {
		contentBase: './dist',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		library: libraryName,
		libraryTarget: 'umd',
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	],
};
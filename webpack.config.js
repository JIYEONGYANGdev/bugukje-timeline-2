const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // mode: ["development", "production"],
    // entry: path.resolve(__dirname, "..", "./src/index.tsx"),
    entry: { 
        main: './src/index.tsx'
    },
    resolve: {
        alias: { "@": path.resolve(__dirname, "../src") },
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/, // test: /\.(ts|js)x?$/,
                use: ["babel-loader", "ts-loader"],
                exclude: /node_modules/,
              },
            {
                test: /\.(png|jpe?g|svg|gif)/,
                use: [
                    'file-loader'
                ]
            },
            // {
			// 	test: [/\.(js|jsx)$/, /\.(ts|tsx)$/],
            //     exclude: /node_modules/,
			// 	use: {
			// 		loader: "babel-loader"
			// 	}
			// }
        ]
    },
    resolve: {
        extensions: [ '*', '.js', '.jsx' ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack-react-start-kit',
            template: './public/index.html'
        }),
        // new MiniCssExtractPlugin({
        //     filename: '[name].css',
        //     chunkFilename: '[id].css'
        //   }),
    ]
}

import { resolve }          from 'path';
import CssMinimizerPlugin   from 'css-minimizer-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin         from 'terser-webpack-plugin';
import HtmlPlugin           from 'html-webpack-plugin';
import CopyPlugin           from 'copy-webpack-plugin';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default function config ({
	name = 'cv', output = 'site'
} = {})
{
	return {

		mode : 'production',

		entry :
		{
			[name] : [
				'./src/index.js'
			]
		},

		output :
		{
			path : resolve(output),
			environment : {
				arrowFunction : false,
				const : false,
				destructuring : false,
				forOf : false
			},
			filename : 'js/[name].js',
			assetModuleFilename : 'assets/[contenthash][ext]'
		},

		optimization :
		{
			minimizer :
			[
				// JavaScript.
				new TerserPlugin({
					extractComments : false
				}),

				// Stylesheets.
				new CssMinimizerPlugin()
			],

			minimize : true
		},

		module :
		{
			rules :
			[
				{ // JavaScript.
					use :
					[
						{
							loader : 'babel-loader'
						}
					],
					test : /\.js$/
				},

				{ // Stylesheets.
					use :
					[
						MiniCssExtractPlugin.loader,
						{
							loader : 'css-loader',
							options : {
								sourceMap : true
							}
						},
						{
							loader : 'less-loader',
							options : {
								sourceMap : true
							}
						}
					],
					test : /\.less$/
				},

				{ // File Assets.
					type : 'asset/resource',
					test : /\.(png)$/
				},

				{ // Inline Assets
					type : 'asset/inline',
					test : /\.(svg)$/
				}
			]
		},

		plugins : [

			new MiniCssExtractPlugin({
				filename : 'css/[name].css',
				chunkFilename : 'css/[contenthash].css'
			}),

			new HtmlPlugin({
				filename : 'index.html',
				hash : true,
				template : './src/index.html'
			}),

			new CopyPlugin({
				patterns :
				[
					{ // Resources.
						from : './src/resources',
						to : 'resources'
					},

					{ // Web app manifest.
						from : './src/manifest.json',
						to : 'manifest.json'
					},

					{ // CNAME record.
						from : './CNAME',
						to : 'CNAME',
						toType : 'file'
					}
				]
			})
		],

		devtool : false
	};
}

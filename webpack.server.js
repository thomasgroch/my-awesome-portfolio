require('dotenv').config()
const webpack = require('webpack')

/* fix for https://medium.com/@danbruder/typeerror-require-is-not-a-function-webpack-faunadb-6e785858d23b */
module.exports = {
	mode: 'development',
	plugins: [
		new webpack.DefinePlugin({'global.GENTLY': false}),
		'~plugins/vue-js-modal'
	],
	node: {
		__dirname: true,
	}
}

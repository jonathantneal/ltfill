export default {
	entry: 'ltfill.js',
	dest: 'ltfill.es5.js',
	format: 'iife',
	moduleName: 'ltfill',
	sourceMap: 'ltfill.es5.js.map',
	plugins: [
		require('rollup-plugin-babel')({
			babelrc: false,
			presets: [
				[
					require('babel-preset-env'),
					{
						modules: false
					}
				]
			]
		}),
		require('rollup-plugin-uglify')()
	]
};

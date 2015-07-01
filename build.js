var webpack = require('webpack')
var config = require('./webpack.config')

var compiler = webpack(config)
console.time('webpack')
compiler.run(function(err, stats) {
	console.timeEnd('webpack')
	console.log(err || 'done')
});
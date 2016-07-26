import express         		from 'express'
import webpack 				from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config               from './webpack.config'

var PORT = process.env.PORT || 7000

var app = express()

var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath,
	stats: { chunks: false, colors: true }
}))

app.use(webpackHotMiddleware(compiler))

//because html5 history is a pain
app.use((req, res, next) => {
	var paths = req.url.split('/')
	var file = paths[paths.length - 1]
	if (['bundle.js', 'index.html'].indexOf(file) !== -1) {
		res.end(devMiddleware.fileSystem.readFileSync(path.join(config.output.path, file)))
	} else if (file.indexOf('.') === -1) {
		res.end(devMiddleware.fileSystem.readFileSync(path.join(config.output.path, 'index.html')))
	} else {
		next()
	}
})

app.listen(PORT, () => {
	console.log('===================================================================================')
	console.log(`Padawan Application Server Online. Port: ${PORT}. Environment: ${process.env.NODE_ENV}`)
	console.log('===================================================================================')
    console.log('webpack building...')
})


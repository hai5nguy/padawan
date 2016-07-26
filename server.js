import express         		from 'express'
import webpack 				from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

var PORT = process.env.PORT || 7000

var app = express()


app.listen(PORT, () => {
	console.log('===================================================================================')
	console.log(`Padawan Application Server Online. Port: ${PORT}. Environment: ${process.env.NODE_ENV}`)
	console.log('===================================================================================')
    console.log('webpack building...')
})


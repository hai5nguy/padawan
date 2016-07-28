import React 		from 'react'
import { render } 	from 'react-dom'
import { Router } 	from 'react-router'
import { Provider }	from 'react-redux'

import { store, history } 	from '~/store/store'
import routes 				from './routes'
import preloadImages		from './static/preloadimages'

import { Student }			from '~/actions/actions'

preloadImages()

Student.fetchAll()

render(
	<Provider store={store}>
		<Router history={history} children={routes} />
	</Provider>,
	document.getElementById('mount')
)
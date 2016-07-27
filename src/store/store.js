import { applyMiddleware, combineReducers, compose, createStore } 	from 'redux'
import { routerReducer, routerMiddleware, syncHistoryWithStore } 	from 'react-router-redux'
import { browserHistory } 											from 'react-router'

import students 	from './students-reducer'
import ui 			from './ui-reducer'

var reducers = combineReducers({
	routing: routerReducer,
	students,
	ui
})

var initialState = {
	students: [],
	ui: {}
}

var composition = compose(
	applyMiddleware(routerMiddleware(browserHistory)),
	window.devToolsExtension ? window.devToolsExtension() : undefined
)

export const store = createStore(reducers, initialState, composition)

export const history = syncHistoryWithStore(browserHistory, store)

export const dispatch = store.dispatch
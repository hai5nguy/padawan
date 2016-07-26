import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { Root, Main } from './components/components'

export default (
	<Route path="/" component={Root}>
		<IndexRoute component={Main} />
	</Route>
)


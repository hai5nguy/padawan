import React from 'react'
import Radium from 'radium'

import { AddStudent } from '~/components/components'

@Radium
export default class Main extends React.Component {
	render() {
		return (
			<div style={styles.main}>
				main
				<AddStudent />
			</div>
		)
	}
}

const styles = {
	main: {
		background: '#F1F2F3'
	}
}
import React from 'react'
import Radium from 'radium'

@Radium
export default class AddStudent extends React.Component {
	render() {
		return (
			<div style={styles.container}>
				add student
				<input type="textbox" value="name" />
			</div>
		)
	}
}

const styles = {
	container: {
		background: '#9487F3'
	}
}
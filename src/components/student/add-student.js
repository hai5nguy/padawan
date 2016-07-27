import React from 'react'
import Radium from 'radium'

import { Student } from '~/actions/actions'

@Radium
export default class AddStudent extends React.Component {

	submitClick(e) {
		// console.log('student', Student)

		Student.create({ name: 'test test'})
	}
	render() {
		return (
			<div style={styles.container}>
				add student
				<input type="textbox"/>
				<button onClick={this.submitClick}>Submit</button>
			</div>
		)
	}
}

const styles = {
	container: {
		background: '#9487F3'
	}
}
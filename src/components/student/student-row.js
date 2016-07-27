import React from 'react'
import Radium from 'radium'

import { Student } from '~/actions/actions'

@Radium
export default class StudentRow extends React.Component {
	constructor(props) {
		super(props)

		this.deleteClick = this.deleteClick.bind(this)
	}

	deleteClick() {
		Student.delete(this.props.student._id)
	}

	render() {
		var { _id, temp_id, name, pendingCreation } = this.props.student
		var displayId = _id || temp_id
		return (
			<div style={styles.container}>
				student: {displayId} {name}   
				<button onClick={this.deleteClick}>Delete</button>
			</div>
		)
	}
}

const styles = {
	container: {
		background: '#DADEF3'
	}
}
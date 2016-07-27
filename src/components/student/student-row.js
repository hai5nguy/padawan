import React from 'react'
import Radium from 'radium'

import { EditableField } from '~/components/components'

import { Student } from '~/actions/actions'

@Radium
export default class StudentRow extends React.Component {
	constructor(props) {
		super(props)

		this.deleteClick = this.deleteClick.bind(this)
		this.nameEdited = this.nameEdited.bind(this)
	}

	deleteClick() {
		Student.delete(this.props.student._id)
	}

	nameEdited(value) {
		var { student } = this.props
		student.name = value
		Student.update(student)
	}	

	render() {
		var { _id, temp_id, name, pendingCreation } = this.props.student
		var displayId = _id || temp_id
		return (
			<div style={styles.container}>
				student: {displayId}
				<EditableField value={name} onDone={this.nameEdited} />   
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
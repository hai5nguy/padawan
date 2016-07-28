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
				<p style={styles.id}>{displayId}</p>
				<p style={styles.name}><EditableField value={name} onDone={this.nameEdited} /></p>   
				<p style={styles.actions}><button style={styles.actions.button} onClick={this.deleteClick}>Delete</button></p>
			</div>
		)
	}
}

const styles = {
	container: {
		marginTop: '4px',
		lineHeight: '34px'
	},
	id: {
		display: 'inline-block',
		width: '40%',
	},
	name: {
		display: 'inline-block',
		width: '40%'
	},
	actions: {
		display: 'inline-block',
		width: '20%',
		button: {
			height: '30px',
			padding: '0 6px 0 6px',
			margin: '0 0 0 4px'
		}
	}

}
import React from 'react'
import Radium from 'radium'
import { connect } from 'react-redux'

import { Student } from '~/actions/actions'

import { StudentRow } from '~/components/components'

const mapStateToProps = (state, ownProps) => {
	return {
		students: state.students
	}
}

@connect(mapStateToProps)
@Radium
export default class StudentList extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		var rows = this.props.students.map(s => {
			var id = s._id || s.temp_id
			return <StudentRow key={id} student={s} />
		})
		return (
			<div style={styles.container}>
				students:
				{rows}
			</div>
		)
	}
}

const styles = {
	container: {
		background: '#DADEF3'
	}
}
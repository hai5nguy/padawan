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
		return (
			<div style={styles.container}>
				students:
				{this.props.students.map((s, i) => <StudentRow key={i} student={s} />)}
			</div>
		)
	}
}

const styles = {
	container: {
		background: '#DADEF3'
	}
}
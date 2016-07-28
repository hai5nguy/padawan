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

	deleteAllClick() {
		Student.deleteAll()
	}

	render() {
		var rows = this.props.students.map(s => {
			var id = s._id || s.temp_id
			return <StudentRow key={id} student={s} />
		})
		return (
			<div style={styles.container}>
				<button
					style={styles.deleteAll}
					onClick={this.deleteAllClick}>
					Delete All Students
				</button>
				<h2 style={styles.header}>Student List</h2>
				<div style={styles.listHeader}>
					<p style={styles.listHeader.id}>ID</p>
					<p style={styles.listHeader.name}>Name</p>
					<p style={styles.listHeader.actions}>Actions</p>
				</div>
				{rows}
			</div>
		)
	}
}

const styles = {
	container: {
		// background: '#E0E0E0',
		padding: '0px 15px',
		position: 'relative'
	},
	header: {
		padding: '10px 0 5px 0',
		textAlign: 'center',
		// borderBottom: '1px solid #2e6680'
	},
	deleteAll: {
		// float: 'right'
		position: 'absolute',
		right: '15px',
		top: '0px',
		height: '34px',
		// background: '#eeeeee',
		fontSize: '14px',
		padding: '0px 6px',
		// marginLeft: '6px',
	},
	listHeader: {
		// clear: 'both',
		background: '#9393a0',
		padding: '5px 0',

		id: {
			// background: 'green',
			display: 'inline-block',
			paddingLeft: '6px',
			width: '50%'
		},
		name: {
			// background: 'yellow',
			display: 'inline-block',
			width: '30%'
		},
		actions: {
			// background: 'red',
			display: 'inline-block',
			width: '20%'
		}
	},

}
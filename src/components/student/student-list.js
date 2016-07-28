import React from 'react'
import Radium from 'radium'
import { connect } from 'react-redux'

import { Student } from '~/actions/actions'

import { StudentRow } from '~/components/components'

const mapStateToProps = (state, ownProps) => {
	return {
		students: state.students,
		showLoading: state.ui.showLoading
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
		if (this.props.showLoading) {
			var spinner = (
				<div style={styles.loading}>
					<span style={styles.loading.span}>Loading...</span>
				</div>
			)
		}

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
				{spinner}
				{rows}
			</div>
		)
	}
}

const styles = {
	container: {
		padding: '10px 15px 0 15px',
		position: 'relative'
	},
	header: {
		padding: '10px 0 5px 0',
		textAlign: 'center',
	},
	deleteAll: {
		position: 'absolute',
		right: '15px',
		top: '15px',
		height: '34px',
		fontSize: '14px',
		padding: '0px 6px',
	},
	listHeader: {
		background: '#9393a0',
		padding: '5px 0',

		id: {
			display: 'inline-block',
			paddingLeft: '6px',
			width: '40%'
		},
		name: {
			display: 'inline-block',
			width: '40%'
		},
		actions: {
			display: 'inline-block',
			width: '20%'
		}
	},
	loading: {
		textAlign: 'center',
		width: '100%',
		position: 'absolute',
		span: {
			display: 'inline-block',
			margin: '5px 0 0 0',
			background: 'yellow',
			borderRadius: '4px',
			padding: '3px 20px',
			opacity: '0.7'
		}
	}

}
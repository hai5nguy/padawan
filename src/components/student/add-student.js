import React from 'react'
import Radium from 'radium'

import { Student } from '~/actions/actions'

@Radium
export default class AddStudent extends React.Component {
	constructor(props) {
		super(props)

		this.nameChanged = this.nameChanged.bind(this)
		this.nameKeyDown = this.nameKeyDown.bind(this)
		this.submitClick = this.submitClick.bind(this)

		this.state = {
			name: ''
		}
	}
	nameChanged(e) {
		this.setState({
			name: e.currentTarget.value
		})
	}
	nameKeyDown(e) {
		if (e.keyCode === 13) {
			this.submitClick()
		}
	}
	submitClick() {
		var { name } = this.state
		if (!name.trim()) return

		Student.create({ name })
		this.setState({
			name: ''
		})
	}

	render() {
		return (
			<div style={styles.container}>
				<div style={styles.inner}>
					<h2 style={styles.label}>Student Creation</h2>
					<div style={styles.name}>
						<span style={styles.nameLabel}>Name</span>
						<input style={styles.nameBox} type="textbox" value={this.state.name} onChange={this.nameChanged} onKeyDown={this.nameKeyDown} />
					</div>
					<button style={styles.submit} onClick={this.submitClick}>Submit</button>
				</div>
			</div>
		)
	}
}

const styles = {
	container: {
		// background: '#E0E0E0',
		padding: '15px'
	},
	inner: {
		textAlign: 'center',
		padding: '15px 15px 25px 15px',
		border: '1px solid #2e6680',
		borderRadius: '3px'

	},
	label: {
		paddingBottom: '10px',
		borderRadius: '3px',
	},

	name: {
		display: 'inline-block',
		borderRadius: '4px',
		width: 'auto',
		margin: 'auto',
		verticalAlign: 'bottom'
	},


	nameLabel: {
		borderTop: '1px solid #ccc',
		borderLeft: '1px solid #ccc',
		borderBottom: '1px solid #ccc',
		borderRadius: '4px 0px 0px 4px',
		height: '34px',
		display: 'inline-block',
		background: '#eeeeee',
		fontSize: '14px',
		padding: '0px 6px',
		lineHeight: '34px'
	},

	nameBox: {
		borderTop: '1px solid #ccc',
		borderRight: '1px solid #ccc',
		borderBottom: '1px solid #ccc',
		borderLeft: 'none',
		borderRadius: '0px 4px 4px 0px',
		height: '34px',
		verticalAlign: 'bottom',
		fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
		fontSize: '14px',
		paddingLeft: '3px',
		color: '#555',
	},
	submit: {
		height: '34px',
		// background: '#eeeeee',
		fontSize: '14px',
		padding: '0px 6px',
		marginLeft: '6px',

		// borderRadius: '4px',
		// border: 'none'
	}
}
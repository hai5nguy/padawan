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
	deleteAllClick() {
		Student.deleteAll()
	}

	render() {
		return (
			<div style={styles.container}>
				add student
				<input type="textbox" value={this.state.name} onChange={this.nameChanged} onKeyDown={this.nameKeyDown} />
				<button onClick={this.submitClick}>Submit</button>
				<button onClick={this.deleteAllClick}>Delete All Students</button>
			</div>
		)
	}
}

const styles = {
	container: {
		background: '#9487F3'
	}
}
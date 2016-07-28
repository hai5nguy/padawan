import React from 'react'
import Radium from 'radium'

import './editable-field.sass'

export default class EditableField extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			editing: false,
			value: props.value
		}

		this.fieldClick = this.fieldClick.bind(this)
		this.fieldBlur = this.fieldBlur.bind(this)
		this.fieldChange = this.fieldChange.bind(this)
		this.fieldKeyDown = this.fieldKeyDown.bind(this)

	}
	fieldClick() {
		this.setState({
			editing: !this.state.editing
		})
	}
	fieldBlur() {
		this.setState({
			editing: false
		})
		if (typeof this.props.onDone === 'function') {
			if (this.props.value !== this.state.value) {
				this.props.onDone(this.state.value)
			}
		}
	}
	fieldChange(e) {
		this.setState({
			value: e.target.value
		})
	}
	fieldKeyDown(e) {
		if (e.keyCode === 13) {
			this.fieldBlur()
		}
	}
	componentDidUpdate() {
		if (this.state.editing) {
			this.refs.textbox.focus()
		}
	}

	render() {
		if (this.state.editing) {
			return (
				<input className="field-box"
					type="textbox"
					ref="textbox"
					value={this.state.value}
					onBlur={this.fieldBlur}
					onChange={this.fieldChange}
					onKeyDown={this.fieldKeyDown}
				/>
			)
		} else {
			return (
				<span className="field-span"
					onClick={this.fieldClick}>
					{this.state.value}
				</span>
			)
		}
	}
}


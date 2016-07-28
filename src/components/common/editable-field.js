import React from 'react'
import Radium from 'radium'

@Radium
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
				<input type="textbox"
					style={styles.textbox}
					ref="textbox"
					value={this.state.value}
					onBlur={this.fieldBlur}
					onChange={this.fieldChange}
					onKeyDown={this.fieldKeyDown}
				/>
			)
		} else {
			return (
				<span style={styles.field}
					onClick={this.fieldClick}>
					{this.state.value}
				</span>
			)
		}
	}
}

const styles = {
	field: {
		height: '34px',

		display: 'inline-block',
		// width: '100px',
		marginLeft: '5px',
		verticalAlign: 'center',
		marginRight: '5px',
		':hover': {
			border: '1px solid blue',
			borderRadius: '4px'
		}
	},
	textbox: {
		verticalAlign: 'center',
		height: '34px',
		fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
		fontSize: '14px',
		paddingLeft: '3px',
		color: '#555',
	}
}
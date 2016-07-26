import React from 'react'
import { Style, StyleRoot } from 'radium'

export default class Root extends React.Component {
	render() {
		return (
			<StyleRoot>
				<Style rules={{
					'*': {
						boxSizing: 'border-box',
						margin: '0px',
						padding: '0px'
					}
				}} />
				{this.props.children}
			</StyleRoot>
		)
	}
}


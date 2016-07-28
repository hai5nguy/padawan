import React from 'react'
import Radium from 'radium'

import { AddStudent, StudentList } from '~/components/components'

@Radium
export default class Main extends React.Component {
	render() {
		return (
			<div style={styles.main}>
				<div style={styles.header}>
					<h1 style={styles.title}>Awesome Student Management System</h1>
					<p style={styles.subtitle}>...a humble CRUD web application</p>
				</div>
				<AddStudent />
				<StudentList />
			</div>
		)
	}
}

const styles = {
	main: {
		fontFamily: 'myriad-pro, sans-serif'
	},
	header: {
		background: '#127CC0',
		color: '#fff'
	},
	title: {
		padding: '10px 0px 10px 15px'
	},
	subtitle: {
		padding: '0px 0px 20px 15px',
		opacity: '0.5'
	}
}